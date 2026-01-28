import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sistema Helix - Extinción en Unidades de Control de Contaminación PCU',
  description: 'Sistema Helix para extinción de incendios en unidades de control de contaminación (PCU). Protección especializada para sistemas de filtración industrial.',
  keywords: 'sistema Helix, extinción PCU, unidades control contaminación, protección filtros industriales, sistemas contra incendio industrial',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/sistemas/extincion/helix',
  },
  openGraph: {
    title: 'Sistema Helix - Extinción PCU | Total Protección',
    description: 'Sistema Helix para extinción de incendios en unidades de control de contaminación (PCU).',
    url: 'https://totalproteccion.com.ar/sistemas/extincion/helix',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
