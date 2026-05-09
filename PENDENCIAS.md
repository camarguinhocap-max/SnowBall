# Lista de Pendencias - Blog DividAI

## Regras e Lembretes
- **Links da Amazon**: Todo link da Amazon precisa conter o codigo `ofertaspri0ee`. Se nao tiver, nao gera comissao. Conferir antes de publicar.

## Aprovacao do Google AdSense (Em Progresso)
- [x] **Desabilitar aba Shop**: Ocultada do menu para aprovacao (link comentado em `src/app/layout.tsx`).
- [x] **Adicionar mais conteudo**: +3 novos posts (orcamento, reserva de emergencia, sair de dividas). Total: 12 posts.
- [x] **Corrigir vulnerabilidades de seguranca**: Atualizado nodemailer para v8.0.1.
- [x] **Deploy no Vercel**: Site online em producao em `dividai.com`.
- [x] **Remover redirecionamentos**: Criado `vercel.json` e corrigido `metadataBase` para `https://dividai.com`.
- [x] **Validar fix no Search Console**: Acionado "VALIDATE FIX" nas 3 paginas com redirect.
- [x] **Aplicar noindex nas paginas auxiliares**: `/search` e `/shop` com `noindex,follow`; `/shop` saiu do sitemap.
- [ ] **Aguardar reprocessamento**: 24-48h para o Google remover o status "Page with redirect" das 3 paginas.
- [ ] **Aguardar indexacao completa**: 1-2 semanas para as 11+ paginas ficarem indexadas (status: "Discovered - currently not indexed").
- [ ] **Reaplicar no AdSense**: Quando as 12 paginas estiverem indexadas, remover codigo antigo, inserir novo snippet do AdSense e aguardar revisao (2-7 dias).
- [ ] **Verificacoes finais**: PageSpeed, mobile-friendly, sem links quebrados.
- [ ] **Reativar aba Shop**: Apos aprovacao do AdSense, descomentar o link em `src/app/layout.tsx`.

### Agendamento e acoes proximas
- [ ] **Revisar indexacao no Search Console**: 07/04/2026 — checar se as 12 paginas estao indexadas; se sim, reaplicar AdSense e liberar Shop.
- [ ] **Snippet AdSense pronto** (trocar `data-ad-slot` pelo ID gerado no painel):

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1543510171277537" crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-1543510171277537"
     data-ad-slot="SEU_SLOT"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
```

- [ ] **Checklist PageSpeed/mobile antes de reaplicar**:
  1) Lighthouse mobile/desktop >= 90 (olhar CLS/LCP).
  2) Imagens otimizadas (Next/Image ou `width/height` fixos) e fontes locais.
  3) Scripts nao criticos com `defer` ou carregados `afterInteractive`; sem bloqueio de renderizacao.
  4) Core Web Vitals no GA4 ok (sem picos de INP/CLS).
  5) Links internos cobrindo todos os posts + sitemap atualizado.

## Futuras Integracoes
- [ ] **Automacao Redes Sociais (Make.com)**: Conectar o RSS (`https://blog.dividai.com/api/feed`) ao Instagram e X para publicar novos artigos automaticamente.
- [x] **Automacao de Revalidacao de Posts (Vercel Cronjob)**: Criada rota `/api/cron` e configurado `vercel.json` para revalidar a homepage e posts todo dia à meia-noite (03:00 UTC).
- [ ] **Automacao de Precos da Loja (Vercel Cronjob)**: Migrar `shop.ts` para Supabase e criar cronjob que atualiza precos via APIs Shopee (AppID 18337900933), Amazon (tag ofertaspri0ee-20) e Mercado Livre (tag ofertasprimeml).
- [ ] **Contador de Views Real (Supabase)**: Armazenar `views` por slug e usar para ordenar artigos em dashboard em vez de lista estatica.
