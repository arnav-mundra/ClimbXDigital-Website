"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Sidebar } from "./Sidebar";

const links = [
  { href: "/", label: "HOME" },
  { href: "/work", label: "PORTFOLIO" },
  { href: "/services", label: "STUDIO" },
  { href: "/about", label: "CULTURE" },
  { href: "/careers", label: "CAREERS" },
  { href: "/contact", label: "CONNECT" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0A0A0A]/90 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/climbx-logo.png"
              alt="Climb X Digital logo"
              width={160}
              height={70}
              priority
              className="h-8 w-auto md:h-10 scale-[2.5] origin-left"
            />
          </Link>
          <div className="hidden items-center gap-12 md:flex">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative text-[15px] font-semibold tracking-wide transition-colors hover:text-[#F5A623] ${
                    isActive ? "text-[#F5A623]" : "text-white/80"
                  }`}
                >
                  <span
                    className={`absolute -left-4 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#F5A623] transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  ></span>
                  {link.label}
                </Link>
              );
            })}
          </div>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="group flex h-12 w-12 items-center justify-center rounded-full bg-[#F5A623] transition-transform hover:scale-105"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 bg-black transition-transform group-hover:-translate-y-0.5"></span>
              <span className="h-0.5 w-5 bg-black transition-transform group-hover:translate-y-0.5"></span>
            </div>
          </button>
        </nav>
      </header>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
