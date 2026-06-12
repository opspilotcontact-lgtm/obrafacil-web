import { IconCut, IconTruck, IconDroplet, IconWarehouse, IconChat, IconRuler } from '@/components/icons';

const items = [
  { icon: IconCut, text: 'Corte a medida' },
  { icon: IconTruck, text: 'Envíos a toda la Península' },
  { icon: IconDroplet, text: '100% impermeable' },
  { icon: IconWarehouse, text: 'Almacén físico en Córdoba' },
  { icon: IconChat, text: 'Atención directa por WhatsApp' },
  { icon: IconRuler, text: 'Asesoramiento de medidas gratis' },
];

export function TrustBar() {
  return (
    <section className="overflow-hidden border-y-2 border-black bg-primary py-3.5">
      <div className="marquee flex w-max items-center">
        {[0, 1].map(copy => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {items.map(item => (
              <div key={item.text} className="flex items-center gap-2.5 px-7 text-sm font-semibold text-black">
                <item.icon width={17} height={17} />
                <span className="whitespace-nowrap">{item.text}</span>
                <span className="ml-7 h-1.5 w-1.5 rounded-full bg-black/30" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
