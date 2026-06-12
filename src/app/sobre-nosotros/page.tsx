import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Nosotros',
  description: 'Conoce ObraFácil: ferretería y almacén de materiales de construcción en Andalucía, especializado en placas decorativas SPC y revestimientos sin obra.',
};

export default function SobreNosotrosPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 lg:px-8">
      <h1 className="font-display text-3xl text-black sm:text-4xl">SOBRE OBRAFÁCIL</h1>

      <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
        <p>
          ObraFácil nace de una idea simple: <strong className="text-black">reformar tu hogar no debería ser un drama</strong>.
          Somos una ferretería y almacén de materiales de construcción en la provincia de Córdoba, Andalucía,
          especializados en placas decorativas SPC, revestimientos sin obra y palillería de PVC.
        </p>

        <div className="my-8 aspect-video overflow-hidden rounded-2xl bg-gray-100">
          <div className="flex h-full items-center justify-center text-gray-400">
            Foto del almacén
          </div>
        </div>

        <p>
          Nuestro almacén tiene más de 200 diseños diferentes — desde mármoles clásicos como el Calacatta o el Marquina
          hasta efectos más atrevidos como el ónix turquesa o la piedra rosa. Todo listo para enviar a cualquier punto de España.
        </p>

        <p>
          ¿Por qué nos diferenciamos? Porque vendemos <strong className="text-black">a precio de almacén directo</strong>.
          Sin intermediarios, sin márgenes de gran superficie. El mismo producto que encuentras en tiendas a 80-100€ la placa,
          nosotros lo tenemos desde 49€. Y además ofrecemos <strong className="text-black">corte a medida</strong>:
          te preparamos las placas exactamente al tamaño de tu pared para que solo tengas que pegarlas.
        </p>

        <p>
          Nos conoces de TikTok (<a href="https://www.tiktok.com/@obrafacil2025_" target="_blank" rel="noopener noreferrer" className="text-primary-dark hover:underline">@obrafacil2025_</a>),
          donde mostramos reformas reales, instalaciones paso a paso y resultados que hablan por sí solos.
          Creemos en la transparencia: lo que ves en vídeo es exactamente lo que recibes.
        </p>

        <div className="mt-8 rounded-2xl bg-primary-subtle p-8">
          <h2 className="font-display text-xl text-black">Nuestra misión</h2>
          <p className="mt-2 text-black/70">
            Que cualquier persona pueda transformar su hogar de forma rápida, bonita y económica — sin necesitar
            a un profesional, sin semanas de obra y sin gastar una fortuna. Eso es ObraFácil.
          </p>
        </div>
      </div>
    </div>
  );
}
