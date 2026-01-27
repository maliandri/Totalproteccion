import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nuestra Empresa | Distribuidor Oficial Melisam en Neuquén',
  description: 'Total Protección es Distribuidor Oficial Mayorista de Melisam en Neuquén. Más de 20 años de experiencia en protección contra incendios: extintores, sistemas de detección, extinción y capacitaciones en toda Argentina.',
  keywords: 'Total Protección, empresa protección incendios, distribuidor Melisam, distribuidor Amerex, Neuquén, seguridad contra incendios Argentina',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/empresa',
  },
  openGraph: {
    title: 'Nuestra Empresa | Total Protección',
    description: 'Distribuidor Oficial Mayorista de Melisam en Neuquén. Expertos en protección contra incendios.',
    url: 'https://totalproteccion.com.ar/empresa',
  },
}

export default function EmpresaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
