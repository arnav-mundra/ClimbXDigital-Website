"use client";

import { RefObject, useEffect } from "react";

export function useMagneticEffect<T extends HTMLElement>(ref: RefObject<T | null>) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const onMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      element.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    };

    const onLeave = () => {
      element.style.transform = "translate(0px, 0px)";
    };

    element.addEventListener("mousemove", onMove);
    element.addEventListener("mouseleave", onLeave);
    return () => {
      element.removeEventListener("mousemove", onMove);
      element.removeEventListener("mouseleave", onLeave);
    };
  }, [ref]);
}
