import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const gabinetes = [
  {
    name: 'Gabinete Extintor Puerta Enteriza',
    image: '/products/product/gabineteextintorpuertaenterizavisor-300x300.png',
  },
  {
    name: 'Gabinete Extintor Guillotina',
    image: '/products/product/gabinetesextintoresguillotina-300x300.png',
  },
  {
    name: 'Gabinete Extintor Puerta Alero',
    image: '/products/product/gabineteextintorpuerta-alero-300x300.png',
  },
  {
    name: 'Gabinete Extintor 5kg',
    image: '/products/product/gabineteextintorpuerta5-300x300.png',
  },
  {
    name: 'Gabinete Extintor 10kg',
    image: '/products/product/gabineteextintorpuertaenterizavisor10-300x300.png',
  },
  {
    name: 'Gabinete Extintor 10kg Alero',
    image: '/products/product/gabineteextintorpuertaenterizavisor10alero-300x300.png',
  },
  {
    name: 'Gabinete Manguera Puerta Enteriza',
    image: '/products/product/gabinetesextintores-300x300.png',
  },
  {
    name: 'Gabinete Manguera Extintor Vertical',
    image: '/products/product/gabinetemangaextintorpvertical-300x300.png',
  },
  {
    name: 'Gabinete Manguera Puerta Alero',
    image: '/products/product/gabinetemangapuertaalero-300x300.png',
  },
  {
    name: 'Gabinete Manguera Visor',
    image: '/products/product/gabinetemangapuertaenterizavisor-300x300.png',
  },
  {
    name: 'Gabinete Manguera Alero',
    image: '/products/product/gabinetemangapuertaenterizavisoralero-300x300.png',
  },
  {
    name: 'Gabinete Manguera Acero',
    image: '/products/product/Gabinete-manga-acerp-300x300.jpg',
  },
  {
    name: 'Gabinete Manguera Acero Inox',
    image: '/products/product/gabinete-manga-puerta-acero-inox-300x300.jpg',
  },
  {
    name: 'Gabinete CO2 7kg',
    image: '/products/product/gabinete-extintor-co2-7-kg-300x300.jpg',
  },
  {
    name: 'Gabinete CO2 Guillotina',
    image: '/products/product/gabinete-extintor-co2-7-guillotina-300x300.png',
  },
  {
    name: 'Gabinetes Especiales',
    image: '/products/product/gabinetes-especiales-300x240.jpg',
  },
]

export default function GabinetesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="productos" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-[#333] py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/productos" className="hover:text-white">Productos</Link>
            <span>/</span>
            <span className="text-white">Gabinetes</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Gabinetes</h1>
          <p className="text-xl text-white/90">Gabinetes para extintores y mangueras de incendio</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {gabinetes.map((gabinete, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <Image
                    src={gabinete.image}
                    alt={gabinete.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm text-center">{gabinete.name}</h3>
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
