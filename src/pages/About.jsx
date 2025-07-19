import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  const achievements = [
    {
      icon: '🏆',
      title: 'Industry Recognition',
      description: 'Awarded Best Web Development Agency 2024'
    },
    {
      icon: '📈',
      title: 'Growth Milestone',
      description: '500+ successful projects delivered'
    },
    {
      icon: '🤝',
      title: 'Client Satisfaction',
      description: '100% client retention rate'
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      description: 'Serving clients across 25+ countries'
    }
  ];

  const team = [
    {
      name: 'Shery',
      role: 'Founder & Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      bio: 'Full-stack developer with 8+ years of experience in modern web technologies.',
      skills: ['React', 'Node.js', 'Python', 'AWS'],
      social: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      name: 'Alex',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      bio: 'Creative designer passionate about creating beautiful and functional user experiences.',
      skills: ['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'Prototyping'],
      social: {
        linkedin: 'https://linkedin.com',
        behance: 'https://behance.net',
        dribbble: 'https://dribbble.com'
      }
    },
    {
      name: 'Mike',
      role: 'DevOps Engineer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      bio: 'Infrastructure expert ensuring smooth deployments and optimal performance.',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
      social: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
        medium: 'https://medium.com'
      }
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-purple-900/80" />
        
        {/* Animated Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
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
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">HackWithShery</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're a passionate team of innovators, designers, and developers dedicated to creating exceptional digital experiences.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-20">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded in 2024, HackWithShery emerged from a vision to bridge the gap between cutting-edge technology and exceptional user experiences. Our journey began with a simple belief: that every business deserves a digital presence that not only looks stunning but also drives real results.
                </p>
                <p>
                  What started as a small team of passionate developers has grown into a full-service digital agency, serving clients across the globe. We've maintained our commitment to innovation, quality, and client success throughout our growth.
                </p>
                <p>
                  Today, we're proud to have delivered over 500 successful projects, helping businesses of all sizes establish their digital footprint and achieve their online goals.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-md border border-white/10">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300">
                  To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting impact in the digital landscape.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our diverse team brings together expertise from various domains to deliver comprehensive solutions that exceed expectations.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-white/10 text-white text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  {Object.entries(member.social).map(([platform, url]) => (
                    <motion.a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-8 h-8 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                    >
                      <span className="text-sm">
                        {platform === 'linkedin' && '💼'}
                        {platform === 'github' && '🐙'}
                        {platform === 'twitter' && '🐦'}
                        {platform === 'behance' && '🎨'}
                        {platform === 'dribbble' && '🏀'}
                        {platform === 'medium' && '📝'}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-white/10 rounded-2xl p-12 mb-20"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: '🚀', title: 'Innovation', desc: 'Pushing boundaries with cutting-edge solutions' },
                { icon: '💎', title: 'Quality', desc: 'Delivering excellence in every project' },
                { icon: '🤝', title: 'Collaboration', desc: 'Working together to achieve greatness' },
                { icon: '⚡', title: 'Performance', desc: 'Optimizing for speed and efficiency' }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-white/10 rounded-2xl p-12">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and see how we can help bring your vision to life.
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
                <Link to="/companies">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
                  >
                    View Our Companies
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

export default About; 