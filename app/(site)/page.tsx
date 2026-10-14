import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/Container";
import { getFeaturedProducts, getLatestArticles, getActiveCampaign } from "@/lib/queries";
import { Droplet, Zap, Shield } from "lucide-react";

export default async function HomePage() {
  const [products, articles, campaign] = await Promise.all([
    getFeaturedProducts(3),
    getLatestArticles(3),
    getActiveCampaign(),
  ]);

  return (
    <>
      {/* HERO */}
      <section className="bg-marine text-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 py-20 md:py-32 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                Keringatmu Berharga
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
                Pocari Sweat menjaga keseimbangan ion tubuhmu. Minuman isotonik untukmu yang aktif.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-marine hover:bg-white/90"
              >
                <Link href="/products">Pelajari Lebih Lanjut</Link>
              </Button>
            </div>
            <div className="hidden md:block aspect-square bg-marine-dark rounded-2xl" />
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
            <Link href="/products" className="text-sm text-marine hover:underline hidden md:block">
              Lihat semua →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((p: any) => (
              <Link
                key={p._id}
                href={`/products/${p.slug}`}
                className="group"
              >
                <div className="aspect-square bg-white rounded-xl mb-4 overflow-hidden">
                  {p.image ? (
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                      No image
                    </div>
                  )}
                </div>
                <h3 className="font-medium group-hover:text-marine transition-colors">{p.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{p.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CAMPAIGN */}
      {campaign && (
        <section className="py-16 md:py-24">
          <Container>
            <div className="bg-sky/20 rounded-2xl p-12 md:p-16">
              <p className="text-sm text-marine font-medium mb-2">{campaign.period}</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                {campaign.title}
              </h2>
              <p className="text-muted-foreground max-w-2xl mb-8">
                {campaign.description}
              </p>
              {campaign.link && (
                <Button asChild className="bg-marine hover:bg-marine-dark text-white">
                  <a href={campaign.link} target="_blank" rel="noopener">
                    Ikut Sekarang
                  </a>
                </Button>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* NEWS */}
      {articles.length > 0 && (
        <section className="py-16 md:py-24 bg-muted/30">
          <Container>
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Berita Terbaru</h2>
              </div>
              <Link href="/news" className="text-sm text-marine hover:underline hidden md:block">
                Lihat semua →
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {articles.map((a: any) => (
                <Link key={a._id} href={`/news/${a.slug}`} className="group">
                  <div className="aspect-video bg-white rounded-xl mb-4 overflow-hidden">
                    {a.thumbnail ? (
                      <img src={a.thumbnail} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                        No image
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-marine font-medium uppercase tracking-wider mb-2">
                    {a.category}
                  </p>
                  <h3 className="font-medium group-hover:text-marine transition-colors line-clamp-2">
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
