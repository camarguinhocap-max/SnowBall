# Lista de Pendências - Blog DividAI

## Regras e Lembretes
- **Links da Amazon**: Todo e qualquer link da Amazon precisa conter, em algum lugar, o código `ofertaspri0ee`. Se não tiver esse código, o link não está afiliado e a comissão não cai na conta. Sempre checar isso antes de publicar links.

## Aprovação do Google AdSense (Em Progresso)
- [x] **Desabilitar aba Shop**: Ocultada do menu para aprovação (link comentado em `src/app/layout.tsx`).
- [x] **Adicionar mais conteúdo**: +3 novos posts adicionados (orçamento, reserva de emergência, sair de dívidas). Total: 12 posts.
- [x] **Corrigir vulnerabilidades de segurança**: Atualizado nodemailer para v8.0.1.
- [x] **Deploy no Vercel**: Site online em produção em `dividai.com`.
- [x] **Remover redirecionamentos**: Criado `vercel.json` e corrigido `metadataBase` para `https://dividai.com`.
- [x] **Validar fix no Search Console**: Clicado em "VALIDATE FIX" para reavaliar as 3 páginas com redirect.
- [ ] **Aguardar reprocessamento**: 24-48 horas para Google remover o status "Page with redirect" das 3 páginas.
- [ ] **Aguardar indexação completa**: 1-2 semanas para todas as 11 páginas serem indexadas (status: "Discovered - currently not indexed").
- [ ] **Reaplicar no AdSense**: Uma vez indexadas as 12 páginas, remover código antigo, inserir novo código do AdSense, e aguardar revisão (2-7 dias).
- [ ] **Verificações finais**: PageSpeed, mobile-friendly, sem links quebrados.
- [ ] **Reativar aba Shop**: Após aprovação do AdSense, descomente o link em `src/app/layout.tsx`.

## Futuras Integrações
- [ ] **Automação Redes Sociais (Make.com)**: Conectar o RSS Feed do Blog (`https://blog.dividai.com/api/feed`) ao *Instagram* e ao *X (Twitter)* usando a plataforma Make.com. O objetivo é que, ao lançarmos novos artigos via código, a própria ferramenta Make detecte e publique chamadas ou resumos com o link final automaticamente nas redes oficiais.
- [ ] **Automação de Preços da Loja (Vercel Cronjob)**: Migrar a base de dados do `shop.ts` para o Supabase e criar um Vercel Cronjob que dispare de madrugada um robô. Esse robô usará as credenciais de API da Shopee (AppID: 18337900933), da Amazon (tag: ofertaspri0ee-20) e do Mercado Livre (tag: ofertasprimeml) para puxar os preços exatos e atualizar os dados no Supabase.
- [ ] **Contador de Views Real (Supabase)**: Migrar a listagem de artigos para receber dados do banco (Supabase). Criar uma tabela simples que armazene os `views` de cada slug, e incrementar via API Route ou Server Action ao carregar o artigo. Substituir a ordenação manual/estática por ordenação real no Dashboard.
