import Image from "next/image"
import { cn } from "@/lib/utils"
import { BottleSilhouette } from "./BottleSilhouette"

type ProductImageProps = {
  src: string | null
  alt: string
  className?: string
  sizes?: string
  priority?: boolean
  variant?: "product" | "article"
}

export function ProductImage({
  src,
  alt,
  className,
  sizes = "(min-width: 768px) 33vw, 100vw",
  priority = false,
  variant = "product",
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

  return (
    <div
      className={cn(
        "flex items-center justify-center bg-gradient-to-b from-sky/20 to-marine/5",
        className
      )}
      aria-hidden="true"
    >
      <BottleSilhouette className="h-3/4 text-marine-text" />
    </div>
  )
}
