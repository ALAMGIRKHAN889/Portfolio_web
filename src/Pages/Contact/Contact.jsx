import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { FaPaperPlane } from 'react-icons/fa'
import SEO from '../../components/SEO'
import { Button, PageHeader } from '../../components/ui'
import { site, socials } from '../../data/site'

const SERVICE_ID = 'service_az0nf7t'
const TEMPLATE_ID = 'template_lpt6vrf'
const PUBLIC_KEY = '2CXL8sfmwp89s0CUb'

const validate = (v) => {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email address.'
  if (v.subject.trim().length < 3) e.subject = 'Enter a subject.'
  if (v.message.trim().length < 10) e.message = 'Write at least 10 characters.'
  return e
}

export default function Contact() {
  const form = useRef(null)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', text: '' })

  const onSubmit = (ev) => {
    ev.preventDefault()
    const v = Object.fromEntries(new FormData(form.current))
    const errs = validate(v)
    setErrors(errs)
    if (Object.keys(errs).length) return
    setStatus({ type: 'sending', text: '' })
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => { setStatus({ type: 'ok', text: 'Message sent. I will get back to you soon.' }); form.current.reset() })
      .catch(() => setStatus({ type: 'error', text: `Could not send your message. Please try again or email ${site.email}.` }))
  }

  const fields = [['name', 'Name', 'text'], ['email', 'Email', 'email'], ['subject', 'Subject', 'text']]
  const info = [[<MdEmail key="e" />, site.email, `mailto:${site.email}`], [<MdPhone key="p" />, site.phone, `tel:${site.phone.replace(/\s/g, '')}`], [<MdLocationOn key="l" />, site.location]]

  return (
    <>
      <SEO title="Contact" description="Get in touch with Alamgir Khan for project inquiries, collaborations, or job opportunities." keywords="Contact, Hire Frontend Developer, Freelance Web Developer Karachi" />
      <PageHeader title="Contact Me" intro="Have a project or a question? Send a message and I will reply." />
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-2">
          <ul className="glass space-y-4 p-6">
            {info.map(([icon, text, href]) => (
              <li key={text} className="flex items-center gap-3"><span className="text-xl text-brand-cyan">{icon}</span>{href ? <a href={href} className="hover:text-white">{text}</a> : text}</li>
            ))}
          </ul>
          <ul className="flex gap-3">
            {socials.map((s) => <li key={s.name}><a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="glass glass-hover block p-3 text-xl">{s.icon}</a></li>)}
          </ul>
        </div>
        <form ref={form} onSubmit={onSubmit} noValidate className="glass space-y-5 p-6 lg:col-span-3">
          {fields.map(([id, label, type]) => (
            <div key={id}>
              <label htmlFor={id} className="mb-2 block text-sm font-semibold text-white">{label}</label>
              <input id={id} name={id} type={type} className="field" aria-invalid={!!errors[id]} aria-describedby={errors[id] ? `${id}-err` : undefined} />
              {errors[id] && <p id={`${id}-err`} className="mt-1 text-sm text-rose-400">{errors[id]}</p>}
            </div>
          ))}
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-semibold text-white">Message</label>
            <textarea id="message" name="message" rows="5" className="field" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-err' : undefined} />
            {errors.message && <p id="message-err" className="mt-1 text-sm text-rose-400">{errors.message}</p>}
          </div>
          <Button type="submit" disabled={status.type === 'sending'} className="w-full">
            {status.type === 'sending' ? 'Sending…' : <>Send Message <FaPaperPlane /></>}
          </Button>
          <p role="status" aria-live="polite" className={`text-center text-sm font-medium ${status.type === 'ok' ? 'text-emerald-400' : 'text-rose-400'}`}>{status.text}</p>
        </form>
      </div>
    </>
  )
}
