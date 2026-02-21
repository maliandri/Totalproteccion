'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function EmpresaPage() {
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
            Distribuidor Oficial Mayorista de Melisam para la Provincia de Neuquén
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
                <strong>Total Protección</strong> es el <strong>Distribuidor Oficial Mayorista de Melisam</strong> para toda la <strong>Provincia de Neuquén</strong>. Nos especializamos en brindar soluciones integrales en protección contra incendios para empresas, industrias y particulares.
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
                    Distribuidor Oficial Mayorista
                  </p>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <Image
                      src="/logos/melisam-logo.png"
                      alt="Melisam Fire Group - Logo Oficial"
                      width={280}
                      height={57}
                      className="mx-auto h-auto"
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
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              {/* Atención Comercial - Bahía Blanca */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Atención Comercial</h3>
                    <p className="text-gray-500 text-sm">Sucursal Bahía Blanca</p>
                  </div>
                </div>
                <div className="pl-[4.5rem]">
                  <p className="text-gray-700 font-medium">Bahía Blanca 608</p>
                  <p className="text-gray-500 text-sm mb-4">Esq. Libertad - Neuquén Capital</p>
                  <div className="space-y-2">
                    <a
                      href="mailto:ventas@totalproteccion.com.ar"
                      className="group flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-red-50 border border-transparent hover:border-red-200 transition-all duration-300"
                    >
                      <span className="w-8 h-8 bg-red-100 group-hover:bg-red-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                        <svg className="w-4 h-4 text-red-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-gray-700 group-hover:text-red-600 font-medium transition-colors duration-300">ventas@totalproteccion.com.ar</p>
                        <p className="text-xs text-gray-400">Ventas</p>
                      </div>
                    </a>
                    <a
                      href="mailto:instalaciones@totalproteccion.com.ar"
                      className="group flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-orange-50 border border-transparent hover:border-orange-200 transition-all duration-300"
                    >
                      <span className="w-8 h-8 bg-orange-100 group-hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                        <svg className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-gray-700 group-hover:text-orange-600 font-medium transition-colors duration-300">instalaciones@totalproteccion.com.ar</p>
                        <p className="text-xs text-gray-400">Área técnica / operativa</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Ingeniería de Obras - La Pampa */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Ingeniería de Obras</h3>
                    <p className="text-gray-500 text-sm">Sucursal La Pampa</p>
                  </div>
                </div>
                <div className="pl-[4.5rem]">
                  <p className="text-gray-700 font-medium">Fava 205</p>
                  <p className="text-gray-500 text-sm mb-4">Neuquén Capital</p>
                  <div className="space-y-2">
                    <a
                      href="mailto:corporativo@totalproteccion.com.ar"
                      className="group flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 border border-transparent hover:border-blue-200 transition-all duration-300"
                    >
                      <span className="w-8 h-8 bg-blue-100 group-hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                        <svg className="w-4 h-4 text-blue-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-gray-700 group-hover:text-blue-600 font-medium transition-colors duration-300">corporativo@totalproteccion.com.ar</p>
                        <p className="text-xs text-gray-400">Ventas</p>
                      </div>
                    </a>
                    <a
                      href="mailto:administracion@totalproteccion.com.ar"
                      className="group flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-indigo-50 border border-transparent hover:border-indigo-200 transition-all duration-300"
                    >
                      <span className="w-8 h-8 bg-indigo-100 group-hover:bg-indigo-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                        <svg className="w-4 h-4 text-indigo-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-gray-700 group-hover:text-indigo-600 font-medium transition-colors duration-300">administracion@totalproteccion.com.ar</p>
                        <p className="text-xs text-gray-400">Administración y cobranzas</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Info General y Horarios */}
              <div className="grid grid-cols-2 gap-4">
                {/* Consultas Generales */}
                <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-gray-800 mb-2">Consultas Generales</h3>
                  <a
                    href="mailto:info@totalproteccion.com.ar"
                    className="group flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors duration-300"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">info@totalproteccion.com.ar</span>
                  </a>
                </div>

                {/* Horarios */}
                <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-gray-800 mb-2">Horarios</h3>
                  <p className="text-gray-600 text-xs">Lun-Vie: 8:00 - 17:00</p>
                  <p className="text-gray-600 text-xs">Sáb: 9:00 - 13:00</p>
                </div>
              </div>

            </div>

            {/* Mapa embebido */}
            <div className="space-y-4">
              <div className="h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.8!2d-68.0506263!3d-38.9615935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a338aaf715b17%3A0x3cdcaba906d84af0!2sTotal%20protecci%C3%B3n%20sas!5e0!3m2!1ses!2sar!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Total Protección - Bahía Blanca 608, Neuquén"
                ></iframe>
              </div>
              <a
                href="https://www.google.com/maps/place/Total+protecci%C3%B3n+sas/@-38.9615935,-68.0506263,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-5 py-3 rounded-xl font-medium border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Abrir en Google Maps
              </a>

              {/* Reseñas de Google */}
              <div className="mt-8">
                <div className="flex items-center gap-3 mb-6">
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Reseñas de Google</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 font-medium">5.0 · +100 reseñas</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                  {/* Reseña 1 - Stella Maris Ortega */}
                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        SM
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <p className="font-semibold text-gray-800 truncate">Stella Maris Ortega</p>
                          <span className="text-xs text-gray-400 flex-shrink-0">Hace un año</span>
                        </div>
                        <div className="flex my-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">Excelente atención, en 15 minutos estuvo todo listo. Muy amable la srta que atiende llamada Carolina; ella me explicó todo respecto a los extinguidores para vehículos y para los domiciliarios.</p>
                      </div>
                    </div>
                  </div>

                  {/* Reseña 2 - Damian Voltolini */}
                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        DV
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <p className="font-semibold text-gray-800 truncate">Damian Voltolini</p>
                          <span className="text-xs text-gray-400 flex-shrink-0">Hace 2 años</span>
                        </div>
                        <div className="flex my-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">Son muy confiables y el trabajo lo hacen en 15 minutos. La verdad qué la atención es excelente y hasta te explican bien cuál es el procedimiento a realizar, la verdad muy bueno y muy recomendables porque te lo hacen en el momento!!!</p>
                      </div>
                    </div>
                  </div>

                  {/* Reseña 3 - Jorge Calviño */}
                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        JC
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <p className="font-semibold text-gray-800 truncate">Jorge Calviño</p>
                          <span className="text-xs text-gray-400 flex-shrink-0">Hace 4 años</span>
                        </div>
                        <div className="flex my-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">Excelente la atención, la predisposición para solucionar todo mi problema, excelente la garantía que dan sobre el trabajo que realizan.. los recomiendo 100%...muy responsables....</p>
                      </div>
                    </div>
                  </div>

                  {/* Reseña 4 - Pablo Nicolás Benitez */}
                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        PB
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <p className="font-semibold text-gray-800 truncate">Pablo Nicolás Benitez</p>
                          <span className="text-xs text-gray-400 flex-shrink-0">Hace 2 años</span>
                        </div>
                        <div className="flex my-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">Muy buena atención y asesoramiento. Precio accesible y te explican cómo utilizar correctamente el matafuego cosa que no muchos hacen. Super recomendable.</p>
                      </div>
                    </div>
                  </div>

                  {/* Reseña 5 - Carlos Omar Truenow */}
                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        CT
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <p className="font-semibold text-gray-800 truncate">Carlos Omar Truenow</p>
                          <span className="text-xs text-gray-400 flex-shrink-0">Hace 2 años</span>
                        </div>
                        <div className="flex my-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">Excelente atención, rápido y explican el proceso de recarga anual. Prometen avisar x WhatsApp cerca del vencimiento.</p>
                      </div>
                    </div>
                  </div>

                  {/* Reseña 6 - Gaston Duchi */}
                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        GD
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <p className="font-semibold text-gray-800 truncate">Gaston Duchi</p>
                          <span className="text-xs text-gray-400 flex-shrink-0">Hace 3 años</span>
                        </div>
                        <div className="flex my-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">Excelente Atención! En 10 minutos te vas con la recarga de tu matafuego no lo tenés que dejar e ir a buscar al otro día. Precios acordes! Totalmente recomendable!</p>
                      </div>
                    </div>
                  </div>

                  {/* Reseña 7 - Juan Cruz Pereyra */}
                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        JP
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <p className="font-semibold text-gray-800 truncate">Juan Cruz Pereyra</p>
                          <span className="text-xs text-gray-400 flex-shrink-0">Hace 4 años</span>
                        </div>
                        <div className="flex my-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">Excelente atención por su dueño, muchos servicios, rapidez, precios bajos, realizan pruebas Hidráulicas de tubos de buceo.</p>
                      </div>
                    </div>
                  </div>

                  {/* Reseña 8 - Carina Massina */}
                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        CM
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <p className="font-semibold text-gray-800 truncate">Carina Massina</p>
                          <span className="text-xs text-gray-400 flex-shrink-0">Hace un año</span>
                        </div>
                        <div className="flex my-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">Excelente atención y asesoramiento además de muy buen precio. Súper recomendable.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/place/Total+protecci%C3%B3n+sas/@-38.9615935,-68.0506263,17z/data=!4m8!3m7!1s0x960a338aaf715b17:0x3cdcaba906d84af0!8m2!3d-38.9615935!4d-68.0506263!9m1!1b1!16s%2Fg%2F11sw4x9p27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-300 group"
                >
                  Ver todas las reseñas en Google
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
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
            Contactanos y te asesoramos sin compromiso. Somos tu Distribuidor Oficial Mayorista Melisam en Neuquén.
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
