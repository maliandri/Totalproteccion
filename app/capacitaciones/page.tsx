import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const temas = [
  {
    title: 'Realidad Virtual (VR)',
    description: 'Capacitaciones inmersivas con tecnologia de ultima generacion',
    href: '/capacitaciones/realidad-virtual',
    destacado: true,
  },
  {
    title: 'Origen del Fuego',
    description: 'Conoce los principios basicos del fuego y como se origina',
    href: '/capacitaciones/origen-fuego',
  },
  {
    title: 'Clases de Fuego',
    description: 'Aprende a identificar las diferentes clases de fuego',
    href: '/capacitaciones/clases-fuego',
  },
  {
    title: 'Tipos de Matafuegos',
    description: 'Descubre los diferentes tipos de extintores y sus aplicaciones',
    href: '/capacitaciones/tipos-matafuegos',
  },
  {
    title: 'Ubicacion y Dotacion',
    description: 'Normativas para la ubicacion correcta de matafuegos',
    href: '/capacitaciones/ubicacion-dotacion',
  },
]

const clasesFuego = [
  {
    clase: 'A',
    color: 'bg-green-600',
    descripcion: 'Fuegos de materiales solidos (madera, papel, tela)',
    icono: '/products/product/clasea150x150-1.png',
  },
  {
    clase: 'B',
    color: 'bg-red-600',
    descripcion: 'Fuegos de liquidos inflamables (nafta, aceite)',
    icono: '/products/product/claseb150x150.png',
  },
  {
    clase: 'C',
    color: 'bg-blue-600',
    descripcion: 'Fuegos de origen electrico',
    icono: '/products/product/clasec150x150.png',
  },
  {
    clase: 'D',
    color: 'bg-yellow-500',
    descripcion: 'Fuegos de metales combustibles (magnesio, titanio)',
    icono: '/products/product/clased150x150.png',
  },
  {
    clase: 'K',
    color: 'bg-purple-600',
    descripcion: 'Fuegos de aceites y grasas de cocina',
    icono: '/products/product/clasek150x150.png',
  },
]

export default function CapacitacionesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="capacitaciones" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-gradient-to-r from-orange-600 to-red-600 py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Capacitaciones</h1>
          <p className="text-xl text-white/90">Formacion profesional en prevencion y combate de incendios</p>
        </div>
      </section>

      {/* Topics */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Temas de Capacitacion</h2>
            <p className="text-gray-600">Aprende todo sobre prevencion y combate de incendios</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {temas.map((tema: any, index) => (
              <Link
                key={index}
                href={tema.href}
                className={`p-6 rounded-xl shadow-md hover:shadow-lg transition-all group ${
                  tema.destacado
                    ? 'bg-gradient-to-r from-blue-900 to-orange-600 md:col-span-2'
                    : 'bg-white'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    tema.destacado
                      ? 'bg-white/20 group-hover:bg-white/30'
                      : 'bg-red-100 group-hover:bg-red-600'
                  }`}>
                    {tema.destacado ? (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className={`font-bold text-xl transition-colors ${
                        tema.destacado
                          ? 'text-white'
                          : 'group-hover:text-red-600'
                      }`}>{tema.title}</h3>
                      {tema.destacado && (
                        <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">NUEVO</span>
                      )}
                    </div>
                    <p className={tema.destacado ? 'text-white/90' : 'text-gray-600'}>{tema.description}</p>
                    {tema.destacado && (
                      <p className="text-orange-300 text-sm mt-2 font-semibold">RCP, Primeros Auxilios y Manejo de Extintores en entorno inmersivo</p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Clases de Fuego */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Clases de Fuego</h2>
            <p className="text-gray-600">Los fuegos se clasifican segun el material que se esta quemando</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {clasesFuego.map((clase, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className={`${clase.color} w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold`}>
                  {clase.clase}
                </div>
                <h3 className="font-bold text-lg mb-2">Clase {clase.clase}</h3>
                <p className="text-gray-600 text-sm">{clase.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academia */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Academia Total Proteccion</h2>
          <p className="text-gray-600 text-lg mb-8">
            Ofrecemos capacitaciones presenciales y virtuales para empresas y particulares.
            Nuestros cursos estan dictados por profesionales con amplia experiencia en el sector.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl font-bold text-red-600 mb-2">+100</div>
              <p className="text-gray-600">Cursos dictados</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl font-bold text-red-600 mb-2">+2000</div>
              <p className="text-gray-600">Personas capacitadas</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl font-bold text-red-600 mb-2">98%</div>
              <p className="text-gray-600">Satisfaccion</p>
            </div>
          </div>

          <Link
            href="/contacto"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Solicitar informacion
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
