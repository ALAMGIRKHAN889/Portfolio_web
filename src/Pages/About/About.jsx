import { MdEmail, MdPhone, MdLocationOn, MdLanguage } from 'react-icons/md'
import { FaDownload } from 'react-icons/fa'
import SEO from '../../components/SEO'
import { Button, PageHeader, Reveal } from '../../components/ui'
import { site, socials } from '../../data/site'
import { projects } from '../../data/projects'
import { skills } from '../../data/skills'

export default function About() {
  const details = [[<MdEmail key="e" />, site.email, `mailto:${site.email}`], [<MdPhone key="p" />, site.phone, `tel:${site.phone.replace(/\s/g, '')}`], [<MdLocationOn key="l" />, site.location], [<MdLanguage key="g" />, site.languages]]
  const stats = [[projects.length, 'Projects built'], [projects.filter((p) => p.Live).length, 'Live demos'], [skills.length, 'Technologies']]
  return (
    <>
      <SEO title="About" description={`Learn more about ${site.name}, a ${site.title} building efficient and scalable web solutions.`} keywords="About Alamgir Khan, Web Developer Karachi" />
      <PageHeader title="About Me" intro={`${site.name} · ${site.title}`} />
      <div className="grid gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="glass p-5">
            <img src={site.photo} alt={`${site.name}, ${site.title}`} loading="lazy" className="h-72 w-full rounded-xl object-cover object-top" />
            <ul className="mt-5 space-y-3">
              {details.map(([icon, text, href]) => (
                <li key={text} className="flex items-center gap-3 text-slate-300">
                  <span className="text-xl text-brand-cyan">{icon}</span>
                  {href ? <a href={href} className="hover:text-white">{text}</a> : text}
                </li>
              ))}
            </ul>
            <ul className="mt-5 flex gap-3">
              {socials.map((s) => (
                <li key={s.name}><a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="block rounded-full border border-white/10 bg-white/5 p-2.5 text-lg transition hover:border-brand-cyan/50 hover:text-white">{s.icon}</a></li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-3">
          <h2 className="font-display text-2xl font-bold text-white">Hi, I&apos;m {site.name}</h2>
          <p className="mt-4 leading-relaxed text-slate-300">{site.bio}</p>
          <dl className="mt-8 grid grid-cols-3 gap-4">
            {stats.map(([n, label]) => (
              <div key={label} className="glass p-4 text-center">
                <dd className="grad-text font-display text-3xl font-extrabold">{n}</dd>
                <dt className="mt-1 text-xs text-slate-400">{label}</dt>
              </div>
            ))}
          </dl>
          {site.experience.length > 0 && (
            <section className="mt-10"><h3 className="mb-4 font-display text-xl font-bold text-white">Experience</h3>
              <div className="space-y-4">{site.experience.map((x) => (
                <div key={x.role + x.date} className="glass p-5"><p className="text-sm text-brand-cyan">{x.date}</p><p className="font-bold text-white">{x.role} · {x.company}</p><p className="mt-1 text-sm text-slate-400">{x.description}</p></div>
              ))}</div>
            </section>
          )}
          {site.achievements.length > 0 && (
            <section className="mt-10"><h3 className="mb-4 font-display text-xl font-bold text-white">Achievements</h3>
              <ul className="list-disc space-y-2 pl-5">{site.achievements.map((a) => <li key={a}>{a}</li>)}</ul>
            </section>
          )}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button to="/contact">Contact Me</Button>
            <Button href={site.cv} download variant="ghost">Download CV <FaDownload /></Button>
          </div>
        </Reveal>
      </div>
    </>
  )
}
