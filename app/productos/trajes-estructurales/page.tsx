import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const productos = [
  {
    name: 'Trajes de Aproximacion',
    description: 'Trajes diseñados para trabajos en proximidad a fuentes de calor intenso. Fabricados con materiales aluminizados de alta reflectividad termica.',
    features: ['Proteccion hasta 500C de calor radiante', 'Capucha con visor dorado', 'Guantes integrados', 'Botas de aproximacion', 'Cierres hermeticos'],
    specs: ['Material: Fibra de vidrio aluminizada', 'Peso: 8-12 kg', 'Norma: EN 1486'],
    image: '/products/matafuegos-1.jpg',
  },
  {
    name: 'Trajes de Bombero Estructural',
    description: 'Equipos de proteccion personal completos para operaciones de extincion estructural. Maxima proteccion termica y mecanica.',
    features: ['Chaqueton con sistema de cierre rapido', 'Pantalon con tirantes', 'Proteccion multicapa', 'Reflectivos de alta visibilidad', 'Rodilleras integradas'],
    specs: ['Material: Nomex/Kevlar', 'Peso: 3-4 kg', 'Norma: NFPA 1971 / EN 469'],
    image: '/products/mangueras-productos-1-1.jpg',
  },
  {
    name: 'Equipos SCBA',
    description: 'Equipos de respiracion autonoma para ambientes con atmosferas peligrosas. Sistemas de aire comprimido de alta fiabilidad.',
    features: ['Cilindro de aire comprimido', 'Mascara de vision panoramica', 'Regulador de demanda', 'Arnes ergonomico', 'Sistema de alarma de baja presion'],
    specs: ['Autonomia: 30-60 minutos', 'Presion: 200-300 bar', 'Norma: NFPA 1981 / EN 137'],
    image: '/products/bronceria-1.jpg',
  },
]

const capas = [
  {
    title: 'Capa Exterior',
    description: 'Resistente al fuego, abrasion y cortes. Proporciona la primera linea de defensa.',
    color: 'bg-gray-800',
  },
  {
    title: 'Barrera Humedad',
    description: 'Impide el paso de liquidos mientras permite la transpiracion del vapor.',
    color: 'bg-blue-600',
  },
  {
    title: 'Barrera Termica',
    description: 'Aislamiento termico que protege del calor extremo.',
    color: 'bg-orange-500',
  },
  {
    title: 'Forro Interior',
    description: 'Comodidad y absorcion de humedad para el usuario.',
    color: 'bg-gray-400',
  },
]

export default function TrajesEstructuralesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="productos" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-[#1a1a1a] py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/productos" className="hover:text-white">Productos</Link>
            <span>/</span>
            <span className="text-white">Trajes Estructurales</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Trajes Estructurales</h1>
          <p className="text-xl text-white/90">Proteccion total para operaciones de extincion y rescate</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Maxima Proteccion Personal</h2>
          <p className="text-gray-600 text-lg">
            Nuestros trajes estructurales representan lo ultimo en tecnologia de proteccion para bomberos.
            Diseñados para enfrentar las condiciones mas extremas, combinan materiales de vanguardia con
            diseños ergonomicos para garantizar la seguridad y comodidad del usuario.
          </p>
        </div>
      </section>

      {/* Sistema de Capas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Sistema de Proteccion Multicapa</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Nuestros trajes utilizan un sistema de multiples capas que proporciona proteccion integral
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {capas.map((capa, index) => (
              <div key={index} className="text-center">
                <div className={`${capa.color} w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl`}>
                  {index + 1}
                </div>
                <h3 className="font-bold text-lg mb-2">{capa.title}</h3>
                <p className="text-gray-600 text-sm">{capa.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Productos */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Productos</h2>

          <div className="space-y-12">
            {productos.map((producto, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 relative h-64 md:h-auto">
                    <Image
                      src={producto.image}
                      alt={producto.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">{producto.name}</h3>
                    <p className="text-gray-600 mb-6">{producto.description}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-700">Caracteristicas:</h4>
                        <ul className="space-y-2">
                          {producto.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-center text-gray-600 text-sm">
                              <svg className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-700">Especificaciones:</h4>
                        <ul className="space-y-2">
                          {producto.specs.map((spec, sIndex) => (
                            <li key={sIndex} className="flex items-center text-gray-600 text-sm">
                              <svg className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link
                      href="/contacto"
                      className="inline-block mt-6 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
                    >
                      Solicitar Informacion
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Proteccion que Salva Vidas</h2>
          <p className="text-xl text-white/90 mb-8">
            Contactenos para recibir asesoramiento sobre el equipo de proteccion adecuado para su brigada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-block bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Solicitar Cotizacion
            </Link>
            <Link
              href="/productos"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Ver Mas Productos
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
