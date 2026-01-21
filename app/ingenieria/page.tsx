'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function IngenieriaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="ingenieria" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-gradient-to-r from-blue-800 to-blue-900 py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <span className="text-white">Ingenieria, Diseno y Auditoria</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Ingenieria, Diseno y Auditoria</h1>
          <p className="text-xl text-white/90">Proyectos integrales de proteccion contra incendios</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            Desarrollamos proyectos integrales de <strong>ingenieria, diseno y auditoria</strong> para sistemas de
            proteccion contra incendios, garantizando seguridad, eficiencia y cumplimiento normativo en
            instalaciones industriales, comerciales e infraestructura critica.
          </p>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nuestros Servicios</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Ingenieria y Diseno */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Ingenieria y Diseno</h3>
              <p className="text-gray-600 mb-6">
                Realizamos evaluaciones de riesgo, calculos hidraulicos, planos tecnicos y documentacion
                integral para todo tipo de sistemas contra incendios.
              </p>
              <h4 className="font-semibold mb-3 text-gray-800">Soluciones de diseno:</h4>
              <ul className="space-y-2">
                {[
                  'Sistemas de rociadores automaticos',
                  'Redes de hidrantes interiores y exteriores',
                  'Sistemas de espuma (baja, media y alta expansion)',
                  'Sistemas de deteccion y alarma (convencionales e inteligentes)',
                  'Sistemas de extincion por gases limpios (FM-200, Inergen, CO2)',
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Auditoria */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Auditoria y Verificacion Tecnica</h3>
              <p className="text-gray-600 mb-6">
                Brindamos auditorias tecnicas periodicas y diagnosticos completos para asegurar
                el correcto funcionamiento de tus sistemas de proteccion.
              </p>
              <h4 className="font-semibold mb-3 text-gray-800">Nuestras auditorias incluyen:</h4>
              <ul className="space-y-2">
                {[
                  'Evaluacion completa del sistema',
                  'Verificacion de cumplimiento normativo (NFPA, IRAM)',
                  'Diagnostico de funcionalidad y eficiencia',
                  'Informes tecnicos detallados',
                  'Planes de mejora y recomendaciones',
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nuestro Proceso</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Relevamiento',
                description: 'Visita tecnica para evaluar las instalaciones y riesgos especificos',
              },
              {
                step: '02',
                title: 'Analisis',
                description: 'Estudio detallado de normativas aplicables y requerimientos tecnicos',
              },
              {
                step: '03',
                title: 'Diseno',
                description: 'Elaboracion de planos, calculos y documentacion tecnica completa',
              },
              {
                step: '04',
                title: 'Entrega',
                description: 'Presentacion del proyecto con recomendaciones y presupuesto',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Normativas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Cumplimiento Normativo</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Todos nuestros proyectos cumplen con las normativas nacionales e internacionales mas exigentes
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">NFPA</span>
              </div>
              <h3 className="font-bold mb-2">National Fire Protection Association</h3>
              <p className="text-gray-600 text-sm">Normas internacionales de proteccion contra incendios</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">IRAM</span>
              </div>
              <h3 className="font-bold mb-2">Instituto Argentino de Normalizacion</h3>
              <p className="text-gray-600 text-sm">Normas nacionales de seguridad y calidad</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600">Ley 19587</span>
              </div>
              <h3 className="font-bold mb-2">Higiene y Seguridad en el Trabajo</h3>
              <p className="text-gray-600 text-sm">Legislacion argentina de seguridad laboral</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Necesitas un proyecto de ingenieria?
          </h2>
          <p className="text-white/90 mb-8">
            Contactanos para una evaluacion de tu instalacion y propuesta personalizada
          </p>
          <a
            href="https://wa.me/5492995484575?text=Hola!%20Necesito%20informacion%20sobre%20servicios%20de%20ingenieria%20y%20diseno"
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
