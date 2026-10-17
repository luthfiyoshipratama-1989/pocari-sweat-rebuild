import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/common/Container";
import { ProductImage } from "@/components/common/ProductImage";
import { getArticleBySlug, getAllArticles } from "@/lib/queries";
import type { ContentBlock } from "@/data/types";

export const runtime = "edge";
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);
  if (!article) return { title: "Artikel Tidak Ditemukan" };

  return {
    title: article.title,
    description: article.excerpt || "Artikel dari Pocari Sweat Rebuild.",
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt || "",
      publishedTime: article.publishedAt,
      url: `/news/${article.slug}`,
      siteName: "Pocari Sweat Rebuild",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt || "",
    },
    alternates: {
      canonical: `/news/${article.slug}`,
    },
  };
}

function calculateReadingTime(body: ContentBlock[]): number {
  const words = body
    .map((block) => {
      if (block.type === "paragraph") return block.text;
      if (block.type === "heading") return block.text;
      if (block.type === "list") return block.items.join(" ");
      return "";
    })
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === "paragraph") {
          return (
            <p key={i} className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6">
              {block.text}
            </p>
          );
        }
        if (block.type === "heading") {
          const Tag = block.level === 2 ? "h2" : "h3";
          const cls =
            block.level === 2
              ? "text-2xl md:text-3xl font-semibold tracking-tight mt-12 mb-4"
              : "text-xl md:text-2xl font-semibold tracking-tight mt-8 mb-3";
          return (
            <Tag key={i} className={cls}>
              {block.text}
            </Tag>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={i} className="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
        return null;
      })}
    </>
  );
}

export default async function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticleBySlug(params.slug);
  if (!article) notFound();

  const allArticles = await getAllArticles();
  const relatedArticles = allArticles.filter((a) => a.slug !== article.slug).slice(0, 2);

  const readingTime = calculateReadingTime(article.body);
  const publishedDate = new Date(article.publishedAt).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    author: {
      "@type": "Person",
      name: "Luthfi Yoshi",
    },
    publisher: {
      "@type": "Organization",
      name: "Pocari Sweat Rebuild (portfolio)",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Link
              href="/news"
              className="text-sm text-muted-foreground hover:text-marine-text mb-8 inline-block"
            >
              ← Kembali ke Berita
            </Link>

            <div className="mb-8">
              <p className="text-xs text-marine-text font-medium uppercase tracking-wider mb-4">
                {article.category}
              </p>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                <span>Oleh Luthfi Yoshi</span>
                <span aria-hidden="true">·</span>
                <time dateTime={article.publishedAt}>{publishedDate}</time>
                <span aria-hidden="true">·</span>
                <span>{readingTime} menit baca</span>
              </div>
            </div>

            {article.thumbnail ? (
              <div className="relative w-full h-[300px] md:h-[400px] mb-10 rounded-xl overflow-hidden">
                <ProductImage
                  src={article.thumbnail}
                  alt={article.title}
                  variant="article"
                  className="w-full h-full"
                  sizes="(min-width: 768px) 768px, 100vw"
                  priority
                />
              </div>
            ) : (
              <div className="relative w-full h-[200px] md:h-[280px] mb-10 rounded-xl overflow-hidden bg-gradient-to-br from-marine/15 via-sky/10 to-marine/5 flex items-center justify-center">
                <span className="text-sm font-medium uppercase tracking-widest text-marine-text/70">
                  Pocari Sweat Rebuild
                </span>
              </div>
            )}

            <div>
              <ContentRenderer blocks={article.body} />
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Artikel ini bagian dari proyek portfolio pribadi. Bukan saran
                medis. Konsultasikan kebutuhan kesehatanmu dengan tenaga
                profesional.
              </p>
            </div>
          </div>
        </Container>
      </article>

      {/* CTA KALKULATOR */}
      <section className="py-16 md:py-24 bg-muted/30">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              Butuh tahu berapa cairanmu hari ini?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Hitung estimasi kebutuhanmu berdasarkan berat badan dan durasi
              aktivitas.
            </p>
            <Link
              href="/hydration-calculator"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-11 px-6 bg-marine hover:bg-marine-dark text-white"
            >
              Buka kalkulator →
            </Link>
          </div>
        </Container>
      </section>

      {/* RELATED ARTICLES */}
      {relatedArticles.length > 0 && (
        <section className="py-16 md:py-24">
          <Container>
            <div className="max-w-3xl mb-12">
              <p className="text-sm font-medium uppercase tracking-wider text-marine-text mb-3">
                Baca juga
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Artikel lain dari seri ini.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {relatedArticles.map((other) => (
                <Link
                  key={other.slug}
                  href={`/news/${other.slug}`}
                  className="group border border-border rounded-xl p-6 bg-background hover:border-marine-text transition-colors"
                >
                  <p className="text-xs text-marine-text font-medium uppercase tracking-wider mb-3">
                    {other.category}
                  </p>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-marine-text transition-colors">
                    {other.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                    {other.excerpt}
                  </p>
                  <span className="text-sm text-marine-text">Baca →</span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
