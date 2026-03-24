import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sobre o Blog DividAI | Quem Somos",
    description:
        "Conheça o Blog DividAI: educação financeira acessível para o investidor brasileiro. Saiba quem somos, nossa missão e por que criamos este blog.",
    alternates: {
        canonical: "https://blog.dividai.com/sobre",
    },
};

export default function SobrePage() {
    return (
        <article style={{ maxWidth: "800px", margin: "4rem auto 4rem auto" }}>
            <header className="article-header">
                <h1 className="article-title">Sobre o Blog DividAI</h1>
            </header>

            <div className="article-content" style={{ lineHeight: "1.8" }}>
                <div style={{
                    background: "var(--card-bg, rgba(255,255,255,0.05))",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "1.5rem 2rem",
                    marginBottom: "2rem",
                    fontSize: "1.1rem",
                    fontStyle: "italic",
                    color: "var(--primary)"
                }}>
                    &quot;Acreditamos que educação financeira de qualidade deve ser acessível a todos. Nosso objetivo é ajudar cada brasileiro a tomar decisões financeiras mais conscientes e construir um futuro mais seguro.&quot;
                </div>

                <h2 style={{ marginTop: "2rem" }}>Quem Somos</h2>
                <p>O <strong>Blog DividAI</strong> é a plataforma de conteúdo do ecossistema <a href="https://dividai.com" style={{ color: "var(--primary)", textDecoration: "underline" }}>DividAI</a> — uma ferramenta de rastreamento de dividendos e gestão de carteira de investimentos para o mercado brasileiro.</p>
                <p>Nascemos da mesma frustração que muitos investidores brasileiros compartilham: a dificuldade de encontrar <strong>informação financeira clara, prática e voltada para a realidade do Brasil</strong>. A maioria do conteúdo disponível online é genérica, traduzida de mercados internacionais, ou excessivamente técnica para quem está começando.</p>
                <p>Decidimos mudar isso.</p>

                <h2 style={{ marginTop: "2rem" }}>Nossa Missão</h2>
                <p>Produzir <strong>conteúdo educacional de alta qualidade</strong> sobre finanças pessoais e investimentos, com foco total na realidade brasileira. Isso significa:</p>
                <ul>
                    <li><strong>Falar de CDI, Selic e Tesouro Direto</strong> — não de Treasury Bonds e S&P 500</li>
                    <li><strong>Discutir FIIs, ações da B3 e renda fixa brasileira</strong> com dados reais e atualizados</li>
                    <li><strong>Abordar temas práticos</strong> como renda extra, planejamento financeiro e como sair das dívidas</li>
                    <li><strong>Tratar de mentalidade financeira</strong> — porque investir começa na forma de pensar</li>
                    <li><strong>Usar linguagem acessível</strong> — sem jargões desnecessários e com exemplos do dia a dia</li>
                </ul>

                <h2 style={{ marginTop: "2rem" }}>O que Você Encontra Aqui</h2>
                <p>Nossos artigos são organizados em categorias pensadas para cobrir toda a jornada do investidor brasileiro:</p>
                <ul>
                    <li><strong>Finanças Pessoais:</strong> Organização financeira, orçamento, como sair das dívidas, planejamento para metas</li>
                    <li><strong>Renda Fixa:</strong> CDBs, Tesouro Direto, LCIs/LCAs, debêntures — como investir com segurança</li>
                    <li><strong>Renda Variável:</strong> Ações, FIIs, ETFs — como montar e gerenciar uma carteira de dividendos</li>
                    <li><strong>Criptomoedas:</strong> Bitcoin, Ethereum e o universo cripto com olhar educacional</li>
                    <li><strong>Mentalidade:</strong> A psicologia por trás do dinheiro e como desenvolver hábitos financeiros saudáveis</li>
                    <li><strong>Renda Extra:</strong> Formas práticas de aumentar sua renda e acelerar seus investimentos</li>
                </ul>

                <h2 style={{ marginTop: "2rem" }}>Nosso Compromisso</h2>
                <p>Todos os artigos publicados no Blog DividAI são:</p>
                <ul>
                    <li><strong>Originais</strong> — escritos com pesquisa própria e dados verificados</li>
                    <li><strong>Atualizados</strong> — revisamos e atualizamos conteúdos regularmente</li>
                    <li><strong>Gratuitos</strong> — não cobramos pelo acesso a nenhum artigo</li>
                    <li><strong>Imparciais</strong> — não recebemos pagamento de corretoras ou gestoras para recomendar produtos</li>
                </ul>

                <div style={{
                    background: "var(--card-bg, rgba(255,255,255,0.05))",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "1.5rem 2rem",
                    marginTop: "2rem",
                    marginBottom: "2rem"
                }}>
                    <p style={{ marginBottom: "0.5rem" }}><strong>⚠️ Importante:</strong></p>
                    <p style={{ margin: 0, fontSize: "0.95rem" }}>O Blog DividAI <strong>não presta consultoria financeira</strong>. Todo conteúdo tem caráter informativo e educacional. Decisões de investimento devem ser tomadas com base em análise própria e, de preferência, com orientação de profissionais qualificados. Leia nossos <a href="/termos-de-uso" style={{ color: "var(--primary)", textDecoration: "underline" }}>Termos de Uso</a> para mais detalhes.</p>
                </div>

                <h2 style={{ marginTop: "2rem" }}>Sobre a Plataforma DividAI</h2>
                <p>Além do blog, o <strong>DividAI</strong> (<a href="https://dividai.com" style={{ color: "var(--primary)", textDecoration: "underline" }}>dividai.com</a>) é uma plataforma completa para investidores que oferece:</p>
                <ul>
                    <li><strong>Rastreamento de dividendos</strong> — saiba quanto você recebe de proventos automaticamente</li>
                    <li><strong>Gestão de carteira</strong> — veja a composição e desempenho do seu portfólio</li>
                    <li><strong>Análises com IA</strong> — receba insights inteligentes sobre seus investimentos</li>
                    <li><strong>Alertas de proventos</strong> — nunca perca uma data-ex importante</li>
                </ul>

                <h2 style={{ marginTop: "2rem" }}>Fale Conosco</h2>
                <p>Adoramos ouvir nossos leitores! Se você tem dúvidas, sugestões de pauta, identificou algum erro ou simplesmente quer bater um papo sobre investimentos:</p>
                <ul>
                    <li><strong>Email:</strong> <a href="mailto:contato@dividai.com" style={{ color: "var(--primary)", textDecoration: "underline" }}>contato@dividai.com</a></li>
                    <li><strong>Telegram:</strong> <a href="https://t.me/dividai_news" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", textDecoration: "underline" }}>@dividai_news</a></li>
                    <li><strong>Página de Contato:</strong> <a href="/contato" style={{ color: "var(--primary)", textDecoration: "underline" }}>blog.dividai.com/contato</a></li>
                </ul>

                <p style={{ marginTop: "3rem", fontSize: "0.9rem", color: "var(--muted)", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
                    O Blog DividAI foi lançado em <strong>Fevereiro de 2026</strong> como parte da missão de democratizar a educação financeira no Brasil. Obrigado por fazer parte desta jornada.
                </p>
            </div>
        </article>
    );
}
