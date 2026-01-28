import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contactá a Total Protección: extintores, sistemas contra incendios y capacitaciones. Bahía Blanca 608, Neuquén. Tel: 299 548 4575.',
  keywords: 'contacto Total Protección, teléfono, dirección Neuquén, consultas extintores, presupuesto sistemas incendio',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/contacto',
  },
  openGraph: {
    title: 'Contacto | Total Protección',
    description: 'Contactanos para consultas sobre protección contra incendios. Bahía Blanca 608, Neuquén.',
    url: 'https://totalproteccion.com.ar/contacto',
    images: [{ url: '/logos/Logo-TotalProteccion.png', width: 701, height: 143, alt: 'Total Protección' }],
  },
}

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
