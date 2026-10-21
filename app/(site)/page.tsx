import Link from "next/link";
import { Container } from "@/components/common/Container";
import { HeroBottle } from "@/components/blocks/HeroBottle";
import { HeroCta } from "@/components/blocks/HeroCta";
import { ProductCard } from "@/components/blocks/ProductCard";
import { ProductImage } from "@/components/common/ProductImage";
import { Reveal } from "@/components/common/Reveal";
import type { Article } from "@/data/types";
import { products as allProducts } from "@/data/products";
import { getFeaturedProducts, getLatestArticles } from "@/lib/queries";

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ganti ion yang ikut keluar bersama keringat",
  description: "Saat berkeringat banyak, tubuh kehilangan lima ion penting: natrium, kalium, kalsium, magnesium, dan klorida. Hitung kebutuhanmu dengan kalkulator hidrasi.",
  openGraph: {
    title: "Ganti ion yang ikut keluar bersama keringat",
    description: "Lima ion ikut terbuang tiap kali berkeringat. Hitung kebutuhanmu.",
    url: "/",
    images: ["/opengraph-image"],
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

export default async function HomePage() {
  const [products, articles] = await Promise.all([
    getFeaturedProducts(3),
    getLatestArticles(3),
  ]);

  // Satu sumber data: komposisi ion diambil dari src/data/products.ts, bukan hardcoded.
  const ionTable =
    allProducts.find((p) => p.slug === "pocari-sweat-original")?.ionComposition ??
    [];

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
          <div className="relative grid grid-cols-1 gap-10 py-14 md:grid-cols-12 md:gap-8 md:py-20 items-center">
            <div className="md:col-span-7 lg:col-span-6">
              <p className="text-base md:text-lg font-medium text-white/95 mb-4">
                Keringatmu berharga.
              </p>

              <h1 className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-balance md:text-6xl lg:text-7xl mb-8">
                Ganti ion yang ikut keluar bersama keringat.
              </h1>

              <p className="text-base md:text-lg text-white/85 max-w-lg mb-10 leading-relaxed">
                Saat berkeringat banyak, tubuhmu kehilangan lima ion penting:
                natrium, kalium, kalsium, magnesium, dan klorida.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <HeroCta
                  href="/hydration-calculator"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-marine h-12 px-8 bg-white text-marine-text hover:bg-white/90 w-full sm:w-auto"
                >
                  Hitung kebutuhanmu →
                </HeroCta>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-marine h-12 px-8 border border-white/40 text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  Lihat produk
                </Link>
              </div>

              <p className="mt-3 text-xs text-white/85">
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
      <section className="py-14 md:py-20 bg-muted/30">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider text-marine-text mb-4">
              Komposisi ion
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Lima ion, satu keseimbangan.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Berkeringat berarti kehilangan cairan dan elektrolit. Komposisi ion
              Pocari Sweat dibuat menyerupai cairan tubuh, sehingga lebih cepat
              diserap dibanding air putih biasa.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8 md:mt-10">
            {ionTable.map((ion) => (
              <div
                key={ion.symbol}
                className={`border border-border rounded-lg p-4 bg-background ${
                  ion.symbol === "Cl⁻" ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <div className="font-display text-2xl font-bold text-marine mb-1">
                  {ion.symbol}
                </div>
                <div className="text-xs font-mono text-muted-foreground">
                  {ion.amount}
                </div>
                <div className="text-xs text-muted-foreground">{ion.name}</div>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* PRODUCTS */}
      <section className="py-14 md:py-20 bg-background">
        <Container>
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8 md:mb-10">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-marine-text mb-3">
                Produk
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Cara mengganti ion sesuai aktivitasmu.</h2>
              <p className="text-muted-foreground mt-2">Tiga situasi berbeda: setelah lari, saat hari biasa, atau ketika tangan sedang penuh.</p>
            </div>
            <Link
              href="/products"
              aria-label="Lihat semua produk"
              className="text-sm text-marine-text hover:underline block self-start md:self-auto"
            >
              Lihat semua →
            </Link>
          </Reveal>

          <Reveal delay={0.08} className="grid md:grid-cols-3 gap-8">
            {products.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </Reveal>
        </Container>
      </section>

      {/* NEWS */}
      {articles.length > 0 && (
        <section className="py-14 md:py-20 bg-muted/30">
          <Container>
            <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8 md:mb-10">
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-marine-text mb-3">
                  Berita
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Berita Terbaru</h2>
              </div>
              <Link
                href="/news"
                aria-label="Lihat semua berita"
                className="text-sm text-marine-text hover:underline block self-start md:self-auto"
              >
                Lihat semua →
              </Link>
            </Reveal>

            <Reveal delay={0.08} className="grid md:grid-cols-3 gap-8">
              {articles.map((a: Article) => {
                const badgeLabel = a.category === "kesehatan" ? "Kesehatan" : "Tips";
                const tileClass =
                  a.category === "kesehatan"
                    ? "bg-marine-dark text-white"
                    : "bg-muted/30 text-ink";

                return (
                  <Link key={a._id} href={`/news/${a.slug}`} className="group flex flex-col h-full">
                    {a.thumbnail ? (
                      <ProductImage
                        src={a.thumbnail}
                        alt=""
                        variant="article"
                        className="aspect-video bg-white rounded-xl mb-5 overflow-hidden"
                      />
                    ) : (
                      <div
                        aria-hidden="true"
                        className={`aspect-video rounded-xl mb-5 overflow-hidden flex items-center justify-center p-6 ${tileClass}`}
                      >
                        <span className="font-display font-medium leading-tight text-center line-clamp-3 text-base">
                          {a.title}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center rounded-md border border-border px-2 py-0.5 text-sm font-medium uppercase tracking-wider text-marine-text">
                        {badgeLabel}
                      </span>
                      <time dateTime={a.publishedAt} className="text-xs text-muted-foreground">
                        {new Date(a.publishedAt).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </time>
                    </div>

                    <h3 className="font-medium group-hover:text-marine-text transition-colors line-clamp-2 mt-2">
                      {a.title}
                    </h3>
                  </Link>
                );
              })}
            </Reveal>
          </Container>
        </section>
      )}
    </>
  );
}
