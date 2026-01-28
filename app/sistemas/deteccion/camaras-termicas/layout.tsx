import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cámaras Térmicas de Detección Temprana',
  description: 'Cámaras térmicas para detección temprana de incendios. Tecnología infrarroja para monitoreo de puntos calientes y prevención de fuegos.',
  keywords: 'cámaras térmicas, detección temprana incendios, monitoreo infrarrojo, prevención incendios, detección puntos calientes',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/sistemas/deteccion/camaras-termicas',
  },
  openGraph: {
    title: 'Cámaras Térmicas de Detección | Total Protección',
    description: 'Cámaras térmicas para detección temprana de incendios mediante tecnología infrarroja.',
    url: 'https://totalproteccion.com.ar/sistemas/deteccion/camaras-termicas',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
