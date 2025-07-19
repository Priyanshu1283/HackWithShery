import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      icon: '💻',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      features: ['React & Next.js', 'Node.js Backend', 'Database Design', 'API Integration', 'Performance Optimization', 'SEO Implementation'],
      price: 'From $2,500',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'Flutter Development', 'Native iOS/Android', 'App Store Optimization', 'Push Notifications', 'Offline Support'],
      price: 'From $5,000',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces designed with user experience in mind.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'User Testing', 'Design Handoff'],
      price: 'From $1,500',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Speed up your existing website and improve user experience and search rankings.',
      features: ['Speed Analysis', 'Code Optimization', 'Image Optimization', 'Caching Strategies', 'CDN Setup', 'Monitoring'],
      price: 'From $800',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      icon: '🔧',
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and technical support for your digital products.',
      features: ['Regular Updates', 'Security Patches', '24/7 Support', 'Performance Monitoring', 'Backup Management', 'Analytics'],
      price: 'From $200/month',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 6,
      icon: '🚀',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence.',
      features: ['SEO Services', 'Content Marketing', 'Social Media', 'PPC Campaigns', 'Analytics & Reporting', 'Conversion Optimization'],
      price: 'From $1,000/month',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
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
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer comprehensive digital solutions to help your business grow and succeed in the digital world.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="container mx-auto px-4 pb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
                className="relative group"
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500">
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20`} />
                    <div className="absolute top-4 left-4 text-4xl">{service.icon}</div>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-sm font-semibold">
                      {service.price}
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    
                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                          className="flex items-center text-sm text-gray-300"
                        >
                          <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 px-6 bg-gradient-to-r ${service.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300`}
                    >
                      Get Started
                    </motion.button>
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
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your requirements and create something amazing together. 
                Our team is ready to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Start a Project
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
    </div>
  );
};

export default Services; 