import type { Metadata } from 'next';
import { whatsappLink, PHONE_DISPLAY } from '@/lib/whatsapp';
import { IconWhatsApp, IconMail, IconWarehouse, IconTikTok, IconInstagram } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contacta con ObraFácil por WhatsApp, email o visítanos en nuestro almacén en Córdoba. Asesoramiento gratuito sobre placas decorativas SPC.',
};

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <h1 className="font-display text-3xl text-black sm:text-4xl">CONTACTO</h1>
      <p className="mt-2 max-w-2xl text-gray-600">
        ¿Tienes dudas? ¿Necesitas un presupuesto? Contáctanos por el medio que prefieras.
        Respondemos en menos de 24 horas.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-3" data-reveal-group>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center rounded-2xl border border-gray-200 p-8 text-center transition-all hover:-translate-y-1 hover:border-whatsapp hover:shadow-lg"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-white">
            <IconWhatsApp width={28} height={28} />
          </div>
          <h2 className="mt-4 font-display text-lg text-black">WhatsApp</h2>
          <p className="mt-1 text-sm text-gray-600">La forma más rápida. Mándanos un mensaje y te respondemos al momento.</p>
          <span className="mt-4 font-mono text-sm font-semibold text-whatsapp">{PHONE_DISPLAY}</span>
        </a>

        <a
          href="mailto:info@obrafacil.es"
          className="flex flex-col items-center rounded-2xl border border-gray-200 p-8 text-center transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-black">
            <IconMail width={26} height={26} />
          </div>
          <h2 className="mt-4 font-display text-lg text-black">Email</h2>
          <p className="mt-1 text-sm text-gray-600">Para presupuestos detallados o consultas profesionales.</p>
          <span className="mt-4 font-mono text-sm text-primary-dark">info@obrafacil.es</span>
        </a>

        <div className="flex flex-col items-center rounded-2xl border border-gray-200 p-8 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-white">
            <IconWarehouse width={26} height={26} />
          </div>
          <h2 className="mt-4 font-display text-lg text-black">Almacén</h2>
          <p className="mt-1 text-sm text-gray-600">Ven a ver los productos en persona. Córdoba, Andalucía.</p>
          <span className="mt-4 font-mono text-sm text-gray-500">Dirección próximamente</span>
        </div>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-xl text-black">Síguenos en redes</h2>
          <div className="mt-4 space-y-3">
            <a
              href="https://www.tiktok.com/@obrafacil2025_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 transition-colors hover:text-black"
            >
              <IconTikTok width={19} height={19} />
              <span>TikTok: @obrafacil2025_</span>
            </a>
            <a
              href="https://www.instagram.com/obrafacil2025"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 transition-colors hover:text-black"
            >
              <IconInstagram width={19} height={19} />
              <span>Instagram: @obrafacil2025</span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="font-display text-xl text-black">Horario de atención</h2>
          <div className="mt-4 space-y-1 text-sm text-gray-600">
            <p>Lunes a Viernes: 9:00 - 19:00</p>
            <p>Sábados: 9:00 - 14:00</p>
            <p>Domingos: Cerrado</p>
            <p className="mt-2 text-xs text-gray-400">WhatsApp disponible fuera de horario — respondemos al día siguiente</p>
          </div>
        </div>
      </div>
    </div>
  );
}
