"use client";
import { motion } from "framer-motion";

export function ProgressBar({ skill, level, color = "primary" }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{skill}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2">
        <motion.div
          className={`h-2 rounded-full bg-${color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}
