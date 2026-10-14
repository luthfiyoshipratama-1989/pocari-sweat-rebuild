# Pocari Sweat — Rebuild

Website rebuild dari Pocari Sweat Indonesia, dibuat sebagai portfolio personal untuk menunjukkan kemampuan frontend.

**⚠️ Disclaimer:** Ini bukan situs resmi Pocari Sweat / Otsuka Pharmaceutical. Semua merek dagang milik pemiliknya masing-masing. Project ini untuk keperluan portfolio.

## Live Demo

[pocari-sweat-rebuild.vercel.app](https://pocari-sweat-rebuild.vercel.app)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Bahasa:** TypeScript
- **Styling:** Tailwind CSS v3
- **UI Components:** shadcn/ui (Radix UI)
- **Icons:** Lucide React
- **Animasi:** Framer Motion
- **Font:** Plus Jakarta Sans (body) + Bricolage Grotesque (display)
- **Deploy:** Vercel

## Fitur

- Hero dengan scroll-linked bottle animation
- Katalog produk (3 varian Pocari Sweat)
- Detail produk per slug
- Berita & artikel dengan renderer custom (ContentBlock)
- Kalkulator hidrasi interaktif
- Hover tilt effect di kartu produk (desktop only)
- Responsive mobile-first
- Aksesibilitas WCAG AA (kontras warna terverifikasi)
- `prefers-reduced-motion` fallback untuk semua animasi
- SEO lengkap: OG image dinamis, JSON-LD, sitemap, robots

## Struktur Project

app/
├── (site)/ # Halaman publik
│ ├── page.tsx # Beranda
│ ├── products/ # Katalog + detail
│ ├── news/ # Berita + detail
│ ├── about/ # Tentang
│ └── hydration-calculator/
├── opengraph-image.tsx # OG image dinamis
├── sitemap.ts # Sitemap
└── robots.ts # Robots.txt

src/
├── components/
│ ├── blocks/ # Navbar, Footer, HeroBottle, ProductCard, dll
│ ├── common/ # Container, ProductImage, BottleSilhouette
│ └── ui/ # shadcn components
├── data/ # Data hardcode (products, articles, types)
└── lib/ # Utils & queries

_archive/ # Kode lama (Sanity) yang diarsipkan
