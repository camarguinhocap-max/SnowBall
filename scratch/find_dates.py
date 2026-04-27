import re

with open('src/data/posts.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

slugs = ['negocios-lucrativos-ia-2026', 'reforma-tributaria-2026-investidor', 'psicologia-da-riqueza-2026', 'guia-definitivo-seguros-2026']

for i, line in enumerate(lines):
    for slug in slugs:
        if f"slug: '{slug}'" in line:
            # Found the slug, now look for the next date line
            for j in range(i, i + 10):
                if 'date:' in lines[j]:
                    print(f"Slug: {slug} | Line: {j+1} | Content: {lines[j].strip()}")
                    break
