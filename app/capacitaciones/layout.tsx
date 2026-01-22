import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Capacitaciones | Seguridad contra Incendios | Total Protección',
  description: 'Capacitaciones en seguridad e higiene laboral: uso de extintores, RCP con Realidad Virtual, clases de fuego, evacuación. Certificaciones para ART. Neuquén.',
  keywords: 'capacitaciones incendio, curso extintores, RCP realidad virtual, seguridad laboral, ART, Neuquén',
  openGraph: {
    title: 'Capacitaciones en Seguridad | Total Protección',
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
