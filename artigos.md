# Regras de Criação de Artigos — Blog DividAI (dividai.com)

## 1. Categorias Permitidas

Lista fechada — não criar novas categorias sem decisão explícita:

- Renda Variável
- Planejamento Financeiro
- Educação Financeira
- Economia
- Imóveis
- Renda Extra e Negócios
- Cripto e Alternativos
- Finanças Pessoais
- Impostos e Legislação
- Investimentos
- Aposentadoria
- Mentalidade

---

## 2. Estrutura de Arquivos (por artigo)

Cada artigo exige **3 ações obrigatórias**:

**a) Meta file** → `src/data/posts/{slug}.ts`
```ts
export const post: PostMeta = {
  slug: 'nome-do-artigo-2026',
  title: 'Título otimizado para SEO',
  excerpt: 'Descrição de 150-160 caracteres focada em palavra-chave real',
  tags: ['tag1', 'tag2', 'tag3'],  // mínimo 5 tags relevantes
  category: 'Categoria da lista acima',
  date: 'DD Mmm YYYY',
  readTime: 'X min de leitura',
  image: '/images/{slug}.png',
};
```

**b) Content file** → `src/data/posts-content/{slug}.ts`

**c) Registro** → adicionar import + entrada no array `allPosts` em `src/data/posts.ts`

---

## 3. Conteúdo do Artigo

### Tamanho
- **Mínimo: 4.000 palavras**
- **Ideal: 4.000–6.000 palavras**
- Artigos longos e detalhados têm muito mais chance de indexação e ranqueamento no Google
- O `readTime` deve refletir o tamanho real (4.000 palavras ≈ 20 min de leitura)

### Estrutura obrigatória
```
[Introdução — sem título, vai direto no texto]
## H2 principal 1
### H3 subtópico (quando necessário)
## H2 principal 2
![descrição da imagem](/images/{slug}-2.png)
## H2 principal 3
## H2 principal 4
## H2 principal 5
## Conclusão
```

### Elementos obrigatórios
- Pelo menos **2 tabelas** por artigo (comparativos, dados, exemplos)
- Pelo menos **3 listas** com bullet points
- **Números e dados reais** do mercado brasileiro (taxas, percentuais, valores atualizados)
- **Exemplos práticos** com valores em R$ para o leitor se identificar
- Seções com **perguntas no H2 ou H3** (ex: "Vale a pena investir em X?") — gera FAQ schema automático no Google
- **Mínimo 6 seções H2** para cobrir o tema com profundidade

---

## 4. Imagens

### Regras gerais
- **2 imagens por artigo**: principal (`{slug}.png`) e meio do artigo (`{slug}-2.png`)
- **Tamanho: 1200x630 pixels, proporção 16:9, horizontal**
- **Gerador: Google Flow**
- **Estilo: infográfico** com dados, listas, ícones e texto visível — não minimalista
- **Todo texto na imagem deve estar em português** — sem inglês, sem mistura
- Extensão padrão: `.png` (evitar `.jpeg` para manter consistência)

### Imagem principal (`{slug}.png`)
- Aparece no card da home, na página do artigo e no compartilhamento social
- Deve comunicar o tema do artigo com clareza em 2 segundos

### Imagem do meio (`{slug}-2.png`)
- Inserida no markdown do content file aproximadamente na metade do texto
- Sintaxe: `![descrição da imagem](/images/{slug}-2.png)`
- Deve aprofundar um dado ou comparativo do artigo

### Prompt padrão para Google Flow
> Imagem de 1200x630 pixels, proporção 16:9, horizontal. Infográfico com fundo azul marinho escuro. [descrever conteúdo]. Todo texto em português. Estilo flat profissional, fontes grandes e legíveis, sem efeitos neon.

### Commit das imagens
- **Nunca commitar as imagens separado do post** — sempre no mesmo commit
- Colocar em `public/images/` antes de pedir o commit

---

## 5. Calendário de Publicação

- **Sem dois dias consecutivos da mesma categoria**
- Ao criar blocos de 10 artigos: usar as 5 categorias principais do blog, 2 artigos cada, intercalados
- Data do artigo = data em que deve aparecer no site (`date: 'DD Mmm YYYY'`)
- Artigos com data futura ficam ocultos até a data chegar

---

## 6. SEO — Títulos, Excerpts e Tags

### Título
- Incluir a palavra-chave principal no início do título
- Formato ideal: `[Palavra-chave]: [benefício ou resultado] em [ano]`
- Exemplo: "Planejamento Tributário para Pessoa Física: Como Reduzir Impostos Legalmente em 2026"
- Máximo 60 caracteres para não cortar no Google

### Excerpt (meta description)
- 150–160 caracteres
- Contém a palavra-chave principal
- Descreve o benefício prático do artigo

### Tags
- Mínimo 5 tags por artigo
- Em português, sem acentos nos slugs internos
- Incluir variações da palavra-chave principal (singular, plural, com e sem artigo)

---

## 7. Edição de Artigos Existentes

Sempre que editar o conteúdo ou meta de um artigo já publicado:
- Adicionar `updatedAt: 'DD Mmm YYYY'` no meta file com a data da edição
- Aparece automaticamente como "Atualizado em X" no header do artigo

---

## 8. Padrão de Slugs

- Formato: `kebab-case-com-ano-no-final`
- Exemplos: `etfs-na-b3-como-diversificar-2026`, `selic-em-queda-renda-fixa-2026`
- Sem acentos, sem caracteres especiais
- Ano sempre no final (`-2026`, `-2027`)
- O slug não muda após publicação — afeta SEO e indexação

---

## 9. Autor

- Nome editorial: **Lucas Bianchi**
- Bio: investidor há 3 anos, entusiasta de tecnologia e dividendos, de Curitiba
- Missão: ajudar brasileiros a não dependerem do INSS
- Nome real do dono: Josmair Camargo (não expor publicamente por enquanto)

---

## 10. Checklist antes do Commit

- [ ] Meta file criado com todos os campos preenchidos
- [ ] Content file criado com mínimo 4.000 palavras
- [ ] Imagem do meio inserida no markdown com path correto (`/images/{slug}-2.png`)
- [ ] Post registrado no `src/data/posts.ts` (import + array)
- [ ] Imagens em `public/images/` com extensão `.png`
- [ ] Tudo no mesmo commit — post + imagens juntos
