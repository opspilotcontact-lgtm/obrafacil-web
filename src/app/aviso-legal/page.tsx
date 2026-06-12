import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aviso Legal',
  robots: { index: false },
};

export default function AvisoLegal() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 lg:px-8">
      <h1 className="font-display text-3xl text-black">AVISO LEGAL</h1>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-gray-600">
        <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se informa:</p>
        <p><strong>Titular:</strong> ObraFácil</p>
        <p><strong>Domicilio:</strong> Córdoba, Andalucía, España</p>
        <p><strong>Email:</strong> info@obrafacil.es</p>
        <p>Los precios mostrados en esta web son orientativos e incluyen IVA. El precio final se confirmará por WhatsApp según disponibilidad y cantidad.</p>
        <p>Las imágenes de producto son representativas y pueden variar respecto al producto final en tonalidad y brillo debido a las condiciones de iluminación y pantalla.</p>
        <p>ObraFácil se reserva el derecho de modificar los contenidos de esta web sin previo aviso.</p>
      </div>
    </div>
  );
}
