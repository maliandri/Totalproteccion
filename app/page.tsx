import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/logos/Logo-Melisam.png"
              alt="Total Protección"
              width={200}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          <nav className="hidden md:flex space-x-6">
            <a href="#inicio" className="text-gray-700 hover:text-primary">Inicio</a>
            <a href="#empresa" className="text-gray-700 hover:text-primary">Empresa</a>
            <a href="#productos" className="text-gray-700 hover:text-primary">Productos</a>
            <a href="#servicios" className="text-gray-700 hover:text-primary">Servicios</a>
            <a href="#certificaciones" className="text-gray-700 hover:text-primary">Certificaciones</a>
            <a href="#contacto" className="text-gray-700 hover:text-primary">Contacto</a>
          </nav>

          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Total Protección
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Soluciones Integrales en Protección Contra Incendio
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contacto" className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-lg font-semibold transition">
                Contáctanos
              </a>
              <a href="#servicios" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition">
                Nuestros Servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Nuestros Servicios</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <Image
                src="/services/melisam-ingenieria@3x-8-1024x211.png"
                alt="Ingeniería"
                width={400}
                height={82}
                className="w-full h-auto mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-primary">Ingeniería</h3>
              <p className="text-gray-600">
                Diseño y desarrollo de proyectos de protección contra incendios con los más altos estándares de calidad.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <Image
                src="/services/melisam-extintores@3x-8-1024x211.png"
                alt="Extintores"
                width={400}
                height={82}
                className="w-full h-auto mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-primary">Extintores</h3>
              <p className="text-gray-600">
                Venta e instalación de extintores de última generación para todo tipo de industrias.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <Image
                src="/services/melisam-mantenimiento@3x-8-1024x210.png"
                alt="Mantenimiento"
                width={400}
                height={82}
                className="w-full h-auto mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-primary">Mantenimiento</h3>
              <p className="text-gray-600">
                Mantenimiento preventivo y correctivo de sistemas de protección contra incendios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certificaciones" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Certificaciones</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              '9001-150x150.jpg',
              '14001-150x150.jpg',
              '45001-150x150.jpg',
              'logo-certificaciones-01-150x150.jpg',
              'logo-certificaciones-02-150x150.jpg',
              'logo-certificaciones-03-150x150.jpg',
            ].map((cert, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-center justify-center hover:shadow-lg transition">
                <Image
                  src={`/${cert}`}
                  alt={`Certificación ${index + 1}`}
                  width={150}
                  height={150}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clientes" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Nuestros Clientes</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {[
              'logos/imgi_30_logo-coca-cola-min.png',
              'logos/logo-ford-scale-300x226.png',
              'logos/imgi_75_logo-mercado-libre-min.png',
              'logos/imgi_127_logo-ypf-min-1-1.png',
              'logos/imgi_99_logo-quilmes-min.png',
              'logos/imgi_113_logo-telefonica-min-1.png',
              'metrovias-min.png',
              'logos/imgi_32_logo-correo-arg-min-1.png',
            ].map((client, index) => (
              <div key={index} className="bg-white p-6 rounded-lg flex items-center justify-center hover:shadow-lg transition">
                <Image
                  src={`/${client}`}
                  alt={`Cliente ${index + 1}`}
                  width={120}
                  height={80}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Contactanos</h2>
            <p className="text-xl mb-8">
              Estamos aquí para ayudarte con todas tus necesidades de protección contra incendios
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-bold mb-2">Teléfono</h3>
                <p>+54 11 1234-5678</p>
              </div>

              <div>
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p>info@totalproteccion.com.ar</p>
              </div>

              <div>
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-bold mb-2">Ubicación</h3>
                <p>Buenos Aires, Argentina</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Total Protección. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  )
}
