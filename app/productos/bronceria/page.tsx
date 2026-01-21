'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const categorias = [
  {
    name: 'Uniones y Acoples',
    color: 'bg-amber-700',
    productos: [
      { name: 'Uniones Storz 1½"', specs: ['Diámetro: 38mm', 'Material: Bronce', 'Rosca: BSP'], image: '/products/product/uniones-storz-300x240.jpg' },
      { name: 'Uniones Storz 2½"', specs: ['Diámetro: 63mm', 'Material: Bronce', 'Rosca: BSP'], image: '/products/product/uniones-storz-300x240.jpg' },
      { name: 'Uniones Storz 4"', specs: ['Diámetro: 100mm', 'Material: Bronce', 'Rosca: BSP'], image: '/products/product/uniones-storz-300x240.jpg' },
      { name: 'Uniones de Mandril 1½"', specs: ['Para manguera 38mm', 'Fijación segura', 'Alta presión'], image: '/products/product/uniones-de-mandril-300x240.jpg' },
      { name: 'Uniones de Mandril 2½"', specs: ['Para manguera 63mm', 'Fijación segura', 'Alta presión'], image: '/products/product/uniones-de-mandril-300x240.jpg' },
    ],
  },
  {
    name: 'Adaptadores y Reductores',
    color: 'bg-amber-600',
    productos: [
      { name: 'Adaptador Storz-Rosca Macho', specs: ['Múltiples diámetros', 'Rosca BSP/NPT', 'Bronce fundido'], image: '/products/product/adaptadores-reductores-300x240.jpg' },
      { name: 'Adaptador Storz-Rosca Hembra', specs: ['Múltiples diámetros', 'Rosca BSP/NPT', 'Bronce fundido'], image: '/products/product/adaptadores-reductores-300x240.jpg' },
      { name: 'Reductor Storz 2½" a 1½"', specs: ['Reducción 63mm a 38mm', 'Material: Bronce', 'Sin pérdida de caudal'], image: '/products/product/adaptadores-reductores-300x240.jpg' },
      { name: 'Reductor Storz 4" a 2½"', specs: ['Reducción 100mm a 63mm', 'Material: Bronce', 'Alto caudal'], image: '/products/product/adaptadores-reductores-300x240.jpg' },
    ],
  },
  {
    name: 'Lanzas y Boquillas',
    color: 'bg-red-700',
    productos: [
      { name: 'Lanza de Bronce 1½"', specs: ['Caudal: 150-300 L/min', 'Chorro regulable', 'Mango ergonómico'], image: '/products/product/lanzas-300x240.jpg' },
      { name: 'Lanza de Bronce 2½"', specs: ['Caudal: 400-800 L/min', 'Chorro regulable', 'Uso profesional'], image: '/products/product/lanzas-300x240.jpg' },
      { name: 'Lanza Plástica Regulable', specs: ['Liviana y resistente', 'Chorro/Niebla', 'Económica'], image: '/products/product/lanzas-plasticas-300x240.jpg' },
      { name: 'Boquilla Regulable', specs: ['Ajuste de caudal', 'Material: Bronce', 'Múltiples diámetros'], image: '/products/product/boquillas-300x240.jpg' },
      { name: 'Boquilla de Niebla', specs: ['Patrón de niebla', 'Enfriamiento rápido', 'Bronce cromado'], image: '/products/product/boquillas-300x240.jpg' },
    ],
  },
  {
    name: 'Hidrantes y Bocas',
    color: 'bg-blue-700',
    productos: [
      { name: 'Columna para Hidrante', specs: ['Altura: 750mm/1000mm', 'Diámetro: 4"', 'Hierro fundido'], image: '/products/product/columnas-para-hidrantes-300x240.jpg' },
      { name: 'Boca de Impulsión Simple', specs: ['1 salida 2½"', 'Tapa y cadena', 'Empotrable'], image: '/products/product/bocas-de-impulsion-300x240.jpg' },
      { name: 'Boca de Impulsión Doble', specs: ['2 salidas 2½"', 'Tapas y cadenas', 'Empotrable'], image: '/products/product/bocas-de-impulsion-300x240.jpg' },
      { name: 'Conexión Siamesa', specs: ['2 entradas 2½"', '1 salida 4"', 'Bronce fundido'], image: '/products/product/bocas-de-impulsion-300x240.jpg' },
    ],
  },
  {
    name: 'Válvulas y Accesorios',
    color: 'bg-gray-700',
    productos: [
      { name: 'Válvula Tipo Teatro 2½"', specs: ['Control de flujo', 'Bronce fundido', 'Manija ergonómica'], image: '/products/product/valvula-tipo-teatro-300x240.jpg' },
      { name: 'Válvula Angular 2½"', specs: ['Conexión en ángulo', 'Cierre rápido', 'Alta presión'], image: '/products/product/valvula-tipo-teatro-300x240.jpg' },
      { name: 'Llave para Uniones Storz', specs: ['Acero forjado', 'Múltiples medidas', 'Antichispas'], image: '/products/product/llave-para-uniones-300x240.jpg' },
      { name: 'Aros de Cobre', specs: ['Sello hermético', 'Múltiples diámetros', 'Alta durabilidad'], image: '/products/product/aros-de-cobre-300x240.jpg' },
      { name: 'Pataboca Impulsor', specs: ['Protección de manguera', 'Bronce fundido', 'Fácil instalación'], image: '/products/product/pataboca-impulsor-300x240.jpg' },
    ],
  },
]

