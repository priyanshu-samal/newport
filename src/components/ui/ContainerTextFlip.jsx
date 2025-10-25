"use client";

import React, { useState, useEffect, useId, useRef } from "react";
import { motion } from "framer-motion"; // Changed from motion/react to framer-motion
import "./ContainerTextFlip.scss"; // Import SCSS

export function ContainerTextFlip({
  words = ["X Posts", "Content", "Video", "Work", "Threads"],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
}) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const textRef = useRef(null);

  const updateWidthForWord = () => {
    if (textRef.current) {
      const textWidth = textRef.current.scrollWidth + 40; // Add some padding
      setWidth(textWidth);
    }
  };

  useEffect(() => {
    updateWidthForWord();
  }, [currentWordIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <motion.span
      layout
      layoutId={`words-here-${id}`}
      animate={{ width }}
      transition={{ duration: animationDuration / 2000 }}
      className={`container-text-flip ${className || ''}`}
      key={words[currentWordIndex]}
    >
      <motion.div
        transition={{
          duration: animationDuration / 1000,
          ease: "easeInOut",
        }}
        className={`container-text-flip__text-wrapper ${textClassName || ''}`}
        ref={textRef}
        layoutId={`word-div-${words[currentWordIndex]}-${id}`}
      >
        <motion.div className="container-text-flip__word-container">
          {words[currentWordIndex].split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                delay: index * 0.02,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.span>
  );
}