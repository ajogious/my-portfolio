"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

export default function LazyLoad({ children, threshold = 0.1, once = true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold, once });
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (isInView && !hasBeenInView) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHasBeenInView(true);
    }
  }, [isInView, hasBeenInView]);

  if (!hasBeenInView) {
    return (
      <div ref={ref} className="min-h-[1px]">
        {/* Loading placeholder with same dimensions as content */}
        <div className="animate-pulse bg-muted rounded-lg">{children}</div>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
