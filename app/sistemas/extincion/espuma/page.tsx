'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const expansiones = [
  {
    title: 'Baja Expansion',
    ratio: 'Hasta 1:20',
    description: 'Para camaras de espuma en tanques de combustible y equipos manuales',
    color: 'bg-orange-500',
  },
  {
    title: 'Media Expansion',
    ratio: 'Hasta 1:100',
    description: 'Para generadores portatiles y aplicaciones intermedias',
    color: 'bg-yellow-500',
  },
  {
    title: 'Alta Expansion',
    ratio: 'Hasta 1:1000',
    description: 'Para grandes recintos cerrados como hangares de aviacion',
    color: 'bg-green-500',
  },
]

const emulsores = [
  'Espuma Proteica',
  'Espuma Fluoroproteica',
  'AFFF (Aqueous Film Forming Foam)',
  'AR AFFF (Alcohol Resistant)',
  'Espumas Sinteticas',
  'Espumas Clase A',
]

export default function ExtincionEspumaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="sistemas" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-gradient-to-r from-orange-600 to-orange-800 py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/sistemas" className="hover:text-white">Sistemas</Link>
            <span>/</span>
            <Link href="/sistemas/extincion" className="hover:text-white">Extincion</Link>
            <span>/</span>
            <span className="text-white">Espuma</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sistemas de Extincion a Base de Espuma</h1>
          <p className="text-xl text-white/90">Proteccion especializada para liquidos inflamables</p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Los sistemas de extincion a base de espuma son esenciales para fuegos de combustibles liquidos.
                La mayoria de los combustibles tienen <strong>menor densidad que el agua</strong>, lo que
                haria que el combustible flote y el fuego se propague. La espuma resuelve esto creando una
                emulsion que <strong>aisla el combustible del oxigeno</strong>.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Contamos con la ingenieria y el soporte tecnico necesarios para el diseno e implementacion
                de instalaciones fijas de extincion de incendios a base de espuma para industrias petroleras,
                petroquimicas y todo tipo de instalaciones con riesgo de liquidos inflamables.
              </p>
            </div>
            <div className="relative h-80 bg-gray-100 rounded-xl overflow-hidden">
              <Image
                src="/images/sistemas/extincion-espuma.png"
                alt="Sistema de extincion con espuma"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Relaciones de Expansion */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Relaciones de Expansion</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            La espuma se clasifica segun su relacion de expansion, determinando su aplicacion especifica
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {expansiones.map((exp, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`${exp.color} p-4 text-white`}>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-white/90 text-2xl font-bold">{exp.ratio}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Emulsores */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Tipos de Emulsores</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {emulsores.map((emulsor, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md border border-gray-100">
                <svg className="w-6 h-6 mr-3 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium text-gray-700">{emulsor}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aplicaciones */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Aplicaciones Tipicas</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-4 text-orange-600">Industria Petrolera</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Parques de tanques de almacenamiento</li>
                <li>• Areas de carga y descarga</li>
                <li>• Refinerias y plantas de proceso</li>
                <li>• Terminales maritimas</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-4 text-orange-600">Aviacion</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Hangares de aviacion</li>
                <li>• Areas de reabastecimiento</li>
                <li>• Depositos de combustible</li>
                <li>• Vehiculos de emergencia</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-4 text-orange-600">Industria Quimica</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Plantas petroquimicas</li>
                <li>• Almacenamiento de solventes</li>
                <li>• Areas de proceso</li>
                <li>• Laboratorios industriales</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-4 text-orange-600">Transporte</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Estaciones de servicio</li>
                <li>• Terminales de transporte</li>
                <li>• Depositos de combustible</li>
                <li>• Flotas vehiculares</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Necesitas proteccion para liquidos inflamables?
          </h2>
          <p className="text-white/90 mb-8">
            Diseñamos sistemas de espuma a medida para tu industria
          </p>
          <a
            href="https://wa.me/5492995484575?text=Hola!%20Necesito%20informacion%20sobre%20sistemas%20de%20extincion%20con%20espuma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Consultar por WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
