import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload, FaWhatsapp } from 'react-icons/fa';
import SEO from '../../components/SEO';
import Typewriter from '../../components/Typewriter';
import { Reveal } from '../../components/Motion';

const stats = [
  { n: '18+', l: 'Projects Built' },
  { n: 'MERN', l: 'Full Stack' },
  { n: '100%', l: 'Responsive UI' },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function Home() {
  const handleShowPDF = () => window.open('/Alamgir CV.pdf', '_blank');

  return (
    <>
      <SEO
        title="Home"
        description="Portfolio of Alamgir Khan, a Full Stack Developer specializing in MERN stack (MongoDB, Express, React, Node.js)."
        keywords="Full Stack Developer, MERN, React, Node.js, Portfolio, Alamgir Khan"
      />
      <section className="container flex flex-col min-h-[calc(100vh-12rem)] justify-center mx-auto px-4 py-5 md:py-10">
        <motion.div variants={container} initial="hidden" animate="show" className="text-center">
          <motion.h2 variants={item} className="text-xl md:text-2xl text-gray-300 mb-2">
            Hi, I'm <span className="inline-block animate-bounce">👋</span>
          </motion.h2>
          <motion.h1 variants={item} className="text-5xl md:text-8xl font-extrabold my-2">
            <span className="gradient-text">Alamgir Khan</span>
          </motion.h1>
          <motion.p variants={item} className="text-xl md:text-3xl text-gray-200 mb-6 h-10 font-semibold">
            <Typewriter words={['Full Stack Developer', 'MERN Stack Developer', 'React & Node.js Expert', 'UI Enthusiast']} />
          </motion.p>
          <motion.p variants={item} className="max-w-2xl mx-auto text-gray-400 mb-10">
            I build complete web applications, from pixel-perfect React interfaces to secure Node.js / Express APIs
            and MongoDB databases. Dashboards, e-commerce, management systems, I ship them end to end.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/projects" className="btn-primary w-full sm:w-auto">
              My Work <FaArrowRight />
            </Link>
            <button onClick={handleShowPDF} className="btn-outline w-full sm:w-auto">
              Download CV <FaDownload />
            </button>
            <a href="https://wa.me/923154572266" target="_blank" rel="noopener noreferrer" className="btn-outline w-full sm:w-auto hover:!border-green-400">
              WhatsApp <FaWhatsapp className="text-green-400" />
            </a>
          </motion.div>

          <motion.div variants={item} className="grid grid-cols-3 gap-3 max-w-xl mx-auto mt-14">
            {stats.map((s) => (
              <motion.div key={s.l} whileHover={{ y: -6, scale: 1.05 }} className="glass rounded-2xl py-4">
                <p className="text-2xl md:text-3xl font-extrabold gradient-text">{s.n}</p>
                <p className="text-xs md:text-sm text-gray-400 mt-1">{s.l}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
