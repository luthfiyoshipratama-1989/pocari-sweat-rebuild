import Link from "next/link";
import { Container } from "@/components/common/Container";
import { getAllProducts } from "@/lib/queries";

export const metadata = {
  title: "Produk",
  description: "Jelajahi semua varian Pocari Sweat untuk kebutuhan hidrasimu.",
};

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Produk Kami
          </h1>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Pilih varian Pocari Sweat yang sesuai dengan kebutuhan hidrasi harianmu.
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            Belum ada produk. Tambah produk di Sanity Studio dulu.
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((p: any) => (
              <Link key={p._id} href={`/products/${p.slug}`} className="group">
                <div className="aspect-square bg-muted rounded-xl mb-4 overflow-hidden">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                      No image
                    </div>
                  )}
                </div>
                <p className="text-xs text-marine font-medium uppercase tracking-wider mb-1">
                  {p.category?.replace("-", " ")}
                </p>
                <h3 className="font-medium group-hover:text-marine transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  {p.description}
                </p>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}