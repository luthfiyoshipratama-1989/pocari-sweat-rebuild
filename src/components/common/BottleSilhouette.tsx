import { cn } from "@/lib/utils"

export type BottleVariant = "original" | "ion-water" | "jelly"

/**
 * Menentukan varian siluet dari slug produk.
 * Urutan penting: "ion-water" dicek sebelum fallback.
 */
export function bottleVariantForSlug(slug: string): BottleVariant {
  if (slug.includes("ion-water")) return "ion-water"
  if (slug.includes("jelly")) return "jelly"
  return "original"
}

const ORIGINAL_BODY =
  "M38 72 C26 80 22 96 22 120 L22 280 C22 296 32 306 48 306 L72 306 C88 306 98 296 98 280 L98 120 C98 96 94 80 82 72 Z"

// Geometri sama dengan ORIGINAL_BODY, tanpa segmen penutup: fill tetap
// menutup otomatis, tetapi stroke tidak menarik garis lurus di y=72.
const ORIGINAL_BODY_OUTLINE = ORIGINAL_BODY.replace(/ Z$/, "")

const ORIGINAL_NECK =
  "M48 22 L48 48 C48 56 42 60 38 66 L38 72 L82 72 L82 66 C78 60 72 56 72 48 L72 22 Z"

const ION_BODY =
  "M40 62 C34 68 29 79 28 92 L28 284 C28 295 34 302 45 302 L75 302 C86 302 92 295 92 284 L92 92 C91 79 86 68 80 62 Z"

const ION_NECK =
  "M49 40 L49 54 C49 58 46 60 44 62 L76 62 C74 60 71 58 71 54 L71 40 Z"

/** Flat vector: Original — badan biru muda, label biru tua, tutup biru. */
function FlatOriginal() {
  return (
    <>
      {/* Badan botol */}
      <path d={ORIGINAL_BODY} fill="#bfdbfe" opacity="0.6" />
      {/* Leher botol */}
      <path d={ORIGINAL_NECK} fill="#bfdbfe" opacity="0.6" />
      {/* Tutup botol */}
      <rect x="44" y="8" width="32" height="14" rx="3" fill="#1d4ed8" />
      {/* Label biru tua */}
      <rect x="32" y="140" width="56" height="90" rx="4" fill="#1e3a8a" />
      {/* Teks label (simulasi) */}
      <rect x="42" y="158" width="36" height="6" rx="3" fill="#ffffff" opacity="0.9" />
      <rect x="42" y="172" width="26" height="5" rx="2.5" fill="#ffffff" opacity="0.7" />
      <rect x="42" y="184" width="30" height="5" rx="2.5" fill="#ffffff" opacity="0.5" />
    </>
  )
}

