import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const productos = [
  {
    name: 'Jupiter POK',
    description: 'Unidad de intervención rápida de alta capacidad con sistema de bombeo integrado. Ideal para respuesta inmediata en emergencias industriales.',
    features: ['Bomba de alta presión', 'Tanque de agua de 500L', 'Sistema de espuma AFFF', 'Monitor de descarga', 'Mangueras de ataque rápido'],
    image: '/products/product/uirjupiterpok-600x600.jpg',
  },
  {
    name: 'Unidad de Intervención Rápida Standard',
    description: 'Equipo portátil de intervención rápida para primera respuesta. Compacto y fácil de transportar para uso en instalaciones industriales.',
    features: ['Carrete de manguera de 30m', 'Lanza regulable', 'Válvula de cierre rápido', 'Conexión a red de agua', 'Gabinete protector'],
    image: '/products/product/unidad-intervencion-rapida-600x600.jpg',
  },
]

const caracteristicas = [
  {
    title: 'Respuesta Inmediata',
    description: 'Equipos listos para actuar en segundos ante cualquier emergencia de incendio.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Alta Capacidad',
    description: 'Sistemas de bombeo de alta presion para maxima eficacia en la extincion.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Movilidad Total',
    description: 'Unidades moviles que pueden desplegarse rapidamente en cualquier ubicacion.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
]

export default function IntervencionRapidaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="productos" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-[#c41e3a] py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/productos" className="hover:text-white">Productos</Link>
            <span>/</span>
            <span className="text-white">Unidades de Intervencion Rapida</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Unidades de Intervencion Rapida</h1>
          <p className="text-xl text-white/90">Equipos de respuesta inmediata para el control de incendios</p>
        </div>
      </section>

      {/* Caracteristicas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ventajas de Nuestras Unidades</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {caracteristicas.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
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
            Soluciones profesionales para la primera intervencion en emergencias de incendio
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
                        <svg className="w-5 h-5 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contacto"
                    className="inline-block mt-6 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
                  >
                    Solicitar Cotizacion
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#c41e3a] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Proteja sus Instalaciones</h2>
          <p className="text-xl text-white/90 mb-8">
            Contactenos para una evaluacion personalizada de sus necesidades de proteccion contra incendios
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contactar Ahora
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
