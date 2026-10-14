import Link from "next/link";
import { Container } from "@/components/common/Container";
import { HeroBottle } from "@/components/blocks/HeroBottle";
import { ProductCard } from "@/components/blocks/ProductCard";
import { ProductImage } from "@/components/common/ProductImage";
import type { Article } from "@/data/types";
import { getFeaturedProducts, getLatestArticles } from "@/lib/queries";
import { Droplet, Zap, Shield } from "lucide-react";

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
        {/* Pattern ion halus */}
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
          <div className="relative grid grid-cols-1 gap-8 py-20 md:grid-cols-12 md:gap-8 md:py-28 lg:py-32 items-center">
            {/* Kolom kiri: teks */}
            <div className="md:col-span-7 lg:col-span-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70 mb-6">
                Keringatmu Berharga
              </p>
              <h1 className="font-display text-4xl font-extrabold leading-[1] tracking-tight text-balance md:text-6xl lg:text-7xl mb-8">
                Ganti ion yang ikut keluar bersama keringat.
              </h1>
              <p className="text-lg text-white/90 max-w-lg mb-10 leading-relaxed">
                Pocari Sweat menjaga keseimbangan ion tubuhmu. Minuman ber-ION untukmu yang aktif bergerak.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  href="/hydration-calculator"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-marine h-11 px-8 bg-white text-marine-text hover:bg-white/90 w-full sm:w-auto"
                >
                  Hitung kebutuhan cairanmu
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-marine h-11 px-8 border border-white/40 text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  Lihat produk
                </Link>
              </div>
            </div>

            {/* Kolom kanan: botol */}
            <div className="relative hidden md:flex md:col-span-5 lg:col-span-6 items-center justify-center">
              <div className="relative h-[220px] w-full max-w-[420px] md:h-[420px] lg:h-[520px]">
                <HeroBottle />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FEATURES */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Droplet, title: "Ion Balance", desc: "Menjaga keseimbangan ion tubuh setelah berkeringat." },
              { icon: Zap, title: "Cepat Diserap", desc: "Formula isotonik yang cepat diserap tubuh." },
              { icon: Shield, title: "Tanpa Pewarna", desc: "Tanpa pewarna buatan, aman untuk dikonsumsi." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title}>
                <Icon className="w-8 h-8 text-marine mb-4" />
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
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
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Produk Kami</h2>
              <p className="text-muted-foreground mt-2">Pilih yang sesuai kebutuhanmu</p>
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
                  <ProductImage
                    src={a.thumbnail}
                    alt={a.title}
                    variant="article"
                    className="aspect-video bg-white rounded-xl mb-4 overflow-hidden"
                  />
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