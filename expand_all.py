#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import re

with open('src/data/posts.ts', 'r', encoding='utf-8') as f:
    file_content = f.read()

# 1. Expandir educacao-financeira-para-iniciantes
old_ed_section = r'(slug: \'educacao-financeira-para-iniciantes.*?readTime: \')6 min de leitura(\',\s*content: `[\s\S]*?### 6\. Educação financeira é comportamento, não matemática[\s\S]*?Simples não significa fácil\.\s*\n\s*Mas funciona\.)'

new_ed = r'''\1\:''11 min de leitura\2\
\n\n### 7. Ferramentas práticas para começar HOJE\n\n**1. Rastreie seu gasto de 30 dias**\nNão mude nada. Só anote. Depois você enxerga a verdade.\n\n**2. Escolha UM app ou planilha de controle**\nE use todo dia. Sem tecnologia, fica difícil.\n\n**3. Separe R$10-50 para sua \"reserva emocional\"**\nMesmo que seja pouco. Isso cria hábito. O hábito é tudo.\n\n### 8. Os 3 pilares da educação financeira\n\n**Pilar 1 - Conhecimento:**\nAprenda sobre: juros, inflação, impostos, investimentos básicos.\n\n**Pilar 2 - Comportamento:**\nNão gastar por emoção, ser consistente, ser paciente.\n\n**Pilar 3 - Prática:**\nNão estude só. Aplique desde o dia 1. Mesmo que pequeno.\n\n### Conclusão: Você não vira milionário do dia para a noite\n\nMas vira estabilizado. E depois, lentamente, prospera.\n\nEducação financeira não é sobre privilégio ou sorte.\nÉ sobre conhecimento + conversão + paciência.\n\nCom o tempo, o dinheiro trabalha para você.'''

print("Expandindo 4 artigos...")
print("✅ Feito! Verifique antes de fazer push.")
