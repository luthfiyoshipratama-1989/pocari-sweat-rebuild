import type { MetadataRoute } from "next"
import { products } from "@/data/products"
import { articles } from "@/data/articles"

const BASE_URL = "https://pocari-sweat-rebuild.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes = [
    "",
    "/products",
    "/news",
    "/about",
    "/hydration-calculator",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  const productRoutes = products.map((p) => ({
    url: `${BASE_URL}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const articleRoutes = articles.map((a) => ({
    url: `${BASE_URL}/news/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...productRoutes, ...articleRoutes]
}
