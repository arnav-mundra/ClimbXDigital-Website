"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#0A0A0A] pt-20 pb-8 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-24">
          <div className="max-w-md">
            <Image
              src="/climbx-logo.png"
              alt="Climb X Digital"
              width={160}
              height={50}
              className="mb-6 h-10 w-auto scale-[2.5] origin-left"
            />
            <p className="text-sm leading-relaxed text-white/80">
              We solve business challenges with smart thinking, big ideas,
              and incisive action. Our whole approach is based around
              making things simple.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 sm:gap-24">
            <div>
              <h3 className="mb-6 font-bold lowercase">pages</h3>
              <ul className="space-y-4 text-sm text-white/80">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/work">Portfolio</Link></li>
                <li><Link href="/services">Studio</Link></li>
                <li><Link href="/contact">Connect</Link></li>
                <li><Link href="/careers">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 font-bold lowercase">useful links</h3>
              <ul className="space-y-4 text-sm text-white/80">
                <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/refund-policy">Refund Policy</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 font-bold lowercase">follow us</h3>
              <ul className="space-y-4 text-sm text-white/80">
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-12 border-white/10" />

        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="mb-2 text-xs text-white/60">Phone Number</p>
            <p className="font-semibold">+91 87671 98554</p>
          </div>
          <div>
            <p className="mb-2 text-xs text-white/60">Email</p>
            <p className="font-semibold">climbxdigital@gmail.com</p>
          </div>
          <div>
            <p className="mb-2 text-xs text-white/60">Address</p>
            <p className="font-semibold">Nagpur, Maharashtra 440001</p>
          </div>
        </div>

        <hr className="mt-12 mb-6 border-white/10" />

        <div className="flex items-center justify-between">
          <p className="text-xs font-mono text-white/60">
            @CLIMBX DIGITAL All rights reserved - Owned by Climb X Digital.
          </p>
          <button
            onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5A623] text-black transition-transform hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
