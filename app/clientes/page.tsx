import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const clientes = [
  { name: 'YPF', image: '/clients/imgi_127_logo-ypf-min-1-1.png' },
  { name: 'Coca Cola', image: '/clients/imgi_30_logo-coca-cola-min.png' },
  { name: 'Ford', image: '/clients/logo-ford-scale-300x226.png' },
  { name: 'Mercado Libre', image: '/clients/imgi_75_logo-mercado-libre-min.png' },
  { name: 'Quilmes', image: '/clients/imgi_99_logo-quilmes-min.png' },
  { name: 'Correo Argentino', image: '/clients/correoargentino-300x226.png' },
  { name: 'Metrovias', image: '/clients/metrovias-min.png' },
  { name: 'Telefonica', image: '/clients/telefonica-300x226.jpg' },
  { name: 'Bayer', image: '/clients/bayer-300x226.png' },
  { name: 'Pfizer', image: '/clients/pfizer-300x226.jpg' },
  { name: 'DHL', image: '/clients/dhl-1-300x226.png' },
  { name: 'Unilever', image: '/clients/unilever-300x226.jpg' },
  { name: 'Nike', image: '/clients/nike-300x226.png' },
  { name: 'Renault', image: '/clients/renault-1-300x226.png' },
  { name: 'Santander', image: '/clients/santander-1-300x226.png' },
  { name: 'Techint', image: '/clients/techint-300x226.jpg' },
  { name: 'Scania', image: '/clients/scania-300x226.jpg' },
  { name: 'INVAP', image: '/clients/invap-300x226.jpg' },
  { name: 'Clorox', image: '/clients/clorox-300x225.jpg' },
  { name: 'Plaza Logistica', image: '/clients/plazalogistica-1-300x226.png' },
  { name: 'McCain', image: '/clients/mccain-300x226.png' },
  { name: 'Coto', image: '/clients/coto-300x225.png' },
  { name: 'Claro', image: '/clients/claro-300x226.jpg' },
  { name: 'Hospital Italiano', image: '/clients/hospitalitaliano-300x226.png' },
  { name: 'Hospital Britanico', image: '/clients/hospitalbritanico-300x226.jpg' },
  { name: 'Bago', image: '/clients/bago-300x226.jpg' },
  { name: 'Pampa Energia', image: '/clients/pampa-energia-300x226.png' },
  { name: 'Yara', image: '/clients/yara-300x226.png' },
  { name: 'Total', image: '/clients/total-300x226.jpg' },
  { name: 'Royal Canin', image: '/clients/royal-canin-300x226.jpg' },
  { name: 'Faurecia', image: '/clients/faurecia-300x226.png' },
  { name: 'APM Terminals', image: '/clients/apmterminals-350-300x225.jpg' },
  { name: 'UCA', image: '/clients/uca-300x226.png' },
  { name: 'Bremen', image: '/clients/bremen-300x226.png' },
  { name: 'Quickfood', image: '/clients/quickfood-300x226.png' },
  { name: 'Sinergium Biotech', image: '/clients/sinergium-biotech-300x226.png' },
]

export default function ClientesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="clientes" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-[#1a1a1a] py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nuestros Clientes</h1>
          <p className="text-xl text-gray-300">Empresas lideres confian en nosotros</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-red-600">+500</p>
              <p className="text-gray-600">Clientes Activos</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-600">+30</p>
              <p className="text-gray-600">Anos de Experiencia</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-600">+1000</p>
              <p className="text-gray-600">Proyectos Realizados</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-600">100%</p>
              <p className="text-gray-600">Satisfaccion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wide mb-2">CONFIANZA</p>
            <h2 className="text-3xl font-bold mb-4">Empresas que confian en nosotros</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trabajamos con las empresas mas importantes del pais brindando soluciones integrales en proteccion contra incendios
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {clientes.map((cliente, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center h-24"
              >
                <Image
                  src={cliente.image}
                  alt={cliente.name}
                  width={140}
                  height={70}
                  className="grayscale hover:grayscale-0 transition-all duration-300 object-contain max-h-16 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Forma parte de nuestros clientes</h2>
          <p className="text-xl mb-8 text-white/90">
            Contactanos y recibe una cotizacion personalizada para tu empresa
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contactar ahora
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
