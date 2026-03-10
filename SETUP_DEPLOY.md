# 🚀 Deploy Automático configurado!

## O que foi feito

✅ Workflow do GitHub Actions criado em `.github/workflows/deploy.yml`

Este arquivo configura:
1. **Deploy automático a cada push** no branch `main`
2. **Deploy agendado diariamente** às 00:00 UTC (21:00 BRT) — perfeito para ativar posts com novas datas
3. **Deploy manual** via GitHub UI

---

## ⚙️ Como completar a configuração (Próximos passos)

### 1️⃣ Obtenha os tokens do Vercel

Vá para **https://vercel.com/account/tokens** e crie um novo token:
- Nome: `SnowBall-CI`
- Cópia o token (aparece uma única vez!)

### 2️⃣ Obtenha o ID da organização e do projeto

No painel do Vercel, vá para seu projeto **SnowBall**:
- URL: `https://vercel.com/your-team/your-project/settings`
- Procure por:
  - **Project ID** (na seção "General")
  - **Team ID** / **Org ID** (na seção da conta)

### 3️⃣ Adicione os secrets ao GitHub

Vá para: **https://github.com/camarguinhocap-max/SnowBall/settings/secrets/actions**

Clique em "New repository secret" e adicione 3 secrets:

| Nome | Valor |
|------|-------|
| `VERCEL_TOKEN` | (token obtido no passo 1) |
| `VERCEL_ORG_ID` | (seu Team ID do Vercel) |
| `VERCEL_PROJECT_ID` | (ID do projeto SnowBall) |

### 4️⃣ Pronto!

Depois que adicionar os secrets, o workflow estará 100% ativo:
- ✅ Cada push no `main` → deploy automático
- ✅ Diariamente às 21:00 BRT → deploy (atualiza posts por data)
- ✅ Você pode também forçar manualmente via GitHub UI

---

## 📅 Como funciona o agendamento de posts

**Exemplo:** O post "5-habitos-financeiros-que-transformam-sua-vida" tem `date: '11 Mar 2026'`

- Se você acessar **hoje (10 Mar)** → post não aparece (404)
- **Amanhã (11 Mar)** às 21:00 (quando o cron roda) → deploy automático é acionado
- Logo após o deploy → site é revalidado e post aparece automaticamente

---

## 🔄 Alternativa: Se preferir fazer deploy manual

Sem configurar os secrets, você ainda pode:
1. Fazer `git push` normalmente
2. Ir ao painel do **Vercel** em https://vercel.com
3. Clicar em "Deploy" manualmente

Mas com a automação, o site **sempre** será atualizado no horário certo!

---

**Status:** ✅ Pronto para configurar  
**Próximo passo:** Adicionar os 3 secrets do Vercel ao GitHub
