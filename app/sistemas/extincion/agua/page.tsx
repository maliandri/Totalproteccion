'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ExtincionAguaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="sistemas" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-gradient-to-r from-blue-700 to-blue-900 py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/sistemas" className="hover:text-white">Sistemas</Link>
            <span>/</span>
            <Link href="/sistemas/extincion" className="hover:text-white">Extincion</Link>
            <span>/</span>
            <span className="text-white">Agua</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sistemas de Extincion a Base de Agua</h1>
          <p className="text-xl text-white/90">El agente extintor por excelencia</p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                El agua es el <strong>agente extintor por excelencia</strong> debido a su disponibilidad,
                bajo costo y eficacia comprobada. Las instalaciones de extincion a base de agua deben
                asegurar la disponibilidad continua de agua, caudales y presiones adecuadas, y equipos
                de extincion apropiados para cada aplicacion especifica.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ofrecemos soluciones completas que incluyen el diseno, provision e instalacion de
                sistemas de extincion con agua para todo tipo de riesgos industriales, comerciales
                y residenciales.
              </p>
            </div>
            <div className="relative h-80 bg-gray-100 rounded-xl overflow-hidden">
              <Image
                src="/images/sistemas/extincion-agua.png"
                alt="Sistema de extincion con agua"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Redes de Hidrantes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Redes de Hidrantes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="text-gray-600 mb-6">
                Los sistemas de hidrantes son de <strong>activacion manual</strong> y se disenan considerando
                los factores de riesgo (plantas industriales, edificios en altura, depositos, parques de tanques)
                y deben cumplir con los codigos de edificacion y normativas vigentes.
              </p>
              <h3 className="font-bold text-lg mb-4">Componentes del Sistema:</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Redes de distribucion en acero al carbono y PEAD
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Gabinetes interiores y exteriores equipados
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Mangueras certificadas
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Valvulas y lanzas de descarga
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-4">Aplicaciones Tipicas:</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-700">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </span>
                  <span>Plantas industriales y manufactura</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">2</span>
                  </span>
                  <span>Edificios en altura y centros comerciales</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">3</span>
                  </span>
                  <span>Depositos y centros logisticos</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">4</span>
                  </span>
                  <span>Parques de tanques y terminales</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sistemas de Rociadores */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Sistemas de Rociadores Automaticos</h2>
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <p className="text-gray-600 mb-6 leading-relaxed">
              Los sistemas de rociadores automaticos son <strong>ampliamente utilizados por su eficacia,
              simplicidad y capacidad de cubrir grandes superficies</strong> a un costo relativamente bajo.
              Requieren una cuidadosa evaluacion del tipo de rociador, materiales de caneria, calculos
              hidraulicos e integracion mecanica y arquitectonica para asegurar su correcto funcionamiento.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-bold mb-2">Activacion Automatica</h4>
                <p className="text-sm text-gray-600">Se activan automaticamente al detectar calor</p>
              </div>

              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-bold mb-2">Maxima Cobertura</h4>
                <p className="text-sm text-gray-600">Proteccion de grandes superficies</p>
              </div>

              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold mb-2">Costo Efectivo</h4>
                <p className="text-sm text-gray-600">Solucion economica y confiable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Solicita una cotizacion
          </h2>
          <p className="text-white/90 mb-8">
            Nuestro equipo de ingenieros evaluara tu instalacion y te ofrecera la mejor solucion
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5492995484575?text=Hola!%20Necesito%20cotizacion%20para%20sistema%20de%20extincion%20con%20agua"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Consultar por WhatsApp
            </a>
            <Link
              href="/sistemas/extincion"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Ver otros sistemas
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
