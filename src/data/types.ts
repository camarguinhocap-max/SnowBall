export interface Post {
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
    content: string;
    views?: number;
    draft?: boolean;
}
