import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export const site = {
  name: 'Alamgir Khan',
  title: 'Frontend Web Developer',
  url: 'https://alamgir-portfolio.vercel.app',
  cv: '/Alamgir-Khan-Resume.pdf',
  intro: 'I build beautiful and responsive web applications. Passionate about creating intuitive user experiences and working with modern web technologies.',
  bio: 'Web Developer and technical instructor with hands-on experience building responsive front-end interfaces and full-stack web applications using HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, the MERN stack and Laravel. Currently teaching front-end, Laravel and MERN development at Aptech. Strong in API integration, responsive design, problem solving and teamwork, with a focus on clean, scalable, user-friendly solutions.',
  email: 'alamgirkhqwer@gmail.com',
  phone: '+92 315 4572266',
  location: 'Landhi, Karachi, Pakistan',
  available: true, // shows the green availability badge on Home and Hire Me
  photo: '/img/about_1.jpg',
  // Fill these in and they appear automatically on the About page. Empty = section hidden.
  languages: 'English, Urdu, Pashto',
  experience: [ // { role, company, date, description }
    { role: 'Faculty (Instructor)', company: 'Aptech, Malir Center, Karachi', date: 'Nov 2025 - Present', description: 'Teach front-end development (HTML, CSS, JavaScript, React), Laravel (PHP) and the MERN stack through lectures and hands-on labs, and mentor students toward job-ready developer skills.' },
    { role: 'Front End Developer', company: 'Silver Denim Ltd, Karachi', date: 'Jan 2025 - Oct 2025', description: 'Built responsive pages with HTML, Tailwind CSS and React.js, turned UX/UI designs into working applications, and collaborated with back-end developers using Git.' },
    { role: 'Full Stack Developer', company: 'Remote, Lahore', date: 'Oct 2024 - Dec 2024', description: 'Built Next.js applications and Laravel REST APIs with MySQL and authentication, using a mobile-first Tailwind CSS interface.' },
    { role: 'Computer Course Instructor', company: 'The Practical Coaching', date: 'Jan 2020 - Jun 2021', description: 'Taught computer operations, hardware, software and MS Office, and mentored students on individual projects.' },
  ],
  achievements: [], // 'text'
}

export const nav = [
  ['Home', '/'], ['About', '/about'], ['Education', '/education'], ['Skills', '/skills'],
  ['Projects', '/projects'], ['Contact', '/contact'], ['Hire Me', '/hire-me'],
]

export const socials = [
  { name: 'GitHub', icon: <FaGithub />, href: 'https://github.com/Alamgir-Khan-315' },
  { name: 'LinkedIn', icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/alamgir-khan-248b89259/' },
  { name: 'Instagram', icon: <FaInstagram />, href: 'https://www.instagram.com/alamgir_khan_315?igsh=MWUxejMyZ3doazJmcg==' },
  { name: 'WhatsApp', icon: <FaWhatsapp />, href: 'https://wa.me/923154572266' },
  { name: 'Email', icon: <MdEmail />, href: 'mailto:alamgirkhqwer@gmail.com' },
]

export const services = [
  ['React Web Apps', 'Fast, component-based interfaces built with React, Vite and Tailwind CSS.'],
  ['Responsive Websites', 'Layouts that look right on phones, tablets and desktops.'],
  ['MERN Full-Stack Apps', 'Login systems, dashboards and REST APIs with the MERN stack or Laravel.'],
  ['E-commerce & Dashboards', 'Product catalogs, carts, admin panels and data-driven screens.'],
]

export const reasons = [
  'Live, deployed projects you can open and test today',
  'Modern stack: React, Tailwind CSS, Vite and the MERN ecosystem',
  'Clean, responsive and accessible interfaces',
  'Professional front-end and full-stack experience since 2024',
  'Teaches React, Laravel and MERN at Aptech',
  'Easy to reach by email, phone or WhatsApp',
]
