import { motion } from 'framer-motion';
import React, { useState } from 'react';

const AboutCard = ({ img1, img2, title, content, delay = 0 }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative flex flex-col md:flex-row items-center bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl shadow-2xl p-8 mb-12 w-full max-w-5xl mx-auto overflow-hidden transition-all duration-500 group"
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay, ease: 'easeOut' }}
      whileHover={{ 
        scale: 1.02, 
        boxShadow: '0 12px 40px rgba(88, 88, 139, 0.15)',
        background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background accent */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Text Section */}
      <div className="relative flex-1 pr-0 md:pr-12 mb-8 md:mb-0 w-full md:w-auto z-20">
        <motion.h2 
          className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-200 mb-5 tracking-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: delay + 0.2 }}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="text-zinc-300 text-lg leading-relaxed whitespace-pre-line max-w-prose"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
        >
          {content}
        </motion.p>
      </div>
      
      {/* Images Section */}
      <div className="relative flex-1 flex justify-center items-center min-w-[240px] max-w-[360px] h-[280px] perspective-1000">
        {/* Bottom Image (img2) */}
        <motion.img
          src={img2}
          alt="img2"
          className="absolute w-56 h-72 object-cover rounded-lg shadow-2xl border-4 border-white/90 rotate-6"
          style={{ zIndex: 10 }}
          initial={{ opacity: 0.6, scale: 0.95, rotate: 6 }}
          animate={{ 
            opacity: hovered ? 1 : 0.6, 
            scale: hovered ? 1.05 : 0.95,
            rotate: hovered ? 10 : 6 
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        {/* Top Image (img1) */}
        <motion.img
          src={img1}
          alt="img1"
          className="absolute w-56 h-72 object-cover rounded-lg shadow-2xl border-4 border-white/90 -rotate-6"
          style={{ zIndex: 20 }}
          initial={{ opacity: 1, x: 0, rotate: -6 }}
          animate={{ 
            opacity: hovered ? 0.3 : 1, 
            x: hovered ? 60 : 0,
            rotate: hovered ? -12 : -6 
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        {/* Subtle overlay effect on hover */}
        <motion.div
          className="absolute inset-0 bg-white/5 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 0.2 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
};

export default AboutCard;