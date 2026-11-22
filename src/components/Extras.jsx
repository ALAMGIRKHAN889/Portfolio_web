import { useEffect } from 'react'
import { motion, useScroll, useSpring, useMotionValue } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })
  return <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 origin-left z-[60] bg-gradient-to-r from-purple-500 to-blue-400" />
}

export function CursorGlow() {
  const x = useMotionValue(-500)
  const y = useMotionValue(-500)
  useEffect(() => {
    const move = (e) => { x.set(e.clientX - 150); y.set(e.clientY - 150) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])
  return (
    <motion.div
      style={{ x, y }}
      className="pointer-events-none fixed top-0 left-0 w-[300px] h-[300px] rounded-full bg-purple-500/20 blur-3xl z-0 hidden md:block"
    />
  )
}

export function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/923154572266"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.2, type: 'spring' }}
      whileHover={{ scale: 1.15 }}
      className="fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] right-4 md:bottom-5 md:right-5 z-50 w-14 h-14 rounded-full bg-green-500 text-white text-3xl flex items-center justify-center shadow-lg shadow-green-500/40"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
      <FaWhatsapp className="relative" />
    </motion.a>
  )
}
