import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ingeniería y Diseño | Proyectos Llave en Mano contra Incendios',
  description: 'Servicios de ingeniería contra incendios: diseño de sistemas, auditorías de seguridad, proyectos llave en mano. Cumplimiento normativo NFPA e IRAM. Instalaciones fijas contra incendio en Neuquén y toda Argentina.',
  keywords: 'ingeniería contra incendios, diseño sistemas incendio, auditoría seguridad, proyectos NFPA, consultoría incendios, instalaciones fijas, llave en mano, Neuquén, Argentina',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/ingenieria',
  },
  openGraph: {
    title: 'Ingeniería y Diseño | Total Protección',
    description: 'Diseño y auditoría de sistemas contra incendios. Proyectos llave en mano con cumplimiento normativo NFPA e IRAM.',
    url: 'https://totalproteccion.com.ar/ingenieria',
  },
}

export default function IngenieriaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
