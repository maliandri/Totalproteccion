'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function BarrerasInfrarrojasPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="sistemas" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-gradient-to-r from-red-700 to-rose-800 py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/sistemas" className="hover:text-white">Sistemas</Link>
            <span>/</span>
            <Link href="/sistemas/deteccion" className="hover:text-white">Deteccion</Link>
            <span>/</span>
            <span className="text-white">Barreras Infrarrojas</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Barreras Infrarrojas</h1>
          <p className="text-xl text-white/90">Deteccion de humo lineal para grandes espacios</p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Las <strong>barreras infrarrojas de deteccion de humo</strong> son dispositivos opticos
                que detectan la presencia de humo mediante la interrupcion de un haz de luz infrarroja
                entre un emisor y un receptor.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Son ideales para <strong>espacios de gran altura y grandes superficies</strong> donde
                los detectores puntuales convencionales no son practicos o efectivos, como naves
                industriales, depositos, iglesias, museos y atrios.
              </p>
            </div>
            <div className="relative h-80 bg-gray-100 rounded-xl overflow-hidden">
              <Image
                src="/sistemas/sistemas-de-deteccion-de-incendios/barreras-infrarrojas/notifier-barrera-infrarroja-min-1.png"
                alt="Barrera infrarroja Notifier"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Como Funciona</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-red-600">1</span>
              </div>
              <h3 className="font-bold mb-2">Emision</h3>
              <p className="text-gray-600 text-sm">El transmisor emite un haz de luz infrarroja hacia el receptor</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-red-600">2</span>
              </div>
              <h3 className="font-bold mb-2">Deteccion</h3>
              <p className="text-gray-600 text-sm">El humo interrumpe o atenua el haz de luz infrarroja</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-red-600">3</span>
              </div>
              <h3 className="font-bold mb-2">Alarma</h3>
              <p className="text-gray-600 text-sm">El receptor detecta la variacion y activa la alarma</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Ventajas del Sistema</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 mr-3 text-red-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-bold">Cobertura de hasta 100 metros</h3>
                  <p className="text-gray-600 text-sm">Un solo par emisor/receptor cubre distancias de hasta 100m</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 mr-3 text-red-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-bold">Ideal para techos altos</h3>
                  <p className="text-gray-600 text-sm">Perfecto para alturas superiores a 12 metros</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 mr-3 text-red-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-bold">Facil instalacion</h3>
                  <p className="text-gray-600 text-sm">Menor cableado que sistemas de detectores puntuales</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 mr-3 text-red-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-bold">Menor mantenimiento</h3>
                  <p className="text-gray-600 text-sm">Acceso simplificado a los equipos para servicio</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 mr-3 text-red-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-bold">Compensacion automatica</h3>
                  <p className="text-gray-600 text-sm">Ajuste automatico por suciedad y condiciones ambientales</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 mr-3 text-red-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-bold">Estetica minima</h3>
                  <p className="text-gray-600 text-sm">Impacto visual reducido en el espacio protegido</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aplicaciones */}
      <section className="py-16 bg-red-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Aplicaciones Tipicas</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {['Naves industriales', 'Depositos y almacenes', 'Iglesias y catedrales', 'Museos y galerias', 'Atrios y lobbies', 'Hangares', 'Centros comerciales', 'Estadios y arenas'].map((app, i) => (
              <div key={i} className="bg-white p-4 rounded-lg text-center shadow-sm">
                <p className="font-medium text-gray-700">{app}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Protege espacios de gran escala</h2>
          <p className="text-white/90 mb-8">Consultanos sobre barreras infrarrojas para tu instalacion</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5492995484575?text=Hola!%20Necesito%20cotizacion%20para%20barreras%20infrarrojas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Consultar por WhatsApp
            </a>
            <Link href="/sistemas/deteccion" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-red-700 px-6 py-3 rounded-lg font-semibold transition-colors">
              Ver otros sistemas
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
