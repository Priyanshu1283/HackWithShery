import { motion } from 'framer-motion';

const About = () => {
  const values = [
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'We stay ahead of the curve with cutting-edge technologies and creative solutions.'
    },
    {
      icon: '💎',
      title: 'Quality',
      description: 'Every project is crafted with attention to detail and excellence in mind.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'We work closely with our clients to ensure their vision becomes reality.'
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Fast, responsive, and optimized websites that deliver exceptional user experiences.'
    }
  ];

  const team = [
    {
      name: 'Shery',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      bio: 'Full-stack developer with 5+ years of experience in modern web technologies.'
    },
    {
      name: 'Alex',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      bio: 'Creative designer passionate about creating beautiful and functional user experiences.'
    },
    {
      name: 'Mike',
      role: 'DevOps Engineer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      bio: 'Infrastructure expert ensuring smooth deployments and optimal performance.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
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
            About <span className="text-primary-600">HackWithShery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a passionate team of developers, designers, and innovators dedicated to creating 
            exceptional digital experiences that drive business growth and user engagement.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-secondary-50 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our diverse team brings together expertise from various domains to deliver 
            comprehensive solutions that exceed expectations.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h4>
              <p className="text-primary-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: '5+', label: 'Years Experience' },
            { number: '100+', label: 'Projects Delivered' },
            { number: '50+', label: 'Happy Clients' },
            { number: '99%', label: 'Success Rate' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-gradient-to-br from-primary-100 to-secondary-100"
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About; 