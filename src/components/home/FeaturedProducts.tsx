import { getFeaturedProducts } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="bg-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div data-reveal>
          <p className="font-mono text-sm uppercase tracking-widest text-primary-dark">Catálogo</p>
          <h2 className="mt-3 font-display text-3xl text-black sm:text-4xl">PRODUCTOS DESTACADOS</h2>
          <p className="mt-2 text-gray-600">Los más vendidos y las últimas novedades</p>
        </div>

        <div className="mt-10 grid gap-6 grid-cols-2 lg:grid-cols-4" data-reveal-group>
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
