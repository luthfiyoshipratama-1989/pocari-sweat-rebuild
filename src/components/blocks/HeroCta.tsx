"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

const MotionLink = motion.create(Link)

const SPRING = { type: "spring", stiffness: 500, damping: 30 } as const

type HeroCtaProps = {
  href: string
  children: ReactNode
  className?: string
}

/**
 * CTA utama di Hero — satu-satunya tombol yang diizinkan punya micro-motion
 * (lihat pengecualian di DESIGN.md). Tetap `<Link>` agar navigasi dan a11y
 * tidak berubah; yang dianimasikan hanya transform (tanpa layout shift).
 */
export function HeroCta({ href, children, className }: HeroCtaProps) {
  const reduceMotion = useReducedMotion()

  return (
    <MotionLink
      href={href}
      className={className}
      // Eksplisit agar markup SSR dan klien sama: framer menambahkan tabindex
      // sendiri saat ada whileTap, yang memicu hydration mismatch.
      tabIndex={0}
      whileHover={reduceMotion ? undefined : { scale: 1.01, y: -1 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={SPRING}
    >
      {children}
    </MotionLink>
  )
}
