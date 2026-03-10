import { Post, posts } from "@/data/posts";

// Map month abbreviations in Portuguese to month numbers
const monthMap: Record<string, string> = {
  Jan: "01",
  Fev: "02",
  Mar: "03",
  Abr: "04",
  Mai: "05",
  Jun: "06",
  Jul: "07",
  Ago: "08",
  Set: "09",
  Out: "10",
  Nov: "11",
  Dez: "12",
};

/**
 * Converte uma string de data no formato `DD Mmm YYYY` (ex: `12 Mar 2026`)
 * para um objeto `Date` válido.
 */
export function parsePostDate(dateStr: string): Date {
  const parts = dateStr.trim().split(" ");
  if (parts.length !== 3) {
    // fallback: deixe o construtor fazer o trabalho
    return new Date(dateStr);
  }
  const [day, monthAbbr, year] = parts;
  const month = monthMap[monthAbbr];
  if (!month) {
    // caso o mês não esteja mapeado, tente criar direto
    return new Date(dateStr);
  }
  return new Date(`${year}-${month}-${day.padStart(2, "0")}`);
}

/**
 * Retorna `true` se o post já deve estar publicado (data <= hoje).
 * Um horário intermediário considerado apenas pela comparação de datas.
 */
export function isPublished(post: Post, today = new Date()): boolean {
  const postDate = parsePostDate(post.date);
  // comparação apenas pela data (ignora hora)
  return postDate.setHours(0, 0, 0, 0) <= today.setHours(0, 0, 0, 0);
}

/**
 * Lista todos os posts cujo `date` é anterior ou igual a hoje.
 */
export function getVisiblePosts(): Post[] {
  const now = new Date();
  return posts.filter((p) => isPublished(p, now));
}

/**
 * Ordena posts por número de visualizações decrescente.
 */
export function sortByViews(input: Post[]): Post[] {
  return [...input].sort((a, b) => (b.views || 0) - (a.views || 0));
}

/**
 * Ordena posts cronologicamente (mais recentes primeiro).
 */
export function sortByDate(input: Post[]): Post[] {
  return [...input].sort((a, b) => parsePostDate(b.date).getTime() - parsePostDate(a.date).getTime());
}
