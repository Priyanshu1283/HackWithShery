import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Node.js, and more.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Cross-browser Compatibility'],
      price: 'From $2,000'
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['Native Development', 'Cross-platform Solutions', 'App Store Optimization', 'Push Notifications'],
      price: 'From $5,000'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces designed with user experience in mind.',
      features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems'],
      price: 'From $1,500'
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Speed up your existing website and improve user experience and search rankings.',
      features: ['Speed Analysis', 'Code Optimization', 'Image Optimization', 'Caching Strategies'],
      price: 'From $800'
    },
    {
      icon: '🔧',
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and technical support for your digital products.',
      features: ['Regular Updates', 'Security Patches', '24/7 Support', 'Performance Monitoring'],
      price: 'From $200/month'
    },
    {
      icon: '🚀',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence.',
      features: ['SEO Services', 'Content Marketing', 'Social Media', 'Analytics & Reporting'],
      price: 'From $1,000/month'
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business grow and succeed in the digital world.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Service Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-primary-600">{service.price}</div>
              </div>

              {/* Features List */}
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="p-6 pt-0">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-primary"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-xl mb-6 opacity-90">
            Let's discuss your requirements and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Schedule a Call
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-300"
            >
              View Portfolio
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 