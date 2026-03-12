#!/usr/bin/env python3
"""
Script para enviar notificação automática de novo artigo para Telegram
com o padrão correto (título, resumo, link, hashtags)
"""

import re
from datetime import datetime, timedelta
import urllib.request
import urllib.parse

# Ler o arquivo posts.ts
with open('src/data/posts.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Buscar posts com a data de hoje (ajustado para São Paulo -3:00)
# GitHub Actions roda em UTC, então subtraímos 3 horas para BR
agora = datetime.utcnow() - timedelta(hours=3)
today = agora.strftime('%d %b %Y')
print(f"Procurando por posts de: {today}")

# Regex para encontrar posts
post_pattern = r'\{\s*slug:\s*[\'"]([^\'"]+)[\'"]\s*,\s*title:\s*[\'"]([^\'"]+)[\'"]\s*,\s*excerpt:\s*[\'"]([^\'"]+)[\'"]\s*,.*?date:\s*[\'"]' + re.escape(today) + r'[\'"]'

matches = re.findall(post_pattern, content, re.DOTALL)

if not matches:
    print(f"❌ Nenhum post encontrado para {today}")
    exit(0)

print(f"✅ {len(matches)} post(s) encontrado(s) para {today}")

# Enviar para Telegram
TELEGRAM_TOKEN = "8748228261:AAH8GUPjj7eoriI0KLy1zJV38EZL3d92Msg"
TELEGRAM_CHAT_ID = "-1003567265869"

for slug, title, excerpt in matches:
    # Limpar excerpt (remover quebras de linha)
    excerpt = excerpt.strip().replace('\n', ' ')[:150]
    
    message = f"""📰 <b>Novo artigo no Blog DividAI!</b>

📝 <b>{title}</b>
💡 {excerpt}...
🔗 <b>Leia:</b> https://blog.dividai.com/post/{slug}

#DividAI #Blog"""

    url = 'https://api.telegram.org/bot' + TELEGRAM_TOKEN + '/sendMessage'
    data = urllib.parse.urlencode({
        'chat_id': TELEGRAM_CHAT_ID,
        'text': message,
        'parse_mode': 'HTML'
    }).encode('utf-8')

    try:
        response = urllib.request.urlopen(url, data, timeout=5)
        print(f"✅ Artigo '{title}' notificado no Telegram")
    except Exception as e:
        print(f"❌ Erro ao notificar: {e}")
