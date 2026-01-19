'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const espumas = [
  {
    name: 'Espuma AFFF 1%',
    description: 'Espuma de alto rendimiento para incendios clase B',
  },
  {
    name: 'Espuma AFFF 3%',
    description: 'Espuma formadora de pelicula acuosa',
  },
  {
    name: 'Espuma AFFF 6%',
    description: 'Espuma para grandes derrames de combustible',
  },
  {
    name: 'Espuma AR-AFFF',
    description: 'Espuma resistente al alcohol',
  },
  {
    name: 'Espuma Clase A',
    description: 'Espuma para incendios forestales y estructurales',
  },
  {
    name: 'Espuma de Alta Expansion',
    description: 'Para inundacion total de espacios cerrados',
  },
]

export default function EspumasPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="productos" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-[#0066cc] py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/productos" className="hover:text-white">Productos</Link>
            <span>/</span>
            <span className="text-white">Espumas</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Espumas</h1>
          <p className="text-xl text-white/90">Agentes espumigenos para combate de incendios</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {espumas.map((espuma, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">{espuma.name}</h3>
                <p className="text-gray-600">{espuma.description}</p>
                <button className="mt-4 text-blue-600 font-semibold hover:text-blue-700 transition">
                  Solicitar cotizacion →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Sobre nuestras Espumas</h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              Las espumas contra incendio son agentes extintores que actuan formando una capa
              sobre el combustible, impidiendo la evaporacion y sofocando el fuego.
            </p>
            <p className="mb-4">
              Nuestras espumas cumplen con los mas altos estandares de calidad y estan
              certificadas para su uso en diferentes tipos de incendios.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>AFFF (Aqueous Film Forming Foam) - Espuma formadora de pelicula acuosa</li>
              <li>AR-AFFF - Resistente al alcohol para solventes polares</li>
              <li>Clase A - Para incendios de combustibles solidos</li>
              <li>Alta Expansion - Para inundacion de espacios</li>
            </ul>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/contacto"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Contactar para cotizacion
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
