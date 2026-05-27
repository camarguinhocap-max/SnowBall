/**
 * Mapeamento de categorias antigas → categorias consolidadas
 * 
 * Categorias finais (8):
 * - Finanças Pessoais
 * - Investimentos
 * - Renda Extra
 * - Aposentadoria
 * - Impostos e Legislação
 * - Empreendedorismo
 * - Educação Financeira
 * - Mentalidade e Carreira
 */
export const CATEGORY_MAP: Record<string, string> = {
    // → Finanças Pessoais
    "Finanças Pessoais": "Finanças Pessoais",
    "Finanças":          "Finanças Pessoais",
    "Planejamento":      "Finanças Pessoais",
    "Crédito":           "Finanças Pessoais",
    "Dívidas":           "Finanças Pessoais",
    "Proteção":          "Finanças Pessoais",

    // → Investimentos
    "Investimentos":              "Investimentos",
    "Investimento":               "Investimentos",
    "Análise de Investimentos":   "Investimentos",
    "Estratégia de Investimentos":"Investimentos",
    "Investimentos Alternativos": "Investimentos",
    "Renda Fixa":                 "Investimentos",
    "Fundos Imobiliários":        "Investimentos",
    "Criptomoedas":               "Investimentos",

    // → Renda Extra
    "Renda Extra": "Renda Extra",
    "Renda":       "Renda Extra",

    // → Aposentadoria
    "Aposentadoria":               "Aposentadoria",
    "Planejamento para Aposentadoria": "Aposentadoria",

    // → Impostos e Legislação
    "Impostos":              "Impostos e Legislação",
    "Impostos e Legislação": "Impostos e Legislação",

    // → Empreendedorismo
    "Empreendedorismo": "Empreendedorismo",

    // → Educação Financeira
    "Educação":            "Educação Financeira",
    "Educação Financeira": "Educação Financeira",

    // → Mentalidade e Carreira
    "Mentalidade":            "Mentalidade e Carreira",
    "Carreira":               "Mentalidade e Carreira",
    "Comportamento Financeiro":"Mentalidade e Carreira",
};

/**
 * Retorna a categoria consolidada.
 * Se não encontrar no mapa, retorna a original (segurança para novos posts).
 */
export function normalizeCategory(category: string): string {
    return CATEGORY_MAP[category] ?? category;
}
