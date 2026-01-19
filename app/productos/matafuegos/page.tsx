'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const extintores = [
  {
    name: 'Clase A',
    description: 'Fuegos de materiales solidos',
    image: '/products/product/clasea150x150-1.png',
    color: 'bg-green-600',
  },
  {
    name: 'Clase B',
    description: 'Fuegos de liquidos inflamables',
    image: '/products/product/claseb150x150.png',
    color: 'bg-red-600',
  },
  {
    name: 'Clase C',
    description: 'Fuegos de origen electrico',
    image: '/products/product/clasec150x150.png',
    color: 'bg-blue-600',
  },
  {
    name: 'Clase D',
    description: 'Fuegos de metales combustibles',
    image: '/products/product/clased150x150.png',
    color: 'bg-yellow-500',
  },
  {
    name: 'Clase K',
    description: 'Fuegos de aceites y grasas',
    image: '/products/product/clasek150x150.png',
    color: 'bg-purple-600',
  },
]

const tiposMatafuegos = [
  {
    name: 'Polvo ABC',
    image: '/products/product/Subcategoria-polvo-abc-300x240.jpg',
  },
  {
    name: 'Polvos Especiales',
    image: '/products/product/Subcategoria-polvos-especiales-1-300x240.jpg',
  },
  {
    name: 'CO2',
    image: '/products/product/Subcategoria-co2-300x240.jpg',
  },
  {
    name: 'Agua',
    image: '/products/product/Agua-300x240.jpg',
  },
  {
    name: 'Agua y AFFF',
    image: '/products/product/Agua-y-afff-300x240.jpg',
  },
  {
    name: 'HCFC 123',
    image: '/products/product/HCFC123-300x240.jpg',
  },
  {
    name: 'HFC 236',
    image: '/products/product/HFC236-300x240.jpg',
  },
  {
    name: 'Acetato de Potasio',
    image: '/products/product/Acetato-de-potasio-300x240.jpg',
  },
]

export default function MatafuegosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="productos" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-[#c41e3a] py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/productos" className="hover:text-white">Productos</Link>
            <span>/</span>
            <span className="text-white">Matafuegos</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Matafuegos</h1>
          <p className="text-xl text-white/90">Fabricacion de extintores de todo tipo y capacidad</p>
        </div>
      </section>

      {/* Clases de Fuego */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Clases de Fuego</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Los matafuegos se clasifican segun el tipo de fuego que pueden extinguir
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {extintores.map((extintor, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className={`${extintor.color} w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <Image
                    src={extintor.image}
                    alt={extintor.name}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">{extintor.name}</h3>
                <p className="text-sm text-gray-600">{extintor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Matafuegos */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Tipos de Matafuegos</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Contamos con una amplia variedad de agentes extintores
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiposMatafuegos.map((tipo, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={tipo.image}
                    alt={tipo.name}
                    width={300}
                    height={240}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-center">{tipo.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Image */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <Image
            src="/products/product/Tipos-de-matafuegos_b-1024x670.jpg"
            alt="Tipos de Matafuegos"
            width={1024}
            height={670}
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
