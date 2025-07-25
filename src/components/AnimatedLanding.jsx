import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const AnimatedLanding = ({ onComplete }) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const timer1 = setTimeout(() => setCurrentPhase(1), 500);
    const timer2 = setTimeout(() => setCurrentPhase(2), 1500);
    const timer3 = setTimeout(() => {
      setCurrentPhase(3);
      setShowContent(true);
    }, 2500);
    const timer4 = setTimeout(() => setCurrentPhase(4), 4000);
    const timer5 = setTimeout(() => onComplete(), 5500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  const particles = Array.from({ length: 120 }, (_, i) => i); // Increased particle count
  const floatingShapes = Array.from({ length: 12 }, (_, i) => i);
  const titleText = 'WELCOME TO MY PAGE'.split('');

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
        className="fixed inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 overflow-hidden z-50"
        style={{
          background: `linear-gradient(45deg, #101010ff, #2a4d69ff, #181a19ff, #071435ff, #4a2a6eff)`,
          backgroundSize: '400%',
          animation: 'gradientShift 15s ease infinite',
        }}
      >
        <style>
          {`
            @keyframes gradientShift {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            .gradient-text {
              background: linear-gradient(45deg, #ffffff, #a78bfa, #60a5fa, #f472b6);
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
              text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
            }
            .glow-effect {
              filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.7));
            }
            .parallax-layer {
              transform: translateZ(-1px) scale(1.3);
            }
            .cta-button {
              background: linear-gradient(45deg, #60a5fa, #a78bfa);
              transition: all 0.3s ease;
              border: 2px solid transparent;
            }
            .cta-button:hover {
              transform: scale(1.05);
              box-shadow: 0 10px 30px rgba(96, 165, 250, 0.5);
              border-color: rgba(255, 255, 255, 0.2);
            }
            .tech-tag {
              transition: all 0.3s ease;
              border: 1px solid rgba(255, 255, 255, 0.1);
            }
            .tech-tag:hover {
              transform: scale(1.1);
              background: rgba(255, 255, 255, 0.15);
              box-shadow: 0 0 15px rgba(167, 139, 250, 0.4);
            }
          `}
        </style>

        {/* Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noisy.png')] opacity-5" />

        {/* Parallax Particle Layer */}
        <motion.div
          className="absolute inset-0 parallax-layer"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {particles.map((particle) => (
            <motion.div
              key={particle}
              className="absolute rounded-full"
              style={{
                width: `${1 + Math.random() * 6}px`,
                height: `${1 + Math.random() * 6}px`,
                background: `hsl(${Math.random() * 360}, 70%, ${50 + Math.random() * 30}%)`,
                opacity: 0.15 + Math.random() * 0.2,
              }}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: [0, 2, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 1.5,
              }}
            />
          ))}
        </motion.div>

        {/* Cursor-Following Shapes */}
        <div className="absolute inset-0">
          {floatingShapes.map((shape) => (
            <motion.div
              key={shape}
              className={`absolute ${
                shape % 3 === 0 ? 'w-24 h-24' : shape % 3 === 1 ? 'w-16 h-16' : 'w-12 h-12'
              } ${
                shape % 3 === 0
                  ? 'border-2 border-white border-opacity-40 rounded-full glow-effect'
                  : shape % 3 === 1
                    ? 'bg-white bg-opacity-20 rounded-lg glow-effect'
                    : 'border-2 border-white border-opacity-50 rotate-45 glow-effect'
              }`}
              style={{
                left: `${15 + (shape * 15) % 70}%`,
                top: `${10 + (shape * 20) % 80}%`,
              }}
              animate={{
                x: (cursorPosition.x - window.innerWidth / 2) * 0.06,
                y: (cursorPosition.y - window.innerHeight / 2) * 0.06,
                rotate: [0, 360],
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 5 + shape * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: shape * 0.1,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center h-full" role="banner" aria-label="Welcome Animation">
          <div className="text-center">
            {/* 3D Tilt Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -360 }}
              animate={{
                scale: currentPhase >= 1 ? 1 : 0,
                rotate: currentPhase >= 1 ? 0 : -360,
              }}
              transition={{
                duration: 1.5,
                ease: 'anticipate',
                type: 'spring',
                stiffness: 120,
              }}
              className="mb-12"
            >
              <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} glareEnable={true} glareMaxOpacity={0.3}>
                <motion.div
                  className="w-40 h-40 mx-auto bg-white rounded-3xl shadow-2xl flex items-center justify-center relative glow-effect"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.4 }}
                  animate={{
                    boxShadow: currentPhase >= 2
                      ? '0 50px 100px -20px rgba(0, 0, 0, 0.8)'
                      : '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white to-pink-300 rounded-3xl opacity-30"
                    animate={{
                      scale: currentPhase >= 2 ? [1, 1.2, 1] : 1,
                      opacity: currentPhase >= 2 ? [0.3, 0.6, 0.3] : 0.3,
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  <motion.svg
                    className="w-24 h-24 text-pink-600 relative z-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    animate={{
                      scale: currentPhase >= 2 ? [1, 1.4, 1] : 1,
                      rotate: currentPhase >= 2 ? [0, 15, 0] : 0,
                    }}
                    transition={{
                      duration: 0.7,
                      repeat: currentPhase >= 2 ? 2 : 0,
                      ease: 'easeInOut',
                    }}
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </motion.svg>
                </motion.div>
              </Tilt>
            </motion.div>

            {/* Staggered Wave Animation for Title */}
            <motion.h1 className="text-6xl md:text-9xl font-extrabold gradient-text mb-8" aria-label="Welcome Title">
              {titleText.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: currentPhase >= 2 ? 1 : 0,
                    y: currentPhase >= 2 ? 0 : 50,
                    rotate: currentPhase >= 2 ? [0, -5, 5, 0] : 0,
                  }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05, ease: 'easeOut' }}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: currentPhase >= 3 ? 1 : 0,
                y: currentPhase >= 3 ? 0 : 40,
              }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="text-2xl md:text-4xl text-white font-light mb-12 max-w-3xl mx-auto"
            >
              This is Iman's Gadzhi webpage
            </motion.p>

            {/* Loading Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: currentPhase >= 3 ? 1 : 0 }}
              transition={{ duration: 0.7 }}
              className="flex justify-center space-x-4 mb-12"
            >
              {[0, 1, 2, 3, 4].map((dot) => (
                <motion.div
                  key={dot}
                  className="w-6 h-6 bg-pink-200 rounded-full glow-effect"
                  animate={{
                    scale: [1, 2.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: dot * 0.1,
                  }}
                />
              ))}
            </motion.div>

            {/* Progress Bar with Rotation */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{
                opacity: currentPhase >= 3 ? 1 : 0,
                scaleX: currentPhase >= 3 ? 1 : 0,
                rotate: currentPhase >= 3 ? [0, 360] : 0,
              }}
              transition={{ duration: 1, delay: 0.7, ease: 'easeInOut' }}
              className="w-96 h-2 bg-white bg-opacity-20 rounded-full mx-auto overflow-hidden"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-pink-300 to-indigo-400 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: currentPhase / 4 }}
                transition={{ duration: 0.9, ease: 'easeInOut', delay: 0.9 }}
              />
            </motion.div>

            {/* Tech Tags with Staggered Entrance */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: currentPhase >= 3 ? 1 : 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="mt-16 flex justify-center space-x-6 flex-wrap"
            >
              {['React', 'Node.js', 'AI/ML', 'Blockchain', 'Web3'].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-6 py-3 tech-tag text-white text-lg md:text-xl rounded-full backdrop-blur-md glow-effect"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1, ease: 'backOut' }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Call-to-Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: currentPhase >= 4 ? 1 : 0,
                y: currentPhase >= 4 ? 0 : 50,
              }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="mt-16"
            >
              <button
                className="px-12 py-4 cta-button text-white text-xl md:text-2xl font-semibold rounded-full"
                onClick={onComplete}
                aria-label="Explore Now"
              >
                Explore Now
              </button>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Background Waves */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-indigo-950 to-transparent"
          animate={{
            opacity: [0.4, 0.7, 0.4],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedLanding;