'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ScrollFX() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      // Hero entrance — runs once on load
      const heroItems = gsap.utils.toArray<HTMLElement>('[data-hero-item]');
      if (heroItems.length) {
        gsap.fromTo(
          heroItems,
          { y: 32, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.12, delay: 0.1 }
        );
      }

      // Generic reveals — elements fade-rise as they enter the viewport
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(el => {
        gsap.fromTo(
          el,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 86%', once: true },
          }
        );
      });

      // Grouped reveals — children stagger in together
      gsap.utils.toArray<HTMLElement>('[data-reveal-group]').forEach(group => {
        const children = Array.from(group.children) as HTMLElement[];
        if (!children.length) return;
        gsap.fromTo(
          children,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.08,
            scrollTrigger: { trigger: group, start: 'top 84%', once: true },
          }
        );
      });

      // Number counters — data-count="3900" data-count-suffix="+"
      gsap.utils.toArray<HTMLElement>('[data-count]').forEach(el => {
        const target = parseFloat(el.dataset.count ?? '0');
        const suffix = el.dataset.countSuffix ?? '';
        const decimals = target % 1 !== 0 ? 1 : 0;
        const state = { v: 0 };
        gsap.to(state, {
          v: target,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          onUpdate() {
            el.textContent =
              state.v.toLocaleString('es-ES', {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals,
              }) + suffix;
          },
        });
      });

      // Subtle parallax on tagged media — data-parallax="0.12"
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach(el => {
        const amount = parseFloat(el.dataset.parallax ?? '0.1');
        gsap.fromTo(
          el,
          { yPercent: -amount * 100 },
          {
            yPercent: amount * 100,
            ease: 'none',
            scrollTrigger: { trigger: el.parentElement ?? el, start: 'top bottom', end: 'bottom top', scrub: true },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [pathname]);

  return null;
}
