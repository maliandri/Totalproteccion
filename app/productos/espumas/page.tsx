'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const categorias = [
  {
    name: 'Espumas AFFF',
    description: 'Espumas formadoras de película acuosa para incendios clase B. Ideales para hidrocarburos y combustibles derivados del petróleo.',
    color: 'bg-blue-600',
    productos: [
      {
        name: 'Espuma AFFF 1%',
        specs: ['Concentración: 1%', 'Aplicación: Hidrocarburos', 'Expansión: Baja', 'Presentación: Bidón 20L / Tambor 200L'],
      },
      {
        name: 'Espuma AFFF 3%',
        specs: ['Concentración: 3%', 'Aplicación: Combustibles líquidos', 'Expansión: Baja a media', 'Presentación: Bidón 20L / Tambor 200L'],
      },
      {
        name: 'Espuma AFFF 6%',
        specs: ['Concentración: 6%', 'Aplicación: Grandes derrames', 'Expansión: Media', 'Presentación: Bidón 20L / Tambor 200L'],
      },
    ],
  },
  {
    name: 'Espumas AR-AFFF',
    description: 'Espumas resistentes al alcohol para solventes polares y combustibles que destruyen las espumas convencionales.',
    color: 'bg-purple-600',
    productos: [
      {
        name: 'AR-AFFF 3x3',
        specs: ['Concentración: 3% hidrocarburos / 3% polares', 'Aplicación: Solventes y alcoholes', 'Resistente a productos químicos', 'Presentación: Bidón 20L / Tambor 200L'],
      },
      {
        name: 'AR-AFFF 3x6',
        specs: ['Concentración: 3% hidrocarburos / 6% polares', 'Aplicación: Industria química', 'Alta resistencia a alcoholes', 'Presentación: Bidón 20L / Tambor 200L'],
      },
      {
        name: 'AR-AFFF 1x3',
        specs: ['Concentración: 1% hidrocarburos / 3% polares', 'Aplicación: Uso mixto', 'Rendimiento premium', 'Presentación: Bidón 20L / Tambor 200L'],
      },
    ],
  },
  {
    name: 'Espumas Clase A',
    description: 'Espumas para incendios de combustibles sólidos, forestales y estructurales. Mejoran la penetración del agua.',
    color: 'bg-green-600',
    productos: [
      {
        name: 'Espuma Clase A 0.1%-1%',
        specs: ['Concentración: 0.1% a 1%', 'Aplicación: Incendios forestales', 'Biodegradable', 'Presentación: Bidón 20L / Tambor 200L'],
      },
      {
        name: 'Espuma Clase A Concentrada',
        specs: ['Alta concentración', 'Uso profesional bomberos', 'Reduce tensión superficial', 'Presentación: Bidón 20L'],
      },
    ],
  },
  {
    name: 'Espumas de Alta Expansión',
    description: 'Espumas para inundación total de espacios cerrados como hangares, bodegas y túneles.',
    color: 'bg-cyan-600',
    productos: [
      {
        name: 'Espuma Alta Expansión 2%',
        specs: ['Expansión: 200:1 a 1000:1', 'Aplicación: Hangares de aviación', 'Sofocación por volumen', 'Presentación: Bidón 20L / Tambor 200L'],
      },
      {
        name: 'Espuma Media Expansión',
        specs: ['Expansión: 20:1 a 200:1', 'Aplicación: Bodegas y depósitos', 'Versatilidad de uso', 'Presentación: Bidón 20L / Tambor 200L'],
      },
    ],
  },
  {
    name: 'Espumas Sintéticas',
    description: 'Espumas sintéticas libres de flúor, amigables con el medio ambiente para aplicaciones especiales.',
    color: 'bg-teal-600',
    productos: [
      {
        name: 'Espuma Sintética SF',
        specs: ['Libre de flúor', 'Biodegradable', 'Sin PFAS', 'Presentación: Bidón 20L / Tambor 200L'],
      },
      {
        name: 'Espuma Proteínica',
        specs: ['Base proteína hidrolizada', 'Alta estabilidad térmica', 'Resistente al calor', 'Presentación: Tambor 200L'],
      },
      {
        name: 'Espuma FP (Fluoroproteínica)',
        specs: ['Proteína + fluorosurfactante', 'Máxima resistencia', 'Uso industrial', 'Presentación: Tambor 200L'],
      },
    ],
  },
]

