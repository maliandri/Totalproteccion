'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const gabinetes = [
  {
    name: 'Gabinete Extintor Puerta Enteriza',
    image: '/products/product/gabineteextintorpuertaenterizavisor-300x300.png',
  },
  {
    name: 'Gabinete Extintor Guillotina',
    image: '/products/product/gabinetesextintoresguillotina-300x300.png',
  },
  {
    name: 'Gabinete Extintor Puerta Alero',
    image: '/products/product/gabineteextintorpuerta-alero-300x300.png',
  },
  {
    name: 'Gabinete Extintor 5kg',
    image: '/products/product/gabineteextintorpuerta5-300x300.png',
  },
  {
    name: 'Gabinete Extintor 10kg',
    image: '/products/product/gabineteextintorpuertaenterizavisor10-300x300.png',
  },
  {
    name: 'Gabinete Extintor 10kg Alero',
    image: '/products/product/gabineteextintorpuertaenterizavisor10alero-300x300.png',
  },
  {
    name: 'Gabinete Manguera Puerta Enteriza',
    image: '/products/product/gabinetesextintores-300x300.png',
  },
  {
    name: 'Gabinete Manguera Extintor Vertical',
    image: '/products/product/gabinetemangaextintorpvertical-300x300.png',
  },
  {
    name: 'Gabinete Manguera Puerta Alero',
    image: '/products/product/gabinetemangapuertaalero-300x300.png',
  },
  {
    name: 'Gabinete Manguera Visor',
    image: '/products/product/gabinetemangapuertaenterizavisor-300x300.png',
  },
  {
    name: 'Gabinete Manguera Alero',
    image: '/products/product/gabinetemangapuertaenterizavisoralero-300x300.png',
  },
  {
    name: 'Gabinete Manguera Acero',
    image: '/products/product/Gabinete-manga-acerp-300x300.jpg',
  },
  {
    name: 'Gabinete Manguera Acero Inox',
    image: '/products/product/gabinete-manga-puerta-acero-inox-300x300.jpg',
  },
  {
    name: 'Gabinete CO2 7kg',
    image: '/products/product/gabinete-extintor-co2-7-kg-300x300.jpg',
  },
  {
    name: 'Gabinete CO2 Guillotina',
    image: '/products/product/gabinete-extintor-co2-7-guillotina-300x300.png',
  },
  {
    name: 'Gabinetes Especiales',
    image: '/products/product/gabinetes-especiales-300x240.jpg',
  },
]

export default function GabinetesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="productos" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-[#333] py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/productos" className="hover:text-white">Productos</Link>
            <span>/</span>
            <span className="text-white">Gabinetes</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Gabinetes</h1>
          <p className="text-xl text-white/90">Gabinetes para extintores y mangueras de incendio</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {gabinetes.map((gabinete, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <Image
                    src={gabinete.image}
                    alt={gabinete.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm text-center mb-3">{gabinete.name}</h3>
                  <a
                    href={`https://wa.me/5492995484575?text=Hola!%20Me%20interesa%20el%20${encodeURIComponent(gabinete.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-1"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Consultar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Necesitás cotización de gabinetes?
          </h2>
          <p className="text-gray-300 mb-8">
            Consultanos por precios y disponibilidad. Hacemos envíos a toda la provincia de Neuquén.
          </p>
          <a
            href="https://wa.me/5492995484575?text=Hola!%20Necesito%20cotización%20de%20gabinetes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Solicitar Cotización
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
