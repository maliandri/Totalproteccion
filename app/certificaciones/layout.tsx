import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Certificaciones ISO, IRAM y NFPA',
  description: 'Certificaciones ISO 9001, ISO 14001, IRAM y NFPA. Productos y servicios contra incendios con los más altos estándares.',
  keywords: 'certificaciones IRAM, ISO 9001, ISO 14001, NFPA, normas seguridad incendio, Bureau Veritas, protección incendios',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/certificaciones',
  },
  openGraph: {
    title: 'Certificaciones | Total Protección',
    description: 'Certificaciones ISO 9001, ISO 14001, IRAM y NFPA en protección contra incendios.',
    url: 'https://totalproteccion.com.ar/certificaciones',
    images: [{ url: '/logos/Logo-TotalProteccion.png', width: 701, height: 143, alt: 'Total Protección' }],
  },
}

export default function CertificacionesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
