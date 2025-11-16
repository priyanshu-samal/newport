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
        I build Full-Stack and GenAI-powered web apps that <motion.span variants={word} className="italic-satoshi">load fast</motion.span>, <motion.span variants={word} className="italic-satoshi">scale hard</motion.span>, and stay stable when real traffic hits. Next.js, TypeScript, solid <motion.span variants={word} className="italic-satoshi">backend architecture</motion.span>, and AI workflows are my core tools. Right now, I’m shipping <motion.span variants={word} className="italic-satoshi">MVPs at speed</motion.span> turning raw ideas into working products in <motion.span variants={word} className="italic-satoshi">days, not months</motion.span>.
      </motion.p>
    </div>
  );
};

export default About;
