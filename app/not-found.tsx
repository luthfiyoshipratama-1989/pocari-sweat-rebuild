import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-7xl font-extrabold tracking-tight text-marine md:text-9xl">
        404
      </p>
      <h1 className="font-display mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
        Alamat yang kamu tuju tidak ada atau sudah dipindahkan. Coba kembali ke
        beranda untuk melanjutkan.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-marine px-6 text-sm font-semibold text-white transition-colors hover:bg-marine-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Kembali ke Beranda
      </Link>
    </main>
  )
}
