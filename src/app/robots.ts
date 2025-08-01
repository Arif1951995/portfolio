import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://muhammad-arif.dev'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },

    host: baseUrl,
    sitemap: baseUrl + '/sitemap.xml',
  }
}