/** Flat vector: Ion Water — botol PET bening, label biru besar, garnish jeruk 3D. */
function FlatIonWater() {
  return (
    <>
      <defs>
        <linearGradient id="iw-glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#eef5fa" />
          <stop offset="18%" stopColor="#ffffff" />
          <stop offset="58%" stopColor="#f7fbfd" />
          <stop offset="100%" stopColor="#d8e5ee" />
        </linearGradient>
        <linearGradient id="iw-cap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#e6edf3" />
          <stop offset="100%" stopColor="#c3d0da" />
        </linearGradient>
        <linearGradient id="iw-liquid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e6f7ff" />
          <stop offset="100%" stopColor="#b9e6fb" />
        </linearGradient>
        <linearGradient id="iw-label-gloss" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
          <stop offset="38%" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#001a2b" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient id="iw-gloss" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="iw-orange" cx="35%" cy="30%" r="78%">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="65%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </radialGradient>
        <radialGradient id="iw-orange-flesh" cx="38%" cy="32%" r="80%">
          <stop offset="0%" stopColor="#fff7d6" />
          <stop offset="70%" stopColor="#fde047" />
          <stop offset="100%" stopColor="#fbbf24" />
        </radialGradient>
        <radialGradient id="iw-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0f172a" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Shadow pendaratan botol */}
      <ellipse cx="60" cy="305" rx="34" ry="5" fill="url(#iw-shadow)" />

      {/* Badan botol (PET bening) */}
      <path d={ION_BODY} fill="url(#iw-glass)" />
      <path d={ION_NECK} fill="url(#iw-glass)" />

      {/* Ring leher botol */}
      <rect x="47" y="57" width="26" height="4" rx="2" fill="#e3ecf3" opacity="0.95" />

      {/* Cairan + garis gelombang */}
      <path
        d="M28.5 274 C38 266 47 282 57.5 275 C67 269 79 281 91.5 273 L91.5 284 C91.5 295 86 300 75 300 L45 300 C34 300 28.5 295 28.5 284 Z"
        fill="url(#iw-liquid)"
        opacity="0.9"
      />
      <path
        d="M28.5 274 C38 266 47 282 57.5 275 C67 269 79 281 91.5 273"
        fill="none"
        stroke="#7dd3fc"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* Highlight kiri + bayangan tepi kanan (efek silinder glossy) */}
      <rect x="33" y="74" width="6" height="200" rx="3" fill="url(#iw-gloss)" />
      <rect x="87.4" y="74" width="3.4" height="200" rx="1.7" fill="#94a3b8" opacity="0.16" />

      {/* Tutup berusuk */}
      <rect x="45" y="22" width="30" height="18" rx="4.5" fill="url(#iw-cap)" stroke="#c3d0da" strokeWidth="0.8" />
      <ellipse cx="60" cy="23" rx="14" ry="2" fill="#ffffff" opacity="0.95" />
      <g stroke="#b9c6d3" strokeWidth="0.7" opacity="0.75">
        <line x1="49" y1="26" x2="49" y2="38" />
        <line x1="53" y1="25" x2="53" y2="39" />
        <line x1="57" y1="25" x2="57" y2="39" />
        <line x1="61" y1="25" x2="61" y2="39" />
        <line x1="65" y1="25" x2="65" y2="39" />
        <line x1="69" y1="26" x2="69" y2="38" />
        <line x1="73" y1="27" x2="73" y2="37" />
      </g>

      {/* Label biru besar */}
      <rect x="26" y="116" width="68" height="150" rx="4" fill="#00a0e9" />
      <rect x="26" y="116" width="68" height="150" rx="4" fill="url(#iw-label-gloss)" />
      <rect x="28" y="118" width="64" height="2" rx="1" fill="#ffffff" opacity="0.3" />

      {/* Wordmark label */}
      <text
        x="60"
        y="133"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
        fontSize="5.2"
        fontWeight="700"
        letterSpacing="0.5"
        opacity="0.92"
      >
        POCARI SWEAT
      </text>
      <text
        x="60"
        y="180"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
        fontSize="34"
        fontWeight="800"
        letterSpacing="-0.8"
      >
        ion
      </text>
      <text
        x="60"
        y="205"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
        fontSize="20"
        fontWeight="600"
        letterSpacing="0.5"
      >
        water
      </text>
      <text
        x="60"
        y="224"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
        fontSize="5.2"
        fontWeight="600"
        letterSpacing="0.6"
        opacity="0.95"
      >
        LOW CALORIE
      </text>

      {/* Swoosh putih di dasar label */}
      <path
        d="M28 246 C46 260 80 257 94 238"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3.6"
        strokeLinecap="round"
      />
      <path
        d="M50 252 C61 254 73 250 81 243"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.65"
      />

      {/* Outline botol digambar terakhir agar tetap tajam di atas label */}
      <path d={ION_BODY} fill="none" stroke="#c2d2df" strokeWidth="1.1" />
      <path d={ION_NECK} fill="none" stroke="#c2d2df" strokeWidth="1.1" />

      {/* Garnisir jeruk 3D (di depan botol) */}
      <ellipse cx="100" cy="300" rx="13" ry="2.6" fill="#0f172a" opacity="0.16" />
      <circle cx="100" cy="286" r="15" fill="url(#iw-orange)" stroke="#ea580c" strokeWidth="0.9" />
      <circle cx="100" cy="286" r="13.2" fill="#fff7ed" opacity="0.98" />
      <circle cx="100" cy="286" r="12" fill="url(#iw-orange-flesh)" />
      <g stroke="#ffffff" strokeWidth="0.95" strokeLinecap="round" opacity="0.9">
        <line x1="88" y1="286" x2="112" y2="286" />
        <line x1="100" y1="274" x2="100" y2="298" />
        <line x1="91.5" y1="277.5" x2="108.5" y2="294.5" />
        <line x1="91.5" y1="294.5" x2="108.5" y2="277.5" />
      </g>
      <circle cx="100" cy="286" r="3.2" fill="#fff7ed" opacity="0.95" />
      <ellipse
        cx="95"
        cy="280"
        rx="4.2"
        ry="2.3"
        fill="#ffffff"
        opacity="0.55"
        transform="rotate(-28 95 280)"
      />
    </>
  )
}

