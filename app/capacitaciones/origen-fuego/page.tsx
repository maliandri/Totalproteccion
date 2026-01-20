'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const elementosFuego = [
  {
    nombre: 'Calor',
    icono: '🔥',
    color: 'bg-orange-500',
    descripcion: 'Energía que inicia la combustión',
    fuentes: [
      'Chispas eléctricas',
      'Fricción entre superficies',
      'Llamas abiertas',
      'Reacciones químicas',
      'Superficies sobrecalentadas',
    ],
    detalle: 'Cuando los materiales alcanzan su temperatura de ignición, comienza la combustión.',
  },
  {
    nombre: 'Combustible',
    icono: '🪵',
    color: 'bg-amber-700',
    descripcion: 'Sustancia capaz de arder',
    fuentes: [
      'Sólidos: madera, cartón, plásticos, telas',
      'Líquidos: alcohol, nafta, aceites',
      'Gases: butano, propano, hidrógeno',
    ],
    detalle: 'Todo material que puede oxidarse rápidamente liberando energía.',
  },
  {
    nombre: 'Oxígeno',
    icono: '💨',
    color: 'bg-blue-500',
    descripcion: 'Agente oxidante (comburente)',
    fuentes: [
      'Aire atmosférico (~21% oxígeno)',
      'Oxígeno almacenado',
      'Sustancias oxidantes',
    ],
    detalle: 'El aire contiene aproximadamente 21% de oxígeno, suficiente para mantener la combustión.',
  },
  {
    nombre: 'Reacción en Cadena',
    icono: '⚡',
    color: 'bg-yellow-500',
    descripcion: 'Proceso autosostenido',
    fuentes: [
      'Radicales libres generados',
      'Energía liberada retroalimenta',
      'Ciclo continuo de combustión',
    ],
    detalle: 'Proceso que mantiene la combustión una vez iniciada, generando más calor que reactiva el ciclo.',
  },
]

const metodosExtincion = [
  {
    elemento: 'Calor',
    metodo: 'Enfriamiento',
    descripcion: 'Reducir la temperatura por debajo del punto de ignición',
    ejemplos: 'Rociadores automáticos, agua nebulizada, mantas ignífugas',
    color: 'border-orange-500',
  },
  {
    elemento: 'Combustible',
    metodo: 'Eliminación',
    descripcion: 'Retirar o aislar el material combustible',
    ejemplos: 'Corte de suministro de gas, remoción de materiales, cortafuegos',
    color: 'border-amber-700',
  },
  {
    elemento: 'Oxígeno',
    metodo: 'Sofocación',
    descripcion: 'Impedir el contacto del fuego con el oxígeno',
    ejemplos: 'Espumas, CO2, mantas ignífugas, arena',
    color: 'border-blue-500',
  },
  {
    elemento: 'Reacción',
    metodo: 'Inhibición',
    descripcion: 'Interrumpir la reacción química en cadena',
    ejemplos: 'Polvo químico seco, agentes limpios (gases halogenados)',
    color: 'border-yellow-500',
  },
]

