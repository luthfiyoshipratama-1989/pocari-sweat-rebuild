import { Container } from "@/components/common/Container";
import { ProductImage } from "@/components/common/ProductImage";
import type { Article } from "@/data/types";
import { Card } from "@/components/ui/card";
import { getAllArticles } from "@/lib/queries";
import { Metadata } from "next";
import Link from "next/link";

export const runtime = "edge"

export const metadata: Metadata = {
  title: "Berita & Artikel",
  description: "Baca artikel terkini tentang hidrasi, kesehatan, dan tips gaya hidup aktif dari Pocari Sweat.",
};

export default async function NewsPage() {
  const articles = await getAllArticles();

  return (
    <div className="bg-white text-ink pt-24 pb-16">
      {/* Hero */}
      <section className="bg-[#0091DA] text-white py-16 mb-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Berita & Artikel</h1>
          <p className="text-lg text-sky-100 max-w-2xl">
            Tips kesehatan, cerita inspiratif, dan update terkini dari dunia Pocari Sweat.
          </p>
        </Container>
      </section>

      {/* Articles Grid */}
      <Container>
        {articles && articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article: Article) => (
              <Link key={article._id} href={`/news/${article.slug}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full cursor-pointer border border-gray-100">
                  {/* Thumbnail */}
                  {article.thumbnail ? (
                    <ProductImage
                      src={article.thumbnail}
                      alt={article.title}
                      variant="article"
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="relative w-full h-48"
                    />
                  ) : (
                    <div className="relative w-full h-48 overflow-hidden">
                      <div className="w-full h-full bg-marine flex items-center justify-center p-6 text-center">
                        <span className="font-display text-white font-bold text-2xl leading-tight line-clamp-3">
                          {article.title}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-marine-text uppercase tracking-wide">
                        {article.category || "Artikel"}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(article.publishedAt).toLocaleDateString("id-ID", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-ink line-clamp-2">{article.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-3 flex-grow">{article.excerpt}</p>
                    <div className="text-marine-text text-sm font-semibold hover:underline">
                      Baca Selengkapnya →
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-ink mb-2">Belum ada artikel</h3>
            <p className="text-gray-600">Konten berita akan segera hadir. Nantikan update menarik dari kami.</p>
          </div>
        )}
      </Container>
    </div>
  );
}