/** Flat vector: Jelly — kantong putih silver, pita biru, corong abu. */
function FlatJelly() {
  return (
    <>
      {/* Badan kantong */}
      <rect x="20" y="52" width="80" height="240" rx="20" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
      {/* Segel atas kantong — menegaskan bentuk pouch, bukan botol */}
      <rect x="30" y="58" width="60" height="8" rx="4" fill="#dbeafe" />
      {/* Corong / tutup di tengah atas */}
      <rect x="52" y="22" width="16" height="10" rx="3" fill="#e2e8f0" />
      <path d="M56 32 L54 52 L66 52 L64 32 Z" fill="#e2e8f0" />
      {/* Pita biru di tengah */}
      <rect x="20" y="160" width="80" height="42" fill="#2563eb" />
      {/* Teks pita (simulasi) */}
      <rect x="44" y="172" width="32" height="6" rx="3" fill="#ffffff" opacity="0.95" />
      <rect x="50" y="184" width="20" height="5" rx="2.5" fill="#ffffff" opacity="0.7" />
      {/* Potongan jelly di dasar kantong */}
      <g fill="#93c5fd" opacity="0.85">
        <circle cx="40" cy="266" r="7" />
        <circle cx="60" cy="276" r="6" />
        <circle cx="79" cy="264" r="5" />
      </g>
    </>
  )
}

/** Monokrom (currentColor) — dipakai hero agar aman di atas background gelap. */
function MonoOriginal() {
  return (
    <>
      <path
        d={ORIGINAL_BODY_OUTLINE}
        fill="currentColor"
        opacity="0.28"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />
      <path d={ORIGINAL_NECK} fill="currentColor" opacity="0.38" />
      <rect x="44" y="8" width="32" height="14" rx="3" fill="currentColor" opacity="0.55" />
      <rect x="32" y="140" width="56" height="90" rx="4" fill="currentColor" opacity="0.18" />
      <rect x="42" y="158" width="36" height="6" rx="3" fill="currentColor" opacity="0.5" />
      <rect x="42" y="172" width="26" height="5" rx="2.5" fill="currentColor" opacity="0.4" />
    </>
  )
}

function MonoIonWater() {
  return (
    <>
      <path d={ION_BODY} fill="currentColor" opacity="0.15" />
      <path d={ION_NECK} fill="currentColor" opacity="0.2" />
      <rect x="45" y="22" width="30" height="18" rx="4.5" fill="currentColor" opacity="0.35" />
      <rect x="26" y="116" width="68" height="150" rx="4" fill="currentColor" opacity="0.12" />
      <rect x="40" y="164" width="40" height="14" rx="3" fill="currentColor" opacity="0.32" />
      <rect x="42" y="188" width="36" height="9" rx="3" fill="currentColor" opacity="0.24" />
      <path
        d="M28.5 274 C38 266 47 282 57.5 275 C67 269 79 281 91.5 273"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.35"
      />
    </>
  )
}

function MonoJelly() {
  return (
    <>
      <rect x="20" y="52" width="80" height="240" rx="20" fill="currentColor" opacity="0.15" />
      <rect x="52" y="22" width="16" height="10" rx="3" fill="currentColor" opacity="0.35" />
      <path d="M56 32 L54 52 L66 52 L64 32 Z" fill="currentColor" opacity="0.35" />
      <rect x="20" y="160" width="80" height="42" fill="currentColor" opacity="0.1" />
      <rect x="44" y="172" width="32" height="6" rx="3" fill="currentColor" opacity="0.3" />
    </>
  )
}

export function BottleSilhouette({
  className,
  variant = "original",
  monochrome = false,
}: {
  className?: string
  variant?: BottleVariant
  /** Hero memakai ini agar tetap monokrom (currentColor) di atas background gelap. */
  monochrome?: boolean
}) {
  return (
    <svg
      viewBox="0 0 120 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-full w-auto", className)}
      aria-hidden="true"
    >
      {monochrome ? (
        <>
          {variant === "original" && <MonoOriginal />}
          {variant === "ion-water" && <MonoIonWater />}
          {variant === "jelly" && <MonoJelly />}
        </>
      ) : (
        <>
          {variant === "original" && <FlatOriginal />}
          {variant === "ion-water" && <FlatIonWater />}
          {variant === "jelly" && <FlatJelly />}
        </>
      )}
    </svg>
  )
}
