'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const beneficios = [
  {
    icono: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    titulo: 'En sus instalaciones',
    descripcion: 'Llevamos el equipamiento a su empresa para capacitar en el lugar de trabajo',
  },
  {
    icono: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    titulo: 'Adaptado a su sector',
    descripcion: 'Escenarios personalizados segun la industria y riesgos especificos de su actividad',
  },
  {
    icono: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    titulo: 'Cumplimiento ART y normativa',
    descripcion: 'Capacitaciones que cumplen con los requisitos legales y de aseguradoras',
  },
]

const cursos = [
  {
    titulo: 'RCP y Primeros Auxilios',
    video: '/realidad-virtual/curso-rcp.mp4',
    descripcion: 'Aprenda tecnicas de reanimacion cardiopulmonar y primeros auxilios en escenarios realistas sin riesgo.',
    temas: [
      'Evaluacion de la escena',
      'Tecnica de RCP adultos y ninos',
      'Uso del DEA (Desfibrilador)',
      'Maniobra de Heimlich',
      'Control de hemorragias',
    ],
  },
  {
    titulo: 'Manejo de Extintores',
    video: '/realidad-virtual/curso-extintores.mp4',
    descripcion: 'Practique el uso correcto de extintores frente a diferentes tipos de fuego en un entorno seguro.',
    temas: [
      'Identificacion de clases de fuego',
      'Seleccion del extintor adecuado',
      'Tecnica P.A.S.S.',
      'Distancia y posicion correcta',
      'Evacuacion y llamado a emergencias',
    ],
  },
]

const dirigidoA = [
  'Tecnicos en Seguridad e Higiene',
  'Personal Operativo',
  'Brigadas de Emergencia',
  'Supervisores y Jefes de Area',
  'Personal Administrativo',
]

export default function RealidadVirtualPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="capacitaciones" />

      {/* Hero Banner con gradiente similar al flyer */}
      <section className="relative w-full mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600"></div>
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative container mx-auto px-4 md:px-12 lg:px-20 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
                <Link href="/" className="hover:text-white">Inicio</Link>
                <span>/</span>
                <Link href="/capacitaciones" className="hover:text-white">Capacitaciones</Link>
                <span>/</span>
                <span className="text-white">Realidad Virtual</span>
              </div>

              <p className="text-orange-400 font-bold text-sm uppercase tracking-wider mb-2">CAPACITACIONES CON</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                REALIDAD VIRTUAL
                <span className="text-orange-400"> (VR)</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 font-semibold mb-6">
                SEGURIDAD E HIGIENE LABORAL
              </p>

              <p className="text-lg text-white/90 mb-8 max-w-xl">
                Entrenamiento <strong className="text-orange-400">inmersivo y seguro</strong> en su lugar de trabajo.
                Experiencias realistas que mejoran la retencion del aprendizaje.
              </p>

              <a
                href="https://wa.me/5492995484575?text=Hola!%20Quiero%20informacion%20sobre%20capacitaciones%20con%20Realidad%20Virtual"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Solicitar informacion
              </a>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-orange-500/20 rounded-full blur-3xl"></div>
                <Image
                  src="/realidad-virtual/realidad-virtual-hero.jpeg"
                  alt="Capacitaciones con Realidad Virtual - Total Proteccion"
                  width={500}
                  height={700}
                  className="relative rounded-2xl shadow-2xl mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {beneficio.icono}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{beneficio.titulo}</h3>
                <p className="text-gray-400">{beneficio.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cursos con Videos */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-wide mb-2">EXPERIENCIAS INMERSIVAS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestros Cursos en VR</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Capacitaciones disenadas para maximizar el aprendizaje a traves de la practica en entornos virtuales seguros.
            </p>
          </div>

          <div className="space-y-16">
            {cursos.map((curso, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                    <video
                      className="w-full h-auto"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={curso.video} type="video/mp4" />
                      Tu navegador no soporta video HTML5.
                    </video>
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      VR
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full inline-block text-sm font-bold mb-4">
                    Curso {index + 1}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{curso.titulo}</h3>
                  <p className="text-gray-600 mb-6">{curso.descripcion}</p>

                  <p className="font-semibold text-gray-700 mb-3">Temas que se practican:</p>
                  <ul className="space-y-2">
                    {curso.temas.map((tema, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-600">
                        <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {tema}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dirigido a */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-2">CAPACITACIONES PARA</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿A quien esta dirigido?</h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {dirigidoA.map((perfil, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="text-white font-semibold">{perfil}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicacion */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-orange-600 font-semibold text-sm uppercase tracking-wide mb-2">SALA DE REALIDAD VIRTUAL</p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Visitanos en nuestra sede</h2>
                <p className="text-gray-600 mb-6">
                  Contamos con una sala equipada con tecnologia de ultima generacion para brindarte
                  la mejor experiencia de capacitacion inmersiva.
                </p>

                <div className="flex items-start gap-3 mb-4">
                  <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-bold text-gray-800">Bahia Blanca 608</p>
                    <p className="text-gray-600">Neuquen Capital</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-bold text-gray-800">299 548 4575</p>
                    <p className="text-gray-600">Coordina tu visita</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Equipamiento incluido</p>
                    <p className="text-sm text-gray-500">Lentes VR de ultima generacion</p>
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Lentes Meta Quest
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Espacio amplio y seguro
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Instructores certificados
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Certificado de asistencia
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Lleva la capacitacion al siguiente nivel
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            La realidad virtual permite a tus empleados practicar situaciones de emergencia
            sin riesgos reales, mejorando la retencion del aprendizaje hasta un 75%.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5492995484575?text=Hola!%20Quiero%20cotizar%20capacitaciones%20con%20Realidad%20Virtual%20para%20mi%20empresa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-lg font-bold transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Solicitar cotizacion
            </a>
            <Link
              href="/capacitaciones"
              className="inline-flex items-center gap-2 bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 rounded-lg font-bold transition-colors"
            >
              Ver todas las capacitaciones
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
