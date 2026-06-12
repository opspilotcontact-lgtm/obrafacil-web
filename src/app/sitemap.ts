import type { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { cities } from '@/data/cities';
import { blogPosts } from '@/data/blog';

const BASE = 'https://obrafacil.es';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/catalogo`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/servicios`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/calculadora`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contacto`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/sobre-nosotros`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ];

  const cityPages: MetadataRoute.Sitemap = cities.map(city => ({
    url: `${BASE}/ciudad/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const productPages: MetadataRoute.Sitemap = products.map(product => ({
    url: `${BASE}/catalogo/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogPosts.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  return [...staticPages, ...cityPages, ...productPages, ...blogPages];
}
