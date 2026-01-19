import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const tiposEspuma = [
  {
    name: 'AFFF (Aqueous Film Forming Foam)',
    description: 'Espuma de pelicula acuosa que forma una capa sellante sobre liquidos inflamables. Altamente efectiva para fuegos de hidrocarburos.',
    applications: ['Derrames de combustible', 'Tanques de almacenamiento', 'Hangares de aviacion', 'Plataformas petroleras'],
    expansion: 'Baja expansion (1:20)',
  },
  {
    name: 'AR-AFFF (Alcohol Resistant)',
    description: 'Espuma resistente al alcohol, diseñada para fuegos de solventes polares y alcoholes que destruyen las espumas convencionales.',
    applications: ['Industria quimica', 'Plantas farmaceuticas', 'Depositos de alcoholes', 'Laboratorios'],
    expansion: 'Baja expansion (1:20)',
  },
  {
    name: 'Espuma de Alta Expansion',
    description: 'Genera grandes volumenes de espuma para inundar espacios cerrados. Ideal para proteccion total de areas confinadas.',
    applications: ['Hangares', 'Salas de generadores', 'Tuneles', 'Bodegas de buques'],
    expansion: 'Alta expansion (200:1 a 1000:1)',
  },
]

const componentes = [
  {
    name: 'Concentrados de Espuma',
    description: 'Agentes espumantes de alta calidad certificados',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    name: 'Tanques de Almacenamiento',
    description: 'Depositos para concentrado de espuma',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    name: 'Proporcionadores',
    description: 'Sistemas de dosificacion precisa',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    name: 'Camaras de Espuma',
    description: 'Generadores de espuma para tanques',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    name: 'Monitores de Espuma',
    description: 'Cañones de descarga direccional',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'Valvulas y Accesorios',
    description: 'Componentes de control y distribucion',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

export default function ExtincionEspumaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="sistemas" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-[#0066cc] py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/sistemas" className="hover:text-white">Sistemas</Link>
            <span>/</span>
            <span className="text-white">Sistemas a Base de Espuma</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sistemas a Base de Espuma</h1>
          <p className="text-xl text-white/90">Proteccion especializada para fuegos de liquidos inflamables con espumas AFFF</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Extincion de Fuegos Clase B</h2>
          <p className="text-gray-600 text-lg">
            Los sistemas de espuma son la solucion mas efectiva para la extincion de fuegos de liquidos inflamables.
            La espuma actua formando una capa sobre el combustible que impide la evaporacion y sofoca el fuego,
            proporcionando una extincion segura y eficiente.
          </p>
        </div>
      </section>

      {/* Tipos de Espuma */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tipos de Espuma</h2>

          <div className="space-y-8">
            {tiposEspuma.map((tipo, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-blue-600 p-8 text-white flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-2">{tipo.name}</h3>
                    <p className="text-blue-100 text-sm">{tipo.expansion}</p>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <p className="text-gray-600 mb-4">{tipo.description}</p>
                    <h4 className="font-semibold mb-2 text-gray-700">Aplicaciones principales:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tipo.applications.map((app, appIndex) => (
                        <span key={appIndex} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Componentes */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Componentes del Sistema</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Un sistema de espuma completo requiere de multiples componentes trabajando en conjunto
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {componentes.map((componente, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                  {componente.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{componente.name}</h3>
                <p className="text-gray-600 text-sm">{componente.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Como Funciona la Espuma</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="font-bold mb-2">Mezcla</h3>
              <p className="text-gray-600 text-sm">El concentrado se mezcla con agua en proporcion precisa</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="font-bold mb-2">Aireacion</h3>
              <p className="text-gray-600 text-sm">La solucion se airea para formar la espuma</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="font-bold mb-2">Aplicacion</h3>
              <p className="text-gray-600 text-sm">La espuma se descarga sobre el combustible</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="font-bold mb-2">Extincion</h3>
              <p className="text-gray-600 text-sm">La capa de espuma sofoca el fuego</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0066cc] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Proteccion Especializada para Liquidos Inflamables</h2>
          <p className="text-xl text-white/90 mb-8">
            Diseñamos sistemas de espuma a medida para su industria
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Solicitar Asesoria Tecnica
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
