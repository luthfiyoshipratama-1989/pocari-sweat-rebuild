"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

/** Easing lembut tanpa overshoot. */
const EASE = [0.22, 1, 0.36, 1] as const

type RevealProps = {
  children: ReactNode
  className?: string
  /** Jeda sebelum animasi mulai, dalam detik. */
  delay?: number
  /** Jarak geser vertikal awal, dalam px. Hanya transform, bukan layout. */
  distance?: number
}

/**
 * Fade-in-up halus saat elemen masuk viewport.
 *
 * Hanya menganimasikan `opacity` dan `translateY` sehingga tidak memicu
 * layout shift (CLS). Animasi berjalan sekali (`once`) dan transform-nya
 * dilewati saat `prefers-reduced-motion`.
 *
 * Catatan: elemen root selalu `motion.div` agar markup SSR dan klien sama
 * (menghindari hydration mismatch); yang berubah hanya props animasinya.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  distance = 16,
}: RevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      data-reveal=""
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some", margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}
