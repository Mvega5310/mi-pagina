import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  siteName?: string
  locale?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
}

const SEO: React.FC<SEOProps> = ({
  title = 'Friendsoft - Software Development & Technology Solutions',
  description = 'Professional software development, web applications, and technology consulting services. Transform your business with cutting-edge digital solutions.',
  keywords = 'software development, web development, technology solutions, digital transformation, consulting',
  image = '/og-image.jpg',
  url = 'https://friendsoft.com',
  type = 'website',
  siteName = 'Friendsoft',
  locale = 'en_US',
  author = 'Friendsoft Team',
  publishedTime,
  modifiedTime
}) => {
  const fullTitle = title.includes('Friendsoft') ? title : `${title} | Friendsoft`
  const canonicalUrl = url.startsWith('http') ? url : `https://friendsoft.com${url}`
  const imageUrl = image.startsWith('http') ? image : `https://friendsoft.com${image}`

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: canonicalUrl,
    logo: `${canonicalUrl}/logo.png`,
    description,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'customer service',
      availableLanguage: ['English', 'Spanish']
    },
    sameAs: [
      'https://twitter.com/friendsoft',
      'https://facebook.com/friendsoft',
      'https://instagram.com/friendsoft'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tech Street',
      addressLocality: 'Tech City',
      addressRegion: 'TC',
      postalCode: '12345',
      addressCountry: 'US'
    }
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@friendsoft" />
      <meta name="twitter:creator" content="@friendsoft" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
    </Helmet>
  )
}

export default SEO