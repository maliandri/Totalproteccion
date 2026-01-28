import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Extinción de Incendios en Vehículos Pesados',
  description: 'Sistemas de extinción automática Amerex para vehículos pesados: maquinaria minera, agrícola, forestal y de construcción. Protección confiable contra incendios.',
  keywords: 'extinción incendios vehículos pesados, Amerex, maquinaria minera, protección contra incendios, sistemas automáticos extinción',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/sistemas/extincion/vehiculos-pesados',
  },
  openGraph: {
    title: 'Extinción de Incendios en Vehículos Pesados | Total Protección',
    description: 'Sistemas de extinción automática Amerex para vehículos pesados: maquinaria minera, agrícola, forestal y de construcción.',
    url: 'https://totalproteccion.com.ar/sistemas/extincion/vehiculos-pesados',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
