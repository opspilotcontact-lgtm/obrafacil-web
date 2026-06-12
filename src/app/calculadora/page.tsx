import type { Metadata } from 'next';
import { CalculatorPreview } from '@/components/home/CalculatorPreview';

export const metadata: Metadata = {
  title: 'Calculadora de Placas Decorativas SPC',
  description: 'Calcula cuántas placas decorativas SPC necesitas para tu pared. Resultado instantáneo con precio estimado. Herramienta gratuita de ObraFácil.',
};

export default function CalculadoraPage() {
  return (
    <>
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="font-display text-3xl text-black sm:text-4xl">CALCULADORA DE PLACAS</h1>
          <p className="mt-2 max-w-2xl text-gray-600">
            Introduce las medidas de tu pared y el tipo de producto para saber cuántas placas necesitas y cuánto te costaría.
            Añadimos un 10% extra para recortes — así no te quedas corto.
          </p>
        </div>
      </div>
      <CalculatorPreview />
      <div className="bg-white py-12">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="font-display text-2xl text-black">¿Necesitas ayuda con las medidas?</h2>
          <p className="mt-2 text-gray-600">
            Mándanos una foto de tu pared por WhatsApp y te decimos exactamente cuántas placas necesitas y cómo cortarlas.
          </p>
          <a
            href="https://wa.me/34604488613?text=Hola%2C%20necesito%20ayuda%20para%20calcular%20cuántas%20placas%20necesito"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-whatsapp px-8 py-3 font-semibold text-white transition-colors hover:bg-whatsapp/90"
          >
            Pedir ayuda por WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
