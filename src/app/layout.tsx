import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Snowball | Finanças sem complicações",
  description: "Aprenda a organizar sua vida financeira, sair das dívidas e começar a investir. O melhor blog de finanças pessoais focado na realidade brasileira.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <header className="header">
          <div className="container header-content">
            <Link href="/" className="logo">
              snowball.com.br
            </Link>
            <nav className="nav-links">
              <Link href="/">Início</Link>
              <Link href="/">Artigos</Link>
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
            <p>&copy; {new Date().getFullYear()} snowball.com.br. Todos os direitos reservados.</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>Conteúdo focado em educação financeira.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
