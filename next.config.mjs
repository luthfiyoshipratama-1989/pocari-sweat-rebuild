import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * SECURITY GUARD: fail the build if a credential-looking variable is exposed
 * to the browser via the NEXT_PUBLIC_ prefix (these are inlined into the
 * client bundle and readable by anyone).
 */
const forbiddenPublicEnv = Object.keys(process.env).filter((key) =>
  /^NEXT_PUBLIC_.*(SECRET|TOKEN|PASSWORD|PRIVATE_KEY|SERVICE_ROLE|API_KEY)/i.test(
    key
  )
);
if (forbiddenPublicEnv.length > 0) {
  throw new Error(
    `Build blocked: sensitive variables exposed to the client bundle: ${forbiddenPublicEnv.join(
      ", "
    )}`
  );
}

/**
 * Turbopack workspace root.
 * Next.js walks up from the project looking for a lockfile/git root; a stray
 * package-lock.json in C:\Users\Dell makes it warn and potentially widen the
 * module graph beyond this repo (supply-chain / file-watch leakage).
 * NOTE: this file is ESM (.mjs) -> `__dirname` is undefined. Derive it from import.meta.url.
 */
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Security headers.
 * `output: 'export'` is NOT used in this project, and @cloudflare/next-on-pages
 * (or @opennextjs/cloudflare) DOES apply `headers()` to Function/Worker responses,
 * which `public/_headers` cannot do.
 *
 * @type {import('next').NextConfig}
 */
const securityHeaders = [
  {
    // No `preload`: workers.dev is shared infrastructure and preload is a
    // one-way commitment that cannot be undone quickly.
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    // 'unsafe-inline' in script-src is required: Next.js App Router emits inline
    // hydration scripts (self.__next_f.push) and a static build cannot inject a
    // per-request nonce. 'unsafe-inline' in style-src is required by framer-motion
    // and by the <noscript> fallback style block.
    // If Cloudflare Web Analytics is enabled in the dashboard, append
    //   script-src ... https://static.cloudflareinsights.com
    //   connect-src 'self' https://cloudflareinsights.com
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
