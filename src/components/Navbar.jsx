import { NavLink, Link } from 'react-router-dom'
import { MdHome, MdPerson, MdSchool, MdCode, MdFolder, MdMail, MdWorkOutline } from 'react-icons/md'
import { nav, site } from '../data/site'

const icons = { '/': <MdHome />, '/about': <MdPerson />, '/education': <MdSchool />, '/skills': <MdCode />, '/projects': <MdFolder />, '/contact': <MdMail />, '/hire-me': <MdWorkOutline /> }
const short = { '/education': 'Edu', '/projects': 'Work', '/hire-me': 'Hire' }

const topCls = (hire) => ({ isActive }) =>
  `rounded-full px-3.5 py-2 text-sm font-semibold transition duration-300 ${
    isActive
      ? 'bg-gradient-to-r from-brand-purple to-brand-blue text-white shadow-md shadow-brand-purple/30'
      : hire ? 'border border-brand-cyan/40 text-brand-cyan hover:bg-brand-cyan/10' : 'text-slate-300 hover:bg-white/10 hover:text-white'
  }`

export default function Navbar() {
  const [first, last] = site.name.split(' ')
  return (
    <>
      <header className="fixed inset-x-0 top-3 z-50 px-4">
        <nav aria-label="Main" className="glass mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full px-5">
          <Link to="/" className="font-display text-xl font-bold text-white">{first}<span className="text-brand-purple">{last}</span></Link>
          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map(([name, to]) => <li key={to}><NavLink to={to} end={to === '/'} className={topCls(to === '/hire-me')}>{name}</NavLink></li>)}
          </ul>
        </nav>
      </header>

      <nav aria-label="Mobile" className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy-900/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden">
        <ul className="mx-auto grid max-w-lg grid-cols-7 px-1">
          {nav.map(([name, to]) => (
            <li key={to}>
              <NavLink to={to} end={to === '/'} aria-label={name} className={({ isActive }) => `flex flex-col items-center gap-0.5 py-2 text-[10px] font-semibold transition ${isActive ? 'text-white' : 'text-slate-400'}`}>
                {({ isActive }) => (
                  <>
                    <span className={`flex h-7 w-11 items-center justify-center rounded-full text-xl transition ${isActive ? 'bg-gradient-to-r from-brand-purple to-brand-blue shadow-md shadow-brand-purple/40' : ''}`}>{icons[to]}</span>
                    <span>{short[to] || name}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
