'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const cursos = [
  {
    titulo: 'Origen del Fuego',
    descripcion: 'Comprendé cómo se origina el fuego y el tetraedro del fuego.',
    icono: '🔥',
    href: '/capacitaciones/origen-fuego',
    duracion: 'Lectura: 10 min',
  },
  {
    titulo: 'Clases de Fuego',
    descripcion: 'Aprendé las 5 clases de fuego y cómo identificarlas.',
    icono: '🏷️',
    href: '/capacitaciones/clases-fuego',
    duracion: 'Lectura: 15 min',
  },
  {
    titulo: 'Tipos de Matafuegos',
    descripcion: 'Conocé los diferentes agentes extintores y sus aplicaciones.',
    icono: '🧯',
    href: '/capacitaciones/tipos-matafuegos',
    duracion: 'Lectura: 20 min',
  },
  {
    titulo: 'Ubicación y Dotación',
    descripcion: 'Normativa IRAM para la correcta instalación de extintores.',
    icono: '📍',
    href: '/capacitaciones/ubicacion-dotacion',
    duracion: 'Lectura: 15 min',
  },
]

const serviciosCapacitacion = [
  {
    titulo: 'Capacitación In-Company',
    descripcion: 'Dictamos cursos presenciales en tu empresa, adaptados a los riesgos específicos de tu actividad.',
    icono: '🏢',
    caracteristicas: [
      'Evaluación previa de riesgos',
      'Material didáctico personalizado',
      'Práctica con extintores reales',
      'Certificado de asistencia',
    ],
  },
  {
    titulo: 'Simulacros de Evacuación',
    descripcion: 'Organizamos y ejecutamos simulacros de evacuación con evaluación y recomendaciones.',
    icono: '🚨',
    caracteristicas: [
      'Planificación del simulacro',
      'Coordinación con bomberos',
      'Evaluación de tiempos',
      'Informe de mejoras',
    ],
  },
  {
    titulo: 'Brigadas de Emergencia',
    descripcion: 'Formación de brigadas de emergencia para tu empresa.',
    icono: '👷',
    caracteristicas: [
      'Selección de brigadistas',
      'Capacitación específica',
      'Prácticas de extinción',
      'Actualización periódica',
    ],
  },
  {
    titulo: 'Auditorías de Seguridad',
    descripcion: 'Revisamos tus instalaciones y emitimos informes de cumplimiento normativo.',
    icono: '📋',
    caracteristicas: [
      'Relevamiento completo',
      'Verificación de extintores',
      'Informe técnico',
      'Plan de acción correctivo',
    ],
  },
]

const beneficios = [
  {
    titulo: 'Cumplimiento Legal',
    descripcion: 'Cumplí con las normativas vigentes de seguridad e higiene.',
    icono: '⚖️',
  },
  {
    titulo: 'Protección del Personal',
    descripcion: 'Tu equipo sabrá cómo actuar ante una emergencia.',
    icono: '👥',
  },
  {
    titulo: 'Reducción de Riesgos',
    descripcion: 'Minimizá las pérdidas materiales y humanas.',
    icono: '📉',
  },
  {
    titulo: 'Certificación',
    descripcion: 'Entregamos certificados válidos para ART y seguros.',
    icono: '📜',
  },
]

export default function AcademiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="capacitaciones" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-gradient-to-r from-purple-800 to-indigo-600 py-20">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/capacitaciones" className="hover:text-white">Capacitaciones</Link>
            <span>/</span>
            <span className="text-white">Academia</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Academia Total Protección</h1>
          <p className="text-xl text-white/90 max-w-2xl mb-8">
            Formación en seguridad contra incendios para empresas y particulares. Capacitaciones presenciales y contenido educativo gratuito.
          </p>
          <a
            href="https://wa.me/5492995484575?text=Hola!%20Me%20interesa%20información%20sobre%20las%20capacitaciones%20de%20Total%20Protección."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Consultar por Capacitaciones
          </a>
        </div>
      </section>

      {/* Contenido Gratuito */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-purple-600 font-semibold text-sm uppercase tracking-wide mb-2">APRENDÉ GRATIS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contenido Educativo</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Accedé a nuestras guías técnicas sobre protección contra incendios. Conocimiento esencial para cualquier persona o empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cursos.map((curso, index) => (
              <Link
                key={index}
                href={curso.href}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
              >
                <span className="text-5xl mb-4 block">{curso.icono}</span>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  {curso.titulo}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{curso.descripcion}</p>
                <span className="text-purple-600 text-sm font-medium">{curso.duracion}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios de Capacitación */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-purple-600 font-semibold text-sm uppercase tracking-wide mb-2">SERVICIOS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Capacitaciones para Empresas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ofrecemos capacitaciones presenciales adaptadas a las necesidades específicas de tu empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviciosCapacitacion.map((servicio, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl">{servicio.icono}</span>
                  <h3 className="text-2xl font-bold text-gray-800">{servicio.titulo}</h3>
                </div>
                <p className="text-gray-600 mb-6">{servicio.descripcion}</p>
                <ul className="space-y-2">
                  {servicio.caracteristicas.map((car, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {car}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-purple-600 font-semibold text-sm uppercase tracking-wide mb-2">VENTAJAS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">¿Por qué capacitar a tu equipo?</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="text-center p-6">
                <span className="text-5xl mb-4 block">{beneficio.icono}</span>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{beneficio.titulo}</h3>
                <p className="text-gray-600 text-sm">{beneficio.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestra Metodología</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Evaluación Inicial</h3>
                <p className="text-gray-600">Analizamos tu actividad, instalaciones y riesgos específicos para diseñar una capacitación a medida.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Contenido Teórico</h3>
                <p className="text-gray-600">Clases presenciales con material didáctico, videos y ejemplos prácticos adaptados a tu sector.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Práctica Real</h3>
                <p className="text-gray-600">Prácticas de extinción con matafuegos reales para que los participantes ganen confianza y experiencia.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Certificación</h3>
                <p className="text-gray-600">Entregamos certificados de asistencia válidos para ART, seguros y auditorías de seguridad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-800 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Querés capacitar a tu equipo?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Contactanos para coordinar una capacitación presencial en tu empresa. Diseñamos programas a medida según tus necesidades.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5492995484575?text=Hola!%20Quiero%20coordinar%20una%20capacitación%20en%20seguridad%20contra%20incendios%20para%20mi%20empresa."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Solicitar Capacitación
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-purple-700 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Enviar Consulta
            </Link>
          </div>
        </div>
      </section>

      {/* Info adicional */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            <strong>Total Protección</strong> - Distribuidor Oficial Mayorista Melisam para la Provincia de Neuquén.
            <br />
            Bahía Blanca 608, Neuquén Capital | Tel: +54 9 299 548-4575
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
