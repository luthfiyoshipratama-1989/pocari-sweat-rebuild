import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/common/Container";
import { ProductImage } from "@/components/common/ProductImage";
import { Button } from "@/components/ui/button";
import { getProductBySlug } from "@/lib/queries";

export const runtime = "edge"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);
  if (!product) return { title: "Produk tidak ditemukan" };
  return { title: product.name, description: product.description };
}

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);
  if (!product) notFound();

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
    <section className="py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container>
        <Link
          href="/products"
          className="text-sm text-muted-foreground hover:text-marine-text mb-8 inline-block"
        >
          ← Kembali ke Produk
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          <ProductImage
            src={product.image}
            alt={product.name}
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
            className="aspect-square bg-muted rounded-2xl overflow-hidden"
          />

          <div>
            <p className="text-xs text-marine-text font-medium uppercase tracking-wider mb-3">
              {product.category?.replace("-", " ")}
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              {product.name}
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {product.variants && product.variants.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-3">Varian Rasa</h3>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v: string) => (
                    <span key={v} className="px-3 py-1 rounded-full bg-muted text-sm">
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {product.nutrition && (
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-2">Info Nutrisi</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line">
                  {product.nutrition}
                </p>
              </div>
            )}

            <Button asChild size="lg" className="bg-marine hover:bg-marine-dark text-white">
              <a href="https://pocarisweat.id" target="_blank" rel="noopener">
                Beli Sekarang
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
