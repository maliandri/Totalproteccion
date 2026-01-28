import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Subcentrales de Comando de Extinción',
  description: 'Paneles de control y subcentrales para sistemas de extinción de incendios. Comando y monitoreo de sistemas automáticos de supresión.',
  keywords: 'subcentrales extinción, paneles control incendios, comando sistemas extinción, monitoreo supresión incendios',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/sistemas/deteccion/subcentrales',
  },
  openGraph: {
    title: 'Subcentrales de Comando de Extinción | Total Protección',
    description: 'Paneles de control y subcentrales para sistemas de extinción de incendios.',
    url: 'https://totalproteccion.com.ar/sistemas/deteccion/subcentrales',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
