import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CompanyCard from '../components/CompanyCard';

const companies = [
   {
    name: 'Big Day',
    logo: '/logos/big_day.png',
    description: 'Big Day is a community-driven initiative focused on networking, events, and business development.',
    link: 'https://big-day.com/'
  },
    {
    name: 'Flozy',
    logo: '/logos/Flozy-Logo-Icon.webp',
    description: 'Flozy delivers creative solutions for digital branding, design, and user experience.',
    link: 'https://www.flozy.com/'
  },
  {
    name: 'IGA Media',
    logo: '/logos/iga.png',
    description: 'IGA Media is a leading digital marketing agency specializing in innovative strategies and measurable results for global brands.',
    link: 'https://iag-media.com/'
  },
  {
    name: 'Grow Your Agency',
    logo: '/logos/Sphere-Logo.webp',
    description: 'Grow Your Agency empowers entrepreneurs and agencies with the tools, training, and support to scale their businesses.',
    link: 'https://growyouragency.com/'
  },
  {
    name: 'Gadzhi',
    logo: '/logos/gadzhi_1.png',
    description: 'Gadzhi is a personal brand focused on business education, mindset, and high-performance coaching.',
    link: 'https://www.hillseyewear.com/'
  },

  {
    name: 'Educate',
    logo: '/logos/education.webp',
    description: 'Educate is an online learning platform offering courses and resources for personal and professional growth.',
    link: 'https://educate.io/hiring/vlog-editor'
  }
 
];

const Companies = () => {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('');

  // Filter companies by name (case-insensitive)
  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-zinc-950 to-black overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.1)_0%,rgba(139,92,246,0.1)_100%)]" />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-10"
        >
          Our{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
            Companies
          </span>
        </motion.h1>

        {/* Filter Bar */}
        <div className="flex justify-center mb-12">
          <label htmlFor="company-filter" className="sr-only">Filter companies by name</label>
          <input
            id="company-filter"
            type="text"
            value={filter}
            onChange={e => setFilter(e.target.value)}
            placeholder="Search companies..."
            className="w-full max-w-md px-5 py-3 rounded-lg bg-zinc-800 text-white placeholder-zinc-400 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            autoComplete="off"
          />
        </div>

        {/* Render Cards */}
        <div className="flex flex-col gap-12 max-w-6xl mx-auto">
          {filteredCompanies.length > 0 ? (
            filteredCompanies.map((company, idx) => (
              <CompanyCard
                key={company.name}
                company={company}
                idx={idx}
                onClick={setSelected}
              />
            ))
          ) : (
            <div className="text-center text-zinc-400 text-lg py-12">No companies found.</div>
          )}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              className="relative bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-2xl max-w-md w-full p-8 shadow-2xl"
            >
              <motion.div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-30 rounded-2xl" />
              <div className="relative z-10 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">{selected.name}</h2>
                <p className="text-gray-300 mb-6">{selected.description}</p>
                {selected.link ? (
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg font-semibold hover:bg-indigo-600 transition"
                  >
                    Visit Website
                  </a>
                ) : (
                  <p className="text-sm text-gray-500 italic">No website available</p>
                )}
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Companies;
