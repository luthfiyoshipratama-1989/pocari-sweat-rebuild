import { Container } from "@/components/common/Container";
import { Card } from "@/components/ui/card";
import { getAllArticles } from "@/lib/queries";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Berita & Artikel - Pocari Sweat",
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
            {articles.map((article: any) => (
              <Link key={article._id} href={`/news/${article.slug}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full cursor-pointer border border-gray-100">
                  {/* Thumbnail */}
                  <div className="relative w-full h-48 bg-gray-200">
                    {article.thumbnail ? (
                      <Image
                        src={article.thumbnail}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#0091DA]/20 to-[#0091DA]/5 flex items-center justify-center">
                        <span className="text-gray-400 text-sm">No image</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#0091DA] uppercase tracking-wide">
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
                    <div className="text-[#0091DA] text-sm font-semibold hover:underline">
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
