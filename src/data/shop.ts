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
        affiliateUrl: 'https://www.mercadolivre.com.br/livro-os-segredos-da-mente-milionaria-edico-01-em-portugus-editora-sextante-2006/p/MLB21744909?pdp_filters=item_id%3AMLB4631785204&matt_tracing_id=05ba8cbc-92fe-4a23-992e-6a4811b4326e&matt_event_ts=1772655367234&matt_d2id=#polycard_client=social-profile-middleend&wid=MLB4631785204&source=lists&type=product&tracking_id=7351e016-201e-4024-a427-f501cfc8d458&sid=storefronts',
        store: 'Mercado Livre'
    },
    {
        id: '5',
        title: 'Deixe De Ser Pobre - Primo Pobre',
        description: 'Os segredos para você sair da pindaíba e conquistar sua independência.',
        price: 'R$ 24,90',
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_653319-MLB81814566067_012025-AB.webp',
        affiliateUrl: 'https://www.mercadolivre.com.br/livro-deixe-de-ser-pobre--os-segredos-para-voce-sair-da-pindaiba-e-conquistar-sua-independencia-financeira--eduardo-feldberg--primo-pobre/up/MLBU2929918391?pdp_filters=item_id%3AMLB5246638622&matt_tracing_id=05ba8cbc-92fe-4a23-992e-6a4811b4326e&matt_event_ts=1772655367234&matt_d2id=#polycard_client=social-profile-middleend&wid=MLB5246638622&source=lists&type=item&tracking_id=7351e016-201e-4024-a427-f501cfc8d458&sid=storefronts',
        store: 'Mercado Livre'
    },
    {
        id: '6',
        title: 'Princípios Milenares - Thiago Brunet',
        description: '10 leis espirituais para uma vida de paz e prosperidade.',
        price: 'R$ 34,51',
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_725072-MLU78040547178_082024-AB.webp',
        affiliateUrl: 'https://www.mercadolivre.com.br/livro-principios-milenares-10-leis-espirituais-para-uma-vida-de-paz-e-prosperidade-thiago-brunet-de-thiago-brunet-editorial-academia-tapa-mole-en-portugus/p/MLB39195325?pdp_filters=item_id%3AMLB3924274165&matt_tracing_id=05ba8cbc-92fe-4a23-992e-6a4811b4326e&matt_event_ts=1772655367234&matt_d2id=#polycard_client=social-profile-middleend&wid=MLB3924274165&source=lists&type=product&tracking_id=7351e016-201e-4024-a427-f501cfc8d458&sid=storefronts',
        store: 'Mercado Livre'
    },
    {
        id: '7',
        title: 'Devocional Café Com Deus Pai 2026',
        description: 'Porções diárias de amor para começar o dia no caminho certo.',
        price: 'R$ 47,11',
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_619525-MLA93494605423_092025-AB.webp',
        affiliateUrl: 'https://www.mercadolivre.com.br/devocional-cafe-com-deus-pai-porcoes-diarias-de-amor-junior-rostirola-edico-2026/p/MLB58119957?pdp_filters=item_id%3AMLB4241772593&matt_tracing_id=05ba8cbc-92fe-4a23-992e-6a4811b4326e&matt_event_ts=1772655367234&matt_d2id=#polycard_client=social-profile-middleend&wid=MLB4241772593&source=lists&type=product&tracking_id=7351e016-201e-4024-a427-f501cfc8d458&sid=storefronts',
        store: 'Mercado Livre'
    },
    {
        id: '8',
        title: 'Mais Esperto Que O Diabo - Napoleon Hill',
        description: 'Um clássico absoluto sobre quebra de crenças limitantes.',
        price: 'R$ 26,92',
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_985212-MLA82741575770_032025-AB.webp',
        affiliateUrl: 'https://www.mercadolivre.com.br/mais-esperto-que-o-diabo-napoleon-hill-citadel-editora-capa-mole-em-portugus/p/MLB19304593?pdp_filters=item_id%3AMLB4677809428&matt_tracing_id=05ba8cbc-92fe-4a23-992e-6a4811b4326e&matt_event_ts=1772655367234&matt_d2id=#polycard_client=social-profile-middleend&wid=MLB4677809428&source=lists&type=product&tracking_id=7351e016-201e-4024-a427-f501cfc8d458&sid=storefronts',
        store: 'Mercado Livre'
    },
    {
        id: '9',
        title: 'O Clube Secreto Dos Milionários',
        description: 'Aprenda os segredos que grandes mentores ensinam.',
        price: 'R$ 73,80',
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_728060-MLA99450310336_112025-AB.webp',
        affiliateUrl: 'https://www.mercadolivre.com.br/o-clube-secreto-dos-milionarios-de-andy-heyward-editora-fundamento-capa-mole-em-portugus/p/MLB23814021?pdp_filters=item_id%3AMLB3829642100&matt_tracing_id=05ba8cbc-92fe-4a23-992e-6a4811b4326e&matt_event_ts=1772655367234&matt_d2id=#polycard_client=social-profile-middleend&wid=MLB3829642100&source=lists&type=product&tracking_id=7351e016-201e-4024-a427-f501cfc8d458&sid=storefronts',
        store: 'Mercado Livre'
    },
    {
        id: '10',
        title: 'Kit: 3 Livros Clássicos para o Sucesso',
        description: 'Trio Indispensável: Deixe de Ser Pobre + Homem Mais Rico da Babilônia + Segredos Mente Milionária.',
        price: 'R$ 72,63',
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_780459-MLB83042767080_032025-AB.webp',
        affiliateUrl: 'https://www.mercadolivre.com.br/deixe-de-ser-pobre--o-homem-mais-rico-da-babilonia--os-segredos-da-mente-milionaria/up/MLBU3091820210?pdp_filters=item_id%3AMLB5329904148&matt_tracing_id=05ba8cbc-92fe-4a23-992e-6a4811b4326e&matt_event_ts=1772655367234&matt_d2id=#polycard_client=social-profile-middleend&wid=MLB5329904148&source=lists&type=item&tracking_id=7351e016-201e-4024-a427-f501cfc8d458&sid=storefronts',
        store: 'Mercado Livre'
    }
];
