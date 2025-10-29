"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function FadeUp({ children, delay = 0, duration = 0.5, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();

  // If reduced motion is preferred, show content immediately
  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
