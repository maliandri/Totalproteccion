'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const clasesDeFuego = [
  {
    clase: 'A',
    color: 'bg-green-600',
    colorLight: 'bg-green-50',
    borderColor: 'border-green-500',
    textColor: 'text-green-800',
    nombre: 'Combustibles Sólidos',
    materiales: [
      'Madera y derivados',
      'Papel y cartón',
      'Telas y tejidos',
      'Plásticos',
      'Goma y caucho',
    ],
    caracteristicas: 'Producen brasas y cenizas al quemarse. El fuego se propaga tanto en la superficie como en profundidad del material.',
    peligros: 'Generan humo tóxico y pueden reencenderse si no se enfrían completamente las brasas.',
    extincion: 'Enfriamiento mediante agua. El agua absorbe el calor y penetra el material, enfriando las brasas internas.',
    extintores: ['Agua', 'Agua pulverizada', 'Espuma AFFF', 'Polvo ABC'],
    noUsar: ['CO2 solo (no enfría brasas)'],
    iconoSimbolo: 'A',
  },
  {
    clase: 'B',
    color: 'bg-red-600',
    colorLight: 'bg-red-50',
    borderColor: 'border-red-500',
    textColor: 'text-red-800',
    nombre: 'Líquidos Inflamables',
    materiales: [
      'Naftas y combustibles',
      'Alcoholes',
      'Solventes y diluyentes',
      'Pinturas y lacas',
      'Aceites y grasas industriales',
    ],
    caracteristicas: 'Arden solo en superficie. Los vapores del líquido son los que se inflaman, no el líquido en sí.',
    peligros: 'El agua puede dispersar el combustible y propagar el fuego. Riesgo de explosión por acumulación de vapores.',
    extincion: 'Sofocación o interrupción de la reacción en cadena. Se debe cortar el contacto con el oxígeno.',
    extintores: ['Espuma AFFF', 'Polvo BC', 'Polvo ABC', 'CO2'],
    noUsar: ['Agua a chorro (dispersa el combustible)'],
    iconoSimbolo: 'B',
  },
  {
    clase: 'C',
    color: 'bg-blue-600',
    colorLight: 'bg-blue-50',
    borderColor: 'border-blue-500',
    textColor: 'text-blue-800',
    nombre: 'Equipos Eléctricos',
    materiales: [
      'Tableros eléctricos',
      'Motores y transformadores',
      'Computadoras y servidores',
      'Electrodomésticos',
      'Cables y conexiones',
    ],
    caracteristicas: 'El fuego puede ser Clase A o B, pero con el agravante de la presencia de corriente eléctrica.',
    peligros: 'Riesgo de electrocución. Usar un agente conductor puede ser mortal.',
    extincion: 'Agentes no conductores de electricidad. Idealmente, cortar la energía primero convierte el fuego en Clase A o B.',
    extintores: ['CO2', 'Polvo BC', 'Polvo ABC', 'Gases limpios (HCFC, HFC)'],
    noUsar: ['Agua', 'Espuma', 'Cualquier agente conductor'],
    iconoSimbolo: 'C',
  },
  {
    clase: 'D',
    color: 'bg-yellow-500',
    colorLight: 'bg-yellow-50',
    borderColor: 'border-yellow-500',
    textColor: 'text-yellow-800',
    nombre: 'Metales Combustibles',
    materiales: [
      'Magnesio',
      'Aluminio (en polvo o virutas)',
      'Titanio',
      'Sodio y potasio',
      'Litio',
    ],
    caracteristicas: 'Alcanzan temperaturas extremadamente altas (hasta 3000°C). Muy específicos en contextos industriales.',
    peligros: 'Reaccionan violentamente con agua y pueden causar explosiones. El CO2 también puede reaccionar con algunos metales.',
    extincion: 'Polvos químicos especiales que forman una costra aislante sobre el metal.',
    extintores: ['Polvo Clase D específico para cada metal'],
    noUsar: ['Agua', 'CO2', 'Espuma', 'Polvo ABC'],
    iconoSimbolo: 'D',
  },
  {
    clase: 'K',
    color: 'bg-purple-600',
    colorLight: 'bg-purple-50',
    borderColor: 'border-purple-500',
    textColor: 'text-purple-800',
    nombre: 'Aceites de Cocina',
    materiales: [
      'Aceites vegetales',
      'Grasas animales',
      'Mantecas',
      'Aceites de freidoras',
      'Grasas de cocinas industriales',
    ],
    caracteristicas: 'Tienen temperatura de autoignición muy alta. Son comunes en cocinas industriales y restaurantes.',
    peligros: 'El agua provoca una explosión violenta por vaporización instantánea (el agua se convierte en vapor 1700 veces su volumen).',
    extincion: 'Saponificación con acetato de potasio. El agente convierte el aceite en jabón, sellando y enfriando.',
    extintores: ['Acetato de Potasio (Clase K)'],
    noUsar: ['Agua', 'CO2', 'Polvo ABC', 'Espuma convencional'],
    iconoSimbolo: 'K',
  },
]

