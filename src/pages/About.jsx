import { motion } from 'framer-motion';

const aboutCards = [
  {
    key: 'about',
    title: 'About',
    img: '/public/iman-back.webp', // placeholder, swap as needed
    content: `HackWithShery is a digital agency founded to bridge the gap between technology and user experience. Our mission is to empower businesses with innovative digital solutions.`
  },
  {
    key: 'early-life',
    title: 'Early Life',
    img: '/public/child_1.webp',
    content: `Iman was born in Dagestan, Russia, and moved to London at age 4. Raised in a modest environment, he faced challenges related to family issues, financial hardship, and limited access to traditional education.`
  },
  {
    key: 'school-nepal',
    title: 'School in Nepal',
    img: '/public/Nepal_0002_Generative-Fill-6.webp',
    content: `Iman attended school in Nepal, where he developed a passion for learning and self-improvement, overcoming obstacles and embracing new cultures.`
  },
  {
    key: 'company-marathon',
    title: 'Company Marathon',
    img: '/public/web_0016_Generative-Fill-11-p-2000.webp',
    content: `Iman founded his first company, Marathon, which quickly gained recognition for its innovative approach and commitment to excellence.`
  },
  {
    key: 'meals-sa',
    title: 'Meals in South Africa',
    img: '/public/web_0022_Generative-Fill-p-2000.webp',
    content: `During his travels in South Africa, Iman experienced diverse cuisines and cultures, which inspired him to bring global perspectives to his work.`
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 0.8 } },
};

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex flex-col items-center justify-center py-16">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-12 text-center">
        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">HackWithShery</span>
      </h1>
      <div className="w-full flex overflow-x-auto gap-8 px-4 md:px-0 justify-center scrollbar-thin scrollbar-thumb-blue-700/30 scrollbar-track-transparent">
        {aboutCards.map((card, idx) => (
          <motion.div
            key={card.key}
            className="min-w-[340px] max-w-xs bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:bg-white/10 transition-all duration-300 cursor-pointer"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ scale: 1.04, y: -8 }}
          >
            <div className="w-40 h-40 rounded-xl overflow-hidden mb-6 bg-gray-800 flex items-center justify-center">
              <img src={card.img} alt={card.title} className="object-cover w-full h-full" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3 text-center">{card.title}</h2>
            <p className="text-gray-300 text-base text-center">{card.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About; 