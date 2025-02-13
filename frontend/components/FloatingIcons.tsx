"use client";

import { motion } from "framer-motion";
import { Clock, Sword, Globe } from "lucide-react";

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 100, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute top-1/4 left-1/4"
      >
        <Clock className="w-12 h-12 text-purple-400" />
      </motion.div>
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 150, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute top-1/2 right-1/4"
      >
        <Sword className="w-12 h-12 text-pink-400" />
      </motion.div>
      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, -100, 0],
          rotate: [0, 720],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute bottom-1/4 left-1/3"
      >
        <Globe className="w-12 h-12 text-red-400" />
      </motion.div>
    </div>
  );
}
