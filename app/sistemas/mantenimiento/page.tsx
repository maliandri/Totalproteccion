'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const servicios = [
  {
    title: 'Mantenimiento de Instalaciones Fijas',
    description: 'Servicios de mantenimiento para sistemas fijos de proteccion contra incendios',
    href: '/sistemas/mantenimiento/instalaciones',
    features: [
      'Redes de hidrantes y rociadores',
      'Sistemas de deteccion',
      'Bombas contra incendio',
      'Valvulas y accesorios',
    ],
  },
  {
    title: 'Central de Carga de Gases Limpios',
    description: 'Servicio especializado de recarga y mantenimiento de sistemas de gases',
    href: '/sistemas/mantenimiento/gases',
    features: [
      'Recarga de FM200/HFC-227ea',
      'Mantenimiento de cilindros',
      'Verificacion de integridad',
      'Certificacion de sistemas',
    ],
  },
]

export default function MantenimientoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="sistemas" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-gradient-to-r from-yellow-600 to-yellow-700 py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/sistemas" className="hover:text-white">Sistemas</Link>
            <span>/</span>
            <span className="text-white">Mantenimiento Integral</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Mantenimiento Integral</h1>
          <p className="text-xl text-white/90">Garantizamos que tu sistema este siempre listo para actuar</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                El mantenimiento es de <strong>vital importancia</strong> para que el sistema de proteccion
                con el que se cuenta resulte confiable. Un sistema sin mantenimiento adecuado puede fallar
                en el momento mas critico.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nuestros servicios de mantenimiento garantizan que tu sistema este siempre
                <strong> listo para actuar</strong> cuando sea necesario.
              </p>
            </div>
            <div className="relative h-64 bg-gray-100 rounded-xl overflow-hidden">
              <Image
                src="/images/sistemas/instalaciones.png"
                alt="Mantenimiento de sistemas contra incendios"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {servicios.map((servicio, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-yellow-700">{servicio.title}</h3>
                <p className="text-gray-600 mb-6">{servicio.description}</p>
                <ul className="space-y-3 mb-6">
                  {servicio.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-3 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={servicio.href}
                  className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium"
                >
                  Mas informacion
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Beneficios del Mantenimiento Preventivo</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Confiabilidad</h3>
              <p className="text-gray-600 text-sm">Sistema siempre operativo y listo para actuar</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Cumplimiento</h3>
              <p className="text-gray-600 text-sm">Cumple con normativas y requisitos legales</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Ahorro</h3>
              <p className="text-gray-600 text-sm">Evita reparaciones costosas y reemplazos</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Vida Util</h3>
              <p className="text-gray-600 text-sm">Extiende la vida util de los equipos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Agenda tu mantenimiento
          </h2>
          <p className="text-white/90 mb-8">
            Contactanos para programar el mantenimiento de tu sistema contra incendios
          </p>
          <a
            href="https://wa.me/5492995484575?text=Hola!%20Necesito%20programar%20mantenimiento%20de%20mi%20sistema%20contra%20incendios"
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
