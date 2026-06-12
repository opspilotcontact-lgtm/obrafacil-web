import { Hero } from '@/components/home/Hero';
import { TrustBar } from '@/components/home/TrustBar';
import { Categories } from '@/components/home/Categories';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { CalculatorPreview } from '@/components/home/CalculatorPreview';
import { Services } from '@/components/home/Services';
import { SocialProof } from '@/components/home/SocialProof';
import { CitiesGrid } from '@/components/home/CitiesGrid';
import { FAQ } from '@/components/home/FAQ';
import { SEOContent } from '@/components/home/SEOContent';
import { faqItems } from '@/data/faq';

export default function Home() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Store'],
    name: 'ObraFácil',
    description: 'Ferretería y almacén de materiales de construcción especializado en placas decorativas SPC, revestimientos sin obra y palillería PVC.',
    url: 'https://obrafacil.es',
    telephone: '+34604488613',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Córdoba',
      addressRegion: 'Andalucía',
      addressCountry: 'ES',
    },
    areaServed: {
      '@type': 'Country',
      name: 'España',
    },
    priceRange: '€€',
    sameAs: [
      'https://www.tiktok.com/@obrafacil2025_',
      'https://www.instagram.com/obrafacil2025',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <Hero />
      <TrustBar />
      <Categories />
      <FeaturedProducts />
      <CalculatorPreview />
      <Services />
      <SocialProof />
      <CitiesGrid />
      <FAQ />
      <SEOContent />
    </>
  );
}
