import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Productos | Extintores, Mangueras, Gabinetes | Total Protección',
  description: 'Catálogo completo de productos contra incendios: matafuegos, mangueras, gabinetes, válvulas, hidrantes, equipamiento para bomberos. Distribuidor oficial Melisam.',
  keywords: 'extintores, matafuegos, mangueras incendio, gabinetes, hidrantes, válvulas, equipamiento bomberos, Melisam',
  openGraph: {
    title: 'Productos contra Incendios | Total Protección',
    description: 'Catálogo completo: extintores, mangueras, gabinetes, hidrantes y más. Distribuidor oficial Melisam.',
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
