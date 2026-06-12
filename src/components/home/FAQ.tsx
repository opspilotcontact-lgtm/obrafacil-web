'use client';

import { useState } from 'react';
import { faqItems } from '@/data/faq';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-gray-100 py-16">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div data-reveal>
          <p className="text-center font-mono text-sm uppercase tracking-widest text-primary-dark">Dudas habituales</p>
          <h2 className="mt-3 text-center font-display text-3xl text-black sm:text-4xl">PREGUNTAS FRECUENTES</h2>
          <p className="mt-2 text-center text-gray-600">Todo lo que necesitas saber sobre nuestras placas decorativas</p>
        </div>

        <div className="mt-10 space-y-3" data-reveal-group>
          {faqItems.map((item, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-gray-200 bg-white">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span className="pr-4 font-semibold text-black">{item.question}</span>
                <svg
                  className={`h-5 w-5 shrink-0 text-gray-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="border-t border-gray-100 px-6 py-4 text-sm leading-relaxed text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
