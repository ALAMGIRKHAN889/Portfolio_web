import { motion } from 'framer-motion'

export const Reveal = ({ children, delay = 0, y = 30, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
)

export const PageTitle = ({ children, sub }) => (
  <div className="text-center mb-10 md:mb-14">
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-5xl font-extrabold"
    >
      <span className="gradient-text">{children}</span>
    </motion.h1>
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="h-1 w-24 mx-auto mt-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
    />
    {sub && (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-3xl mx-auto text-gray-400 mt-5 text-lg px-3"
      >
        {sub}
      </motion.p>
    )}
  </div>
)
