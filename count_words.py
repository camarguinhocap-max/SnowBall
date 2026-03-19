import re

# Ler o arquivo posts.ts
with open('src/data/posts.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Extrair todos os conteúdos dos posts (entre backticks após 'content:')
pattern = r'content:\s+`\n(.*?)\n        `'
matches = re.findall(pattern, content, re.DOTALL)

total_words = 0
for post_content in matches:
    # Contar palavras
    words = len(re.findall(r'\w+', post_content, re.UNICODE))
    total_words += words

print(f'Total de posts: {len(matches)}')
print(f'Total de palavras: {total_words:,}')
if matches:
    print(f'Média por post: {total_words // len(matches):,}')
