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

      {/* Categorias de Productos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Nuestros Productos</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Equipos de alta calidad para sistemas de espuma contra incendios
          </p>

          <div className="space-y-12">
            {categorias.map((categoria, catIndex) => (
              <div key={catIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`${categoria.color} px-6 py-4`}>
                  <h3 className="text-2xl font-bold text-white">{categoria.name}</h3>
                  <p className="text-white/90">{categoria.description}</p>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {categoria.productos.map((producto, prodIndex) => (
                      <div key={prodIndex} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-gray-800 mb-3">{producto.name}</h4>
                        <ul className="text-xs text-gray-600 space-y-1 mb-4">
                          {producto.specs.map((spec, specIndex) => (
                            <li key={specIndex} className="flex items-center gap-2">
                              <svg className="w-3 h-3 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {spec}
                            </li>
                          ))}
                        </ul>
                        <a
                          href={`https://wa.me/5492995484575?text=Hola!%20Me%20interesa%20el%20${encodeURIComponent(producto.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          Consultar
                        </a>
                      </div>
                    ))}
                  </div>
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
