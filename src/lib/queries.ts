import { client } from "./sanity";

export async function getFeaturedProducts(limit = 3) {
  return client.fetch(
    `*[_type == "product"] | order(_createdAt desc) [0...$limit] {
      _id,
      name,
      "slug": slug.current,
      category,
      description,
      "image": image.asset->url,
    }`,
    { limit }
  );
}

export async function getLatestArticles(limit = 3) {
  return client.fetch(
    `*[_type == "article"] | order(publishedAt desc) [0...$limit] {
      _id,
      title,
      "slug": slug.current,
      category,
      excerpt,
      "thumbnail": thumbnail.asset->url,
      publishedAt,
    }`,
    { limit }
  );
}

export async function getActiveCampaign() {
  return client.fetch(`
    *[_type == "campaign" && active == true] | order(_createdAt desc) [0] {
      _id,
      title,
      "slug": slug.current,
      description,
      "image": image.asset->url,
      period,
      link,
    }
  `);
}
