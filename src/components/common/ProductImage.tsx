import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  BottleSilhouette,
  bottleVariantForSlug,
  type BottleVariant,
} from "./BottleSilhouette"

type ProductImageProps = {
  src: string | null
  alt: string
  className?: string
  sizes?: string
  priority?: boolean
  variant?: "product" | "article"
  /** Slug produk dipakai untuk memilih ilustrasi fallback yang berbeda. */
  slug?: string
}

/** Latar fallback dibedakan per varian agar produk tidak terlihat identik. */
const fallbackBackground: Record<BottleVariant, string> = {
  original: "bg-gradient-to-b from-sky/20 to-marine/5",
  "ion-water": "bg-gradient-to-br from-cyan-100/70 via-sky/15 to-marine/5",
  jelly: "bg-gradient-to-br from-sky-light/50 via-cyan-50/50 to-marine/5",
}

export function ProductImage({
  src,
  alt,
  className,
  sizes = "(min-width: 768px) 33vw, 100vw",
  priority = false,
  variant = "product",
  slug,
}: ProductImageProps) {
  if (src) {
    return (
      <div className={cn("relative", className)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    )
  }

  if (variant === "article") {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-marine/15 via-sky/10 to-marine/5",
          className
        )}
        aria-hidden="true"
      >
        <span className="text-xs font-medium uppercase tracking-widest text-marine-text/70">
          Pocari Sweat
        </span>
      </div>
    )
  }

  const bottleVariant: BottleVariant = slug
    ? bottleVariantForSlug(slug)
    : "original"

  return (
    <div
      className={cn(
        "flex items-center justify-center",
        fallbackBackground[bottleVariant],
        className
      )}
      aria-hidden="true"
      data-illustration={bottleVariant}
    >
      <BottleSilhouette
        variant={bottleVariant}
        className="h-[85%] text-marine-text"
      />
    </div>
  )
}
