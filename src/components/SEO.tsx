import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
  schema?: Record<string, unknown>
}

const BASE = 'https://learn.rald.cloud'
const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'RALD',
  url: 'https://rald.cloud',
  logo: 'https://rald.cloud/rald-logo.png',
  sameAs: ['https://learn.rald.cloud', 'https://trust.rald.cloud', 'https://status.rald.cloud'],
  description: 'Pan-African digital infrastructure — identity, commerce, payments, and communications.',
  foundingDate: '2024',
  areaServed: 'Africa',
}

export default function SEO({ title, description, path, type = 'website', schema }: SEOProps) {
  const fullTitle = `${title} — RALD Learn`
  const url = `${BASE}${path}`

  useEffect(() => {
    document.title = fullTitle

    const setMeta = (name: string, content: string, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el) }
      el.content = content
    }

    setMeta('description', description)
    setMeta('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1')

    // Open Graph
    setMeta('og:type', type, 'property')
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', url, 'property')
    setMeta('og:site_name', 'RALD Learn', 'property')
    setMeta('og:image', `${BASE}/og-image.png`, 'property')
    setMeta('og:locale', 'en_US', 'property')

    // Twitter / X
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', description)
    setMeta('twitter:image', `${BASE}/og-image.png`)
    setMeta('twitter:site', '@raldcloud')

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.href = url

    // JSON-LD
    const jsonLd = schema ?? {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'TechArticle' : 'WebPage',
      name: fullTitle,
      description,
      url,
      isPartOf: { '@type': 'WebSite', name: 'RALD Learn', url: BASE },
      publisher: ORG_SCHEMA,
      inLanguage: 'en',
      dateModified: new Date().toISOString().split('T')[0],
    }

    let ldScript = document.getElementById('json-ld') as HTMLScriptElement | null
    if (!ldScript) {
      ldScript = document.createElement('script')
      ldScript.id = 'json-ld'
      ldScript.type = 'application/ld+json'
      document.head.appendChild(ldScript)
    }
    ldScript.textContent = JSON.stringify([ORG_SCHEMA, jsonLd])
  }, [fullTitle, description, url, type, schema])

  return null
}
