import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trabaja con Nosotros | RRHH | Total Protección',
  description: 'Sumate al equipo de Total Protección. Buscamos profesionales apasionados por la seguridad contra incendios. Enviá tu CV y formá parte de nuestro equipo en Neuquén.',
  keywords: 'trabajo Total Protección, empleo Neuquén, recursos humanos, vacantes seguridad incendios, CV',
  openGraph: {
    title: 'Trabaja con Nosotros | Total Protección',
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
