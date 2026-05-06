import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
  const siteTitle = "Alamgir Khan | Portfolio";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const siteDescription = "Portfolio of Alamgir Khan - A Creative Frontend Developer building beautiful and responsive web applications.";
  const siteKeywords = "Alamgir Khan, Frontend Developer, React Developer, Portfolio, Web Development, UI/UX";
  const siteUrl = "https://alamgir-portfolio.vercel.app"; // Update with actual URL if known
  const siteImage = "/Logo.png";

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || siteDescription} />
      <meta name="keywords" content={keywords ? `${siteKeywords}, ${keywords}` : siteKeywords} />
      <link rel="canonical" href={url || siteUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || siteDescription} />
      <meta property="og:image" content={image || siteImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url || siteUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description || siteDescription} />
      <meta property="twitter:image" content={image || siteImage} />
    </Helmet>
  );
};

export default SEO;
