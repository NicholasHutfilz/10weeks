"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
}

export function PageTransition({ children, direction = "right" }: PageTransitionProps) {
  const pathname = usePathname();
  const [animDirection, setAnimDirection] = useState(direction);
  const [isInitialRender, setIsInitialRender] = useState(true);
  
  // Handle animation direction
  useEffect(() => {
    // Check if this is the homepage and it's the initial render
    if (pathname === "/" && isInitialRender) {
      setAnimDirection("up");
      setIsInitialRender(false);
    } else {
      // For navigation between pages
      setAnimDirection(direction);
    }
  }, [pathname, direction, isInitialRender]);
  
  // Define variants for animation
  const variants = {
    hidden: { 
      opacity: 0,
      x: animDirection === "right" ? 100 : animDirection === "left" ? -100 : 0,
      y: animDirection === "up" ? 100 : animDirection === "down" ? -100 : 0,
    },
    enter: { 
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1], // cubic-bezier for magazine-style easing
      }
    },
    exit: { 
      opacity: 0,
      x: animDirection === "right" ? -100 : animDirection === "left" ? 100 : 0,
      y: animDirection === "up" ? -100 : animDirection === "down" ? 100 : 0,
      transition: {
        duration: 0.3,
        ease: [0.33, 1, 0.68, 1],
      }
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
} 