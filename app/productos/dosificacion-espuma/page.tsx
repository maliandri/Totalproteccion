import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const productos = [
  {
    name: 'Dosificadores Inline',
    description: 'Sistemas de dosificacion en linea para mezcla automatica de espuma concentrada. Proporcionan una mezcla precisa y constante del agente espumante.',
    features: ['Dosificacion precisa del 1% al 6%', 'Sin necesidad de energia externa', 'Bajo mantenimiento', 'Compatibles con espumas AFFF y AR-AFFF', 'Instalacion sencilla'],
    image: '/products/cat-producto-Espumas-1-1.jpg',
  },
  {
    name: 'Proporcionadores',
    description: 'Equipos de proporcionado de espuma por venturi o presion balanceada. Ideales para sistemas fijos de proteccion contra incendios.',
    features: ['Rango de caudales amplio', 'Alta fiabilidad', 'Materiales resistentes a la corrosion', 'Certificados segun normas internacionales', 'Facil calibracion'],
    image: '/products/bronceria-1.jpg',
  },
  {
    name: 'Tanques de Espuma',
    description: 'Depositos de almacenamiento para concentrados de espuma. Fabricados en acero inoxidable o poliester reforzado con fibra de vidrio.',
    features: ['Capacidades desde 200L hasta 20.000L', 'Indicador de nivel', 'Conexiones de llenado y descarga', 'Resistentes a la intemperie', 'Opciones de calefaccion'],
    image: '/products/maquinaria-recarga-1.jpg',
  },
]

const aplicaciones = [
  {
    title: 'Plantas Industriales',
    description: 'Proteccion de areas de proceso, almacenamiento de liquidos inflamables y zonas de carga.',
  },
  {
    title: 'Hangares de Aviacion',
    description: 'Sistemas de espuma de alta expansion para proteccion de aeronaves y combustibles.',
  },
  {
    title: 'Terminales de Combustible',
    description: 'Proteccion de tanques de almacenamiento y areas de carga de combustibles.',
  },
  {
    title: 'Industria Petroquimica',
    description: 'Sistemas de espuma para refineries, plantas de proceso y terminales maritimas.',
  },
]

export default function DosificacionEspumaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="productos" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-[#0066cc] py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/productos" className="hover:text-white">Productos</Link>
            <span>/</span>
            <span className="text-white">Sistemas de Dosificacion de Espuma</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sistemas de Dosificacion de Espuma</h1>
          <p className="text-xl text-white/90">Equipos especializados para la mezcla y aplicacion de agentes espumantes</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Tecnologia en Espuma Contra Incendios</h2>
          <p className="text-gray-600 text-lg">
            Los sistemas de dosificacion de espuma son esenciales para la proteccion de instalaciones donde se manejan liquidos inflamables.
            Nuestros equipos garantizan la mezcla precisa de concentrado de espuma con agua, creando una solucion efectiva para la extincion de incendios de clase B.
          </p>
        </div>
      </section>

      {/* Productos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Nuestros Productos</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Equipos de alta calidad para sistemas de espuma contra incendios
          </p>

          <div className="space-y-12">
            {productos.map((producto, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center bg-white rounded-xl shadow-lg overflow-hidden`}>
                <div className="md:w-1/2 relative h-64 md:h-80 w-full">
                  <Image
                    src={producto.image}
                    alt={producto.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{producto.name}</h3>
                  <p className="text-gray-600 mb-6">{producto.description}</p>
                  <h4 className="font-semibold mb-3 text-gray-700">Caracteristicas:</h4>
                  <ul className="space-y-2">
                    {producto.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contacto"
                    className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                  >
                    Solicitar Cotizacion
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aplicaciones */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Aplicaciones Tipicas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aplicaciones.map((app, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600">
                <h3 className="text-lg font-bold mb-2">{app.title}</h3>
                <p className="text-gray-600 text-sm">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0066cc] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Soluciones Integrales en Espuma</h2>
          <p className="text-xl text-white/90 mb-8">
            Diseñamos e instalamos sistemas completos de proteccion con espuma adaptados a sus necesidades
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Solicitar Asesoria Tecnica
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
