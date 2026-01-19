import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const sistemas = [
  {
    name: 'Sistemas de Rociadores (Sprinklers)',
    description: 'Los rociadores automaticos son el sistema de extincion mas utilizado a nivel mundial. Se activan automaticamente al detectar calor, descargando agua sobre el area afectada.',
    types: ['Rociadores pendientes (pendant)', 'Rociadores montantes (upright)', 'Rociadores de pared (sidewall)', 'Rociadores ocultos (concealed)', 'Rociadores ESFR para almacenes'],
    image: '/products/mangueras-productos-1-1.jpg',
  },
  {
    name: 'Sistemas de Diluvio',
    description: 'Sistemas de descarga masiva de agua mediante boquillas abiertas. Se activan mediante detectores de calor o humo, descargando agua simultaneamente en toda el area protegida.',
    types: ['Boquillas de diluvio', 'Valvulas de diluvio', 'Sistemas de deteccion', 'Paneles de control', 'Alarmas visuales y sonoras'],
    image: '/products/bronceria-1.jpg',
  },
  {
    name: 'Sistemas de Agua Nebulizada',
    description: 'Tecnologia avanzada que utiliza gotas de agua de tamaño micrometrico. Altamente eficiente con minimo daño por agua, ideal para areas sensibles.',
    types: ['Boquillas de alta presion', 'Boquillas de baja presion', 'Sistemas locales', 'Sistemas zonales', 'Sistemas totales'],
    image: '/products/matafuegos-1.jpg',
  },
]

const ventajas = [
  {
    title: 'Efectividad Comprobada',
    description: 'Los sistemas a base de agua tienen una efectividad superior al 96% en el control de incendios.',
  },
  {
    title: 'Bajo Costo',
    description: 'El agua es el agente extintor mas economico y de facil disponibilidad.',
  },
  {
    title: 'Ecologico',
    description: 'No contamina el medio ambiente y es completamente seguro para las personas.',
  },
  {
    title: 'Confiabilidad',
    description: 'Sistemas mecanicos de alta fiabilidad con minimo mantenimiento requerido.',
  },
]

const aplicaciones = [
  'Edificios comerciales y de oficinas',
  'Centros comerciales',
  'Hospitales y clinicas',
  'Hoteles y residencias',
  'Plantas industriales',
  'Almacenes y depositos',
  'Estacionamientos',
  'Colegios y universidades',
]

export default function ExtincionAguaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="sistemas" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-[#003d82] py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/sistemas" className="hover:text-white">Sistemas</Link>
            <span>/</span>
            <span className="text-white">Sistemas a Base de Agua</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sistemas a Base de Agua</h1>
          <p className="text-xl text-white/90">Sprinklers, rociadores y sistemas de diluvio para proteccion contra incendios</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Proteccion Automatica y Confiable</h2>
          <p className="text-gray-600 text-lg">
            Los sistemas de extincion a base de agua son la solucion mas utilizada a nivel mundial para la proteccion contra incendios.
            Ofrecemos diseño, instalacion y mantenimiento de sistemas de rociadores automaticos, sistemas de diluvio y sistemas de agua nebulizada,
            adaptados a las necesidades especificas de cada proyecto.
          </p>
        </div>
      </section>

      {/* Ventajas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ventajas de los Sistemas a Base de Agua</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {ventajas.map((ventaja, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">{ventaja.title}</h3>
                <p className="text-gray-600 text-sm">{ventaja.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sistemas */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Tipos de Sistemas</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Diseñamos e instalamos diferentes tipos de sistemas de extincion a base de agua segun los requerimientos del proyecto
          </p>

          <div className="space-y-12">
            {sistemas.map((sistema, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center bg-white rounded-xl shadow-lg overflow-hidden`}>
                <div className="md:w-2/5 relative h-64 md:h-80 w-full">
                  <Image
                    src={sistema.image}
                    alt={sistema.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{sistema.name}</h3>
                  <p className="text-gray-600 mb-6">{sistema.description}</p>
                  <h4 className="font-semibold mb-3 text-gray-700">Componentes principales:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {sistema.types.map((type, tIndex) => (
                      <li key={tIndex} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {type}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aplicaciones */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Aplicaciones Tipicas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {aplicaciones.map((app, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <svg className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-gray-700 text-sm">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Normativas */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Normativas Aplicables</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-2">NFPA 13</h3>
              <p className="text-gray-600 text-sm">Instalacion de sistemas de rociadores</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-2">NFPA 15</h3>
              <p className="text-gray-600 text-sm">Sistemas fijos de agua pulverizada</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-2">NFPA 750</h3>
              <p className="text-gray-600 text-sm">Sistemas de agua nebulizada</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#003d82] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Diseño e Instalacion de Sistemas de Rociadores</h2>
          <p className="text-xl text-white/90 mb-8">
            Nuestro equipo de ingenieria diseña sistemas de extincion a medida para su proyecto
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Solicitar Presupuesto
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
