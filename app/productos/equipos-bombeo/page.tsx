import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const productos = [
  {
    name: 'Motobombas',
    description: 'Bombas portatiles accionadas por motor de combustion interna. Ideales para suministro de agua en lugares sin acceso a red electrica.',
    features: ['Motor diesel o gasolina', 'Caudales desde 500 a 5000 L/min', 'Presion hasta 15 bar', 'Arranque electrico o manual', 'Estructura portatil'],
    image: '/products/maquinaria-recarga-1.jpg',
  },
  {
    name: 'Bombas Centrifugas',
    description: 'Bombas electricas de alta eficiencia para sistemas fijos de proteccion contra incendios. Diseño robusto y confiable.',
    features: ['Motor electrico trifasico', 'Cuerpo en fundicion o acero inoxidable', 'Sello mecanico de alta duracion', 'Certificadas UL/FM', 'Multiples configuraciones'],
    image: '/products/bronceria-1.jpg',
  },
  {
    name: 'Grupos de Presion',
    description: 'Sistemas completos de bombeo para redes de incendio. Incluyen bomba principal, bomba jockey y tablero de control.',
    features: ['Bomba principal electrica o diesel', 'Bomba jockey de mantenimiento', 'Tablero de control automatico', 'Valvulas de alivio y retencion', 'Acumulador hidroneumatico'],
    image: '/products/matafuegos-1.jpg',
  },
]

const especificaciones = [
  {
    title: 'Caudales',
    value: '100 - 10,000 L/min',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Presiones',
    value: 'Hasta 16 bar',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Potencias',
    value: '5 - 500 HP',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Certificaciones',
    value: 'UL / FM / IRAM',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

const aplicaciones = [
  'Edificios de gran altura',
  'Plantas industriales',
  'Centros comerciales',
  'Aeropuertos',
  'Hospitales',
  'Depositos y almacenes',
]

export default function EquiposBombeoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="productos" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-[#00a651] py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/productos" className="hover:text-white">Productos</Link>
            <span>/</span>
            <span className="text-white">Equipos de Bombeo</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Equipos de Bombeo</h1>
          <p className="text-xl text-white/90">Sistemas de bombeo para redes de incendio de alta confiabilidad</p>
        </div>
      </section>

      {/* Especificaciones */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {especificaciones.map((spec, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {spec.icon}
                </div>
                <h3 className="text-sm text-gray-500 mb-1">{spec.title}</h3>
                <p className="text-xl font-bold text-gray-800">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Productos */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Nuestros Productos</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Equipos de bombeo diseñados para garantizar el suministro de agua en sistemas contra incendios
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
                        <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contacto"
                    className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Aplicaciones</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {aplicaciones.map((app, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <svg className="w-6 h-6 mr-3 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-gray-700">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#00a651] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Diseño e Instalacion de Sistemas de Bombeo</h2>
          <p className="text-xl text-white/90 mb-8">
            Nuestro equipo de ingenieria diseña e instala sistemas de bombeo a medida para su proyecto
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Solicitar Proyecto
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
