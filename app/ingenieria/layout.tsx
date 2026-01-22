import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ingeniería y Diseño | Proyectos contra Incendios | Total Protección',
  description: 'Servicios de ingeniería: diseño de sistemas contra incendios, auditorías de seguridad, proyectos llave en mano. Cumplimiento normativo NFPA e IRAM.',
  keywords: 'ingeniería contra incendios, diseño sistemas, auditoría seguridad, proyectos NFPA, consultoría incendios',
  openGraph: {
    title: 'Ingeniería y Diseño | Total Protección',
    description: 'Diseño y auditoría de sistemas contra incendios. Proyectos llave en mano con cumplimiento normativo.',
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
