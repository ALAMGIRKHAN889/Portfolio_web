import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { site } from '../data/site'

export default function SEO({ title, description, keywords }) {
  const { pathname } = useLocation()
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.title}`
  const desc = description || `Portfolio of ${site.name}, ${site.title}. ${site.intro}`
  const url = `${site.url}${pathname === '/' ? '' : pathname}`
  const image = `${site.url}/Logo.png`
  const kw = `${site.name}, Frontend Developer, React Developer, Portfolio${keywords ? `, ${keywords}` : ''}`
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={kw} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
