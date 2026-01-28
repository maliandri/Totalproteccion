'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function VehiculosPesadosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="sistemas" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-gradient-to-r from-orange-600 to-red-700 py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/sistemas" className="hover:text-white">Sistemas</Link>
            <span>/</span>
            <Link href="/sistemas/extincion" className="hover:text-white">Extincion</Link>
            <span>/</span>
            <span className="text-white">Vehiculos Pesados</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Extincion de Incendios en Vehiculos Pesados</h1>
          <p className="text-xl text-white/90">Sistemas Amerex de disparo automatico</p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Los sistemas de extincion de incendios de vehiculos pesados <strong>Amerex</strong> son sistemas de
                <strong> Extincion por Polvo Quimico Seco</strong>, de disparo automatico, que se utilizan en
                Transporte de Pasajeros y en Vehiculos de todo tipo que operan fuera de la carretera.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Este efectivo sistema de proteccion es adecuado para <strong>Mineria, Gestion de Residuos,
                Transporte de Pasajeros</strong> de Mediana y Larga distancia, la Industria Maderera,
                Equipos de Agricultura, Equipos Viales y de la Construccion.
              </p>
            </div>
            <div className="relative h-80 bg-gray-100 rounded-xl overflow-hidden">
              <Image
                src="/sistemas/sistemas-de-extincion-de-incendios/extincion-de-incendios-en-vehiculos-pesados/vehiculos-pesados-amerex.jpg"
                alt="Sistema de extincion vehiculos pesados Amerex"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Aplicaciones */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Aplicaciones</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3">Mineria y Construccion</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>Bulldozer y Topadoras</li>
                <li>Cargadores Rodantes</li>
                <li>Trituradoras y Perforadoras</li>
                <li>Retroexcavadoras</li>
                <li>Motoniveladoras</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3">Transporte y Logistica</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>Autobuses de larga distancia</li>
                <li>Camiones de Carga</li>
                <li>Gruas moviles y portuarias</li>
                <li>Gruas containeras</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3">Agricultura e Industria</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>Cosechadoras y Sembradoras</li>
                <li>Tractores y Pulverizadores</li>
                <li>Equipos forestales</li>
                <li>Motores estacionarios</li>
                <li>Generadores</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Como Funciona el Sistema</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h4 className="font-bold mb-2">Inicio del Fuego</h4>
              <p className="text-sm text-gray-600">El fuego comienza en la maquina produciendo calor y gases toxicos</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">2</span>
              </div>
              <h4 className="font-bold mb-2">Deteccion</h4>
              <p className="text-sm text-gray-600">Los detectores sienten el calor y envian senal al panel de control</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">3</span>
              </div>
              <h4 className="font-bold mb-2">Activacion</h4>
              <p className="text-sm text-gray-600">El panel interpreta la senal y activa la alarma para detener el equipo</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">4</span>
              </div>
              <h4 className="font-bold mb-2">Extincion</h4>
              <p className="text-sm text-gray-600">El fuego es apagado permitiendo evacuar y usar extintor portatil</p>
            </div>
          </div>
        </div>
      </section>

      {/* Panel de Control */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Panel de Control</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                El Panel de Control (PC) es el <strong>"cerebro" del sistema</strong>. Interpreta la senal
                de los circuitos detectores e inicia la descarga del cilindro, simultaneamente operando
                los contactos de rele que pueden ser usados para:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Detener el flujo del combustible
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Detener el motor de la maquina
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cualquier otro accionamiento periferico
                </li>
              </ul>
            </div>
            <div className="relative h-80 bg-gray-100 rounded-xl overflow-hidden">
              <Image
                src="/sistemas/sistemas-de-extincion-de-incendios/extincion-de-incendios-en-vehiculos-pesados/vehiculos-amerex.jpg"
                alt="Panel de control Amerex"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sistema Doble Descarga */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-orange-50 p-8 rounded-xl border border-orange-200">
            <h2 className="text-2xl font-bold mb-4">Sistema de Doble Descarga</h2>
            <p className="text-gray-600 leading-relaxed">
              Para maquinaria de <strong>gran costo de recompra</strong> o con posibilidades altas de reencendido,
              se puede disponer de un sistema de doble descarga. En una primera etapa se trata de un sistema
              equivalente al de descarga sencilla, luego se realiza una <strong>descarga de agente liquido</strong>,
              que mejora la posibilidad de evitar una reignicion.
            </p>
          </div>
        </div>
      </section>

      {/* Beneficios de Seguros */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Beneficios en Seguros</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Los sistemas de extincion de incendios de vehiculos Amerex pueden facilitar la obtencion de un seguro
            y tambien ayudarlo a calificar para <strong>primas mas bajas</strong>. Muchas companias de seguros han
            reconocido una reduccion en las reclamaciones pagadas debido a la presencia de un sistema fijo de
            extincion de incendios en vehiculos.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Protege tu flota de vehiculos
          </h2>
          <p className="text-white/90 mb-8">
            Nuestro equipo te asesora en la mejor solucion para tu maquinaria
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5492995484575?text=Hola!%20Necesito%20cotizacion%20para%20sistema%20de%20extincion%20en%20vehiculos%20pesados"
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
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-orange-600 px-6 py-3 rounded-lg font-semibold transition-colors"
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
