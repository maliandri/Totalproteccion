import type { Metadata, Viewport } from 'next'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  metadataBase: new URL('https://totalproteccion.com.ar'),
  title: 'Total Protección | Soluciones Integrales en Protección Contra Incendio',
  description: 'Distribuidor Oficial Mayorista de Melisam en Argentina. Venta, instalación y mantenimiento de extintores, detectores de humo, y sistemas automáticos de protección contra incendios.',
  keywords: 'protección contra incendios, extintores, detectores de humo, sistemas contra incendio, matafuegos, rociadores automáticos, Argentina',
  authors: [{ name: 'Total Protección' }],
  creator: 'Total Protección',
  publisher: 'Total Protección',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://totalproteccion.com.ar',
    siteName: 'Total Protección',
    title: 'Total Protección | Soluciones en Protección Contra Incendio',
    description: 'Distribuidor Oficial Mayorista de Melisam. Sistemas de protección contra incendios en Argentina.',
    images: [
      {
        url: '/logos/Logo-TotalProteccion.png',
        width: 701,
        height: 143,
        alt: 'Total Protección Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Total Protección | Protección Contra Incendio',
    description: 'Sistemas de protección contra incendios en Argentina',
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
    streetAddress: 'Bahía Blanca 608',
    addressLocality: 'Neuquén',
    addressRegion: 'Neuquén',
    postalCode: '8300',
    addressCountry: 'AR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -38.9516,
    longitude: -68.0591,
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
      latitude: -38.9516,
      longitude: -68.0591,
    },
    geoRadius: '500000',
  },
  sameAs: [
    'https://www.instagram.com/totalproteccion.nqn/',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Productos contra Incendios',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Extintores / Matafuegos',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Sistemas de Detección de Incendios',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Sistemas de Extinción Automática',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Capacitaciones en Seguridad contra Incendios',
        },
      },
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
