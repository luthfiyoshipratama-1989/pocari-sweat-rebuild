import type { Metadata } from "next";
import "@fontsource/bricolage-grotesque/400.css";
import "@fontsource/bricolage-grotesque/600.css";
import "@fontsource/bricolage-grotesque/800.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "../globals.css";
import { Header } from "@/components/blocks/Navbar";
import { Footer } from "@/components/blocks/Footer";
import { IdentityStrip } from "@/components/blocks/IdentityStrip";

export const metadata: Metadata = {
  metadataBase: new URL("https://pocari-sweat-rebuild.netlify.app"),
  title: {
    default: "Pocari Sweat Rebuild - Portfolio",
    template: "%s | Pocari Sweat Rebuild",
  },
  description:
    "Rebuild portfolio dari situs Pocari Sweat. Proyek pribadi, tidak berafiliasi dengan Otsuka.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Pocari Sweat Rebuild",
    title: "Pocari Sweat Rebuild - Portfolio",
    description:
      "Rebuild portfolio dari situs Pocari Sweat. Proyek pribadi, tidak berafiliasi dengan Otsuka.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pocari Sweat Rebuild - Portfolio",
    description:
      "Rebuild portfolio dari situs Pocari Sweat. Proyek pribadi, tidak berafiliasi dengan Otsuka.",
  },
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <IdentityStrip />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
