import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Privacidade | Blog DividAI",
    description:
        "Leia como o Blog DividAI coleta, usa e protege dados pessoais, cookies e informações de navegação.",
    alternates: {
        canonical: "https://dividai.com/politica-de-privacidade",
    },
};

export default function PoliticaPrivacidade() {
    return (
        <article style={{ maxWidth: "800px", margin: "4rem auto 4rem auto" }}>
            <header className="article-header">
                <h1 className="article-title">Política de Privacidade</h1>
            </header>

            <div className="article-content" style={{ lineHeight: "1.8" }}>
                <p style={{ fontWeight: "500", color: "var(--primary)" }}>Última atualização: Março de 2026</p>

                <p>A sua privacidade é importante para nós. É política do <strong>DividAI (dividai.com)</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos as suas informações.</p>

                <h2 style={{ marginTop: "2rem" }}>1. Informações que Coletamos</h2>
                <p>Coletamos informações de várias formas, incluindo:</p>
                <ul>
                    <li><strong>Formulário de Inscrição em Newsletter:</strong> Name (opcional) e endereço de email, coletados com seu consentimento explícito para enviar atualizações sobre nossos artigos</li>
                    <li><strong>Dados de Uso Automático:</strong> Endereço IP, tipo de navegador, sistema operacional, páginas visitadas, hora e duração das visitas através de análise de servidor</li>
                    <li><strong>Cookies e Tecnologias de Rastreamento:</strong> Usamos cookies para melhorar sua experiência no site e permitir publicidade personalizada do Google AdSense</li>
                </ul>

                <h2 style={{ marginTop: "2rem" }}>2. Como Usamos Suas Informações</h2>
                <p>Utilizamos as informações coletadas para:</p>
                <ul>
                    <li>Fornecer, manter e melhorar nossos serviços e conteúdo</li>
                    <li>Enviar newsletters e atualizações de artigos (apenas para inscritos que consentiraram)</li>
                    <li>Analisar o uso do site para melhorar a experiência do usuário</li>
                    <li>Exibir anúncios personalizados através do Google AdSense</li>
                    <li>Cumprir com obrigações legais e regulamentares</li>
                </ul>

                <h2 style={{ marginTop: "2rem" }}>3. Terceiros e Parceiros</h2>
                <p>Alguns serviços utilizados pelo nosso site envolvem compartilhamento de dados:</p>

                <h3>Google AdSense</h3>
                <p>O Google utiliza cookies DART para exibir anúncios com base no seu histórico de navegação. O Google pode coletar informações sobre suas atividades de navegação para fornecer anúncios mais relevantes. Para obter mais informações e configurar as suas preferências de anúncios, visite:</p>
                <ul>
                    <li><a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", textDecoration: "underline" }}>Política de Privacidade do Google</a></li>
                    <li><a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", textDecoration: "underline" }}>Configurações de Anúncios do Google</a></li>
                    <li><a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", textDecoration: "underline" }}>Opt-out de Publicidade Direcionada</a></li>
                </ul>

                <h3>Telegram</h3>
                <p>Utilizamos o Telegram Bot para enviar notificações automáticas de novos artigos publicados. Se você se inscrever para receber notificações via Telegram, suas informações serão processadas de acordo com a <a href="https://telegram.org/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", textDecoration: "underline" }}>Política de Privacidade do Telegram</a>.</p>

                <h2 style={{ marginTop: "2rem" }}>4. Retenção de Dados</h2>
                <p>Retemos suas informações apenas pelo tempo necessário para fornecer os serviços solicitados ou conforme exigido por lei. Especificamente:</p>
                <ul>
                    <li>Dados de newsletters são retidos até que você cancele sua inscrição</li>
                    <li>Logs de acesso do servidor são retidos por até 90 dias</li>
                    <li>Dados de cookies persistem de acordo com suas configurações de navegador (geralmente 2 anos)</li>
                </ul>

                <h2 style={{ marginTop: "2rem" }}>5. Segurança das Informações</h2>
                <p>Implementamos medidas de segurança comercialmente apropriadas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição não intencional. No entanto, nenhum método de transmissão pela Internet é 100% seguro. Você reconhece que há limitações inerentes à segurança na Internet.</p>

                <h2 style={{ marginTop: "2rem" }}>6. Links para Sites Terceiros</h2>
                <p>Nosso site pode conter links para sites externos que não são operados por nós. Não somos responsáveis pelas práticas de privacidade ou pelo conteúdo de sites terceiros. Recomendamos que você revise as políticas de privacidade desses sites independentemente.</p>

                <h2 style={{ marginTop: "2rem" }}>7. Seus Direitos</h2>
                <p>Dependendo de sua localização, você pode ter direitos específicos em relação aos seus dados pessoais, incluindo:</p>
                <ul>
                    <li><strong>Direito de Acesso:</strong> Solicitar uma cópia dos dados pessoais que temos sobre você</li>
                    <li><strong>Direito de Retificação:</strong> Corrigir dados imprecisos ou incompletos</li>
                    <li><strong>Direito de Exclusão:</strong> Solicitar a remoção de seus dados (com algumas exceções legais)</li>
                    <li><strong>Direito de Portabilidade:</strong> Receber seus dados em formato estruturado e transferível</li>
                    <li><strong>Direito de Cancelar Consentimento:</strong> Retirar seu consentimento para inscrições e cookies de marketing a qualquer momento</li>
                </ul>

                <h2 style={{ marginTop: "2rem" }}>8. Conformidade Legal</h2>
                <p>Esta Política de Privacidade se adequa às seguintes regulamentações:</p>
                <ul>
                    <li><strong>LGPD (Lei Geral de Proteção de Dados):</strong> Legislação brasileira que governa a coleta e o uso de dados pessoais</li>
                    <li><strong>GDPR (Regulamento Geral sobre Proteção de Dados):</strong> Regulação europeia aplicável se você está na UE</li>
                    <li><strong>Políticas do Google AdSense:</strong> Aderimos rigorosamente aos requisitos de privacidade do Google AdSense, incluindo divulgação clara de coleta de dados, uso de cookies, e opções de opt-out</li>
                </ul>

                <h2 style={{ marginTop: "2rem" }}>9. Isenção de Responsabilidade sobre Conteúdo de Investimento</h2>
                <p>O conteúdo publicado neste blog, incluindo artigos sobre investimentos e dividendos, é fornecido apenas para fins educacionais e informativos. Não constituem recomendação de investimento, conselho financeiro profissional, ou solicitação para compra ou venda de qualquer ativo financeiro.</p>
                <ul>
                    <li>Não somos consultores financeiros, gestores de carteira, ou corretoras de valores</li>
                    <li>Investimentos em ações, fundos imobiliários e outros ativos financeiros envolvem risco de perda total do capital investido</li>
                    <li>Resultados passados não garantem resultados futuros</li>
                    <li>Você deve consultar um consultor financeiro, CPA (Contador) ou especialista em investimentos antes de tomar decisões financeiras</li>
                </ul>

                <h2 style={{ marginTop: "2rem" }}>10. Alterações a Esta Política</h2>
                <p>Podemos atualizar esta Política de Privacidade periodicamente. Qualquer alteração significativa será publicada nesta página, e você será notificado através do site ou email se as mudanças forem substanciais. O seu uso contínuo do site após as alterações constitui aceitação da Política de Privacidade revisada.</p>

                <h2 style={{ marginTop: "2rem" }}>11. Contato</h2>
                <p>Se você tiver questões, preocupações ou desejar exercer seus direitos de privacidade, entre em contato conosco em:</p>
                <ul>
                    <li><strong>Email:</strong> <a href="mailto:contato@dividai.com" style={{ color: "var(--primary)", textDecoration: "underline" }}>contato@dividai.com</a></li>
                    <li><strong>Telegram:</strong> <a href="https://t.me/dividai_news" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", textDecoration: "underline" }}>@dividai_news</a></li>
                </ul>

                <p style={{ marginTop: "3rem", fontSize: "0.9rem", color: "var(--muted)", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
                    Esta Política de Privacidade é efetiva a partir de <strong>Março de 2026</strong> e está sujeita a alterações conforme necessário para conformidade com leis de proteção de dados aplicáveis.
                </p>
            </div>
        </article>
    );
}
