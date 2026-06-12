import Image from 'next/image';
import Link from 'next/link';
import { type Product } from '@/data/products';
import { productWhatsappLink } from '@/lib/whatsapp';

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg">
      <Link href={`/catalogo/${product.slug}`}>
        <div className="relative aspect-square bg-gray-100">
          {product.isNew && (
            <span className="absolute left-3 top-3 rounded-full bg-accent-blue px-2.5 py-0.5 font-mono text-xs font-medium text-white">
              Nuevo
            </span>
          )}
          {product.tags.includes('top-ventas') && (
            <span className="absolute right-3 top-3 rounded-full bg-accent-green px-2.5 py-0.5 font-mono text-xs font-medium text-white">
              Top Ventas
            </span>
          )}
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/catalogo/${product.slug}`}>
          <h3 className="font-display text-base text-black">{product.name}</h3>
        </Link>
        <p className="mt-1 font-mono text-xs text-gray-500">
          {product.dimensions.height}×{product.dimensions.width}cm · {product.coverage}m²
        </p>
        <div className="mt-2 flex flex-wrap gap-1">
          {product.tags.slice(0, 3).map(tag => (
            <span key={tag} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <span className="font-mono text-xl font-bold text-black">{product.price}€</span>
            <span className="ml-1 text-xs text-gray-500">/{product.priceUnit} · IVA inc.</span>
          </div>
        </div>
        <a
          href={productWhatsappLink(product.name, product.id)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex w-full items-center justify-center rounded-lg bg-black py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-900"
        >
          Consultar
        </a>
      </div>
    </div>
  );
}
