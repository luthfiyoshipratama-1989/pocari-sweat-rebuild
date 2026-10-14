import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { getProductBySlug } from "@/lib/queries";

export const dynamic = "force-dynamic";

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

  return (
    <section className="py-16 md:py-24">
      <Container>
        <Link
          href="/products"
          className="text-sm text-muted-foreground hover:text-marine mb-8 inline-block"
        >
          ← Kembali ke Produk
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                No image
              </div>
            )}
          </div>

          <div>
            <p className="text-xs text-marine font-medium uppercase tracking-wider mb-3">
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