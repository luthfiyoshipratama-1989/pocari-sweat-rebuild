import { Container } from "@/components/common/Container";
import { getArticleBySlug, getAllArticles } from "@/lib/queries";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article: any) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan",
    };
  }

  return {
    title: `${article.title} - Pocari Sweat`,
    description: article.excerpt || "Baca artikel terkini dari Pocari Sweat.",
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.thumbnail ? [article.thumbnail] : [],
    },
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-white text-ink pt-24 pb-16">
      <Container className="max-w-4xl">
        {/* Back Link */}
        <Link href="/news" className="inline-flex items-center text-[#0091DA] hover:underline mb-8">
          ← Kembali ke Berita
        </Link>

        {/* Header */}
        <article>
          <div className="mb-6">
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
              <span className="text-xs font-semibold text-[#0091DA] uppercase tracking-wide">
                {article.category || "Artikel"}
              </span>
              <span>•</span>
              <time>
                {new Date(article.publishedAt).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">{article.title}</h1>
            {article.excerpt && (
              <p className="text-xl text-gray-600 leading-relaxed">{article.excerpt}</p>
            )}
          </div>

          {/* Thumbnail */}
          {article.thumbnail && (
            <div className="relative w-full h-[400px] mb-10 rounded-xl overflow-hidden">
              <Image
                src={article.thumbnail}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Body Content */}
          <div className="prose prose-lg prose-gray max-w-none">
            {article.body && article.body.length > 0 ? (
              <PortableText value={article.body} />
            ) : (
              <p className="text-gray-700 leading-relaxed text-lg">{article.excerpt}</p>
            )}
          </div>
        </article>
      </Container>
    </div>
  );
}
