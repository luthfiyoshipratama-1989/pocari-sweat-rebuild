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

/* ==========================================================================
 * MONOKROM (hero) - kanvas 120 x 320
 * ======================================================================== */

const MONO_ORIGINAL_BODY =
  "M49 40 L49 60 C49 66 44 72 39 76 C32 83 27 93 27 106 L27 284 C27 294 34 301 44 301 L76 301 C86 301 93 294 93 284 L93 106 C93 93 88 83 81 76 C76 72 71 66 71 60 L71 40 Z"

const MONO_ION_BODY =
  "M50 40 L50 58 C50 62 47 66 44 70 C38 78 34 86 34 98 L34 282 C34 293 39 299 48 299 L72 299 C81 299 86 293 86 282 L86 98 C86 86 82 78 76 70 C73 66 70 62 70 58 L70 40 Z"

const MONO_JELLY_BODY =
  "M16 100 C16 90 22 84 32 84 L88 84 C98 84 104 90 104 100 L104 286 C104 294 98 300 90 300 L30 300 C22 300 16 294 16 286 Z"

function MonoOriginal() {
  return (
    <>
      <path d={MONO_ORIGINAL_BODY} fill="currentColor" opacity="0.16" />
      <rect x="46" y="14" width="28" height="24" rx="3" fill="currentColor" opacity="0.4" />
      <rect x="47" y="37" width="26" height="4" rx="2" fill="currentColor" opacity="0.3" />
      <rect x="24" y="150" width="72" height="96" rx="4" fill="currentColor" opacity="0.14" />
      <path
        d="M31 218 C45 228 75 228 89 216"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        opacity="0.35"
      />
    </>
  )
}

function MonoIonWater() {
  return (
    <>
      <path d={MONO_ION_BODY} fill="currentColor" opacity="0.16" />
      <rect x="48" y="18" width="24" height="21" rx="3.5" fill="currentColor" opacity="0.38" />
      <rect x="49" y="37" width="22" height="3.5" rx="1.75" fill="currentColor" opacity="0.28" />
      <rect x="29" y="112" width="62" height="148" rx="4" fill="currentColor" opacity="0.12" />
      <rect x="42" y="160" width="36" height="14" rx="3" fill="currentColor" opacity="0.3" />
      <rect x="44" y="182" width="32" height="8" rx="3" fill="currentColor" opacity="0.22" />
      <path
        d="M29 228 C46 244 75 242 91 224"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.32"
      />
      <circle cx="96" cy="282" r="13" fill="currentColor" opacity="0.18" />
    </>
  )
}

function MonoJelly() {
  return (
    <>
      <path d={MONO_JELLY_BODY} fill="currentColor" opacity="0.16" />
      <rect x="14" y="80" width="92" height="14" rx="4" fill="currentColor" opacity="0.3" />
      <rect x="51" y="44" width="18" height="10" rx="2.5" fill="currentColor" opacity="0.35" />
      <rect x="53" y="52" width="14" height="32" rx="2" fill="currentColor" opacity="0.25" />
      <rect x="16" y="150" width="88" height="50" fill="currentColor" opacity="0.12" />
      <g fill="currentColor" opacity="0.28">
        <circle cx="40" cy="272" r="9" />
        <circle cx="62" cy="284" r="8" />
        <circle cx="82" cy="268" r="7.5" />
      </g>
    </>
  )
}

/* ==========================================================================
 * ILUSTRASI FLAT - artwork dari desain referensi.
 *
 * Original & Ion Water: 190 x 470. Jelly: 400 x 540.
 * ID gradient di-namespace per varian agar tidak bertabrakan saat beberapa
 * ilustrasi tampil di halaman yang sama (grid produk).
 * ======================================================================== */

const VIEW_BOX: Record<BottleVariant, string> = {
  original: "0 0 190 470",
  "ion-water": "0 0 190 470",
  jelly: "0 0 400 540",
}

/** Bentuk dasar botol PET (dipakai Original & Ion Water). */
const PET_BODY =
  "M57 78 L133 78 C133 105 170 120 175 175 L175 420 C175 440 168 452 148 456 L42 456 C22 452 15 440 15 420 L15 175 C20 120 57 105 57 78 Z"

