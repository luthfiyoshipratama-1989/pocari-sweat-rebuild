import { Container } from "@/components/common/Container";
import { Metadata } from "next";

export const runtime = "edge"

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Pelajari sejarah Pocari Sweat sejak 1980 oleh Otsuka Pharmaceutical, inovasi ion replenishment, dan komitmen kesehatan kami.",
};

export default function AboutPage() {
  const milestones = [
    { year: "1980", title: "Kelahiran di Jepang", desc: "Otsuka Pharmaceutical meluncurkan Pocari Sweat, minuman ion tubuh pertama yang terinspirasi dari cairan medis IV." },
    { year: "1990", title: "Ekspansi Global", desc: "Pocari Sweat merambah pasar Asia, membawa standar baru hidrasi sehat untuk iklim tropis." },
    { year: "2000", title: "Masuk Indonesia", desc: "Hadir di Indonesia untuk mendampingi gaya hidup aktif masyarakat dengan riset ion yang mendalam." },
    { year: "2010", title: "Edukasi Keseimbangan Tubuh", desc: "Kampanye masif tentang pentingnya menjaga ion tubuh saat beraktivitas fisik dan olahraga." },
    { year: "2020", title: "Inovasi Berkelanjutan", desc: "Komitmen pada botol ramah lingkungan dan gerakan Sweat Safe untuk generasi muda yang lebih sehat." },
  ];

  const values = [
    { title: "Health", desc: "Menjaga keseimbangan cairan dan ion esensial tubuh agar fungsi vital tetap optimal sepanjang hari." },
    { title: "Science", desc: "Berakar dari riset farmasi mendalam tentang komposisi elektrolit yang menyerupai cairan tubuh." },
    { title: "Youth Energy", desc: "Mendukung jiwa muda yang aktif bergerak, berani berekspresi, dan melampaui batas." },
  ];

  return (
    <div className="bg-white text-ink pt-24 pb-16">
      {/* Hero */}
      <section className="bg-[#0091DA] text-white py-20 mb-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Tentang Pocari Sweat</h1>
          <p className="text-lg md:text-xl text-sky-100 max-w-2xl">
            Minuman ion tubuh yang mengembalikan kesegaran dan cairan tubuh secara cepat dan tepat.
          </p>
        </Container>
      </section>

      {/* Brand Story */}
      <Container className="mb-20">
        <div className="max-w-3xl mx-auto space-y-6 text-gray-700 leading-relaxed text-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6">Filosofi Ion & Kehdiran Kami</h2>
          <p>
            Pocari Sweat pertama kali dikembangkan pada tahun 1980 di Jepang oleh Otsuka Pharmaceutical. Ide dasarnya bermula dari kebutuhan medis akan cairan infus yang dapat diserap tubuh secara cepat dan efisien. Para peneliti kemudian menerapkannya dalam bentuk minuman sehari-hari yang aman dan menyegarkan.
          </p>
          <p>
            Terinspirasi dari komposisi cairan tubuh manusia yang terdiri dari air dan elektrolit esensial, Pocari Sweat dirancang memiliki kemiripan dengan cairan tubuh. Formula ini memastikan setiap tegukan tidak hanya menghilangkan rasa haus, tetapi juga mengembalikan ion yang hilang melalui keringat secara ideal.
          </p>
          <p>
            Di Indonesia, Pocari Sweat terus konsisten mengedukasi masyarakat tentang pentingnya hidrasi yang tepat. Melalui riset yang ketat dan standar kualitas farmasi, kami hadir untuk mendukung setiap individu dalam menjalani hidup yang aktif, sehat, dan bugar.
          </p>
        </div>
      </Container>

      {/* Values Section */}
      <section className="bg-gray-50 py-16 mb-20">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-ink text-center mb-12">Nilai Inti Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#0091DA]/10 text-[#0091DA] rounded-lg flex items-center justify-center font-bold text-xl mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold text-ink mb-2">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-ink text-center mb-12">Perjalanan Kami</h2>
        <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-7 before:w-0.5 before:bg-gray-200">
          {milestones.map((m, i) => (
            <div key={i} className="relative flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-full bg-[#0091DA] text-white flex items-center justify-center font-bold shrink-0 z-10 shadow-md">
                {m.year}
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex-1">
                <h3 className="text-lg font-bold text-ink mb-1">{m.title}</h3>
                <p className="text-gray-600">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
