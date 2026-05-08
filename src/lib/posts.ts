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
 * para um objeto `Date` válido em UTC.
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
  // Criar data em UTC para garantir consistência no servidor Vercel
  // new Date(Date.UTC(...)) cria uma data em UTC, independente do timezone local
  return new Date(Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day)));
}

/**
 * Retorna `true` se o post já deve estar publicado (data <= hoje em UTC).
 * Um horário intermediário considerado apenas pela comparação de datas.
 */
export function isPublished(post: Post, today = new Date()): boolean {
  const postDate = parsePostDate(post.date);
  // Converter para fuso de Brasilia (UTC-3): publica a partir da meia-noite de Brasilia
  const utcMs = today.getTime() + today.getTimezoneOffset() * 60000;
  const brasiliaNow = new Date(utcMs + (-3 * 60) * 60000);
  const todayBrasilia = new Date(Date.UTC(
    brasiliaNow.getFullYear(),
    brasiliaNow.getMonth(),
    brasiliaNow.getDate()
  ));
  return postDate.getTime() <= todayBrasilia.getTime();
}

/**
 * Lista todos os posts cujo `date` é anterior ou igual a hoje.
 */
const reverseMonthMap: Record<string, string> = { '01': 'Jan', '02': 'Fev', '03': 'Mar', '04': 'Abr', '05': 'Mai', '06': 'Jun', '07': 'Jul', '08': 'Ago', '09': 'Set', '10': 'Out', '11': 'Nov', '12': 'Dez' };

export function getYesterdayFormatted(): string {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  const day = date.getDate().toString().padStart(2, '0');
  const monthNum = (date.getMonth() + 1).toString().padStart(2, '0');
  const month = reverseMonthMap[monthNum];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

export function getAllPosts(): Post[] {
  const mostViewedSlug = [...posts].filter(p => !p.draft).sort((a, b) => (b.views || 0) - (a.views || 0))[0]?.slug;
  return posts.map(post => {
    if (post.slug === mostViewedSlug) {
      return { ...post, date: getYesterdayFormatted() };
    }
    return post;
  });
}

export function getVisiblePosts(): Post[] {
  const now = new Date();
  return getAllPosts().filter((p) => !p.draft && isPublished(p, now));
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
