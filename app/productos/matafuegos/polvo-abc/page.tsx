'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const productos = [
  {
    name: 'Matafuego Polvo ABC x 1 Kg',
    image: '/products/product/matafuego-abc-1kg.jpg',
    specs: ['Capacidad: 1 Kg', 'Clase: ABC', 'Alcance: 2-3 metros', 'Tiempo descarga: 8 seg'],
  },
  {
    name: 'Matafuego Polvo ABC x 2.5 Kg',
    image: '/products/product/matafuego-abc-2.5kg.jpg',
    specs: ['Capacidad: 2.5 Kg', 'Clase: ABC', 'Alcance: 3-4 metros', 'Tiempo descarga: 10 seg'],
  },
  {
    name: 'Matafuego Polvo ABC x 5 Kg',
    image: '/products/product/matafuego-abc-5kg.jpg',
    specs: ['Capacidad: 5 Kg', 'Clase: ABC', 'Alcance: 4-5 metros', 'Tiempo descarga: 14 seg'],
  },
  {
    name: 'Matafuego Polvo ABC x 10 Kg',
    image: '/products/product/matafuego-abc-10kg.jpg',
    specs: ['Capacidad: 10 Kg', 'Clase: ABC', 'Alcance: 5-6 metros', 'Tiempo descarga: 20 seg'],
  },
  {
    name: 'Matafuego Polvo ABC x 25 Kg Carretilla',
    image: '/products/product/matafuego-abc-25kg.jpg',
    specs: ['Capacidad: 25 Kg', 'Clase: ABC', 'Con carretilla', 'Tiempo descarga: 35 seg'],
  },
  {
    name: 'Matafuego Polvo ABC x 50 Kg Carretilla',
    image: '/products/product/matafuego-abc-50kg.jpg',
    specs: ['Capacidad: 50 Kg', 'Clase: ABC', 'Con carretilla', 'Tiempo descarga: 50 seg'],
  },
  {
    name: 'Matafuego Polvo ABC x 70 Kg Carretilla',
    image: '/products/product/matafuego-abc-70kg.jpg',
    specs: ['Capacidad: 70 Kg', 'Clase: ABC', 'Con carretilla', 'Tiempo descarga: 60 seg'],
  },
  {
    name: 'Matafuego Polvo ABC x 100 Kg Carretilla',
    image: '/products/product/matafuego-abc-100kg.jpg',
    specs: ['Capacidad: 100 Kg', 'Clase: ABC', 'Con carretilla', 'Tiempo descarga: 80 seg'],
  },
]

export default function PolvoABCPage() {
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
            <Link href="/productos/matafuegos" className="hover:text-white">Matafuegos</Link>
            <span>/</span>
            <span className="text-white">Polvo ABC</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Matafuegos Polvo ABC</h1>
          <p className="text-xl text-white/90">El extintor más versátil para fuegos clase A, B y C</p>
        </div>
      </section>

      {/* Descripción */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">¿Qué es el Polvo ABC?</h2>
            <p className="text-gray-600 mb-4">
              El polvo químico seco ABC (fosfato monoamónico) es el agente extintor más utilizado por su versatilidad.
              Es efectivo para combatir fuegos de clase A (sólidos combustibles), clase B (líquidos inflamables) y
              clase C (equipos eléctricos energizados).
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <span className="text-3xl font-bold text-green-600">A</span>
                <p className="text-sm text-gray-600 mt-1">Sólidos combustibles</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                <span className="text-3xl font-bold text-red-600">B</span>
                <p className="text-sm text-gray-600 mt-1">Líquidos inflamables</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                <span className="text-3xl font-bold text-blue-600">C</span>
                <p className="text-sm text-gray-600 mt-1">Equipos eléctricos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productos */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Productos</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productos.map((producto, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src="/products/product/Subcategoria-polvo-abc-300x240.jpg"
                    alt={producto.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-3 text-gray-800 min-h-[40px]">{producto.name}</h3>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {producto.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <svg className="w-3 h-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/5492995484575?text=Hola!%20Me%20interesa%20el%20${encodeURIComponent(producto.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Consultar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#c41e3a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Necesitás cotización?
          </h2>
          <p className="text-white/90 mb-8">
            Consultanos por precios y disponibilidad. Hacemos envíos a toda la provincia de Neuquén.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5492995484575?text=Hola!%20Necesito%20cotización%20de%20matafuegos%20Polvo%20ABC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Solicitar Cotización
            </a>
            <Link
              href="/productos/matafuegos"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-red-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Ver todos los matafuegos
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
