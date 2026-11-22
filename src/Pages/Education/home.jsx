import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import SEO from "../../components/SEO";
import { PageTitle } from '../../components/Motion';

const educationData = [
  { degree: 'Bachelor in Computer Science', institution: 'FUUAST University', date: '2021 - 2025', description: 'Focused on software development, data structures, and algorithms. Completed a final year project on a full-stack web application.' },
  { degree: 'Web Development', institution: 'Memon Institute', date: '2021', description: 'An intensive program covering modern frontend technologies like React, Next.js, and advanced CSS techniques.' },
  { degree: 'High School Diploma', institution: 'Emerson College', date: '2018 - 2020', description: 'Specialized in science and mathematics, which built a strong foundation for my technical studies.' },
];

export default function Education() {
  return (
    <>
      <SEO
        title="Education"
        description="Educational background of Alamgir Khan, including a Bachelor's in Computer Science from FUUAST and web development training."
        keywords="Education, Computer Science, FUUAST, Web Development"
      />
      <section className="container flex flex-col justify-center mx-auto px-4 py-5 md:py-10">
        <PageTitle sub="My academic journey and the qualifications that have shaped my skills.">Education</PageTitle>

        <div className="relative max-w-3xl mx-auto">
          <motion.div
            initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.2 }}
            className="absolute top-0 h-full w-0.5 origin-top bg-gradient-to-b from-purple-500 to-blue-500 left-4 md:left-1/2 md:-translate-x-1/2"
          />
          {educationData.map((item, index) => {
            const left = index % 2 !== 0;
            return (
              <div key={index} className="relative pl-12 md:pl-0 mb-12">
                <motion.div
                  initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring', delay: 0.2 }}
                  className="absolute top-0 left-4 md:left-1/2 w-9 h-9 bg-[#292345] border-4 border-blue-500 rounded-full -translate-x-1/2 flex items-center justify-center z-10 shadow-lg shadow-blue-500/40"
                >
                  <FaGraduationCap className="text-blue-300 text-sm" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: left ? -60 : 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6 }} whileHover={{ scale: 1.03 }}
                  className={`glass relative md:w-[46%] p-5 rounded-2xl hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/20 transition-colors ${left ? 'md:mr-auto md:text-right' : 'md:ml-auto'}`}
                >
                  <p className="text-sm font-semibold text-blue-400 mb-1">{item.date}</p>
                  <h3 className="text-xl font-bold text-white mb-2">{item.degree}</h3>
                  <h4 className="font-medium text-gray-300 mb-3">{item.institution}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
