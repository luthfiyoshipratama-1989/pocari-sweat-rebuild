import type { Metadata } from "next";
import "../globals.css";
import { Header } from "@/components/blocks/Navbar";
import { Footer } from "@/components/blocks/Footer";
import { IdentityStrip } from "@/components/blocks/IdentityStrip";

export const metadata: Metadata = {
  metadataBase: new URL("https://pocari-sweat-rebuild.pages.dev"),
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
