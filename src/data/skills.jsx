import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from 'react-icons/io5'
import { GrReactjs } from 'react-icons/gr'
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiNodedotjs, SiMongodb, SiExpress, SiLaravel, SiPhp, SiMysql, SiGit } from 'react-icons/si'

// level = proficiency percentage shown by the progress bar. Adjust to match your own assessment.
export const skills = [
  { name: 'HTML', icon: <IoLogoHtml5 />, level: 90, link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS', icon: <IoLogoCss3 />, level: 85, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'JavaScript', icon: <IoLogoJavascript />, level: 85, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript', icon: <SiTypescript />, level: 60, link: 'https://www.typescriptlang.org/docs/' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 90, link: 'https://tailwindcss.com/docs/installation' },
  { name: 'React.js', icon: <GrReactjs />, level: 85, link: 'https://react.dev/' },
  { name: 'Next.js', icon: <SiNextdotjs />, level: 65, link: 'https://nextjs.org/docs' },
  { name: 'Node.js', icon: <SiNodedotjs />, level: 60, link: 'https://nodejs.org/en/docs' },
  { name: 'MongoDB', icon: <SiMongodb />, level: 60, link: 'https://www.mongodb.com/docs/' },
  { name: 'Express.js', icon: <SiExpress />, level: 60, link: 'https://expressjs.com/' },
  { name: 'Laravel', icon: <SiLaravel />, level: 65, link: 'https://laravel.com/docs' },
  { name: 'PHP', icon: <SiPhp />, level: 65, link: 'https://www.php.net/docs.php' },
  { name: 'MySQL', icon: <SiMysql />, level: 60, link: 'https://dev.mysql.com/doc/' },
  { name: 'Git', icon: <SiGit />, level: 75, link: 'https://git-scm.com/doc' },
]
