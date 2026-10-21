"use client"

import Link from "next/link"
import { useRef, useState } from "react"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion"
import { ProductImage } from "@/components/common/ProductImage"
import { BottleSilhouette, bottleVariantForSlug } from "@/components/common/BottleSilhouette"
import type { Product } from "@/data/types"

const MAX_TILT = 6

export function ProductCard({ product }: { product: Product }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const reduceMotion = useReducedMotion()
  const [hovered, setHovered] = useState(false)

  const nx = useMotionValue(0)
  const ny = useMotionValue(0)

  const rotateX = useSpring(useTransform(ny, [-1, 1], [MAX_TILT, -MAX_TILT]), {
    stiffness: 300,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(nx, [-1, 1], [-MAX_TILT, MAX_TILT]), {
    stiffness: 300,
    damping: 20,
  })

  const handlePointerMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (reduceMotion || e.pointerType !== "mouse") return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    nx.set((e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2))
    ny.set((e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2))
  }

  const handlePointerLeave = () => {
    nx.set(0)
    ny.set(0)
    setHovered(false)
  }

  const handlePointerEnter = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (e.pointerType !== "mouse") return
    setHovered(true)
  }

  return (
    <Link
      ref={ref}
      href={`/products/${product.slug}`}
      className="group block h-full"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerEnter={handlePointerEnter}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="flex h-full min-w-0 flex-col"
        style={
          reduceMotion
            ? undefined
            : { rotateX, rotateY, transformStyle: "preserve-3d" }
        }
        animate={!reduceMotion && hovered ? { y: -4 } : { y: 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {product.image ? (
          <ProductImage
            src={product.image}
            alt={product.name}
            className="aspect-[4/5] bg-muted/20 flex items-center justify-center p-6 rounded-xl mb-4 overflow-hidden"
          />
        ) : (
          <div
            className="aspect-[4/5] bg-muted/20 flex items-center justify-center p-6 rounded-xl mb-4 overflow-hidden bg-gradient-to-b from-sky/20 to-marine/5"
            aria-hidden="true"
          >
            <BottleSilhouette
              variant={bottleVariantForSlug(product.slug)}
              className="h-3/4 text-marine-text"
            />
          </div>
        )}
        <h3
          className={`font-medium transition-colors line-clamp-2 break-words group-focus-visible:text-marine-text ${
            hovered ? "text-marine-text" : ""
          }`}
        >
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-3">
          {product.description}
        </p>
      </motion.div>
    </Link>
  )
}
