import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const categorias = [
  {
    name: 'Hidrantes de Columna',
    description: 'Hidrantes de columna seca y humeda para redes publicas y privadas de incendio. Diseñados para condiciones climaticas extremas.',
    items: ['Hidrante de columna seca', 'Hidrante de columna humeda', 'Hidrante de pared', 'Conexiones siamesas', 'Adaptadores y reducciones'],
    image: '/products/bronceria-1.jpg',
  },
  {
    name: 'Postes de Incendio',
    description: 'Postes indicadores de valvulas enterradas y bocas de incendio. Alta visibilidad y resistencia a impactos.',
    items: ['Poste indicador de valvula', 'Poste de boca de incendio', 'Columna de señalizacion', 'Protectores de impacto', 'Señalizacion reflectiva'],
    image: '/products/matafuegos-1.jpg',
  },
  {
    name: 'Valvulas de Compuerta',
    description: 'Valvulas de compuerta para control de flujo en redes de incendio. Apertura total sin perdida de carga.',
    items: ['Valvula de compuerta OS&Y', 'Valvula de compuerta enterrada', 'Valvula de compuerta bridada', 'Valvula de compuerta roscada', 'Indicadores de posicion'],
    image: '/products/mangueras-productos-1-1.jpg',
  },
  {
    name: 'Valvulas Mariposa',
    description: 'Valvulas de mariposa para seccionamiento rapido. Diseño compacto ideal para espacios reducidos.',
    items: ['Valvula mariposa lug', 'Valvula mariposa wafer', 'Valvula mariposa con indicador', 'Valvula de control', 'Actuadores manuales y electricos'],
    image: '/products/gabintenes-mangueras-300x240.jpg',
  },
]

const caracteristicas = [
  {
    title: 'Materiales Premium',
    description: 'Fabricados en bronce, hierro ductil y acero inoxidable para maxima durabilidad.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Certificaciones',
    description: 'Productos certificados UL, FM e IRAM para garantizar su confiabilidad.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Larga Vida Util',
    description: 'Diseñados para operar durante decadas con minimo mantenimiento.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function ValvulasHidrantesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="productos" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-[#8B7355] py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/productos" className="hover:text-white">Productos</Link>
            <span>/</span>
            <span className="text-white">Valvulas, Postes e Hidrantes</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Valvulas, Postes e Hidrantes</h1>
          <p className="text-xl text-white/90">Componentes esenciales para redes de proteccion contra incendios</p>
        </div>
      </section>

      {/* Caracteristicas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {caracteristicas.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Nuestros Productos</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Amplia gama de valvulas, hidrantes y accesorios para sistemas de proteccion contra incendios
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {categorias.map((categoria, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="relative h-48">
                  <Image
                    src={categoria.image}
                    alt={categoria.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <h3 className="text-2xl font-bold text-white p-6">{categoria.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{categoria.description}</p>
                  <h4 className="font-semibold mb-3 text-gray-700">Productos disponibles:</h4>
                  <ul className="space-y-2">
                    {categoria.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 mr-2 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contacto"
                    className="inline-block mt-6 bg-amber-700 text-white px-6 py-2 rounded-lg hover:bg-amber-800 transition text-sm"
                  >
                    Consultar Precios
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Normas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Normas y Estandares</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-2xl font-bold text-amber-700 mb-2">NFPA</h3>
              <p className="text-gray-600 text-sm">National Fire Protection Association</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-2xl font-bold text-amber-700 mb-2">UL</h3>
              <p className="text-gray-600 text-sm">Underwriters Laboratories</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-2xl font-bold text-amber-700 mb-2">FM</h3>
              <p className="text-gray-600 text-sm">Factory Mutual Approvals</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-2xl font-bold text-amber-700 mb-2">IRAM</h3>
              <p className="text-gray-600 text-sm">Instituto Argentino de Normalizacion</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#8B7355] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Componentes de Calidad para su Red de Incendio</h2>
          <p className="text-xl text-white/90 mb-8">
            Asesoramiento tecnico para seleccionar los componentes adecuados para su proyecto
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-white text-amber-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Solicitar Asesoria
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
