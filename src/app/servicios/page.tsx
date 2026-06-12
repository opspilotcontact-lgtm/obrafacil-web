import type { Metadata } from 'next';
import { Services } from '@/components/home/Services';

export const metadata: Metadata = {
  title: 'Servicios — Corte a medida, envíos y asesoramiento',
  description: 'Corte a medida de placas SPC, envíos a toda España, asesoramiento por WhatsApp, recogida en almacén, muestras a domicilio y kit de instalación.',
};

export default function ServiciosPage() {
  return (
    <>
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="font-display text-3xl text-black sm:text-4xl">NUESTROS SERVICIOS</h1>
          <p className="mt-2 max-w-2xl text-gray-600">
            En ObraFácil no solo vendemos placas decorativas — te acompañamos en todo el proceso de reforma.
            Desde el asesoramiento hasta la entrega, pasando por el corte a medida.
          </p>
        </div>
      </div>
      <Services />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="font-display text-2xl text-black">Cómo funciona</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-4">
            {[
              { step: '1', title: 'Elige tu diseño', desc: 'Explora nuestro catálogo de más de 200 acabados' },
              { step: '2', title: 'Mándanos medidas', desc: 'Por WhatsApp: foto de la pared + medidas' },
              { step: '3', title: 'Recibe tu pedido', desc: 'Envío 24-72h con placas cortadas a medida' },
              { step: '4', title: 'Instala tú mismo', desc: 'Pega las placas sobre el azulejo. Sin obra.' },
            ].map(item => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary font-mono text-xl font-bold text-black">
                  {item.step}
                </div>
                <h3 className="mt-3 font-semibold text-black">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
