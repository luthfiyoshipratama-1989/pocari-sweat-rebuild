import { products } from "@/data/products"
import { articles } from "@/data/articles"
import type { Product, Article } from "@/data/types"

export async function getFeaturedProducts(limit = 3): Promise<Product[]> {
  return products.slice(0, limit)
}

export async function getLatestArticles(limit = 3): Promise<Article[]> {
  return [...articles]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, limit)
}

export async function getActiveCampaign(): Promise<null> {
  return null
}

export async function getAllProducts(): Promise<Product[]> {
  return products
}

export async function getProductBySlug(
  slug: string
): Promise<Product | undefined> {
  return products.find((p) => p.slug === slug)
}

export async function getAllArticles(): Promise<Article[]> {
  return [...articles].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt)
  )
}

export async function getArticleBySlug(
  slug: string
): Promise<Article | undefined> {
  return articles.find((a) => a.slug === slug)
}
