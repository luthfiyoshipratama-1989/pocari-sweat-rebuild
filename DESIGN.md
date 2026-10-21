---
name: Pocari Sweat Rebuild
description: Sistem visual editorial-teknis: biru marine sebagai lapangan, label kecil presisi, angka sebagai bukti.
colors:
  marine-signal: "#0091DA"
  marine-deep: "#007AB8"
  marine-bright: "#33A8E3"
  marine-ink: "#007DB8"
  sky-mist: "#7FD4F5"
  sky-pale: "#B8E5FA"
  ink: "#0A0A0A"
  slate-muted: "#64748B"
  surface: "#FFFFFF"
  surface-muted: "#F1F5F9"
  hairline: "#E2E8F0"
  body-text: "#020817"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.11
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.05em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  2xl: "16px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section-mobile: "56px"
  section-desktop: "80px"
components:
  button-primary:
    backgroundColor: "{colors.marine-signal}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
    height: "40px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.marine-deep}"
  button-inverted:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.marine-ink}"
    rounded: "{rounded.md}"
    padding: "0 32px"
    height: "48px"
  button-outline-on-marine:
    backgroundColor: "transparent"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "0 32px"
    height: "48px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.body-text}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
    height: "40px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body-text}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
    height: "40px"
  card-outline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body-text}"
    rounded: "{rounded.lg}"
    padding: "16px"
  tile-media:
    backgroundColor: "{colors.surface-muted}"
    rounded: "{rounded.xl}"
    padding: "24px"
---

# Design System: Pocari Sweat Rebuild

## Overview

**Creative North Star: "The Hydration Lab Sheet"**

Sistem ini memperlakukan halaman sebagai lembar data yang dibuat dengan hati-hati, bukan sebagai iklan. Setiap klaim punya label kecil di atasnya — uppercase, tracking renggang, biru marine — dan setiap angka punya tempatnya sendiri. Bidang warna besar dipakai untuk satu momen saja: hero, atau kartu berita tanpa gambar. Sisanya putih, tenang, dan biarkan tipografi bekerja.

Kepadatan sedang. Satu layar membawa satu gagasan: satu judul, satu paragraf penjelas, satu tindakan. Jarak antar-section lapang (80px di desktop) dan setiap section dibuka oleh label kecil lalu judul display — pola yang berulang di semua permukaan. Yang membuatnya bukan template adalah ketegangan antara bidang marine yang jenuh dan bidang putih yang lapang, plus tipografi display Bricolage Grotesque yang berani di ukuran besar namun tetap presisi.

Bahasa bentuknya terkendali: sudut membulat kecil (6–8px) untuk kontrol, 12px untuk permukaan media, border 1px rambut sebagai pemisah utama, dan shadow hampir tidak dipakai sama sekali. Kedalaman datang dari perbedaan nada permukaan, bukan dari bayangan.

**Key Characteristics:**
- Label uppercase kecil berwarna marine di atas setiap judul section.
- Satu bidang marine jenuh per halaman sebagai jangkar visual.
- Border 1px sebagai satu-satunya pemisah; shadow nyaris absen.
- Angka dan simbol (Na⁺, K⁺, Ca²⁺) diperlakukan sebagai konten display, bukan hiasan.
- Jarak vertikal besar dan konsisten; tidak ada section yang berdesakan.

## Colors

Palet dua nada: satu biru jenuh yang membawa seluruh identitas, dan satu keluarga netral dingin yang menahan sisanya tetap terbaca.

