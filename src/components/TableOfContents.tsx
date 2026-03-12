'use client';

import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';

interface Heading {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    content: string;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Extrair headings do markdown (linhas que começam com # ## ###)
        const headingRegex = /^(#{1,6})\s+(.+)$/gm;
        const extractedHeadings: Heading[] = [];
        let match;

        while ((match = headingRegex.exec(content)) !== null) {
            const level = match[1].length;
            const text = match[2];
            // Gerar ID a partir do texto (slug)
            const id = text
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-');
            
            extractedHeadings.push({ id, text, level });
        }

        setHeadings(extractedHeadings);
    }, [content]);

    // Se tiver menos de 3 headings, não exibir TOC
    if (headings.length < 3) {
        return null;
    }

    return (
        <div style={{
            marginBottom: '2rem',
            padding: '1.5rem',
            backgroundColor: 'rgba(14, 165, 233, 0.05)',
            border: '1px solid rgba(14, 165, 233, 0.2)',
            borderRadius: '8px',
        }}>
            {/* Header com botão mobile */}
            <div 
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    cursor: 'pointer',
                    marginBottom: isOpen ? '1rem' : 0,
                }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <Menu size={20} color="var(--primary)" />
                <h3 style={{
                    margin: 0,
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'var(--foreground)',
                }}>
                    Índice do artigo
                </h3>
                <span style={{
                    marginLeft: 'auto',
                    fontSize: '0.8rem',
                    color: 'var(--muted)',
                    display: window.innerWidth < 768 ? 'inline' : 'none',
                }}>
                    {isOpen ? '−' : '+'}
                </span>
            </div>

            {/* Lista de headings (desktop sempre visível) */}
            <nav 
                style={{
                    display: window.innerWidth < 768 && !isOpen ? 'none' : 'block',
                }}
            >
                <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                }}>
                    {headings.map((heading) => (
                        <li key={heading.id}>
                            <a
                                href={`#${heading.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.getElementById(heading.id);
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                style={{
                                    display: 'block',
                                    fontSize: heading.level === 2 ? '0.95rem' : '0.85rem',
                                    color: 'var(--primary)',
                                    textDecoration: 'none',
                                    borderLeft: `3px solid ${heading.level === 2 ? 'var(--primary)' : 'rgba(14, 165, 233, 0.3)'}`,
                                    paddingLeft: `${0.75 + (heading.level - 2) * 0.75}rem`,
                                    transition: 'all 0.2s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.paddingLeft = `${1 + (heading.level - 2) * 0.75}rem`;
                                    e.currentTarget.style.color = 'var(--primary-dark)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.paddingLeft = `${0.75 + (heading.level - 2) * 0.75}rem`;
                                    e.currentTarget.style.color = 'var(--primary)';
                                }}
                            >
                                {heading.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
