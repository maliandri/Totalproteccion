'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const dotacionesPorRiesgo = [
  {
    riesgo: 'Riesgo 1 - Explosivo',
    color: 'bg-red-700',
    descripcion: 'Locales donde se fabrican, manipulan o almacenan materiales explosivos o altamente inflamables.',
    ejemplos: 'Fábricas de explosivos, depósitos de combustibles, plantas de gas',
    potencialMinimo: '6A - 40B',
    distanciaMaxima: '15 metros',
    superficie: 'Cada 200 m²',
  },
  {
    riesgo: 'Riesgo 2 - Inflamable',
    color: 'bg-orange-600',
    descripcion: 'Locales donde se fabrican, manipulan o almacenan materiales inflamables.',
    ejemplos: 'Carpinterías, talleres de pintura, depósitos de materiales combustibles',
    potencialMinimo: '4A - 20B',
    distanciaMaxima: '15 metros',
    superficie: 'Cada 200 m²',
  },
  {
    riesgo: 'Riesgo 3 - Muy Combustible',
    color: 'bg-yellow-600',
    descripcion: 'Locales donde se fabrican, manipulan o almacenan materiales muy combustibles.',
    ejemplos: 'Industrias textiles, papeleras, aserraderos',
    potencialMinimo: '2A - 10B',
    distanciaMaxima: '20 metros',
    superficie: 'Cada 200 m²',
  },
  {
    riesgo: 'Riesgo 4 - Combustible',
    color: 'bg-green-600',
    descripcion: 'Locales donde se fabrican, manipulan o almacenan materiales combustibles.',
    ejemplos: 'Oficinas, comercios, viviendas',
    potencialMinimo: '1A - 5B',
    distanciaMaxima: '20 metros',
    superficie: 'Cada 200 m²',
  },
  {
    riesgo: 'Riesgo 5 - Poco Combustible',
    color: 'bg-blue-600',
    descripcion: 'Locales donde se fabrican, manipulan o almacenan materiales poco combustibles.',
    ejemplos: 'Industrias metalúrgicas, construcciones de hormigón',
    potencialMinimo: '1A',
    distanciaMaxima: '20 metros',
    superficie: 'Cada 200 m²',
  },
  {
    riesgo: 'Riesgo 6 - Incombustible',
    color: 'bg-gray-600',
    descripcion: 'Locales donde se fabrican, manipulan o almacenan materiales incombustibles.',
    ejemplos: 'Depósitos de materiales pétreos, metales no combustibles',
    potencialMinimo: '1A',
    distanciaMaxima: '25 metros',
    superficie: 'Cada 200 m²',
  },
  {
    riesgo: 'Riesgo 7 - Refractario',
    color: 'bg-purple-600',
    descripcion: 'Locales donde se fabrican, manipulan o almacenan materiales refractarios.',
    ejemplos: 'Industrias cerámicas, fundiciones',
    potencialMinimo: '1A',
    distanciaMaxima: '25 metros',
    superficie: 'Cada 200 m²',
  },
]

const requisitosInstalacion = [
  {
    titulo: 'Altura de Instalación',
    icono: '📏',
    descripcion: 'Los matafuegos deben instalarse de manera que su parte superior no supere 1,50 metros desde el nivel del piso.',
    detalle: 'Esta altura permite que cualquier persona adulta pueda acceder al extintor sin dificultad.',
  },
  {
    titulo: 'Accesibilidad',
    icono: '🚶',
    descripcion: 'Deben estar en lugares de fácil acceso y visibilidad, sin obstrucciones.',
    detalle: 'No deben estar detrás de puertas, muebles o cualquier elemento que dificulte su acceso inmediato.',
  },
  {
    titulo: 'Señalización',
    icono: '🔴',
    descripcion: 'Cada matafuego debe estar señalizado con cartelería normalizada.',
    detalle: 'La señal debe ser visible desde cualquier punto del sector, incluso en condiciones de poca luz.',
  },
  {
    titulo: 'Protección',
    icono: '🛡️',
    descripcion: 'Deben estar protegidos contra daños físicos, intemperie y condiciones ambientales adversas.',
    detalle: 'En exteriores usar gabinetes protectores. En zonas de tránsito proteger contra golpes.',
  },
]

