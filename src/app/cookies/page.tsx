import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  robots: { index: false },
};

export default function Cookies() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 lg:px-8">
      <h1 className="font-display text-3xl text-black">POLÍTICA DE COOKIES</h1>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-gray-600">
        <p>Esta web utiliza cookies propias y de terceros para mejorar la experiencia de navegación y obtener datos estadísticos.</p>
        <h2 className="text-lg font-semibold text-black">¿Qué son las cookies?</h2>
        <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo al visitar un sitio web. Permiten recordar tus preferencias y mejorar tu experiencia.</p>
        <h2 className="text-lg font-semibold text-black">Cookies que utilizamos</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li><strong>Esenciales:</strong> Necesarias para el funcionamiento básico del sitio (preferencia de cookies).</li>
          <li><strong>Analíticas:</strong> Google Analytics para entender cómo se usa el sitio (solo si aceptas).</li>
          <li><strong>Marketing:</strong> Meta Pixel para medir la efectividad de nuestros anuncios (solo si aceptas).</li>
        </ul>
        <h2 className="text-lg font-semibold text-black">Cómo gestionar las cookies</h2>
        <p>Puedes configurar tu navegador para bloquear o eliminar cookies. También puedes cambiar tu preferencia usando el banner de cookies que aparece al visitar el sitio.</p>
      </div>
    </div>
  );
}
