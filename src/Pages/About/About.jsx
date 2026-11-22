import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SlSocialGithub } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram, FaWhatsapp, FaDownload } from "react-icons/fa";
import { MdOutlineLocationOn, MdAttachEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import SEO from '../../components/SEO';
import { PageTitle, Reveal } from '../../components/Motion';

const socialLinks = [
  { name: 'Email', icon: <MdAttachEmail />, href: 'mailto:alamgirkhqwer@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you' },
  { name: 'Instagram', icon: <FaInstagram />, href: 'https://www.instagram.com/alamgir_khan_315?igsh=MWUxejMyZ3doazJmcg==' },
  { name: 'Github', icon: <SlSocialGithub />, href: 'https://github.com/Alamgir-Khan-315' },
  { name: 'LinkedIn', icon: <TiSocialLinkedin />, href: 'https://www.linkedin.com/in/alamgir-khan-248b89259/' },
  { name: 'Whatsapp', icon: <FaWhatsapp />, href: 'https://wa.me/923154572266' }
];

const contactDetails = [
  { icon: <MdAttachEmail />, text: 'alamgirkhqwer@gmail.com', href: 'mailto:alamgirkhqwer@gmail.com' },
  { icon: <FaPhone />, text: '+92 315 4572266', href: 'tel:+923154572266' },
  { icon: <FaWhatsapp />, text: 'WhatsApp: 03154572266', href: 'https://wa.me/923154572266' },
  { icon: <MdOutlineLocationOn />, text: 'Landhi, Karachi.' }
];

export default function About() {
  const handleShowPDF = () => window.open('/Alamgir-Khan-Resume.pdf', '_blank');

  return (
    <>
      <SEO
        title="About Me"
        description="Learn more about Alamgir Khan, a Full Stack Developer passionate about building efficient and scalable web solutions with the MERN stack."
        keywords="About Alamgir Khan, Full Stack Developer Karachi, MERN Developer"
      />
      <section className="container flex flex-col justify-center mx-auto px-4 py-5 md:py-10">
        <PageTitle>About Me</PageTitle>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 opacity-60 blur group-hover:opacity-100 transition duration-500" />
              <img className="relative h-[280px] w-full object-cover object-top rounded-2xl" src="/img/about_1.jpg" alt="Alamgir Khan - Full Stack Developer" />
            </div>

            <div className="glass p-6 rounded-2xl space-y-4">
              {contactDetails.map((d) => {
                const Row = d.href ? 'a' : 'div';
                return (
                  <Row key={d.text} href={d.href} target={d.href?.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-300 hover:text-white hover:translate-x-1 transition-all">
                    <div className="text-blue-400 text-2xl">{d.icon}</div>
                    <span>{d.text}</span>
                  </Row>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3 text-center lg:text-left"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">Alamgir Khan - Full Stack Developer</h2>
            <p className="text-gray-300 mb-4 text-justify leading-relaxed">
              Deeply curious about technology, I build complete web applications from the database to the
              user interface. On the frontend I craft responsive, animated interfaces with React, Tailwind CSS
              and modern JavaScript. On the backend I design REST APIs with Node.js and Express, handle
              authentication, and model data with MongoDB.
            </p>
            <p className="text-gray-300 mb-8 text-justify leading-relaxed">
              From fee management and property management systems to e-commerce stores and dashboards,
              I enjoy solving real-world problems with clean, scalable and user-friendly solutions,
              and I collaborate well with teams.
            </p>

            <div className="mb-10 flex flex-wrap justify-center lg:justify-start items-center gap-4">
              {socialLinks.map((link, i) => (
                <motion.a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}
                  initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 + i * 0.08 }}
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  className="p-3 text-2xl rounded-full glass text-gray-300 hover:text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/30 transition-colors">
                  {link.icon}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact" className="btn-primary">Contact me</Link>
              <button onClick={handleShowPDF} className="btn-outline">Download CV <FaDownload /></button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
