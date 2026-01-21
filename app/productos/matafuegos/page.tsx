'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const extintores = [
  {
    name: 'Clase A',
    description: 'Fuegos de materiales sólidos',
    image: '/products/product/clasea150x150-1.png',
    color: 'bg-green-600',
  },
  {
    name: 'Clase B',
    description: 'Fuegos de líquidos inflamables',
    image: '/products/product/claseb150x150.png',
    color: 'bg-red-600',
  },
  {
    name: 'Clase C',
    description: 'Fuegos de origen eléctrico',
    image: '/products/product/clasec150x150.png',
    color: 'bg-blue-600',
  },
  {
    name: 'Clase D',
    description: 'Fuegos de metales combustibles',
    image: '/products/product/clased150x150.png',
    color: 'bg-yellow-500',
  },
  {
    name: 'Clase K',
    description: 'Fuegos de aceites y grasas',
    image: '/products/product/clasek150x150.png',
    color: 'bg-purple-600',
  },
]

const tiposMatafuegos = [
  {
    name: 'Polvo ABC',
    image: '/products/product/Subcategoria-polvo-abc-300x240.jpg',
    href: '/productos/matafuegos/polvo-abc',
  },
  {
    name: 'Polvos Especiales',
    image: '/products/product/Subcategoria-polvos-especiales-1-300x240.jpg',
    href: '/productos/matafuegos/polvos-especiales',
  },
  {
    name: 'CO2',
    image: '/products/product/Subcategoria-co2-300x240.jpg',
    href: '/productos/matafuegos/co2',
  },
  {
    name: 'Agua',
    image: '/products/product/Agua-300x240.jpg',
    href: '/productos/matafuegos/agua',
  },
  {
    name: 'Agua y AFFF',
    image: '/products/product/Agua-y-afff-300x240.jpg',
    href: '/productos/matafuegos/agua-afff',
  },
  {
    name: 'HCFC 123',
    image: '/products/product/HCFC123-300x240.jpg',
    href: '/productos/matafuegos/hcfc-123',
  },
  {
    name: 'HFC 236',
    image: '/products/product/HFC236-300x240.jpg',
    href: '/productos/matafuegos/hfc-236',
  },
  {
    name: 'Acetato de Potasio',
    image: '/products/product/Acetato-de-potasio-300x240.jpg',
    href: '/productos/matafuegos/acetato-potasio',
  },
]

export default function MatafuegosPage() {
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
            <span className="text-white">Matafuegos</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Matafuegos</h1>
          <p className="text-xl text-white/90">Distribuidor Oficial Mayorista Melisam - Extintores de todo tipo y capacidad</p>
        </div>
      </section>

      {/* Clases de Fuego */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Clases de Fuego</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Los matafuegos se clasifican según el tipo de fuego que pueden extinguir
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {extintores.map((extintor, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className={`${extintor.color} w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <Image
                    src={extintor.image}
                    alt={extintor.name}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">{extintor.name}</h3>
                <p className="text-sm text-gray-600">{extintor.description}</p>
              </div>
            ))}
          </div>

          {/* Link a capacitación */}
          <div className="text-center mt-8">
            <Link
              href="/capacitaciones/tipos-matafuegos"
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Aprender más sobre clases de fuego y agentes extintores
            </Link>
          </div>
        </div>
      </section>

      {/* Tipos de Matafuegos */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Tipos de Matafuegos</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Contamos con una amplia variedad de agentes extintores para cada necesidad
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiposMatafuegos.map((tipo, index) => (
              <Link
                key={index}
                href={tipo.href}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={tipo.image}
                    alt={tipo.name}
                    width={300}
                    height={240}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-center">{tipo.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info Image */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative">
            <Image
              src="/products/product/Tipos-de-matafuegos_b-1024x670.jpg"
              alt="Tipos de Matafuegos"
              width={1024}
              height={670}
              className="w-full rounded-xl shadow-lg"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm">
              <p className="font-semibold">Fuente: Melisam Extintores</p>
              <p className="text-xs text-gray-300">Total Protección - Distribuidor Oficial Mayorista</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#c41e3a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Necesitás asesoramiento?
          </h2>
          <p className="text-white/90 mb-8">
            Te ayudamos a elegir el matafuego correcto para tu empresa o industria
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5492995484575?text=Hola!%20Estuve%20viendo%20matafuegos%20en%20totalproteccion.com.ar%20y%20necesito%20asesoramiento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Consultar por WhatsApp
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-red-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Enviar Consulta
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
