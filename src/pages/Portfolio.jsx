import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', name: 'All Projects', icon: '🌟' },
    { id: 'web', name: 'Web Development', icon: '💻' },
    { id: 'mobile', name: 'Mobile Apps', icon: '📱' },
    { id: 'design', name: 'UI/UX Design', icon: '🎨' },
    { id: 'ecommerce', name: 'E-commerce', icon: '🛒' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern E-commerce Platform',
      category: 'ecommerce',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      description: 'A full-featured e-commerce platform with advanced product management, payment integration, and analytics dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      client: 'TechCorp Inc.',
      duration: '3 months',
      link: '#',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      description: 'Cross-platform mobile app for team collaboration and project management with real-time updates.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Socket.io'],
      client: 'StartupXYZ',
      duration: '4 months',
      link: '#',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Corporate Website Redesign',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      description: 'Complete redesign of a corporate website with modern design, improved user experience, and SEO optimization.',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      client: 'Global Solutions Ltd.',
      duration: '2 months',
      link: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      title: 'Fitness Tracking Dashboard',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      description: 'Comprehensive fitness tracking dashboard with beautiful data visualization and user analytics.',
      technologies: ['Figma', 'React', 'Chart.js', 'D3.js'],
      client: 'FitLife App',
      duration: '3 months',
      link: '#',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 5,
      title: 'Restaurant Ordering System',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      description: 'Online ordering system for restaurants with real-time order tracking and payment processing.',
      technologies: ['Vue.js', 'Laravel', 'WebSocket', 'PayPal API'],
      client: 'FoodChain Restaurants',
      duration: '5 months',
      link: '#',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      description: 'Analytics dashboard for social media management and performance tracking across multiple platforms.',
      technologies: ['Adobe XD', 'React', 'D3.js', 'Social APIs'],
      client: 'SocialBoost Agency',
      duration: '4 months',
      link: '#',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
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
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Portfolio</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our latest projects and see how we've helped businesses achieve their digital goals.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="container mx-auto px-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20'
                }`}
              >
                <span className="mr-2">{filter.icon}</span>
                {filter.name}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="container mx-auto px-4 pb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer"
                >
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20`} />
                      <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-sm font-semibold">
                        {project.category}
                      </div>
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold"
                        >
                          View Details
                        </motion.button>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white/10 text-white text-xs rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full font-medium">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Project Meta */}
                      <div className="flex justify-between items-center text-sm text-gray-400">
                        <span>Client: {project.client}</span>
                        <span>{project.duration}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md border border-white/10 rounded-2xl p-12">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's create something amazing together. Our team is ready to bring your vision to life.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Start Your Project
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative h-64">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  ×
                </button>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h2>
                <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/10 text-white text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Project Details</h4>
                    <div className="space-y-2 text-gray-300">
                      <p><span className="font-medium">Client:</span> {selectedProject.client}</p>
                      <p><span className="font-medium">Duration:</span> {selectedProject.duration}</p>
                      <p><span className="font-medium">Category:</span> {selectedProject.category}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 py-3 px-6 bg-gradient-to-r ${selectedProject.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300`}
                  >
                    View Live Project
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(null)}
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

export default Portfolio; 