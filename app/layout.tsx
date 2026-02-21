import type { Metadata, Viewport } from 'next'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  metadataBase: new URL('https://totalproteccion.com.ar'),
  title: {
    default: 'Total Protección | Soluciones Integrales en Protección Contra Incendio',
    template: '%s | Total Protección',
  },
  description: 'Distribuidor Oficial Mayorista de Melisam. Venta, instalación y mantenimiento de extintores y sistemas contra incendios en Neuquén y Argentina.',
  keywords: 'protección contra incendios, extintores, detectores de humo, sistemas contra incendio, matafuegos, rociadores automáticos, mangueras contra incendio, gabinetes para extintores, espumas contra incendio, equipamiento bomberos, Argentina, Neuquén',
  authors: [{ name: 'Total Protección' }],
  creator: 'Total Protección',
  publisher: 'Total Protección',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://totalproteccion.com.ar',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://totalproteccion.com.ar',
    siteName: 'Total Protección',
    title: 'Total Protección | Soluciones en Protección Contra Incendio',
    description: 'Distribuidor Oficial Mayorista de Melisam. Sistemas de protección contra incendios en Neuquén, Argentina.',
    images: [
      {
        url: '/logos/Logo-TotalProteccion.png',
        width: 701,
        height: 143,
        alt: 'Total Protección - Protección Contra Incendios',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Total Protección | Protección Contra Incendio',
    description: 'Distribuidor Oficial Mayorista de Melisam. Sistemas de protección contra incendios en Argentina.',
    images: ['/logos/Logo-TotalProteccion.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a365d',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Total Protección',
  description: 'Distribuidor Oficial Mayorista de Melisam. Venta, instalación y mantenimiento de sistemas contra incendios.',
  url: 'https://totalproteccion.com.ar',
  logo: 'https://totalproteccion.com.ar/logos/Logo-TotalProteccion.png',
  image: 'https://totalproteccion.com.ar/logos/Logo-TotalProteccion.png',
  telephone: '+54 299 548 4575',
  email: 'totalprotecciona@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Fava 205',
    addressLocality: 'Neuquén',
    addressRegion: 'Neuquén',
    postalCode: '8300',
    addressCountry: 'AR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -38.9615935,
    longitude: -68.0506263,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  priceRange: '$$',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: -38.9615935,
      longitude: -68.0506263,
    },
    geoRadius: '500000',
  },
  sameAs: [
    'https://www.instagram.com/totalproteccion.nqn/',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Productos y Servicios contra Incendios',
    itemListElement: [
      { '@type': 'OfferCatalog', name: 'Matafuegos / Extintores', url: 'https://totalproteccion.com.ar/productos/matafuegos' },
      { '@type': 'OfferCatalog', name: 'Mangueras de Incendio', url: 'https://totalproteccion.com.ar/productos/mangueras' },
      { '@type': 'OfferCatalog', name: 'Gabinetes para Mangueras y Extintores', url: 'https://totalproteccion.com.ar/productos/gabinetes' },
      { '@type': 'OfferCatalog', name: 'Broncería para Incendio', url: 'https://totalproteccion.com.ar/productos/bronceria' },
      { '@type': 'OfferCatalog', name: 'Máquinas para Talleres de Recarga', url: 'https://totalproteccion.com.ar/productos/maquinas-recarga' },
      { '@type': 'OfferCatalog', name: 'Unidades de Intervención Rápida', url: 'https://totalproteccion.com.ar/productos/intervencion-rapida' },
      { '@type': 'OfferCatalog', name: 'Sistemas de Dosificación de Espuma', url: 'https://totalproteccion.com.ar/productos/dosificacion-espuma' },
      { '@type': 'OfferCatalog', name: 'Espumas contra Incendio', url: 'https://totalproteccion.com.ar/productos/espumas' },
      { '@type': 'OfferCatalog', name: 'Equipamiento para Bomberos', url: 'https://totalproteccion.com.ar/productos/equipamiento-bomberos' },
      { '@type': 'OfferCatalog', name: 'Trajes Estructurales', url: 'https://totalproteccion.com.ar/productos/trajes-estructurales' },
      { '@type': 'OfferCatalog', name: 'Equipos de Bombeo', url: 'https://totalproteccion.com.ar/productos/equipos-bombeo' },
      { '@type': 'OfferCatalog', name: 'Válvulas, Postes e Hidrantes', url: 'https://totalproteccion.com.ar/productos/valvulas-hidrantes' },
      { '@type': 'Service', name: 'Sistemas de Extinción de Incendios', url: 'https://totalproteccion.com.ar/sistemas/extincion' },
      { '@type': 'Service', name: 'Sistemas de Detección de Incendios', url: 'https://totalproteccion.com.ar/sistemas/deteccion' },
      { '@type': 'Service', name: 'Mantenimiento de Instalaciones Fijas contra Incendios', url: 'https://totalproteccion.com.ar/sistemas/mantenimiento' },
      { '@type': 'Service', name: 'Capacitaciones en Seguridad contra Incendios', url: 'https://totalproteccion.com.ar/capacitaciones' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/x-icon" href="/logos/favicon/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/logos/favicon/favicon.svg" />
        <link rel="icon" type="image/png" sizes="96x96" href="/logos/favicon/favicon-96x96.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logos/favicon/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
