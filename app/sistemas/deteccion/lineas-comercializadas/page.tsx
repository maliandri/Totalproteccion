'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function LineasComercializadasPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="sistemas" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-gradient-to-r from-gray-700 to-gray-900 py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/sistemas" className="hover:text-white">Sistemas</Link>
            <span>/</span>
            <Link href="/sistemas/deteccion" className="hover:text-white">Deteccion</Link>
            <span>/</span>
            <span className="text-white">Lineas Comercializadas</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Lineas Comercializadas</h1>
          <p className="text-xl text-white/90">Marcas lideres mundiales en deteccion de incendios</p>
        </div>
      </section>

      {/* Marcas */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Comercializamos e instalamos equipos de las <strong>marcas mas reconocidas a nivel mundial</strong>
            en sistemas de deteccion y alarma de incendios, garantizando la maxima calidad y confiabilidad.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Notifier */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center">
              <div className="relative h-24 mb-6">
                <Image
                  src="/sistemas/sistemas-de-deteccion-de-incendios/lineas-comercializadas/notifier-min-300x92-1.png"
                  alt="Notifier"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-lg mb-2">Notifier by Honeywell</h3>
              <p className="text-gray-600 text-sm">Lider mundial en sistemas de deteccion y alarma de incendios inteligentes</p>
            </div>

            {/* Edwards */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center">
              <div className="relative h-24 mb-6">
                <Image
                  src="/sistemas/sistemas-de-deteccion-de-incendios/lineas-comercializadas/edwards-min-300x92-1.png"
                  alt="Edwards"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-lg mb-2">Edwards</h3>
              <p className="text-gray-600 text-sm">Soluciones de seguridad y proteccion contra incendios de alta tecnologia</p>
            </div>

            {/* System Sensor */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center">
              <div className="relative h-24 mb-6">
                <Image
                  src="/sistemas/sistemas-de-deteccion-de-incendios/lineas-comercializadas/system-sensor-min-300x92-1.png"
                  alt="System Sensor"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-lg mb-2">System Sensor</h3>
              <p className="text-gray-600 text-sm">Detectores de humo, calor y dispositivos de notificacion</p>
            </div>

            {/* VESDA */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center">
              <div className="relative h-24 mb-6">
                <Image
                  src="/sistemas/sistemas-de-deteccion-de-incendios/lineas-comercializadas/vesda-1-300x92-1.png"
                  alt="VESDA"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-lg mb-2">VESDA by Xtralis</h3>
              <p className="text-gray-600 text-sm">Sistemas de deteccion por aspiracion de humo de alta sensibilidad</p>
            </div>

            {/* Xtralis */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center">
              <div className="relative h-24 mb-6">
                <Image
                  src="/sistemas/sistemas-de-deteccion-de-incendios/lineas-comercializadas/xtralis-min-300x92-1.png"
                  alt="Xtralis"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-lg mb-2">Xtralis</h3>
              <p className="text-gray-600 text-sm">Tecnologia de deteccion temprana y analisis de video</p>
            </div>

            {/* Simplex */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center">
              <div className="relative h-24 mb-6">
                <Image
                  src="/sistemas/sistemas-de-deteccion-de-incendios/lineas-comercializadas/simplpex-min-300x92-1.png"
                  alt="Simplex"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-lg mb-2">Simplex</h3>
              <p className="text-gray-600 text-sm">Sistemas integrados de seguridad y proteccion contra incendios</p>
            </div>
          </div>
        </div>
      </section>

      {/* Por que elegirnos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Por que Elegirnos</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Distribuidor Autorizado</h3>
              <p className="text-gray-600 text-sm">Representantes oficiales de las marcas</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Stock Permanente</h3>
              <p className="text-gray-600 text-sm">Disponibilidad inmediata de equipos</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Soporte Tecnico</h3>
              <p className="text-gray-600 text-sm">Asistencia especializada postventa</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Garantia</h3>
              <p className="text-gray-600 text-sm">Productos con garantia de fabrica</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Consultanos por equipos y soluciones</h2>
          <p className="text-white/90 mb-8">Te asesoramos en la mejor solucion para tu proyecto</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5492995484575?text=Hola!%20Necesito%20informacion%20sobre%20equipos%20de%20deteccion"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Consultar por WhatsApp
            </a>
            <Link href="/sistemas/deteccion" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors">
              Ver sistemas de deteccion
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
