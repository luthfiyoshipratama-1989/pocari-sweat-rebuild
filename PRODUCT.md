# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Pengguna utama: sesama desainer dan developer.** Mereka membuka situs ini untuk menilai *craft* — apakah keputusan visual punya alasan yang bisa dibaca, apakah copy ditulis dengan sadar, dan apakah eksekusi frontend rapi sampai ke detail. Mereka bukan pembeli; mereka pembaca yang skeptis dan cepat menilai.

**Audiens kedua: pihak yang menilai untuk rekrutmen** (recruiter, hiring manager, atau pemberi kerja potensial). Situs ini dikonfirmasi berfungsi sebagai bukti portofolio saat mencari peluang kerja/interview.

Bahasa situs: Indonesia (`lang="id"`). Seluruh copy, navigasi, dan pesan berbahasa Indonesia.

## Product Purpose

Rebuild situs Pocari Sweat Indonesia sebagai studi kasus desain dan latihan frontend oleh Luthfi Yoshi Pratama. Proyek ini **bukan situs produk**: tidak menjual apa pun, tidak mengumpulkan lead, tidak mewakili merek, dan tidak mengumpulkan data pengguna.

Situs ini ada untuk menunjukkan kualitas eksekusi. Ukuran suksesnya: membuka peluang kerja/interview, dan dibaca serius oleh sesama desainer dan developer.

## Positioning

Mayoritas proyek rebuild berhenti di "tampilannya mirip". Yang tidak bisa ditiru proyek sebelah:

- **Batas yang diumumkan, bukan disembunyikan.** Non-afiliasi dinyatakan terbuka di setiap halaman, bukan hanya di footer kecil.
- **Konten fiktif wajib berlabel.** Situs resmi tidak pernah perlu menyatakan "ini ilustratif"; proyek ini menjadikannya aturan tampilan.
- **Copy situasional berbahasa Indonesia.** Kekuatan proyek ada di penyebutan situasi nyata (habis lari, KRL berdesakan, tangan penuh), bukan superlatif.

## Operating Context

- Dikerjakan mandiri oleh satu orang sebagai proyek portfolio jangka panjang (bukan produk komersial berkelanjutan).
- Konten produk dan artikel bersumber dari data hardcoded di repo (`src/data/products.ts`, `src/data/articles.ts`), bukan CMS.
- Dievaluasi dengan membuka 5 permukaan: Beranda, Produk (katalog + detail per slug), Berita (daftar + detail), Tentang, dan Kalkulator Hidrasi.
- Satu-satunya alat interaktif adalah kalkulator hidrasi (input berat badan, level aktivitas, cuaca → estimasi kebutuhan cairan).
- Tidak ada akun, login, checkout, keranjang, atau backend penyimpanan.
- Verifikasi visual dilakukan dengan menjalankan `npm run dev` dan melihat hasil render di browser.

## Capabilities and Constraints

**Yang sudah ada dan dianggap benar:**
- Katalog 3 varian: Pocari Sweat Original, Ion Water, Jelly — masing-masing punya halaman detail berisi komposisi ion, situasi pemakaian, dan label "estimasi umum, bukan saran medis".
- 3 artikel berita dengan renderer blok kustom (paragraph/heading), kategori `tips` dan `kesehatan`.
- Kalkulator hidrasi: kebutuhan dasar 35 ml/kg, dikalikan faktor aktivitas (×1.0–×1.4) dan cuaca (×0.9–×1.2); hasil dibulatkan ke ratusan ml dan diterjemahkan ke jumlah botol 500 ml.
- Tidak ada satu pun foto asli produk atau dokumentasi berita; visual produk dibuat dari ilustrasi vektor yang digambar di kode.
- Justru karena itu, seluruh angka ion dan nutrisi berstatus **ilustratif** dan tidak boleh ditampilkan seolah data resmi pabrik.

**Terminologi yang dipakai konsisten:** "ion", "keringat", "situasi", "estimasi", "ilustratif". Hindari "terbaik", "nomor satu", "terbukti secara klinis".

**Fakta terbuka (belum diputuskan, jangan diisi sendiri):**
- Apakah situs akan tetap murni portfolio atau nantinya menawarkan jasa desain/frontend.
- Apakah konten akan pindah ke CMS.
- Apakah akan ada lebih dari satu bahasa.

## Brand Commitments

- **Nama & merek:** "Pocari Sweat" beserta logo dan identitasnya milik Otsuka Pharmaceutical / PT Amerta Indah Otsuka. Proyek ini tidak berafiliasi; batas ini tidak bisa dilonggarkan.
- **Aturan konten (dikonfirmasi dipertahankan):** konten fiktif (artikel, berita) wajib ditandai fiktif; angka ion dan nutrisi wajib berlabel ilustratif dan tidak boleh menjadi klaim medis; disclaimer non-afiliasi hadir di setiap permukaan.
- **Voice:** faktual, spesifik situasi, tanpa superlatif pemasaran; kalimat pendek; menyapa pembaca dengan "kamu".
- Situs asli hanya dirujuk sebagai bahan studi, bukan untuk ditiru satu banding satu.

## Evidence on Hand

- Data produk lengkap dengan komposisi ion per varian: `src/data/products.ts`.
- Data artikel lengkap: `src/data/articles.ts`.
- Halaman Tentang yang sudah memuat cerita asal 1980 dan tiga prinsip proyek: `app/(site)/about/page.tsx`.
- Kalkulator hidrasi beserta rumusnya: `src/components/blocks/HydrationCalculator.tsx`.

**Yang tidak ada dan tidak boleh dikarang:** foto produk asli, foto kegiatan/aktivitas, testimoni, jumlah pengunjung, penghargaan, liputan pers, kerja sama merek, dan entri linimasa selain 1980.

## Product Principles

1. **Fakta, bukan klaim.** Setiap angka punya status yang jelas: ilustratif, atau dirujuk ke sumber publik. Tidak ada klaim kesehatan yang boleh tampak seperti saran medis.
2. **Situasi, bukan superlatif.** Copy menyebut momen nyata (habis lari, KRL berdesakan, tangan penuh), bukan peringkat.
3. **Batas yang jelas.** Non-afiliasi dan konten fiktif dinyatakan terbuka, di tempat yang benar-benar terbaca.
4. **Craft sebagai argumen.** Karena audiensnya sesama praktisi dan pemberi kerja, kualitas eksekusi (detail, aksesibilitas, performa, konsistensi) adalah isi pesan itu sendiri.
