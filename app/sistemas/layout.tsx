import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sistemas contra Incendios | Extinción, Detección y Mantenimiento',
  description: 'Diseño, instalación y mantenimiento de sistemas contra incendios: rociadores automáticos, extinción por agua, espuma y gases, detección convencional e inteligente. Obras llave en mano en Neuquén y toda Argentina.',
  keywords: 'sistemas contra incendios, rociadores automáticos, sprinklers, extinción automática, detección incendios, alarma incendio, mantenimiento IFCI, instalaciones fijas contra incendio, Neuquén, Argentina',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/sistemas',
  },
  openGraph: {
    title: 'Sistemas contra Incendios | Total Protección',
    description: 'Instalación y mantenimiento de sistemas de extinción y detección de incendios. Obras llave en mano.',
    url: 'https://totalproteccion.com.ar/sistemas',
  },
}

export default function SistemasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
