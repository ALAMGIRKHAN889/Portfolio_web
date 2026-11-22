import { useMemo, useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import SEO from '../../components/SEO'
import { Button, PageHeader, Reveal } from '../../components/ui'
import { projects } from '../../data/projects'

const backendTags = ['MERN', 'Full Stack', 'Node js', 'Backend', 'Mongoose']
const kind = (p) => (p.tags.some((t) => backendTags.includes(t)) ? 'Full Stack' : 'Frontend')
const filters = ['All', 'Frontend', 'Full Stack']

function ProjectCard({ p }) {
  return (
    <article className="glass glass-hover flex h-full flex-col overflow-hidden">
      <div className="aspect-video bg-gradient-to-br from-brand-purple/30 to-brand-blue/30">
        <img src={p.image} alt={`${p.name} preview`} loading="lazy" decoding="async"
          className={`h-full w-full ${p.fit === 'contain' ? 'object-contain p-6' : 'object-cover object-top'}`} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h2 className="font-display text-lg font-bold text-white">{p.name}</h2>
        <p className="mt-2 line-clamp-4 flex-1 text-sm text-slate-400">{p.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => <li key={t} className="rounded-full border border-brand-blue/30 bg-brand-blue/10 px-2.5 py-1 text-xs font-semibold text-brand-cyan">{t}</li>)}
        </ul>
        <div className="mt-5 flex gap-3">
          {p.Github && <Button href={p.Github} target="_blank" rel="noopener noreferrer" variant="ghost" className="flex-1 !px-4 !py-2 text-sm"><FaGithub /> GitHub</Button>}
          {p.Live && <Button href={p.Live} target="_blank" rel="noopener noreferrer" className="flex-1 !px-4 !py-2 text-sm">Live Demo <FaExternalLinkAlt /></Button>}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [query, setQuery] = useState('')
  const shown = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects.filter((p) => (filter === 'All' || kind(p) === filter) && (!q || `${p.name} ${p.tags.join(' ')}`.toLowerCase().includes(q)))
  }, [filter, query])

  return (
    <>
      <SEO title="Projects" description="Projects by Alamgir Khan: MERN stack apps, e-commerce sites, dashboards and tools built with React and Tailwind CSS." keywords="MERN Stack Projects, React Apps Portfolio" />
      <PageHeader title="Projects" intro="Hands-on work and real-world applications I have built." />
      <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div role="group" aria-label="Filter projects" className="flex gap-2">
          {filters.map((f) => (
            <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${filter === f ? 'bg-gradient-to-r from-brand-purple to-brand-blue text-white' : 'border border-white/15 text-slate-300 hover:text-white'}`}>{f}</button>
          ))}
        </div>
        <label className="w-full sm:w-64"><span className="sr-only">Search projects</span>
          <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by name or tech" className="field" />
        </label>
      </div>
      {shown.length === 0 ? (
        <div className="glass p-10 text-center">
          <p className="font-semibold text-white">No projects match your search.</p>
          <Button variant="ghost" className="mt-4" onClick={() => { setFilter('All'); setQuery('') }}>Clear filters</Button>
        </div>
      ) : (
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => <li key={p.name}><Reveal className="h-full"><ProjectCard p={p} /></Reveal></li>)}
        </ul>
      )}
    </>
  )
}
