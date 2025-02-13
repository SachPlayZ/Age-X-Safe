"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function GlowingButton({ children }: { children: ReactNode }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative px-6 py-3 bg-purple-600 text-white font-bold rounded-lg overflow-hidden group"
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 bg-purple-600 opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
    </motion.button>
  );
}
