import type { Product } from "./types"

export const products: Product[] = [
  {
    _id: "product-original",
    slug: "pocari-sweat-original",
    name: "Pocari Sweat Original",
    category: "pocari-sweat",
    description:
      "Rasa asin-manis yang tipis, tidak menempel di lidah. Komposisi ionnya dibuat menyerupai cairan tubuh, jadi bisa diserap cepat saat kamu berkeringat banyak.",
    image: null,
    variants: [],
    nutrition: "",
  },
  {
    _id: "product-ion-water",
    slug: "pocari-sweat-ion-water",
    name: "Pocari Sweat Ion Water",
    category: "ion-water",
    description:
      "Versi ringan dengan rasa jeruk yang lebih tajam dan gula lebih sedikit. Untuk hari-hari biasa saat kamu tidak benar-benar kehabisan tenaga, tapi tetap butuh cairan.",
    image: null,
    variants: [],
    nutrition: "",
  },
  {
    _id: "product-jelly",
    slug: "pocari-sweat-jelly",
    name: "Pocari Sweat Jelly",
    category: "jelly",
    description:
      "Ion Pocari Sweat dalam bentuk jelly lembut yang bisa langsung ditelan. Untuk situasi saat tanganmu tidak bisa memegang botol — lari, angkat beban, atau di kereta yang penuh.",
    image: null,
    variants: [],
    nutrition: "",
  },
]
