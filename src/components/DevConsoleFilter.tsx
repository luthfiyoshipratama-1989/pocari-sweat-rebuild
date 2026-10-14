"use client"

import { useEffect } from "react"
import { setupDevConsoleFilter } from "@/lib/dev-console-filter"

export function DevConsoleFilter() {
  useEffect(() => {
    setupDevConsoleFilter()
  }, [])
  return null
}
