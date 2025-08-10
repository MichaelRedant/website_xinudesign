import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description?: string;
  canonical?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  image?: string;
  keywords?: string[];
}

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  canonical,
  jsonLd,
  image,
  keywords,
}) => {
  const jsonLdArray = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
  const keywordContent = keywords?.join(", ");
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywordContent && <meta name="keywords" content={keywordContent} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {canonical && <link rel="alternate" hrefLang="nl-be" href={canonical} />}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {canonical && <meta property="og:url" content={canonical} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:site_name" content="Xinudesign" />
      <meta property="og:locale" content="nl_BE" />
      {image && <meta name="twitter:card" content="summary_large_image" />}
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
      {jsonLdArray.map((obj, index) => (
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
          key={index}
          type="application/ld+json"
        />
      ))}
    </Helmet>
  );
};

export default Seo;
