'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const agentes = [
  {
    title: 'Gases Limpios (FM200/HFC-227ea)',
    description: 'Actuan interrumpiendo la reaccion en cadena de la combustion. Se descargan en menos de 10 segundos sin dejar residuos.',
    features: ['Sin residuos', 'Descarga rapida', 'Seguro para personas', 'Ideal para electronica'],
    color: 'bg-purple-600',
  },
  {
    title: 'Dioxido de Carbono (CO2)',
    description: 'Actua por desplazamiento de oxigeno. Requiere un diseno preciso y protocolos de seguridad estrictos.',
    features: ['Alta efectividad', 'Sin dano a equipos', 'Requiere evacuacion', 'Bajo costo'],
    color: 'bg-gray-700',
  },
  {
    title: 'Gases Inertes (Argonite)',
    description: 'Mezcla 50/50 de argon y nitrogeno. Proteccion eficaz con cero impacto ambiental.',
    features: ['Ecologico', 'No depleta ozono', 'Seguro', 'Larga vida util'],
    color: 'bg-green-600',
  },
]

export default function ExtincionGasesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="sistemas" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-gradient-to-r from-purple-700 to-purple-900 py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/sistemas" className="hover:text-white">Sistemas</Link>
            <span>/</span>
            <Link href="/sistemas/extincion" className="hover:text-white">Extincion</Link>
            <span>/</span>
            <span className="text-white">Gases</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Extincion por Gases</h1>
          <p className="text-xl text-white/90">Proteccion para equipos electricos y areas criticas</p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Los sistemas de extincion por gases estan especialmente disenados para proteger
                <strong> equipos electricos, salas informaticas, equipos de telefonia, generadores
                de electricidad</strong> y activos de alto valor donde el agua o la espuma causarian
                danos irreparables.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Estos sistemas funcionan mediante <strong>inundacion total</strong> (para recintos cerrados)
                o <strong>proteccion localizada</strong> (para areas abiertas), segun la evaluacion
                de riesgos y el agente extintor seleccionado.
              </p>
            </div>
            <div className="relative h-80 bg-gray-100 rounded-xl overflow-hidden">
              <Image
                src="/images/sistemas/extincion-gases.png"
                alt="Sistema de extincion por gases"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Agentes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Tipos de Agentes Extintores</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Seleccionamos el agente mas adecuado segun las caracteristicas del riesgo a proteger
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {agentes.map((agente, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`${agente.color} p-6 text-white`}>
                  <h3 className="text-xl font-bold">{agente.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm">{agente.description}</p>
                  <ul className="space-y-2">
                    {agente.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aplicaciones */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Aplicaciones Ideales</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Data Centers</h3>
              <p className="text-gray-600 text-sm">Salas de servidores y centros de datos</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Salas Electricas</h3>
              <p className="text-gray-600 text-sm">Tableros y subestaciones</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Telecomunicaciones</h3>
              <p className="text-gray-600 text-sm">Centrales telefonicas y nodos</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Archivos</h3>
              <p className="text-gray-600 text-sm">Documentos y obras de arte</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-purple-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Protege tus activos criticos
          </h2>
          <p className="text-white/90 mb-8">
            Diseñamos sistemas de extincion por gases adaptados a tus necesidades
          </p>
          <a
            href="https://wa.me/5492995484575?text=Hola!%20Necesito%20informacion%20sobre%20sistemas%20de%20extincion%20por%20gases"
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
