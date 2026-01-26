'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const categories = [
  {
    name: 'Matafuegos',
    subtitle: '',
    image: '/products/matafuegos-1.jpg',
    href: '/productos/matafuegos',
  },
  {
    name: 'Mangueras',
    subtitle: 'de Incendio',
    image: '/products/mangueras-productos-1-1.jpg',
    href: '/productos/mangueras',
  },
  {
    name: 'Gabinetes',
    subtitle: 'para mangueras y extintores',
    image: '/products/gabintenes-mangueras-300x240.jpg',
    href: '/productos/gabinetes',
  },
  {
    name: 'Bronceria',
    subtitle: 'para incendio',
    image: '/products/bronceria-1.jpg',
    href: '/productos/bronceria',
  },
  {
    name: 'Maquinas',
    subtitle: 'para talleres de recarga',
    image: '/products/maquinaria-recarga-1.jpg',
    href: '/productos/maquinas-recarga',
  },
  {
    name: 'Unidades de',
    subtitle: 'Intervención Rápida',
    image: '/products/unidades-de-intervencion-rapida.jpg',
    href: '/productos/intervencion-rapida',
  },
  {
    name: 'Sistemas de Dosificación',
    subtitle: 'de Espuma',
    image: '/products/dosificacion-de-espuma.jpg',
    href: '/productos/dosificacion-espuma',
  },
  {
    name: 'Espumas',
    subtitle: '',
    image: '/products/cat-producto-Espumas-1-1.jpg',
    href: '/productos/espumas',
  },
  {
    name: 'Equipamiento',
    subtitle: 'Bomberos',
    image: '/products/equipamiento-bomberos.jpg',
    href: '/productos/equipamiento-bomberos',
  },
  {
    name: 'Trajes',
    subtitle: 'Estructurales',
    image: '/products/trajes-estructurales-1.jpg',
    href: '/productos/trajes-estructurales',
  },
  {
    name: 'Equipos',
    subtitle: 'de Bombeo',
    image: '/products/maquinaria-recarga-1.jpg',
    href: '/productos/equipos-bombeo',
  },
  {
    name: 'Valvulas, Postes',
    subtitle: 'e Hidrantes',
    image: '/products/bronceria-1.jpg',
    href: '/productos/valvulas-hidrantes',
  },
]

export default function ProductosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="productos" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-[#1a1a1a] py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Productos</h1>
          <p className="text-xl text-gray-300">Equipamiento profesional contra incendios</p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer bg-gradient-to-br from-gray-900 via-gray-800 to-black"
              >
                <div className="absolute top-6 left-6 z-10">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  {category.subtitle && (
                    <p className="text-lg text-white/90">{category.subtitle}</p>
                  )}
                </div>
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={400}
                    height={320}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
