import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const Btn = ({ href, children, primary }) => {
  const enabled = !!href;
  return (
    <a
      href={href || undefined}
      target={enabled ? "_blank" : undefined}
      rel="noopener noreferrer"
      aria-disabled={!enabled}
      onClick={(e) => !enabled && e.preventDefault()}
      className={`inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
        ${primary ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' : 'border border-white/20 text-white'}
        ${enabled ? 'hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30' : 'opacity-40 cursor-not-allowed'}`}
    >
      {children}
    </a>
  );
};

export default function ProjectCard({ project, index = 0 }) {
  const { logo, name, description, tags, Giticon, Github, Liveicon, Live } = project;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.45, delay: Math.min(index, 6) * 0.06 }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col items-center rounded-2xl glass p-5 overflow-hidden hover:border-blue-400/60 hover:shadow-[0_0_25px_rgba(99,102,241,0.35)] transition-[border,box-shadow] duration-300"
    >
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl group-hover:bg-blue-500/30 transition-colors duration-500" />
      <div className="relative size-16 rounded-full bg-gradient-to-r from-purple-700 to-blue-800 flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700">
        <img src={logo} alt={`${name} logo`} loading="lazy" className="size-14 object-contain rounded-full" />
      </div>
      <h3 className="relative py-3 font-bold text-lg text-center">{name}</h3>
      <p className="relative text-sm text-gray-300 text-center flex-grow leading-relaxed line-clamp-5 group-hover:line-clamp-none">{description}</p>

      <div className="relative my-4 flex flex-wrap justify-center gap-2">
        {tags?.map((tag) => (
          <span key={tag} className="bg-blue-500/15 border border-blue-400/30 text-blue-200 rounded-full px-3 py-0.5 text-xs font-medium">{tag}</span>
        ))}
      </div>

      <div className="relative flex gap-3">
        <Btn href={Github}>Github {Giticon}</Btn>
        <Btn href={Live} primary>Live {Liveicon}</Btn>
      </div>
    </motion.div>
  );
}

ProjectCard.propTypes = {
  index: PropTypes.number,
  project: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    Giticon: PropTypes.element,
    Github: PropTypes.string,
    Liveicon: PropTypes.element,
    Live: PropTypes.string,
  }).isRequired,
};
