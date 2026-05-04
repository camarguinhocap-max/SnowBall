export interface Post {
    slug: string;
    title: string;
    excerpt: string;
    tags: string[];
    category: string;
    date: string;
    readTime: string;
    content: string;
    views?: number;
}
