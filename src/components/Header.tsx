'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { whatsappLink } from '@/lib/whatsapp';

const navLinks = [
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/calculadora', label: 'Calculadora' },
  { href: '/#faq', label: 'FAQ' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b-3 border-primary bg-black transition-shadow ${scrolled ? 'shadow-lg shadow-black/30' : ''}`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-black transition-colors hover:bg-primary-dark sm:inline-flex"
          >
            WhatsApp
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center text-white md:hidden"
            aria-label="Menú"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 top-16 z-40 flex flex-col items-center justify-center gap-8 bg-black md:hidden">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-2xl text-white transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-8 py-3 text-lg font-semibold text-black"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
