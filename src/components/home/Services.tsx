import { IconCut, IconTruck, IconChat, IconWarehouse, IconBox, IconTool } from '@/components/icons';

const services = [
  {
    icon: IconCut,
    title: 'Corte a medida',
    description: 'Cortamos tus placas SPC exactamente a las medidas que necesitas. Ahorras material y tiempo de instalación.',
  },
  {
    icon: IconTruck,
    title: 'Envíos a toda la Península',
    description: 'Andalucía en 24-48h, resto de la Península en 48-72h. Embalaje reforzado pensado para placas de gran formato.',
  },
  {
    icon: IconChat,
    title: 'Asesoramiento por WhatsApp',
    description: 'Mándanos una foto de tu pared y te decimos cuántas placas necesitas, qué acabado encaja y cómo instalarlas.',
  },
  {
    icon: IconWarehouse,
    title: 'Recogida en almacén',
    description: 'Si estás en la zona de Córdoba, recoge tu pedido directamente y ve el material en persona antes de llevártelo.',
  },
  {
    icon: IconBox,
    title: 'Muestras a domicilio',
    description: 'Te enviamos muestras de los acabados que más te interesen para que los compares en tu propia casa, con tu luz.',
  },
  {
    icon: IconTool,
    title: 'Kit de instalación',
    description: 'Adhesivo, silicona, espátula y las instrucciones paso a paso. Todo lo necesario para instalarlas tú mismo.',
  },
];

export function Services() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div data-reveal>
          <p className="font-mono text-sm uppercase tracking-widest text-primary">Servicios</p>
          <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">TODO RESUELTO DESDE EL ALMACÉN</h2>
          <p className="mt-2 max-w-xl text-gray-400">
            No vendemos solo placas: te acompañamos desde la medida hasta la instalación.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-reveal-group>
          {services.map(service => (
            <div
              key={service.title}
              className="group rounded-2xl border border-gray-800 bg-black-soft p-6 transition-colors hover:border-primary/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-black">
                <service.icon width={22} height={22} />
              </div>
              <h3 className="mt-4 font-display text-lg text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
