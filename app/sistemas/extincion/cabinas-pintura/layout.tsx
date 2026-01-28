import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sistemas de Extinción para Cabinas de Pintura',
  description: 'Sistemas de extinción contra incendios para cabinas de pintura y aplicaciones industriales. Protección especializada para ambientes con solventes y partículas.',
  keywords: 'extinción cabinas pintura, sistemas contra incendio industrial, protección cabinas pintura, extinción solventes, seguridad industrial',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/sistemas/extincion/cabinas-pintura',
  },
  openGraph: {
    title: 'Extinción para Cabinas de Pintura | Total Protección',
    description: 'Sistemas de extinción contra incendios para cabinas de pintura y aplicaciones industriales.',
    url: 'https://totalproteccion.com.ar/sistemas/extincion/cabinas-pintura',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
