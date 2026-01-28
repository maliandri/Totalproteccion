'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ElementosPerifericosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="sistemas" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-gradient-to-r from-emerald-600 to-teal-700 py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/sistemas" className="hover:text-white">Sistemas</Link>
            <span>/</span>
            <Link href="/sistemas/deteccion" className="hover:text-white">Deteccion</Link>
            <span>/</span>
            <span className="text-white">Elementos Perifericos</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Elementos Perifericos de Deteccion</h1>
          <p className="text-xl text-white/90">Componentes complementarios para sistemas de deteccion</p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-gray-600 mb-8 leading-relaxed text-center max-w-3xl mx-auto">
            Los <strong>elementos perifericos</strong> son componentes esenciales que complementan los sistemas
            de deteccion de incendios, permitiendo la activacion manual de alarmas, la notificacion visual y
            sonora, y la comunicacion con los ocupantes del edificio.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Avisadores Manuales */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="relative h-40 bg-gray-50 rounded-lg mb-4 overflow-hidden">
                <Image
                  src="/sistemas/sistemas-de-deteccion-de-incendios/elementos-perifericos-de-los-sistemas-de-deteccion/avisadormanualdeteccion.png"
                  alt="Avisador manual"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="font-bold text-lg mb-2">Avisadores Manuales</h3>
              <p className="text-gray-600 text-sm">Pulsadores de alarma para activacion manual del sistema por parte de los ocupantes</p>
            </div>

            {/* Sirenas */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="relative h-40 bg-emerald-50 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Sirenas y Campanas</h3>
              <p className="text-gray-600 text-sm">Dispositivos de alarma sonora para evacuacion y notificacion de emergencia</p>
            </div>

            {/* Luces Estroboscopicas */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="relative h-40 bg-emerald-50 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Luces Estroboscopicas</h3>
              <p className="text-gray-600 text-sm">Senalizacion visual de alarma para ambientes ruidosos o personas con discapacidad auditiva</p>
            </div>

            {/* Modulos de Control */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="relative h-40 bg-emerald-50 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Modulos de Control</h3>
              <p className="text-gray-600 text-sm">Interfaces para activacion de sistemas auxiliares como ventilacion y ascensores</p>
            </div>

            {/* Modulos de Monitoreo */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="relative h-40 bg-emerald-50 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Modulos de Monitoreo</h3>
              <p className="text-gray-600 text-sm">Supervision de dispositivos externos como valvulas, dampers y contactos</p>
            </div>

            {/* Anunciadores Remotos */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="relative h-40 bg-emerald-50 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Anunciadores Remotos</h3>
              <p className="text-gray-600 text-sm">Paneles de indicacion ubicados en recepcion o sala de seguridad</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Completa tu sistema de deteccion</h2>
          <p className="text-white/90 mb-8">Consultanos sobre elementos perifericos para tu instalacion</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5492995484575?text=Hola!%20Necesito%20cotizacion%20para%20elementos%20perifericos%20de%20deteccion"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Consultar por WhatsApp
            </a>
            <Link href="/sistemas/deteccion" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-emerald-600 px-6 py-3 rounded-lg font-semibold transition-colors">
              Ver otros sistemas
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
