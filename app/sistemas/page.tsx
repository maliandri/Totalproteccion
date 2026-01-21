'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const servicios = [
  {
    title: 'Sistemas de Extincion de Incendios',
    description: 'Soluciones integrales para la extincion de incendios en todo tipo de instalaciones',
    href: '/sistemas/extincion',
    image: '/images/sistemas/rociador.png',
    items: [
      { name: 'Sistemas a Base de Agua', href: '/sistemas/extincion/agua' },
      { name: 'Sistemas a Base de Espuma', href: '/sistemas/extincion/espuma' },
      { name: 'Extincion por Gases', href: '/sistemas/extincion/gases' },
      { name: 'Sistemas en Cocinas', href: '/sistemas/extincion/cocinas' },
    ],
  },
  {
    title: 'Sistemas de Deteccion de Incendios',
    description: 'Tecnologia avanzada para la deteccion temprana de incendios',
    href: '/sistemas/deteccion',
    image: '/images/sistemas/deteccion-panel.png',
    items: [
      { name: 'Sistemas Convencionales', href: '/sistemas/deteccion/convencional' },
      { name: 'Sistemas Inteligentes', href: '/sistemas/deteccion/inteligente' },
    ],
  },
  {
    title: 'Mantenimiento Integral',
    description: 'Servicios de mantenimiento preventivo y correctivo para garantizar el funcionamiento optimo',
    href: '/sistemas/mantenimiento',
    image: '/images/sistemas/instalaciones.png',
    items: [
      { name: 'Mantenimiento de Instalaciones Fijas', href: '/sistemas/mantenimiento/instalaciones' },
      { name: 'Central de Carga de Gases Limpios', href: '/sistemas/mantenimiento/gases' },
    ],
  },
]

export default function SistemasPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="sistemas" />

      {/* Hero Banner con imagen */}
      <section className="relative w-full mt-20 h-[400px]">
        <Image
          src="/images/sistemas/montaje.jpg"
          alt="Montaje de Sistemas contra Incendios"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-12 lg:px-20">
            <p className="text-white/80 text-sm mb-2">NOSOTROS</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Montaje de Sistemas<br />Contra Incendios
            </h1>
          </div>
        </div>
      </section>

      {/* Introduccion */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            Nos especializamos en la <strong>instalacion integral de sistemas de proteccion contra incendios</strong>,
            incluyendo sistemas a base de agua, espuma, deteccion de incendios y extincion por gases limpios.
            Combinamos <strong>ingenieria, experiencia en obra y compromiso con la seguridad</strong> para desarrollar
            proyectos industriales, comerciales y de infraestructura.
          </p>
        </div>
      </section>

      {/* Servicios Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Link href={servicio.href}>
                  <div className="relative h-48 bg-gray-100">
                    <Image
                      src={servicio.image}
                      alt={servicio.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <Link href={servicio.href}>
                    <h3 className="text-xl font-bold mb-2 hover:text-red-600 transition">{servicio.title}</h3>
                  </Link>
                  <p className="text-gray-600 text-sm mb-4">{servicio.description}</p>
                  <ul className="space-y-2">
                    {servicio.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          href={item.href}
                          className="flex items-center text-gray-700 hover:text-red-600 transition text-sm"
                        >
                          <svg className="w-4 h-4 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={servicio.href}
                    className="inline-block mt-4 text-red-600 hover:text-red-700 font-medium text-sm"
                  >
                    Ver todos &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que elegirnos */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por que Elegirnos</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Experiencia</h3>
              <p className="text-gray-600 text-sm">Mas de 10 anos en el mercado de proteccion contra incendios</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Certificaciones</h3>
              <p className="text-gray-600 text-sm">Productos y servicios certificados bajo normas IRAM</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Equipo Profesional</h3>
              <p className="text-gray-600 text-sm">Tecnicos capacitados y certificados en instalaciones</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Respuesta Rapida</h3>
              <p className="text-gray-600 text-sm">Atencion inmediata en toda la provincia de Neuquen</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#c41e3a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Necesitas un sistema contra incendios?
          </h2>
          <p className="text-white/90 mb-8">
            Contactanos para una evaluacion gratuita de tu instalacion
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5492995484575?text=Hola!%20Necesito%20informacion%20sobre%20sistemas%20contra%20incendios"
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
              href="/contacto"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-red-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
