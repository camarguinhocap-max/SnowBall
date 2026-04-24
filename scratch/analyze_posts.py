import re
import os

file_path = 'src/data/posts.ts'
if not os.path.exists(file_path):
    print("File not found")
    exit()

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Regular expression to match content blocks
# We search for the content property and its backtick-enclosed string
contents = re.findall(r'content:\s*`([\s\S]*?)`', content)
slugs = re.findall(r'slug:\s*\'(.*?)\'', content)

print(f"Analisando {len(contents)} artigos...")

samples = [0, 10, 20, 30, 40, 50, 60, 70, 80, len(contents)-1]
for i in samples:
    if i < len(contents):
        text = contents[i]
        word_count = len(text.split())
        has_h2 = '## ' in text
        has_h3 = '### ' in text
        has_list = '* ' in text or '- ' in text
        print(f"Slug: {slugs[i]}")
        print(f"  - Palavras: {word_count}")
        print(f"  - Estrutura: H2:{has_h2}, H3:{has_h3}, Listas:{has_list}")
        print("-" * 30)
