// components/Service.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Monetise Ecosystem',
    category: 'Premium System',
    image: 'https://images.unsplash.com/photo-1642793330807-f7f8dcf7d8e3?auto=format&fit=crop&w=2100&q=80',
    description: 'AI niche finder, ghostwriter, live coaching & performance-based guarantees.',
    tools: ['Monetise AI', 'Ghostwriter AI', 'Live Coaching'],
    link: 'https://monetise.com',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 2,
    title: 'Agency Navigator',
    category: '8‑Week Program',
    image: 'https://images.unsplash.com/photo-1581090700227-1e8aa8e9f1d0?auto=format&fit=crop&w=2100&q=80',
    description: 'SMMA blueprint: outreach, systems, sales & fulfillment.',
    tools: ['SMMA', 'Stripe', 'Loom'],
    link: 'https://www.agencynavigator.com',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    title: 'Pen To Profit',
    category: 'Creative Monetization',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2100&q=80',
    description: 'Learn persuasive writing that sells for creators & freelancers.',
    tools: ['Copywriting', 'Psychology', 'Sales Pages'],
    link: 'https://www.pen-to-profit.com',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 4,
    title: 'Private Coaching & Masterminds',
    category: 'Invite‑Only',
    image: 'https://images.unsplash.com/photo-1622742221184-d2cbe37d9999?auto=format&fit=crop&w=2100&q=80',
    description: 'Elite mentorship, live events & strategic sessions.',
    tools: ['Masterminds', '1-on-1 Reviews', 'Zoom Calls'],
    link: 'https://www.imangadzhi.com/coaching',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 5,
    title: 'GADZHI Brand',
    category: 'Lifestyle Brand',
    image: 'https://images.unsplash.com/photo-1600180758890-6c0c78c9ebf6?auto=format&fit=crop&w=2100&q=80',
    description: 'Apparel & eyewear for elite entrepreneurs.',
    tools: ['Eyewear', 'Design', 'Merch'],
    link: 'https://www.gadzhi.com',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 6,
    title: 'Big Day (Health Brand)',
    category: 'Hydration & Energy',
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=2100&q=80',
    description: 'Functional drinks built for entrepreneurs.',
    tools: ['DTC', 'Supplements', 'Hydration'],
    link: 'https://big-day.com',
    color: 'from-indigo-500 to-purple-500'
  }
];

const Service = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore high-impact programs and brands from Iman Gadzhi that help build, scale, and perform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((svc, idx) => (
            <motion.div key={svc.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: idx * 0.1 }} whileHover={{ y: -10 }} onClick={() => setSelected(svc)} className="group cursor-pointer bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500">
              <div className="relative h-48">
                <img src={svc.image} alt={svc.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className={`absolute inset-0 bg-gradient-to-r ${svc.color} opacity-20`} />
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-sm font-semibold">
                  {svc.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{svc.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{svc.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.div onClick={(e) => e.stopPropagation()} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} className="bg-gray-900 border border-white/10 rounded-2xl max-w-2xl w-full overflow-hidden">
              <div className="relative h-64">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover rounded-t-2xl" />
                <button onClick={() => setSelected(null)} className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70">×</button>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-4">{selected.title}</h2>
                <p className="text-gray-300 mb-4">{selected.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.tools.map((t, i) => <span key={i} className="px-3 py-1 bg-white/10 text-white text-xs rounded-full font-medium">{t}</span>)}
                </div>
                <a href={selected.link} target="_blank" rel="noopener noreferrer" className={`inline-block px-6 py-3 text-white rounded-lg font-semibold bg-gradient-to-r ${selected.color}`}>
                  Visit Website
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Service;
