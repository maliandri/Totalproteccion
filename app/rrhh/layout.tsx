import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trabajá con Nosotros | Oportunidades Laborales',
  description: 'Sumate al equipo de Total Protección. Buscamos profesionales apasionados por la seguridad contra incendios. Enviá tu CV y formá parte de nuestro equipo en Neuquén, Argentina.',
  keywords: 'trabajo Total Protección, empleo Neuquén, recursos humanos, vacantes seguridad incendios, CV, oportunidades laborales, empleo protección contra incendios',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/rrhh',
  },
  openGraph: {
    title: 'Trabajá con Nosotros | Total Protección',
    description: 'Oportunidades laborales en Total Protección. Sumate a nuestro equipo en Neuquén.',
    url: 'https://totalproteccion.com.ar/rrhh',
  },
}

export default function RRHHLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
