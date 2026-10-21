"use client"

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion"
import { cn } from "@/lib/utils"

/** Bentuk botol Original (artwork referensi, kanvas 190 x 470). */
const HERO_BODY =
  "M57 78 L133 78 C133 105 170 120 175 175 L175 420 C175 440 168 452 148 456 L42 456 C22 452 15 440 15 420 L15 175 C20 120 57 105 57 78 Z"

/**
 * Ilustrasi botol hero. Kode SVG dibersihkan dari metadata/C2PA,
 * ID gradient di-namespace (hero-*) agar tidak bentrok dengan ilustrasi
 * produk lain, dan elemen dasar botol dipotong ke outline body.
 */
function HeroBottleArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 190 470"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-auto max-w-full", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hero-body" x1="0" x2="1">
          <stop offset="0" stopColor="#dfe7ec" />
          <stop offset="0.25" stopColor="#ffffff" />
          <stop offset="0.7" stopColor="#f1f5f8" />
          <stop offset="1" stopColor="#cfd9e0" />
        </linearGradient>
        <linearGradient id="hero-cap" x1="0" x2="1">
          <stop offset="0" stopColor="#d9dee2" />
          <stop offset="0.35" stopColor="#ffffff" />
          <stop offset="1" stopColor="#cdd3d8" />
        </linearGradient>
        <linearGradient id="hero-label" x1="0" x2="1">
          <stop offset="0" stopColor="#0a56b8" />
          <stop offset="0.45" stopColor="#1590d4" />
          <stop offset="1" stopColor="#0a56b8" />
        </linearGradient>
        <clipPath id="hero-clip">
          <path d={HERO_BODY} />
        </clipPath>
      </defs>

      <path
        d={HERO_BODY}
        fill="url(#hero-body)"
        stroke="#c3ced6"
        strokeWidth="1.5"
      />

      {/* Dasar + gelombang botol, dipotong ke outline */}
      <g clipPath="url(#hero-clip)">
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
      <path d="M60 20 L130 20 L136 68 L54 68 Z" fill="url(#hero-cap)" stroke="#c3ced6" strokeWidth="1.5" />
      <g stroke="#c3ced6" strokeWidth="1">
        <line x1="69" y1="26" x2="67" y2="66" />
        <line x1="79" y1="26" x2="78" y2="66" />
        <line x1="89" y1="26" x2="89" y2="66" />
        <line x1="99" y1="26" x2="99" y2="66" />
        <line x1="109" y1="26" x2="110" y2="66" />
        <line x1="119" y1="26" x2="121" y2="66" />
      </g>
      <rect x="60" y="16" width="70" height="8" rx="3" fill="#ffffff" stroke="#c3ced6" strokeWidth="1.2" />

      <rect x="15" y="250" width="160" height="125" fill="url(#hero-label)" />
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
    </svg>
  )
}

const bottleClassName =
  "h-[200px] w-auto max-w-full sm:h-[300px] md:h-[500px]"

export function HeroBottle() {
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()

  const yRaw = useTransform(scrollY, [0, 600], [0, -60])
  const rotateRaw = useTransform(scrollY, [0, 600], [0, 4])

  const y = useSpring(yRaw, { stiffness: 120, damping: 20, mass: 0.5 })
  const rotate = useSpring(rotateRaw, { stiffness: 120, damping: 20, mass: 0.5 })

  if (reduceMotion) {
    return (
      <div className="relative flex w-full items-center justify-center">
        <HeroBottleArt className={bottleClassName} />
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
      className="relative flex w-full items-center justify-center"
    >
      <HeroBottleArt className={bottleClassName} />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-32 w-64 -translate-x-1/2 rounded-full bg-white/20 blur-3xl"
        aria-hidden="true"
      />
    </motion.div>
  )
}
