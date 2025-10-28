"use client";
import { motion } from "framer-motion";

export function HoverScale({ children, className, scale = 1.05 }) {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
