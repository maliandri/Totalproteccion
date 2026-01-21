'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CentralGasesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="sistemas" />

      <section className="relative w-full mt-20 bg-gradient-to-r from-purple-700 to-purple-900 py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/sistemas" className="hover:text-white">Sistemas</Link>
            <span>/</span>
            <Link href="/sistemas/mantenimiento" className="hover:text-white">Mantenimiento</Link>
            <span>/</span>
            <span className="text-white">Central de Gases</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Central de Carga de Gases Limpios</h1>
          <p className="text-xl text-white/90">Recarga y mantenimiento de sistemas de extincion por gases</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            Contamos con una <strong>central de carga especializada</strong> para el llenado y recarga de
            cilindros de gases limpios utilizados en sistemas de extincion de incendios. Nuestro servicio
            garantiza la disponibilidad y correcto funcionamiento de tu sistema de proteccion.
          </p>

          <h2 className="text-2xl font-bold mb-6">Gases que Recargamos</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              { name: 'FM-200 (HFC-227ea)', desc: 'Gas limpio de alta eficiencia' },
              { name: 'Novec 1230', desc: 'Agente limpio de ultima generacion' },
              { name: 'CO2 (Dioxido de Carbono)', desc: 'Para riesgos electricos y especiales' },
              { name: 'Gases Inertes (Argonite/Inergen)', desc: 'Mezclas de nitrogeno y argon' },
              { name: 'FE-13', desc: 'Para aplicaciones de baja temperatura' },
              { name: 'Halon (Solo recarga)', desc: 'Sistemas existentes certificados' },
            ].map((item, index) => (
              <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                <svg className="w-5 h-5 mr-3 text-purple-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-medium text-gray-800">{item.name}</span>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Recarga de Cilindros</h3>
              <p className="text-gray-600 text-sm">Llenado certificado con gases de alta pureza</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Prueba Hidrostatica</h3>
              <p className="text-gray-600 text-sm">Verificacion de integridad de cilindros</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Certificacion</h3>
              <p className="text-gray-600 text-sm">Documentacion y garantia de servicio</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Proceso de Recarga</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-purple-700 font-bold">1</span>
                <div>
                  <strong>Recepcion e inspeccion</strong> - Verificacion visual del estado del cilindro y valvulas
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-purple-700 font-bold">2</span>
                <div>
                  <strong>Vaciado controlado</strong> - Extraccion segura del gas remanente si corresponde
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-purple-700 font-bold">3</span>
                <div>
                  <strong>Prueba hidrostatica</strong> - Verificacion de la integridad estructural (si aplica)
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-purple-700 font-bold">4</span>
                <div>
                  <strong>Carga certificada</strong> - Llenado con gas de alta pureza al peso especificado
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-purple-700 font-bold">5</span>
                <div>
                  <strong>Verificacion y sellado</strong> - Control de presion y etiquetado normativo
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Por que elegirnos?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Equipamiento Certificado</h3>
              <p className="text-gray-600 text-sm">Equipos de carga de ultima generacion</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Personal Capacitado</h3>
              <p className="text-gray-600 text-sm">Tecnicos especializados en gases</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Rapida Respuesta</h3>
              <p className="text-gray-600 text-sm">Tiempos de entrega competitivos</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Documentacion Completa</h3>
              <p className="text-gray-600 text-sm">Certificados y trazabilidad</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-purple-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Necesitas recargar tu sistema de gases?</h2>
          <p className="text-white/90 mb-8">Contactanos para coordinar el servicio de recarga</p>
          <a
            href="https://wa.me/5492995484575?text=Hola!%20Necesito%20servicio%20de%20recarga%20de%20gases%20limpios"
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
