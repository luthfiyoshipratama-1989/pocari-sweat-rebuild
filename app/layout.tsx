import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/bricolage-grotesque/400.css";
import "@fontsource/bricolage-grotesque/600.css";
import "@fontsource/bricolage-grotesque/700.css";
import "@fontsource/bricolage-grotesque/800.css";
import "./globals.css";

import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

/**
 * SECURITY/SEO: metadataBase must resolve at the ROOT layout, otherwise Next.js
 * falls back to http://localhost:3000 and emits absolute localhost URLs for
 * openGraph/twitter images declared by root-level files (e.g. app/opengraph-image.tsx).
 *
 * FONTS: self-hosted via @fontsource (bundled at build time). Do NOT reintroduce
 * `next/font/google` — it fetches from Google Fonts during `next build`.
 *
 * CSS: globals.css lives HERE so every route — including app/not-found.tsx —
 * receives the Tailwind base layer and theme tokens.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        <noscript>
          {/* Tanpa JS, konten reveal harus tetap terlihat. */}
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
