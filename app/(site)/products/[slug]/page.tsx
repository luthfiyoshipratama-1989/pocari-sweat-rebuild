import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/common/Container";
import { ProductImage } from "@/components/common/ProductImage";
import { Button } from "@/components/ui/button";
import { getProductBySlug } from "@/lib/queries";
import { products as allProducts } from "@/data/products";
import { serializeJsonLd } from "@/lib/json-ld";

export async function generateStaticParams() {
  return allProducts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: "Produk tidak ditemukan" };
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      type: "website",
      title: product.name,
      description: product.description,
      url: `/products/${product.slug}`,
      siteName: "Pocari Sweat Rebuild",
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
    },
    alternates: {
      canonical: `/products/${product.slug}`,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const otherProducts = allProducts.filter((p) => p.slug !== product.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    brand: {
      "@type": "Brand",
      name: "Pocari Sweat",
    },
  };

  return (
    <>
      {/* HERO PRODUK */}
      <section className="py-12 md:py-16">
        {/* SECURITY: static data + script-context-safe serializer (src/lib/json-ld.ts). */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />
        <Container>
          <Link
            href="/products"
            className="text-sm text-muted-foreground hover:text-marine-text mb-8 inline-block"
          >
            ← Kembali ke Produk
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ProductImage
              src={product.image}
              alt={product.name}
              slug={product.slug}
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
              className="h-[240px] w-full bg-muted rounded-2xl overflow-hidden md:h-auto md:aspect-square"
            />

            <div>
              <p className="text-xs text-marine-text font-medium uppercase tracking-wider mb-3">
                {product.category?.replace("-", " ")}
              </p>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
                {product.name}
              </h1>
              <p className="text-lg md:text-xl text-foreground font-medium mb-4">
                {product.tagline}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-marine hover:bg-marine-dark text-white"
                >
                  <a
                    href="https://pocarisweat.id"
                    target="_blank"
                    rel="noopener"
                  >
                    Beli di Situs Resmi →
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/hydration-calculator">
                    Hitung kebutuhanmu →
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* KOMPOSISI ION */}
      <section className="py-16 md:py-24 bg-muted/30">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-marine-text mb-3">
              Komposisi ion
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Lima ion, dalam satu botol.
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Angka di bawah adalah ilustrasi untuk keperluan portfolio.
              Bukan klaim komposisi resmi produk.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {product.ionComposition.map((ion) => (
              <div
                key={ion.symbol}
                className="border border-border rounded-lg p-5 bg-background"
              >
                <div className="font-display text-2xl font-bold text-marine mb-1">
                  {ion.symbol}
                </div>
                <div className="text-sm font-medium mb-1">{ion.name}</div>
                <div className="text-xs text-muted-foreground">
                  {ion.amount} / 100ml
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* KAPAN DIMINUM */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-marine-text mb-3">
              Kapan diminum
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Empat situasi yang cocok.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.situations.map((sit) => (
              <div
                key={sit.title}
                className="border-l-2 border-marine pl-5 py-2"
              >
                <h3 className="font-medium mb-2">{sit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {sit.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* VARIAN LAIN */}
      {otherProducts.length > 0 && (
        <section className="py-16 md:py-24 bg-muted/30">
          <Container>
            <div className="max-w-3xl mb-12">
              <p className="text-sm font-medium uppercase tracking-wider text-marine-text mb-3">
                Varian lain
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Bukan yang kamu cari? Coba yang lain.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {otherProducts.map((other) => (
                <Link
                  key={other.slug}
                  href={`/products/${other.slug}`}
                  className="group border border-border rounded-xl p-6 bg-background hover:border-marine-text transition-colors"
                >
                  <p className="text-xs text-marine-text font-medium uppercase tracking-wider mb-3">
                    {other.bestFor}
                  </p>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-marine-text transition-colors">
                    {other.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {other.tagline}
                  </p>
                  <span className="text-sm text-marine-text">
                    Lihat detail →
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA KALKULATOR */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              Cocok untuk aktivitasmu?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Hitung perkiraan kebutuhan cairanmu berdasarkan berat badan dan
              durasi aktivitas.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-marine hover:bg-marine-dark text-white"
            >
              <Link href="/hydration-calculator">
                Hitung kebutuhanmu →
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* DISCLAIMER */}
      <section className="pb-16 md:pb-24">
        <Container>
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto text-center leading-relaxed">
            Halaman ini bagian dari proyek portfolio pribadi. Komposisi ion,
            angka, dan situasi bersifat ilustratif dan bukan klaim resmi
            produk Pocari Sweat. Tidak berafiliasi dengan Otsuka Pharmaceutical
            atau PT Amerta Indah Otsuka.
          </p>
        </Container>
      </section>
    </>
  );
}
