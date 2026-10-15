import { Container } from "@/components/common/Container"
import { ProductImage } from "@/components/common/ProductImage"
import { getArticleBySlug, getAllArticles } from "@/lib/queries"
import type { ContentBlock } from "@/data/types"
import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

export const runtime = "edge"
export const dynamicParams = false

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const articles = await getAllArticles()
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug)
  if (!article) return { title: "Artikel Tidak Ditemukan" }

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
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt || "",
    },
    alternates: {
      canonical: `/news/${article.slug}`,
    },
  }
}

export default async function NewsDetailPage({ params }: Props) {
  const article = await getArticleBySlug(params.slug)
  if (!article) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    author: {
      "@type": "Organization",
      name: "Pocari Sweat",
    },
    publisher: {
      "@type": "Organization",
      name: "Pocari Sweat",
    },
  };

  return (
    <div className="bg-white text-ink pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container className="max-w-4xl">
        <Link
          href="/news"
          className="inline-flex items-center text-marine-text hover:underline mb-8"
        >
          ← Kembali ke Berita
        </Link>

        <article>
          <div className="mb-6">
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
              <span className="text-xs font-semibold text-marine-text uppercase tracking-wide">
                {article.category || "Artikel"}
              </span>
              <span>•</span>
              <time dateTime={article.publishedAt}>
                {new Date(article.publishedAt).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              {article.title}
            </h1>
            {article.excerpt && (
              <p className="text-xl text-gray-600 leading-relaxed">
                {article.excerpt}
              </p>
            )}
          </div>

          <div className="relative w-full h-[400px] mb-10 rounded-xl overflow-hidden">
            <ProductImage
              src={article.thumbnail}
              alt={article.title}
              variant="article"
              sizes="(min-width: 1024px) 768px, 100vw"
              className="w-full h-full"
            />
          </div>

          <div className="max-w-none">
            {article.body && article.body.length > 0 ? (
              <ContentRenderer blocks={article.body} />
            ) : (
              <p className="text-gray-700 leading-relaxed text-lg">
                {article.excerpt}
              </p>
            )}
          </div>
        </article>
      </Container>
    </div>
  )
}

function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === "paragraph") {
          return (
            <p key={i} className="text-gray-700 leading-relaxed text-lg mb-4">
              {block.text}
            </p>
          )
        }
        if (block.type === "heading") {
          if (block.level === 2) {
            return (
              <h2
                key={i}
                className="text-2xl font-semibold text-ink mt-10 mb-3"
              >
                {block.text}
              </h2>
            )
          }
          return (
            <h3 key={i} className="text-xl font-semibold text-ink mt-6 mb-2">
              {block.text}
            </h3>
          )
        }
        if (block.type === "list") {
          return (
            <ul
              key={i}
              className="list-disc pl-6 mb-4 space-y-2 text-gray-700 text-lg"
            >
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          )
        }
        return null
      })}
    </>
  )
}
