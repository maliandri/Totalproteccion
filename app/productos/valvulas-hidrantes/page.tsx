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
                  <a
                    href={`https://wa.me/5492995484575?text=Hola!%20Me%20interesa%20${encodeURIComponent(categoria.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Consultar Precios
                  </a>
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
          <a
            href="https://wa.me/5492995484575?text=Hola!%20Necesito%20asesoría%20sobre%20válvulas%20e%20hidrantes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Solicitar Asesoría
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
