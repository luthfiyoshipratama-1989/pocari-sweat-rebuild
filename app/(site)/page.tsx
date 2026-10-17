import Link from "next/link";
import { Container } from "@/components/common/Container";
import { HeroBottle } from "@/components/blocks/HeroBottle";
import { ProductCard } from "@/components/blocks/ProductCard";
import { ProductImage } from "@/components/common/ProductImage";
import type { Article } from "@/data/types";
import { getFeaturedProducts, getLatestArticles } from "@/lib/queries";

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ganti ion yang ikut keluar bersama keringat",
  description: "Natrium, kalium, kalsium, magnesium, klorida — lima ion ikut terbuang tiap kali berkeringat. Hitung kebutuhanmu dengan kalkulator hidrasi.",
  openGraph: {
    title: "Ganti ion yang ikut keluar bersama keringat",
    description: "Lima ion ikut terbuang tiap kali berkeringat. Hitung kebutuhanmu.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganti ion yang ikut keluar bersama keringat",
    description: "Lima ion ikut terbuang tiap kali berkeringat. Hitung kebutuhanmu.",
  },
  alternates: {
    canonical: "/",
  },
};

export const runtime = "edge"

export default async function HomePage() {
  const [products, articles] = await Promise.all([
    getFeaturedProducts(3),
    getLatestArticles(3),
  ]);

  return (
    <>
      {/* HERO */}
<section className="relative overflow-hidden bg-gradient-to-br from-marine via-marine to-marine-dark text-white">
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.08]"
    aria-hidden="true"
    style={{
      backgroundImage:
        "radial-gradient(circle at 20% 30%, white 1px, transparent 1.5px), radial-gradient(circle at 70% 60%, white 1px, transparent 1.5px), radial-gradient(circle at 40% 80%, white 1px, transparent 1.5px)",
      backgroundSize: "120px 120px, 180px 180px, 240px 240px",
    }}
  />

  <Container>
    <div className="relative grid grid-cols-1 gap-10 py-20 md:grid-cols-12 md:gap-8 md:py-28 lg:py-32 items-center">
      <div className="md:col-span-7 lg:col-span-6">
        <p className="text-base md:text-lg font-medium text-white/95 mb-4">
          Keringatmu berharga.
        </p>

        <h1 className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-balance md:text-6xl lg:text-7xl mb-8">
          Ganti ion yang ikut keluar bersama keringat.
        </h1>

        <p className="text-base md:text-lg text-white/85 max-w-lg mb-10 leading-relaxed">
          Natrium, kalium, kalsium, magnesium, klorida — lima ion ikut
          terbuang tiap kali kamu berkeringat banyak.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href="/hydration-calculator"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-marine h-12 px-8 bg-white text-marine-text hover:bg-white/90 w-full sm:w-auto"
          >
            Hitung kebutuhanmu →
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-marine h-12 px-8 border border-white/40 text-white hover:bg-white/10 w-full sm:w-auto"
          >
            Lihat produk
          </Link>
        </div>

        <p className="mt-4 text-xs text-white/85">
          Estimasi umum, bukan saran medis.
        </p>
      </div>

      <div className="relative flex md:col-span-5 lg:col-span-6 items-center justify-center">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_60%)]"
        />
        <div className="relative h-[180px] w-full max-w-[180px] md:h-[420px] md:max-w-[420px] lg:h-[520px]">
          <HeroBottle />
        </div>
      </div>
    </div>
  </Container>
</section>

      {/* SPECS — fakta, bukan klaim */}
<section className="py-16 md:py-24 bg-muted/30">
  <Container>
    <div className="max-w-3xl">
      <p className="text-sm font-medium uppercase tracking-wider text-marine-text mb-4">
        Komposisi ion
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
        Lima ion, satu keseimbangan.
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Setiap kali berkeringat, tubuh kehilangan cairan dan elektrolit.
        Pocari Sweat menyamai komposisi ion cairan tubuh sehingga lebih cepat
        diserap dibanding air putih setelah aktivitas berat.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
      {[
        { sym: "Na⁺", name: "Natrium" },
        { sym: "K⁺", name: "Kalium" },
        { sym: "Ca²⁺", name: "Kalsium" },
        { sym: "Mg²⁺", name: "Magnesium" },
        { sym: "Cl⁻", name: "Klorida" },
      ].map((ion) => (
        <div
          key={ion.sym}
          className="border border-border rounded-lg p-4 bg-background"
        >
          <div className="font-display text-2xl font-bold text-marine mb-1">
            {ion.sym}
          </div>
          <div className="text-xs text-muted-foreground">{ion.name}</div>
        </div>
      ))}
    </div>
  </Container>
</section>

      {/* PRODUCTS */}
      <section className="py-16 md:py-24 bg-muted/30">
        <Container>
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Tiga situasi, tiga cara ganti ion.</h2>
              <p className="text-muted-foreground mt-2">Habis lari. Hari biasa. Tangan penuh.</p>
            </div>
            <Link href="/products" className="text-sm text-marine-text hover:underline hidden md:block">
              Lihat semua →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* NEWS */}
      {articles.length > 0 && (
        <section className="py-16 md:py-24 bg-muted/30">
          <Container>
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Berita Terbaru</h2>
              </div>
              <Link href="/news" className="text-sm text-marine-text hover:underline hidden md:block">
                Lihat semua →
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {articles.map((a: Article) => (
                <Link key={a._id} href={`/news/${a.slug}`} className="group">
                  {a.thumbnail ? (
                    <ProductImage
                      src={a.thumbnail}
                      alt={a.title}
                      variant="article"
                      className="aspect-video bg-white rounded-xl mb-4 overflow-hidden"
                    />
                  ) : (
                    <div className="aspect-video rounded-xl mb-4 overflow-hidden">
                      <div className="w-full h-full bg-marine flex items-center justify-center p-6 text-center">
                        <span className="font-display text-white font-bold text-2xl leading-tight line-clamp-3">
                          {a.title}
                        </span>
                      </div>
                    </div>
                  )}
                  <p className="text-xs text-marine-text font-medium uppercase tracking-wider mb-2">
                    {a.category}
                  </p>
                  <h3 className="font-medium group-hover:text-marine-text transition-colors line-clamp-2">
                    {a.title}
                  </h3>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}