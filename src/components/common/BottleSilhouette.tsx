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

const ORIGINAL_NECK =
  "M48 22 L48 48 C48 56 42 60 38 66 L38 72 L82 72 L82 66 C78 60 72 56 72 48 L72 22 Z"

const ION_BODY =
  "M45 60 C38 66 34 78 34 98 L34 284 C34 298 40 306 52 306 L68 306 C80 306 86 298 86 284 L86 98 C86 78 82 66 75 60 Z"

const ION_NECK =
  "M52 14 L52 42 C52 48 48 52 45 56 L45 60 L75 60 L75 56 C72 52 68 48 68 42 L68 14 Z"

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

/** Flat vector: Ion Water — badan putih, label cyan, tutup putih. */
function FlatIonWater() {
  return (
    <>
      {/* Leher botol */}
      <path d={ION_NECK} fill="#ffffff" opacity="0.8" stroke="#cbd5e1" strokeWidth="1.5" />
      {/* Badan botol (ramping) */}
      <path d={ION_BODY} fill="#ffffff" opacity="0.8" stroke="#cbd5e1" strokeWidth="1.5" />
      {/* Highlight cekungan vertikal */}
      <rect x="54" y="104" width="6" height="180" rx="3" fill="#ffffff" opacity="0.7" />
      {/* Tutup botol */}
      <rect x="50" y="4" width="20" height="12" rx="3" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1.5" />
      {/* Label cyan */}
      <rect x="40" y="150" width="40" height="80" rx="4" fill="#22d3ee" />
      {/* Teks label (simulasi) */}
      <rect x="46" y="166" width="28" height="6" rx="3" fill="#ffffff" opacity="0.95" />
      <rect x="46" y="180" width="20" height="5" rx="2.5" fill="#ffffff" opacity="0.75" />
    </>
  )
}

/** Flat vector: Jelly — kantong putih silver, pita biru, corong abu. */
function FlatJelly() {
  return (
    <>
      {/* Badan kantong */}
      <rect x="20" y="52" width="80" height="240" rx="20" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
      {/* Corong / tutup di tengah atas */}
      <rect x="52" y="22" width="16" height="10" rx="3" fill="#e2e8f0" />
      <path d="M56 32 L54 52 L66 52 L64 32 Z" fill="#e2e8f0" />
      {/* Pita biru di tengah */}
      <rect x="20" y="160" width="80" height="42" fill="#2563eb" />
      {/* Teks pita (simulasi) */}
      <rect x="44" y="172" width="32" height="6" rx="3" fill="#ffffff" opacity="0.95" />
      <rect x="50" y="184" width="20" height="5" rx="2.5" fill="#ffffff" opacity="0.7" />
    </>
  )
}

/** Monokrom (currentColor) — dipakai hero agar aman di atas background gelap. */
function MonoOriginal() {
  return (
    <>
      <path d={ORIGINAL_BODY} fill="currentColor" opacity="0.15" />
      <path d={ORIGINAL_NECK} fill="currentColor" opacity="0.2" />
      <rect x="44" y="8" width="32" height="14" rx="3" fill="currentColor" opacity="0.35" />
      <rect x="32" y="140" width="56" height="90" rx="4" fill="currentColor" opacity="0.1" />
      <rect x="42" y="158" width="36" height="6" rx="3" fill="currentColor" opacity="0.3" />
      <rect x="42" y="172" width="26" height="5" rx="2.5" fill="currentColor" opacity="0.2" />
    </>
  )
}

function MonoIonWater() {
  return (
    <>
      <path d={ION_BODY} fill="currentColor" opacity="0.15" />
      <path d={ION_NECK} fill="currentColor" opacity="0.2" />
      <rect x="50" y="4" width="20" height="12" rx="3" fill="currentColor" opacity="0.35" />
      <rect x="40" y="150" width="40" height="80" rx="4" fill="currentColor" opacity="0.1" />
      <rect x="46" y="166" width="28" height="6" rx="3" fill="currentColor" opacity="0.3" />
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
