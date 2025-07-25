import { motion } from 'framer-motion';
import React, { useState } from 'react';

const AboutCard = ({ img1, img2, title, content, delay = 0 }) => {
  const [hovered, setHovered] = useState(false);

  // Animation variants for the button
  const buttonVariants = {
    initial: { scale: 1, opacity: 0.8 },
    hover: { scale: 1.1, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    tap: { scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      className="relative flex flex-col md:flex-row items-center bg-gradient-to-br from-gray-900 to-indigo-950 rounded-3xl shadow-2xl p-6 md:p-10 mb-12 w-full max-w-6xl mx-auto overflow-hidden transition-all duration-700 group"
      initial={{ opacity: 0, y: 100, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay, ease: 'easeOut' }}
      whileHover={{ 
        scale: 1.04, 
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        background: 'linear-gradient(145deg, #1e293b 0%, #0f172a 100%)'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      role="region"
      aria-label={title}
      tabIndex={0}
    >
      {/* Background accent with pulse animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 opacity-0 rounded-3xl"
        animate={{ 
          opacity: hovered ? 0.9 : 0,
          scale: hovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        whileHover={{ 
          scale: [1, 1.02, 1], 
          transition: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' } 
        }}
      />
      
      {/* Text Section */}
      <div className="relative flex-1 pr-0 md:pr-12 mb-8 md:mb-0 w-full md:w-1/2 z-20">
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 mb-4 tracking-tight"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: delay + 0.2, ease: 'easeOut' }}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="text-gray-200 text-base md:text-lg leading-relaxed whitespace-pre-line max-w-prose"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: delay + 0.3, ease: 'easeOut' }}
        >
          {content}
        </motion.p>
        {/* Call-to-action button */}
        <motion.button
          className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          animate={{ opacity: hovered ? 1 : 0.7 }}
          transition={{ duration: 0.4, delay: delay + 0.4 }}
          aria-label="Learn more about this section"
        >
          Learn More
        </motion.button>
      </div>
      
      {/* Images Section */}
      <div className="relative flex-1 flex justify-center items-center min-w-[200px] max-w-[320px] h-[240px] md:h-[320px] perspective-1500">
        {/* Bottom Image (img2) with tilt effect */}
        <motion.img
          src={img2}
          alt="Supporting image"
          className="absolute w-48 md:w-60 h-60 md:h-72 object-cover rounded-xl shadow-2xl border-2 border-white/80 rotate-8"
          style={{ zIndex: 10 }}
          initial={{ opacity: 0.7, scale: 0.92, rotate: 8, rotateY: 10 }}
          animate={{ 
            opacity: hovered ? 1 : 0.7, 
            scale: hovered ? 1.1 : 0.92,
            rotate: hovered ? 12 : 8,
            rotateY: hovered ? 15 : 10
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        {/* Top Image (img1) with tilt effect */}
        <motion.img
          src={img1}
          alt="Main image"
          className="absolute w-48 md:w-60 h-60 md:h-72 object-cover rounded-xl shadow-2xl border-2 border-white/80 -rotate-8"
          style={{ zIndex: 20 }}
          initial={{ opacity: 1, x: 0, rotate: -8, rotateY: -10 }}
          animate={{ 
            opacity: hovered ? 0.4 : 1, 
            x: hovered ? 70 : 0,
            rotate: hovered ? -14 : -8,
            rotateY: hovered ? -20 : -10
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        {/* Glassmorphism overlay effect */}
        <motion.div
          className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 0.3 : 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
};

export default AboutCard;