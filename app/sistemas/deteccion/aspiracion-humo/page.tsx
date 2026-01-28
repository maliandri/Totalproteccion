'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AspiracionHumoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="sistemas" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-gradient-to-r from-slate-700 to-slate-900 py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/sistemas" className="hover:text-white">Sistemas</Link>
            <span>/</span>
            <Link href="/sistemas/deteccion" className="hover:text-white">Deteccion</Link>
            <span>/</span>
            <span className="text-white">Aspiracion de Humo</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sistemas de Aspiracion de Humo</h1>
          <p className="text-xl text-white/90">Deteccion temprana de alta sensibilidad - VESDA by Xtralis</p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Los sistemas de <strong>deteccion por aspiracion de humo (ASD)</strong> representan la
                tecnologia mas avanzada en deteccion temprana de incendios. Estos sistemas aspiran
                continuamente muestras de aire del area protegida y las analizan en busca de particulas
                de humo.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                La tecnologia <strong>VESDA by Xtralis</strong> es el estandar mundial en deteccion
                por aspiracion, ofreciendo la maxima sensibilidad y confiabilidad para proteger
                instalaciones criticas.
              </p>
            </div>
            <div className="relative h-80 bg-gray-100 rounded-xl overflow-hidden">
              <Image
                src="/sistemas/sistemas-de-deteccion-de-incendios/sistemas-de-aspiracion-de-humo/vesda-by-xtralis-reflex.png"
                alt="Sistema VESDA Xtralis"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Ventajas de la Deteccion por Aspiracion</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Deteccion Temprana</h3>
              <p className="text-sm text-gray-600">Detecta el humo en etapas muy tempranas del incendio</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Alta Sensibilidad</h3>
              <p className="text-sm text-gray-600">Sensibilidad ajustable segun el ambiente</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Ambientes Dificiles</h3>
              <p className="text-sm text-gray-600">Funciona en areas con flujo de aire elevado</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Sin Falsas Alarmas</h3>
              <p className="text-sm text-gray-600">Discriminacion inteligente de particulas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Aplicaciones */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Aplicaciones Tipicas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-4">Data Centers</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-500 rounded-full mr-2"></span>Salas de servidores</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-500 rounded-full mr-2"></span>Centros de datos</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-500 rounded-full mr-2"></span>Salas de telecomunicaciones</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-4">Instalaciones Criticas</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-500 rounded-full mr-2"></span>Hospitales</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-500 rounded-full mr-2"></span>Laboratorios</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-500 rounded-full mr-2"></span>Salas limpias</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-4">Patrimonio Cultural</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-500 rounded-full mr-2"></span>Museos y galerias</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-500 rounded-full mr-2"></span>Archivos historicos</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-500 rounded-full mr-2"></span>Bibliotecas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VESDA */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Tecnologia VESDA by Xtralis</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                VESDA es el sistema de deteccion por aspiracion mas reconocido a nivel mundial.
                Utiliza tecnologia laser para detectar particulas de humo invisibles al ojo humano,
                proporcionando el mayor tiempo de respuesta posible.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-white/90">
                  <svg className="w-5 h-5 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Deteccion laser de alta precision
                </li>
                <li className="flex items-center text-white/90">
                  <svg className="w-5 h-5 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Multiples niveles de alarma programables
                </li>
                <li className="flex items-center text-white/90">
                  <svg className="w-5 h-5 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Conectividad de red avanzada
                </li>
                <li className="flex items-center text-white/90">
                  <svg className="w-5 h-5 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Autodiagnostico continuo
                </li>
              </ul>
            </div>
            <div className="relative h-64 bg-slate-700 rounded-xl overflow-hidden">
              <Image
                src="/sistemas/sistemas-de-deteccion-de-incendios/sistemas-de-aspiracion-de-humo/vesdaxtralis.png"
                alt="VESDA Xtralis Logo"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Protege tus instalaciones criticas</h2>
          <p className="text-white/90 mb-8">Consultanos sobre sistemas de deteccion por aspiracion VESDA</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5492995484575?text=Hola!%20Necesito%20cotizacion%20para%20sistema%20VESDA%20de%20aspiracion%20de%20humo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Consultar por WhatsApp
            </a>
            <Link href="/sistemas/deteccion" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-slate-700 px-6 py-3 rounded-lg font-semibold transition-colors">
              Ver otros sistemas
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
