"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-50 flex h-full w-[400px] max-w-full flex-col overflow-y-auto bg-[#1A1A1A] p-10 shadow-2xl text-white"
          >
            <button
              onClick={onClose}
              className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center text-2xl text-white hover:text-[#F5A623]"
            >
              ×
            </button>
            <div className="mb-10 mt-4">
              <Image
                src="/climbx-logo.png"
                alt="Climb X Digital"
                width={180}
                height={60}
                className="h-10 w-auto scale-[2.5] origin-left"
              />
            </div>
            <p className="mb-8 text-sm leading-relaxed text-white/80">
              We solve business challenges with smart thinking, big ideas, and incisive action. Our whole approach is based around making things simple.
            </p>
            <div className="mb-10 flex gap-4 text-white/60">
              <a href="#" className="hover:text-[#F5A623]">IG</a>
              <a href="#" className="hover:text-[#F5A623]">FB</a>
              <a href="#" className="hover:text-[#F5A623]">IN</a>
            </div>
            
            <div className="mb-10 h-48 w-full overflow-hidden rounded-md bg-white/10 relative">
              <Image 
                src="/office.png" 
                alt="ClimbX Digital Office" 
                fill 
                className="object-cover" 
              />
            </div>

            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F5A623]"></span>
                <h3 className="text-xl font-bold lowercase text-white">nagpur</h3>
              </div>
              <div className="space-y-1 pl-3.5 text-sm text-white/80">
                <p>phone: +91 87671 98554</p>
                <p>email: climbxdigital@gmail.com</p>
                <p>address: Nagpur, Maharashtra 440001</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
