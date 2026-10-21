# Pocari Sweat - Rebuild

Rebuild situs Pocari Sweat Indonesia. Dibuat sebagai studi kasus desain dan latihan frontend oleh **Luthfi Yoshi Pratama**.

> **Disclaimer:** Ini bukan situs resmi Pocari Sweat / Otsuka Pharmaceutical. Semua merek dagang milik pemiliknya masing-masing. Project ini untuk keperluan portfolio.

## Live Demo

https://pocari-sweat-rebuild.luthfiyoshipratama.workers.dev

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Bahasa:** TypeScript
- **Styling:** Tailwind CSS v3
- **UI Components:** shadcn/ui (Radix UI)
- **Icons:** Lucide React
- **Animasi:** Framer Motion
- **Font:** Plus Jakarta Sans (body) + Bricolage Grotesque (display)
- **Deploy:** Cloudflare Workers

## Fitur

- Hero dengan scroll-linked bottle animation
- Katalog produk (3 varian Pocari Sweat)
- Detail produk per slug
- Berita & artikel dengan renderer custom (ContentBlock)
- Kalkulator hidrasi interaktif
- Hover tilt effect di kartu produk (desktop only)
- Responsive mobile-first
- prefers-reduced-motion fallback untuk animasi utama
- OG image, sitemap, robots.txt

## Cara Menjalankan Lokal

    npm install
    npm run dev

Buka http://localhost:3000

## Struktur Project

    app/
      (site)/                  # Halaman publik
        page.tsx               # Beranda
        products/              # Katalog + detail
        news/                  # Berita + detail
        about/                 # Tentang
        hydration-calculator/
      opengraph-image.tsx
      sitemap.ts
      robots.ts

    src/
      components/
        blocks/                # Navbar, Footer, HeroBottle, ProductCard
        common/                # Container, ProductImage, BottleSilhouette
        ui/                    # shadcn components
      data/                    # Data hardcode (products, articles, types)
      lib/                     # Utils & queries