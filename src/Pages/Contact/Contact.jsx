import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { TiSocialLinkedin } from "react-icons/ti";
import { SlSocialGithub } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';


const contactDetails = [
  { icon: <MdAttachEmail />, text: 'alamgirkhqwer@gmail.com', Link: 'mailto:alamgirkhqwer@gmail.com' },
  { icon: <FaPhone />, text: '+92 315 4572266', Link: 'tel:+923154572266' },
  { icon: <FaWhatsapp />, text: 'WhatsApp: 03154572266', Link: 'https://wa.me/923154572266' },
  { icon: <MdOutlineLocationOn />, text: 'Landhi, Karachi, Pakistan.' },
];

const socialLinks = [
  { name: 'LinkedIn', icon: <TiSocialLinkedin />, Link: 'https://www.linkedin.com/in/alamgir-khan-248b89259/' },
  { name: 'Github', icon: <SlSocialGithub />, Link: 'https://github.com/Alamgir-Khan-315' },
  { name: 'Whatsapp', icon: <FaWhatsapp />, Link: 'https://wa.me/923154572266' },
];

import SEO from "../../components/SEO";
import { PageTitle } from "../../components/Motion";

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setIsSuccess(false);
    
    const serviceID = 'service_az0nf7t';
    const templateID = 'template_lpt6vrf';
    const publicKey = '2CXL8sfmwp89s0CUb';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {
          setSubmitMessage('Message sent successfully!');
          setIsSuccess(true);
          form.current.reset(); 
      }, () => {
          setSubmitMessage('Failed to send message. Please try again.');
          setIsSuccess(false);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
    <SEO 
      title="Contact" 
      description="Get in touch with Alamgir Khan for project inquiries, creative collaborations, or professional opportunities. My inbox is always open." 
      keywords="Contact Alamgir Khan, Hire Frontend Developer, Freelance Web Developer Karachi"
    />
    <main className='container flex flex-col justify-center mx-auto px-4 py-5 md:py-10'>

        <PageTitle sub="Have a project in mind? Let's build something great together.">Contact Me</PageTitle>

    <div className="center flex justify-center items-center min-h-[calc(100vh-30rem)]">
      <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto  md:mt-8 ">
        
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-10 text-center lg:text-left">
          <div>
            <p className="text-gray-300 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Whether you have a question or just want to say hi, my inbox is always open.
            </p>
          </div>

          <div className="space-y-6">
            {contactDetails.map((detail) => (
              <a key={detail.text} href={detail.Link} target={detail.Link ? "_blank" : undefined} rel="noopener noreferrer" className="flex justify-start gap-4 text-gray-300 hover:text-blue-400 hover:translate-x-1 transition-all group">
                <div className="text-blue-400 text-2xl group-hover:scale-110 transition-transform">{detail.icon}</div>
                <span>{detail.text}</span>
              </a>
            ))}
          </div>

          <div className="flex justify-center lg:justify-start items-center gap-4 pt-2 md:pt-4">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.Link} target="_blank" rel="noopener noreferrer" aria-label={link.name}
                 className='p-3 text-2xl rounded-full bg-gray-800/80 text-gray-300 hover:text-white hover:bg-blue-600 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300'>
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>


        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="glass p-8 rounded-3xl shadow-xl shadow-purple-500/10">
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-blue-400 mb-2 font-medium">Name</label>
              <input
                type="text" id="name" name="name" required
                className="w-full px-4 py-2 rounded-xl bg-gray-900/60 text-white border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-blue-400 mb-2 font-medium">Email</label>
              <input
                type="email" id="email" name="email" required
                className="w-full px-4 py-2 rounded-xl bg-gray-900/60 text-white border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-blue-400 mb-2 font-medium">Message</label>
              <textarea
                id="message" name="message" required rows="4"
                className="w-full px-4 py-2 rounded-xl bg-gray-900/60 text-white border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              ></textarea>
            </div>

            <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? 'Sending...' : 'Send Message'} <FaArrowRight />
            </button>

            {submitMessage && (
              <p className={`mt-4 text-center font-medium ${isSuccess ? 'text-green-400' : 'text-red-400'}`}>
                {submitMessage}
              </p>
            )}
        
          </form>
        </motion.div>
      </div>
    </div>
    </main>
    </>
  )
}
