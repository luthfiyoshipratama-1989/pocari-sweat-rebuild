import type { Product } from "./types"

export const products: Product[] = [
  {
    _id: "product-original",
    slug: "pocari-sweat-original",
    name: "Pocari Sweat Original",
    category: "pocari-sweat",
    description:
      "Rasa asin-manis yang tipis, tidak menempel di lidah. Komposisi ionnya dibuat menyerupai cairan tubuh, jadi bisa diserap cepat saat kamu berkeringat banyak.",
    tagline:
      "Komposisi ion paling lengkap. Untuk keringat yang benar-benar banyak.",
    image: null,
    variants: [],
    nutrition: "",
    ionComposition: [
      { symbol: "Na⁺", name: "Natrium", amount: "49 mg" },
      { symbol: "K⁺", name: "Kalium", amount: "20 mg" },
      { symbol: "Ca²⁺", name: "Kalsium", amount: "2 mg" },
      { symbol: "Mg²⁺", name: "Magnesium", amount: "0.6 mg" },
      { symbol: "Cl⁻", name: "Klorida", amount: "60 mg" },
    ],
    situations: [
      {
        title: "Habis lari",
        description: "Aktivitas fisik >45 menit yang membuatmu benar-benar basah kuyup.",
      },
      {
        title: "Olahraga sore",
        description: "Futsal, badminton, atau gym setelah jam kerja.",
      },
      {
        title: "Setelah panas terik",
        description: "Ketika keringat keluar lebih banyak dari biasanya.",
      },
      {
        title: "Cuaca ekstrem",
        description: "Ketika tubuh butuh lebih dari sekadar air putih.",
      },
    ],
    bestFor: "Aktivitas fisik intens",
  },
  {
    _id: "product-ion-water",
    slug: "pocari-sweat-ion-water",
    name: "Pocari Sweat Ion Water",
    category: "ion-water",
    description:
      "Versi ringan dengan rasa jeruk yang lebih tajam dan gula lebih sedikit. Untuk hari-hari biasa saat kamu tidak benar-benar kehabisan tenaga, tapi tetap butuh cairan.",
    tagline:
      "Rasa jeruk, gula lebih sedikit. Untuk hari-hari biasa.",
    image: null,
    variants: [],
    nutrition: "",
    ionComposition: [
      { symbol: "Na⁺", name: "Natrium", amount: "20 mg" },
      { symbol: "K⁺", name: "Kalium", amount: "8 mg" },
      { symbol: "Ca²⁺", name: "Kalsium", amount: "1 mg" },
      { symbol: "Mg²⁺", name: "Magnesium", amount: "0.2 mg" },
      { symbol: "Cl⁻", name: "Klorida", amount: "25 mg" },
    ],
    situations: [
      {
        title: "Hari biasa",
        description: "Aktivitas ringan, kerja, atau kuliah tanpa banyak bergerak.",
      },
      {
        title: "Setelah makan siang",
        description: "Segar dan tidak terlalu manis.",
      },
      {
        title: "Perjalanan pendek",
        description: "Naik motor, jalan kaki, atau commute singkat.",
      },
      {
        title: "Cuaca sedang",
        description: "Hidrasi ringan tanpa kelebihan gula.",
      },
    ],
    bestFor: "Hidrasi harian",
  },
  {
    _id: "product-jelly",
    slug: "pocari-sweat-jelly",
    name: "Pocari Sweat Jelly",
    category: "jelly",
    description:
      "Ion Pocari Sweat dalam bentuk jelly lembut yang bisa langsung ditelan. Untuk situasi saat tanganmu tidak bisa memegang botol — lari, angkat beban, atau di kereta yang penuh.",
    tagline:
      "Ion dalam bentuk jelly. Untuk tangan yang tidak bisa memegang botol.",
    image: null,
    variants: [],
    nutrition: "",
    ionComposition: [
      { symbol: "Na⁺", name: "Natrium", amount: "35 mg" },
      { symbol: "K⁺", name: "Kalium", amount: "14 mg" },
      { symbol: "Ca²⁺", name: "Kalsium", amount: "1.5 mg" },
      { symbol: "Mg²⁺", name: "Magnesium", amount: "0.4 mg" },
      { symbol: "Cl⁻", name: "Klorida", amount: "42 mg" },
    ],
    situations: [
      {
        title: "Tangan penuh",
        description: "Ketika tanganmu pegang stang, barbel, atau tas.",
      },
      {
        title: "KRL berdesakan",
        description: "Tidak ada ruang untuk angkat botol.",
      },
      {
        title: "Lari jarak jauh",
        description: "Bisa ditelan tanpa menghentikan langkah.",
      },
      {
        title: "Angkat beban",
        description: "Di sela set, tanpa perlu buka tutup botol.",
      },
    ],
    bestFor: "Situasi tangan penuh",
  },
]
