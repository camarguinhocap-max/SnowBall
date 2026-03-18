import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Outfit } from "next/font/google";
import DarkModeToggle from "@/components/DarkModeToggle";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import SearchBar from "@/components/SearchBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-outfit",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://blog.dividai.com"),
    title: "Blog DividAI | Financas sem complicacoes",
    description:
        "Aprenda a organizar sua vida financeira, sair das dividas e comecar a investir com foco na realidade brasileira.",
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://blog.dividai.com",
        siteName: "Blog DividAI",
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog DividAI",
    },
};

const siteStructuredData = [
    {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Blog DividAI",
        url: "https://blog.dividai.com",
        inLanguage: "pt-BR",
        publisher: {
            "@type": "Organization",
            name: "DividAI",
            url: "https://blog.dividai.com",
        },
    },
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "DividAI",
        url: "https://blog.dividai.com",
        logo: "https://blog.dividai.com/favicon-transparent.png",
    },
];

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <head>
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1543510171277537"
                    crossOrigin="anonymous"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(siteStructuredData) }}
                />
                <GoogleAnalytics />
            </head>
            <body className={`${inter.variable} ${outfit.variable}`}>
                <DarkModeToggle />
                <header className="header">
                    <div className="container header-content">
                        <Link
                            href="/"
                            className="logo"
                            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                        >
                            <img
                                src="/favicon-transparent.png"
                                alt="Logo da DividAI"
                                style={{
                                    height: "40px",
                                    width: "auto",
                                    filter: "invert(1)",
                                }}
                            />
                            <span style={{ fontSize: "1.8rem", fontWeight: 800 }}>Blog.DividAI</span>
                        </Link>
                        <SearchBar />
                        <nav className="nav-links" aria-label="Navegacao principal">
                            <Link href="/">Inicio</Link>
                            <Link href="/#artigos">Artigos</Link>
                            <Link href="/contato">Contato</Link>
                        </nav>
                    </div>
                </header>

                <main className="container">{children}</main>

                <footer className="footer">
                    <div className="container">
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                gap: "2rem",
                                marginBottom: "1.5rem",
                                fontWeight: 500,
                                flexWrap: "wrap",
                            }}
                        >
                            <Link href="/">Inicio</Link>
                            <Link href="/#artigos">Artigos</Link>
                            <Link href="/politica-de-privacidade">Politica de Privacidade</Link>
                            <Link href="/contato">Contato</Link>
                        </div>
                        <p>&copy; {new Date().getFullYear()} blog.dividai.com. Todos os direitos reservados.</p>
                        <p style={{ marginTop: "0.5rem", fontSize: "0.8rem" }}>
                            Conteudo focado em educacao financeira.
                        </p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
