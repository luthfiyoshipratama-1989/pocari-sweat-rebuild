"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

type LinkItem = {
  title: string;
  href: string;
  description?: string;
};

const productLinks: LinkItem[] = [
  {
    title: "Pocari Sweat",
    href: "/products/pocari-sweat-original",
    description: "Minuman isotonik original sejak 1980",
  },
  {
    title: "Ion Water",
    href: "/products/pocari-sweat-ion-water",
    description: "Air ion untuk hidrasi ringan sehari-hari",
  },
  {
    title: "Jelly",
    href: "/products/pocari-sweat-jelly",
    description: "Pocari Sweat dalam bentuk jelly praktis",
  },
];

const aboutLinks: LinkItem[] = [
  {
    title: "Tentang Kami",
    href: "/about",
    description: "Sejarah & visi Pocari Sweat",
  },
  {
    title: "News",
    href: "/news",
    description: "Berita & artikel terbaru",
  },
];

export function Header() {
   const [open, setOpen] = React.useState(false);
   const scrolled = useScroll(80);
  
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-background border-b border-transparent transition-colors",
        {
          "bg-background/95 supports-[backdrop-filter]:bg-background/80 border-border backdrop-blur-lg":
            scrolled,
        }
      )}
    >
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity"
          >
            Pocari Sweat
          </Link>
          <NavigationMenu className="hidden md:flex ml-6">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Produk
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4">
                    {productLinks.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none mb-1">
                              {item.title}
                            </div>
                            {item.description && (
                              <p className="text-sm text-muted-foreground leading-snug">
                                {item.description}
                              </p>
                            )}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Tentang
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4">
                    {aboutLinks.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none mb-1">
                              {item.title}
                            </div>
                            {item.description && (
                              <p className="text-sm text-muted-foreground leading-snug">
                                {item.description}
                              </p>
                            )}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/hydration-calculator"
                  className="inline-flex h-10 items-center justify-center px-4 text-sm font-medium hover:text-marine-text transition-colors"
                >
                  Kalkulator
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-accent transition-colors"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <MenuToggleIcon open={open} className="size-5" />
        </button>
      </div>

      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  );
}

function useScroll(threshold: number) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

function MobileMenu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const panelRef = React.useRef<HTMLDivElement>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    // Kunci scroll halaman selama menu terbuka. `html` ikut dikunci karena
    // sebagian browser mobile (iOS Safari) mengabaikan overflow pada body saja.
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    const focusTimer = window.setTimeout(
      () => closeButtonRef.current?.focus(),
      0
    );

    const getFocusable = () =>
      Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ) ?? []
      );

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;

      // Focus trap sederhana: Tab/Shift+Tab berputar di dalam panel.
      const focusable = getFocusable();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      previouslyFocused?.focus?.();
    };
  }, [open, setOpen]);

  if (!open) return null;

  // Portal ke <body>: header punya `backdrop-filter` saat ter-scroll, dan itu
  // membuat header menjadi containing block untuk `position: fixed` sehingga
  // overlay hanya setinggi header. Portal melepaskannya dari ancestor tersebut.
  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      id="mobile-menu"
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Menu navigasi"
      className="md:hidden fixed inset-0 z-[9999] bg-background"
    >
      {/* Bar tombol tutup terpisah dari area scroll agar selalu terlihat. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-end bg-gradient-to-b from-background via-background/95 to-transparent p-4">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={() => setOpen(false)}
          className="pointer-events-auto inline-flex items-center justify-center rounded-md p-2 hover:bg-accent transition-colors text-foreground"
          aria-label="Tutup menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>

      <div className="flex h-full w-full flex-col gap-1 overflow-y-auto overscroll-contain px-4 pb-10 pt-20">
        <div className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Produk
        </div>
        {productLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-accent transition-colors"
          >
            {item.title}
          </Link>
        ))}

        <div className="px-3 py-2 mt-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Tentang
        </div>
        {aboutLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-accent transition-colors"
          >
            {item.title}
          </Link>
        ))}

        <div className="mt-4">
          <Link
            href="/hydration-calculator"
            onClick={() => setOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-accent transition-colors"
          >
            Kalkulator
          </Link>
        </div>

        <div className="mt-6">
          <Link
            href="https://pocarisweat.id"
            target="_blank"
            rel="noopener"
            onClick={() => setOpen(false)}
            className="block px-3 py-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Situs resmi ↗
          </Link>
        </div>
      </div>
    </div>,
    document.body
  );
}