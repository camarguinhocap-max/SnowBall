import { PostMeta, Post, posts } from "@/data/posts";

// Map month abbreviations in Portuguese to month numbers
const monthMap: Record<string, string> = {
  jan: "01",
  fev: "02",
  mar: "03",
  abr: "04",
  mai: "05",
  jun: "06",
  jul: "07",
  ago: "08",
  set: "09",
  out: "10",
  nov: "11",
  dez: "12",
};

/**
 * Converte uma string de data no formato `DD Mmm YYYY` (ex: `12 Mar 2026`)
 * para um objeto `Date` válido em UTC.
 */
export function parsePostDate(dateStr: string): Date {
  if (!dateStr) return new Date();

  // Normalizar espaços (incluindo non-breaking spaces), converter para minúsculo e remover pontos
  const normalized = dateStr.trim().replace(/\u00a0/g, ' ').toLowerCase().replace(/\./g, '');
  const parts = normalized.split(/\s+/);

  if (parts.length !== 3) {
    const fallback = new Date(dateStr);
    return isNaN(fallback.getTime()) ? new Date() : fallback;
  }

  const [day, monthAbbr, year] = parts;
  const month = monthMap[monthAbbr];

  if (!month) {
    const fallback = new Date(dateStr);
    return isNaN(fallback.getTime()) ? new Date() : fallback;
  }

  // Criar data ao meio-dia UTC para evitar problemas de virada de dia
  const d = parseInt(day);
  const m = parseInt(month) - 1;
  const y = parseInt(year);

  if (isNaN(d) || isNaN(m) || isNaN(y)) {
    const fallback = new Date(dateStr);
    return isNaN(fallback.getTime()) ? new Date() : fallback;
  }

  return new Date(Date.UTC(y, m, d, 12, 0, 0));
}

/**
 * Retorna `true` se o post já deve estar publicado (data <= hoje em Brasília).
 */
export function isPublished(post: PostMeta, today = new Date()): boolean {
  const postDate = parsePostDate(post.date);
  if (isNaN(postDate.getTime())) return false;

  // Obter data atual em Brasília (UTC-3)
  const brasiliaOffset = -3 * 60 * 60 * 1000;
  const nowUtc = today.getTime() + (today.getTimezoneOffset() * 60000);
  const nowBrasilia = new Date(nowUtc + brasiliaOffset);

  const todayComparison = new Date(Date.UTC(
    nowBrasilia.getFullYear(),
    nowBrasilia.getMonth(),
    nowBrasilia.getDate(),
    12, 0, 0
  ));

  return postDate.getTime() <= todayComparison.getTime();
}

const reverseMonthMap: Record<string, string> = {
  '01': 'Jan', '02': 'Fev', '03': 'Mar', '04': 'Abr',
  '05': 'Mai', '06': 'Jun', '07': 'Jul', '08': 'Ago',
  '09': 'Set', '10': 'Out', '11': 'Nov', '12': 'Dez',
};

export function getYesterdayFormatted(): string {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  const day = date.getDate().toString().padStart(2, '0');
  const monthNum = (date.getMonth() + 1).toString().padStart(2, '0');
  const month = reverseMonthMap[monthNum];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

/** Retorna todos os metadados de posts (sem content). */
export function getAllPosts(): PostMeta[] {
  return posts;
}

/** Retorna apenas os posts publicados e não-rascunho (sem content). */
export function getVisiblePosts(): PostMeta[] {
  const now = new Date();
  return getAllPosts().filter((p) => !p.draft && isPublished(p, now));
}

/**
 * Carrega o conteúdo markdown de um post por slug.
 * O import é dinâmico — o conteúdo só é carregado quando necessário,
 * mantendo o bundle principal enxuto.
 *
 * Retorna null se o arquivo de conteúdo não existir.
 */
export async function getPostContent(slug: string): Promise<string | null> {
  try {
    const mod = await import(`@/data/posts-content/${slug}`);
    return mod.content as string;
  } catch {
    return null;
  }
}

/**
 * Carrega metadados + conteúdo de um post específico.
 * Usado apenas na página do post para não pesar as listagens.
 */
export async function getFullPost(slug: string): Promise<Post | null> {
  const meta = getAllPosts().find((p) => p.slug === slug);
  if (!meta) return null;

  const content = await getPostContent(slug);
  if (content === null) return null;

  return { ...meta, content };
}

/** Ordena posts por número de visualizações decrescente. */
export function sortByViews(input: PostMeta[]): PostMeta[] {
  return [...input].sort((a, b) => (b.views || 0) - (a.views || 0));
}

/** Ordena posts cronologicamente (mais recentes primeiro). */
export function sortByDate(input: PostMeta[]): PostMeta[] {
  return [...input].sort((a, b) => {
    const timeA = parsePostDate(a.date).getTime();
    const timeB = parsePostDate(b.date).getTime();
    if (isNaN(timeA)) return 1;
    if (isNaN(timeB)) return -1;
    return timeB - timeA;
  });
}
