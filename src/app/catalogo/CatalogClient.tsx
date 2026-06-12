'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useMemo, Suspense } from 'react';
import { products, type Product } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

const categoryFilters: { value: string; label: string }[] = [
  { value: '', label: 'Todos' },
  { value: 'spc-marmol', label: 'Mármol SPC' },
  { value: 'spc-piedra', label: 'Piedra y Ónyx' },
  { value: 'spc-cemento', label: 'Cemento' },
  { value: 'spc-madera', label: 'Madera' },
  { value: 'palilleria', label: 'Palillería' },
];

const finishFilters: { value: string; label: string }[] = [
  { value: '', label: 'Todos' },
  { value: 'brillo', label: 'Brillo' },
  { value: 'mate', label: 'Mate' },
  { value: 'ultra-matt', label: 'Ultra Matt' },
  { value: 'texturizado', label: 'Texturizado' },
];

function CatalogFilters() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') ?? '';

  const [category, setCategory] = useState(initialCategory);
  const [finish, setFinish] = useState('');

  const filtered = useMemo(() => {
    let result: Product[] = products;
    if (category) result = result.filter(p => p.category === category);
    if (finish) result = result.filter(p => p.finish === finish);
    return result;
  }, [category, finish]);

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-500">Categoría</label>
          <div className="mt-1 flex flex-wrap gap-2">
            {categoryFilters.map(f => (
              <button
                key={f.value}
                onClick={() => setCategory(f.value)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  category === f.value
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500">Acabado</label>
          <div className="mt-1 flex flex-wrap gap-2">
            {finishFilters.map(f => (
              <button
                key={f.value}
                onClick={() => setFinish(f.value)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  finish === f.value
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm text-gray-500">{filtered.length} productos</p>

      <div className="mt-4 grid gap-6 grid-cols-2 lg:grid-cols-4">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-gray-400">
          No hay productos con estos filtros. Prueba otra combinación.
        </p>
      )}
    </>
  );
}

export function CatalogClient() {
  return (
    <Suspense fallback={<div className="mt-8 text-gray-400">Cargando catálogo...</div>}>
      <CatalogFilters />
    </Suspense>
  );
}
