import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const categorias = [
  {
    title: 'Sistemas de Extincion',
    description: 'Soluciones integrales para la extincion de incendios',
    items: [
      { name: 'Sistemas a Base de Agua', href: '/sistemas/extincion-agua' },
      { name: 'Sistemas a Base de Espuma', href: '/sistemas/extincion-espuma' },
      { name: 'Sistemas por Gases', href: '/sistemas/extincion-gases' },
      { name: 'Sistemas en Cocinas', href: '/sistemas/extincion-cocinas' },
      { name: 'Sistemas en Vehiculos Pesados', href: '/sistemas/extincion-vehiculos' },
      { name: 'Extincion en Autobuses', href: '/sistemas/extincion-autobuses' },
      { name: 'Sistemas para Cabinas de Pintura', href: '/sistemas/extincion-cabinas' },
      { name: 'Sistema Helix', href: '/sistemas/extincion-helix' },
      { name: 'Sistema Autofirex DLP', href: '/sistemas/extincion-autofirex' },
    ],
    color: 'bg-red-600',
  },
  {
    title: 'Sistemas de Deteccion',
    description: 'Tecnologia avanzada para la deteccion temprana de incendios',
    items: [
      { name: 'Sistemas Convencionales', href: '/sistemas/deteccion-convencional' },
      { name: 'Sistemas Inteligentes', href: '/sistemas/deteccion-inteligente' },
      { name: 'Sistemas de Aspiracion de Humo', href: '/sistemas/deteccion-aspiracion' },
      { name: 'Barreras Infrarrojas', href: '/sistemas/deteccion-barreras' },
      { name: 'Subcentrales de Comando', href: '/sistemas/deteccion-subcentrales' },
      { name: 'Elementos Perifericos', href: '/sistemas/deteccion-perifericos' },
      { name: 'Deteccion de Gases Explosivos', href: '/sistemas/deteccion-gases' },
      { name: 'Camaras Termicas', href: '/sistemas/deteccion-camaras' },
    ],
    color: 'bg-blue-600',
  },
  {
    title: 'Servicio de Mantenimiento',
    description: 'Mantenimiento preventivo y correctivo de instalaciones',
    items: [
      { name: 'Mantenimiento de Instalaciones Fijas', href: '/sistemas/mantenimiento-ifci' },
      { name: 'Central de Carga para Gases Limpios', href: '/sistemas/mantenimiento-gases' },
    ],
    color: 'bg-yellow-500',
  },
]

export default function SistemasPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="sistemas" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-[#003d82] py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sistemas contra Incendios</h1>
          <p className="text-xl text-white/90">Soluciones integrales en prevencion, deteccion y extincion</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {categorias.map((categoria, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`${categoria.color} p-6 text-white`}>
                  <h2 className="text-2xl font-bold mb-2">{categoria.title}</h2>
                  <p className="text-white/90 text-sm">{categoria.description}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {categoria.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          href={item.href}
                          className="flex items-center text-gray-700 hover:text-red-600 transition group"
                        >
                          <svg className="w-4 h-4 mr-2 text-gray-400 group-hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingenieria y Diseno */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ingenieria y Diseno</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Contamos con un equipo de ingenieros especializados en el diseno de sistemas contra incendio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Ingenieria, Diseno y Auditoria</h3>
              <p className="text-gray-600 mb-4">
                Realizamos el diseno integral de sistemas contra incendio, desde el relevamiento hasta la puesta en marcha.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Relevamiento de instalaciones
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Diseno de sistemas
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Auditoria de instalaciones existentes
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Montaje de Sistemas</h3>
              <p className="text-gray-600 mb-4">
                Instalacion profesional de sistemas contra incendio con personal capacitado y certificado.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Instalacion de redes de incendio
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Montaje de sistemas de deteccion
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Puesta en marcha y pruebas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
