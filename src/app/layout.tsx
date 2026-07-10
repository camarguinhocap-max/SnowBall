import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Inter, Outfit } from "next/font/google";
import DarkModeToggle from "@/components/DarkModeToggle";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import SearchBar from "@/components/SearchBar";
import ConversionTracker from "@/components/ConversionTracker";
import CookieConsent from "@/components/CookieConsent";
import MobileMenu from "@/components/MobileMenu";
import Script from "next/script";
import AdCashScript from "@/components/AdCashScript";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-outfit",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://dividai.com"),
    title: "Blog DividAI | Educação Financeira e Finanças Pessoais",
    description:
        "Descubra como melhorar suas finanças pessoais, sair das dívidas e fazer os melhores investimentos. Educação financeira prática para a realidade brasileira.",
    keywords: "finanças pessoais, investimentos, educação financeira, renda extra, bitcoin, brasil",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://dividai.com",
        siteName: "Blog DividAI",
        title: "Blog DividAI | Educação Financeira e Finanças Pessoais",
        description:
            "Descubra como melhorar suas finanças pessoais, sair das dívidas e fazer os melhores investimentos. Educação financeira prática para a realidade brasileira.",
        images: [
            {
                url: "/opengraph-image",
                width: 1200,
                height: 630,
                alt: "Blog DividAI | Educação Financeira e Finanças Pessoais",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog DividAI | Educação Financeira e Finanças Pessoais",
        description:
            "Descubra como melhorar suas finanças pessoais, sair das dívidas e fazer os melhores investimentos. Educação financeira prática para a realidade brasileira.",
        images: ["/opengraph-image"],
    },
    verification: {
        google: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/favicon.png", type: "image/png" },
        ],
        apple: [
            { url: "/favicon.png" },
        ],
    },
};

const siteStructuredData = [
    {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Blog DividAI",
        url: "https://dividai.com",
        inLanguage: "pt-BR",
        publisher: {
            "@type": "Organization",
            name: "DividAI",
            url: "https://dividai.com",
        },
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: "https://dividai.com/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
        },
    },
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "DividAI",
        url: "https://dividai.com",
        logo: "https://dividai.com/dividai-logo.png",
    },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR" data-theme="light">
            <head>
                <meta name="theme-color" content="#0ea5e9" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <link rel="alternate" type="application/rss+xml" href="https://dividai.com/api/feed" />
                {/* Preconnect para domínios externos críticos — reduz latência de conexão */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://www.googletagmanager.com" />
                <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
                {/* AdSense account verification */}
                <meta name="google-adsense-account" content="ca-pub-1543510171277537" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(siteStructuredData) }}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.setAttribute('data-theme','dark');}})();`,
                    }}
                />
                <GoogleAnalytics />
                {/* Google Tag (gtag.js) - Google Ads */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=AW-18107418379"
                    strategy="afterInteractive"
                />
                <Script id="google-ads-tag" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-18107418379');
                    `}
                </Script>
                {/* AdSense — tag nativa evita atributo data-nscript não reconhecido pelo validador do Google */}
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1543510171277537"
                    crossOrigin="anonymous"
                />
            </head>
            <body className={`${inter.variable} ${outfit.variable}`}>
                <ConversionTracker />
                <DarkModeToggle />
                <header className="header">
                    <div className="container header-content">
                        <Link
                            href="/"
                            className="logo"
                            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                        >
                            <Image
                                src="/dividai-logo.png"
                                alt="Logo da DividAI"
                                width={40}
                                height={40}
                                priority
                                style={{ width: "40px", height: "auto" }}
                            />
                            <span style={{ fontSize: "1.8rem", fontWeight: 800 }}>DividAI</span>
                        </Link>
                        <SearchBar />
                        <nav className="nav-links" aria-label="Navegação principal">
                            <Link href="/">Início</Link>
                            <Link href="/#artigos">Artigos</Link>
                            <Link href="/sobre">Sobre</Link>
                            <Link href="/shop">Recomendações</Link>
                            <Link href="/portfolio">Portfólio</Link>
                            <Link href="/contato">Contato</Link>
                        </nav>
                        <MobileMenu />
                    </div>
                </header>

                <main className="container">{children}</main>

                <footer className="footer">
                    <div className="container">
                        <div className="footer-grid" style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                            gap: '2rem', 
                            textAlign: 'left',
                            marginBottom: '2rem'
                        }}>
                            <div className="footer-col">
                                <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Navegação</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '0.5rem' }}><Link href="/">Página Inicial</Link></li>
                                    <li style={{ marginBottom: '0.5rem' }}><Link href="/sobre">Sobre a DividAI</Link></li>
                                    <li style={{ marginBottom: '0.5rem' }}><Link href="/shop">Recomendações</Link></li>
                                    <li style={{ marginBottom: '0.5rem' }}><Link href="/portfolio">Nosso Portfólio</Link></li>
                                    <li style={{ marginBottom: '0.5rem' }}><Link href="/contato">Fale Conosco</Link></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Categorias</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '0.5rem' }}><Link href="/?category=Investimentos">Investimentos</Link></li>
                                    <li style={{ marginBottom: '0.5rem' }}><Link href="/?category=Finanças Pessoais">Finanças Pessoais</Link></li>
                                    <li style={{ marginBottom: '0.5rem' }}><Link href="/?category=Educação Financeira">Educação Financeira</Link></li>
                                    <li style={{ marginBottom: '0.5rem' }}><Link href="/?category=Empreendedorismo">Empreendedorismo</Link></li>
                                    <li style={{ marginBottom: '0.5rem' }}><Link href="/?category=Renda Extra">Renda Extra</Link></li>
                                    <li style={{ marginBottom: '0.5rem' }}><Link href="/?category=Aposentadoria">Aposentadoria</Link></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Legal</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '0.5rem' }}><Link href="/termos-de-uso">Termos de Uso</Link></li>
                                    <li style={{ marginBottom: '0.5rem' }}><Link href="/politica-de-privacidade">Política de Privacidade</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div
                            style={{
                                borderTop: "1px solid rgba(255,255,255,0.1)",
                                paddingTop: "1.5rem",
                                fontWeight: 500,
                            }}
                        >
                            <p>&copy; {new Date().getFullYear()} dividai.com. Todos os direitos reservados.</p>
                            <p style={{ marginTop: "0.5rem", fontSize: "0.8rem", opacity: 0.7 }}>
                                Conteúdo focado em educação financeira e prosperidade.
                            </p>
                        </div>
                    </div>
                </footer>
                <CookieConsent />
                {/* AdCash desabilitado temporariamente — para reativar, remover o comentário abaixo */}
                {/* <AdCashScript /> */}
            </body>
        </html>
    );
}
