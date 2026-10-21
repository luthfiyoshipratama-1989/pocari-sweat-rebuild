export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; items: string[] }

export type IonComposition = {
  symbol: string
  name: string
  amount: string
}

export type Situation = {
  title: string
  description: string
}

export type Product = {
  _id: string
  slug: string
  name: string
  category: "pocari-sweat" | "ion-water" | "jelly"
  description: string
  tagline: string
  image: string | null
  variants: string[]
  nutrition: string
  ionComposition: IonComposition[]
  situations: Situation[]
  bestFor: string
}

export type Article = {
  _id: string
  slug: string
  title: string
  category: "kesehatan" | "tips"
  excerpt: string
  thumbnail: string | null
  publishedAt: string
  body: ContentBlock[]
}
