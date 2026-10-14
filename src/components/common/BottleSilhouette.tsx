import { cn } from "@/lib/utils"

export function BottleSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-full w-auto", className)}
      aria-hidden="true"
    >
      {/* Tutup botol */}
      <rect x="44" y="8" width="32" height="14" rx="2" fill="currentColor" opacity="0.35" />
      {/* Leher botol */}
      <path
        d="M48 22 L48 48 C48 56 42 60 38 66 L38 72 L82 72 L82 66 C78 60 72 56 72 48 L72 22 Z"
        fill="currentColor"
        opacity="0.2"
      />
      {/* Badan botol */}
      <path
        d="M38 72 C26 80 22 96 22 120 L22 280 C22 296 32 306 48 306 L72 306 C88 306 98 296 98 280 L98 120 C98 96 94 80 82 72 Z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M38 72 C26 80 22 96 22 120 L22 280 C22 296 32 306 48 306 L72 306 C88 306 98 296 98 280 L98 120 C98 96 94 80 82 72 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        opacity="0.5"
      />
      {/* Label */}
      <rect x="32" y="140" width="56" height="90" rx="3" fill="currentColor" opacity="0.1" />
      <rect x="32" y="140" width="56" height="90" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
      {/* Aksen garis label */}
      <line x1="40" y1="160" x2="80" y2="160" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <line x1="40" y1="172" x2="70" y2="172" stroke="currentColor" strokeWidth="2" opacity="0.2" />
      <line x1="40" y1="184" x2="76" y2="184" stroke="currentColor" strokeWidth="2" opacity="0.2" />
      {/* Cairan di dalam botol */}
      <path
        d="M26 200 L26 280 C26 292 34 300 46 300 L74 300 C86 300 94 292 94 280 L94 200 Z"
        fill="currentColor"
        opacity="0.08"
      />
    </svg>
  )
}
