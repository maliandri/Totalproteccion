import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Capacitaciones contra Incendios',
  description: 'Cursos de seguridad contra incendios: uso de extintores, RCP con Realidad Virtual, clases de fuego y evacuación. Certificaciones ART.',
  keywords: 'capacitaciones contra incendios, cursos seguridad, uso extintores, RCP realidad virtual, clases de fuego, ART, Neuquén',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/capacitaciones',
  },
  openGraph: {
    title: 'Capacitaciones contra Incendios | Total Protección',
    description: 'Cursos de seguridad contra incendios y RCP con Realidad Virtual. Certificaciones ART.',
    url: 'https://totalproteccion.com.ar/capacitaciones',
    images: [{ url: '/logos/Logo-TotalProteccion.png', width: 701, height: 143, alt: 'Total Protección' }],
  },
}

export default function CapacitacionesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
