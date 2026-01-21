'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const categorias = [
  {
    name: 'Mangueras Armtex',
    description: 'Mangueras de alta resistencia con revestimiento de poliuretano',
    image: '/products/product/armtex-300x240.png',
    productos: [
      { name: 'Armtex One 1½"', specs: ['Diámetro: 38mm', 'Presión: 16 bar', 'Largo: 15/20/30m'] },
      { name: 'Armtex One 1¾"', specs: ['Diámetro: 45mm', 'Presión: 16 bar', 'Largo: 15/20/30m'] },
      { name: 'Armtex One 2½"', specs: ['Diámetro: 65mm', 'Presión: 16 bar', 'Largo: 15/20/30m'] },
      { name: 'Armtex Attack 1½"', specs: ['Diámetro: 38mm', 'Presión: 21 bar', 'Alta abrasión'] },
      { name: 'Armtex Attack 1¾"', specs: ['Diámetro: 45mm', 'Presión: 21 bar', 'Alta abrasión'] },
    ],
  },
  {
    name: 'Mangueras Ryljet',
    description: 'Mangueras profesionales con doble capa de caucho sintético',
    image: '/products/product/ryljet-300x240.png',
    productos: [
      { name: 'Ryljet 1½"', specs: ['Diámetro: 38mm', 'Presión: 15 bar', 'Largo: 15/20/30m'] },
      { name: 'Ryljet 1¾"', specs: ['Diámetro: 45mm', 'Presión: 15 bar', 'Largo: 15/20/30m'] },
      { name: 'Ryljet 2½"', specs: ['Diámetro: 65mm', 'Presión: 15 bar', 'Largo: 15/20/30m'] },
      { name: 'Ryljet 3"', specs: ['Diámetro: 75mm', 'Presión: 15 bar', 'Largo: 20/30m'] },
      { name: 'Ryljet 4"', specs: ['Diámetro: 100mm', 'Presión: 10 bar', 'Largo: 20/30m'] },
    ],
  },
  {
    name: 'Mangueras Arjet',
    description: 'Mangueras industriales para uso intensivo',
    image: '/products/product/arjet-1-300x240.png',
    productos: [
      { name: 'Arjet 1½"', specs: ['Diámetro: 38mm', 'Presión: 12 bar', 'Largo: 15/20/30m'] },
      { name: 'Arjet 1¾"', specs: ['Diámetro: 45mm', 'Presión: 12 bar', 'Largo: 15/20/30m'] },
      { name: 'Arjet 2½"', specs: ['Diámetro: 65mm', 'Presión: 12 bar', 'Largo: 15/20/30m'] },
    ],
  },
  {
    name: 'Mangueras para Gabinete',
    description: 'Mangueras semirígidas para instalación en gabinetes',
    image: '/products/product/armtex-300x240.png',
    productos: [
      { name: 'Manguera Gabinete 1"', specs: ['Diámetro: 25mm', 'Largo: 20/25/30m', 'Semirígida'] },
      { name: 'Manguera Gabinete 1½"', specs: ['Diámetro: 38mm', 'Largo: 20/25/30m', 'Semirígida'] },
      { name: 'Manguera Sintex 1"', specs: ['Diámetro: 25mm', 'Largo: 20/25/30m', 'Con carrete'] },
    ],
  },
]

export default function ManguerasPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="productos" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-[#003d82] py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/productos" className="hover:text-white">Productos</Link>
            <span>/</span>
            <span className="text-white">Mangueras de Incendio</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Mangueras de Incendio</h1>
          <p className="text-xl text-white/90">Alta calidad y resistencia para sistemas contra incendio</p>
        </div>
      </section>

      {/* Categorías de Mangueras */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Nuestras Mangueras</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Distribuimos mangueras de las mejores marcas con certificación internacional
          </p>

          <div className="space-y-12">
            {categorias.map((categoria, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative h-48 md:h-auto bg-gray-100">
                    <Image
                      src={categoria.image}
                      alt={categoria.name}
                      width={300}
                      height={240}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-2xl font-bold mb-2 text-blue-800">{categoria.name}</h3>
                    <p className="text-gray-600 mb-4">{categoria.description}</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {categoria.productos.map((producto, pIndex) => (
                        <div key={pIndex} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                          <h4 className="font-semibold text-sm mb-2">{producto.name}</h4>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {producto.specs.map((spec, sIndex) => (
                              <li key={sIndex} className="flex items-center gap-1">
                                <svg className="w-3 h-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                {spec}
                              </li>
                            ))}
                          </ul>
                          <a
                            href={`https://wa.me/5492995484575?text=Hola!%20Me%20interesa%20la%20${encodeURIComponent(producto.name)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 w-full bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded text-xs font-medium transition-colors flex items-center justify-center gap-1"
                          >
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            Consultar
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info técnica */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Características Técnicas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Certificadas</h3>
              <p className="text-gray-600 text-sm">Todas nuestras mangueras cumplen con normas IRAM y NFPA</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Alta Presión</h3>
              <p className="text-gray-600 text-sm">Diseñadas para soportar presiones de trabajo de hasta 21 bar</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Resistentes</h3>
              <p className="text-gray-600 text-sm">Materiales de alta resistencia a la abrasión y temperaturas extremas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#003d82]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Necesitás cotización de mangueras?
          </h2>
          <p className="text-white/90 mb-8">
            Consultanos por precios y disponibilidad. Hacemos envíos a toda la provincia de Neuquén.
          </p>
          <a
            href="https://wa.me/5492995484575?text=Hola!%20Necesito%20cotización%20de%20mangueras%20de%20incendio"
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