/** Pouch jelly: bahu menyempit, badan lebar, dasar rata. */
const POUCH_BODY =
  "M160 95 L240 95 C250 112 300 118 336 124 C346 126 350 134 350 144 L350 505 C350 515 344 520 334 520 L66 520 C56 520 50 515 50 505 L50 144 C50 134 54 126 64 124 C100 118 150 112 160 95 Z"

function FlatOriginal() {
  return (
    <>
      <defs>
        <linearGradient id="orig-body" x1="0" x2="1">
          <stop offset="0" stopColor="#dfe7ec" />
          <stop offset="0.25" stopColor="#ffffff" />
          <stop offset="0.7" stopColor="#f1f5f8" />
          <stop offset="1" stopColor="#cfd9e0" />
        </linearGradient>
        <linearGradient id="orig-cap" x1="0" x2="1">
          <stop offset="0" stopColor="#d9dee2" />
          <stop offset="0.35" stopColor="#ffffff" />
          <stop offset="1" stopColor="#cdd3d8" />
        </linearGradient>
        <linearGradient id="orig-label" x1="0" x2="1">
          <stop offset="0" stopColor="#0a56b8" />
          <stop offset="0.45" stopColor="#1590d4" />
          <stop offset="1" stopColor="#0a56b8" />
        </linearGradient>
        <clipPath id="orig-clip">
          <path d={PET_BODY} />
        </clipPath>
      </defs>

      <path
        d={PET_BODY}
        fill="url(#orig-body)"
        stroke="#c3ced6"
        strokeWidth="1.5"
      />

      {/* Basis botol dipotong ke outline: tidak ada warna keluar dari botol */}
      <g clipPath="url(#orig-clip)">
        <g fill="#eef3f6" stroke="#c3ced6" strokeWidth="1.2">
          <path d="M18 430 C14 448 24 462 40 460 C48 452 44 438 40 432 Z" />
          <path d="M172 430 C176 448 166 462 150 460 C142 452 146 438 150 432 Z" />
          <path d="M62 458 C66 450 82 450 86 458 C80 466 68 466 62 458 Z" />
          <path d="M104 458 C108 450 124 450 128 458 C122 466 110 466 104 458 Z" />
        </g>
        <g fill="none" stroke="#b9c8d2" strokeWidth="1.3" strokeLinecap="round">
          <path d="M18 160 C60 150 80 175 120 166 C145 161 160 158 172 162" />
          <path d="M18 195 C50 205 80 178 120 192 C145 200 160 195 172 192" />
          <path d="M18 410 C60 400 90 420 130 410 C150 405 162 408 172 412" />
        </g>
      </g>

      <rect x="52" y="68" width="86" height="10" rx="3" fill="#f4f7f9" stroke="#c3ced6" strokeWidth="1.2" />
      <path d="M60 20 L130 20 L136 68 L54 68 Z" fill="url(#orig-cap)" stroke="#c3ced6" strokeWidth="1.5" />
      <g stroke="#c3ced6" strokeWidth="1">
        <line x1="69" y1="26" x2="67" y2="66" />
        <line x1="79" y1="26" x2="78" y2="66" />
        <line x1="89" y1="26" x2="89" y2="66" />
        <line x1="99" y1="26" x2="99" y2="66" />
        <line x1="109" y1="26" x2="110" y2="66" />
        <line x1="119" y1="26" x2="121" y2="66" />
      </g>
      <rect x="60" y="16" width="70" height="8" rx="3" fill="#ffffff" stroke="#c3ced6" strokeWidth="1.2" />

      <rect x="15" y="250" width="160" height="125" fill="url(#orig-label)" />
      <g fontFamily="Helvetica, Arial, sans-serif" fill="#ffffff">
        <text x="26" y="269" fontSize="5.5" letterSpacing="0.6">
          ION SUPPLY DRINK
        </text>
        <text x="22" y="304" fontSize="33" fontWeight="700" textLength="146" lengthAdjust="spacingAndGlyphs">
          POCARI
        </text>
        <text x="22" y="334" fontSize="33" fontWeight="700" textLength="126" lengthAdjust="spacingAndGlyphs">
          SWEAT
        </text>
      </g>
      <path
        d="M22 343 C50 335 80 345 110 352 C135 357 155 352 170 350 L170 360 C150 366 120 366 90 360 C60 354 40 347 22 343 Z"
        fill="#ffffff"
      />
    </>
  )
}

