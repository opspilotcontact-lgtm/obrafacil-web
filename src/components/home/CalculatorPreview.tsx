'use client';

import { useState } from 'react';
import { products } from '@/data/products';

const spcProducts = products.filter(p => p.category !== 'palilleria');

export function CalculatorPreview() {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [productId, setProductId] = useState(spcProducts[0].id);

  const product = spcProducts.find(p => p.id === productId) ?? spcProducts[0];
  const w = parseFloat(width);
  const h = parseFloat(height);
  const isValid = w > 0 && h > 0;

  const wallArea = isValid ? w * h : 0;
  const panelsNeeded = isValid ? Math.ceil(wallArea / product.coverage) : 0;
  const withExtra = isValid ? Math.ceil(panelsNeeded * 1.1) : 0;
  const estimatedPrice = withExtra * product.price;

  return (
    <section className="bg-black py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div data-reveal>
          <p className="font-mono text-sm uppercase tracking-widest text-primary">Herramienta</p>
          <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">CALCULADORA DE PLACAS</h2>
          <p className="mt-2 text-gray-400">Calcula cuántas placas necesitas y el precio estimado</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2" data-reveal>
          <div className="space-y-6">
            <div>
              <label htmlFor="calc-width" className="block text-sm font-medium text-gray-400">
                Ancho de la pared (metros)
              </label>
              <input
                id="calc-width"
                type="number"
                step="0.01"
                min="0"
                value={width}
                onChange={e => setWidth(e.target.value)}
                placeholder="Ej: 3.5"
                className="mt-1 w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 font-mono text-white placeholder:text-gray-600 focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="calc-height" className="block text-sm font-medium text-gray-400">
                Alto de la pared (metros)
              </label>
              <input
                id="calc-height"
                type="number"
                step="0.01"
                min="0"
                value={height}
                onChange={e => setHeight(e.target.value)}
                placeholder="Ej: 2.5"
                className="mt-1 w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 font-mono text-white placeholder:text-gray-600 focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="calc-product" className="block text-sm font-medium text-gray-400">
                Tipo de producto
              </label>
              <select
                id="calc-product"
                value={productId}
                onChange={e => setProductId(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white focus:border-primary focus:outline-none"
              >
                {spcProducts.map(p => (
                  <option key={p.id} value={p.id}>
                    {p.name} — {p.price}€/{p.priceUnit}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-800 bg-black-soft p-8 text-center">
            {isValid ? (
              <>
                <span className="text-sm text-gray-400">Placas necesarias</span>
                <span className="mt-2 font-mono text-6xl font-bold text-primary">{withExtra}</span>
                <span className="mt-1 text-sm text-gray-500">(+10% extra por recortes)</span>
                <div className="mt-6 space-y-1">
                  <p className="text-sm text-gray-400">
                    Superficie: <span className="font-mono text-white">{wallArea.toFixed(2)} m²</span>
                  </p>
                  <p className="text-sm text-gray-400">
                    Producto: <span className="text-white">{product.name}</span>
                  </p>
                  <p className="mt-4 text-2xl font-bold text-white">
                    Precio estimado: <span className="font-mono text-primary">{estimatedPrice}€</span>
                  </p>
                </div>
                <p className="mt-4 text-xs text-gray-600">
                  Precios orientativos IVA inc. Consulta disponibilidad y precio final por WhatsApp.
                </p>
              </>
            ) : (
              <p className="text-gray-500">
                Introduce las medidas de tu pared para ver el resultado
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
