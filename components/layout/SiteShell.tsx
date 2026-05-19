"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { LoadingScreen } from "@/components/shared/LoadingScreen";
import { AnimatePresence } from "framer-motion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useSmoothScroll();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 200);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 5;
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" progress={progress} />}
      </AnimatePresence>
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
