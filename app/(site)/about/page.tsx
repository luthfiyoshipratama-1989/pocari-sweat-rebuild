import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/common/Container";

export const metadata: Metadata = {
  title: "Tentang Proyek",
  description:
    "Rebuild portfolio dari situs Pocari Sweat. Proyek pribadi, tidak berafiliasi dengan Otsuka Pharmaceutical.",
  openGraph: {
    title: "Tentang Proyek",
    description:
      "Rebuild portfolio dari situs Pocari Sweat. Proyek pribadi, tidak berafiliasi dengan Otsuka.",
    url: "/about",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tentang Proyek",
    description:
      "Rebuild portfolio dari situs Pocari Sweat. Proyek pribadi, tidak berafiliasi dengan Otsuka.",
  },
  alternates: {
    canonical: "/about",
  },
};

export const runtime = "edge";

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="py-16 md:py-24 border-b border-border">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider text-marine-text mb-4">
              Tentang proyek
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
              Kenapa saya rebuild situs ini.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Saya membuat ulang situs ini murni untuk latihan desain dan
              frontend. Pertanyaannya sederhana: seberapa serius sebuah situs
              minuman isotonik bisa dikerjakan?
            </p>
          </div>
        </Container>
      </section>

      {/* CERITA ASAL */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider text-marine-text mb-4">
              Cerita asal
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
              Cairan infus yang diminum.
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Pada 1980, seorang karyawan Otsuka Pharmaceutical mengamati
                dokter bedah yang kelelahan setelah operasi panjang. Solusi
                yang ada saat itu cuma dua: air putih, atau infus. Yang
                pertama kurang, yang kedua terlalu repot.
              </p>
              <p>
                Pertanyaannya sederhana: bisakah cairan infus dibuat cukup
                enak untuk diminum? Jawabannya jadi Pocari Sweat, minuman
                dengan komposisi ion yang menyamai cairan tubuh sehingga
                lebih cepat diserap dibanding air biasa.
              </p>
              <p className="text-foreground font-medium">
                Saya bukan Otsuka. Proyek ini rebuild portfolio. Saya bukan
                bagian dari perusahaan, dan tidak mewakili mereka.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* PRINSIP DESAIN */}
      <section className="py-16 md:py-24 bg-muted/30">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-marine-text mb-4">
              Prinsip
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Tiga hal yang saya pegang di proyek ini.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-xs font-mono text-marine-text mb-3">01</p>
              <h3 className="text-lg font-semibold mb-3">
                Fakta, bukan klaim.
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Setiap angka dan komposisi di situs ini diberi label
                ilustratif. Tidak ada satu klaim kesehatan pun yang bisa
                dianggap sebagai saran medis.
              </p>
            </div>

            <div>
              <p className="text-xs font-mono text-marine-text mb-3">02</p>
              <h3 className="text-lg font-semibold mb-3">
                Situasi, bukan superlatif.
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                &quot;Terbaik&quot; dan &quot;nomor satu&quot; tidak berarti apa-apa. Yang saya
                kejar: copy yang menyebut situasi spesifik, seperti habis
                lari, KRL berdesakan, atau tangan penuh.
              </p>
            </div>

            <div>
              <p className="text-xs font-mono text-marine-text mb-3">03</p>
              <h3 className="text-lg font-semibold mb-3">
                Batas yang jelas.
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Logo, nama, dan identitas Pocari Sweat milik Otsuka.
                Yang saya buat cuma kode dan desain. Konten fiktif ditandai
                sebagai fiktif.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* TIMELINE */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-marine-text mb-4">
              Linimasa ilustratif
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Tonggak yang saya ketahui.
            </h2>
            <p className="text-sm text-muted-foreground">
              Hanya 1980 yang dapat saya rujuk dari sumber publik. Sisanya
              dihilangkan.
            </p>
          </div>

          <div className="max-w-3xl space-y-8">
            <div className="flex gap-6">
              <div className="font-mono text-sm text-marine-text w-16 shrink-0 pt-1">
                1980
              </div>
              <div className="border-l-2 border-marine pl-6 pb-2">
                <h3 className="font-semibold mb-2">
                  Pocari Sweat pertama diproduksi
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Otsuka Pharmaceutical merilis Pocari Sweat di Jepang,
                  berdasarkan gagasan cairan infus yang bisa diminum.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mt-8">
            <p className="text-xs text-muted-foreground italic">
              Catatan: entri lain (masuk Indonesia, ekspansi, dsb.) tidak
              saya sertakan karena tidak punya sumber publik yang bisa
              diverifikasi untuk proyek portfolio ini.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted/30">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              Mau lihat bagian yang paling saya kerjakan?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Kalkulator hidrasi dan halaman detail produk adalah dua bagian
              dengan effort desain paling banyak.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/hydration-calculator"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-11 px-6 bg-marine hover:bg-marine-dark text-white"
              >
                Buka kalkulator →
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-11 px-6 border border-border hover:bg-accent"
              >
                Lihat produk
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* DISCLAIMER */}
      <section className="pb-16 md:pb-24">
        <Container>
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto text-center leading-relaxed">
            Halaman ini bagian dari proyek portfolio pribadi. Tidak
            berafiliasi dengan Otsuka Pharmaceutical atau PT Amerta Indah
            Otsuka. Nama dan logo Pocari Sweat milik pemegang merek
            masing-masing.
          </p>
        </Container>
      </section>
    </>
  );
}
