export interface ShopItem {
    id: string;
    title: string;
    description: string;
    price: string;
    imageUrl: string;
    affiliateUrl: string;
    store: 'Amazon' | 'Mercado Livre' | 'Shopee';
    articleSlug?: string; // Link para um artigo de review no blog, se existir
}

export const shopItems: ShopItem[] = [
    {
        id: '1',
        title: 'Kindle 11ª Geração',
        description: 'Leia seus livros de educação financeira em qualquer lugar. O melhor investimento para sua mente.',
        price: 'R$ 499,00',
        imageUrl: 'https://m.media-amazon.com/images/I/71B1wawvyjL._AC_SX679_.jpg',
        affiliateUrl: '#',
        store: 'Amazon',
        articleSlug: 'educacao-financeira-para-iniciantes-o-guia-simples-que-ninguem-te-ensinou'
    },
    {
        id: '2',
        title: 'Pai Rico, Pai Pobre (Edição Atualizada)',
        description: 'O livro de finanças pessoais número 1 do mundo. Recomendação obrigatória para quem quer prosperar.',
        price: 'R$ 45,90',
        imageUrl: 'https://m.media-amazon.com/images/I/81vqnOG2-vL._AC_SY879_.jpg',
        affiliateUrl: '#',
        store: 'Amazon',
        articleSlug: 'mentalidade-milionaria-o-que-as-pessoas-ricas-fazem-diferente'
    },
    {
        id: '3',
        title: 'Cadeira de Escritório Ergonômica',
        description: 'Trabalhe e estude com o conforto que sua coluna merece. Aumente seu foco e produtividade na sua Renda Extra.',
        price: 'R$ 389,90',
        imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_909562-MLU72688941706_112023-O.webp',
        affiliateUrl: '#',
        store: 'Mercado Livre',
        articleSlug: 'como-sair-do-zero-e-fazer-seus-primeiros-1000'
    }
];
