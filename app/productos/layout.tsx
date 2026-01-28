import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Productos contra Incendios',
  description: 'Catálogo de productos contra incendios: matafuegos, mangueras, gabinetes, espumas, equipamiento bomberos y más. Distribuidor Melisam.',
  keywords: 'productos contra incendios, matafuegos, extintores, mangueras, gabinetes, espumas, equipamiento bomberos, Melisam, Argentina',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/productos',
  },
  openGraph: {
    title: 'Productos contra Incendios | Total Protección',
    description: 'Catálogo completo de productos contra incendios. Distribuidor oficial Melisam.',
    url: 'https://totalproteccion.com.ar/productos',
    images: [{ url: '/logos/Logo-TotalProteccion.png', width: 701, height: 143, alt: 'Total Protección' }],
  },
}

export default function ProductosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
