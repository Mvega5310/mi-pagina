import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile' | 'service'
  siteName?: string
  locale?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
  noIndex?: boolean
  alternateLanguages?: { [key: string]: string }
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image = '/og-image.jpg',
  url,
  type = 'website',
  siteName = 'Friendsoft',
  locale,
  author = 'Friendsoft Team',
  publishedTime,
  modifiedTime,
  noIndex = false,
  alternateLanguages
}) => {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  
  // Dynamic defaults based on current language and route
  const currentLang = i18n.language || 'es'
  const defaultTitle = t('seo.title', 'Friendsoft - Desarrollo de Software y Soluciones Tecnológicas')
  const defaultDescription = t('seo.description', 'Desarrollo profesional de software, aplicaciones web y servicios de consultoría tecnológica. Transforma tu negocio con soluciones digitales de vanguardia.')
  const defaultKeywords = t('seo.keywords', 'desarrollo de software, desarrollo web, soluciones tecnológicas, transformación digital, consultoría')
  
  const finalTitle = title || defaultTitle
  const finalDescription = description || defaultDescription
  const finalKeywords = keywords || defaultKeywords
  const finalLocale = locale || (currentLang === 'es' ? 'es_ES' : 'en_US')
  const currentUrl = url || `https://friendsoft.com${location.pathname}`
  
  const fullTitle = finalTitle.includes('Friendsoft') ? finalTitle : `${finalTitle} | Friendsoft`
  const canonicalUrl = currentUrl.startsWith('http') ? currentUrl : `https://friendsoft.com${currentUrl}`
  const imageUrl = image.startsWith('http') ? image : `https://friendsoft.com${image}`
  
  // Enhanced structured data
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://friendsoft.com/#organization',
    name: siteName,
    url: 'https://friendsoft.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://friendsoft.com/logo.png',
      width: 200,
      height: 60
    },
    description: finalDescription,
    foundingDate: '2020',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+57-300-123-4567',
        contactType: 'customer service',
        availableLanguage: ['Spanish', 'English'],
        areaServed: 'CO'
      }
    ],
    sameAs: [
      'https://twitter.com/friendsoft',
      'https://facebook.com/friendsoft',
      'https://instagram.com/friendsoft',
      'https://linkedin.com/company/friendsoft'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: t('contact.info.address.location', 'Bogotá, Colombia'),
      addressLocality: 'Bogotá',
      addressRegion: 'Cundinamarca',
      addressCountry: 'CO'
    },
    serviceArea: {
      '@type': 'Country',
      name: 'Colombia'
    },
    knowsAbout: [
      'Software Development',
      'Web Development',
      'Mobile App Development',
      'Digital Transformation',
      'Technology Consulting'
    ]
  }
  
  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://friendsoft.com/#website',
    url: 'https://friendsoft.com',
    name: siteName,
    description: finalDescription,
    publisher: {
      '@id': 'https://friendsoft.com/#organization'
    },
    inLanguage: currentLang === 'es' ? 'es-CO' : 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://friendsoft.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }
  
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://friendsoft.com'
      }
    ]
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots and indexing */}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />
      <meta name="googlebot" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      
      {/* Language and locale */}
      <meta httpEquiv="Content-Language" content={finalLocale.replace('_', '-')} />
      <meta name="language" content={currentLang} />
      
      {/* Alternate languages */}
      {alternateLanguages && Object.entries(alternateLanguages).map(([lang, url]) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={finalTitle} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={finalLocale} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={finalTitle} />
      <meta name="twitter:site" content="@friendsoft" />
      <meta name="twitter:creator" content="@friendsoft" />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
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
        {JSON.stringify(organizationData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>

      {/* Preconnect and DNS prefetch */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://connect.facebook.net" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* Favicon and app icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  )
}

export default SEO