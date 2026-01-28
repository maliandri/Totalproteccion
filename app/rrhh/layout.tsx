import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trabajá con Nosotros',
  description: 'Sumate al equipo de Total Protección. Oportunidades laborales en seguridad contra incendios en Neuquén, Argentina.',
  keywords: 'trabajo Total Protección, empleo Neuquén, vacantes seguridad incendios, oportunidades laborales',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/rrhh',
  },
  openGraph: {
    title: 'Trabajá con Nosotros | Total Protección',
    description: 'Oportunidades laborales en Total Protección. Sumate a nuestro equipo en Neuquén.',
    url: 'https://totalproteccion.com.ar/rrhh',
    images: [{ url: '/logos/Logo-TotalProteccion.png', width: 701, height: 143, alt: 'Total Protección' }],
  },
}

export default function RRHHLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
