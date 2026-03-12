import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import DarkModeToggle from "@/components/DarkModeToggle";
import SearchBar from "@/components/SearchBar";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL('https://dividai.com'),
  title: "Blog DividAI | Finanças sem complicações",
  description: "Aprenda a organizar sua vida financeira, sair das dívidas e começar a investir. O melhor blog de finanças pessoais focado na realidade brasileira.",
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://dividai.com',
    siteName: 'Blog DividAI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog DividAI',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1543510171277537" crossOrigin="anonymous"></script>
        <GoogleAnalytics />
      </head>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <DarkModeToggle />
        <header className="header">
          <div className="container header-content">
            <Link href="/" className="logo" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <img 
                src="/favicon-transparent.png" 
                alt="DividAI Logo" 
                style={{ 
                  height: "40px", 
                  width: "auto",
                  filter: "invert(1)"
                }} 
              />
              <span style={{ fontSize: "1.8rem", fontWeight: 800 }}>Blog.DividAI</span>
            </Link>
            <SearchBar />
            <nav className="nav-links">
              <Link href="/">Início</Link>
              <Link href="/">Artigos</Link>
              {/* <Link href="/shop">Shop</Link> */}
              <Link href="/">Sobre</Link>
            </nav>
          </div>
        </header>

        <main className="container">
          {children}
        </main>

        <footer className="footer">
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem', fontWeight: 500 }}>
              <Link href="/">Início</Link>
              <Link href="/politica-de-privacidade">Política de Privacidade</Link>
              <Link href="/">Contato</Link>
            </div>
            <p>&copy; {new Date().getFullYear()} blog.dividai.com. Todos os direitos reservados.</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>Conteúdo focado em educação financeira.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
