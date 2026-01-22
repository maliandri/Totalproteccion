'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function IngenieriaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="sistemas" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-gradient-to-r from-blue-800 to-blue-900 py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/sistemas" className="hover:text-white">Sistemas</Link>
            <span>/</span>
            <span className="text-white">Ingenieria, Diseno y Auditoria</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Ingenieria, Diseno y Auditoria</h1>
          <p className="text-xl text-white/90">Proyectos integrales de proteccion contra incendios</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            En <strong>Total Proteccion</strong> desarrollamos proyectos integrales de ingenieria, diseno y auditoria
            de sistemas de proteccion contra incendios, garantizando seguridad, eficiencia y cumplimiento normativo
            en entornos industriales, comerciales y de infraestructura critica.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Nuestro equipo de ingenieros especializados aplica los mas altos estandares tecnicos y de calidad,
            trabajando bajo normas <strong>NFPA, IRAM y FM Global</strong>, y sistemas de gestion certificados
            segun <strong>ISO 9001:2015</strong>.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Cada proyecto es concebido de manera personalizada, considerando las caracteristicas constructivas,
            operativas y de riesgo especificas de cada cliente.
          </p>
        </div>
      </section>

      {/* Ingenieria y Diseno */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Ingenieria y Diseno</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                La etapa de ingenieria es el corazon de cada solucion. Realizamos estudios de riesgo,
                calculos hidraulicos, planos y memorias tecnicas para garantizar que los sistemas de
                proteccion cumplan con todos los requerimientos de desempeno y confiabilidad.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Disenamos soluciones adaptadas a cada necesidad, incluyendo:
              </p>
              <ul className="space-y-3">
                {[
                  'Sistemas de rociadores automaticos (sprinklers)',
                  'Redes de hidrantes interiores y exteriores',
                  'Sistemas de espuma (baja, media y alta expansion)',
                  'Deteccion y alarma de incendio (convencional e inteligente)',
                  'Extincion por gases limpios (FM-200, Inergen, CO2)',
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 mt-6 leading-relaxed">
                Cada diseno es validado internamente por nuestro departamento tecnico, asegurando precision,
                trazabilidad y cumplimiento de la normativa vigente.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/ingenieria-diseno-1.jpg"
                alt="Ingeniería y diseño de sistemas contra incendios"
                width={1706}
                height={1280}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Auditoria */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/ingenieria-diseno-2.jpg"
                alt="Auditoría y verificación técnica de sistemas contra incendios"
                width={1706}
                height={1280}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Auditoria y Verificacion Tecnica</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A lo largo del ciclo de vida de una instalacion, es esencial evaluar periodicamente
                la eficacia de los sistemas contra incendio. Realizamos auditorias tecnicas y diagnosticos
                que permiten detectar desvios, optimizar el rendimiento de los equipos y garantizar la
                conformidad ante inspecciones o auditorias externas.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nuestro servicio de auditoria incluye:
              </p>
              <ul className="space-y-3">
                {[
                  'Relevamiento completo del sistema existente',
                  'Verificacion normativa segun NFPA, IRAM y FM Global',
                  'Diagnostico de funcionamiento y eficiencia',
                  'Informe tecnico con recomendaciones y plan de mejora',
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Normativas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Cumplimiento Normativo</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Trabajamos bajo las normas mas exigentes a nivel nacional e internacional,
            con sistemas de gestion certificados
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600">NFPA</span>
              </div>
              <h3 className="font-bold mb-2 text-sm">National Fire Protection Association</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600">IRAM</span>
              </div>
              <h3 className="font-bold mb-2 text-sm">Instituto Argentino de Normalizacion</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold text-blue-600">FM Global</span>
              </div>
              <h3 className="font-bold mb-2 text-sm">Factory Mutual Global</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold text-blue-600">ISO 9001</span>
              </div>
              <h3 className="font-bold mb-2 text-sm">Sistema de Gestion de Calidad</h3>
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
