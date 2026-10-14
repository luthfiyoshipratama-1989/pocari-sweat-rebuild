export function setupDevConsoleFilter() {
  if (typeof window === "undefined") return
  if (process.env.NODE_ENV !== "development") return

  const originalError = console.error
  const IGNORED_PATTERNS = ["Function components cannot be given refs"]

  console.error = (...args: unknown[]) => {
    const first = args[0]
    if (typeof first === "string") {
      for (const pattern of IGNORED_PATTERNS) {
        if (first.includes(pattern)) return
      }
    }
    originalError.apply(console, args)
  }
}
