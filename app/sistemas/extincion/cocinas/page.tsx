'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ExtincionCocinasPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="sistemas" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-gradient-to-r from-red-600 to-red-800 py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/sistemas" className="hover:text-white">Sistemas</Link>
            <span>/</span>
            <Link href="/sistemas/extincion" className="hover:text-white">Extincion</Link>
            <span>/</span>
            <span className="text-white">Cocinas</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sistemas de Extincion en Cocinas</h1>
          <p className="text-xl text-white/90">Proteccion especializada para cocinas comerciales e industriales</p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <strong>Llamas abiertas, superficies de coccion al rojo vivo y un ambiente muy cargado de grasa</strong>
                se combinan para hacer de la cocina comercial moderna un riesgo de incendio potencialmente peligroso.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Los sistemas de extincion para cocinas utilizan tecnologia de <strong>nebulizacion avanzada</strong>
                diseñada especificamente para fuegos de clase K (aceites y grasas de cocina), proporcionando
                una supresion rapida antes de que el fuego se propague.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Importante:</strong> Los matafuegos de agua o ABC NO deben usarse en fuegos de aceite
                  caliente ya que pueden causar explosiones y propagar el fuego.
                </p>
              </div>
            </div>
            <div className="relative h-80 bg-gray-100 rounded-xl overflow-hidden">
              <Image
                src="/images/sistemas/extincion-cocinas.png"
                alt="Sistema de extincion para cocinas"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Caracteristicas del Sistema */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Caracteristicas del Sistema</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Activacion Rapida</h3>
              <p className="text-gray-600 text-sm">Deteccion y descarga automatica en segundos</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Certificado UL-300</h3>
              <p className="text-gray-600 text-sm">Cumple con las normas mas exigentes</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Instalacion 50% mas Rapida</h3>
              <p className="text-gray-600 text-sm">Sistema de cables armados en lugar de ductos</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Boquillas Codificadas</h3>
              <p className="text-gray-600 text-sm">5 tipos de boquillas con bandas de identificacion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Normativas */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Cumplimiento Normativo</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
              <h3 className="font-bold text-lg mb-2">UL-300</h3>
              <p className="text-gray-600 text-sm">Certificacion de sistemas de extincion para cocinas comerciales</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
              <h3 className="font-bold text-lg mb-2">NFPA-96</h3>
              <p className="text-gray-600 text-sm">Norma para ventilacion y proteccion contra incendios en operaciones de cocina</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
              <h3 className="font-bold text-lg mb-2">NFPA-17A</h3>
              <p className="text-gray-600 text-sm">Sistemas de extincion con agentes humedos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donde se aplica */}
      <section className="py-16 bg-red-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Donde se Aplica</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-4 text-red-600">Gastronomia</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Restaurantes</li>
                <li>• Bares y pubs</li>
                <li>• Cafeterias</li>
                <li>• Food trucks</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-4 text-red-600">Institucional</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Hospitales</li>
                <li>• Escuelas y universidades</li>
                <li>• Comedores industriales</li>
                <li>• Hoteles</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-4 text-red-600">Comercial</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Supermercados</li>
                <li>• Centros comerciales</li>
                <li>• Patios de comida</li>
                <li>• Catering industrial</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Protege tu cocina comercial
          </h2>
          <p className="text-white/90 mb-8">
            Instalamos sistemas de extincion certificados para cocinas de todo tipo
          </p>
          <a
            href="https://wa.me/5492995484575?text=Hola!%20Necesito%20informacion%20sobre%20sistemas%20de%20extincion%20para%20cocinas"
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
