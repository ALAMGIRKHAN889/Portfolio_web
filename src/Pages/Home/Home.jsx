import { FaArrowRight, FaDownload } from 'react-icons/fa'
import SEO from '../../components/SEO'
import { Button, Availability } from '../../components/ui'
import { site } from '../../data/site'

function CodeIllustration() {
  const rows = [
    ['const', ' dev = {'], ['  name', `: '${site.name}',`], ['  role', `: '${site.title}',`],
    ['  stack', ": ['React', 'Tailwind', 'Node'],"], ['  available', `: ${site.available},`], ['}', ''],
  ]
  return (
    <div aria-hidden="true" className="glass animate-float mx-auto w-full max-w-md overflow-hidden shadow-[0_0_60px_rgba(139,92,246,0.3)]">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-rose-400" /><span className="h-3 w-3 rounded-full bg-amber-300" /><span className="h-3 w-3 rounded-full bg-emerald-400" />
        <span className="ml-3 text-xs text-slate-500">developer.js</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-sm leading-7">
        {rows.map(([a, b], i) => (
          <div key={i}><span className={i === 0 ? 'text-brand-purple' : 'text-brand-cyan'}>{a}</span><span className="text-slate-300">{b}</span></div>
        ))}
      </pre>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <SEO title="Home" description={`Portfolio of ${site.name}, a ${site.title} specializing in React and modern web technologies.`} keywords="React, Tailwind CSS, Portfolio" />
      <section className="grid min-h-[75vh] items-center gap-14 pb-10 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <Availability on={site.available} />
          <p className="mt-8 text-xl text-slate-300">Hi, I&apos;m</p>
          <h1 className="font-display text-5xl font-extrabold text-white md:text-7xl"><span className="grad-text">{site.name}</span></h1>
          <p className="mt-3 font-display text-2xl text-slate-200">{site.title}</p>
          <p className="mx-auto mt-5 max-w-xl text-slate-400 lg:mx-0">{site.intro}</p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Button to="/projects">View My Work <FaArrowRight /></Button>
            <Button href={site.cv} download variant="ghost">Download CV <FaDownload /></Button>
          </div>
        </div>
        <CodeIllustration />
      </section>
    </>
  )
}
