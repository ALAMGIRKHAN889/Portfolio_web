import { Link } from 'react-router-dom'
import { nav, site, socials } from '../data/site'

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-white/10 bg-navy-900/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-display text-lg font-bold text-white">{site.name}</p>
          <p className="text-sm text-slate-400">{site.title}</p>
        </div>
        <ul className="hidden flex-wrap justify-center gap-x-5 md:flex gap-y-2 text-sm">
          {nav.map(([name, to]) => <li key={to}><Link to={to} className="text-slate-400 hover:text-white">{name}</Link></li>)}
        </ul>
        <ul className="flex gap-3">
          {socials.map((s) => (
            <li key={s.name}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}
                className="block rounded-full border border-white/10 bg-white/5 p-2.5 text-lg text-slate-300 transition hover:border-brand-cyan/50 hover:text-white">{s.icon}</a>
            </li>
          ))}
        </ul>
      </div>
      <p className="border-t border-white/5 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    </footer>
  )
}
