'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function EmpresaPage() {
  const ubicacion = {
    direccion: 'Bahía Blanca 608, esq. Pampa y José Fava',
    ciudad: 'Neuquén Capital',
    provincia: 'Neuquén',
    codigoPostal: 'Q8300',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Bahia+Blanca+608+Neuquen+Argentina'
  }

  return (
    <main className="min-h-screen bg-white">
      <Header activePage="empresa" />

      {/* Hero Section */}
      <section className="relative w-full mt-20 bg-gradient-to-r from-blue-900 to-blue-700 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Nuestra Empresa
          </h1>
          <p className="text-xl text-blue-100 text-center max-w-2xl mx-auto">
            Distribuidor Oficial de Melisam para la Provincia de Neuquén
          </p>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Quiénes Somos
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                <strong>Total Protección</strong> es el <strong>Distribuidor Oficial de Melisam</strong> para toda la <strong>Provincia de Neuquén</strong>. Nos especializamos en brindar soluciones integrales en protección contra incendios para empresas, industrias y particulares.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Contamos con una amplia gama de productos de la más alta calidad: matafuegos, mangueras, gabinetes, sistemas de extinción, equipamiento para bomberos y mucho más. Todos nuestros productos cuentan con las certificaciones correspondientes y el respaldo de Melisam, empresa líder en el rubro.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nuestro compromiso es garantizar la seguridad de nuestros clientes a través de productos confiables, asesoramiento profesional y un servicio de excelencia.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/productos"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold transition-colors"
                >
                  Ver Productos
                </Link>
                <Link
                  href="/contacto"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition-colors"
                >
                  Contactanos
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-blue-50 rounded-lg p-8">
                <Image
                  src="/logos/Logo-TotalProteccion.png"
                  alt="Total Protección Logo"
                  width={350}
                  height={100}
                  className="mx-auto mb-8 h-auto"
                />
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <p className="text-blue-800 font-semibold text-lg mb-4 text-center">
                    Distribuidor Oficial
                  </p>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <img
                      src="/logos/melisam-logo.jpg"
                      alt="Melisam Fire Group - Logo Oficial"
                      className="mx-auto h-auto max-h-20 object-contain"
                    />
                  </div>
                  <p className="text-center text-gray-500 text-sm mt-4">
                    Provincia de Neuquén
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Por qué elegirnos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Productos Certificados</h3>
              <p className="text-gray-600">
                Todos nuestros productos cuentan con las certificaciones de calidad y seguridad correspondientes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Asesoramiento Profesional</h3>
              <p className="text-gray-600">
                Nuestro equipo te asesora para encontrar la mejor solución en protección contra incendios.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Respuesta Rápida</h3>
              <p className="text-gray-600">
                Atención ágil y stock disponible para responder a tus necesidades de manera inmediata.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Dónde Estamos
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Nuestra Dirección</h3>
                  <p className="text-gray-700 text-lg font-medium">{ubicacion.direccion}</p>
                  <p className="text-gray-600">{ubicacion.ciudad}, {ubicacion.provincia}</p>
                  <p className="text-gray-600">CP: {ubicacion.codigoPostal}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Horario de Atención</h3>
                  <p className="text-gray-600">Lunes a Viernes: 8:00 - 17:00</p>
                  <p className="text-gray-600">Sábados: 9:00 - 13:00</p>
                </div>
              </div>

              <a
                href={ubicacion.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Cómo llegar
              </a>
            </div>

            {/* Mapa embebido */}
            <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.5!2d-68.06!3d-38.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBah%C3%ADa%20Blanca%20608%2C%20Neuqu%C3%A9n!5e0!3m2!1ses!2sar!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Total Protección"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Necesitás protección contra incendios?
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Contactanos y te asesoramos sin compromiso. Somos tu distribuidor oficial Melisam en Neuquén.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5492995484575?text=Hola!%20Visité%20la%20página%20de%20Total%20Protección%20y%20me%20gustaría%20recibir%20más%20información."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-red-600 px-6 py-3 rounded font-semibold transition-colors"
            >
              Enviar Consulta
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
