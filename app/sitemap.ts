import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://totalproteccion.com.ar'

  // Páginas principales
  const mainPages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/empresa', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/contacto', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/certificaciones', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/rrhh', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/ingenieria', priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  // Productos
  const productPages = [
    { url: '/productos', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/productos/matafuegos', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/productos/matafuegos/polvo-abc', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/productos/matafuegos/co2', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/productos/matafuegos/agua', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/productos/matafuegos/agua-afff', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/productos/matafuegos/polvos-especiales', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/productos/matafuegos/hcfc-123', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/productos/matafuegos/hfc-236', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/productos/matafuegos/acetato-potasio', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/productos/gabinetes', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/productos/valvulas-hidrantes', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/productos/mangueras', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/productos/bronceria', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/productos/espumas', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/productos/dosificacion-espuma', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/productos/equipamiento-bomberos', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/productos/trajes-estructurales', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/productos/equipos-bombeo', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/productos/intervencion-rapida', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/productos/maquinas-recarga', priority: 0.7, changeFrequency: 'monthly' as const },
  ]

  // Sistemas contra incendios
  const systemPages = [
    { url: '/sistemas', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/sistemas/montaje', priority: 0.8, changeFrequency: 'monthly' as const },
    // Extinción
    { url: '/sistemas/extincion', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/sistemas/extincion/agua', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/sistemas/extincion/espuma', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/sistemas/extincion/gases', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/sistemas/extincion/cocinas', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/sistemas/extincion/autobuses', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/sistemas/extincion/cabinas-pintura', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/sistemas/extincion/helix', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/sistemas/extincion/vehiculos-pesados', priority: 0.7, changeFrequency: 'monthly' as const },
    // Detección
    { url: '/sistemas/deteccion', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/sistemas/deteccion/convencional', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/sistemas/deteccion/inteligente', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/sistemas/deteccion/aspiracion-humo', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/sistemas/deteccion/barreras-infrarrojas', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/sistemas/deteccion/camaras-termicas', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/sistemas/deteccion/elementos-perifericos', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/sistemas/deteccion/gases-explosivos', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/sistemas/deteccion/lineas-comercializadas', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/sistemas/deteccion/subcentrales', priority: 0.7, changeFrequency: 'monthly' as const },
    // Mantenimiento
    { url: '/sistemas/mantenimiento', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/sistemas/mantenimiento/instalaciones', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/sistemas/mantenimiento/gases', priority: 0.7, changeFrequency: 'monthly' as const },
  ]

  // Capacitaciones
  const trainingPages = [
    { url: '/capacitaciones', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/capacitaciones/realidad-virtual', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/capacitaciones/origen-fuego', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/capacitaciones/clases-fuego', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/capacitaciones/tipos-matafuegos', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/capacitaciones/ubicacion-dotacion', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/capacitaciones/academia', priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  const allPages = [...mainPages, ...productPages, ...systemPages, ...trainingPages]

  return allPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
