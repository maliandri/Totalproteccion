import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const categorias = [
  {
    name: 'Cascos',
    description: 'Cascos de proteccion estructural certificados segun normas NFPA. Diseñados para maxima proteccion y comodidad.',
    items: ['Casco estructural NFPA 1971', 'Casco forestal', 'Casco de rescate', 'Protectores faciales', 'Gafas de proteccion'],
    image: '/products/matafuegos-1.jpg',
    color: 'bg-red-600',
  },
  {
    name: 'Botas',
    description: 'Botas de bombero con proteccion termica y mecanica. Fabricadas con materiales de alta resistencia.',
    items: ['Botas estructurales', 'Botas de proximidad', 'Botas de rescate', 'Suelas antideslizantes', 'Proteccion antipunzonamiento'],
    image: '/products/bronceria-1.jpg',
    color: 'bg-yellow-600',
  },
  {
    name: 'Guantes',
    description: 'Guantes de proteccion para operaciones de extincion y rescate. Multiples niveles de proteccion termica.',
    items: ['Guantes estructurales', 'Guantes de proximidad', 'Guantes de extrication', 'Guantes de rescate tecnico', 'Guantes de trabajo general'],
    image: '/products/mangueras-productos-1-1.jpg',
    color: 'bg-blue-600',
  },
  {
    name: 'Linternas',
    description: 'Sistemas de iluminacion portatil para operaciones de emergencia. Certificados para zonas ATEX.',
    items: ['Linternas de mano', 'Linternas de casco', 'Linternas frontales', 'Luz antiexplosiva ATEX', 'Balizas de señalizacion'],
    image: '/products/maquinaria-recarga-1.jpg',
    color: 'bg-green-600',
  },
  {
    name: 'Hachas y Herramientas',
    description: 'Herramientas de forcaje y rescate para operaciones de bomberos. Fabricadas en acero de alta resistencia.',
    items: ['Hacha de bombero', 'Hacha pico', 'Halligan bar', 'Cortafrios', 'Herramientas multiuso'],
    image: '/products/gabintenes-mangueras-300x240.jpg',
    color: 'bg-gray-700',
  },
]

export default function EquipamientoBomberosPage() {
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
            <span className="text-white">Equipamiento para Bomberos</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Equipamiento para Bomberos</h1>
          <p className="text-xl text-white/90">Equipos de proteccion personal y herramientas profesionales</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Proteccion Profesional</h2>
          <p className="text-gray-600 text-lg">
            Ofrecemos una linea completa de equipamiento para bomberos y equipos de primera respuesta.
            Todos nuestros productos cumplen con las normativas internacionales mas exigentes, garantizando
            la maxima proteccion y durabilidad en condiciones extremas.
          </p>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Categorias de Productos</h2>

          <div className="space-y-8">
            {categorias.map((categoria, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`${categoria.color} p-4 text-white`}>
                  <h3 className="text-2xl font-bold">{categoria.name}</h3>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative h-48 md:h-auto">
                    <Image
                      src={categoria.image}
                      alt={categoria.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <p className="text-gray-600 mb-4">{categoria.description}</p>
                    <h4 className="font-semibold mb-3 text-gray-700">Productos disponibles:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {categoria.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Certificaciones y Normas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">NFPA 1971</h3>
              <p className="text-gray-600 text-sm">Norma para equipos de proteccion estructural contra incendios</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">EN 469</h3>
              <p className="text-gray-600 text-sm">Normativa europea para vestuario de proteccion de bomberos</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">IRAM</h3>
              <p className="text-gray-600 text-sm">Certificacion argentina de calidad y seguridad</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#c41e3a] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Equipe a su Brigada</h2>
          <p className="text-xl text-white/90 mb-8">
            Asesoramiento profesional para seleccionar el equipamiento adecuado para su equipo de bomberos
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Solicitar Catalogo
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
