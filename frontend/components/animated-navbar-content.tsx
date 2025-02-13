"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
const navItems = [
  { name: "Home", href: "/" },
  { name: "Play", href: "/play" },
  { name: "Leaderboard", href: "/leaderboard" },
  { name: "About", href: "/about" },
];

export function AnimatedNavbarContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-between h-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-shrink-0 flex items-center"
      >
        <Link href="/" className="text-2xl font-bold text-pink-300">
          AgeX
        </Link>
      </motion.div>
      <div className="hidden sm:block sm:ml-6">
        <div className="flex space-x-4">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-800 hover:text-pink-200 transition-colors duration-200"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="hidden sm:ml-6 sm:flex sm:items-center gap-5"
      >
        <ConnectButton />
      </motion.div>
      <div className="sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-pink-300 hover:text-pink-100 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-300"
        >
          <span className="sr-only">Open main menu</span>
          <Menu className="block h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="sm:hidden absolute top-16 left-0 right-0 bg-purple-900 shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-pink-100 hover:bg-purple-800 hover:text-pink-200 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
