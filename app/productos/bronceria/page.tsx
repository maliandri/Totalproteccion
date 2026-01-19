import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const productos = [
  {
    name: 'Uniones Storz',
    image: '/products/product/uniones-storz-300x240.jpg',
  },
  {
    name: 'Uniones de Mandril',
    image: '/products/product/uniones-de-mandril-300x240.jpg',
  },
  {
    name: 'Adaptadores y Reductores',
    image: '/products/product/adaptadores-reductores-300x240.jpg',
  },
  {
    name: 'Lanzas',
    image: '/products/product/lanzas-300x240.jpg',
  },
  {
    name: 'Lanzas Plasticas',
    image: '/products/product/lanzas-plasticas-300x240.jpg',
  },
  {
    name: 'Boquillas',
    image: '/products/product/boquillas-300x240.jpg',
  },
  {
    name: 'Columnas para Hidrantes',
    image: '/products/product/columnas-para-hidrantes-300x240.jpg',
  },
  {
    name: 'Bocas de Impulsion',
    image: '/products/product/bocas-de-impulsion-300x240.jpg',
  },
  {
    name: 'Valvula Tipo Teatro',
    image: '/products/product/valvula-tipo-teatro-300x240.jpg',
  },
  {
    name: 'Llave para Uniones',
    image: '/products/product/llave-para-uniones-300x240.jpg',
  },
  {
    name: 'Aros de Cobre',
    image: '/products/product/aros-de-cobre-300x240.jpg',
  },
  {
    name: 'Pataboca Impulsor',
    image: '/products/product/pataboca-impulsor-300x240.jpg',
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

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productos.map((producto, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <Image
                    src={producto.image}
                    alt={producto.name}
                    width={300}
                    height={240}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm text-center">{producto.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