const tiposSegunUso = [
  {
    tipo: 'Oficinas y Comercios',
    icono: '🏢',
    clases: 'A, B, C',
    recomendacion: 'Polvo ABC 5 kg',
    cantidad: '1 cada 200 m²',
    adicional: 'Complementar con CO2 cerca de equipos electrónicos',
  },
  {
    tipo: 'Industrias',
    icono: '🏭',
    clases: 'A, B, C',
    recomendacion: 'Polvo ABC 10 kg',
    cantidad: '1 cada 200 m²',
    adicional: 'Evaluar riesgos específicos del proceso industrial',
  },
  {
    tipo: 'Cocinas Industriales',
    icono: '👨‍🍳',
    clases: 'K, A',
    recomendacion: 'Acetato de Potasio 6 litros',
    cantidad: '1 por cada freidora o campana',
    adicional: 'OBLIGATORIO en restaurantes, comedores industriales',
  },
  {
    tipo: 'Estaciones de Servicio',
    icono: '⛽',
    clases: 'B, C',
    recomendacion: 'Polvo BC 10 kg o Espuma AFFF',
    cantidad: 'Según normativa específica',
    adicional: 'Extintores de mayor capacidad (25-50 kg)',
  },
  {
    tipo: 'Vehículos',
    icono: '🚗',
    clases: 'A, B, C',
    recomendacion: 'Polvo ABC 1 kg',
    cantidad: '1 por vehículo',
    adicional: 'Obligatorio en transporte de pasajeros y cargas',
  },
  {
    tipo: 'Data Centers',
    icono: '💻',
    clases: 'C, A',
    recomendacion: 'CO2 o Gases Limpios',
    cantidad: '1 cada 50 m²',
    adicional: 'Evitar polvo químico por daño a equipos',
  },
]

