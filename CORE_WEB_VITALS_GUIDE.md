# Core Web Vitals Optimization Guide

## 📊 O que são Core Web Vitals?

São 3 métricas críticas do Google que afetam ranking:

| Métrica | Sigla | Bom | Ruim | Afeta |
|---------|-------|-----|------|-------|
| **Maior Contentful Paint** | LCP | < 2.5s | > 4s | Velocidade de carregamento |
| **Cumulative Layout Shift** | CLS | < 0.1 | > 0.25 | Estabilidade visual |
| **Interaction to Next Paint** | INP | < 200ms | > 500ms | Responsividade |

---

## ⚡ Otimizações Já Implementadas

✅ **Cache Headers** (`next.config.ts`)
```typescript
// HTML: 1h + 24h stale
// Images: 1 ano invariável
// API: 1m + 5m stale
```

✅ **Image Optimization** (`src/components/ImageWithModal.tsx`)
```typescript
// WebP fallback com <picture>
// Lazy loading automático
// Width/Height definidos para evitar CLS
```

✅ **Font Optimization** (`src/app/layout.tsx`)
```typescript
// Google Fonts com subsets: latin
// Font display: auto (padrão otimizado)
```

✅ **Minificação & Compression**
```typescript
// Next.js já faz minificação automática
// gzip/brotli via next.config.ts
```

---

## 🔧 Próximas Otimizações (Se Necessário)

### 1. Critical CSS Inlining
Se LCP > 2.5s, considerar:
```typescript
// next.config.ts
const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};
```

### 2. Code Splitting Automático
Já ativado no Next.js 14:
```typescript
// Dynamic imports para componentes pesados
dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <p>Carregando...</p>,
})
```

### 3. Image Optimization Avançada
Se houver muitas imagens, considerar:
```typescript
// Usar next/image para todas as imagens
import Image from 'next/image';
<Image
  src="/image.jpg"
  alt="Descrição"
  width={800}
  height={600}
  priority={isAboveTheFold}
/>
```

### 4. Script Optimization
Google Analytics 4 e AdSense já otimizados com:
```html
<script async> <!-- non-blocking -->
```

---

## 📈 Monitorar Web Vitals

### Via Google Search Console
1. Ir para **Enhancements** > **Core Web Vitals**
2. Verificar status por página
3. Revisar URLs com problemas

### Via Google PageSpeed Insights
1. Acessar https://pagespeed.web.dev
2. Inserir URL: `https://blog.dividai.com`
3. Revisar recomendações por seção

### Via Chrome DevTools
1. Abrir DevTools (F12)
2. Ir para **Lighthouse** tab
3. Executar audit para Performance
4. Revisar oportunidades

### Via Web Vitals Library
```typescript
// Já implementado em src/components/GoogleAnalytics.tsx
// Scroll depth, time on page rastreados automaticamente
```

---

## 🎯 Metas de Performance

| Métrica | Alvo | Prioridade |
|---------|------|-----------|
| LCP | 2.0s | CRÍTICA |
| CLS | 0.05 | ALTA |
| INP | 100ms | ALTA |
| FCP | 1.5s | MÉDIA |
| TTL | 3.0s | MÉDIA |

---

## ✅ Checklist de Otimização

- [x] Cache headers configurados
- [x] Image lazy loading ativo
- [x] WebP fallback para imagens
- [x] Font otimização (Google Fonts com subsets)
- [x] Google Analytics assincrônico
- [x] AdSense assincrônico
- [x] Compressão automática (gzip/brotli)
- [x] Minificação automática
- [ ] Teste em PageSpeed Insights
- [ ] Monitorar CWV em GSC por 14 dias
- [ ] Ajustar se necessário

---

## 🚀 Teste Agora

1. Ir para https://pagespeed.web.dev
2. Inserir: https://blog.dividai.com
3. Comparar Desktop vs Mobile
4. Revisar "Opportunities" section
5. Se score < 80, implementar top recommendation

---

**Última atualização**: 19 de Março de 2026
