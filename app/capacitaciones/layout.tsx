import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Capacitaciones en Seguridad contra Incendios | Cursos y Formación',
  description: 'Capacitaciones profesionales en seguridad contra incendios: uso de extintores, RCP con Realidad Virtual, clases de fuego, tipos de matafuegos, evacuación. Certificaciones para ART en Neuquén y toda Argentina.',
  keywords: 'capacitaciones contra incendios, cursos seguridad incendio, uso de extintores, RCP realidad virtual, clases de fuego, tipos matafuegos, evacuación, seguridad laboral, ART, Neuquén, Argentina',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/capacitaciones',
  },
  openGraph: {
    title: 'Capacitaciones en Seguridad contra Incendios | Total Protección',
    description: 'Cursos de seguridad contra incendios y RCP con Realidad Virtual. Certificaciones para ART.',
    url: 'https://totalproteccion.com.ar/capacitaciones',
  },
}

export default function CapacitacionesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
