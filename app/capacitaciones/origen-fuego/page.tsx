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
    descripcion: 'Energia que inicia la combustion',
    fuentes: [
      'Chispas electricas',
      'Friccion entre superficies',
      'Llamas abiertas',
      'Reacciones quimicas',
      'Superficies sobrecalentadas',
    ],
    detalle: 'Es la energia que inicia el proceso de combustion. Si un material alcanza su temperatura de ignicion, puede comenzar a arder.',
  },
  {
    nombre: 'Combustible',
    icono: '🪵',
    color: 'bg-amber-700',
    descripcion: 'Sustancia capaz de arder',
    fuentes: [
      'Solidos: madera, carton, plasticos, telas',
      'Liquidos inflamables: alcohol, nafta, aceite',
      'Gases: butano, propano, hidrogeno',
    ],
    detalle: 'Es la sustancia capaz de arder. Puede presentarse en diferentes estados. Sin combustible, no hay fuego posible.',
  },
  {
    nombre: 'Oxigeno',
    icono: '💨',
    color: 'bg-blue-500',
    descripcion: 'Agente comburente',
    fuentes: [
      'Aire atmosferico (~21% oxigeno)',
      'Oxigeno almacenado',
      'Materiales con oxigeno en su composicion',
    ],
    detalle: 'Es el agente comburente que permite la reaccion quimica. El aire contiene aproximadamente un 21% de oxigeno, suficiente para mantener la combustion.',
  },
  {
    nombre: 'Reaccion en Cadena',
    icono: '⚡',
    color: 'bg-yellow-500',
    descripcion: 'Proceso autosostenido',
    fuentes: [
      'Radicales libres generados',
      'Energia liberada retroalimenta',
      'Ciclo continuo de combustion',
    ],
    detalle: 'Es el proceso que mantiene el fuego activo una vez iniciado. Los radicales libres generados durante la combustion reactivan el ciclo continuamente.',
  },
]

const metodosExtincion = [
  {
    elemento: 'Calor',
    efecto: 'Enfriamiento',
    ejemplo: 'Rociadores automaticos, agua nebulizada',
    color: 'bg-orange-100',
  },
  {
    elemento: 'Combustible',
    efecto: 'Supresion del material',
    ejemplo: 'Corte de gas, retirada de materiales combustibles',
    color: 'bg-amber-100',
  },
  {
    elemento: 'Oxigeno',
    efecto: 'Sofocacion',
    ejemplo: 'Espumas, CO2, mantas ignifugas',
    color: 'bg-blue-100',
  },
  {
    elemento: 'Reaccion quimica',
    efecto: 'Interrupcion del proceso',
    ejemplo: 'Polvo quimico seco, agente limpio',
    color: 'bg-yellow-100',
  },
]

