import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPostBySlug } from '@/data/blog';
import { whatsappLink } from '@/lib/whatsapp';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'ObraFácil',
      url: 'https://obrafacil.es',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ObraFácil',
      url: 'https://obrafacil.es',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://obrafacil.es/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className="mx-auto max-w-3xl px-4 py-12 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/blog" className="hover:text-black">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-black">{post.title}</span>
        </nav>

        {/* Header */}
        <header>
          <span className="inline-block rounded-full bg-black px-3 py-1 font-mono text-xs font-medium text-yellow-400">
            {post.category}
          </span>
          <h1 className="mt-4 font-display text-3xl text-black sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-3 font-mono text-sm text-gray-400">
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
        </header>

        {/* Featured image placeholder */}
        <div className="mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-gray-100">
          <div className="flex h-full items-center justify-center text-6xl text-gray-300">
            ObraFácil
          </div>
        </div>

        {/* Content */}
        <div
          className="blog-content mt-10 max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="mt-10 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>

      {/* WhatsApp CTA */}
      <section className="bg-black py-12">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="font-display text-2xl text-white sm:text-3xl">
            ¿NECESITAS AYUDA CON TU PROYECTO?
          </h2>
          <p className="mt-3 text-gray-400">
            Escríbenos por WhatsApp y te asesoramos sin compromiso. Envíos a
            toda España.
          </p>
          <a
            href={whatsappLink(
              `Hola, he leído vuestro artículo "${post.title}" y me gustaría más información.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-whatsapp px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-whatsapp/90"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Consultar por WhatsApp
          </a>
        </div>
      </section>

      {/* Related posts */}
      <section className="bg-gray-100 py-12">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="font-display text-2xl text-black">
            TAMBIÉN TE PUEDE INTERESAR
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[16/9] bg-gray-200">
                  <div className="flex h-full items-center justify-center text-2xl text-gray-300">
                    ObraFácil
                  </div>
                </div>
                <div className="p-4">
                  <span className="font-mono text-xs text-gray-400">
                    {related.category}
                  </span>
                  <h3 className="mt-1 font-display text-base text-black group-hover:text-gray-700">
                    {related.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="font-mono text-sm font-medium text-black underline underline-offset-4 hover:text-gray-600"
            >
              Ver todos los artículos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