const especificaciones = [
  {
    title: 'Certificaciones',
    items: ['UL Listed', 'EN 1568', 'NFPA 11', 'IRAM'],
  },
  {
    title: 'Almacenamiento',
    items: ['Temperatura: 5°C a 35°C', 'Vida útil: hasta 20 años', 'Envases sellados', 'Lugar fresco y seco'],
  },
  {
    title: 'Compatibilidad',
    items: ['Equipos AFFF estándar', 'Cámaras de espuma', 'Monitores', 'Lanzas de espuma'],
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
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Espumas</h1>
              <p className="text-xl text-white/90">Agentes espumígenos para combate de incendios</p>
            </div>
            <div className="hidden md:block">
              <Image
                src="/products/espumas-header.png"
                alt="Espumas contra incendios"
                width={500}
                height={350}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Agentes Espumígenos Profesionales</h2>
          <p className="text-gray-600 text-lg mb-12">
            Ofrecemos una línea completa de espumas contra incendio para diferentes aplicaciones industriales.
            Nuestros agentes espumígenos cumplen con las más exigentes normas internacionales y están diseñados
            para proporcionar máxima eficacia en la extinción de incendios clase A y B.
          </p>

          {/* Galería de Imágenes */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/products/product/espumas-contra-incendios-2.png"
                alt="Espumas contra incendios"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/products/product/expansion-espumas-768x444.png"
                alt="Expansión de espumas"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/products/product/espumas-contra-incendios-cuadro.png"
                alt="Tipos de espumas"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg lg:col-span-2">
              <Image
                src="/products/product/espumas-contra-incendios-768x327.png"
                alt="Aplicaciones de espumas"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/products/product/espumas-contra-incendios-mapa.png"
                alt="Distribución de espumas"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categorias de Espumas */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Catálogo de Espumas</h2>

          <div className="space-y-12">
            {categorias.map((categoria, catIndex) => (
              <div key={catIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`${categoria.color} p-4 text-white`}>
                  <h3 className="text-2xl font-bold">{categoria.name}</h3>
                  <p className="text-white/90 mt-1">{categoria.description}</p>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoria.productos.map((producto, prodIndex) => (
                      <div key={prodIndex} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-lg mb-2">{producto.name}</h4>
                        <ul className="space-y-1 mb-4">
                          {producto.specs.map((spec, specIndex) => (
                            <li key={specIndex} className="text-sm text-gray-600 flex items-start">
                              <svg className="w-4 h-4 mr-1 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {spec}
                            </li>
                          ))}
                        </ul>
                        <a
                          href={`https://wa.me/5492995484575?text=Hola!%20Me%20interesa%20${encodeURIComponent(producto.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
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

      {/* Especificaciones Técnicas */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Información Técnica</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {especificaciones.map((spec, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600">
                <h3 className="text-xl font-bold mb-4 text-gray-800">{spec.title}</h3>
                <ul className="space-y-2">
                  {spec.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aplicaciones */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Aplicaciones Industriales</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Refinería y Petroquímica</h3>
              <p className="text-gray-600 text-sm">Tanques de almacenamiento y áreas de proceso</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Aviación</h3>
              <p className="text-gray-600 text-sm">Hangares y áreas de abastecimiento</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Bomberos</h3>
              <p className="text-gray-600 text-sm">Equipamiento para brigadas forestales y estructurales</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Industria</h3>
              <p className="text-gray-600 text-sm">Plantas químicas y manufactureras</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0066cc] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesitás Asesoramiento en Espumas?</h2>
          <p className="text-xl text-white/90 mb-8">
            Nuestro equipo técnico te ayuda a seleccionar la espuma adecuada para tu aplicación específica
          </p>
          <a
            href="https://wa.me/5492995484575?text=Hola!%20Necesito%20asesoramiento%20sobre%20espumas%20contra%20incendio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Solicitar Cotización por WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
