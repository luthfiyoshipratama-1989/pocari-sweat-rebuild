"use client";

import { useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import {
  motion,
  MotionConfig,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

interface HeroImageProps {
  src: string;
  alt: string;
}

const MAX_OFFSET = 20;
const SPRING = { stiffness: 150, damping: 20, mass: 0.5 };

export function HeroImage({ src, alt }: HeroImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const nx = useMotionValue(0);
  const ny = useMotionValue(0);

  const x = useSpring(
    useTransform(nx, [-1, 1], [-MAX_OFFSET, MAX_OFFSET]),
    SPRING
  );
  const y = useSpring(
    useTransform(ny, [-1, 1], [-MAX_OFFSET, MAX_OFFSET]),
    SPRING
  );

  const handlePointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (reduceMotion || e.pointerType !== "mouse") return;
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    nx.set((e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2));
    ny.set((e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2));
  };

  const handlePointerLeave = () => {
    nx.set(0);
    ny.set(0);
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-marine-dark md:aspect-[4/5] md:max-h-[560px]"
    >
      <MotionConfig reducedMotion="user">
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="absolute inset-0"
        >
          <motion.div style={{ x, y }} className="absolute -inset-6">
            <Image
              src={src}
              alt={alt}
              fill
              priority
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </MotionConfig>
    </div>
  );
}