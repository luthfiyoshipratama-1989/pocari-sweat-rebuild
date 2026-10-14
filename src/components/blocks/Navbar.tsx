"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
    title: "Action",
    href: "/action",
    description: "Kampanye & event kami",
  },
  {
    title: "News",
    href: "/news",
    description: "Berita & artikel terbaru",
  },
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent transition-colors",
        {
          "bg-background/95 supports-[backdrop-filter]:bg-background/80 border-border backdrop-blur-lg":
            scrolled,
        }
      )}
    >
      <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
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
                  Products
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
                  About
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
                  className="inline-flex h-10 items-center justify-center px-4 text-sm font-medium hover:text-marine transition-colors"
                >
                  Kalkulator
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button
            asChild
            className="bg-marine hover:bg-marine-dark text-white"
          >
            <Link href="https://pocarisweat.id" target="_blank" rel="noopener">
              Beli Sekarang
            </Link>
          </Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-accent transition-colors"
          aria-label="Toggle menu"
        >
          <MenuToggleIcon open={open} className="size-5" />
        </button>
      </nav>

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
  if (!open) return null;

  return (
    <div className="md:hidden fixed top-14 left-0 right-0 bottom-0 z-40 bg-background border-t border-border overflow-y-auto">
      <div className="flex flex-col p-4 gap-1">
        <div className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Products
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
          About
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
          <Button
            asChild
            className="w-full bg-marine hover:bg-marine-dark text-white"
          >
            <Link
              href="https://pocarisweat.id"
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
            >
              Beli Sekarang
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}