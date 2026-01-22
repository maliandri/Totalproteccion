import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Certificaciones | Normas IRAM y Calidad | Total Protección',
  description: 'Certificaciones de calidad IRAM, normas de seguridad y habilitaciones. Garantía de productos y servicios certificados en protección contra incendios.',
  keywords: 'certificaciones IRAM, normas seguridad, calidad extintores, habilitaciones, protección incendios certificada',
  openGraph: {
    title: 'Certificaciones | Total Protección',
    description: 'Certificaciones IRAM y normas de calidad en productos y servicios contra incendios.',
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
