import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const caracteristicas = [
  {
    title: 'Extincion Automatica',
    description: 'El sistema detecta el fuego y se activa automaticamente sin intervencion humana.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Agente Especifico',
    description: 'Utiliza acetato de potasio, diseñado especificamente para fuegos de aceites y grasas.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'Corte de Gas/Electricidad',
    description: 'Interrumpe automaticamente el suministro de energia a los equipos de coccion.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
  {
    title: 'Facil Limpieza',
    description: 'El agente extintor es facil de limpiar y no daña los equipos de cocina.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
]

const componentes = [
  {
    name: 'Tanque de Agente Extintor',
    description: 'Cilindro presurizado con solucion de acetato de potasio',
  },
  {
    name: 'Boquillas de Descarga',
    description: 'Diseñadas para cobertura optima sobre freidoras, planchas y hornos',
  },
  {
    name: 'Detector Fusible',
    description: 'Eslabones fusibles que detectan temperaturas elevadas',
  },
  {
    name: 'Cable de Deteccion',
    description: 'Recorre la campana extractora detectando calor',
  },
  {
    name: 'Pulsador Manual',
    description: 'Permite la activacion manual en caso de emergencia',
  },
  {
    name: 'Microswitch de Corte',
    description: 'Interrumpe gas y electricidad automaticamente',
  },
]

const aplicaciones = [
  'Restaurantes',
  'Hoteles',
  'Hospitales',
  'Comedores industriales',
  'Fast food',
  'Food trucks',
  'Supermercados',
  'Cocinas centrales',
]

export default function ExtincionCocinasPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="sistemas" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-[#c41e3a] py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/sistemas" className="hover:text-white">Sistemas</Link>
            <span>/</span>
            <span className="text-white">Sistemas en Cocinas</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sistemas en Cocinas</h1>
          <p className="text-xl text-white/90">Proteccion especializada con sistema Amerex KP para cocinas comerciales</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Sistema Amerex KP</h2>
          <p className="text-gray-600 text-lg mb-6">
            El sistema Amerex KP es la solucion lider mundial para la proteccion de cocinas comerciales.
            Diseñado especificamente para extinguir fuegos de aceites y grasas de cocina (Clase K),
            proporciona una proteccion automatica y confiable para equipos de coccion.
          </p>
          <div className="inline-block bg-red-100 text-red-700 px-6 py-3 rounded-lg">
            <span className="font-bold">Fuegos Clase K:</span> Aceites y grasas de cocina a altas temperaturas
          </div>
        </div>
      </section>

      {/* Caracteristicas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Caracteristicas del Sistema</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {caracteristicas.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Como Funciona</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">1</div>
              <h3 className="font-bold mb-2">Deteccion</h3>
              <p className="text-gray-600 text-sm">Los detectores fusibles sensan el aumento anormal de temperatura</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">2</div>
              <h3 className="font-bold mb-2">Activacion</h3>
              <p className="text-gray-600 text-sm">El sistema se activa automaticamente liberando el agente extintor</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">3</div>
              <h3 className="font-bold mb-2">Descarga</h3>
              <p className="text-gray-600 text-sm">Las boquillas descargan agente sobre los equipos de coccion</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">4</div>
              <h3 className="font-bold mb-2">Corte de Energia</h3>
              <p className="text-gray-600 text-sm">Se interrumpe automaticamente el gas y la electricidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Componentes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Componentes del Sistema</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {componentes.map((componente, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{componente.name}</h3>
                    <p className="text-gray-600 text-sm">{componente.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aplicaciones */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Aplicaciones</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {aplicaciones.map((app, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center border-l-4 border-red-600">
                <span className="text-gray-700">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Normativas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Normativas y Certificaciones</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-2xl font-bold text-red-600 mb-2">NFPA 17A</h3>
              <p className="text-gray-600 text-sm">Sistemas de extincion para cocinas comerciales</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-2xl font-bold text-red-600 mb-2">UL 300</h3>
              <p className="text-gray-600 text-sm">Certificacion de sistemas para cocinas</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-2xl font-bold text-red-600 mb-2">NFPA 96</h3>
              <p className="text-gray-600 text-sm">Ventilacion de cocinas comerciales</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#c41e3a] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Proteja su Cocina Comercial</h2>
          <p className="text-xl text-white/90 mb-8">
            Instalamos y mantenemos sistemas Amerex KP en toda Argentina
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Solicitar Cotizacion
            </Link>
            <Link
              href="/productos/espumas"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Ver Productos
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
