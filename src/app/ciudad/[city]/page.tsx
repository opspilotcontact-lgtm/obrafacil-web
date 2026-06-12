import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cities, getCityBySlug } from '@/data/cities';
import { getFeaturedProducts } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { whatsappLink } from '@/lib/whatsapp';
import { IconTruck, IconWarehouse, IconChat } from '@/components/icons';

export function generateStaticParams() {
  return cities.map(c => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) return {};

  return {
    title: cityData.metaTitle,
    description: cityData.metaDescription,
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) notFound();

  const featured = getFeaturedProducts().slice(0, 4);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `ObraFácil — ${cityData.name}`,
    description: `Placas decorativas SPC y revestimientos sin obra en ${cityData.name}`,
    areaServed: {
      '@type': 'City',
      name: cityData.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="bg-black py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <IconTruck width={15} height={15} />
            <span>Envío en {cityData.deliveryTime}</span>
            {cityData.isWarehouse && <span>· Recogida en almacén</span>}
          </div>

          <h1 className="mt-6 max-w-3xl font-display text-3xl text-white sm:text-4xl lg:text-5xl">
            {cityData.h1}
          </h1>

          <p className="mt-6 max-w-2xl leading-relaxed text-gray-400">{cityData.introText}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/catalogo"
              className="rounded-full bg-primary px-8 py-3 font-semibold text-black transition-colors hover:bg-primary-dark"
            >
              Ver Catálogo
            </Link>
            <a
              href={whatsappLink(`Hola, estoy en ${cityData.name} y quiero información sobre placas decorativas`)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-black"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-display text-2xl text-black sm:text-3xl">
            Productos más vendidos en {cityData.name}
          </h2>
          <div className="mt-8 grid gap-6 grid-cols-2 lg:grid-cols-4">
            {featured.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="font-display text-2xl text-black">
            ¿Por qué ObraFácil en {cityData.name}?
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-black">
                <IconTruck width={22} height={22} />
              </span>
              <h3 className="mt-3 font-semibold text-black">Envío {cityData.deliveryTime}</h3>
              <p className="mt-1 text-sm text-gray-600">
                Desde nuestro almacén en Córdoba directamente a {cityData.name}
              </p>
            </div>
            <div className="rounded-xl bg-white p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-black">
                <IconWarehouse width={22} height={22} />
              </span>
              <h3 className="mt-3 font-semibold text-black">Precio de almacén</h3>
              <p className="mt-1 text-sm text-gray-600">
                Sin intermediarios. Hasta un 40% más baratos que la competencia online
              </p>
            </div>
            <div className="rounded-xl bg-white p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-black">
                <IconChat width={22} height={22} />
              </span>
              <h3 className="mt-3 font-semibold text-black">Asesoramiento gratis</h3>
              <p className="mt-1 text-sm text-gray-600">
                Te asesoramos por WhatsApp. Mándanos foto de tu pared y te decimos qué necesitas
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