export default function UbicacionDotacionPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="capacitaciones" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-gradient-to-r from-blue-800 to-blue-600 py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/capacitaciones" className="hover:text-white">Capacitaciones</Link>
            <span>/</span>
            <span className="text-white">Ubicación y Dotación</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Ubicación y Dotación</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Guía según Norma IRAM 3517-2 para la correcta ubicación, cantidad y distribución de matafuegos.
          </p>
        </div>
      </section>

      {/* Intro Normativa */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Norma IRAM 3517-2
            </h2>
            <p className="text-blue-700 leading-relaxed mb-4">
              La <strong>Norma IRAM 3517-2</strong> establece los requisitos mínimos para la selección, instalación y mantenimiento de matafuegos portátiles. Es de cumplimiento obligatorio en Argentina para todo establecimiento comercial, industrial o de servicios.
            </p>
            <p className="text-blue-700 leading-relaxed">
              Esta norma define la cantidad de extintores según el <strong>riesgo de incendio</strong>, la <strong>superficie a proteger</strong> y la <strong>distancia máxima</strong> a recorrer para alcanzar un extintor.
            </p>
          </div>
        </div>
      </section>

      {/* Clasificación de Riesgos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">SEGÚN IRAM 3517-2</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Clasificación de Riesgos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Los establecimientos se clasifican en 7 categorías de riesgo según el tipo de materiales que manejan.
            </p>
          </div>

          <div className="space-y-4">
            {dotacionesPorRiesgo.map((riesgo, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className={`${riesgo.color} p-6 md:w-64 flex-shrink-0`}>
                    <h3 className="text-xl font-bold text-white">{riesgo.riesgo}</h3>
                  </div>
                  <div className="p-6 flex-1">
                    <p className="text-gray-700 mb-3">{riesgo.descripcion}</p>
                    <p className="text-sm text-gray-500 mb-4"><strong>Ejemplos:</strong> {riesgo.ejemplos}</p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 uppercase">Potencial Mínimo</p>
                        <p className="font-bold text-gray-800">{riesgo.potencialMinimo}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 uppercase">Distancia Máx.</p>
                        <p className="font-bold text-gray-800">{riesgo.distanciaMaxima}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 uppercase">Cobertura</p>
                        <p className="font-bold text-gray-800">{riesgo.superficie}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requisitos de Instalación */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">INSTALACIÓN CORRECTA</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Requisitos de Instalación</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {requisitosInstalacion.map((req, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{req.icono}</span>
                  <h3 className="text-xl font-bold text-gray-800">{req.titulo}</h3>
                </div>
                <p className="text-gray-700 mb-2">{req.descripcion}</p>
                <p className="text-sm text-gray-500">{req.detalle}</p>
              </div>
            ))}
          </div>

          {/* Diagrama de altura */}
          <div className="mt-12 bg-blue-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-blue-800 mb-6 text-center">Altura de Instalación Recomendada</h3>
            <div className="flex justify-center items-end gap-8">
              <div className="text-center">
                <div className="relative h-48 w-20 border-2 border-blue-300 rounded bg-white flex items-end justify-center">
                  <div className="absolute top-0 w-full border-t-2 border-dashed border-red-500">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-red-600 whitespace-nowrap">Máx. 1,50 m</span>
                  </div>
                  <div className="w-8 h-24 bg-red-500 rounded-t mb-2"></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">Extintor</p>
              </div>
              <div className="h-48 flex flex-col justify-between text-right text-sm text-gray-500">
                <span>1,70 m</span>
                <span>1,50 m</span>
                <span>1,00 m</span>
                <span>0,50 m</span>
                <span>Piso</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dotación por Tipo de Establecimiento */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">GUÍA PRÁCTICA</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Dotación por Tipo de Establecimiento</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiposSegunUso.map((tipo, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{tipo.icono}</span>
                  <h3 className="text-lg font-bold text-gray-800">{tipo.tipo}</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Clases de fuego</p>
                    <p className="font-medium text-gray-700">{tipo.clases}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Extintor recomendado</p>
                    <p className="font-medium text-blue-600">{tipo.recomendacion}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Cantidad</p>
                    <p className="font-medium text-gray-700">{tipo.cantidad}</p>
                  </div>
                  <p className="text-sm text-gray-500 italic">{tipo.adicional}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mantenimiento */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">MANTENIMIENTO</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Verificaciones Obligatorias</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-800">Inspección Visual Mensual</h3>
                  <p className="text-gray-600 text-sm">Verificar accesibilidad, precintos, manómetro y estado general</p>
                </div>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">Mensual</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-800">Verificación Trimestral</h3>
                  <p className="text-gray-600 text-sm">Control de peso, presión y estado del agente extintor</p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-medium">Trimestral</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-800">Recarga Anual</h3>
                  <p className="text-gray-600 text-sm">Recarga completa por empresa habilitada con certificación</p>
                </div>
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-medium">Anual</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-800">Prueba Hidráulica</h3>
                  <p className="text-gray-600 text-sm">Ensayo de presión del cilindro según norma</p>
                </div>
                <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-medium">Cada 5 años</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Necesitás asesoramiento para tu establecimiento?
          </h2>
          <p className="text-white/90 mb-8">
            Te ayudamos a determinar la dotación correcta de matafuegos según la normativa vigente y las características de tu espacio.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5492995484575?text=Hola!%20Necesito%20asesoramiento%20sobre%20la%20dotación%20de%20matafuegos%20para%20mi%20establecimiento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Solicitar Asesoramiento
            </a>
            <Link
              href="/productos/matafuegos"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Ver Matafuegos
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
