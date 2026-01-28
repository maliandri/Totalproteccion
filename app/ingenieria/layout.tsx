import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ingeniería contra Incendios',
  description: 'Ingeniería contra incendios: diseño de sistemas, auditorías y proyectos llave en mano. Cumplimiento NFPA e IRAM en Neuquén y Argentina.',
  keywords: 'ingeniería contra incendios, diseño sistemas incendio, auditoría seguridad, proyectos NFPA, llave en mano, Neuquén',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/ingenieria',
  },
  openGraph: {
    title: 'Ingeniería contra Incendios | Total Protección',
    description: 'Diseño y auditoría de sistemas contra incendios. Proyectos llave en mano con normas NFPA e IRAM.',
    url: 'https://totalproteccion.com.ar/ingenieria',
    images: [{ url: '/logos/Logo-TotalProteccion.png', width: 701, height: 143, alt: 'Total Protección' }],
  },
}

export default function IngenieriaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
