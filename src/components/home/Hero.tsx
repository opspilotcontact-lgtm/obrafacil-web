import Image from 'next/image';
import Link from 'next/link';
import { IconPin } from '@/components/icons';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,216,0,0.07),transparent_55%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <div>
          <div
            data-hero-item
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary"
          >
            <IconPin width={15} height={15} />
            <span>Almacén en Córdoba · Envíos a toda la Península</span>
          </div>

          <h1
            data-hero-item
            className="mt-6 font-display text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl"
          >
            REFORMA{' '}
            <span className="relative inline-block text-primary">
              SIN OBRA
              <span className="absolute -bottom-1 left-0 h-1.5 w-full bg-primary/40" />
            </span>
            <br />
            CON PLACAS SPC
          </h1>

          <p data-hero-item className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
            Placas decorativas efecto mármol, piedra y madera que se instalan
            directamente sobre el azulejo. Sin albañiles, sin escombros y a
            precio de almacén, con corte a medida incluido.
          </p>

          <div data-hero-item className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/catalogo"
              className="inline-flex rounded-full bg-primary px-8 py-3 font-semibold text-black transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-[0_8px_30px_rgba(245,216,0,0.25)]"
            >
              Ver catálogo
            </Link>
            <Link
              href="/calculadora"
              className="inline-flex rounded-full border-2 border-white/80 px-8 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black"
            >
              Calcular placas
            </Link>
          </div>

          <div data-hero-item className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-gray-800 pt-8">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-2xl font-bold text-primary" data-count="200" data-count-suffix="+">
                200+
              </span>
              <span className="text-sm text-gray-400">diseños en stock</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-2xl font-bold text-primary" data-count="3900" data-count-suffix="+">
                3.900+
              </span>
              <span className="text-sm text-gray-400">seguidores en TikTok</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-2xl font-bold text-primary">24h</span>
              <span className="text-sm text-gray-400">respuesta por WhatsApp</span>
            </div>
          </div>
        </div>

        <div data-hero-item className="relative hidden lg:block">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/products/calacatta-oro.webp"
              alt="Placa SPC efecto mármol Calacatta Oro instalada"
              fill
              className="object-cover"
              sizes="40vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <p className="font-display text-sm text-white">Calacatta Oro</p>
                <p className="font-mono text-xs text-gray-300">260×122cm · SPC alto brillo</p>
              </div>
              <p className="rounded-full bg-primary px-3 py-1 font-mono text-sm font-bold text-black">55€</p>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-3xl border border-primary/20" />
        </div>
      </div>
    </section>
  );
}
