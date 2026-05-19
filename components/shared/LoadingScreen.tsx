"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function LoadingScreen({ progress = 0 }: { progress?: number }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A]"
    >
      <div className="text-center">
        <Image
          src="/climbx-logo.png"
          alt="Climb X Digital logo"
          width={280}
          height={280}
          priority
          className="mx-auto mb-6 h-40 w-auto md:h-52 scale-[2] origin-center"
        />
        <div className="h-1 w-40 overflow-hidden rounded bg-white/20 mx-auto">
          <motion.div
            className="h-full bg-[#F5A623]"
            style={{ width: `${progress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          />
        </div>
        <p className="mt-4 font-raleway text-sm text-white/40">Loading...</p>
      </div>
    </motion.div>
  );
}
