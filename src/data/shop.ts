export interface ShopItem {
    id: string;
    title: string;
    description: string;
    price: string;
    imageUrl: string;
    affiliateUrl: string;
    store: 'Amazon' | 'Mercado Livre' | 'Shopee';
    category: string;
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
        category: 'Eletrônicos',
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
        category: 'Livros',
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
        category: 'Móveis',
        articleSlug: 'como-sair-do-zero-e-fazer-seus-primeiros-1000'
    },
    {
        id: '4',
        title: 'Os Segredos Da Mente Milionária',
        description: 'Mude de uma vez por todas sua mentalidade em relação ao dinheiro.',
        price: 'R$ 32,35',
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_645553-MLU53737893378_022023-AB.webp',
        affiliateUrl: 'https://meli.la/1qiNgpu',
        store: 'Mercado Livre',
        category: 'Livros'
    },
    {
        id: '5',
        title: 'Deixe De Ser Pobre - Primo Pobre',
        description: 'Os segredos para você sair da pindaíba e conquistar sua independência.',
        price: 'R$ 24,90',
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_653319-MLB81814566067_012025-AB.webp',
        affiliateUrl: 'https://meli.la/1yjzqhx',
        store: 'Mercado Livre',
        category: 'Livros'
    },
    {
        id: '6',
        title: 'Princípios Milenares - Thiago Brunet',
        description: '10 leis espirituais para uma vida de paz e prosperidade.',
        price: 'R$ 34,51',
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_725072-MLU78040547178_082024-AB.webp',
        affiliateUrl: 'https://meli.la/2NEehny',
        store: 'Mercado Livre',
        category: 'Livros'
    },
    {
        id: '7',
        title: 'Devocional Café Com Deus Pai 2026',
        description: 'Porções diárias de amor para começar o dia no caminho certo.',
        price: 'R$ 47,11',
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_619525-MLA93494605423_092025-AB.webp',
        affiliateUrl: 'https://meli.la/2R9w1ca',
        store: 'Mercado Livre',
        category: 'Livros'
    },
    {
        id: '8',
        title: 'Mais Esperto Que O Diabo - Napoleon Hill',
        description: 'Um clássico absoluto sobre quebra de crenças limitantes.',
        price: 'R$ 26,92',
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_985212-MLA82741575770_032025-AB.webp',
        affiliateUrl: 'https://meli.la/2LjnSXP',
        store: 'Mercado Livre',
        category: 'Livros'
    },
    {
        id: '9',
        title: 'O Clube Secreto Dos Milionários',
        description: 'Aprenda os segredos que grandes mentores ensinam.',
        price: 'R$ 73,80',
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_728060-MLA99450310336_112025-AB.webp',
        affiliateUrl: 'https://meli.la/2GEzfJe',
        store: 'Mercado Livre',
        category: 'Livros'
    },
    {
        id: '10',
        title: 'Kit: 3 Livros Clássicos para o Sucesso',
        description: 'Trio Indispensável: Deixe de Ser Pobre + Homem Mais Rico da Babilônia + Segredos Mente Milionária.',
        price: 'R$ 72,63',
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_780459-MLB83042767080_032025-AB.webp',
        affiliateUrl: 'https://meli.la/1LUJh3m',
        store: 'Mercado Livre',
        category: 'Livros'
    },
    {
        id: '11',
        title: 'Fire TV Stick HD (Geração mais recente)',
        description: 'Transforme sua TV em smart e acesse seus conteúdos de educação financeira e entretenimento.',
        price: 'R$ 269,00',
        imageUrl: 'https://m.media-amazon.com/images/I/61K7fAOac9L._AC_SX679_.jpg',
        affiliateUrl: 'https://amzn.to/407Uwb9',
        store: 'Amazon',
        category: 'Eletrônicos'
    },
    {
        id: '12',
        title: 'Apple 2025 MacBook Air (13", M4, 16GB, 256GB)',
        description: 'Potência e produtividade absurdas para o seu trabalho e Renda Extra em qualquer lugar.',
        price: 'R$ 8.480,55',
        imageUrl: 'https://m.media-amazon.com/images/I/51xUXDpOifL._AC_SX522_.jpg',
        affiliateUrl: 'https://amzn.to/4sKq6rN',
        store: 'Amazon',
        category: 'Eletrônicos'
    },
    {
        id: '13',
        title: 'Apple iPhone 17 Pro Max (512 GB)',
        description: 'O que há de mais avançado em tecnologia mobile para criar conteúdo e gerenciar negócios.',
        price: 'R$ 13.159,00',
        imageUrl: 'https://m.media-amazon.com/images/I/41KOxRsuiiL._AC_SX679_.jpg',
        affiliateUrl: 'https://amzn.to/4bo54Jn',
        store: 'Amazon',
        category: 'Eletrônicos'
    },
    {
        id: '14',
        title: 'Samsung Galaxy S25 Ultra 5G, 256GB',
        description: 'Um verdadeiro computador de bolso com câmera profissional para todas as suas necessidades.',
        price: 'R$ 6.598,80',
        imageUrl: 'https://m.media-amazon.com/images/I/41uS5ZSX9yL._AC_SX679_.jpg',
        affiliateUrl: 'https://amzn.to/4d0sWUz',
        store: 'Amazon',
        category: 'Eletrônicos'
    },
    {
        id: '15',
        title: 'Samsung Smart TV 43" Crystal UHD 4K 2025',
        description: 'Qualidade de imagem estonteante para relaxar com estilo após um dia de trabalho produtivo.',
        price: 'R$ 1.709,90',
        imageUrl: 'https://m.media-amazon.com/images/I/81-ljI2R4dL._AC_SX522_.jpg',
        affiliateUrl: 'https://amzn.to/40exzmz',
        store: 'Amazon',
        category: 'Eletrônicos'
    },
    {
        id: '16',
        title: 'Samsung Vision AI TV 55" QLED 4K 2025',
        description: 'Inteligência Artificial na sua TV, garantindo a melhor experiência visual do mercado.',
        price: 'R$ 2.719,00',
        imageUrl: 'https://m.media-amazon.com/images/I/616l6zgYapL._AC_SX522_.jpg',
        affiliateUrl: 'https://amzn.to/40aUak2',
        store: 'Amazon',
        category: 'Eletrônicos'
    },
    {
        id: '17',
        title: 'Samsung Galaxy A16, 128GB',
        description: 'Custo-benefício imbatível para acessar seus apps de finanças com fluidez.',
        price: 'R$ 834,90',
        imageUrl: 'https://m.media-amazon.com/images/I/31x9m9ylrzL._AC_SX522_.jpg',
        affiliateUrl: 'https://amzn.to/3NfDmFy',
        store: 'Amazon',
        category: 'Eletrônicos'
    },
    {
        id: '18',
        title: 'Kindle Paperwhite 16 GB',
        description: 'Tela maior e carregamento mais rápido. Leve a biblioteca dos milionários no bolso.',
        price: 'R$ 849,00',
        imageUrl: 'https://m.media-amazon.com/images/I/81-vCHKJb1L._AC_SY450_.jpg',
        affiliateUrl: 'https://amzn.to/4aQYlHV',
        store: 'Amazon',
        category: 'Eletrônicos'
    },
    {
        id: '19',
        title: 'Echo Show 5 (3ª Geração)',
        description: 'Organize seu dia, veja câmeras, controle a casa inteligente e não perca tempo com a Alexa.',
        price: 'R$ 559,00',
        imageUrl: 'https://m.media-amazon.com/images/I/81R7B3TwIBL._AC_SX679_.jpg',
        affiliateUrl: 'https://amzn.to/3N4kid9',
        store: 'Amazon',
        category: 'Eletrônicos'
    },
    {
        id: '20',
        title: 'Kindle Paperwhite Signature 32 GB',
        description: 'A versão mais premium com ajuste de luz automático, carregamento sem fio e espaço infinito.',
        price: 'R$ 959,00',
        imageUrl: 'https://m.media-amazon.com/images/I/81dbQUG-j3L._AC_SY450_.jpg',
        affiliateUrl: 'https://amzn.to/4rSiiUJ',
        store: 'Amazon',
        category: 'Eletrônicos'
    }
];
