'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const categorias = [
  {
    name: 'Dispositivos de Control y Medición',
    description: 'Accesorios y dispositivos para control, medición y monitoreo de equipos contra incendio.',
    image: '/products/maquinas/dispositivos-control.png',
  },
  {
    name: 'Mantenimiento PH Mangueras',
    description: 'Equipos para pruebas hidrostáticas y mantenimiento de mangueras de incendio.',
    image: '/products/maquinas/mantenimiento-mangueras.png',
  },
  {
    name: 'Recarga Extintores Alta Presión',
    description: 'Maquinaria especializada para recarga de extintores de CO2 y alta presión.',
    image: '/products/maquinas/recarga-alta-presion.jpg',
  },
  {
    name: 'Recarga Extintores Baja Presión',
    description: 'Equipos para recarga y mantenimiento de extintores de polvo químico y agua.',
    image: '/products/maquinas/recarga-baja-presion.jpg',
  },
]

export default function MaquinasRecargaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="productos" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-[#00a651] py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/productos" className="hover:text-white">Productos</Link>
            <span>/</span>
            <span className="text-white">Maquinas para Talleres de Recarga</span>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Maquinas para Talleres</h1>
              <p className="text-xl text-white/90">Equipamiento profesional para recarga de extintores</p>
            </div>
            <div className="hidden md:block">
              <Image
                src="/products/maquinaria-recarga-1.jpg"
                alt="Maquinaria para recarga de extintores"
                width={500}
                height={350}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Categorías de Equipamiento</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {categorias.map((categoria, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src={categoria.image}
                    alt={categoria.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-800">{categoria.name}</h3>
                  <p className="text-gray-600">{categoria.description}</p>
                  <Link
                    href="/contacto"
                    className="inline-block mt-4 text-green-600 font-semibold hover:text-green-700 transition"
                  >
                    Consultar disponibilidad →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Equipamiento Profesional</h2>
          <div className="prose max-w-none text-gray-600 text-center">
            <p className="mb-4">
              Ofrecemos equipamiento completo para talleres de mantenimiento y recarga de extintores.
              Nuestras maquinas cumplen con todas las normativas vigentes y garantizan un servicio
              de calidad.
            </p>
            <p className="mb-4">
              Brindamos capacitacion y soporte tecnico para la instalacion y operacion de todos
              nuestros equipos.
            </p>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/contacto"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Solicitar informacion
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
