// Auto-generated — do not edit manually. Edit the source post file instead.
export const content = `
Opções financeiras são um dos instrumentos mais poderosos e mal compreendidos do mercado de capitais. Mencionadas frequentemente em notícias sobre Wall Street ou como ferramenta de especulação, elas têm uma reputação intimidadora — mas quando bem entendidas, abrem um leque de estratégias que vão muito além da especulação.

Este guia vai desmistificar as opções, explicar como funcionam em linguagem acessível e mostrar quando — e como — um investidor médio pode usá-las de forma inteligente.

---

## O Que São Opções Financeiras?

Uma opção é um **contrato que dá ao comprador o direito, mas não a obrigação**, de comprar ou vender um ativo (como uma ação) por um preço predeterminado (preço de exercício ou *strike*) até uma data específica (data de vencimento).

O vendedor da opção, por sua vez, **assume a obrigação** de cumprir o contrato se o comprador assim desejar — e recebe um prêmio (pagamento) por assumir essa obrigação.

**Os dois tipos fundamentais:**

- **Call (opção de compra)**: Dá ao comprador o direito de **comprar** o ativo pelo preço de exercício
- **Put (opção de venda)**: Dá ao comprador o direito de **vender** o ativo pelo preço de exercício

---

## Como Funciona Na Prática: Um Exemplo Simples

Imagine que as ações da Petrobras (PETR4) estão sendo negociadas a R$ 38,00.

**Cenário 1 — Comprando uma Call:**

Você acredita que a Petrobras vai subir. Compra uma call com strike R$ 40,00 com vencimento em 30 dias pelo prêmio de R$ 1,00 por ação (lote mínimo = 100 ações = R$ 100,00 de custo).

- Se a PETR4 subir para R$ 45,00: você exerce a opção, compra a R$ 40,00 e pode vender a R$ 45,00. Ganho de R$ 5,00 por ação, menos o prêmio de R$ 1,00 = R$ 4,00 por ação ou R$ 400,00 no lote.
- Se a PETR4 ficar abaixo de R$ 40,00: você não exerce a opção. Perde apenas o prêmio pago: R$ 100,00.

**Cenário 2 — Comprando uma Put:**

Você possui ações da PETR4 e quer proteção caso o preço caia. Compra uma put com strike R$ 36,00 por R$ 0,80 por ação.

- Se a PETR4 cair para R$ 30,00: você exerce a put e vende as ações a R$ 36,00, mesmo valendo apenas R$ 30,00. Sua perda máxima na ação foi limitada por esse seguro.
- Se a PETR4 ficar acima de R$ 36,00: você não exerce a put. Perde o prêmio de R$ 0,80 por ação — o custo do "seguro".

---

## Terminologia Essencial

**Strike (Preço de Exercício)**: O preço pelo qual você tem direito de comprar (call) ou vender (put) o ativo.

**Prêmio**: O preço da opção — o que você paga para ter o direito (se comprador) ou recebe por assumir a obrigação (se vendedor).

**Vencimento**: A data até quando a opção pode ser exercida. Na B3, opções de ações vencem geralmente na terceira segunda-feira de cada mês.

**In the money (ITM)**: Opção que teria valor se exercida agora. Call ITM = strike < preço do ativo. Put ITM = strike > preço do ativo.

**Out of the money (OTM)**: Opção sem valor de exercício imediato. Call OTM = strike > preço do ativo.

**At the money (ATM)**: Strike muito próximo ao preço atual do ativo.

**Delta**: Quanto o preço da opção muda para cada R$ 1 de variação no ativo. Uma call com delta 0,5 sobe ~R$ 0,50 para cada R$ 1 de alta na ação.

---

## Quatro Estratégias Práticas Com Opções

### 1. Compra de Call — Alavancagem Direcional

**Para quem**: Investidor que acredita em alta forte de uma ação no curto prazo.

**Vantagem**: Ganho proporcional à alta, com risco limitado ao prêmio pago.

**Desvantagem**: Na maioria dos casos (quando a ação não se move o suficiente), você perde 100% do prêmio. Opções são ativos que "envelhecem" — o *time decay* (Theta) corrói o valor todos os dias.

**Uso adequado**: Especulação com pequena parcela do patrimônio (5–10% da posição que você teria em ações) ou como complemento de uma tese de investimento.

---

### 2. Venda Coberta (Covered Call) — Renda Extra Sobre Ações

**Para quem**: Investidor que já possui ações e quer gerar renda extra sobre elas.

**Como funciona**: Você vende calls das ações que já possui. Recebe o prêmio imediatamente. Se a ação não subir até o strike, você fica com as ações e com o prêmio. Se a ação subir acima do strike, você vende as ações pelo strike — mas ainda fica com o prêmio.

**Exemplo**: Você tem 1.000 ações de BBAS3 a R$ 25,00. Vende calls com strike R$ 27,00 e recebe R$ 0,50 por ação = R$ 500,00 de prêmio imediato.

- Se BBAS3 ficar abaixo de R$ 27,00: você fica com as ações + R$ 500,00
- Se BBAS3 subir acima de R$ 27,00: você vende as ações por R$ 27.000 (+ R$ 500,00 de prêmio) — "limitou" o ganho, mas não perdeu nada

**Desvantagem**: Se a ação disparar muito, você perdeu o ganho extra.

**Uso adequado**: Excelente para investidores de longo prazo que querem gerar "aluguel" mensal sobre suas ações sem vender a posição.

---

### 3. Compra de Put Como Seguro (Protective Put)

**Para quem**: Investidor com posição relevante em ações que quer proteger contra quedas abruptas.

**Como funciona**: Você compra puts das ações que possui. É literalmente um seguro — você paga um prêmio para garantir que, se a ação cair muito, você pode vender a um preço predeterminado.

**Quando usar**: Em momentos de alta incerteza (resultado eleitoral, publicação de balanço, decisão do COPOM) onde você quer manter as ações mas não suporta o risco de uma queda grande no curto prazo.

**Custo**: O prêmio da put. É um custo real de proteção — como um seguro de carro, você não vai "receber" nada se nada acontecer.

---

### 4. Trava de Alta (Bull Call Spread) — Risco Controlado

**Para quem**: Investidor que acredita em alta moderada de uma ação.

**Como funciona**: Você compra uma call com strike mais baixo (paga prêmio) e vende uma call com strike mais alto (recebe prêmio). O custo líquido é menor do que comprar só a call.

**Exemplo**: VALE3 a R$ 60,00.
- Compra call strike 62 por R$ 1,50
- Vende call strike 65 por R$ 0,80
- Custo líquido: R$ 0,70 por ação

- Se VALE3 for para R$ 65 ou mais: ganho máximo de R$ 3,00 − R$ 0,70 = R$ 2,30 por ação
- Se VALE3 ficar abaixo de R$ 62: perde os R$ 0,70 (custo da trava)

**Uso adequado**: Quando você tem uma visão direcional moderada e quer limitar tanto o risco quanto o custo da posição.

---

## O Que NÃO Fazer Com Opções

**Vender puts ou calls sem ter o ativo subjacente (posição descoberta)**
A venda descoberta de opções tem risco teoricamente ilimitado. Para o investidor pessoa física, é uma armadilha — a perda pode ser muito maior do que o capital disponível.

**Alocar percentual alto do patrimônio em compra de opções**
Opções compradas (calls e puts) têm alta probabilidade de expirarem sem valor. Alocar mais de 5–10% do patrimônio em especulação com opções é imprudente.

**Operar opções sem entender o Greeks**
Delta, Gamma, Theta e Vega são as variáveis que determinam o preço de uma opção. Operar sem entendê-las é voar às cegas.

**Operar o dia do vencimento sem experiência**
O vencimento mensal de opções gera movimentos bruscos. Investidores iniciantes devem evitar manter posições até o vencimento.

---

## Como Aprender Mais e Praticar

Antes de colocar dinheiro real em opções:

1. **Simuladores de mercado**: Muitas corretoras oferecem conta demo. Use para praticar operações sem risco real.
2. **Livros**: "Opções, Futuros e Outros Derivativos" de John C. Hull é a referência técnica. Para iniciantes, "A Lógica das Opções" (autores brasileiros) é mais acessível.
3. **Canais especializados**: Existem canais no YouTube dedicados exclusivamente a opções na B3, com exemplos práticos.
4. **Comece com covered calls**: Se você já tem ações, a venda coberta é a estratégia mais segura e intuitiva para aprender a mecânica.

---

## Conclusão

Opções financeiras não são para todos — mas também não são exclusivas de traders profissionais. Um investidor comum que entende o básico pode usar opções de forma conservadora: protegendo posições com puts, gerando renda com covered calls ou reduzindo o custo de uma posição direcional com spreads.

O erro mais comum é subestimar a complexidade ou superestimar o potencial de ganho sem considerar o risco. Estude antes de operar, comece pequeno e aumente a exposição conforme ganha experiência.

As opções são uma ferramenta. Nas mãos certas, são poderosas. Nas mãos erradas, são destrutivas.
`;
