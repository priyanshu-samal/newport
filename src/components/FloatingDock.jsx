import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  IconHome,
  IconUser,
  IconBriefcase,
  IconMail,
  IconSun,
  IconMoon,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandGithub,
  IconCalendar,
} from '@tabler/icons-react';
import { useTheme } from '../context/ThemeContext';
import copy from 'copy-to-clipboard';
import './FloatingDock.scss';

const links = [
  {
    title: 'Home',
    icon: <IconHome />,
    href: '#',
  },
  {
    title: 'X',
    icon: <IconBrandX />,
    href: 'https://x.com/PriyanshuS92042',
  },
  {
    title: 'LinkedIn',
    icon: <IconBrandLinkedin />,
    href: 'https://www.linkedin.com/in/priyanshusamal-/',
  },
  {
    title: 'GitHub',
    icon: <IconBrandGithub />,
    href: 'https://github.com/priyanshu-samal',
  },
  {
    title: 'Schedule a call',
    icon: <IconCalendar />,
    href: 'https://cal.com/priyanshu-samal',
  },
];

export const FloatingDock = () => {
  const { theme, toggleTheme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [emailHovered, setEmailHovered] = useState(false);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const handleCopy = () => {
    copy('samalpriyanshu966@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="floating-dock"
    >
      {links.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
      <div
        onClick={handleCopy}
        onMouseEnter={() => setEmailHovered(true)}
        onMouseLeave={() => setEmailHovered(false)}
        className="icon-container email-icon"
      >
        <IconMail />
        {(emailHovered || copied) && (
          <div className="tooltip">{copied ? 'Copied!' : 'Copy email'}</div>
        )}
      </div>
      <div onClick={toggleTheme} className="theme-toggle">
        {theme === 'dark' ? <IconSun /> : <IconMoon />}
      </div>
    </motion.div>
  );
};

function IconContainer({ mouseX, title, icon, href }) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [0, 100], [40, 80]);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 100,
    damping: 10,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <motion.div
        ref={ref}
        style={{ width }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="icon-container"
        whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
      >
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 2, x: '-50%' }}
            className="tooltip"
          >
            {title}
          </motion.div>
        )}
        <motion.div className="icon">
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
