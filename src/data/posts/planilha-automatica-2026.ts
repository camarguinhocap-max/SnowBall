import { Post } from "../types";

export const post: Post = {
        slug: 'planilha-automatica-2026',
        title: 'Planilha automática 2026: metas, alertas e consolidação diária sem ser expert em Excel',
        excerpt: 'Tutorial completo para montar (ou duplicar) uma planilha que puxa dados do banco, consolida gastos, mostra metas e envia alertas. Inclui estrutura de abas, fórmulas e automações com Make/Sheets.',
        tags: ['planilha', 'automacao', 'financas-pessoais', 'google-sheets', 'metas'],
        category: 'Finanças Pessoais',
        date: '05 Abr 2026',
        readTime: '16 min de leitura',
        content: `
Se você já tentou controlar gastos e desistiu porque “planilha dá trabalho”, este guia resolve: vamos montar uma planilha automática em 2026 que importa transações, categoriza, mostra metas mensais e manda alerta se você estourar o orçamento — tudo usando Google Sheets + Make (ou Zapier) sem escrever código.

![Pessoa preenchendo planilha no notebook](https://images.unsplash.com/photo-1454165205744-3fdfc0f0eeeb?auto=format&fit=crop&w=1200&q=70)

## Visão geral do que você vai ter
- Aba **Transações**: importação automática do banco/cartão.  
- Aba **Categorias**: regras de classificação.  
- Aba **Metas**: limites mensais por categoria.  
- Dashboard com **gráfico de progresso**, “quanto posso gastar hoje” e alertas.  
- Webhook para receber novas transações em tempo real.

![Gráfico de barras de despesas](https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1200&q=70)

## 1. Pré-requisitos
- Conta Google para usar Sheets.  
- Acesso a Make/Zapier (plano free suficiente para começar).  
- Extrato exportável do seu banco (CSV/OFX) ou integração via API aberta do banco.

## 2. Estrutura de abas
1) **Transacoes**  
   - Colunas: Data, Descrição, Categoria, Valor, Tipo (débito/crédito), Conta, Tags, Status (revisado?).  
2) **Categorias**  
   - Nome, Tipo (fixo/variável), Palavra-chave, Cor.  
3) **Metas**  
   - Categoria, Limite Mensal, Alerta (sim/não).  
4) **Dashboard**  
   - Soma por categoria, % consumido, gasto médio diário, projeção fim do mês.

![Layout de abas no Google Sheets](https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=70)

## 3. Fórmulas-chave (Sheets)
- **SOMA por categoria no mês**  
  =SUMIFS(Transacoes!D:D, Transacoes!C:C, A2, Transacoes!A:A, \">=\"&DATA(ANO(HOJE()),MES(HOJE()),1), Transacoes!A:A, \"<=\"&EOMÊS(HOJE(),0))

- **Gasto diário médio do mês**  
  =SOMA(FiltroDoMes)/DIAS_CORRIDOS

- **Projeção até o fim do mês**  
  =GastoDiarioMedio * DIA(EOMÊS(HOJE();0))

- **Saldo da meta**  
  =Limite - SomaCategoriaMes

## 4. Regras de categorização automática
Na aba Categorias, adicione palavras-chave. Use fórmula para sugerir categoria:

=ARRAYFORMULA(SE(Transacoes!C:C=\"\";\"\";IFNA(VLOOKUP(TRUE;REGEXMATCH(LOWER(Transacoes!B:B);LOWER(Categorias!C:C));2;FALSE);\"Revisar\")))

Depois revise linhas com “Revisar”. Isso reduz 80% do trabalho manual.

![Pessoa revisando categorias na planilha](https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=70)

## 5. Importação automática (Make/Zapier)
Fluxo simples (Make):
1) Trigger: webhook ou conector do banco (quando disponível).  
2) Parse do JSON/CSV.  
3) Buscar categoria sugerida pelo regex (opcional).  
4) Criar linha na aba Transacoes via Google Sheets.

Se não tiver API do banco, use export semanal CSV e um watch folder do Google Drive para importar automaticamente.

## 6. Alertas no Telegram/e-mail
- Crie um cenário diário às 21h:  
  - Consulta no Sheets: categorias com gasto > 90% da meta.  
  - Envie mensagem via bot do Telegram ou e-mail com lista das categorias críticas.

Mensagem exemplo:  
“⚠️ Você já gastou 92% da meta em Alimentação. Falta R$ 120 para fechar o mês.”

![Smartphone com notificação](https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=70)

## 7. Dashboard rápido
- Use gráficos de barras para “Gasto vs Meta” por categoria.  
- Gauge para % total do orçamento já usado.  
- KPI cards: “Quanto pode gastar hoje” = (Meta total - Gasto até agora) / dias restantes.  
- Filtro por conta (banco/cartão) para ver onde está vazando.

## 8. Segurança e privacidade
- Restrinja compartilhamento do Sheet.  
- No Make/Zapier, oculte logs com dados sensíveis.  
- Não deixe tokens/keys expostos; use variáveis de ambiente da plataforma.

![Cadeado digital](https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=70)

## 9. Rotina semanal de manutenção (15 min)
- Revisar linhas marcadas como “Revisar”.  
- Ajustar categorias novas que surgirem.  
- Atualizar metas se houver mudança de renda.  
- Exportar backup em CSV para um drive seguro.

## 10. Expandindo para metas maiores
- Adicione coluna “Projeto” (ex.: viagem, reforma) e crie subtotais.  
- Crie aba “Investimentos” puxando dados de corretora via API para ver aporte mensal.  
- Some alerta de aporte: se você não aportou R$ X no mês, recebe notificação.

![Pessoa consultando dashboard colorido](https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=70)

## 11. Versão offline (se não quiser Make)
- Baixe extrato semanal em CSV.  
- Use macro simples ou App Script para importar para a aba Transacoes.  
- Ative gatilho de e-mail diário via App Script com categorias críticas.

## 12. Checklist de entrega (se for vender este setup)
- [ ] Sheet duplicável com abas prontas.  
- [ ] Tutorial de 1 página + vídeo curto de 5 min.  
- [ ] Dois cenários Make (importação + alerta).  
- [ ] Template de mensagem do Telegram.  
- [ ] FAQ de segurança.

## Conclusão
Planilha automática não é sobre amar Excel; é sobre tirar fricção do controle financeiro. Com regras de categorização, metas claras e alertas, você sabe onde está gastando sem digitar tudo à mão. Em 2026, dá para montar isso em poucas horas e manter em 15 minutos por semana — ou vender o setup pronto para outras pessoas que precisam do mesmo controle.
        `
    };
