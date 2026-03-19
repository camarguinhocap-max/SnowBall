# Google Search Console & GA4 Setup Guide

## 📋 Pré-requisitos
- Conta Google ativa
- Acesso ao domínio `blog.dividai.com`
- Google Analytics 4 já configurado com ID `G-M6027Q5HVV`

---

## 🔍 PASSO 1: Configurar Google Search Console

### 1.1 Acessar GSC
1. Ir para https://search.google.com/search-console
2. Clicar em "Adicionar propriedade"
3. Selecionar "Domínio"
4. Inserir `blog.dividai.com`

### 1.2 Verificar Domínio (DNS)
Google oferecerá um token de verificação DNS como:
```
google-site-verification=XXXXXXXXXXXXXXXXXXXXX
```

**Opções de verificação:**

#### Opção A: Via Meta Tag (Mais Fácil)
1. Já implementado no `src/app/layout.tsx` via `verification.google`
2. Adicionar no arquivo `.env.local`:
```env
GOOGLE_SITE_VERIFICATION=seu_token_aqui
```
3. Publicar mudança
4. Clicar "Verificar" em GSC

#### Opção B: Via DNS (Recomendado)
1. Acessar seu provedor DNS (Vercel, Cloudflare, etc)
2. Adicionar registro TXT:
```
Nome: blog.dividai.com
Tipo: TXT
Valor: google-site-verification=XXXXXXXXXXXXXXXXXXXXX
```
3. Aguardar 5-10 minutos
4. Clicar "Verificar" em GSC

#### Opção C: Via File Upload
1. Fazer download do arquivo de verificação
2. Publicar em `.well-known/google-site-verification.html`
3. Clicar "Verificar"

### 1.3 Após Verificação ✅
1. Esperar indexação inicial (24-48h)
2. Submeter Sitemap: https://blog.dividai.com/sitemap.xml
3. Verificar "Cobertura" para erros de indexação
4. Revisar "Performance" para CTR e posição média

---

## 📊 PASSO 2: Conectar GSC com GA4

### 2.1 Link GSC → GA4
1. Em GA4, ir para **Admin** > **Data Display** > **Google Search Console Link**
2. Clicar em "Link"
3. Selecionar propriedade `blog.dividai.com`
4. Confirmar

### 2.2 Verificar Dados
1. Ir para **Admin** > **Data Sources** > **Search Console**
2. Dados aparecem em Reports > **Acquisition** > **Google Organic Search**

---

## 🎯 PASSO 3: Configurar Eventos & Metas em GA4

### 3.1 Eventos Já Implementados
✅ `newsletter_subscribe` - Inscrição na newsletter  
✅ `post_view` - Visualização de artigo  
✅ `scroll_milestone` - Scroll 25%, 50%, 75%, 100%  
✅ `time_on_page` - Tempo total na página  
✅ `internal_link_click` - Cliques em links internos  
✅ `engagement_30s` - Engagement após 30s  
✅ `engagement_2m` - Engagement após 2 minutos  

### 3.2 Criar Metas de Conversão
1. Em GA4, ir para **Admin** > **Conversions**
2. Clicar em "Create Conversion"

**Meta 1: Newsletter Signup**
```
Name: Newsletter Signup
Event Name: newsletter_subscribe
Conversion Status: ✅ Enabled
```

**Meta 2: Post Engagement**
```
Name: High Engagement
Event Name: scroll_milestone
Event Parameter: scroll_percent = 75
Conversion Status: ✅ Enabled
```

**Meta 3: Time on Page**
```
Name: Time on Page > 2min
Event Name: time_on_page
Event Parameter: seconds >= 120
Conversion Status: ✅ Enabled
```

### 3.3 Debug Events
1. Em GA4, abrir **Admin** > **DebugView**
2. Ativar modo Debug em seu navegador
3. Acessar site e validar eventos aparecem

---

## 🔗 PASSO 4: Monitorar Rich Results

### 4.1 Testar Schema Markup
1. Ir para https://search.google.com/test/rich-results
2. Inserir URL: `https://blog.dividai.com/post/seu-post-aqui`
3. Validar:
   - ✅ BlogPosting
   - ✅ BreadcrumbList
   - ✅ Article

### 4.2 Validar em GSC
1. Em GSC, ir para **Enhancements** > **Rich Results**
2. Verificar quantidade de posts com markup válido
3. Revisar erros de validação

---

## 📈 PASSO 5: Monitoramento Contínuo

### 5.1 GSC - Relatórios Importantes
- **Performance**: Impressões, cliques, CTR por página/query
- **Coverage**: Páginas indexadas/erros
- **Mobile Usability**: Problemas mobile
- **Core Web Vitals**: LCP, CLS, FID

### 5.2 GA4 - Dashboards Recomendados
1. **Acquisition**: Fonte de tráfego, performance de canal
2. **Engagement**: Scroll depth, time on page, conversões
3. **Monetization**: Ad clicks (se usando AdSense)
4. **Retention**: Retorno de visitantes

### 5.3 Alertas para Configurar
1. Ir para **Admin** > **Notifications**
2. Criar alertas para:
   - Drop em impressões GSC > 20%
   - Aumento em 404s
   - Drop em conversão newsletter > 30%

---

## 🛠️ PASSO 6: Otimizações Adicionais

### 6.1 robots.txt ✅
Já confingado em `src/app/robots.ts` com:
- Sitemap apontando para `/sitemap.xml`
- `/api/` desabilitado para crawlers

### 6.2 sitemap.xml ✅
Já confingado em `src/app/sitemap.ts` com:
- Todos posts com prioridade 0.8
- Home com prioridade 1.0
- Lastmod automático baseado em data do post

### 6.3 Cache Headers ✅
Já configurado em `next.config.ts`:
- HTML: 1h cache + 24h stale
- Images: 1 ano (immutable)
- API: 1m cache + 5m stale

### 6.4 Open Graph / Twitter Cards ✅
Configurado com imagens OG de 1200x630px

---

## 🚀 Checklist Final

- [ ] Google Search Console account criada
- [ ] Domínio verificado (DNS/Meta Tag/File)
- [ ] Sitemap.xml submetido
- [ ] GSC conectado com GA4
- [ ] Metas de conversão criadas em GA4
- [ ] DebugView validando eventos
- [ ] Rich Results testados em Google
- [ ] Alertas configurados em GA4
- [ ] Core Web Vitals monitorados
- [ ] Posts começando a rankear (14-30 dias após setup)

---

## 📞 Suporte & Referências

- [Google Search Console Help](https://support.google.com/webmasters)
- [GA4 Documentation](https://support.google.com/analytics)
- [Schema.org](https://schema.org)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev)
- [Mobile Friendly Test](https://search.google.com/test/mobile-friendly)

---

**Última atualização**: 19 de Março de 2026

Se alguma etapa não funcionar, verificar logs em:
- Chrome DevTools > Networks
- GA4 DebugView
- GSC > Enhancements > Rich Results
