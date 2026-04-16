import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Termos de Uso | Blog DividAI",
    description:
        "Leia os Termos de Uso do Blog DividAI. Conheça as regras de uso do site, direitos autorais, limitações de responsabilidade e condições gerais.",
    alternates: {
        canonical: "https://dividai.com/termos-de-uso",
    },
};

export default function TermosDeUso() {
    return (
        <article style={{ maxWidth: "800px", margin: "4rem auto 4rem auto" }}>
            <header className="article-header">
                <h1 className="article-title">Termos de Uso</h1>
            </header>

            <div className="article-content" style={{ lineHeight: "1.8" }}>
                <p style={{ fontWeight: "500", color: "var(--primary)" }}>Última atualização: Março de 2026</p>

                <p>Bem-vindo ao <strong>Blog DividAI</strong> (dividai.com). Ao acessar e utilizar este site, você concorda com os presentes Termos de Uso. Leia atentamente antes de continuar navegando.</p>

                <h2 style={{ marginTop: "2rem" }}>1. Sobre o Blog DividAI</h2>
                <p>O Blog DividAI é uma publicação digital voltada à <strong>educação financeira</strong> e informação sobre investimentos, com foco na realidade do mercado brasileiro. Nosso conteúdo abrange temas como:</p>
                <ul>
                    <li>Finanças pessoais e organização financeira</li>
                    <li>Investimentos em ações, FIIs, renda fixa e criptomoedas</li>
                    <li>Dividendos e renda passiva</li>
                    <li>Economia brasileira e cenário macroeconômico</li>
                    <li>Mentalidade financeira e planejamento de longo prazo</li>
                </ul>


                <h2 style={{ marginTop: "2rem" }}>2. Natureza do Conteúdo</h2>
                <p>Todo o conteúdo publicado neste blog tem <strong>caráter exclusivamente educacional e informativo</strong>. É importante ressaltar que:</p>
                <ul>
                    <li><strong>Não somos consultores financeiros</strong>, analistas CNPI, gestores de recursos ou corretoras de valores mobiliários</li>
                    <li>Nenhum artigo, análise ou comentário constitui <strong>recomendação de compra ou venda</strong> de qualquer ativo financeiro</li>
                    <li>Decisões de investimento devem ser tomadas com base em <strong>análise própria</strong> e, de preferência, com o acompanhamento de profissionais qualificados (consultores CVM, planejadores financeiros, contadores)</li>
                    <li><strong>Resultados passados não garantem resultados futuros</strong> — todo investimento envolve riscos, inclusive perda parcial ou total do capital</li>
                </ul>

                <h2 style={{ marginTop: "2rem" }}>3. Propriedade Intelectual</h2>
                <p>Todo o conteúdo do Blog DividAI — incluindo textos, gráficos, imagens, logotipos, layout e estrutura do site — é protegido por direitos autorais e pertence ao DividAI.</p>
                <p>É <strong>permitido</strong>:</p>
                <ul>
                    <li>Compartilhar links dos artigos em redes sociais e outras plataformas</li>
                    <li>Citar trechos curtos (até 200 palavras) com devida atribuição e link para o artigo original</li>
                </ul>
                <p>É <strong>proibido</strong>:</p>
                <ul>
                    <li>Reproduzir artigos na íntegra sem autorização prévia e escrita</li>
                    <li>Utilizar o conteúdo para fins comerciais sem permissão</li>
                    <li>Alterar, modificar ou criar obras derivadas sem consentimento</li>
                </ul>

                <h2 style={{ marginTop: "2rem" }}>4. Uso Adequado do Site</h2>
                <p>Ao utilizar o Blog DividAI, o visitante compromete-se a:</p>
                <ul>
                    <li>Não tentar comprometer a segurança, integridade ou disponibilidade do site</li>
                    <li>Não utilizar bots, scrapers ou ferramentas automatizadas para acessar ou copiar conteúdo em massa</li>
                    <li>Não publicar comentários ofensivos, difamatórios, discriminatórios ou que violem leis vigentes</li>
                    <li>Não utilizar o site para distribuição de spam, malware ou conteúdo ilegal</li>
                </ul>

                <h2 style={{ marginTop: "2rem" }}>5. Publicidade e Monetização</h2>
                <p>O Blog DividAI pode exibir anúncios de terceiros, incluindo anúncios do <strong>Google AdSense</strong>, para financiar a produção de conteúdo gratuito e de qualidade. Ao navegar neste site:</p>
                <ul>
                    <li>Você reconhece que anúncios de terceiros podem ser exibidos</li>
                    <li>O Google e outros parceiros de publicidade podem usar cookies para personalizar anúncios com base em suas visitas a este e outros sites</li>
                    <li>Você pode gerenciar suas preferências de anúncios em <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", textDecoration: "underline" }}>Configurações de Anúncios do Google</a></li>
                </ul>
                <p>Para mais detalhes, consulte nossa <a href="/politica-de-privacidade" style={{ color: "var(--primary)", textDecoration: "underline" }}>Política de Privacidade</a>.</p>

                <h2 style={{ marginTop: "2rem" }}>6. Links para Sites de Terceiros</h2>
                <p>O Blog DividAI pode conter links para sites externos (corretoras, plataformas financeiras, fontes de dados, entre outros). Não somos responsáveis pelo conteúdo, políticas de privacidade ou práticas de sites terceiros. Recomendamos que o visitante revise os termos de cada site acessado.</p>

                <h2 style={{ marginTop: "2rem" }}>7. Limitação de Responsabilidade</h2>
                <p>O Blog DividAI:</p>
                <ul>
                    <li><strong>Não garante</strong> a precisão, atualidade ou completude de todas as informações publicadas</li>
                    <li><strong>Não se responsabiliza</strong> por decisões financeiras tomadas com base no conteúdo do blog</li>
                    <li><strong>Não garante</strong> disponibilidade ininterrupta do site, podendo ocorrer manutenções e atualizações</li>
                    <li><strong>Não se responsabiliza</strong> por perdas ou danos decorrentes do uso das informações publicadas</li>
                </ul>

                <h2 style={{ marginTop: "2rem" }}>8. Modificações dos Termos</h2>
                <p>Reservamo-nos o direito de atualizar estes Termos de Uso a qualquer momento. Alterações significativas serão comunicadas nesta página com a atualização da data de &quot;Última atualização&quot;. O uso contínuo do site após alterações implica concordância com os novos termos.</p>

                <h2 style={{ marginTop: "2rem" }}>9. Legislação Aplicável</h2>
                <p>Estes Termos de Uso são regidos pelas leis da <strong>República Federativa do Brasil</strong>, em especial:</p>
                <ul>
                    <li>Código Civil Brasileiro (Lei nº 10.406/2002)</li>
                    <li>Marco Civil da Internet (Lei nº 12.965/2014)</li>
                    <li>Lei Geral de Proteção de Dados — LGPD (Lei nº 13.709/2018)</li>
                    <li>Código de Defesa do Consumidor (Lei nº 8.078/1990), quando aplicável</li>
                </ul>
                <p>Para resolução de eventuais disputas, fica eleito o foro da comarca de domicílio do titular da plataforma.</p>

                <h2 style={{ marginTop: "2rem" }}>10. Contato</h2>
                <p>Para dúvidas, sugestões ou solicitações relacionadas a estes Termos, entre em contato:</p>
                <ul>
                    <li><strong>Email:</strong> <a href="mailto:contato@dividai.com" style={{ color: "var(--primary)", textDecoration: "underline" }}>contato@dividai.com</a></li>
                    <li><strong>Telegram:</strong> <a href="https://t.me/dividai_news" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", textDecoration: "underline" }}>@dividai_news</a></li>
                </ul>

                <p style={{ marginTop: "3rem", fontSize: "0.9rem", color: "var(--muted)", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
                    Estes Termos de Uso são efetivos a partir de <strong>Março de 2026</strong> e se aplicam a todos os visitantes e usuários do Blog DividAI (dividai.com).
                </p>
            </div>
        </article>
    );
}
