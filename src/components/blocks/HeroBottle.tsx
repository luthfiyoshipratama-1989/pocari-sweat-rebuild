"use client"

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion"
import { BottleSilhouette } from "@/components/common/BottleSilhouette"

export function HeroBottle() {
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()

  const yRaw = useTransform(scrollY, [0, 600], [0, -60])
  const rotateRaw = useTransform(scrollY, [0, 600], [0, 4])

  const y = useSpring(yRaw, { stiffness: 120, damping: 20, mass: 0.5 })
  const rotate = useSpring(rotateRaw, { stiffness: 120, damping: 20, mass: 0.5 })

  if (reduceMotion) {
    return (
      <div className="relative h-full w-full flex items-center justify-center">
        <BottleSilhouette className="h-full w-auto mx-auto text-white/95" />
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 h-32 w-64 -translate-x-1/2 rounded-full bg-white/20 blur-3xl"
          aria-hidden="true"
        />
      </div>
    )
  }

  return (
    <motion.div
      style={{ y, rotate }}
      className="relative h-full w-full flex items-center justify-center"
    >
      <BottleSilhouette className="h-full w-auto mx-auto text-white/95" />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-32 w-64 -translate-x-1/2 rounded-full bg-white/20 blur-3xl"
        aria-hidden="true"
      />
    </motion.div>
  )
}
