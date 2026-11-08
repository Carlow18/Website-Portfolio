"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function SpotlightBackground() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Smooth spring physics for the spotlight following the cursor
  const springX = useSpring(mouseX, { damping: 30, stiffness: 220, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 220, mass: 0.5 });

  useEffect(() => {
    setMounted(true);
    const handlePointerMove = (e: PointerEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [mouseX, mouseY]);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* 1. Architectural Linear Grid */}
      <div className="architectural-grid absolute inset-0" />

      {/* 2. Top subtle ambient glow */}
      <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/[0.035] blur-3xl dark:bg-indigo-500/[0.08]" />

      {/* 3. Interactive Cursor Spotlight */}
      {mounted && (
        <motion.div
          className="pointer-events-none fixed -left-[250px] -top-[250px] h-[500px] w-[500px] rounded-full"
          style={{
            x: springX,
            y: springY,
            background: isDark
              ? "radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(59, 130, 246, 0.06) 45%, transparent 70%)"
              : "radial-gradient(circle, rgba(59, 130, 246, 0.055) 0%, rgba(99, 102, 241, 0.03) 45%, transparent 70%)",
          }}
        />
      )}

      {/* 4. Microscopic Paper Grain / Matte Texture */}
      <div className="noise-texture pointer-events-none absolute inset-0" />
    </div>
  );
}
