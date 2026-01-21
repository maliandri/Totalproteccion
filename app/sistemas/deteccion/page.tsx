'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const sistemas = [
  {
    title: 'Sistemas Convencionales',
    description: 'Ideales para pequeñas superficies o edificios con pocas divisiones internas. Sencillos y economicos.',
    href: '/sistemas/deteccion/convencional',
    image: '/images/sistemas/deteccion-convencional.png',
    features: ['Identificacion por zonas', 'Economico', 'Facil mantenimiento', '2 a 10 zonas'],
  },
  {
    title: 'Sistemas Inteligentes',
    description: 'Sistemas versatiles con identificacion punto a punto de cada detector conectado al panel.',
    href: '/sistemas/deteccion/inteligente',
    image: '/images/sistemas/deteccion-inteligente.png',
    features: ['Identificacion individual', 'Loops de 99+ detectores', 'Sensibilidad ajustable', 'Graficos en software'],
  },
]

export default function DeteccionPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="sistemas" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-gradient-to-r from-blue-800 to-blue-950 py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/sistemas" className="hover:text-white">Sistemas</Link>
            <span>/</span>
            <span className="text-white">Deteccion de Incendios</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sistemas de Deteccion de Incendios</h1>
          <p className="text-xl text-white/90">La rapidez en la deteccion es clave para el exito en el combate del fuego</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                La <strong>rapidez y eficacia de los sistemas de deteccion</strong> son el principal factor
                de exito en el combate de cualquier tipo de siniestro. La correcta seleccion de sensores,
                cantidad y ubicacion es esencial para diseñar sistemas efectivos.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Los sistemas de deteccion pueden <strong>comandar sistemas de extincion automatica</strong>
                o activar protocolos de alarma y evacuacion, segun las necesidades de cada instalacion.
              </p>
            </div>
            <div className="relative h-64 bg-gray-100 rounded-xl overflow-hidden">
              <Image
                src="/images/sistemas/deteccion-panel.png"
                alt="Panel de deteccion de incendios"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sistemas Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tipos de Sistemas</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {sistemas.map((sistema, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={sistema.image}
                    alt={sistema.title}
                    fill
                    className="object-contain p-6"
                  />
                </div>
                <div className="p-6">
                  <Link href={sistema.href}>
                    <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition">{sistema.title}</h3>
                  </Link>
                  <p className="text-gray-600 text-sm mb-4">{sistema.description}</p>
                  <ul className="space-y-2 mb-4">
                    {sistema.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={sistema.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Ver mas
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Componentes */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Componentes de un Sistema de Deteccion</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Central de Alarma</h3>
              <p className="text-gray-600 text-sm">Cerebro del sistema, procesa las señales de los detectores</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Detectores</h3>
              <p className="text-gray-600 text-sm">Sensores de humo, temperatura o llama</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Sirenas y Alarmas</h3>
              <p className="text-gray-600 text-sm">Dispositivos de notificacion sonora y visual</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Pulsadores Manuales</h3>
              <p className="text-gray-600 text-sm">Para activacion manual de la alarma</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Necesitas un sistema de deteccion?
          </h2>
          <p className="text-white/90 mb-8">
            Diseñamos e instalamos sistemas de deteccion adaptados a tu instalacion
          </p>
          <a
            href="https://wa.me/5492995484575?text=Hola!%20Necesito%20informacion%20sobre%20sistemas%20de%20deteccion"
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
