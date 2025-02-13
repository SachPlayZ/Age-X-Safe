"use client";

import { usePathname } from "next/navigation";
import { AnimatedNavbarContent } from "./animated-navbar-content";

export function Navbar() {
  const pathname = usePathname();

  // Hide navbar if we're on the homepage
  if (pathname === "/") {
    return null;
  }

  return (
    <nav className="bg-purple-900 text-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedNavbarContent />
      </div>
    </nav>
  );
}
