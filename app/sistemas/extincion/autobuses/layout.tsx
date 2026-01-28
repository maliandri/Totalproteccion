import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Extinción de Incendios en Autobuses y Transporte Escolar',
  description: 'Sistemas de extinción Amerex para autobuses urbanos y transporte escolar. Protección automática del compartimento del motor contra incendios.',
  keywords: 'extinción incendios autobuses, transporte escolar, Amerex, sistemas contra incendio buses, protección vehículos pasajeros',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/sistemas/extincion/autobuses',
  },
  openGraph: {
    title: 'Extinción de Incendios en Autobuses | Total Protección',
    description: 'Sistemas de extinción Amerex para autobuses urbanos y transporte escolar. Protección automática contra incendios.',
    url: 'https://totalproteccion.com.ar/sistemas/extincion/autobuses',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
