import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nuestra Empresa',
  description: 'Distribuidor Oficial Mayorista de Melisam en Neuquén. Expertos en protección contra incendios: extintores, sistemas de detección y extinción.',
  keywords: 'Total Protección, empresa protección incendios, distribuidor Melisam, distribuidor Amerex, Neuquén, Argentina',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/empresa',
  },
  openGraph: {
    title: 'Nuestra Empresa | Total Protección',
    description: 'Distribuidor Oficial Mayorista de Melisam en Neuquén. Expertos en protección contra incendios.',
    url: 'https://totalproteccion.com.ar/empresa',
    images: [{ url: '/logos/Logo-TotalProteccion.png', width: 701, height: 143, alt: 'Total Protección' }],
  },
}

export default function EmpresaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
