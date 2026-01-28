import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elementos Periféricos de Sistemas de Detección',
  description: 'Elementos periféricos para sistemas de detección: detectores de humo, pulsadores manuales, sirenas, módulos de control y señalización.',
  keywords: 'detectores humo, pulsadores manuales, sirenas alarma, elementos periféricos detección, accesorios sistemas incendio',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/sistemas/deteccion/elementos-perifericos',
  },
  openGraph: {
    title: 'Elementos Periféricos de Detección | Total Protección',
    description: 'Elementos periféricos para sistemas de detección: detectores, pulsadores, sirenas y módulos.',
    url: 'https://totalproteccion.com.ar/sistemas/deteccion/elementos-perifericos',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