function FlatIonWater() {
  return (
    <>
      <defs>
        <linearGradient id="ion-body" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#dfe7ec" />
          <stop offset="0.25" stopColor="#ffffff" />
          <stop offset="0.7" stopColor="#f1f5f8" />
          <stop offset="1" stopColor="#cfd9e0" />
        </linearGradient>
        <linearGradient id="ion-cap" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#d9dee2" />
          <stop offset="0.35" stopColor="#ffffff" />
          <stop offset="1" stopColor="#cdd3d8" />
        </linearGradient>
        <linearGradient id="ion-label" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#1fa9e0" />
          <stop offset="0.4" stopColor="#33bdee" />
          <stop offset="1" stopColor="#1fa3da" />
        </linearGradient>
        <clipPath id="ion-clip">
          <path d={PET_BODY} />
        </clipPath>
      </defs>

      <path
        d={PET_BODY}
        fill="url(#ion-body)"
        stroke="#c3ced6"
        strokeWidth="1.5"
      />

      <g clipPath="url(#ion-clip)">
        <g fill="#eef3f6" stroke="#c3ced6" strokeWidth="1.2">
          <path d="M18 430 C14 448 24 462 40 460 C48 452 44 438 40 432 Z" />
          <path d="M172 430 C176 448 166 462 150 460 C142 452 146 438 150 432 Z" />
          <path d="M62 458 C66 450 82 450 86 458 C80 466 68 466 62 458 Z" />
          <path d="M104 458 C108 450 124 450 128 458 C122 466 110 466 104 458 Z" />
        </g>
        <g fill="none" stroke="#b9c8d2" strokeWidth="1.3" strokeLinecap="round">
          <path d="M18 170 C60 160 80 185 120 176 C145 171 160 168 172 172" />
          <path d="M18 195 C50 205 80 178 120 192 C145 200 160 195 172 192" />
          <path d="M18 222 C60 212 90 232 130 222 C150 217 162 220 172 224" />
        </g>
        <path
          d="M26 190 C24 260 24 330 28 410"
          fill="none"
          stroke="#ffffff"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.8"
        />
      </g>

      <rect x="52" y="68" width="86" height="10" rx="3" fill="#f4f7f9" stroke="#c3ced6" strokeWidth="1.2" />
      <path d="M60 20 L130 20 L136 68 L54 68 Z" fill="url(#ion-cap)" stroke="#c3ced6" strokeWidth="1.5" />
      <g stroke="#c3ced6" strokeWidth="1" opacity="0.9">
        <line x1="69" y1="26" x2="67" y2="66" />
        <line x1="79" y1="26" x2="78" y2="66" />
        <line x1="89" y1="26" x2="89" y2="66" />
        <line x1="99" y1="26" x2="99" y2="66" />
        <line x1="109" y1="26" x2="110" y2="66" />
        <line x1="119" y1="26" x2="121" y2="66" />
      </g>
      <rect x="60" y="16" width="70" height="8" rx="3" fill="#ffffff" stroke="#c3ced6" strokeWidth="1.2" />

      <rect x="15" y="245" width="160" height="140" fill="url(#ion-label)" />

      <g fontFamily="Helvetica, Arial, sans-serif" fill="#ffffff">
        <text x="36" y="292" fontSize="46" fontWeight="300">
          ion
        </text>
        <text x="36" y="334" fontSize="46" fontWeight="300">
          water
        </text>
        <text x="36" y="354" fontSize="17" fontWeight="700" letterSpacing="0.5">
          POCARI
        </text>
        <text x="36" y="371" fontSize="17" fontWeight="700" letterSpacing="0.5">
          SWEAT
        </text>
        <text x="118" y="351" fontSize="5" fontWeight="400" letterSpacing="0.4">
          LOW
        </text>
        <text x="118" y="358" fontSize="5" fontWeight="400" letterSpacing="0.4">
          CALORIE
        </text>
      </g>

      <path d="M34 381 C60 374 85 378 112 380 C90 382 60 383 34 381 Z" fill="#ffffff" />
    </>
  )
}

