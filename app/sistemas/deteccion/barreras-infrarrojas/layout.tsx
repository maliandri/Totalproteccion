import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Barreras Infrarrojas de Detección de Incendios',
  description: 'Barreras infrarrojas lineales para detección de humo en grandes espacios. Ideal para depósitos, hangares, centros comerciales y naves industriales.',
  keywords: 'barreras infrarrojas, detectores lineales humo, detección grandes espacios, Notifier, detección incendios industrial',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/sistemas/deteccion/barreras-infrarrojas',
  },
  openGraph: {
    title: 'Barreras Infrarrojas de Detección | Total Protección',
    description: 'Barreras infrarrojas lineales para detección de humo en grandes espacios.',
    url: 'https://totalproteccion.com.ar/sistemas/deteccion/barreras-infrarrojas',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
