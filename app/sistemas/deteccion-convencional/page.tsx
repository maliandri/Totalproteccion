import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const componentes = [
  {
    name: 'Centrales de Incendio Convencionales',
    description: 'Paneles de control que monitorean zonas de deteccion. Capacidad desde 2 hasta 32 zonas.',
    features: ['Display de LEDs por zona', 'Salidas de sirena y auxiliares', 'Bateria de respaldo', 'Supervision de linea'],
    image: '/products/matafuegos-1.jpg',
  },
  {
    name: 'Detectores de Humo Ionicos',
    description: 'Detectan particulas de humo mediante camara de ionizacion. Rapida respuesta a fuegos con llama.',
    features: ['Alta sensibilidad', 'Indicador LED de alarma', 'Base estandar', 'Autocompensacion'],
    image: '/products/bronceria-1.jpg',
  },
  {
    name: 'Detectores de Humo Opticos',
    description: 'Utilizan principio fotoelectrico para detectar humo visible. Ideales para fuegos lentos.',
    features: ['Deteccion de humo visible', 'Baja tasa de falsas alarmas', 'LED indicador', 'Compatible con bases universales'],
    image: '/products/mangueras-productos-1-1.jpg',
  },
  {
    name: 'Detectores de Temperatura',
    description: 'Detectan aumento de temperatura. Disponibles en version fija o termovelocimetrica.',
    features: ['Temperatura fija 57C o 70C', 'Termovelocimetricos', 'Para ambientes con polvo o vapor', 'Alta confiabilidad'],
    image: '/products/maquinaria-recarga-1.jpg',
  },
]

const elementosPerifericos = [
  'Pulsadores manuales',
  'Sirenas de interior',
  'Sirenas de exterior',
  'Luces estroboscopicas',
  'Modulos de control',
  'Modulos de monitoreo',
  'Bases de detector',
  'Aisladores de cortocircuito',
]

const ventajas = [
  {
    title: 'Costo Efectivo',
    description: 'Solucion economica para instalaciones pequeñas y medianas.',
  },
  {
    title: 'Facil Instalacion',
    description: 'Cableado sencillo con conexion por zonas.',
  },
  {
    title: 'Mantenimiento Simple',
    description: 'Componentes estandar de facil reemplazo.',
  },
  {
    title: 'Confiabilidad',
    description: 'Tecnologia probada con decadas de uso.',
  },
]

export default function DeteccionConvencionalPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="sistemas" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-[#1a1a1a] py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/sistemas" className="hover:text-white">Sistemas</Link>
            <span>/</span>
            <span className="text-white">Deteccion Convencional</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Deteccion Convencional</h1>
          <p className="text-xl text-white/90">Centrales y detectores de humo para proteccion basica contra incendios</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Sistemas de Deteccion por Zonas</h2>
          <p className="text-gray-600 text-lg">
            Los sistemas de deteccion convencional organizan los detectores en zonas geograficas.
            Cuando un detector se activa, la central indica la zona en alarma, permitiendo una respuesta rapida.
            Es la solucion ideal para edificios pequeños y medianos donde el costo es un factor importante.
          </p>
        </div>
      </section>

      {/* Ventajas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ventajas del Sistema Convencional</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {ventajas.map((ventaja, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center mx-auto mb-4">
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

      {/* Componentes */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Componentes Principales</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Un sistema de deteccion convencional se compone de diversos elementos trabajando en conjunto
          </p>

          <div className="space-y-8">
            {componentes.map((componente, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative h-48 md:h-auto bg-gray-100">
                    <Image
                      src={componente.image}
                      alt={componente.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{componente.name}</h3>
                    <p className="text-gray-600 mb-4">{componente.description}</p>
                    <h4 className="font-semibold mb-2 text-gray-700 text-sm">Caracteristicas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {componente.features.map((feature, fIndex) => (
                        <span key={fIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {feature}
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

      {/* Elementos Perifericos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Elementos Perifericos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {elementosPerifericos.map((elemento, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <svg className="w-5 h-5 mr-3 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-gray-700 text-sm">{elemento}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagrama conceptual */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Arquitectura del Sistema</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 border-2 border-gray-800 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Central de Incendio</h3>
                <p className="text-gray-600 text-sm">Panel principal que recibe señales de todas las zonas y activa las alarmas</p>
              </div>
              <div className="text-center">
                <div className="flex flex-col space-y-4">
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <h4 className="font-bold">Zona 1</h4>
                    <p className="text-sm text-gray-600">Detectores de planta baja</p>
                  </div>
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <h4 className="font-bold">Zona 2</h4>
                    <p className="text-sm text-gray-600">Detectores de primer piso</p>
                  </div>
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <h4 className="font-bold">Zona N</h4>
                    <p className="text-sm text-gray-600">Detectores adicionales</p>
                  </div>
                </div>
              </div>
              <div className="text-center p-6 border-2 border-red-600 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-red-600">Notificacion</h3>
                <p className="text-gray-600 text-sm">Sirenas, luces y señales de evacuacion se activan en caso de alarma</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Proteccion Confiable y Economica</h2>
          <p className="text-xl text-white/90 mb-8">
            Diseñamos e instalamos sistemas de deteccion convencional adaptados a su presupuesto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-block bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Solicitar Presupuesto
            </Link>
            <Link
              href="/sistemas/deteccion-inteligente"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Ver Sistemas Inteligentes
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
