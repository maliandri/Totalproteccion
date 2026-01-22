import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sistemas contra Incendios | Detección y Extinción | Total Protección',
  description: 'Diseño, instalación y mantenimiento de sistemas contra incendios: rociadores, extinción por agua, espuma, gases, detección convencional e inteligente. Obras llave en mano.',
  keywords: 'sistemas contra incendios, rociadores, extinción automática, detección humo, alarma incendio, instalación, mantenimiento',
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
