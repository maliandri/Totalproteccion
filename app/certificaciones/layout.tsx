import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Certificaciones | ISO 9001, ISO 14001, IRAM, NFPA',
  description: 'Certificaciones de calidad ISO 9001, ISO 14001, normas IRAM y NFPA. Productos y servicios contra incendios certificados con los más altos estándares internacionales.',
  keywords: 'certificaciones IRAM, ISO 9001, ISO 14001, NFPA, normas seguridad incendio, calidad extintores, Bureau Veritas, habilitaciones, protección incendios certificada',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/certificaciones',
  },
  openGraph: {
    title: 'Certificaciones | Total Protección',
    description: 'Certificaciones ISO 9001, ISO 14001, IRAM y NFPA. Productos y servicios certificados contra incendios.',
    url: 'https://totalproteccion.com.ar/certificaciones',
  },
}

export default function CertificacionesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
