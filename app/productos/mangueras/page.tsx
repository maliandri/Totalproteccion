'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const productos = [
  {
    name: 'Manguera Armtex',
    description: 'Manguera de alta resistencia',
    image: '/products/product/armtex-300x240.png',
  },
  {
    name: 'Manguera Ryljet',
    description: 'Manguera profesional',
    image: '/products/product/ryljet-300x240.png',
  },
  {
    name: 'Manguera Arjet',
    description: 'Manguera industrial',
    image: '/products/product/arjet-1-300x240.png',
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

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productos.map((producto, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="relative h-60 overflow-hidden bg-gray-100">
                  <Image
                    src={producto.image}
                    alt={producto.name}
                    width={300}
                    height={240}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{producto.name}</h3>
                  <p className="text-gray-600">{producto.description}</p>
                  <button className="mt-4 text-red-600 font-semibold hover:text-red-700 transition">
                    Ver detalles →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