export default function BronceriaPage() {
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
            <span className="text-white">Bronceria</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Bronceria para Incendio</h1>
          <p className="text-xl text-white/90">Accesorios de bronce para sistemas contra incendio</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Accesorios de Bronce para Sistemas Contra Incendio</h2>
          <p className="text-gray-600 text-lg">
            Ofrecemos una línea completa de broncería para sistemas de protección contra incendios.
            Todos nuestros productos están fabricados en bronce de alta calidad, garantizando
            durabilidad, resistencia a la corrosión y funcionamiento confiable.
          </p>
        </div>
      </section>

      {/* Products by Category */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Catálogo de Broncería</h2>

          <div className="space-y-12">
            {categorias.map((categoria, catIndex) => (
              <div key={catIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`${categoria.color} p-4 text-white`}>
                  <h3 className="text-2xl font-bold">{categoria.name}</h3>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    {categoria.productos.map((producto, prodIndex) => (
                      <div
                        key={prodIndex}
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow group"
                      >
                        <div className="relative h-32 overflow-hidden bg-gray-100">
                          <Image
                            src={producto.image}
                            alt={producto.name}
                            width={300}
                            height={240}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-3">
                          <h4 className="font-bold text-sm mb-2">{producto.name}</h4>
                          <ul className="space-y-0.5 mb-3">
                            {producto.specs.map((spec, specIndex) => (
                              <li key={specIndex} className="text-xs text-gray-600 flex items-start">
                                <svg className="w-3 h-3 mr-1 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {spec}
                              </li>
                            ))}
                          </ul>
                          <a
                            href={`https://wa.me/5492995484575?text=Hola!%20Me%20interesa%20${encodeURIComponent(producto.name)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-green-500 hover:bg-green-600 text-white py-1.5 px-2 rounded text-xs font-medium transition-colors flex items-center justify-center gap-1"
                          >
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            Consultar
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Técnica */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Información Técnica</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-amber-600">
              <h3 className="text-xl font-bold mb-4">Materiales</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Bronce fundido de alta calidad</li>
                <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Hierro dúctil para hidrantes</li>
                <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Acero inoxidable para válvulas</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-amber-600">
              <h3 className="text-xl font-bold mb-4">Normas</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>IRAM 3546 - Broncería</li>
                <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>DIN 14800 - Storz</li>
                <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>NFPA 14 - Hidrantes</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-amber-600">
              <h3 className="text-xl font-bold mb-4">Presiones</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Trabajo: hasta 16 bar</li>
                <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Prueba: 25 bar</li>
                <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Rotura: 40 bar</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#8B7355]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Necesitás cotización de broncería?
          </h2>
          <p className="text-white/90 mb-8">
            Consultanos por precios y disponibilidad. Hacemos envíos a toda la provincia de Neuquén.
          </p>
          <a
            href="https://wa.me/5492995484575?text=Hola!%20Necesito%20cotización%20de%20broncería%20para%20incendio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Solicitar Cotización
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
