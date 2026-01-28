import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Matafuegos y Extintores',
  description: 'Matafuegos de todo tipo: polvo ABC, CO2, agua, AFFF, HCFC 123, HFC 236 y acetato de potasio. Venta en Argentina.',
  keywords: 'matafuegos, extintores, polvo ABC, CO2, agua, AFFF, HCFC 123, HFC 236, acetato de potasio, Argentina',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/productos/matafuegos',
  },
  openGraph: {
    title: 'Matafuegos y Extintores | Total Protección',
    description: 'Matafuegos de todo tipo y capacidad. Fabricación y venta en Argentina.',
    url: 'https://totalproteccion.com.ar/productos/matafuegos',
    images: [{ url: '/logos/Logo-TotalProteccion.png', width: 701, height: 143, alt: 'Total Protección' }],
  },
}

export default function MatafuegosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
