import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sobre o Blog DividAI | Quem Somos",
    description:
        "Conheça o Blog DividAI: educação financeira acessível para o investidor brasileiro. Saiba quem somos, nossa missão e por que criamos este blog.",
    alternates: {
        canonical: "https://dividai.com/sobre",
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
                <p>O <strong>DividAI</strong> nasceu de uma constatação incômoda: o INSS não vai sustentar as próximas gerações.</p>
                <p>O sistema previdenciário brasileiro funciona na prática como uma pirâmide financeira — cada geração paga a aposentadoria da anterior, sem acumulação real de capital. Com o envelhecimento da população e a queda na taxa de natalidade, essa conta simplesmente não fecha. E quem vai pagar o preço são os trabalhadores de hoje.</p>
                <p>Lucas Bianchi, investidor e entusiasta de tecnologia de Curitiba, percebeu isso há alguns anos e decidiu fazer algo diferente: estudar o mercado financeiro por conta própria e construir sua independência sem depender do governo. O Blog DividAI é o resultado desse aprendizado — um espaço para compartilhar o que funcionou, o que não funcionou, e ajudar outros brasileiros a fazerem o mesmo.</p>

                <h2 style={{ marginTop: "2rem" }}>Nossa Missão</h2>
                <p>Ajudar brasileiros comuns a construir uma carteira de investimentos que gere renda passiva suficiente para tornar o INSS irrelevante — ou pelo menos, opcional. Isso significa:</p>
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
                    <li><strong>Baseados em pesquisa</strong> — cada artigo é fundamentado em dados do mercado brasileiro</li>
                    <li><strong>Atualizados</strong> — revisamos e atualizamos conteúdos regularmente</li>
                    <li><strong>Gratuitos</strong> — não cobramos pelo acesso a nenhum artigo</li>
                    <li><strong>Transparentes</strong> — não recebemos pagamento de corretoras ou gestoras para recomendar produtos</li>
                </ul>

                <h2 style={{ marginTop: "2rem" }}>Equipe Editorial</h2>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.5rem",
                    background: "var(--card-bg, rgba(0,0,0,0.02))",
                    padding: "1.5rem",
                    borderRadius: "16px",
                    border: "1px solid var(--border)",
                    marginTop: "1.5rem"
                }}>
                    <img 
                        src="/lucas-bianchi.png" 
                        alt="Lucas Bianchi" 
                        style={{
                            width: "90px",
                            height: "90px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            border: "2px solid var(--primary)"
                        }}
                    />
                    <div>
                        <h3 style={{ margin: "0 0 0.25rem 0", fontSize: "1.1rem" }}>Lucas Bianchi</h3>
                        <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.85rem", fontWeight: "600", color: "var(--primary)", textTransform: "uppercase" }}>Editor-chefe</p>
                        <p style={{ margin: 0, fontSize: "0.9rem", lineHeight: "1.5", color: "var(--muted)" }}>
                            Investidor há 3 anos, entusiasta de tecnologia e dividendos, de Curitiba. Criou o DividAI depois de perceber que o INSS não é um plano de aposentadoria confiável. Escreve para quem quer construir independência financeira do zero, sem precisar ser especialista.
                        </p>
                    </div>
                </div>

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



                <h2 style={{ marginTop: "2rem" }}>Fale Conosco</h2>
                <p>Adoramos ouvir nossos leitores! Se você tem dúvidas, sugestões de pauta, identificou algum erro ou simplesmente quer bater um papo sobre investimentos:</p>
                <ul>
                    <li><strong>Email:</strong> <a href="mailto:contato@dividai.com" style={{ color: "var(--primary)", textDecoration: "underline" }}>contato@dividai.com</a></li>
                    <li><strong>Instagram:</strong> <a href="https://www.instagram.com/dividai_app/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", textDecoration: "underline" }}>@dividai_app</a></li>
                    <li><strong>X (Twitter):</strong> <a href="https://x.com/DividAI_App" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", textDecoration: "underline" }}>@DividAI_App</a></li>
                    <li><strong>Threads:</strong> <a href="https://www.threads.com/@dividai_app" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", textDecoration: "underline" }}>@dividai_app</a></li>
                    <li><strong>Telegram:</strong> <a href="https://t.me/dividai_news" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", textDecoration: "underline" }}>@dividai_news</a></li>
                    <li><strong>Página de Contato:</strong> <a href="/contato" style={{ color: "var(--primary)", textDecoration: "underline" }}>dividai.com/contato</a></li>
                </ul>

                <p style={{ marginTop: "3rem", fontSize: "0.9rem", color: "var(--muted)", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
                    O Blog DividAI foi lançado em <strong>Fevereiro de 2026</strong> como parte da missão de democratizar a educação financeira no Brasil. Obrigado por fazer parte desta jornada.
                </p>
            </div>
        </article>
    );
}
