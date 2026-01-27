import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto | Consultá por Extintores y Sistemas contra Incendios',
  description: 'Contactá a Total Protección para consultas sobre extintores, matafuegos, sistemas contra incendios y capacitaciones. Bahía Blanca 608, Neuquén. Tel: 299 548 4575. Atención personalizada.',
  keywords: 'contacto Total Protección, teléfono, dirección Neuquén, consultas extintores, presupuesto sistemas incendio, comprar matafuegos Neuquén',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/contacto',
  },
  openGraph: {
    title: 'Contacto | Total Protección',
    description: 'Contactanos para consultas sobre protección contra incendios. Bahía Blanca 608, Neuquén.',
    url: 'https://totalproteccion.com.ar/contacto',
  },
}

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
