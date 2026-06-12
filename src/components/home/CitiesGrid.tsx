import Link from 'next/link';
import { cities } from '@/data/cities';
import { IconTruck } from '@/components/icons';

export function CitiesGrid() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div data-reveal>
          <p className="font-mono text-sm uppercase tracking-widest text-primary-dark">Cobertura</p>
          <h2 className="mt-3 font-display text-3xl text-black sm:text-4xl">ENVÍOS A TODA ESPAÑA</h2>
          <p className="mt-2 text-gray-600">Placas decorativas SPC con envío rápido a tu ciudad</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3" data-reveal-group>
          {cities.map(city => (
            <Link
              key={city.slug}
              href={`/placas-decorativas-${city.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm transition-all hover:border-primary hover:bg-primary hover:text-black"
            >
              <IconTruck width={15} height={15} className="text-gray-400" />
              <span className="font-medium">{city.name}</span>
              <span className="font-mono text-xs text-gray-400">{city.deliveryTime}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
