import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sistemas de Aspiración de Humo VESDA',
  description: 'Sistemas VESDA de detección temprana por aspiración de humo. Tecnología de alta sensibilidad para protección de activos críticos y data centers.',
  keywords: 'VESDA, aspiración humo, detección temprana incendios, Xtralis, protección data centers, detección alta sensibilidad',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/sistemas/deteccion/aspiracion-humo',
  },
  openGraph: {
    title: 'Sistemas VESDA de Aspiración de Humo | Total Protección',
    description: 'Sistemas VESDA de detección temprana por aspiración de humo. Tecnología de alta sensibilidad.',
    url: 'https://totalproteccion.com.ar/sistemas/deteccion/aspiracion-humo',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
