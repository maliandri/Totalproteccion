import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const caracteristicas = [
  {
    title: 'Identificacion Individual',
    description: 'Cada detector tiene una direccion unica, permitiendo localizar exactamente el punto de alarma.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Diagnostico Avanzado',
    description: 'Monitoreo continuo del estado de cada dispositivo con alertas de mantenimiento preventivo.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Sensibilidad Ajustable',
    description: 'Permite ajustar la sensibilidad de cada detector segun las condiciones ambientales del area.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    title: 'Comunicacion en Red',
    description: 'Integracion con sistemas de gestion de edificios (BMS) y monitoreo remoto.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
  },
]

const componentes = [
  {
    name: 'Centrales Analogicas',
    description: 'Paneles de control inteligentes con capacidad para cientos de dispositivos direccionables.',
    features: ['Pantalla grafica LCD', 'Programacion flexible', 'Registro de eventos', 'Comunicacion IP/RS485', 'Expansion modular'],
  },
  {
    name: 'Detectores Direccionables',
    description: 'Detectores multicriterio con direccionamiento individual y comunicacion bidireccional.',
    features: ['Humo optico + termico', 'Direccion programable', 'LED de estado', 'Autodiagnostico', 'Base inteligente'],
  },
  {
    name: 'Modulos de Control',
    description: 'Dispositivos para activar sirenas, cerrar puertas y controlar equipos externos.',
    features: ['Salidas supervisadas', 'Control ON/OFF', 'Retroalimentacion de estado', 'Direccionables', 'Montaje en riel DIN'],
  },
]

const ventajas = [
  {
    title: 'Menor Cableado',
    description: 'Un solo par de cables puede conectar cientos de dispositivos en lazo.',
  },
  {
    title: 'Localizacion Precisa',
    description: 'Identificacion exacta del detector en alarma en el panel.',
  },
  {
    title: 'Menos Falsas Alarmas',
    description: 'Algoritmos inteligentes reducen significativamente las falsas alarmas.',
  },
  {
    title: 'Mantenimiento Predictivo',
    description: 'El sistema alerta cuando un detector requiere limpieza o reemplazo.',
  },
]

const aplicaciones = [
  'Edificios corporativos',
  'Centros comerciales',
  'Hospitales',
  'Hoteles',
  'Aeropuertos',
  'Universidades',
  'Centros de datos',
  'Industrias',
]

export default function DeteccionInteligentePage() {
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
            <span className="text-white">Deteccion Inteligente</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Deteccion Inteligente</h1>
          <p className="text-xl text-white/90">Centrales analogicas y sistemas direccionables de ultima generacion</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Tecnologia de Deteccion Avanzada</h2>
          <p className="text-gray-600 text-lg">
            Los sistemas de deteccion inteligente representan la evolucion de la tecnologia de proteccion contra incendios.
            Cada dispositivo tiene una direccion unica que permite identificar exactamente donde se origina la alarma,
            proporcionando una respuesta mas rapida y efectiva.
          </p>
        </div>
      </section>

      {/* Caracteristicas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Caracteristicas Principales</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {caracteristicas.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventajas vs Convencional */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ventajas sobre Sistemas Convencionales</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {ventajas.map((ventaja, index) => (
              <div key={index} className="flex items-start bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{ventaja.title}</h3>
                  <p className="text-gray-600">{ventaja.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Componentes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Componentes del Sistema</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {componentes.map((componente, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-blue-600 p-4 text-white">
                  <h3 className="text-xl font-bold">{componente.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{componente.description}</p>
                  <h4 className="font-semibold mb-2 text-gray-700 text-sm">Caracteristicas:</h4>
                  <ul className="space-y-1">
                    {componente.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arquitectura */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Arquitectura en Lazo</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center p-6 border-2 border-blue-600 rounded-xl bg-blue-50">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Central Inteligente</h3>
                <p className="text-gray-600 text-sm">Panel de control con comunicacion bidireccional</p>
              </div>
              <div className="hidden md:block">
                <svg className="w-16 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">D1</div>
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">D2</div>
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">D3</div>
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">...</div>
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">Dn</div>
                </div>
                <p className="text-center text-gray-600 text-sm">Dispositivos en lazo (hasta 250 por lazo)</p>
              </div>
            </div>
            <p className="text-center text-gray-500 mt-6 text-sm">
              Todos los dispositivos se conectan en un lazo cerrado con comunicacion digital bidireccional
            </p>
          </div>
        </div>
      </section>

      {/* Aplicaciones */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Aplicaciones Ideales</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {aplicaciones.map((app, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center border-l-4 border-blue-600">
                <span className="text-gray-700">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#003d82] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Proteccion Inteligente para su Edificio</h2>
          <p className="text-xl text-white/90 mb-8">
            Diseñamos sistemas de deteccion inteligente adaptados a las necesidades de su proyecto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Solicitar Proyecto
            </Link>
            <Link
              href="/sistemas/deteccion-convencional"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Ver Sistemas Convencionales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
