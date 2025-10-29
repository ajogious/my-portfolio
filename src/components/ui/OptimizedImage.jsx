"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  containerClassName,
  priority = false,
  ...props
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {/* Loading Skeleton */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-muted animate-pulse"
        />
      )}

      {/* Error Fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <div className="text-2xl mb-2">📷</div>
            <p className="text-sm">Image not available</p>
          </div>
        </div>
      )}

      {/* Actual Image */}
      {!hasError && (
        <motion.img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            "transition-opacity duration-300 object-cover",
            isLoading ? "opacity-0" : "opacity-100",
            className
          )}
          onLoad={handleLoad}
          onError={handleError}
          initial={priority ? false : { opacity: 0 }}
          animate={priority ? false : { opacity: 1 }}
          transition={{ duration: 0.5 }}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          {...props}
        />
      )}
    </div>
  );
}
