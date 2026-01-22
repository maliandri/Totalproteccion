import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nuestra Empresa | Total Protección - Distribuidor Melisam Neuquén',
  description: 'Somos Distribuidor Oficial Mayorista de Melisam en Neuquén. Más de 20 años de experiencia en protección contra incendios, extintores, sistemas de detección y extinción.',
  keywords: 'Total Protección, empresa protección incendios, distribuidor Melisam, Neuquén, seguridad contra incendios',
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
