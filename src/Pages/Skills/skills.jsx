import SEO from '../../components/SEO'
import { PageHeader, ProgressBar, Reveal } from '../../components/ui'
import { skills } from '../../data/skills'

export default function Skills() {
  return (
    <>
      <SEO title="Skills" description="Technical skills of Alamgir Khan: React, Next.js, TypeScript, Tailwind CSS, Node.js and more." keywords="Frontend Skills, React, TypeScript, JavaScript" />
      <PageHeader title="Skills" intro="The tools and technologies I use to build modern web applications." />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <li key={s.name}>
            <Reveal>
              <a href={s.link} target="_blank" rel="noopener noreferrer" className="glass glass-hover group block p-6">
                <div className="flex items-center justify-between">
                  <span className="text-4xl text-brand-cyan transition group-hover:text-brand-purple">{s.icon}</span>
                  <span className="font-display text-lg font-bold text-white">{s.level}%</span>
                </div>
                <p className="mb-3 mt-4 font-semibold text-white">{s.name}</p>
                <ProgressBar level={s.level} />
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </>
  )
}
