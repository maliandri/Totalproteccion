'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const maquinas = [
  {
    name: 'Maquina de Vacio y Carga',
    description: 'Para vaciado y carga de extintores de polvo',
  },
  {
    name: 'Secador de Polvo',
    description: 'Secador industrial para agentes extintores',
  },
  {
    name: 'Probador Hidrostatico',
    description: 'Para pruebas de presion de cilindros',
  },
  {
    name: 'Maquina de CO2',
    description: 'Para recarga de extintores de dioxido de carbono',
  },
  {
    name: 'Banco de Pruebas',
    description: 'Para verificacion de valvulas y accesorios',
  },
  {
    name: 'Cabina de Pintura',
    description: 'Para repintado de extintores',
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Maquinas para Talleres</h1>
          <p className="text-xl text-white/90">Equipamiento profesional para recarga de extintores</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {maquinas.map((maquina, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">{maquina.name}</h3>
                <p className="text-gray-600">{maquina.description}</p>
                <button className="mt-4 text-green-600 font-semibold hover:text-green-700 transition">
                  Ver especificaciones →
                </button>
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
