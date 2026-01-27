import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Productos contra Incendios | Extintores, Mangueras, Gabinetes',
  description: 'Catálogo completo de productos contra incendios: matafuegos, mangueras, gabinetes, broncería, espumas, equipamiento para bomberos, trajes estructurales, equipos de bombeo, válvulas e hidrantes. Distribuidor oficial Melisam en Argentina.',
  keywords: 'productos contra incendios, matafuegos, extintores, mangueras contra incendio, gabinetes extintores, broncería incendio, espumas contra incendio, equipamiento bomberos, trajes estructurales, equipos bombeo, válvulas hidrantes, Melisam, Argentina, Neuquén',
  alternates: {
    canonical: 'https://totalproteccion.com.ar/productos',
  },
  openGraph: {
    title: 'Productos contra Incendios | Total Protección',
    description: 'Catálogo completo de productos contra incendios: matafuegos, mangueras, gabinetes, espumas y más. Distribuidor oficial Melisam.',
    url: 'https://totalproteccion.com.ar/productos',
  },
}

export default function ProductosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