export default function ClasesFuegoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="capacitaciones" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-gradient-to-r from-red-700 to-orange-600 py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/capacitaciones" className="hover:text-white">Capacitaciones</Link>
            <span>/</span>
            <span className="text-white">Clases de Fuego</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Clases de Fuego</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Los fuegos se clasifican según el material combustible. Conocer cada clase es esencial para elegir el método de extinción correcto.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-red-50 border border-red-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Advertencia Importante
            </h2>
            <p className="text-red-700 leading-relaxed">
              <strong>Usar el extintor incorrecto puede agravar la situación o causar lesiones graves.</strong> Por ejemplo, usar agua en un fuego de aceite de cocina causa una explosión violenta, y usar agua en equipos eléctricos puede provocar electrocución.
            </p>
          </div>
        </div>
      </section>

      {/* Resumen Visual */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {clasesDeFuego.map((clase, index) => (
              <a
                key={index}
                href={`#clase-${clase.clase}`}
                className={`${clase.color} w-20 h-20 rounded-full flex flex-col items-center justify-center text-white shadow-lg hover:scale-110 transition-transform`}
              >
                <span className="text-2xl font-bold">{clase.clase}</span>
                <span className="text-xs">{clase.nombre.split(' ')[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Clases Detalladas */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-12">
            {clasesDeFuego.map((clase, index) => (
              <div
                key={index}
                id={`clase-${clase.clase}`}
                className={`${clase.colorLight} rounded-xl overflow-hidden border-2 ${clase.borderColor}`}
              >
                {/* Header */}
                <div className={`${clase.color} p-6 flex items-center gap-6`}>
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-5xl font-bold text-white">{clase.clase}</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">Clase {clase.clase}</h2>
                    <p className="text-white/90 text-xl">{clase.nombre}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Materiales */}
                    <div>
                      <h3 className={`font-bold ${clase.textColor} mb-3`}>Materiales que incluye:</h3>
                      <ul className="space-y-2">
                        {clase.materiales.map((material, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-700">
                            <span className={`w-2 h-2 ${clase.color} rounded-full`}></span>
                            {material}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Características */}
                    <div>
                      <h3 className={`font-bold ${clase.textColor} mb-3`}>Características:</h3>
                      <p className="text-gray-700 mb-4">{clase.caracteristicas}</p>
                      <div className="bg-red-100 border-l-4 border-red-500 p-3 rounded-r">
                        <p className="text-red-800 text-sm"><strong>Peligros:</strong> {clase.peligros}</p>
                      </div>
                    </div>
                  </div>

                  {/* Extinción */}
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className={`font-bold ${clase.textColor} mb-3`}>Método de Extinción:</h3>
                    <p className="text-gray-700 mb-4">{clase.extincion}</p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-semibold text-green-600 mb-2">Extintores Recomendados:</p>
                        <div className="flex flex-wrap gap-2">
                          {clase.extintores.map((ext, i) => (
                            <span key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                              {ext}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-red-600 mb-2">NO Usar:</p>
                        <div className="flex flex-wrap gap-2">
                          {clase.noUsar.map((ext, i) => (
                            <span key={i} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                              {ext}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabla Resumen */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Resumen: ¿Qué extintor usar?</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left">Clase</th>
                  <th className="px-4 py-3 text-left">Tipo de Fuego</th>
                  <th className="px-4 py-3 text-left">Extintor Recomendado</th>
                  <th className="px-4 py-3 text-left">No Usar</th>
                </tr>
              </thead>
              <tbody>
                {clasesDeFuego.map((clase, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3">
                      <span className={`${clase.color} text-white w-10 h-10 rounded-full inline-flex items-center justify-center font-bold`}>
                        {clase.clase}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-medium">{clase.nombre}</td>
                    <td className="px-4 py-3 text-green-700">{clase.extintores[0]}</td>
                    <td className="px-4 py-3 text-red-700">{clase.noUsar[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-red-700 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Continuá aprendiendo
          </h2>
          <p className="text-white/90 mb-8">
            Ahora que conocés las clases de fuego, aprendé más sobre los diferentes tipos de matafuegos y sus aplicaciones.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/capacitaciones/tipos-matafuegos"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-red-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Tipos de Matafuegos
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/capacitaciones/ubicacion-dotacion"
              className="inline-flex items-center gap-2 bg-orange-700 hover:bg-orange-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Ubicación y Dotación
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
