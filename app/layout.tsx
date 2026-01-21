import type { Metadata, Viewport } from 'next'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
