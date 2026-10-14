import type { Article } from "./types"

export const articles: Article[] = [
  {
    _id: "article-5-tips-hidrasi",
    slug: "5-tips-hidrasi-saat-olahraga",
    title: "5 Tips Hidrasi Saat Olahraga",
    category: "tips",
    excerpt:
      "Hidrasi yang tepat bisa menentukan performa olahragamu. Ini panduan sederhana sebelum, selama, dan setelah berolahraga.",
    thumbnail: null,
    publishedAt: "2026-08-15T09:00:00.000Z",
    body: [
      {
        type: "paragraph",
        text: "Hidrasi yang tepat bisa menentukan performa olahragamu. Kurang cairan sedikit saja, tubuh akan terasa lebih cepat lelah dan fokus menurun.",
      },
      { type: "heading", level: 2, text: "Mulai dari sebelum berolahraga" },
      {
        type: "paragraph",
        text: "Rasa haus datang setelah tubuh benar-benar kekurangan cairan. Mulailah minum 30-60 menit sebelum berolahraga, sekitar 300-500 ml. Perhatikan warna urin — kuning muda menandakan hidrasi cukup.",
      },
      { type: "heading", level: 2, text: "Saat berolahraga" },
      {
        type: "paragraph",
        text: "Menenggak banyak air sekaligus bisa membuat perut kembung. Lebih baik minum 150-200 ml setiap 15-20 menit. Untuk sesi di bawah 60 menit, air putih cukup. Untuk sesi lebih lama atau berkeringat banyak, tubuh kehilangan ion — minuman isotonik membantu menggantinya.",
      },
      { type: "heading", level: 2, text: "Setelah selesai" },
      {
        type: "paragraph",
        text: "Setelah olahraga, tubuh masih butuh pemulihan. Minum 500 ml dalam 30 menit pertama membantu proses pemulihan dan mengembalikan cairan yang hilang.",
      },
    ],
  },
  {
    _id: "article-air-putih",
    slug: "air-putih-saja-tidak-selalu-cukup",
    title: "Air putih saja tidak selalu cukup. Ini alasannya.",
    category: "kesehatan",
    excerpt:
      "Minum air putih memang penting. Tapi saat tubuh berkeringat banyak, yang hilang bukan hanya air.",
    thumbnail: null,
    publishedAt: "2026-10-10T09:00:00.000Z",
    body: [
      {
        type: "paragraph",
        text: "Nasihat minum air putih delapan gelas sehari sudah sering kita dengar. Tapi saat tubuh berkeringat banyak — entah karena olahraga, cuaca panas, atau demam — air putih saja tidak cukup.",
      },
      { type: "heading", level: 2, text: "Yang hilang bukan cuma air" },
      {
        type: "paragraph",
        text: "Keringat mengandung natrium, kalium, kalsium, magnesium, dan klorida. Mineral bermuatan listrik ini disebut ion, dan perannya menjaga fungsi otot, saraf, serta keseimbangan cairan tubuh.",
      },
      {
        type: "paragraph",
        text: "Kalau kamu hanya minum air putih setelah berkeringat banyak, cairan tubuh memang bertambah, tapi kadar ion justru makin encer. Akibatnya bisa terasa lemas, pusing, atau kram otot meski sudah minum banyak.",
      },
      { type: "heading", level: 2, text: "Kapan butuh lebih dari air putih" },
      {
        type: "paragraph",
        text: "Olahraga lebih dari 60 menit, bekerja di luar ruangan saat terik, atau sedang demam dan diare — itu saat-saat tubuh benar-benar kehilangan ion. Minuman isotonik dengan komposisi ion menyerupai cairan tubuh membantu menggantinya lebih cepat daripada air putih.",
      },
      {
        type: "paragraph",
        text: "Untuk aktivitas ringan sehari-hari, air putih tetap pilihan utama. Yang penting adalah mengenali kapan tubuh butuh lebih.",
      },
    ],
  },
  {
    _id: "article-ac-kantor",
    slug: "kerja-di-ruangan-ber-ac-kehilangan-cairan",
    title: "Kerja di ruangan ber-AC juga bikin tubuh kehilangan cairan",
    category: "tips",
    excerpt:
      "Kamu tidak merasa haus, tapi tubuh tetap kehilangan cairan. Ini yang sering terlewat oleh pekerja kantoran.",
    thumbnail: null,
    publishedAt: "2026-10-12T09:00:00.000Z",
    body: [
      {
        type: "paragraph",
        text: "Bekerja di ruangan ber-AC sering dianggap bebas dari risiko dehidrasi. Kamu tidak merasa gerah, tidak berkeringat, dan jarang merasa haus. Tapi tubuh tetap kehilangan cairan — lewat urine, napas, dan keringat yang menguap tanpa terasa.",
      },
      { type: "heading", level: 2, text: "Kenapa AC bikin lupa minum" },
      {
        type: "paragraph",
        text: "Rasa haus dipicu oleh perubahan suhu dan kelembapan. Di ruangan sejuk, sinyal haus melemah. Kamu bisa duduk 4-5 jam tanpa merasa perlu minum, padahal tubuh sudah kehilangan cairan.",
      },
      {
        type: "paragraph",
        text: "Efeknya muncul perlahan: konsentrasi menurun, kepala terasa berat, dan mata jadi kering. Sering dianggap kelelahan biasa, padahal bisa jadi tanda dehidrasi ringan.",
      },
      { type: "heading", level: 2, text: "Kebiasaan sederhana yang membantu" },
      {
        type: "paragraph",
        text: "Letakkan botol air di meja kerja sebagai pengingat visual. Minum setidaknya 200 ml setiap 1-2 jam. Untuk hari-hari yang padat rapat atau presentasi panjang, ion water atau jelly bisa jadi pilihan praktis karena tidak perlu banyak waktu untuk mengonsumsinya.",
      },
    ],
  },
]
