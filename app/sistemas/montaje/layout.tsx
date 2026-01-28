import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Montaje de Sistemas Contra Incendios',
  description: 'Servicio profesional de montaje e instalación de sistemas contra incendios. Equipos certificados y personal especializado para todo tipo de proyectos.',
  keywords: 'montaje sistemas incendios, instalación contra incendios, montaje detección, instalación extinción, servicio instalación incendios',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/sistemas/montaje',
  },
  openGraph: {
    title: 'Montaje de Sistemas Contra Incendios | Total Protección',
    description: 'Servicio profesional de montaje e instalación de sistemas contra incendios.',
    url: 'https://totalproteccion.com.ar/sistemas/montaje',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
