import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const caracteristicas = [
  {
    title: 'Materiales Ignífugos',
    description: 'Telas de alta tecnología resistentes al fuego y al calor extremo.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
  },
  {
    title: 'Costuras Reforzadas',
    description: 'Construcción robusta con costuras de alta resistencia para mayor durabilidad.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Diseño Ergonómico',
    description: 'Pensados para brindar comodidad y libertad de movimiento durante las operaciones.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Alta Durabilidad',
    description: 'Fabricados para resistir el uso intensivo en condiciones extremas.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
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
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Trajes Estructurales</h1>
              <p className="text-xl text-white/90">Protección de alto nivel contra incendios</p>
            </div>
            <div className="hidden md:block">
              <Image
                src="/products/trajes-estructurales-1.jpg"
                alt="Trajes Estructurales para Bomberos"
                width={500}
                height={350}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gray-600 text-lg leading-relaxed">
              Trajes estructurales especialmente diseñados para proteger al bombero en situaciones extremas.
              Materiales ignífugos con costuras reforzadas y diseño ergonómico que combinan seguridad,
              comodidad y durabilidad.
            </p>
          </div>

          {/* Características */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {caracteristicas.map((item, index) => (
              <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA y Catálogo */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Consultá con nosotros para asesoramiento personalizado y cotizaciones
            </h2>
            <p className="text-gray-300 mb-8">
              Nuestro equipo te ayudará a elegir el equipo de protección adecuado para tu brigada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/trajes/Catalogo-Melisam-Trajes-Estructurales-2025.pdf"
                download
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Descargar Catálogo
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-800 px-8 py-4 rounded-lg font-semibold transition"
              >
                Solicitar Cotización
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesitás más información?</h2>
          <p className="text-gray-600 mb-8">
            Contactanos por WhatsApp o completá el formulario de contacto
          </p>
          <a
            href="https://wa.me/5492995484575?text=Hola!%20Me%20interesa%20recibir%20información%20sobre%20Trajes%20Estructurales"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Consultar por WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
