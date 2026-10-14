"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const footerLinks = {
  products: [
    { title: "Pocari Sweat", href: "/products/pocari-sweat-original" },
    { title: "Ion Water", href: "/products/pocari-sweat-ion-water" },
    { title: "Jelly", href: "/products/pocari-sweat-jelly" },
  ],
  company: [
    { title: "Tentang Kami", href: "/about" },
    { title: "Action", href: "/action" },
    { title: "News", href: "/news" },
  ],
  support: [
    { title: "Kontak", href: "/contact" },
    { title: "FAQ", href: "/faq" },
    { title: "Kebijakan Privasi", href: "/privacy" },
  ],
};

const socialLinks = [
  { title: "Instagram", href: "https://instagram.com/pocarisweat_id" },
  { title: "Facebook", href: "https://facebook.com/PocariSweatID" },
  { title: "YouTube", href: "https://youtube.com/@pocarisweat" },
  { title: "Twitter", href: "https://twitter.com/pocarisweat" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity"
            >
              Pocari Sweat
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Menjaga keseimbangan ion tubuhmu. Minuman isotonik untukmu yang
              aktif bergerak dan berkeringat.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-medium mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-medium mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-medium mb-4">Social</h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Pocari Sweat. Rebuild untuk portfolio
            personal.
          </p>
          <p className="text-xs text-muted-foreground">
            Dibuat dengan Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
