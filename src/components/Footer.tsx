import Link from 'next/link';
import { Logo } from './Logo';

const productLinks = [
  { href: '/catalogo?category=spc-marmol', label: 'Placas SPC Mármol' },
  { href: '/catalogo?category=spc-piedra', label: 'Piedra Natural y Ónyx' },
  { href: '/catalogo?category=spc-cemento', label: 'Cemento y Madera' },
  { href: '/catalogo?category=palilleria', label: 'Palillería PVC' },
];

const serviceLinks = [
  { href: '/servicios', label: 'Corte a medida' },
  { href: '/servicios', label: 'Envíos España' },
  { href: '/calculadora', label: 'Calculadora de placas' },
  { href: '/servicios', label: 'Asesoramiento' },
];

export function Footer() {
  return (
    <footer className="border-t-3 border-primary bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Ferretería y almacén de materiales de construcción en Andalucía.
              Placas decorativas SPC, revestimientos sin obra y palillería PVC a precio de almacén.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-wider text-primary">Productos</h3>
            <ul className="mt-4 space-y-2">
              {productLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-wider text-primary">Servicios</h3>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-wider text-primary">Contacto</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="https://wa.me/34604488613"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-whatsapp"
                >
                  WhatsApp: 604 48 86 13
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@obrafacil2025_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  TikTok: @obrafacil2025_
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/obrafacil2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Instagram: @obrafacil2025
                </a>
              </li>
              <li>Córdoba, Andalucía</li>
              <li>
                <a href="mailto:info@obrafacil.es" className="transition-colors hover:text-white">
                  info@obrafacil.es
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-xs text-gray-600 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} ObraFácil. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="/aviso-legal" className="hover:text-white">Aviso Legal</Link>
            <Link href="/privacidad" className="hover:text-white">Privacidad</Link>
            <Link href="/cookies" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
