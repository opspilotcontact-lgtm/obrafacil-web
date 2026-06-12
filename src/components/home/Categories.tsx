import Image from 'next/image';
import Link from 'next/link';
import { categories } from '@/data/products';

export function Categories() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div data-reveal>
          <p className="font-mono text-sm uppercase tracking-widest text-primary-dark">Acabados</p>
          <h2 className="mt-3 font-display text-3xl text-black sm:text-4xl">NUESTRAS CATEGORÍAS</h2>
          <p className="mt-2 text-gray-600">Encuentra el acabado perfecto para tu reforma sin obra</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal-group>
          {categories.map(cat => (
            <Link
              key={cat.slug}
              href={`/catalogo?category=${cat.filter}`}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg text-black">{cat.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
