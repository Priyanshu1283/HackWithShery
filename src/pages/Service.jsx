import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';


const services = [
  {
    id: 1,
    title: 'Monetise AI',
    category: 'AI-Powered System',
    image: 'service1.avif',
    description: 'Automated systems for niche discovery, ghostwriting, and client conversion — with real-time coaching.',
    tools: ['AI Finder', 'Auto Ghostwriter', 'Weekly Mentorship'],
    link: 'https://monetise.com',
    color: 'from-orange-600 to-red-500'
  },
  {
    id: 2,
    title: 'Agency Navigator',
    category: 'SMMA Masterclass',
    image: 'serv4.avif',
    description: 'A complete step-by-step roadmap to build a scalable agency: from outreach to fulfillment.',
    tools: ['SMMA Blueprint', 'Sales Scripts', 'Funnel Templates'],
    link: 'https://www.agencynavigator.com',
    color: 'from-blue-600 to-cyan-500'
  },
  {
    id: 3,
    title: 'Pen To Profit',
    category: 'Copywriting Monetization',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2100&q=80',
    description: 'Learn persuasive writing to turn words into income — ideal for creators, coaches, and freelancers.',
    tools: ['Sales Pages', 'Buyer Psychology', 'Writing Frameworks'],
    link: 'https://www.pen-to-profit.com',
    color: 'from-purple-600 to-pink-500'
  },
  {
    id: 4,
    title: 'Private Mastermind',
    category: 'Invite‑Only Mentorship',
    image: 'private.webp',
    description: 'High-level mastermind groups and 1-on-1 coaching for elite business owners and agency founders.',
    tools: ['Zoom Calls', 'In-Person Retreats', 'Strategy Reviews'],
    link: 'https://www.imangadzhi.com/coaching',
    color: 'from-green-600 to-emerald-500'
  },
  {
    id: 5,
    title: 'GADZHI Apparel',
    category: 'Lifestyle Brand',
    image: 'ser3.avif',
    description: 'Luxury fashion and eyewear brand designed for modern entrepreneurs and high-performers.',
    tools: ['Eyewear', 'Minimalist Apparel', 'Luxury Streetwear'],
    link: 'https://www.gadzhi.com',
    color: 'from-yellow-500 to-orange-400'
  },
  {
    id: 6,
    title: 'Big Day Energy',
    category: 'Focus & Performance',
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=2100&q=80',
    description: 'Clean hydration and nootropic beverages built for productivity-driven creators and entrepreneurs.',
    tools: ['Hydration Boost', 'Nootropic Mixes', 'Clean Energy'],
    link: 'https://big-day.com',
    color: 'from-indigo-600 to-violet-500'
  }
];

// You can now add animations, responsiveness, and modal enhancements using Framer Motion + GSAP below

const Service = () => {
  const [selected, setSelected] = useState(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // GSAP staggered entrance animation for cards
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 50, rotation: -5 },
      {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2
      }
    );
  }, []);

  // GSAP hover animation for cards
  const handleCardHover = (index, isHovering) => {
    gsap.to(cardRefs.current[index], {
      y: isHovering ? -15 : 0,
      rotateY: isHovering ? 5 : 0,
      boxShadow: isHovering ? '0 15px 30px rgba(0, 0, 0, 0.3)' : '0 10px 20px rgba(0, 0, 0, 0.2)',
      duration: 0.4,
      ease: 'power2.out'
    });
  };

  // Framer Motion variants for modal
  const modalVariants = {
    initial: { opacity: 0, scale: 0.9, y: 50 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.9, y: 50 }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-zinc-400 to-zinc-800">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore high-impact programs and brands from Iman Gadzhi that help build, scale, and perform.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.id}
              ref={(el) => (cardRefs.current[idx] = el)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => handleCardHover(idx, true)}
              onMouseLeave={() => handleCardHover(idx, false)}
              onClick={() => setSelected(svc)}
              className="group cursor-pointer bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden transition-all duration-500"
              role="button"
              tabIndex={0}
              aria-label={`View details for ${svc.title}`}
              onKeyDown={(e) => e.key === 'Enter' && setSelected(svc)}
            >
              <div className="relative h-40 md:h-48">
                <motion.img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${svc.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                <div className="absolute top-3 left-3 bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium">
                  {svc.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{svc.title}</h3>
                <p className="text-gray-300 text-sm md:text-base line-clamp-2">{svc.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Service details modal"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              variants={modalVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
              className="bg-gray-900 border border-white/20 rounded-xl max-w-lg w-full overflow-hidden"
              ref={(el) => {
                if (el) {
                  gsap.fromTo(
                    el,
                    { opacity: 0, scale: 0.9, y: 50, rotateX: -10 },
                    { opacity: 1, scale: 1, y: 0, rotateX: 0, duration: 0.5, ease: 'power3.out' }
                  );
                }
              }}
            >
              <div className="relative h-56 md:h-64">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover rounded-t-xl" />
                <motion.button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close modal"
                >
                  ×
                </motion.button>
              </div>
              <div className="p-5 md:p-6">
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">{selected.title}</h2>
                <p className="text-gray-300 text-sm md:text-base mb-4">{selected.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {selected.tools.map((t, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 bg-white/15 text-white text-xs md:text-sm rounded-full font-medium"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1, type: 'spring', stiffness: 120 }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
                <motion.a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block px-5 py-2 text-white rounded-lg font-medium bg-gradient-to-r ${selected.color} hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white/50`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={(e) => {
                    gsap.to(e.target, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.target, { scale: 1, duration: 0.3, ease: 'power2.out' });
                  }}
                >
                  Visit Website
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Service;