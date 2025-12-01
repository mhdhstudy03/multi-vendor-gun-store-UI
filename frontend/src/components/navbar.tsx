"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

const navLinks = [
  { label: "Weapons", href: "/weapons" },
  { label: "Vendors", href: "/vendors" },
  { label: "Training", href: "/training" },
  { label: "Collections", href: "/collections" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Cart", href: "/cart" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050506]/75 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-0">
        <div className="flex items-center gap-4 text-white">
          <Link href="/" className="text-2xl font-semibold tracking-[0.3em]">
            GUNPOINT
          </Link>
          <Badge className="bg-lime-300 text-black">Marketplace</Badge>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-4 text-[0.7rem] uppercase tracking-[0.3em] text-zinc-400">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-1 transition",
                  isActive
                    ? "bg-white/10 text-white"
                    : "hover:text-white hover:underline",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-white hover:bg-white/10">
            Log in
          </Button>
          <Link href="/vendor/dashboard">
            <Button className="gap-2 bg-lime-400 text-black hover:bg-lime-300">
              Vendor portal <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}


