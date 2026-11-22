import { Link } from 'react-router-dom'
import useInView from '../hooks/useInView'

export function Button({ to, href, variant = 'primary', className = '', children, ...rest }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition duration-300 disabled:cursor-not-allowed disabled:opacity-60'
  const look = variant === 'primary'
    ? 'bg-gradient-to-r from-brand-purple to-brand-blue text-white shadow-lg shadow-brand-purple/30 hover:-translate-y-0.5 hover:shadow-brand-cyan/40'
    : 'border border-white/15 bg-white/5 text-white hover:border-brand-cyan/60 hover:bg-white/10'
  const cls = `${base} ${look} ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>
  return <button className={cls} {...rest}>{children}</button>
}

export function Reveal({ children, className = '' }) {
  const [ref, seen] = useInView(0.12)
  return (
    <div ref={ref} className={`transition duration-700 ${seen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} ${className}`}>
      {children}
    </div>
  )
}

export function PageHeader({ title, intro }) {
  return (
    <header className="mx-auto mb-12 max-w-3xl text-center">
      <h1 className="font-display text-4xl font-extrabold text-white md:text-5xl"><span className="grad-text">{title}</span></h1>
      {intro && <p className="mt-4 text-lg text-slate-400">{intro}</p>}
    </header>
  )
}

export function Availability({ on }) {
  return (
    <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-white">
      <span className={`h-2.5 w-2.5 rounded-full ${on ? 'animate-pulseDot bg-emerald-400' : 'bg-slate-500'}`} />
      {on ? 'Available for new projects' : 'Currently unavailable'}
    </span>
  )
}

export function ProgressBar({ level }) {
  const [ref, seen] = useInView(0.3)
  return (
    <div ref={ref} role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100} className="h-2 w-full overflow-hidden rounded-full bg-white/10">
      <div className="h-full rounded-full bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan transition-[width] duration-1000 ease-out" style={{ width: seen ? `${level}%` : '0%' }} />
    </div>
  )
}
