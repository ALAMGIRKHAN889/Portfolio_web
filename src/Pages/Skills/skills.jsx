import { motion } from "framer-motion";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiExpress, SiGit, SiPostman, SiJsonwebtokens } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import SEO from "../../components/SEO";
import { PageTitle } from "../../components/Motion";

const groups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: <IoLogoHtml5 />, link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'CSS', icon: <IoLogoCss3 />, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { name: 'JavaScript', icon: <IoLogoJavascript />, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'TypeScript', icon: <SiTypescript />, link: 'https://www.typescriptlang.org/docs/' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, link: 'https://tailwindcss.com/docs/installation' },
      { name: 'React.js', icon: <GrReactjs />, link: 'https://react.dev/' },
      { name: 'Next.js', icon: <SiNextdotjs />, link: 'https://nextjs.org/docs' },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Node.js', icon: <IoLogoNodejs />, link: 'https://nodejs.org/en/docs' },
      { name: 'Express.js', icon: <SiExpress />, link: 'https://expressjs.com/' },
      { name: 'MongoDB', icon: <SiMongodb />, link: 'https://www.mongodb.com/docs/' },
      { name: 'REST APIs', icon: <TbApi />, link: 'https://developer.mozilla.org/en-US/docs/Glossary/REST' },
      { name: 'JWT Auth', icon: <SiJsonwebtokens />, link: 'https://jwt.io/introduction' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <SiGit />, link: 'https://git-scm.com/doc' },
      { name: 'Postman', icon: <SiPostman />, link: 'https://learning.postman.com/' },
    ],
  },
];

const all = groups.flatMap((g) => g.skills);

export default function Skills() {
  return (
    <>
      <SEO
        title="Skills"
        description="Technical skills of Alamgir Khan: React, Next.js, TypeScript, Tailwind CSS, Node.js, Express and MongoDB."
        keywords="Full Stack Skills, MERN Skills, React, Node.js, MongoDB, Express"
      />
      <section className="container flex flex-col justify-center mx-auto px-4 py-5 md:py-10">
        <PageTitle sub="Frontend to backend: the tools and technologies I use to build complete products.">Skills</PageTitle>

        <div className="overflow-hidden mb-14 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
          <div className="marquee flex w-max gap-4">
            {[...all, ...all].map((s, i) => (
              <div key={i} className="glass flex items-center gap-2 px-5 py-2 rounded-full text-gray-200 whitespace-nowrap">
                <span className="text-blue-400 text-xl">{s.icon}</span>{s.name}
              </div>
            ))}
          </div>
        </div>

        {groups.map((g) => (
          <div key={g.title} className="mb-12">
            <motion.h2
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="text-xl md:text-2xl font-bold text-blue-400 mb-5 flex items-center gap-3"
            >
              <span className="h-1 w-8 rounded bg-gradient-to-r from-purple-500 to-blue-500" /> {g.title}
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {g.skills.map((skill, i) => (
                <motion.a
                  key={skill.name} href={skill.link} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -8, rotate: -1 }}
                  className="group glass flex flex-col items-center justify-center gap-4 p-6 rounded-2xl hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-colors"
                >
                  <div className="text-5xl md:text-6xl text-gray-300 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300">{skill.icon}</div>
                  <p className="font-semibold text-white text-center">{skill.name}</p>
                </motion.a>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
