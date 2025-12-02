"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, Bell, User } from "lucide-react";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { cn } from "../lib/utils";

const navLinks = [
  { label: "Weapons", href: "/weapons" },
  { label: "Vendors", href: "/vendors" },
  { label: "Training", href: "/training" },
  { label: "Collections", href: "/collections" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050506]/75 backdrop-blur">
      {/* Top Bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-white">
          <span className="text-2xl font-semibold tracking-[0.3em]">GUNPOINT</span>
          <Badge className="bg-lime-300 text-black">Marketplace</Badge>
        </Link>

        {/* Search Input */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <Input
              type="search"
              placeholder="Search products, vendors..."
              className="w-full pl-10 bg-black/40 border-white/20 text-white placeholder:text-zinc-500"
            />
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3">
          {/* Cart Icon */}
          <Link href="/cart">
            <Button
              variant="ghost"
              size="icon"
              className="relative text-white hover:bg-white/10"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                3
              </span>
            </Button>
          </Link>

          {/* Notification Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="relative text-white hover:bg-white/10"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              2
            </span>
          </Button>

          {/* Account Icon */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
              >
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-zinc-950 border-white/10 text-white">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white/10" />
              <DropdownMenuItem asChild>
                <Link href="/admin/dashboard">Admin Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/vendor/dashboard">Vendor Portal</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-white/10" />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Orders</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator className="bg-white/10" />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-center gap-1 px-4 py-3 sm:px-6 lg:px-8">
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== "/" && pathname?.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] transition",
                isActive
                  ? "bg-white/10 text-white"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white",
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}


