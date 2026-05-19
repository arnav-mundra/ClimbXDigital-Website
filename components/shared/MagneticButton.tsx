"use client";

import Link from "next/link";
import { useRef } from "react";
import { useMagneticEffect } from "@/hooks/useMagneticEffect";

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function MagneticButton({ href, children, className = "" }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  useMagneticEffect(ref);

  return (
    <Link ref={ref} href={href} className={`magnetic inline-flex items-center rounded-full px-6 py-3 ${className}`}>
      {children}
    </Link>
  );
}
