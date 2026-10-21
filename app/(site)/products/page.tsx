import Link from "next/link";
import { Container } from "@/components/common/Container";
import { ProductImage } from "@/components/common/ProductImage";
import { BottleSilhouette, bottleVariantForSlug } from "@/components/common/BottleSilhouette";
import { Reveal } from "@/components/common/Reveal";
import type { Product } from "@/data/types";
import { getAllProducts } from "@/lib/queries";

export const metadata = {
  title: "Produk",
  description: "Jelajahi semua varian Pocari Sweat untuk kebutuhan hidrasimu.",
};

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <section className="py-14 md:py-20">
      <Container>
        <Reveal className="mb-8 md:mb-10">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Produk Kami
          </h1>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Pilih varian Pocari Sweat yang sesuai dengan kebutuhan hidrasi harianmu.
          </p>
        </Reveal>

        {products.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            Belum ada produk. Tambah produk di Sanity Studio dulu.
          </div>
        ) : (
          <Reveal delay={0.08} className="grid md:grid-cols-3 gap-8">
            {products.map((p: Product) => (
              <Link key={p._id} href={`/products/${p.slug}`} className="group block h-full">
                {p.image ? (
                  <ProductImage
                    src={p.image}
                    alt={p.name}
                    className="aspect-[4/5] bg-muted/20 flex items-center justify-center p-6 rounded-xl mb-4 overflow-hidden"
                  />
                ) : (
                  <div
                    className="aspect-[4/5] bg-muted/20 flex items-center justify-center p-6 rounded-xl mb-4 overflow-hidden bg-gradient-to-b from-sky/20 to-marine/5"
                    aria-hidden="true"
                  >
                    <BottleSilhouette
                      variant={bottleVariantForSlug(p.slug)}
                      className="h-3/4 text-marine-text"
                    />
                  </div>
                )}
                <p className="text-xs text-marine-text font-medium uppercase tracking-wider mb-1">
                  {p.category?.replace("-", " ")}
                </p>
                <h2 className="font-medium group-hover:text-marine-text transition-colors line-clamp-2 break-words">
                  {p.name}
                </h2>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-3 min-w-0">
                  {p.description}
                </p>
              </Link>
            ))}
          </Reveal>
        )}
      </Container>
    </section>
  );
}