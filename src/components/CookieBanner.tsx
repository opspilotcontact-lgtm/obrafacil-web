'use client';

import { useState, useEffect } from 'react';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookies-accepted')) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const accept = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem('cookies-accepted', 'essential');
    setVisible(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white p-4 shadow-2xl sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-md sm:rounded-xl sm:border">
      <p className="text-sm text-gray-600">
        Usamos cookies esenciales para el funcionamiento del sitio. Puedes aceptar cookies adicionales para mejorar tu experiencia.
      </p>
      <div className="mt-3 flex gap-3">
        <button
          onClick={accept}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-primary-dark"
        >
          Aceptar todas
        </button>
        <button
          onClick={reject}
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100"
        >
          Solo esenciales
        </button>
      </div>
    </div>
  );
}
