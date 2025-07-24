import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: '🎓',
    title: 'Courses & Programs',
    description: 'Digital marketing, agency building, copywriting.'
  },
  {
    icon: '🌐',
    title: 'Ecosystem/Platform',
    description: 'AI tools, live coaching, community access, guarantees.'
  },
  {
    icon: '🤝',
    title: 'Membership/Coaching',
    description: 'Group masterminds, private forums, high‑ticket support.'
  },
  {
    icon: '🕶️',
    title: 'Merch & Lifestyle Brand',
    description: 'Eyewear, apparel, beverages (Big Day brand).'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.18,
      duration: 0.7,
      type: 'spring',
      bounce: 0.22
    }
  })
};

const Service = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { scale: 0.92, opacity: 0.8 },
          {
            scale: 1,
            opacity: 1,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            duration: 0.7,
            ease: 'power2.out',
            delay: i * 0.08
          }
        );
      }
    });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-600 to-zinc-400 flex flex-col items-center justify-center py-16 px-2 md:px-0">
      <h2 className="text-5xl md:text-7xl font-bold text-white mb-12 text-center">
        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {services.map((service, i) => (
          <motion.article
            key={service.title}
            ref={el => (cardsRef.current[i] = el)}
            className="bg-zinc-900 rounded-xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 group border border-zinc-700"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
            whileHover={{ scale: 1.045, rotate: -2 }}
            tabIndex={0}
            aria-label={service.title}
          >
            <span className="text-5xl mb-6 block select-none" aria-hidden="true">{service.icon}</span>
            <h3 className="text-2xl font-bold text-zinc-100 mb-3">{service.title}</h3>
            <p className="text-zinc-300 text-base">{service.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Service; 