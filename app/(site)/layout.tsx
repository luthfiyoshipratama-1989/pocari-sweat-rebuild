import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Bricolage_Grotesque } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/blocks/Navbar";
import { Footer } from "@/components/blocks/Footer";
import { DevConsoleFilter } from "@/components/DevConsoleFilter";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

const fontDisplay = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

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
    <div
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable,
        fontDisplay.variable
      )}
    >
      <DevConsoleFilter />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
