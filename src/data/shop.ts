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
        title: 'Kindle Colorsoft (16 GB)',
        description: 'O primeiro Kindle com tela colorida. Alta resolução e bateria de longa duração para suas leituras.',
        price: 'R$ 2.199,00',
        imageUrl: 'https://m.media-amazon.com/images/I/71lORNHYWLL._AC_SY450_.jpg',
        affiliateUrl: 'https://amzn.to/4cZWzp5',
        store: 'Amazon',
        category: 'Eletrônicos',
        articleSlug: 'educacao-financeira-para-iniciantes-o-guia-simples-que-ninguem-te-ensinou'
    },
    {
        id: '2',
        title: 'Pai Rico, Pai Pobre (Edição Atualizada)',
        description: 'O livro de finanças pessoais número 1 do mundo. Recomendação obrigatória para quem quer prosperar.',
        price: 'R$ 45,90',
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_631924-MLU74994562986_032024-V.webp',
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
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_764756-MLA96570589252_112025-V.webp',
        affiliateUrl: 'https://meli.la/1p5MRgL',
        store: 'Mercado Livre',
        category: 'Móveis',
        articleSlug: 'como-sair-do-zero-e-fazer-seus-primeiros-1000-em-30-dias'
    },
    {
        id: '4',
        title: 'Os Segredos Da Mente Milionária',
        description: 'Mude de uma vez por todas sua mentalidade em relação ao dinheiro.',
        price: 'R$ 32,35',
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_645553-MLU53737893378_022023-AB.webp',
        affiliateUrl: 'https://meli.la/1qiNgpu',
        store: 'Mercado Livre',
        category: 'Livros',
        articleSlug: 'mentalidade-milionaria-o-que-as-pessoas-ricas-fazem-diferente'
    },
    {
        id: '5',
        title: 'Deixe De Ser Pobre - Primo Pobre',
        description: 'Os segredos para você sair da pindaíba e conquistar sua independência.',
        price: 'R$ 24,90',
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_653319-MLB81814566067_012025-AB.webp',
        affiliateUrl: 'https://meli.la/1yjzqhx',
        store: 'Mercado Livre',
        category: 'Livros',
        articleSlug: 'como-organizar-sua-vida-financeira-mesmo-ganhando-pouco'
    },
    {
        id: '6',
        title: 'Princípios Milenares - Thiago Brunet',
        description: '10 leis espirituais para uma vida de paz e prosperidade.',
        price: 'R$ 34,51',
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_725072-MLU78040547178_082024-AB.webp',
        affiliateUrl: 'https://meli.la/2NEehny',
        store: 'Mercado Livre',
        category: 'Livros',
        articleSlug: 'mentalidade-milionaria-o-que-as-pessoas-ricas-fazem-diferente'
    },
    {
        id: '7',
        title: 'Devocional Café Com Deus Pai 2026',
        description: 'Porções diárias de amor para começar o dia no caminho certo.',
        price: 'R$ 47,11',
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_619525-MLA93494605423_092025-AB.webp',
        affiliateUrl: 'https://meli.la/2R9w1ca',
        store: 'Mercado Livre',
        category: 'Livros',
        articleSlug: 'como-organizar-sua-vida-financeira-mesmo-ganhando-pouco'
    },
    {
        id: '8',
        title: 'Mais Esperto Que O Diabo - Napoleon Hill',
        description: 'Um clássico absoluto sobre quebra de crenças limitantes.',
        price: 'R$ 26,92',
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_985212-MLA82741575770_032025-AB.webp',
        affiliateUrl: 'https://meli.la/2LjnSXP',
        store: 'Mercado Livre',
        category: 'Livros',
        articleSlug: 'mentalidade-milionaria-o-que-as-pessoas-ricas-fazem-diferente'
    },
    {
        id: '9',
        title: 'O Clube Secreto Dos Milionários',
        description: 'Aprenda os segredos que grandes mentores ensinam.',
        price: 'R$ 73,80',
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_728060-MLA99450310336_112025-AB.webp',
        affiliateUrl: 'https://meli.la/2GEzfJe',
        store: 'Mercado Livre',
        category: 'Livros',
        articleSlug: 'mentalidade-milionaria-o-que-as-pessoas-ricas-fazem-diferente'
    },
    {
        id: '10',
        title: 'Kit: 3 Livros Clássicos para o Sucesso',
        description: 'Trio Indispensável: Deixe de Ser Pobre + Homem Mais Rico da Babilônia + Segredos Mente Milionária.',
        price: 'R$ 72,63',
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_780459-MLB83042767080_032025-AB.webp',
        affiliateUrl: 'https://meli.la/1LUJh3m',
        store: 'Mercado Livre',
        category: 'Livros',
        articleSlug: 'educacao-financeira-para-iniciantes-o-guia-simples-que-ninguem-te-ensinou'
    },
    {
        id: '11',
        title: 'Fire TV Stick HD (Geração mais recente)',
        description: 'Transforme sua TV em smart e acesse seus conteúdos de educação financeira e entretenimento.',
        price: 'R$ 269,00',
        imageUrl: 'https://m.media-amazon.com/images/I/61K7fAOac9L._AC_SX679_.jpg',
        affiliateUrl: 'https://amzn.to/407Uwb9',
        store: 'Amazon',
        category: 'Eletrônicos',
        articleSlug: 'cortar-gastos-que-nao-trazem-retorno-real'
    },
    {
        id: '12',
        title: 'Apple 2025 MacBook Air (13", M4, 16GB, 256GB)',
        description: 'Potência e produtividade absurdas para o seu trabalho e Renda Extra em qualquer lugar.',
        price: 'R$ 8.480,55',
        imageUrl: 'https://m.media-amazon.com/images/I/51xUXDpOifL._AC_SX522_.jpg',
        affiliateUrl: 'https://amzn.to/4sKq6rN',
        store: 'Amazon',
        category: 'Eletrônicos',
        articleSlug: 'renda-extra-em-2026-15-ideias-reais-que-funcionam-no-brasil'
    },
    {
        id: '13',
        title: 'Apple iPhone 17 Pro Max (512 GB)',
        description: 'O que há de mais avançado em tecnologia mobile para criar conteúdo e gerenciar negócios.',
        price: 'R$ 13.159,00',
        imageUrl: 'https://m.media-amazon.com/images/I/41KOxRsuiiL._AC_SX679_.jpg',
        affiliateUrl: 'https://amzn.to/4bo54Jn',
        store: 'Amazon',
        category: 'Eletrônicos',
        articleSlug: 'renda-extra-em-2026-15-ideias-reais-que-funcionam-no-brasil'
    },
    {
        id: '14',
        title: 'Samsung Galaxy S25 Ultra 5G, 256GB',
        description: 'Um verdadeiro computador de bolso com câmera profissional para todas as suas necessidades.',
        price: 'R$ 6.598,80',
        imageUrl: 'https://m.media-amazon.com/images/I/41uS5ZSX9yL._AC_SX679_.jpg',
        affiliateUrl: 'https://amzn.to/4d0sWUz',
        store: 'Amazon',
        category: 'Eletrônicos',
        articleSlug: 'renda-extra-em-2026-15-ideias-reais-que-funcionam-no-brasil'
    },
    {
        id: '15',
        title: 'Samsung Smart TV 43" Crystal UHD 4K 2025',
        description: 'Qualidade de imagem estonteante para relaxar com estilo após um dia de trabalho produtivo.',
        price: 'R$ 1.709,90',
        imageUrl: 'https://m.media-amazon.com/images/I/81-ljI2R4dL._AC_SX522_.jpg',
        affiliateUrl: 'https://amzn.to/40exzmz',
        store: 'Amazon',
        category: 'Eletrônicos',
        articleSlug: 'cortar-gastos-que-nao-trazem-retorno-real'
    },
    {
        id: '16',
        title: 'Samsung Vision AI TV 55" QLED 4K 2025',
        description: 'Inteligência Artificial na sua TV, garantindo a melhor experiência visual do mercado.',
        price: 'R$ 2.719,00',
        imageUrl: 'https://m.media-amazon.com/images/I/616l6zgYapL._AC_SX522_.jpg',
        affiliateUrl: 'https://amzn.to/40aUak2',
        store: 'Amazon',
        category: 'Eletrônicos',
        articleSlug: 'cortar-gastos-que-nao-trazem-retorno-real'
    },
    {
        id: '17',
        title: 'Samsung Galaxy A16, 128GB',
        description: 'Custo-benefício imbatível para acessar seus apps de finanças com fluidez.',
        price: 'R$ 834,90',
        imageUrl: 'https://m.media-amazon.com/images/I/31x9m9ylrzL._AC_SX522_.jpg',
        affiliateUrl: 'https://amzn.to/3NfDmFy',
        store: 'Amazon',
        category: 'Eletrônicos',
        articleSlug: 'como-organizar-sua-vida-financeira-mesmo-ganhando-pouco'
    },
    {
        id: '18',
        title: 'Kindle Paperwhite 16 GB',
        description: 'Tela maior e carregamento mais rápido. Leve a biblioteca dos milionários no bolso.',
        price: 'R$ 849,00',
        imageUrl: 'https://m.media-amazon.com/images/I/81-vCHKJb1L._AC_SY450_.jpg',
        affiliateUrl: 'https://amzn.to/4aQYlHV',
        store: 'Amazon',
        category: 'Eletrônicos',
        articleSlug: 'educacao-financeira-para-iniciantes-o-guia-simples-que-ninguem-te-ensinou'
    },
    {
        id: '19',
        title: 'Echo Show 5 (3ª Geração)',
        description: 'Organize seu dia, veja câmeras, controle a casa inteligente e não perca tempo com a Alexa.',
        price: 'R$ 559,00',
        imageUrl: 'https://m.media-amazon.com/images/I/81R7B3TwIBL._AC_SX679_.jpg',
        affiliateUrl: 'https://amzn.to/3N4kid9',
        store: 'Amazon',
        category: 'Eletrônicos',
        articleSlug: 'como-organizar-sua-vida-financeira-mesmo-ganhando-pouco'
    },
    {
        id: '20',
        title: 'Kindle Paperwhite Signature 32 GB',
        description: 'A versão mais premium com ajuste de luz automático, carregamento sem fio e espaço infinito.',
        price: 'R$ 959,00',
        imageUrl: 'https://m.media-amazon.com/images/I/81dbQUG-j3L._AC_SY450_.jpg',
        affiliateUrl: 'https://amzn.to/4rSiiUJ',
        store: 'Amazon',
        category: 'Eletrônicos',
        articleSlug: 'educacao-financeira-para-iniciantes-o-guia-simples-que-ninguem-te-ensinou'
    },
    {
        id: '21',
        title: 'A Psicologia Financeira - Morgan Housel',
        description: 'Lições atemporais sobre riqueza, ganância e felicidade.',
        price: 'R$ 40,90',
        imageUrl: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-mds16ln774cx7e',
        affiliateUrl: 'https://s.shopee.com.br/4frEJXB7aT',
        store: 'Shopee',
        category: 'Livros',
        articleSlug: 'mentalidade-milionaria-o-que-as-pessoas-ricas-fazem-diferente'
    },
    {
        id: '22',
        title: 'O investidor em ações de dividendos',
        description: 'Estratégias práticas para focar em dividendos consistentes no longo prazo.',
        price: 'R$ 123,75',
        imageUrl: 'https://down-br.img.susercontent.com/file/sg-11134201-824i2-mdvys1rnpj4419_tn',
        affiliateUrl: 'https://s.shopee.com.br/5AnUuS9DZa',
        store: 'Shopee',
        category: 'Livros',
        articleSlug: 'investimentos-para-iniciantes-onde-investir-com-pouco-dinheiro'
    },
    {
        id: '23',
        title: 'A Sua Liberdade Financeira - André Blanchard',
        description: 'Um passo a passo incrível para organizar as finanças de forma simples.',
        price: 'R$ 14,90',
        imageUrl: 'https://down-br.img.susercontent.com/file/br-11134207-81z1k-mf18tgxllnnoc4',
        affiliateUrl: 'https://s.shopee.com.br/50U4i99quZ',
        store: 'Shopee',
        category: 'Livros',
        articleSlug: 'educacao-financeira-para-iniciantes-o-guia-simples-que-ninguem-te-ensinou'
    },
    {
        id: '24',
        title: 'Liberdade Financeira Sem Mimimi - Bruno César',
        description: 'Direto ao ponto para quem quer parar de perder dinheiro.',
        price: 'R$ 29,90',
        imageUrl: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m2mlc2v3fo5h65',
        affiliateUrl: 'https://s.shopee.com.br/4AuxicD1bQ',
        store: 'Shopee',
        category: 'Livros',
        articleSlug: 'educacao-financeira-para-iniciantes-o-guia-simples-que-ninguem-te-ensinou'
    },
    {
        id: '25',
        title: 'Inabalável: Um Guia Prático Para A Liberdade Financeira',
        description: 'O livro de Tony Robbins que destila a sabedoria dos maiores investidores do mundo.',
        price: 'R$ 50,72',
        imageUrl: 'https://down-br.img.susercontent.com/file/1b0382730db18c1249bbad04c352c637',
        affiliateUrl: 'https://s.shopee.com.br/40bXWJDewP',
        store: 'Shopee',
        category: 'Livros',
        articleSlug: 'investimentos-para-iniciantes-onde-investir-com-pouco-dinheiro'
    },
    {
        id: '26',
        title: 'O Poder Do Dinheiro',
        description: 'Passo a passo definitivo para conquistar sua Liberdade Financeira.',
        price: 'R$ 39,90',
        imageUrl: 'https://down-br.img.susercontent.com/file/br-11134201-22120-0uruwt2ljkkvb7_tn',
        affiliateUrl: 'https://s.shopee.com.br/6KzSIgBYX8',
        store: 'Shopee',
        category: 'Livros',
        articleSlug: 'mentalidade-milionaria-o-que-as-pessoas-ricas-fazem-diferente'
    },
    {
        id: '27',
        title: 'Guia Suno Dividendos - Estratégia Para Investir',
        description: 'A metodologia Suno compilada para quem quer viver de renda passiva.',
        price: 'R$ 44,63',
        imageUrl: 'https://down-br.img.susercontent.com/file/c1a05d112db214760f2ad89bd6eafeaf',
        affiliateUrl: 'https://s.shopee.com.br/6VIsUzAvCB',
        store: 'Shopee',
        category: 'Livros',
        articleSlug: 'investimentos-para-iniciantes-onde-investir-com-pouco-dinheiro'
    },
    {
        id: '28',
        title: 'Luminária LED 3D Bitcoin Criptomoeda',
        description: 'Decoração temática fantástica para o seu setup de investimentos.',
        price: 'R$ 54,95',
        imageUrl: 'https://down-br.img.susercontent.com/file/br-11134207-81z1k-mfo857xu7h1j7c',
        affiliateUrl: 'https://s.shopee.com.br/6fcIhIAHrE',
        store: 'Shopee',
        category: 'Casa',
        articleSlug: 'bitcoin-o-que-e-como-funciona-e-por-que-investir'
    },
    {
        id: '29',
        title: 'Quadro Decorativo Bitcoin Ouro',
        description: 'Inspiração diária na parede do seu escritório ou escritório em casa.',
        price: 'R$ 49,60',
        imageUrl: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lrgkr0deh1yz9a',
        affiliateUrl: 'https://s.shopee.com.br/6pvitb9eWH',
        store: 'Shopee',
        category: 'Casa',
        articleSlug: 'bitcoin-o-que-e-como-funciona-e-por-que-investir'
    },
    {
        id: '30',
        title: 'Pingente Bitcoin Redondo Moeda Antiga',
        description: 'Acessório discreto e elegante com a temática da principal criptomoneda.',
        price: 'R$ 45,00',
        imageUrl: 'https://down-br.img.susercontent.com/file/sg-11134201-7rfga-m464567xforfcf',
        affiliateUrl: 'https://s.shopee.com.br/70F95u91BK',
        store: 'Shopee',
        category: 'Acessórios',
        articleSlug: 'bitcoin-o-que-e-como-funciona-e-por-que-investir'
    },
    {
        id: '31',
        title: 'Display Decorativo Bitcoin Acrílico com Base de Madeira',
        description: 'Um toque executivo para decorar sua mesa de trabalho.',
        price: 'R$ 69,00',
        imageUrl: 'https://down-br.img.susercontent.com/file/br-11134207-81z1k-me1qugzfklc25a_tn',
        affiliateUrl: 'https://s.shopee.com.br/3fyh7rxUYD',
        store: 'Shopee',
        category: 'Casa',
        articleSlug: 'bitcoin-o-que-e-como-funciona-e-por-que-investir'
    },
    {
        id: '32',
        title: 'Camiseta Bitcoin Satoshi Nakamoto',
        description: 'Vista a camisa da revolução financeira descentralizada.',
        price: 'R$ 49,99',
        imageUrl: 'https://down-br.img.susercontent.com/file/br-11134207-81z1k-mexeuhpdftheda',
        affiliateUrl: 'https://s.shopee.com.br/3VfGvYy7tC',
        store: 'Shopee',
        category: 'Roupas',
        articleSlug: 'bitcoin-o-que-e-como-funciona-e-por-que-investir'
    },
    {
        id: '33',
        title: 'Quadro Decorativo Tio Patinhas Bitcoin',
        description: 'A união do símbolo clássico da riqueza com a nova economia.',
        price: 'R$ 82,78',
        imageUrl: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m5w68drc3buac7_tn',
        affiliateUrl: 'https://s.shopee.com.br/3LLqjFylEB',
        store: 'Shopee',
        category: 'Casa',
        articleSlug: 'bitcoin-o-que-e-como-funciona-e-por-que-investir'
    },
    {
        id: '34',
        title: 'Painel Adesivo Decorativo Bitcoin Mercado Financeiro',
        description: 'Transforme todo o ambiente do seu quarto ou escritório.',
        price: 'R$ 79,00',
        imageUrl: 'https://down-br.img.susercontent.com/file/br-11134207-7qukw-lk5slly2u2dmcc',
        affiliateUrl: 'https://s.shopee.com.br/3B2QWwzOZA',
        store: 'Shopee',
        category: 'Casa',
        articleSlug: 'bitcoin-o-que-e-como-funciona-e-por-que-investir'
    },
    {
        id: '35',
        title: 'O Rei dos Dividendos - Luiz Barsi Filho',
        description: 'A autobiografia de ensinamentos do maior investidor brasileiro pessoa física.',
        price: 'R$ 34,90',
        imageUrl: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-mdmec8pzvlx5ea',
        affiliateUrl: 'https://s.shopee.com.br/30j0Ke01u9',
        store: 'Shopee',
        category: 'Livros',
        articleSlug: 'investimentos-para-iniciantes-onde-investir-com-pouco-dinheiro'
    },
    {
        id: '36',
        title: 'Tablet Lenovo Idea Tab Octa-Core (Caneta e Capa)',
        description: 'Tablet de 11" 2.5K de alta resolução, 128GB e 4GB RAM. Acompanha Lenovo Tab Pen e Capa Folio. Perfeito para edição Canva, estudo e renda extra online.',
        price: 'R$ 1.599,00',
        imageUrl: 'https://m.media-amazon.com/images/I/61tVQTdW0nL._AC_SL1500_.jpg',
        affiliateUrl: 'https://amzn.to/4rg2EkO',
        store: 'Amazon',
        category: 'Eletrônicos',
        articleSlug: 'renda-extra-em-2026-15-ideias-reais-que-funcionam-no-brasil'
    }
];
