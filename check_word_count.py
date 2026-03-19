import re

# Ler o arquivo posts.ts
with open('src/data/posts.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Extrair slug, título e conteúdo dos posts
# Pattern para encontrar slug, title e content
pattern = r"slug:\s*'([^']+)'.*?title:\s*'([^']+)'.*?content:\s+`\n(.*?)\n        `"
matches = re.findall(pattern, content, re.DOTALL)

total_words = 0
below_minimum = []
above_maximum = []

MIN_WORDS = 770
MAX_WORDS = 2500

for slug, title, post_content in matches:
    # Contar palavras
    words = len(re.findall(r'\w+', post_content, re.UNICODE))
    total_words += words
    
    if words < MIN_WORDS:
        below_minimum.append((slug[:40], title[:40], words))
    elif words > MAX_WORDS:
        above_maximum.append((slug[:40], title[:40], words))

print(f'Total de posts: {len(matches)}')
print(f'Total de palavras: {total_words:,}')
print(f'\n✅ Posts OK (770-2500 palavras): {len(matches) - len(below_minimum) - len(above_maximum)}')
print(f'\n❌ Posts ABAIXO de 770 palavras ({len(below_minimum)}):')
for slug, title, words in below_minimum:
    print(f'   - {slug}: {words} palavras')

if above_maximum:
    print(f'\n⚠️  Posts ACIMA de 2500 palavras ({len(above_maximum)}):')
    for slug, title, words in above_maximum:
        print(f'   - {slug}: {words} palavras')
