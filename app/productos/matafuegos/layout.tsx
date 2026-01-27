import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Matafuegos y Extintores',
  description: 'Matafuegos y extintores de todo tipo y capacidad: polvo ABC, CO2, agua, agua AFFF, polvos especiales, HCFC 123, HFC 236 y acetato de potasio. Fabricación y venta en Argentina.',
  keywords: 'matafuegos, extintores, polvo ABC, CO2, agua, AFFF, HCFC 123, HFC 236, acetato de potasio, extintores Argentina, matafuegos precio',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/productos/matafuegos',
  },
  openGraph: {
    title: 'Matafuegos y Extintores | Total Protección',
    description: 'Matafuegos y extintores de todo tipo y capacidad. Fabricación y venta en Argentina.',
    url: 'https://totalproteccion.com.ar/productos/matafuegos',
  },
}

export default function MatafuegosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
