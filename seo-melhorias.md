# Melhorias de SEO para o Blog DividAI

## 1. Performance e Core Web Vitals (Velocidade)
*   **Scripts de Anúncios e Analytics:** No `layout.tsx`, mudar o carregamento do AdSense de `afterInteractive` para `lazyOnload`. Isso fará com que os anúncios só carreguem quando o site estiver ocioso, acelerando a percepção de carregamento (LCP).
*   **Imagens e Formatos:** Garantir que o componente `ImageWithModal` utilize o componente nativo `next/image` para converter e comprimir as imagens dos posts para WebP automaticamente.

## 2. Melhorias no Schema Markup (Dados Estruturados)
*   **Logo da Empresa:** Alterar a imagem do Schema `Organization` no `layout.tsx` (atualmente `favicon-transparent.png`). O ideal é uma imagem retangular/quadrada oficial de pelo menos 112x112 pixels.
*   **Datas de Atualização:** Sempre que atualizar um artigo, garantir que a propriedade `updatedAt` seja preenchida para mostrar ao Google que o conteúdo é "fresco".

## 3. Estratégia de Conteúdo e UX
*   **Lincagem Interna Contextual:** Adicionar links orgânicos para outros posts da DividAI diretamente dentro dos parágrafos dos seus textos Markdown.
*   **Tags Alt Descritivas:** Revisar todas as imagens nos arquivos Markdown para garantir que tenham descrições exatas de acessibilidade (ex: `![Gráfico mostrando a diferença entre CDI e Poupança](grafico.jpg)`).
*   **Otimização dos "Excerpts" (Descrições):** Manter as descrições dos posts (`excerpt`) entre 120 e 155 caracteres e, se possível, incluir uma chamada para ação (Call to Action).

## 4. Configuração Externa (Obrigatório)
*   **Google Search Console:** Garantir que a variável de ambiente `GOOGLE_SITE_VERIFICATION` está configurada corretamente na hospedagem e enviar o link do Sitemap (`https://dividai.com/sitemap.xml`) no painel do Google Search Console.
