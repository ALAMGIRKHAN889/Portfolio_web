import { FaGraduationCap, FaCertificate } from 'react-icons/fa'
import SEO from '../../components/SEO'
import { PageHeader, Reveal } from '../../components/ui'
import { education, certifications } from '../../data/education'

export default function Education() {
  return (
    <>
      <SEO title="Education" description="The educational background of Alamgir Khan, including a Bachelor's in Computer Science from FUUAST and web development training." keywords="Education, Computer Science, FUUAST" />
      <PageHeader title="Education" intro="My academic journey and the qualifications that have shaped my skills." />
      <ol className="relative mx-auto max-w-3xl border-l-2 border-brand-blue/30 pl-8">
        {education.map((e) => (
          <li key={e.degree + e.date} className="relative mb-10">
            <span className="absolute -left-[3.15rem] flex h-9 w-9 items-center justify-center rounded-full border-2 border-brand-cyan bg-navy-900 text-brand-cyan"><FaGraduationCap /></span>
            <Reveal>
              <div className="glass glass-hover p-6">
                <p className="text-sm font-semibold text-brand-cyan">{e.date}</p>
                <h2 className="mt-1 font-display text-xl font-bold text-white">{e.degree}</h2>
                <p className="text-slate-300">{e.institution}</p>
                {e.description && <p className="mt-3 text-sm text-slate-400">{e.description}</p>}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
      {certifications.length > 0 && (
        <section className="mx-auto mt-16 max-w-3xl">
          <h2 className="mb-6 font-display text-2xl font-bold text-white">Certifications</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((c) => (
              <div key={c.name} className="glass glass-hover flex gap-4 p-5"><FaCertificate className="mt-1 text-2xl text-brand-purple" /><div><p className="font-bold text-white">{c.name}</p><p className="text-sm text-slate-400">{c.issuer} · {c.date}</p></div></div>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
