import Image from 'next/image';
import { IconPlay, IconTikTok } from '@/components/icons';

const videos = [
  {
    id: '7578896754783964419',
    label: 'Placas PVC instaladas en proyecto de cliente',
    views: '13.7K',
  },
  {
    id: '7578894223823359254',
    label: 'Entrega y montaje para una familia de Córdoba',
    views: '22.7K',
  },
  {
    id: '7574553055065083158',
    label: 'Respondemos a vuestros comentarios',
    views: '16.8K',
  },
];

export function SocialProof() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
          <div>
            <p className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-primary">
              <IconTikTok width={16} height={16} />
              @obrafacil2025_
            </p>
            <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">EL ALMACÉN, EN VÍDEO</h2>
            <p className="mt-2 max-w-xl text-gray-400">
              Enseñamos el día a día: entregas, instalaciones y el material tal
              cual sale del almacén. Sin postureo.
            </p>
          </div>
          <div className="flex gap-8 border-l-2 border-primary pl-6">
            <div>
              <p className="font-mono text-2xl font-bold text-white" data-count="3963">3.963</p>
              <p className="text-xs uppercase tracking-wider text-gray-500">seguidores</p>
            </div>
            <div>
              <p className="font-mono text-2xl font-bold text-white" data-count="5114">5.114</p>
              <p className="text-xs uppercase tracking-wider text-gray-500">me gusta</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3" data-reveal-group>
          {videos.map(video => (
            <a
              key={video.id}
              href={`https://www.tiktok.com/@obrafacil2025_/video/${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black-soft"
            >
              <div className="relative aspect-[9/14] overflow-hidden">
                <Image
                  src={`/tiktok/${video.id}.jpg`}
                  alt={video.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-black">
                    <IconPlay width={22} height={22} className="translate-x-0.5" />
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-medium leading-snug text-white">{video.label}</p>
                  <p className="mt-1 font-mono text-xs text-gray-400">{video.views} visualizaciones</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center" data-reveal>
          <a
            href="https://www.tiktok.com/@obrafacil2025_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition-all hover:border-primary hover:text-primary"
          >
            <IconTikTok width={16} height={16} />
            Ver el perfil completo
          </a>
        </div>
      </div>
    </section>
  );
}
