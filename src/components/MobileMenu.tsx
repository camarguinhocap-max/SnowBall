'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="mobile-menu-wrapper">
            <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menu">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            
            {isOpen && (
                <div className="mobile-nav-overlay" onClick={toggleMenu}>
                    <nav className="mobile-nav-links" onClick={(e) => e.stopPropagation()}>
                        <Link href="/" onClick={toggleMenu}>Início</Link>
                        <Link href="/#artigos" onClick={toggleMenu}>Artigos</Link>
                        <Link href="/sobre" onClick={toggleMenu}>Sobre</Link>
                        <Link href="/shop" onClick={toggleMenu}>Recomendações</Link>
                        <Link href="/portfolio" onClick={toggleMenu}>Portfólio</Link>
                        <Link href="/contato" onClick={toggleMenu}>Contato</Link>
                    </nav>
                </div>
            )}
        </div>
    );
}
