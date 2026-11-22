import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Loading from './components/Loading'
import Navbar from './components/Navbar'
import { ScrollProgress, CursorGlow, WhatsAppFloat } from './components/Extras'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Projects from './Pages/Project/Projects'
import Contact from './Pages/Contact/Contact'
import Education from './Pages/Education/home'
import Skills from './Pages/Skills/skills'

function AnimatedRoutes() {
  const location = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.35 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) return <Loading />

  return (
    <Router>
      <main className="relative overflow-hidden bg-[#292345] text-white min-h-screen">
        <ScrollProgress />
        <CursorGlow />
        <div className="blob absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full -top-24 -left-32 blur-3xl" />
        <div className="blob absolute w-[450px] h-[450px] bg-purple-600/20 rounded-full -bottom-24 -right-32 blur-3xl [animation-delay:-5s]" />
        <div className="blob absolute w-[300px] h-[300px] bg-blue-400/10 rounded-full top-1/3 right-1/3 blur-3xl [animation-delay:-9s]" />

        <div className="relative z-10 py-3">
          <div className="flex justify-center"><Navbar /></div>
          <div className="mt-24 min-h-[calc(100vh-10rem)]">
            <AnimatedRoutes />
          </div>
        </div>
        <WhatsAppFloat />
      </main>
    </Router>
  )
}
