import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Líneas Comercializadas - Marcas de Detección de Incendios',
  description: 'Marcas líderes en detección de incendios: Notifier, VESDA, Edwards, System Sensor, Simplex y Xtralis. Distribuidor oficial en Argentina.',
  keywords: 'Notifier, VESDA, Edwards, System Sensor, Simplex, Xtralis, marcas detección incendios, distribuidor sistemas detección',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/sistemas/deteccion/lineas-comercializadas',
  },
  openGraph: {
    title: 'Líneas Comercializadas - Marcas de Detección | Total Protección',
    description: 'Marcas líderes en detección: Notifier, VESDA, Edwards, System Sensor, Simplex y Xtralis.',
    url: 'https://totalproteccion.com.ar/sistemas/deteccion/lineas-comercializadas',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
