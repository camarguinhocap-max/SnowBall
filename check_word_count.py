import os
import re
import sys

# Configure standard output to use UTF-8 if possible, or fallback safely
if sys.platform.startswith('win'):
    import codecs
    sys.stdout = codecs.getwriter('utf-8')(sys.stdout.buffer, 'replace')
    sys.stderr = codecs.getwriter('utf-8')(sys.stderr.buffer, 'replace')

posts_dir = "src/data/posts"
if not os.path.isdir(posts_dir):
    print(f"Error: directory {posts_dir} not found.")
    sys.exit(1)

post_files = [f for f in os.listdir(posts_dir) if f.endswith('.ts')]

total_words = 0
below_minimum = []
above_maximum = []

MIN_WORDS = 770
MAX_WORDS = 2500

slug_pat = re.compile(r"slug:\s*['\"]([^'\"]+)['\"]")
title_pat = re.compile(r"title:\s*['\"]([^'\"]+)['\"]")
content_pat = re.compile(r"content:\s*`([\s\S]*?)`")

for file in post_files:
    path = os.path.join(posts_dir, file)
    with open(path, 'r', encoding='utf-8') as f:
        content_str = f.read()
    
    slug_m = slug_pat.search(content_str)
    title_m = title_pat.search(content_str)
    content_m = content_pat.search(content_str)
    
    slug = slug_m.group(1) if slug_m else file.replace('.ts', '')
    title = title_m.group(1) if title_m else "Unknown Title"
    
    if content_m:
        post_content = content_m.group(1).strip()
        words = len(re.findall(r'\w+', post_content, re.UNICODE))
    else:
        words = 0
        
    total_words += words
    
    if words < MIN_WORDS:
        below_minimum.append((slug, title, words))
    elif words > MAX_WORDS:
        above_maximum.append((slug, title, words))

total_posts = len(post_files)
ok_posts = total_posts - len(below_minimum) - len(above_maximum)

print(f"Total de posts: {total_posts}")
print(f"Total de palavras: {total_words:,}")
print(f"\n[OK] Posts OK (770-2500 palavras): {ok_posts}")

if below_minimum:
    print(f"\n[!] Posts ABAIXO de {MIN_WORDS} palavras ({len(below_minimum)}):")
    for slug, title, words in sorted(below_minimum, key=lambda x: x[2]):
        print(f"   - {slug}: {words} palavras (Titulo: '{title}')")

if above_maximum:
    print(f"\n[!] Posts ACIMA de {MAX_WORDS} palavras ({len(above_maximum)}):")
    for slug, title, words in sorted(above_maximum, key=lambda x: x[2], reverse=True):
        print(f"   - {slug}: {words} palavras (Titulo: '{title}')")
