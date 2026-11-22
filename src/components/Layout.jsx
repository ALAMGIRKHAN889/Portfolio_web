import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaWhatsapp } from 'react-icons/fa'
import Loading from './Loading'
import { socials } from '../data/site'

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return (
    <div className="relative min-h-screen overflow-x-hidden pb-[calc(4.5rem+env(safe-area-inset-bottom))] lg:pb-0">
      <a href="#main" className="sr-only z-[60] rounded-lg bg-white px-4 py-2 font-semibold text-navy-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <div aria-hidden="true" className="pointer-events-none fixed inset-0">
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand-purple/20 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-brand-blue/20 blur-[120px]" />
        <div className="absolute right-1/3 top-1/3 h-[300px] w-[300px] rounded-full bg-brand-cyan/10 blur-[120px]" />
      </div>
      <Navbar />
      <main id="main" className="relative z-10 mx-auto max-w-6xl px-5 pt-32">
        <Suspense fallback={<Loading />}><Outlet /></Suspense>
      </main>
      <Footer />
      <a href={socials.find((x) => x.name === 'WhatsApp').href} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
        className="fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-lg shadow-black/40 transition hover:scale-110 lg:bottom-6 lg:right-6">
        <FaWhatsapp />
      </a>
    </div>
  )
}
