#!/usr/bin/env python3
"""
Envia notificacao de novos artigos para o Telegram.
Executado diariamente via GitHub Actions.
"""

import os
import re
import urllib.parse
import urllib.request
from datetime import datetime, timedelta

# Credenciais vindas de variaveis de ambiente (definidas nos secrets do repo)
TELEGRAM_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")
TELEGRAM_CHAT_ID = os.getenv("TELEGRAM_CHAT_ID", "-1003567265869")

if not TELEGRAM_TOKEN:
    print("❌ Erro: TELEGRAM_BOT_TOKEN nao configurada")
    raise SystemExit(1)

# Ler posts
try:
    with open("src/data/posts.ts", "r", encoding="utf-8") as f:
        content = f.read()
except FileNotFoundError:
    print("❌ Erro: arquivo src/data/posts.ts nao encontrado")
    raise SystemExit(1)

# Data de hoje no fuso de Sao Paulo (UTC-3) com abreviacao PT-BR
agora = datetime.utcnow() - timedelta(hours=3)
month_pt = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
today = f"{agora.day:02d} {month_pt[agora.month - 1]} {agora.year}"
print(f"🔍 Procurando por posts de: {today}")

# Busca blocos que contenham a data de hoje
post_pattern = (
    r"\{\s*slug:\s*['\"]([^'\"]+)['\"]\s*,\s*title:\s*['\"]([^'\"]+)['\"]\s*,\s*"
    r"excerpt:\s*['\"]([^'\"]+)['\"]\s*,.*?date:\s*['\"]" + re.escape(today) + r"['\"]"
)

matches = []
for m in re.finditer(post_pattern, content, re.DOTALL):
    start = m.start()
    end = content.find("},", start)
    if end == -1:
        end = m.end()
    snippet = content[start:end]
    if "draft: true" in snippet:
        continue
    matches.append(m.groups())

if not matches:
    print(f"ℹ️ Nenhum post encontrado para {today}")
    raise SystemExit(0)

print(f"✅ {len(matches)} post(s) encontrado(s) para {today}")

for slug, title, excerpt in matches:
    excerpt = excerpt.strip().replace("\n", " ")[:150]

    message = (
        "📰 <b>Novo artigo no Blog DividAI!</b>\n\n"
        f"📝 <b>{title}</b>\n"
        f"💡 {excerpt}...\n"
        f"📎 <b>Leia:</b> https://blog.dividai.com/post/{slug}\n\n"
        "#DividAI #Blog"
    )

    url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
    data = urllib.parse.urlencode(
        {"chat_id": TELEGRAM_CHAT_ID, "text": message, "parse_mode": "HTML"}
    ).encode("utf-8")

    try:
        urllib.request.urlopen(url, data, timeout=5)
        print(f"✅ Artigo '{title}' notificado no Telegram")
    except Exception as exc:  # noqa: BLE001
        print(f"❌ Erro ao notificar: {exc}")
