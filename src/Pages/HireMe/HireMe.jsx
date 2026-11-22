import { FaCheckCircle, FaDownload } from 'react-icons/fa'
import SEO from '../../components/SEO'
import { Availability, Button, PageHeader, Reveal } from '../../components/ui'
import { reasons, services, site } from '../../data/site'

export default function HireMe() {
  return (
    <>
      <SEO title="Hire Me" description="Hire Alamgir Khan, a Frontend Web Developer, for React, responsive website and MERN full-stack projects." keywords="Hire Frontend Developer, Freelance React Developer" />
      <PageHeader title="Hire Me" intro="Let's build something fast, responsive and polished together." />
      <div className="mb-12 flex justify-center"><Availability on={site.available} /></div>
      <h2 className="mb-6 font-display text-2xl font-bold text-white">What I can build for you</h2>
      <ul className="grid gap-5 sm:grid-cols-2">
        {services.map(([title, text]) => (
          <li key={title}><Reveal className="h-full"><div className="glass glass-hover h-full p-6"><h3 className="font-display text-lg font-bold text-white">{title}</h3><p className="mt-2 text-sm text-slate-400">{text}</p></div></Reveal></li>
        ))}
      </ul>
      <h2 className="mb-6 mt-14 font-display text-2xl font-bold text-white">Why work with me</h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {reasons.map((r) => <li key={r} className="glass flex items-start gap-3 p-5"><FaCheckCircle className="mt-1 shrink-0 text-brand-cyan" />{r}</li>)}
      </ul>
      <section className="glass mt-14 bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 p-10 text-center">
        <h2 className="font-display text-3xl font-extrabold text-white">Have a project in mind?</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-300">Tell me what you need and I will reply with next steps.</p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button to="/contact">Start a project</Button>
          <Button href={site.cv} download variant="ghost">Download CV <FaDownload /></Button>
        </div>
      </section>
    </>
  )
}
