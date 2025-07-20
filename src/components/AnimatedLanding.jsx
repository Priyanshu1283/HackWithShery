import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedLanding = ({ onComplete }) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Phase 1: Initial fade in (0.5s)
    const timer1 = setTimeout(() => {
      setCurrentPhase(1);
    }, 500);

    // Phase 2: Logo animation (1s)
    const timer2 = setTimeout(() => {
      setCurrentPhase(2);
    }, 1500);

    // Phase 3: Text reveal (1s)
    const timer3 = setTimeout(() => {
      setCurrentPhase(3);
      setShowContent(true);
    }, 2500);

    // Phase 4: Final transition (0.5s)
    const timer4 = setTimeout(() => {
      setCurrentPhase(4);
    }, 3500);

    // Complete and transition to main page (0.5s)
    const timer5 = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  const particles = Array.from({ length: 50 }, (_, i) => i);
  const floatingShapes = Array.from({ length: 8 }, (_, i) => i);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden z-50"
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <motion.div
              key={particle}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0">
          {floatingShapes.map((shape) => (
            <motion.div
              key={shape}
              className={`absolute ${
                shape % 2 === 0 ? 'w-16 h-16' : 'w-12 h-12'
              } ${
                shape % 3 === 0 
                  ? 'border-2 border-white border-opacity-20 rounded-full' 
                  : shape % 3 === 1 
                    ? 'bg-white bg-opacity-10 rounded-lg' 
                    : 'border border-white border-opacity-30 rotate-45'
              }`}
              style={{
                left: `${20 + (shape * 10) % 60}%`,
                top: `${15 + (shape * 15) % 70}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + shape * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: shape * 0.3,
              }}
            />
          ))}
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{
                scale: currentPhase >= 1 ? 1 : 0,
                rotate: currentPhase >= 1 ? 0 : -180,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
                type: "spring",
                stiffness: 200,
              }}
              className="mb-8"
            >
              <motion.div
                className="w-24 h-24 mx-auto bg-white rounded-2xl shadow-2xl flex items-center justify-center relative"
                animate={{
                  boxShadow: currentPhase >= 2 
                    ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)" 
                    : "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.5 }}
              >
                {/* Glowing effect */}
                <motion.div
                  className="absolute inset-0 bg-white rounded-2xl opacity-20"
                  animate={{
                    scale: currentPhase >= 2 ? [1, 1.1, 1] : 1,
                    opacity: currentPhase >= 2 ? [0.2, 0.4, 0.2] : 0.2,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.svg
                  className="w-12 h-12 text-primary-600 relative z-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  animate={{
                    scale: currentPhase >= 2 ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: currentPhase >= 2 ? 1 : 0,
                  }}
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </motion.svg>
              </motion.div>
            </motion.div>

            {/* Company Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: currentPhase >= 2 ? 1 : 0,
                y: currentPhase >= 2 ? 0 : 30,
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-4"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: currentPhase >= 2 ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="inline-block"
              >
                Hack
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: currentPhase >= 2 ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="text-primary-300 inline-block mx-2"
              >
                With
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: currentPhase >= 2 ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                className="text-primary-200 inline-block"
              >
                Shery
              </motion.span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: currentPhase >= 3 ? 1 : 0,
                y: currentPhase >= 3 ? 0 : 20,
              }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-primary-200 mb-8 max-w-2xl mx-auto"
            >
              Transforming Ideas Into Digital Reality
            </motion.p>

            {/* Loading Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: currentPhase >= 3 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center space-x-2 mb-8"
            >
              {[0, 1, 2].map((dot) => (
                <motion.div
                  key={dot}
                  className="w-3 h-3 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: dot * 0.2,
                  }}
                />
              ))}
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{
                opacity: currentPhase >= 3 ? 1 : 0,
                scaleX: currentPhase >= 3 ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-64 h-1 bg-white bg-opacity-20 rounded-full mx-auto overflow-hidden"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-white to-primary-200 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: currentPhase / 4 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              />
            </motion.div>

            {/* Additional decorative elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: currentPhase >= 3 ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 flex justify-center space-x-4"
            >
              {['React', 'Node.js', 'AI/ML'].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-white bg-opacity-10 text-white text-sm rounded-full backdrop-blur-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Animated background waves */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-800 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedLanding; 