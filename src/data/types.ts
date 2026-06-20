/** Metadados do post — sem o campo content. Usado em listagens, sitemap, RSS, busca. */
export interface PostMeta {
    slug: string;
    title: string;
    excerpt: string;
    tags: string[];
    category: string;
    date: string;
    /** Data da última atualização significativa do conteúdo (formato: "DD Mmm YYYY") */
    updatedAt?: string;
    readTime?: string;
    image?: string;
    views?: number;
    draft?: boolean;
}

/** Post completo com conteúdo markdown — carregado apenas na página do post. */
export interface Post extends PostMeta {
    content: string;
}
