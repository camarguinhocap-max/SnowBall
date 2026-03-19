# GA4 Events & Conversion Setup Guide

## 📊 GA4 Account Structure

```
GA4 Property: Blog DividAI
├── Data Stream: Web (blog.dividai.com)
├── Measurement ID: G-M6027Q5HVV
└── Events: [See below]
```

---

## 🎯 Eventos Já Implementados

### 1. **Page & Session Events** (Automático)
```
- page_view
- session_start
- user_engagement
```

### 2. **Scroll Tracking** (Automático)
```javascript
// Rastreado em src/components/GoogleAnalytics.tsx
scroll_milestone {
  scroll_percent: 25, 50, 75, 100
}
```

### 3. **Time on Page** (Automático)
```javascript
// Rastreado antes de deixar página
time_on_page {
  seconds: [tempo em segundos]
}
```

### 4. **Internal Link Clicks** (Automático)
```javascript
// Todos os cliques em links internos
internal_link_click {
  link_url: String
  link_text: String
  context: String
}
```

### 5. **Newsletter Signup** (Formulário)
```javascript
// Em src/components/NewsletterForm.tsx
newsletter_subscribe {
  source: 'header|post_end|sidebar'
}
```

### 6. **Ad Clicks** (AdSense)
```javascript
// Quando usuário clica em anúncio
ad_click {
  ad_unit: String
  ad_type: String
}
```

### 7. **Engagement Milestones** (Automático)
```javascript
// 30 segundos de interação
engagement_30s

// 2 minutos de interação
engagement_2m
```

### 8. **Share & Social** (Botões de Share)
```javascript
// Em src/components/ShareButtons.tsx
share_click {
  platform: 'twitter|whatsapp|linkedin|facebook|threads'
  post_title: String
}
```

### 9. **Search Events** (Search Bar)
```javascript
// Em src/components/SearchBar.tsx
search {
  search_term: String
  results_count: Number
}
```

### 10. **Link Clicks (Rastreado)** (Automático)
```javascript
// External links
external_link_click {
  url: String
  link_title: String
}

// Affiliate links (se houver)
affiliate_click {
  product_name: String
  product_type: String
}
```

---

## 🔄 Criar Eventos Customizados em GA4

### Passo 1: Acessar GA4
1. www.google.com/analytics
2. Selecionar propriedade "Blog DividAI"
3. Ir para **Admin** > **Events**

### Passo 2: Create Event (Se necessário)
GA4 reconhece automaticamente eventos enviados via gtag()
```javascript
// Exemplo em src/lib/analytics.ts
gtag('event', 'newsletter_subscribe', {
  source: 'post_end'
});
```

### Passo 3: Converter em Conversão
Se quiser que um evento conte como conversão:
1. **Admin** > **Conversions**
2. **Create Conversion** > **Custom Event**
3. Selecionar evento desejado
4. Ativar ✅

---

## 📋 Metas de Conversão para Criar

### Conversão 1: Newsletter Signup
```
Nome: Newsletter Signup
Evento: newsletter_subscribe
Descrição: Usuário se inscreve na newsletter
Contagem: 1x por sessão máximo
```

### Conversão 2: High Engagement
```
Nome: High Engagement (75%+ scroll)
Evento: scroll_milestone
Condição: scroll_percent >= 75
Descrição: Usuário lê 75%+ do artigo
```

### Conversão 3: Time on Page
```
Nome: Time on Page > 2min
Evento: time_on_page
Condição: seconds >= 120
Descrição: Usuário passou 2+ minutos na página
```

### Conversão 4: Social Sharing
```
Nome: Content Shared
Evento: share_click
Descrição: Usuário compartilhou artigo
```

### Conversão 5: Ad Click
```
Nome: Ad Click
Evento: ad_click
Descrição: Usuário clicou em anúncio AdSense
Valor potencial: 💰
```

---

## 🔍 Debug & Validação

### Ativar Debug Mode
1. **Admin** > **DebugView**
2. Abrir site em nova aba
3. Ver eventos em tempo real em GA4

### Ferramentas de Validação
- **GA4 Event Builder**: Para visualizar estrutura de eventos
- **GTM Preview Mode**: Se usar Google Tag Manager
- **Chrome DevTools**: Ver dataLayer
- **Facebook Pixel Helper**: Se houver integração Facebook

---

## 📊 Reports para Criar

### Report 1: Engagement Overview
1. **Reports** > **Create new report**
2. Rows: Page Path
3. Values: Scroll Milestone (75%), Time on Page
4. Filter: Date range 30 dias

### Report 2: Conversion Funnel
1. **Reports** > **Exploration**
2. Técnica: Funnel
3. Steps:
   - page_view
   - scroll_milestone (75%)
   - newsletter_subscribe
4. Visualizar drop-off

### Report 3: Newsletter Performance
1. **Reports** > **Create new report**
2. Dimensions: newsletter_subscribe (source)
3. Metrics: Conversion Count, Conversion Rate
4. Mostrar qual fonte converte melhor

---

## 🎯 Comparação com Competidores

### Benchmarks típicos para blogs financeiros:
| Métrica | Blog Novo | Blog Estabelecido |
|---------|-----------|------------------|
| Bounce Rate | 60-70% | 40-50% |
| Avg Session Duration | 1-2 min | 3-5 min |
| Newsletter CTR | 2-5% | 5-10% |
| Ad Click CTR | 0.5-2% | 1-3% |
| Scroll to 75% | 20-30% | 40-50% |

**Seu alvo**: Atingir benchmark de "Blog Estabelecido" em 6 meses

---

## 🔄 Automação com Google Sheets

### Integrar GA4 com Google Sheets
1. Google Sheets > **Extensions** > **Google Analytics**
2. Conectar conta GA4
3. Criar relatório customizado
4. Atualiza automaticamente

---

## 📈 Acompanhamento Semanal

| Dia | O que Verificar |
|-----|-----------------|
| Segunda | Desempenho do fim de semana |
| Quarta | Trending posts da semana |
| Sexta | Planejamento do fim de semana |

---

## 🚀 Setup Rápido (5 min)

1. ✅ Verificar GA4 está rastreando (DebugView)
2. ✅ Criar 3 metas principais (Newsletter, Engagement, Time)
3. ✅ Salvar relatório de Engagement
4. ✅ Configurar alertas de drop
5. ✅ Testar eventos manualmente

---

**Última atualização**: 19 de Março de 2026

Para dúvidas sobre GA4, consultar: https://support.google.com/analytics