function FlatJelly() {
  return (
    <>
      <defs>
        <linearGradient id="jelly-pouch" x1="0" x2="1">
          <stop offset="0" stopColor="#dde6ee" />
          <stop offset="0.2" stopColor="#ffffff" />
          <stop offset="0.8" stopColor="#f3f6f9" />
          <stop offset="1" stopColor="#d5dfe8" />
        </linearGradient>
        <linearGradient id="jelly-blue" x1="0" x2="1">
          <stop offset="0" stopColor="#0a50b4" />
          <stop offset="0.5" stopColor="#1a62c8" />
          <stop offset="1" stopColor="#0a50b4" />
        </linearGradient>
        <linearGradient id="jelly-cap" x1="0" x2="1">
          <stop offset="0" stopColor="#d9dee2" />
          <stop offset="0.4" stopColor="#ffffff" />
          <stop offset="1" stopColor="#cdd3d8" />
        </linearGradient>
        <clipPath id="jelly-clip">
          <path d={POUCH_BODY} />
        </clipPath>
      </defs>

      {/* Badan pouch */}
      <path
        d={POUCH_BODY}
        fill="url(#jelly-pouch)"
        stroke="#c9d4de"
        strokeWidth="1.5"
      />

      {/* Panel biru, dipotong ke badan pouch agar tidak meluber */}
      <g clipPath="url(#jelly-clip)">
        <path
          d="M170 100 L230 100 C238 112 262 118 320 124 L320 520 L80 520 L80 124 C138 118 162 112 170 100 Z"
          fill="url(#jelly-blue)"
        />
        <path
          d="M105 124 C130 118 150 114 165 106 M295 124 C270 118 250 114 235 106"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.35"
          strokeWidth="2"
        />
      </g>

      {/* Leher + tutup */}
      <rect x="160" y="70" width="80" height="12" rx="4" fill="#f4f7f9" stroke="#c9d4de" strokeWidth="1.2" />
      <path d="M168 82 L232 82 L226 98 L174 98 Z" fill="#eef2f6" stroke="#c9d4de" strokeWidth="1.2" />
      <path d="M173 24 L227 24 L230 70 L170 70 Z" fill="url(#jelly-cap)" stroke="#c9d4de" strokeWidth="1.5" />
      <g stroke="#c9d4de" strokeWidth="1">
        <line x1="181" y1="28" x2="180" y2="68" />
        <line x1="189" y1="28" x2="189" y2="68" />
        <line x1="197" y1="28" x2="197" y2="68" />
        <line x1="205" y1="28" x2="205" y2="68" />
        <line x1="213" y1="28" x2="214" y2="68" />
        <line x1="221" y1="28" x2="222" y2="68" />
      </g>
      <rect x="173" y="15" width="54" height="10" rx="3" fill="#ffffff" stroke="#c9d4de" strokeWidth="1.2" />

      {/* Teks label */}
      <g fontFamily="Helvetica, Arial, sans-serif" fill="#ffffff">
        <text x="115" y="213" fontSize="8.5" letterSpacing="1">
          CONDITIONING WATER
        </text>
        <text x="113" y="248" fontSize="40" fontWeight="700" textLength="174" lengthAdjust="spacingAndGlyphs">
          POCARI
        </text>
        <text x="113" y="275" fontSize="30" fontWeight="700" textLength="156" lengthAdjust="spacingAndGlyphs">
          SWEAT
        </text>
      </g>

      <path
        d="M105 296 C150 286 190 304 235 306 C270 308 300 302 320 298 L320 312 C290 318 255 322 215 316 C170 309 135 300 105 296 Z"
        fill="#ffffff"
      />

      <g fontFamily="Helvetica, Arial, sans-serif" fill="#ffffff" fontSize="7.2">
        <text x="113" y="343" fontWeight="700">
          POCARI SWEAT CONDITIONING WATER
        </text>
        <text x="113" y="355">
          is a healthy beverage that smoothly supplies
        </text>
        <text x="113" y="366">
          the lost water and electrolytes during per-
        </text>
        <text x="113" y="377">
          spiration. With the appropriate density and
        </text>
        <text x="113" y="388">
          electrolytes, close to that of human body
        </text>
        <text x="113" y="399">
          fluid, it can be easily absorbed into the body.
        </text>
      </g>
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
      viewBox={monochrome ? "0 0 120 320" : VIEW_BOX[variant]}
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
