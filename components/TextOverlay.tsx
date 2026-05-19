"use client";

import { motion, MotionValue } from "framer-motion";

interface TextOverlayProps {
  heading: string;
  subtext: string;
  align: "left" | "center" | "right";
  opacity: MotionValue<number>;
  y: MotionValue<number>;
  button?: {
    text: string;
    onClick?: () => void;
  };
}

export function TextOverlay({ heading, subtext, align, opacity, y, button }: TextOverlayProps) {
  let alignmentClasses = "";
  if (align === "center") alignmentClasses = "items-center text-center mx-auto";
  else if (align === "left") alignmentClasses = "items-start text-left mr-auto";
  else if (align === "right") alignmentClasses = "items-end text-right ml-auto";

  return (
    <motion.div
      style={{ opacity, y }}
      className={`absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-auto flex flex-col justify-center max-w-2xl px-6 md:px-12 ${alignmentClasses}`}
    >
      <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
        {heading}
      </h2>
      <p className="text-lg md:text-xl text-white/65 font-inter max-w-md drop-shadow-md">
        {subtext}
      </p>

      {button && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={button.onClick}
          className="mt-8 rounded-full bg-[#F5A623] px-8 py-4 font-bold text-black transition-colors hover:bg-[#FF6B00]"
        >
          {button.text}
        </motion.button>
      )}
    </motion.div>
  );
}
