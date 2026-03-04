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
        affiliateUrl: 'https://amzn.to/4aOY48h',
        store: 'Amazon',
        articleSlug: 'educacao-financeira-para-iniciantes-o-guia-simples-que-ninguem-te-ensinou'
    },
    {
        id: '2',
        title: 'Pai Rico, Pai Pobre (Edição Atualizada)',
        description: 'O livro de finanças pessoais número 1 do mundo. Recomendação obrigatória para quem quer prosperar.',
        price: 'R$ 45,90',
        imageUrl: 'https://m.media-amazon.com/images/I/81vqnOG2-vL._AC_SY879_.jpg',
        affiliateUrl: 'https://meli.la/1VcCpVs',
        store: 'Mercado Livre',
        articleSlug: 'mentalidade-milionaria-o-que-as-pessoas-ricas-fazem-diferente'
    },
    {
        id: '3',
        title: 'Cadeira de Escritório Ergonômica',
        description: 'Trabalhe e estude com o conforto que sua coluna merece. Aumente seu foco e produtividade na sua Renda Extra.',
        price: 'R$ 389,90',
        imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_909562-MLU72688941706_112023-O.webp',
        affiliateUrl: 'https://meli.la/1p5MRgL',
        store: 'Mercado Livre',
        articleSlug: 'como-sair-do-zero-e-fazer-seus-primeiros-1000'
    },
    {
        id: '4',
        title: 'Os Segredos Da Mente Milionária',
        description: 'Mude de uma vez por todas sua mentalidade em relação ao dinheiro.',
        price: 'R$ 32,35',
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_645553-MLU53737893378_022023-AB.webp',
        affiliateUrl: 'https://meli.la/1qiNgpu',
        store: 'Mercado Livre'
    },
    {
        id: '5',
        title: 'Deixe De Ser Pobre - Primo Pobre',
        description: 'Os segredos para você sair da pindaíba e conquistar sua independência.',
        price: 'R$ 24,90',
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_653319-MLB81814566067_012025-AB.webp',
        affiliateUrl: 'https://meli.la/1yjzqhx',
        store: 'Mercado Livre'
    },
    {
        id: '6',
        title: 'Princípios Milenares - Thiago Brunet',
        description: '10 leis espirituais para uma vida de paz e prosperidade.',
        price: 'R$ 34,51',
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_725072-MLU78040547178_082024-AB.webp',
        affiliateUrl: 'https://meli.la/2NEehny',
        store: 'Mercado Livre'
    },
    {
        id: '7',
        title: 'Devocional Café Com Deus Pai 2026',
        description: 'Porções diárias de amor para começar o dia no caminho certo.',
        price: 'R$ 47,11',
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_619525-MLA93494605423_092025-AB.webp',
        affiliateUrl: 'https://meli.la/2R9w1ca',
        store: 'Mercado Livre'
    },
    {
        id: '8',
        title: 'Mais Esperto Que O Diabo - Napoleon Hill',
        description: 'Um clássico absoluto sobre quebra de crenças limitantes.',
        price: 'R$ 26,92',
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_985212-MLA82741575770_032025-AB.webp',
        affiliateUrl: 'https://meli.la/2LjnSXP',
        store: 'Mercado Livre'
    },
    {
        id: '9',
        title: 'O Clube Secreto Dos Milionários',
        description: 'Aprenda os segredos que grandes mentores ensinam.',
        price: 'R$ 73,80',
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_728060-MLA99450310336_112025-AB.webp',
        affiliateUrl: 'https://meli.la/2GEzfJe',
        store: 'Mercado Livre'
    },
    {
        id: '10',
        title: 'Kit: 3 Livros Clássicos para o Sucesso',
        description: 'Trio Indispensável: Deixe de Ser Pobre + Homem Mais Rico da Babilônia + Segredos Mente Milionária.',
        price: 'R$ 72,63',
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_780459-MLB83042767080_032025-AB.webp',
        affiliateUrl: 'https://meli.la/1LUJh3m',
        store: 'Mercado Livre'
    }
];