### Primary
- **Marine Signal** (#0091DA): warna identitas dan satu-satunya aksen. Dipakai untuk bidang hero, tombol primary, label section, dan tautan "Lihat semua →". Ini warna yang membuat halaman langsung dikenali.
- **Marine Deep** (#007AB8): nada lebih tua untuk gradient hero dan status hover tombol primary. Juga latar Identity Strip di paling atas halaman.
- **Marine Bright** (#33A8E3): nada terang untuk aksen sekunder dan highlight di dalam gradient.
- **Marine Ink** (#007DB8): biru yang digelapkan khusus untuk teks di atas putih. Dipakai sebagai `text-marine-text`; dipilih karena mencapai kontras 4.69:1 di atas putih dan lolos WCAG AA untuk teks normal.

### Neutral
- **Body Text** (#020817): hampir hitam dengan semburat biru. Warna default seluruh teks isi dan judul.
- **Ink** (#0A0A0A): hitam netral untuk elemen yang butuh netralitas penuh, bukan semburat biru.
- **Slate Muted** (#64748B): teks sekunder, deskripsi kartu, metadata, dan catatan kecil. Tidak pernah untuk teks utama.
- **Surface** (#FFFFFF): latar halaman. Mayoritas layar adalah warna ini.
- **Surface Muted** (#F1F5F9): latar section bergantian (`bg-muted/30`) dan latar tile media produk. Diferensiasinya halus, bukan kontras keras.
- **Hairline** (#E2E8F0): semua border 1px — kartu, input, pemisah section, garis footer.

### Named Rules
**The One Field Rule.** Hanya satu bidang marine jenuh penuh per halaman. Di beranda itu hero; di halaman detail itu panel produk. Bidang kedua akan menghapus fungsi jangkar dari yang pertama.

**The Marine Text Rule.** Marine Signal (#0091DA) tidak pernah dipakai untuk teks di atas putih — terlalu terang untuk lolos kontras. Teks biru selalu Marine Ink (#007DB8).

## Typography

**Display Font:** Bricolage Grotesque (dengan system-ui, sans-serif)
**Body Font:** Plus Jakarta Sans (dengan system-ui, sans-serif)

**Character:** Pasangan ini menegangkan dua sifat. Bricolage Grotesque memberi judul besar karakter grotesk yang sedikit kasar dan percaya diri — cukup aneh untuk tidak terasa seperti template, cukup rapi untuk terbaca di 72px. Plus Jakarta Sans menahan sisanya: netral, ramah, dan sangat terbaca di ukuran kecil, sehingga label dan paragraf tidak bersaing dengan judul.

### Hierarchy
- **Display** (800, clamp 36px → 72px, line-height 1.02, tracking −0.025em): hanya untuk `h1` hero. Satu per halaman.
- **Headline** (600, 36px desktop / 30px mobile, line-height 1.11, tracking −0.025em): judul section (`h2`). Selalu didahului label uppercase.
- **Title** (500, 16px, line-height 1.5, tracking −0.025em): judul kartu produk dan artikel (`h3`). Ukurannya sengaja sama dengan body; bobot dan warna yang membedakan, bukan ukuran.
- **Body** (400, 16px, line-height 1.5): paragraf isi. Deskripsi section memakai 16px `slate-muted`; paragraf panjang dibatasi sekitar 65–75ch.
- **Label** (500, 14px, tracking 0.05em, uppercase): penanda section di atas setiap judul, kategori artikel, dan header kolom footer. Warna Marine Ink.

### Named Rules
**The Label-Before-Headline Rule.** Setiap section yang punya judul dibuka oleh label uppercase kecil. Tidak ada judul section yang berdiri sendiri tanpa label di atasnya, kecuali hero.

**The Same-Size Title Rule.** Judul kartu tidak dibesarkan untuk terlihat penting. Ia memakai ukuran body dengan bobot medium; hierarki dibangun lewat warna dan posisi, bukan lewat skala yang berteriak.

## Layout

Grid 12 kolom di desktop dengan container maksimum 1280px (`max-w-7xl`) dan padding bertingkat: 16px di mobile, 24px di tablet, 32px di desktop. Konten teks panjang dipersempit ke `max-w-3xl` (768px) di dalam container, sehingga baris tetap nyaman dibaca walau layarnya lebar.

Ritme vertikal section: 56px atas-bawah di mobile, 80px di desktop (`py-14 md:py-20`). Tidak ada section yang memakai jarak lebih kecil kecuali blok di dalam section. Section bergantian antara putih dan `surface-muted` (30% opacity) untuk memisahkan tanpa garis keras.

Hero memakai grid 12 kolom: 6–7 kolom teks di kiri, 5–6 kolom botol di kanan, dengan tinggi total sekitar 500–620px di desktop. Di mobile semuanya menumpuk satu kolom dan botol turun ke bawah teks pada tinggi 180px.

Grid kartu: 3 kolom di desktop (`md:grid-cols-3`, gap 32px), 1 kolom di mobile. Grid ion: 5 kolom di desktop, 2 kolom di mobile dengan item terakhir melebar (`col-span-2`).

Breakpoint mengikuti default Tailwind: 640px, 768px, 1024px, 1280px. Perubahan tata letak nyata terjadi di 768px — di bawah itu semua grid menjadi satu kolom dan navigasi berubah menjadi menu overlay penuh.

## Elevation & Depth

Sistem ini hampir datar. Tidak ada bayangan dekoratif di mana pun: kartu, section, dan panel tidak mengambang. Pemisahan dilakukan oleh border 1px hairline dan oleh perbedaan nada permukaan (putih vs surface-muted). Satu-satunya "bayangan" yang terlihat adalah glow putih lembut di bawah botol hero, dan itu bagian dari ilustrasi, bukan elevation.

Kedalaman muncul dari tiga hal: urutan lapisan warna (putih → surface-muted → marine), border yang konsisten, dan blur backdrop pada header saat di-scroll. Header menjadi satu-satunya elemen yang secara literal berada di atas konten, dan ia menandakannya dengan `backdrop-blur` plus border bawah, bukan dengan bayangan.

### Shadow Vocabulary
- **Focus ring** (`box-shadow: 0 0 0 2px hsl(var(--ring)), 0 0 0 4px hsl(var(--background))`): satu-satunya penggunaan shadow yang wajib. Muncul pada `:focus-visible` di semua kontrol interaktif.
- **Hero bottle glow** (`filter: blur(48px); background: rgba(255,255,255,0.2)`): bukan elevation; bagian dari komposisi hero dan tidak boleh dipindahkan ke komponen lain.

### Named Rules
**The Flat-By-Default Rule.** Permukaan datar saat diam. Kalau sebuah kartu terasa perlu bayangan untuk terbaca, masalahnya ada pada border atau jarak, bukan pada kurangnya bayangan.

**The Border-Not-Shadow Rule.** Untuk memisahkan dua permukaan, pakai border 1px hairline. Shadow hanya untuk state fokus.

## Shapes

Bahasa bentuknya kecil dan terkendali, dengan dua kelas ukuran yang jelas.

Kontrol (tombol, input, item menu, tautan bergaya tombol) memakai sudut 6px — cukup membulat untuk terasa ramah, cukup tajam untuk terasa presisi. Permukaan media (tile produk, kartu berita, panel kalkulator) memakai 8–16px: 8px untuk kartu berisi, 12px untuk tile gambar, 16px untuk panel besar seperti kalkulator dan hero produk.

Border selalu 1px dan selalu hairline, tidak pernah lebih tebal kecuali sebagai indikator state. Tidak ada clipping bentuk aneh, tidak ada sudut asimetris, tidak ada mask. Satu-satunya bentuk organik di seluruh sistem adalah siluet botol, dan itu memang satu-satunya ilustrasi.

**The Two-Radius Rule.** Kontrol 6px, permukaan 12px. Jangan mencampur keduanya dalam satu komponen; tombol di dalam kartu tetap 6px walau kartunya 12px.

## Components

### Buttons
Karakter: tegas dan langsung. Tombol tidak berbayang dan tidak beranimasi selain perubahan warna — kepercayaan dirinya datang dari ukuran, padding lebar, dan warna yang penuh.

- **Shape:** sudut 6px (`rounded-md`), tinggi 40px untuk ukuran default, 48px untuk CTA hero.
- **Primary:** latar Marine Signal, teks putih, padding 10×16px, teks 14px/500. Di atas bidang marine, primary dibalik: latar putih, teks Marine Ink.
- **Hover / Focus:** hanya perubahan warna latar (`bg-primary/90` atau `hover:bg-white/90`), transisi 150ms. Fokus memakai ring 2px dengan offset 2px; di atas marine, ring-nya putih dengan offset marine.
- **Secondary / Outline:** border 1px `hairline` di atas putih, atau border putih 40% di atas marine. Hover mengisi dengan `accent` (surface-muted) atau putih 10%.
- **Ghost:** tanpa border dan latar; hover memakai surface-muted. Dipakai untuk item navigasi dan aksi sekunder di dalam kartu.
- **Disabled:** opacity 50%, pointer events dimatikan. Tidak ada gaya khusus lain.

> **Exception — Primary CTA di Hero Section.** Primary CTA di Hero Section diizinkan memiliki micro-scale motion (1.01x) dan pergeseran Y (-1px) untuk meningkatkan interaktivitas. Tombol lain dilarang beranimasi selain perubahan warna. Animasi memakai `transform` saja (tanpa layout shift) dan dilewati saat `prefers-reduced-motion`.

### Cards / Containers
- **Corner Style:** 8px untuk kartu berisi (kartu ion), 12px untuk tile media, 16px untuk panel besar.
- **Background:** putih di atas section surface-muted, atau surface-muted di atas putih. Kartu tidak pernah memakai warna aksen sebagai latar kecuali kartu berita tanpa gambar.
- **Shadow Strategy:** tidak ada. Lihat The Flat-By-Default Rule.
- **Border:** 1px hairline pada kartu berisi; tile media tidak punya border sama sekali, hanya latar dan radius.
- **Internal Padding:** 16px untuk kartu kecil, 24px untuk tile media, 32–48px untuk panel besar.

### Inputs / Fields
- **Style:** tinggi 40px, sudut 6px, border 1px hairline, latar putih, teks 16px di mobile dan 14px di desktop.
- **Focus:** ring 2px Marine Signal dengan offset 2px; border tidak berubah warna.
- **Error / Disabled:** belum ada state error khusus di sistem ini; input yang tidak valid saat ini hanya dicegah lewat validasi tombol. Disabled memakai opacity 50% dan kursor not-allowed.

### Navigation
Header sticky setinggi 56px dengan latar putih, berubah menjadi putih 80% plus `backdrop-blur` dan border bawah hairline setelah scroll melewati 80px. Wordmark "Pocari Sweat" 18px semibold di kiri; item menu 14px/500 dengan hover berwarna Marine Ink. Menu "Produk" dan "Tentang" adalah dropdown Radix berisi item dengan judul 14px medium plus deskripsi 14px muted.

Di bawah 768px seluruh navigasi diganti tombol ikon yang membuka overlay penuh: latar putih, daftar vertikal dengan label kategori uppercase kecil, dan tombol tutup di kanan atas. Tidak ada drawer setengah layar; overlay menutup seluruh viewport.

Di atas header utama ada Identity Strip setinggi 36px dengan latar Marine Deep dan teks 11–12px putih — satu-satunya elemen di halaman yang memakai teks sekecil itu.

### Signature Component: Ion Ledger
Lima kartu sejajar, satu per ion, masing-masing berisi simbol kimia dalam Bricolage Grotesque 24px bold berwarna Marine Signal, lalu jumlah mg dalam 12px, lalu nama ion. Ini bukan grafik dan bukan ikon: simbol dan angka diperlakukan sebagai data yang dipamerkan. Di mobile grid menjadi 2 kolom dan kartu terakhir melebar penuh. Komponen inilah yang paling langsung mewujudkan North Star — lembar data, bukan iklan.

### Signature Component: Product Tile
Tile rasio 4:5 dengan latar gradient sangat halus dari sky 20% ke marine 5%, berisi siluet botol SVG yang digambar di kode. Tidak ada foto produk di seluruh situs. Hover di desktop memberi tilt 6 derajat berbasis pointer plus naik 4px, dan dimatikan sepenuhnya saat `prefers-reduced-motion`.

## Do's and Don'ts

### Do:
- **Do** buka setiap section berjudul dengan label uppercase 14px Marine Ink, tracking 0.05em.
- **Do** pakai satu bidang Marine Signal penuh per halaman, dan biarkan sisanya putih atau surface-muted.
- **Do** gunakan border 1px hairline sebagai pemisah utama antar permukaan.
- **Do** pertahankan sudut 6px untuk kontrol dan 12px untuk permukaan media.
- **Do** tampilkan angka ion dan simbol kimia sebagai konten display berukuran besar, bukan sebagai teks kecil di dalam tabel.
- **Do** jaga jarak section di 80px desktop / 56px mobile; konsistensi ritme adalah bagian dari identitas.
- **Do** pakai Marine Ink untuk semua teks biru di atas putih, dan Marine Signal hanya untuk bidang serta elemen non-teks.

### Don't:
- **Don't** menambahkan bayangan pada kartu, panel, atau section. Kedalaman datang dari border dan nada permukaan.
- **Don't** memakai Marine Signal sebagai warna teks di atas putih — kontrasnya gagal.
- **Don't** membuat bidang marine kedua di halaman yang sudah punya hero marine.
- **Don't** membesarkan judul kartu melebihi 16px untuk "menambah hierarki"; pakai bobot dan warna.
- **Don't** memperkenalkan radius baru di luar 4/6/8/12/16px.
- **Don't** memakai foto stok sebagai pengganti siluet botol; seluruh ilustrasi produk digambar di kode dengan satu bahasa bentuk.
- **Don't** menambahkan gradient dekoratif selain gradient hero marine dan gradient tile produk yang sudah ada.
