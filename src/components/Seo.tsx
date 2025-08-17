import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description?: string;
  canonical?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  image?: string;
  keywords?: string[];
  lastmod?: string;
  /** Nieuw: bepaal type voor OG/Artikel-meta */
  type?: "website" | "article";
  /** Optioneel extra’s voor articles */
  publishedTime?: string; // ISO
  authorName?: string;
  siteName?: string; // default Xinudesign
  locale?: string;   // default nl_BE
  twitterCard?: "summary" | "summary_large_image";
}

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  canonical,
  jsonLd,
  image,
  keywords,
  lastmod,
  type = "website",
  publishedTime,
  authorName,
  siteName = "Xinudesign",
  locale = "nl_BE",
  twitterCard = "summary_large_image",
}) => {
  const jsonLdArray = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
  const keywordContent = keywords?.join(", ");

  return (
    <Helmet>
      <title>{title}</title>

      {/* Basics */}
      {description && <meta name="description" content={description} />}
      {keywordContent && <meta name="keywords" content={keywordContent} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {canonical && <link rel="alternate" hrefLang="nl-be" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {canonical && <meta property="og:url" content={canonical} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />

      {/* Artikel-specifiek als type=article */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && lastmod && (
        <meta property="article:modified_time" content={lastmod} />
      )}
      {lastmod && <meta property="og:updated_time" content={lastmod} />}
      {lastmod && <meta name="last-modified" content={lastmod} />}
      {type === "article" && authorName && (
        <meta name="author" content={authorName} />
      )}

      {/* Twitter */}
      {image && <meta name="twitter:card" content={twitterCard} />}
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}

      {/* JSON-LD */}
      {jsonLdArray.map((obj, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}
    </Helmet>
  );
};

export default Seo;