export default function OrigenFuegoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="capacitaciones" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-gradient-to-r from-orange-600 to-red-600 py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/capacitaciones" className="hover:text-white">Capacitaciones</Link>
            <span>/</span>
            <span className="text-white">Origen del Fuego</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Origen del Fuego</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Comprender cómo se origina el fuego es el primer paso para poder prevenirlo y controlarlo eficazmente.
          </p>
        </div>
      </section>

      {/* ¿Qué es el Fuego? */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wide mb-2">CONCEPTO FUNDAMENTAL</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">¿Qué es el Fuego?</h2>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              El fuego es una <strong>reacción química de combustión rápida</strong> que libera calor, luz y gases. Es una oxidación exotérmica que se produce cuando un combustible reacciona con un oxidante (generalmente oxígeno) en presencia de calor.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <h3 className="font-bold text-green-800 mb-2">Fuego Controlado</h3>
                <p className="text-green-700 text-sm">
                  Reacción química controlada con aplicaciones útiles o industriales: cocinar, soldar, calderas, calefacción.
                </p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h3 className="font-bold text-red-800 mb-2">Incendio</h3>
                <p className="text-red-700 text-sm">
                  Fuego que se propaga de manera no deseada, representando peligro para personas, bienes y medio ambiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tetraedro del Fuego */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wide mb-2">LOS 4 ELEMENTOS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">El Tetraedro del Fuego</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Antiguamente se hablaba del "triángulo del fuego" (calor, combustible, oxígeno). La ciencia moderna agregó un cuarto elemento: la reacción en cadena.
            </p>
          </div>

          {/* Tetraedro Visual */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex justify-center mb-8">
              <div className="relative w-64 h-64">
                {/* Tetraedro simplificado */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
                  🔥
                </div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-amber-700 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
                  🪵
                </div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
                  💨
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
                  ⚡
                </div>
                {/* Líneas conectoras */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 256 256">
                  <line x1="128" y1="40" x2="40" y2="216" stroke="#ccc" strokeWidth="2" />
                  <line x1="128" y1="40" x2="216" y2="216" stroke="#ccc" strokeWidth="2" />
                  <line x1="40" y1="216" x2="216" y2="216" stroke="#ccc" strokeWidth="2" />
                  <line x1="128" y1="128" x2="128" y2="40" stroke="#ccc" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="128" y1="128" x2="40" y2="216" stroke="#ccc" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="128" y1="128" x2="216" y2="216" stroke="#ccc" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
              </div>
            </div>
            <p className="text-center text-gray-600">
              <strong>Si falta cualquiera de estos 4 elementos, el fuego no puede existir o se extingue.</strong>
            </p>
          </div>

          {/* Elementos detallados */}
          <div className="grid md:grid-cols-2 gap-6">
            {elementosFuego.map((elemento, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`${elemento.color} p-4 flex items-center gap-4`}>
                  <span className="text-4xl">{elemento.icono}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{elemento.nombre}</h3>
                    <p className="text-white/80 text-sm">{elemento.descripcion}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{elemento.detalle}</p>
                  <p className="text-sm font-semibold text-gray-500 mb-2">Fuentes / Ejemplos:</p>
                  <ul className="space-y-1">
                    {elemento.fuentes.map((fuente, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-gray-400">•</span>
                        {fuente}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Métodos de Extinción */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wide mb-2">PRINCIPIOS DE EXTINCIÓN</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">¿Cómo se Extingue el Fuego?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Para extinguir un fuego, debemos eliminar al menos uno de los cuatro elementos del tetraedro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {metodosExtincion.map((metodo, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${metodo.color}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                    Eliminar {metodo.elemento}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{metodo.metodo}</h3>
                <p className="text-gray-600 mb-4">{metodo.descripcion}</p>
                <p className="text-sm text-gray-500">
                  <strong>Ejemplos:</strong> {metodo.ejemplos}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Importancia */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              ¿Por qué es importante conocer esto?
            </h3>
            <p className="text-blue-700 leading-relaxed mb-4">
              Entender el origen del fuego nos permite:
            </p>
            <ul className="space-y-2 text-blue-700">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <strong>Prevenir incendios</strong> eliminando posibles fuentes de ignición
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <strong>Elegir el extintor correcto</strong> según el tipo de fuego
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <strong>Actuar correctamente</strong> en caso de emergencia
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <strong>Diseñar sistemas de protección</strong> eficaces para cada situación
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Continuá aprendiendo
          </h2>
          <p className="text-white/90 mb-8">
            Ahora que conocés cómo se origina el fuego, aprendé sobre las diferentes clases de fuego y qué extintor usar en cada caso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/capacitaciones/clases-fuego"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-red-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Clases de Fuego
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/capacitaciones/tipos-matafuegos"
              className="inline-flex items-center gap-2 bg-orange-700 hover:bg-orange-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Tipos de Matafuegos
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
