'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function DeteccionInteligentePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="sistemas" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-gradient-to-r from-cyan-700 to-cyan-900 py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/sistemas" className="hover:text-white">Sistemas</Link>
            <span>/</span>
            <Link href="/sistemas/deteccion" className="hover:text-white">Deteccion</Link>
            <span>/</span>
            <span className="text-white">Inteligente</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sistemas Inteligentes de Deteccion</h1>
          <p className="text-xl text-white/90">Identificacion punto a punto para instalaciones complejas</p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Los sistemas inteligentes son <strong>sistemas versatiles capaces de identificar
                punto a punto</strong> cada detector y elementos perifericos conectados al panel
                de control.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Soportan numerosos detectores con <strong>loops de 99 detectores o mas</strong> por
                unidad, con capacidad de interconectar multiples paneles para expandir la capacidad
                del sistema.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Incluyen software de graficos, paneles repetidores y displays alfanumericos para
                registro de eventos, con <strong>ajuste individual de sensibilidad</strong> de cada
                detector segun el ambiente y riesgo especifico.
              </p>
            </div>
            <div className="relative h-80 bg-gray-100 rounded-xl overflow-hidden">
              <Image
                src="/images/sistemas/deteccion-inteligente.png"
                alt="Sistema de deteccion inteligente"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Caracteristicas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Ventajas del Sistema Inteligente</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Identificacion Individual</h3>
              <p className="text-gray-600 text-sm">
                Cada detector tiene una direccion unica, permitiendo localizar exactamente donde se origina la alarma.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Alta Capacidad</h3>
              <p className="text-gray-600 text-sm">
                Loops de 99 o mas detectores por panel, con posibilidad de interconectar multiples paneles.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Sensibilidad Ajustable</h3>
              <p className="text-gray-600 text-sm">
                Ajuste individual de la sensibilidad de cada detector segun el ambiente especifico.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Registro de Eventos</h3>
              <p className="text-gray-600 text-sm">
                Historial completo de eventos con fecha, hora y ubicacion exacta.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Software de Graficos</h3>
              <p className="text-gray-600 text-sm">
                Visualizacion grafica del estado del sistema en planos de la instalacion.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Paneles Repetidores</h3>
              <p className="text-gray-600 text-sm">
                Displays remotos para monitoreo desde multiples ubicaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aplicaciones */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Aplicaciones Ideales</h2>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-cyan-50 p-4 rounded-lg text-center">
              <p className="font-medium text-cyan-800">Edificios corporativos</p>
            </div>
            <div className="bg-cyan-50 p-4 rounded-lg text-center">
              <p className="font-medium text-cyan-800">Centros comerciales</p>
            </div>
            <div className="bg-cyan-50 p-4 rounded-lg text-center">
              <p className="font-medium text-cyan-800">Hospitales</p>
            </div>
            <div className="bg-cyan-50 p-4 rounded-lg text-center">
              <p className="font-medium text-cyan-800">Hoteles</p>
            </div>
            <div className="bg-cyan-50 p-4 rounded-lg text-center">
              <p className="font-medium text-cyan-800">Plantas industriales</p>
            </div>
            <div className="bg-cyan-50 p-4 rounded-lg text-center">
              <p className="font-medium text-cyan-800">Universidades</p>
            </div>
            <div className="bg-cyan-50 p-4 rounded-lg text-center">
              <p className="font-medium text-cyan-800">Data centers</p>
            </div>
            <div className="bg-cyan-50 p-4 rounded-lg text-center">
              <p className="font-medium text-cyan-800">Aeropuertos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cyan-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Proteccion inteligente para tu instalacion
          </h2>
          <p className="text-white/90 mb-8">
            Diseñamos sistemas de deteccion inteligente adaptados a la complejidad de tu edificio
          </p>
          <a
            href="https://wa.me/5492995484575?text=Hola!%20Necesito%20informacion%20sobre%20sistemas%20de%20deteccion%20inteligente"
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
