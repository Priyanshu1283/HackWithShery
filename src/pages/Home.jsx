import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for background elements
      gsap.to('.parallax-bg', {
        y: -100,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        stagger: 0.5
      });

      // Floating animation for particles
      gsap.to('.floating-particle', {
        y: -30,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        stagger: 0.2
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: '🚀',
      title: 'Lightning Fast',
      description: 'Optimized for speed and performance'
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Responsive design for all devices'
    },
    {
      icon: '🎨',
      title: 'Modern Design',
      description: 'Beautiful and intuitive interfaces'
    },
    {
      icon: '🔒',
      title: 'Secure',
      description: 'Built with security best practices'
    }
  ];

  return (
    <div ref={heroRef} className="relative min-h-screen overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="floating-particle absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Parallax Background Elements */}
        <div className="parallax-bg absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
        <div className="parallax-bg absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-xl" />
        <div className="parallax-bg absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto"
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
            >
              Iman 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                {' '}Gadzhi
              </span>
              <br />
              Digital Experiences
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              We craft stunning websites and applications that captivate audiences and drive results. 
              From concept to deployment, we bring your vision to life with cutting-edge technology.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <Link to="/companies">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Explore Companies
                </motion.button>
              </Link>
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg text-lg hover:bg-white/20 transition-all duration-300"
                >
                  View Portfolio
                </motion.button>
              </Link>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.1, duration: 0.8 }}
                  whileHover={{ y: -10 }}
                  className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-4 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home; 