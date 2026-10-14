import { client } from "./sanity";

export async function getFeaturedProducts(limit = 3) {
  return client.fetch(
    `*[_type == "product"] | order(_createdAt desc) [0...$limit] {
      _id, name, "slug": slug.current, category, description,
      "image": image.asset->url,
    }`,
    { limit }
  );
}

export async function getLatestArticles(limit = 3) {
  return client.fetch(
    `*[_type == "article"] | order(publishedAt desc) [0...$limit] {
      _id, title, "slug": slug.current, category, excerpt,
      "thumbnail": thumbnail.asset->url, publishedAt,
    }`,
    { limit }
  );
}

export async function getActiveCampaign() {
  return client.fetch(`
    *[_type == "campaign" && active == true] | order(_createdAt desc) [0] {
      _id, title, "slug": slug.current, description,
      "image": image.asset->url, period, link,
    }
  `);
}

export async function getAllProducts() {
  return client.fetch(`
    *[_type == "product"] | order(_createdAt desc) {
      _id, name, "slug": slug.current, category, description,
      "image": image.asset->url, variants,
    }
  `);
}

export async function getProductBySlug(slug: string) {
  return client.fetch(
    `*[_type == "product" && slug.current == $slug][0] {
      _id, name, "slug": slug.current, category, description,
      "image": image.asset->url, variants, nutrition,
    }`,
    { slug }
  );
}

export async function getAllArticles() {
  return client.fetch(`
    *[_type == "article"] | order(publishedAt desc) {
      _id, title, "slug": slug.current, category, excerpt,
      "thumbnail": thumbnail.asset->url, publishedAt,
    }
  `);
}

export async function getArticleBySlug(slug: string) {
  return client.fetch(
    `*[_type == "article" && slug.current == $slug][0] {
      _id, title, "slug": slug.current, category, excerpt, body,
      "thumbnail": thumbnail.asset->url, publishedAt,
    }`,
    { slug }
  );
}

export async function getActiveCampaigns() {
  return client.fetch(`
    *[_type == "campaign" && active == true] | order(_createdAt desc) {
      _id, title, "slug": slug.current, description,
      "image": image.asset->url, period, link,
    }
  `);
}

export async function getCampaignBySlug(slug: string) {
  return client.fetch(
    `*[_type == "campaign" && slug.current == $slug][0] {
      _id, title, "slug": slug.current, description,
      "image": image.asset->url, period, link,
    }`,
    { slug }
  );
}
