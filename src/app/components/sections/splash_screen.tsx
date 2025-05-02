"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingAnimationProps {
  duration?: number;
  onComplete?: () => void;
  color?: string;
}

export function LoadingAnimation({
  duration = 2500,
  onComplete,
  color = "#000000",
}: LoadingAnimationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
        repeatDelay: 0.5,
      },
    }),
  };

  const text = "LOADING";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
        >
          <motion.div
            className="absolute bottom-10 right-10 flex items-end justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex">
              {text.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  style={{
                    color,
                    fontSize: "5rem",
                    fontWeight: "bold",
                    lineHeight: 1,
                    fontFamily: "'Inter', sans-serif",
                    display: "inline-block",
                    marginRight: letter === " " ? "1rem" : "0.1rem",
                    textShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-black"
              style={{ backgroundColor: color }}
              initial={{ width: "0%" }}
              animate={{
                width: ["0%", "100%", "0%"],
                transition: {
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
