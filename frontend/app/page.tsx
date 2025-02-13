"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { GlowingButton } from "../components/GlowingButton";
import { AnimatedText } from "../components/AnimatedText";
import { FloatingIcons } from "../components/FloatingIcons";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 50%)`,
          }}
        />
      </div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <AnimatedText text="AgeX" />
        </motion.div>

        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 p-8 rounded-lg shadow-2xl mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Welcome to AgeX</h2>
            <p className="text-xl mb-6">
              Embark on an epic journey through time and space!
            </p>
            <GlowingButton>Play Now</GlowingButton>
          </motion.div>
        </Tilt>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <FeatureCard
            title="Time Travel"
            description="Explore different eras and change the course of history"
          />
          <FeatureCard
            title="Epic Battles"
            description="Engage in thrilling combat across the ages"
          />
          <FeatureCard
            title="Evolving World"
            description="Watch as your decisions shape the future of the universe"
          />
        </motion.div>
      </div>
      <FloatingIcons />
    </main>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p>{description}</p>
      </motion.div>
    </Tilt>
  );
}
