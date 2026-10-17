export function IdentityStrip() {
  return (
    <div className="bg-marine-dark text-white text-[11px] sm:text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-4">
        <p className="truncate">
          <span className="font-semibold text-white">Luthfi Yoshi Pratama</span>
          <span className="hidden sm:inline text-white/70">
            {" "}· Design Engineer
          </span>
        </p>
        <a
          href="https://wa.me/62895411963867?text=Halo%20Luthfi%2C%20saya%20lihat%20portofolio%20kamu%20dan%20ingin%20ngobrol%20soal%20proyek."
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 hover:text-white/80 transition-colors font-medium flex items-center gap-1"
        >
          <span className="hidden xs:inline">Ajak kerja sama</span>
          <span className="xs:hidden">Kontak</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
