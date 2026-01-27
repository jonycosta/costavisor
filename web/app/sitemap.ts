import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.costavisor.com'

  const experiences = [
    'sunset-boat-trip', 'cocktail-experience', 'ruta-acebuchal', 'moto-route',
    'bike-route', 'buggy-route', 'tennis-catering', 'magic-table',
    'diving', 'canyoning', 'fly-costa-del-sol', 'yoga-relax',
    'ron-granada', 'granada-historica', 'malaga-arte-puerto', 'ronda-pueblos-blancos'
  ]

  const guidePosts = [
    'frigiliana-nerja-secretos', 'calas-secretas-barco'
  ]

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/investors`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/alojamientos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/packs-vacaciones`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mantenimiento`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...experiences.map(slug => ({
      url: `${baseUrl}/experience/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...guidePosts.map(slug => ({
      url: `${baseUrl}/guide/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  ]
}
