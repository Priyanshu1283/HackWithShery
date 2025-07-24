import { motion } from 'framer-motion';

const CompanyCard = ({ company, idx, onClick }) => {
  const { name, description, logo, link } = company;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: idx * 0.18, ease: 'easeOut' }
    }
  };

  return (
    <motion.article
      key={name}
      custom={idx}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.025, boxShadow: '0 10px 32px 0 rgba(99,102,241,0.13)' }}
      className="relative flex flex-col md:flex-row items-center bg-zinc-900 border border-zinc-700 rounded-2xl p-8 shadow-xl overflow-hidden group transition-all duration-300"
      aria-label={name}
    >
      {/* Text Content */}
      <div className="flex-1 w-full md:pr-8 mb-6 md:mb-0 text-center md:text-left">
        <h3 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-3">{name}</h3>
        <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-6 max-w-prose mx-auto md:mx-0">{description}</p>
        <button
          onClick={() => onClick(company)}
          className="inline-block px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg shadow hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          aria-label={`Learn more about ${name}`}
        >
          Learn More
        </button>
      </div>
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center justify-center w-32 h-32 md:w-40 md:h-40 relative">
        <motion.div
          className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg border-4 border-zinc-800"
          initial={{ scale: 0.92, rotate: -8 }}
          animate={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.08, rotate: 8 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <img
            src={logo}
            alt={`${name} logo`}
            className="w-20 h-20 md:w-28 md:h-28 object-contain bg-white rounded-xl p-2"
            draggable="false"
          />
        </motion.div>
      </div>
    </motion.article>
  );
};

export default CompanyCard;
