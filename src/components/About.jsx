import React from 'react';
import { motion } from 'framer-motion';
import './About.scss';

const About = () => {
  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.1, // Increased stagger duration
      },
    },
  };

  const word = {
    hidden: { opacity: 0, y: 20, scale: 1, rotate: 0, x: 0 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1.05, // Subtle pop
      rotate: 2,  // Subtle shake
      x: 0,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 120,
        duration: 0.8,
        repeat: Infinity, // Repeat the animation
        repeatType: "reverse", // Reverse the animation on repeat
      },
    },
  };

  return (
    <div className="about-section">
      <motion.p
        key="about-text-animation" // Added a key for re-rendering
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        I build web apps that load <motion.span variants={word} className="italic-satoshi">fast</motion.span>, <motion.span variants={word} className="italic-satoshi">scale well</motion.span>, and <motion.span variants={word} className="italic-satoshi">don’t crash</motion.span> when real users show up. Next.js, TypeScript, and backend systems are my tools of choice. Right now, I’m pushing myself to launch <motion.span variants={word} className="italic-satoshi">MVPs at speed</motion.span> turning rough ideas into working products in <motion.span variants={word} className="italic-satoshi">days, not months</motion.span>.
      </motion.p>
    </div>
  );
};

export default About;
