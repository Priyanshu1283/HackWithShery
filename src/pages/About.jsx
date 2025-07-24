import { motion } from 'framer-motion';
import AboutCard from '../components/AboutCard';

const aboutCards = [
  {
    key: 'about',
    title: 'About',
    img1: '/iman-back.webp',
    img2: '/child_2.webp',
    content: `HackWithShery is a digital agency founded to bridge the gap between technology and user experience. Our mission is to empower businesses with innovative digital solutions.`
  },
  {
    key: 'early-life',
    title: 'Early Life',
    img1: '/child_1.webp',
    img2: '/Nepal_0003_Generative-Fill.webp',
    content: `Iman was born in Dagestan, Russia, and moved to London at age 4. Raised in a modest environment, he faced challenges related to family issues, financial hardship, and limited access to traditional education.`
  },
  {
    key: 'school-nepal',
    title: 'School in Nepal',
    img1: '/Nepal_0002_Generative-Fill-6.webp',
    img2: '/web_0018_Generative-Fill-9-p-2000.webp',
    content: `Iman attended school in Nepal, where he developed a passion for learning and self-improvement, overcoming obstacles and embracing new cultures.`
  },
  {
    key: 'company-marathon',
    title: 'Company Marathon',
    img1: '/web_0016_Generative-Fill-11-p-2000.webp',
    img2: '/web_0020_Generative-Fill-5-p-2000.webp',
    content: `Iman founded his first company, Marathon, which quickly gained recognition for its innovative approach and commitment to excellence.`
  },
  {
    key: 'meals-sa',
    title: 'Meals in South Africa',
    img1: '/web_0022_Generative-Fill-p-2000.webp',
    img2: '/apple-touch-icon.png',
    content: `During his travels in South Africa, Iman experienced diverse cuisines and cultures, which inspired him to bring global perspectives to his work.`
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-600 to-zinc-400 flex flex-col items-center justify-center py-16 px-2 md:px-0">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-12 text-center">
        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">HackWithShery</span>
      </h1>
      <div className="flex flex-col gap-10 w-full max-w-5xl">
        {aboutCards.map((card, idx) => (
          <AboutCard
            key={card.key}
            img1={card.img1}
            img2={card.img2}
            title={card.title}
            content={card.content}
            delay={0.2 * idx}
          />
        ))}
      </div>
    </div>
  );
};

export default About; 