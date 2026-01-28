import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sistemas de Detección de Gases Explosivos',
  description: 'Sistemas de detección de gases combustibles y explosivos. Monitoreo continuo para prevención de explosiones en ambientes industriales.',
  keywords: 'detección gases explosivos, detectores gas combustible, prevención explosiones, monitoreo gases industrial, seguridad atmosferas explosivas',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/sistemas/deteccion/gases-explosivos',
  },
  openGraph: {
    title: 'Detección de Gases Explosivos | Total Protección',
    description: 'Sistemas de detección de gases combustibles y explosivos para ambientes industriales.',
    url: 'https://totalproteccion.com.ar/sistemas/deteccion/gases-explosivos',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
