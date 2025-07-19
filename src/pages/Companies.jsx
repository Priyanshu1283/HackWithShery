import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Companies = () => {
  const [hoveredCompany, setHoveredCompany] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const companies = [
    {
      id: 1,
      name: 'HackWithShery',
      logo: '🚀',
      description: 'A cutting-edge web development agency specializing in modern, responsive websites and applications.',
      founded: '2024',
      industry: 'Web Development',
      website: 'https://hackwithshery.com',
      color: 'from-blue-500 to-cyan-500',
      services: ['Web Development', 'Mobile Apps', 'UI/UX Design', 'Digital Marketing'],
      stats: {
        projects: '50+',
        clients: '25+',
        satisfaction: '100%'
      }
    },
    {
      id: 2,
      name: 'TechFlow',
      logo: '⚡',
      description: 'Innovative software solutions company focused on automation and AI-driven applications.',
      founded: '2023',
      industry: 'Software Development',
      website: 'https://techflow.com',
      color: 'from-purple-500 to-pink-500',
      services: ['AI Solutions', 'Automation', 'Cloud Services', 'Consulting'],
      stats: {
        projects: '30+',
        clients: '15+',
        satisfaction: '98%'
      }
    },
    {
      id: 3,
      name: 'DesignCraft',
      logo: '🎨',
      description: 'Creative design studio delivering stunning visual experiences and brand identities.',
      founded: '2023',
      industry: 'Design & Branding',
      website: 'https://designcraft.com',
      color: 'from-green-500 to-emerald-500',
      services: ['Brand Design', 'UI/UX', 'Print Design', 'Animation'],
      stats: {
        projects: '40+',
        clients: '20+',
        satisfaction: '99%'
      }
    },
    {
      id: 4,
      name: 'DigitalBoost',
      logo: '📈',
      description: 'Performance-driven digital marketing agency helping businesses grow online.',
      founded: '2024',
      industry: 'Digital Marketing',
      website: 'https://digitalboost.com',
      color: 'from-orange-500 to-red-500',
      services: ['SEO', 'PPC', 'Social Media', 'Content Marketing'],
      stats: {
        projects: '35+',
        clients: '18+',
        satisfaction: '97%'
      }
    },
    {
      id: 5,
      name: 'CloudSync',
      logo: '☁️',
      description: 'Cloud infrastructure and DevOps solutions for scalable business operations.',
      founded: '2023',
      industry: 'Cloud Services',
      website: 'https://cloudsync.com',
      color: 'from-indigo-500 to-blue-500',
      services: ['Cloud Migration', 'DevOps', 'Security', 'Monitoring'],
      stats: {
        projects: '25+',
        clients: '12+',
        satisfaction: '96%'
      }
    },
    {
      id: 6,
      name: 'InnovateLab',
      logo: '🔬',
      description: 'Research and development company pushing the boundaries of technology innovation.',
      founded: '2024',
      industry: 'R&D',
      website: 'https://innovatelab.com',
      color: 'from-pink-500 to-rose-500',
      services: ['Research', 'Prototyping', 'Innovation', 'Consulting'],
      stats: {
        projects: '20+',
        clients: '10+',
        satisfaction: '95%'
      }
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="pt-32 pb-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Companies</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A diverse portfolio of innovative companies, each pushing the boundaries in their respective industries.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Companies Grid */}
        <div className="container mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCompany(company.id)}
                onMouseLeave={() => setHoveredCompany(null)}
                onClick={() => setSelectedCompany(company)}
                className="group cursor-pointer"
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 relative">
                  {/* Company Header */}
                  <div className={`p-6 bg-gradient-to-r ${company.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="text-4xl">{company.logo}</div>
                      <div className="text-right">
                        <div className="text-white font-bold text-lg">{company.name}</div>
                        <div className="text-white/80 text-sm">{company.industry}</div>
                      </div>
                    </div>
                    
                    {/* Hover Effect */}
                    <AnimatePresence>
                      {hoveredCompany === company.id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="absolute inset-0 bg-white/10 flex items-center justify-center"
                        >
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg"
                          >
                            View Details
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Company Content */}
                  <div className="p-6">
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{company.description}</p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {Object.entries(company.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-white">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Services */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {company.services.slice(0, 3).map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          className="px-2 py-1 bg-white/10 text-white text-xs rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                      {company.services.length > 3 && (
                        <span className="px-2 py-1 bg-white/10 text-white text-xs rounded-full">
                          +{company.services.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Founded Year */}
                    <div className="text-sm text-gray-400">
                      Founded: {company.founded}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-white/10 rounded-2xl p-12">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Partner With Us?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our network of successful companies and take your business to the next level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Start Partnership
                  </motion.button>
                </Link>
                <Link to="/portfolio">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
                  >
                    View Our Work
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Company Modal */}
      <AnimatePresence>
        {selectedCompany && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCompany(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className={`p-6 bg-gradient-to-r ${selectedCompany.color} relative`}>
                <button
                  onClick={() => setSelectedCompany(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  ×
                </button>
                <div className="flex items-center space-x-4">
                  <div className="text-6xl">{selectedCompany.logo}</div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{selectedCompany.name}</h2>
                    <p className="text-white/80">{selectedCompany.industry}</p>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <p className="text-gray-300 mb-6">{selectedCompany.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3">Services Offered</h4>
                    <div className="space-y-2">
                      {selectedCompany.services.map((service, index) => (
                        <div key={index} className="flex items-center text-gray-300">
                          <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-3">Company Stats</h4>
                    <div className="space-y-3">
                      {Object.entries(selectedCompany.stats).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center">
                          <span className="text-gray-300 capitalize">{key}:</span>
                          <span className="text-white font-semibold">{value}</span>
                        </div>
                      ))}
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Founded:</span>
                        <span className="text-white font-semibold">{selectedCompany.founded}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={selectedCompany.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 py-3 px-6 bg-gradient-to-r ${selectedCompany.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-center`}
                  >
                    Visit Website
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCompany(null)}
                    className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Companies; 