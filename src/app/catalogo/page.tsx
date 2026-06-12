import type { Metadata } from 'next';
import { CatalogClient } from './CatalogClient';

export const metadata: Metadata = {
  title: 'Catálogo de Placas Decorativas y Revestimientos SPC',
  description: 'Más de 200 diseños de placas decorativas SPC: mármol, piedra, madera, cemento. Palillería PVC. Precios desde 49€/placa. Envío a toda España.',
};

export default function CatalogoPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <h1 className="font-display text-3xl text-black sm:text-4xl">CATÁLOGO</h1>
      <p className="mt-2 text-gray-600">
        Placas decorativas SPC y palillería PVC a precio de almacén. Envíos a toda España.
      </p>
      <CatalogClient />
    </div>
  );
}
