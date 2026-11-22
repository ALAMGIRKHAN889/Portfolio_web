import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1c1733]">
      <motion.div
        className="w-20 h-20 rounded-full border-4 border-purple-500/30 border-t-blue-400"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      />
      <motion.p
        className="mt-6 text-2xl font-bold text-white tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.6, 1] }}
        transition={{ duration: 1.2 }}
      >
        Alamgir<span className="text-purple-400">Khan</span>
      </motion.p>
    </div>
  )
}