const preguntasFrecuentes = [
  {
    pregunta: '¿Que es el tetraedro del fuego?',
    respuesta: 'Es un modelo que explica los cuatro elementos necesarios para que se produzca el fuego: calor, combustible, oxigeno y reaccion quimica en cadena.',
  },
  {
    pregunta: '¿Por que se reemplazo el triangulo del fuego por un tetraedro?',
    respuesta: 'Porque el triangulo no contemplaba la reaccion quimica que mantiene el fuego activo. El tetraedro incorpora este componente esencial para comprender como se inicia y sostiene la combustion.',
  },
  {
    pregunta: '¿Que fuentes de calor pueden causar un incendio?',
    respuesta: 'Equipos electricos defectuosos, friccion mecanica, chispas o llamas abiertas, reacciones quimicas espontaneas y superficies calientes sin aislamiento.',
  },
  {
    pregunta: '¿Que rol cumple el oxigeno en la combustion?',
    respuesta: 'Permite que el combustible reaccione. Su presencia en el aire hace posible que la mayoria de los fuegos se inicien y propaguen. Al reducir su concentracion, el fuego se apaga.',
  },
  {
    pregunta: '¿Que agentes interrumpen la reaccion quimica en cadena?',
    respuesta: 'El polvo quimico seco y algunos agentes limpios interrumpen la reaccion, especialmente en fuegos de liquidos inflamables o gases.',
  },
  {
    pregunta: '¿Basta con eliminar un solo elemento para apagar el fuego?',
    respuesta: 'Si. La ausencia de cualquier elemento del tetraedro impide que el fuego se inicie o continue. Los sistemas de extincion estan disenados para actuar sobre uno o mas de estos elementos segun el tipo de riesgo.',
  },
  {
    pregunta: '¿Donde se aplican estos conceptos?',
    respuesta: 'En todas las estrategias de prevencion y combate de incendios: desde la seleccion de un extintor hasta el diseno de sistemas automaticos para industrias, cocinas, medios de transporte y espacios publicos.',
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
          <p className="text-white/80 text-sm uppercase tracking-wide mb-2">CAPACITACION</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">¿Como se origina el fuego?</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            El fuego es una reaccion quimica de combustion rapida que libera calor, luz y gases.
            Comprender como se produce es el primer paso para prevenir incendios y actuar con eficacia en situaciones de riesgo.
          </p>
        </div>
      </section>

      {/* Tetraedro del Fuego */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wide mb-2">LOS CUATRO ELEMENTOS FUNDAMENTALES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">El tetraedro del fuego</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Para que el fuego exista y se mantenga, deben estar presentes cuatro elementos.
              Esta relacion se representa mediante el tetraedro del fuego, una evolucion del antiguo "triangulo del fuego".
            </p>
          </div>

          {/* Tetraedro Visual */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
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
                {/* Lineas conectoras */}
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
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className={`${elemento.color} p-4 flex items-center gap-4`}>
                  <span className="text-4xl">{elemento.icono}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{index + 1}. {elemento.nombre}</h3>
                    <p className="text-white/80 text-sm">{elemento.descripcion}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{elemento.detalle}</p>
                  <p className="text-sm font-semibold text-gray-500 mb-2">Puede generarse por:</p>
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

      {/* Metodos de Extincion - Tabla */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wide mb-2">PRINCIPIOS DE EXTINCION</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">¿Que ocurre si se elimina uno de los elementos?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              La extincion del fuego se logra al eliminar uno de los componentes del tetraedro.
              Esto es la base de los distintos metodos de extincion.
            </p>
          </div>

          {/* Tabla de metodos */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Elemento eliminado</th>
                  <th className="px-6 py-4 text-left font-semibold">Efecto obtenido</th>
                  <th className="px-6 py-4 text-left font-semibold">Ejemplo practico</th>
                </tr>
              </thead>
              <tbody>
                {metodosExtincion.map((metodo, index) => (
                  <tr key={index} className={`${metodo.color} border-b border-gray-200`}>
                    <td className="px-6 py-4 font-medium text-gray-800">{metodo.elemento}</td>
                    <td className="px-6 py-4 text-gray-700">{metodo.efecto}</td>
                    <td className="px-6 py-4 text-gray-600">{metodo.ejemplo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Diferencia entre fuego e incendio */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wide mb-2">CONCEPTO CLAVE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Diferencia entre fuego e incendio</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Aunque suelen confundirse, fuego e incendio no son lo mismo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Fuego</h3>
              <p className="text-green-700 leading-relaxed">
                Es una reaccion quimica <strong>controlada</strong> que puede tener usos utiles o industriales.
              </p>
              <p className="text-green-600 mt-4 text-sm">
                <strong>Ejemplos:</strong> una cocina, una soldadura, una caldera.
              </p>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-red-800 mb-4">Incendio</h3>
              <p className="text-red-700 leading-relaxed">
                Es un fuego <strong>fuera de control</strong>, que se propaga de forma no deseada y representa un peligro para las personas, los bienes y el ambiente.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
            <p className="text-blue-800">
              <strong>Esta distincion es clave en la formacion en seguridad y prevencion:</strong> lo que se busca evitar no es el fuego en si, sino su manifestacion no controlada.
            </p>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wide mb-2">DUDAS COMUNES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Preguntas frecuentes sobre el origen del fuego</h2>
          </div>

          <div className="space-y-4">
            {preguntasFrecuentes.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-start gap-3">
                    <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {index + 1}
                    </span>
                    {faq.pregunta}
                  </h3>
                  <p className="text-gray-600 ml-11">{faq.respuesta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Continua aprendiendo
          </h2>
          <p className="text-white/90 mb-8">
            Ahora que conoces como se origina el fuego, aprende sobre las diferentes clases de fuego y que extintor usar en cada caso.
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
