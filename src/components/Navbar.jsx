import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { MdHome, MdPerson, MdSchool, MdCode, MdFolder, MdMail } from 'react-icons/md';

const menuItems = [
  { name: 'Home', link: '/', icon: <MdHome />, short: 'Home' },
  { name: 'About', link: '/about', icon: <MdPerson />, short: 'About' },
  { name: 'Education', link: '/education', icon: <MdSchool />, short: 'Edu' },
  { name: 'Skills', link: '/skills', icon: <MdCode />, short: 'Skills' },
  { name: 'Projects', link: '/projects', icon: <MdFolder />, short: 'Work' },
  { name: 'Contact', link: '/contact', icon: <MdMail />, short: 'Contact' },
];

const HireMeButton = ({ className = '' }) => (
  <Link
    to="/contact"
    className={`inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition-all duration-300 ${className}`}
  >
    Hire Me
  </Link>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', on);
    return () => window.removeEventListener('scroll', on);
  }, []);

  const navLinkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${isActive
      ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md'
      : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
    }`;

  return (
    <>
      <motion.nav aria-label="Main" initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="fixed top-4 left-0 right-0 z-50">
        <div className={`w-[90%] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2 backdrop-blur-lg border border-blue-500/30 rounded-full transition-all duration-300 ${scrolled ? 'bg-black/60 shadow-lg shadow-purple-500/20' : 'bg-black/30'}`}>
          <div className="flex items-center justify-between h-12">
            <Link to="/" className="flex-shrink-0 text-2xl font-bold text-white">
              <span className="md:hidden">A<span className="text-purple-400">K</span></span>
              <span className="hidden md:inline">Alamgir<span className="text-purple-400">Khan</span></span>
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-4">
              {menuItems.map((item) => (
                <NavLink key={item.name} to={item.link} end={item.link === '/'} className={navLinkClasses}>
                  {item.name}
                </NavLink>
              ))}
              <HireMeButton />
            </div>

            {/* Mobile: Hire Me stays in the top bar, navigation moves to the bottom tab bar */}
            <div className="md:hidden">
              <HireMeButton className="!px-4 !py-1.5 text-sm" />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile bottom tab bar */}
      <nav aria-label="Mobile" className="md:hidden fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#1c1733]/90 backdrop-blur-xl pb-[env(safe-area-inset-bottom)]">
        <ul className="mx-auto grid max-w-lg grid-cols-6 px-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.link}
                end={item.link === '/'}
                aria-label={item.name}
                className={({ isActive }) => `flex flex-col items-center gap-0.5 py-2 text-[10px] font-semibold transition-colors ${isActive ? 'text-white' : 'text-gray-400'}`}
              >
                {({ isActive }) => (
                  <>
                    <span className="relative flex h-7 w-12 items-center justify-center text-xl">
                      {isActive && (
                        <motion.span layoutId="mobile-tab-pill" className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 shadow-md shadow-purple-500/40" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
                      )}
                      <span className="relative">{item.icon}</span>
                    </span>
                    <span>{item.short}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
