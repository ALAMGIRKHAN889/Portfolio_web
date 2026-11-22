import { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './Pages/Home/Home'

const About = lazy(() => import('./Pages/About/About'))
const Education = lazy(() => import('./Pages/Education/home'))
const Skills = lazy(() => import('./Pages/Skills/skills'))
const Projects = lazy(() => import('./Pages/Project/Projects'))
const Contact = lazy(() => import('./Pages/Contact/Contact'))
const HireMe = lazy(() => import('./Pages/HireMe/HireMe'))
const NotFound = lazy(() => import('./Pages/NotFound/NotFound'))

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hire-me" element={<HireMe />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
