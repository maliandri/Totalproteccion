import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sistemas contra Incendios',
  description: 'Instalación y mantenimiento de sistemas contra incendios: extinción por agua, espuma y gases, detección convencional e inteligente.',
  keywords: 'sistemas contra incendios, rociadores, sprinklers, extinción automática, detección incendios, mantenimiento IFCI, Neuquén',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/sistemas',
  },
  openGraph: {
    title: 'Sistemas contra Incendios | Total Protección',
    description: 'Instalación y mantenimiento de sistemas de extinción y detección de incendios.',
    url: 'https://totalproteccion.com.ar/sistemas',
    images: [{ url: '/logos/Logo-TotalProteccion.png', width: 701, height: 143, alt: 'Total Protección' }],
  },
}

export default function SistemasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
