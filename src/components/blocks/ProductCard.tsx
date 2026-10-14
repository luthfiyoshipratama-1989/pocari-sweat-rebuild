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

  const handlePointerEnter = () => {
    setHovered(true)
  }

  return (
    <Link
      ref={ref}
      href={`/products/${product.slug}`}
      className="group block"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerEnter={handlePointerEnter}
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={
          reduceMotion
            ? undefined
            : { rotateX, rotateY, transformStyle: "preserve-3d" }
        }
        animate={!reduceMotion && hovered ? { y: -4 } : { y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <ProductImage
          src={product.image}
          alt={product.name}
          className="aspect-square bg-white rounded-xl mb-4 overflow-hidden"
        />
        <h3 className="font-medium group-hover:text-marine-text transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {product.description}
        </p>
      </motion.div>
    </Link>
  )
}
