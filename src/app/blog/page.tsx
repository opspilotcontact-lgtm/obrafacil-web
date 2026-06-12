import type { Metadata } from 'next';
import Link from 'next/link';
import { getBlogPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Blog — Guías, Tutoriales y Tendencias en Reformas sin Obra',
  description:
    'Aprende a instalar placas decorativas SPC, descubre las tendencias en decoración y compara revestimientos. Guías prácticas de ObraFácil para tu reforma.',
  openGraph: {
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <>
      <section className="bg-black py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="font-display text-4xl text-white sm:text-5xl">
            BLOG OBRAFÁCIL
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-400">
            Guías de instalación, comparativas de materiales y tendencias en decoración.
            Todo lo que necesitas para tu reforma sin obra.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[16/9] bg-gray-200">
                  <div className="flex h-full items-center justify-center text-4xl text-gray-300">
                    ObraFácil
                  </div>
                </div>

                <div className="p-6">
                  <span className="inline-block rounded-full bg-black px-3 py-1 font-mono text-xs font-medium text-yellow-400">
                    {post.category}
                  </span>

                  <h2 className="mt-3 font-display text-xl text-black group-hover:text-gray-700 sm:text-2xl">
                    {post.title}
                  </h2>

                  <p className="mt-2 line-clamp-3 text-gray-600">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex items-center gap-3 font-mono text-xs text-gray-400">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('es-ES', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                    <span>·</span>
                    <span>{post.readTime} lectura</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
