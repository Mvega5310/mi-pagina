import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  type?: string
  image?: string
  url?: string
  author?: string
  siteName?: string
  locale?: string
  alternateLocales?: string[]
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  type = 'website',
  image = '/og-image.jpg',
  url = '/',
  author = 'Friendsoft',
  siteName = 'Friendsoft',
  locale = 'es_ES',
  alternateLocales = ['en_US']
}) => {
  const finalTitle = title || 'Friendsoft - Desarrollo de Software'
  const finalDescription = description || 'Desarrollo profesional de software y soluciones tecnológicas'
  const finalKeywords = keywords || 'desarrollo de software, desarrollo web, aplicaciones móviles'

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={locale} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      {alternateLocales.map((altLocale) => (
        <meta key={altLocale} property="og:locale:alternate" content={altLocale} />
      ))}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#7B43D6" />
      <meta name="msapplication-TileColor" content="#7B43D6" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Favicon */}
      <link rel="icon" href="/public/images/logo.svg" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  )
}

export default SEO