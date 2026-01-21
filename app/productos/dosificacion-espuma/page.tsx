'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const categorias = [
  {
    name: 'Dosificadores',
    description: 'Equipos para mezcla automática de espuma concentrada con agua',
    color: 'bg-blue-700',
    productos: [
      {
        name: 'Dosificador Inline 1½"',
        specs: ['Caudal: 100-400 L/min', 'Dosificación: 1%-6%', 'Conexión: Storz', 'Sin energía externa'],
      },
      {
        name: 'Dosificador Inline 2½"',
        specs: ['Caudal: 400-1200 L/min', 'Dosificación: 1%-6%', 'Conexión: Storz', 'Sin energía externa'],
      },
      {
        name: 'Dosificador Venturi',
        specs: ['Efecto venturi', 'Alta precisión', 'Bajo mantenimiento', 'AFFF/AR-AFFF'],
      },
      {
        name: 'Dosificador de Presión Balanceada',
        specs: ['Grandes caudales', 'Precisión constante', 'Uso industrial', 'Certificado UL/FM'],
      },
    ],
  },
  {
    name: 'Proporcionadores',
    description: 'Sistemas de proporcionado para instalaciones fijas',
    color: 'bg-indigo-700',
    productos: [
      {
        name: 'Proporcionador Bladder Tank',
        specs: ['Con membrana interna', 'Capacidad: 200-5000L', 'Presión: 12 bar', 'Larga vida útil'],
      },
      {
        name: 'Proporcionador de Línea',
        specs: ['Instalación en línea', 'Múltiples caudales', 'Acero inoxidable', 'Fácil mantenimiento'],
      },
      {
        name: 'Proporcionador Portátil',
        specs: ['Uso móvil', 'Conexión rápida', 'Liviano', 'Ideal para bomberos'],
      },
    ],
  },
  {
    name: 'Tanques de Espuma',
    description: 'Depósitos para almacenamiento de concentrado de espuma',
    color: 'bg-cyan-700',
    productos: [
      {
        name: 'Tanque Atmosférico 200L',
        specs: ['Capacidad: 200 litros', 'PRFV o Acero', 'Indicador de nivel', 'Tapa de inspección'],
      },
      {
        name: 'Tanque Atmosférico 500L',
        specs: ['Capacidad: 500 litros', 'PRFV o Acero', 'Indicador de nivel', 'Conexiones 2"'],
      },
      {
        name: 'Tanque Atmosférico 1000L',
        specs: ['Capacidad: 1000 litros', 'PRFV o Acero', 'Indicador de nivel', 'Base de apoyo'],
      },
      {
        name: 'Tanque Presurizado',
        specs: ['Bladder tank', 'Presión: 12 bar', 'Capacidad: 200-5000L', 'Certificado'],
      },
    ],
  },
  {
    name: 'Cámaras de Espuma',
    description: 'Dispositivos de descarga para tanques de almacenamiento',
    color: 'bg-purple-700',
    productos: [
      {
        name: 'Cámara de Espuma Tipo I',
        specs: ['Para tanques cónicos', 'Descarga suave', 'Acero inoxidable', 'Múltiples diámetros'],
      },
      {
        name: 'Cámara de Espuma Tipo II',
        specs: ['Para tanques flotantes', 'Deflector interno', 'Alta expansión', 'NFPA 11'],
      },
      {
        name: 'Generador de Espuma',
        specs: ['Alta/Media expansión', 'Portátil o fijo', 'Acero galvanizado', 'Uso industrial'],
      },
    ],
  },
  {
    name: 'Monitores y Lanzas',
    description: 'Equipos de descarga de espuma para operaciones manuales',
    color: 'bg-red-700',
    productos: [
      {
        name: 'Monitor de Espuma Fijo',
        specs: ['Caudal: 1000-4000 L/min', 'Alcance: 40-60m', 'Giro: 360°', 'Bronce/Acero inox'],
      },
      {
        name: 'Monitor de Espuma Portátil',
        specs: ['Caudal: 500-1500 L/min', 'Con trípode', 'Ajustable', 'Uso bomberos'],
      },
      {
        name: 'Lanza de Espuma',
        specs: ['Caudal: 200-800 L/min', 'Chorro/Niebla', 'Bronce', 'Ergonómica'],
      },
    ],
  },
]

const aplicaciones = [
  {
    title: 'Plantas Industriales',
    description: 'Proteccion de areas de proceso, almacenamiento de liquidos inflamables y zonas de carga.',
  },
  {
    title: 'Hangares de Aviacion',
    description: 'Sistemas de espuma de alta expansion para proteccion de aeronaves y combustibles.',
  },
  {
    title: 'Terminales de Combustible',
    description: 'Proteccion de tanques de almacenamiento y areas de carga de combustibles.',
  },
  {
    title: 'Industria Petroquimica',
    description: 'Sistemas de espuma para refineries, plantas de proceso y terminales maritimas.',
  },
]

export default function DosificacionEspumaPage() {
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
            <span className="text-white">Sistemas de Dosificacion de Espuma</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sistemas de Dosificacion de Espuma</h1>
          <p className="text-xl text-white/90">Equipos especializados para la mezcla y aplicacion de agentes espumantes</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Tecnologia en Espuma Contra Incendios</h2>
          <p className="text-gray-600 text-lg">
            Los sistemas de dosificacion de espuma son esenciales para la proteccion de instalaciones donde se manejan liquidos inflamables.
            Nuestros equipos garantizan la mezcla precisa de concentrado de espuma con agua, creando una solucion efectiva para la extincion de incendios de clase B.
          </p>
        </div>
      </section>

      {/* Productos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Nuestros Productos</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Equipos de alta calidad para sistemas de espuma contra incendios
          </p>

          <div className="space-y-12">
            {productos.map((producto, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center bg-white rounded-xl shadow-lg overflow-hidden`}>
                <div className="md:w-1/2 relative h-64 md:h-80 w-full">
                  <Image
                    src={producto.image}
                    alt={producto.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{producto.name}</h3>
                  <p className="text-gray-600 mb-6">{producto.description}</p>
                  <h4 className="font-semibold mb-3 text-gray-700">Caracteristicas:</h4>
                  <ul className="space-y-2">
                    {producto.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contacto"
                    className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                  >
                    Solicitar Cotizacion
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aplicaciones */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Aplicaciones Tipicas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aplicaciones.map((app, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600">
                <h3 className="text-lg font-bold mb-2">{app.title}</h3>
                <p className="text-gray-600 text-sm">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0066cc] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Soluciones Integrales en Espuma</h2>
          <p className="text-xl text-white/90 mb-8">
            Diseñamos e instalamos sistemas completos de proteccion con espuma adaptados a sus necesidades
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Solicitar Asesoria Tecnica
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
