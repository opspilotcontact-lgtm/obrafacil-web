import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products, getProductBySlug } from '@/data/products';
import { productWhatsappLink } from '@/lib/whatsapp';

export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.name} — Placa Decorativa SPC`,
    description: product.shortDescription + '. Precio de almacén, envío a toda España. Sin obra.',
    openGraph: {
      type: 'website',
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'EUR',
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/catalogo" className="hover:text-black">Catálogo</Link>
          <span className="mx-2">/</span>
          <span className="text-black">{product.name}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          <div>
            <div className="flex flex-wrap gap-2">
              {product.isNew && (
                <span className="rounded-full bg-accent-blue px-3 py-1 font-mono text-xs font-medium text-white">
                  Nuevo
                </span>
              )}
              {product.tags.includes('top-ventas') && (
                <span className="rounded-full bg-accent-green px-3 py-1 font-mono text-xs font-medium text-white">
                  Top Ventas
                </span>
              )}
            </div>

            <h1 className="mt-4 font-display text-3xl text-black sm:text-4xl">{product.name}</h1>

            <p className="mt-2 font-mono text-sm text-gray-500">
              {product.dimensions.height}×{product.dimensions.width}×{product.dimensions.thickness}cm · {product.coverage}m²/ud
            </p>

            <div className="mt-6">
              <span className="font-mono text-4xl font-bold text-black">{product.price}€</span>
              <span className="ml-2 text-gray-500">/{product.priceUnit} · IVA inc.</span>
            </div>

            <p className="mt-1 text-xs text-gray-400">
              Precios orientativos IVA inc. Consulta disponibilidad y precio final por WhatsApp.
            </p>

            <p className="mt-6 leading-relaxed text-gray-600">{product.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {product.tags.map(tag => (
                <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="font-display text-sm uppercase tracking-wider text-gray-500">Especificaciones</h3>
              <dl className="grid grid-cols-2 gap-4 font-mono text-sm">
                <div>
                  <dt className="text-gray-400">Dimensiones</dt>
                  <dd className="font-medium text-black">{product.dimensions.height}×{product.dimensions.width}cm</dd>
                </div>
                <div>
                  <dt className="text-gray-400">Espesor</dt>
                  <dd className="font-medium text-black">{product.dimensions.thickness}cm</dd>
                </div>
                <div>
                  <dt className="text-gray-400">Cobertura</dt>
                  <dd className="font-medium text-black">{product.coverage} m²/ud</dd>
                </div>
                <div>
                  <dt className="text-gray-400">Acabado</dt>
                  <dd className="font-medium text-black capitalize">{product.finish}</dd>
                </div>
                <div>
                  <dt className="text-gray-400">Color</dt>
                  <dd className="font-medium text-black">{product.color}</dd>
                </div>
                <div>
                  <dt className="text-gray-400">Disponibilidad</dt>
                  <dd className={`font-medium ${product.inStock ? 'text-accent-green' : 'text-accent-red'}`}>
                    {product.inStock ? 'En stock' : 'Agotado'}
                  </dd>
                </div>
              </dl>
            </div>

            <a
              href={productWhatsappLink(product.name, product.id)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp py-4 text-lg font-semibold text-white transition-colors hover:bg-whatsapp/90"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
