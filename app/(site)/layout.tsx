import type { Metadata } from "next";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/bricolage-grotesque/600.css";
import "@fontsource/bricolage-grotesque/700.css";
import "@fontsource/bricolage-grotesque/800.css";
import "../globals.css";
import { Header } from "@/components/blocks/Navbar";
import { Footer } from "@/components/blocks/Footer";
import { DevConsoleFilter } from "@/components/DevConsoleFilter";

export const metadata: Metadata = {
  metadataBase: new URL("https://pocari-sweat-rebuild.vercel.app"),
  title: {
    default: "Pocari Sweat — Keringatmu Berharga",
    template: "%s | Pocari Sweat",
  },
  description:
    "Pocari Sweat menjaga keseimbangan ion tubuhmu. Minuman ber-ION untukmu yang aktif bergerak.",
  keywords: ["Pocari Sweat", "minuman isotonik", "ion", "hidrasi", "olahraga"],
  authors: [{ name: "Pocari Sweat Rebuild" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Pocari Sweat",
    title: "Pocari Sweat — Keringatmu Berharga",
    description:
      "Pocari Sweat menjaga keseimbangan ion tubuhmu. Minuman ber-ION untukmu yang aktif bergerak.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pocari Sweat — Keringatmu Berharga",
    description:
      "Pocari Sweat menjaga keseimbangan ion tubuhmu. Minuman ber-ION untukmu yang aktif bergerak.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <DevConsoleFilter />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
