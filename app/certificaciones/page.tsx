import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const certificaciones = [
  {
    name: 'ISO 9001',
    description: 'Sistema de Gestion de Calidad',
    image: '/certifications/9001-150x150.jpg',
  },
  {
    name: 'ISO 14001',
    description: 'Sistema de Gestion Ambiental',
    image: '/certifications/14001-150x150.jpg',
  },
  {
    name: 'ISO 45001',
    description: 'Sistema de Gestion de Seguridad y Salud',
    image: '/certifications/45001-150x150.jpg',
  },
  {
    name: 'IRAM',
    description: 'Certificacion IRAM',
    image: '/certifications/logo-certificaciones-01-150x150.jpg',
  },
  {
    name: 'IRAM 3546',
    description: 'Matafuegos certificados',
    image: '/certifications/logo-certificaciones-02-150x150.jpg',
  },
  {
    name: 'NFPA',
    description: 'National Fire Protection Association',
    image: '/certifications/logo-certificaciones-05-150x150.jpg',
  },
  {
    name: 'Bureau Veritas',
    description: 'Certificacion internacional',
    image: '/certifications/logo-certificaciones-06-150x150.jpg',
  },
  {
    name: 'INTI',
    description: 'Instituto Nacional de Tecnologia Industrial',
    image: '/certifications/logo-certificaciones-07-150x150.jpg',
  },
  {
    name: 'UL Listed',
    description: 'Underwriters Laboratories',
    image: '/certifications/logo-certificaciones-08-150x150.jpg',
  },
  {
    name: 'FM Approved',
    description: 'Factory Mutual',
    image: '/certifications/logo-certificaciones-09-150x150.jpg',
  },
  {
    name: 'CAS',
    description: 'Certificacion Argentina de Seguridad',
    image: '/certifications/Logo-CAS-150x150.jpg',
  },
  {
    name: 'ODS',
    description: 'Objetivos de Desarrollo Sostenible',
    image: '/certifications/logo-certificaciones-13-150x150.jpg',
  },
]

export default function CertificacionesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="certificaciones" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-gradient-to-r from-blue-900 to-blue-700 py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Certificaciones</h1>
          <p className="text-xl text-white/90">Calidad certificada con alcance integral</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Compromiso con la Calidad</h2>
          <p className="text-gray-600 text-lg">
            En Total Proteccion nos comprometemos con los mas altos estandares de calidad.
            Nuestros productos y servicios cuentan con las certificaciones mas importantes
            de la industria, garantizando la seguridad y confiabilidad que nuestros clientes merecen.
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {certificaciones.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="mb-4 flex justify-center">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Beneficios de nuestras Certificaciones</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Seguridad Garantizada</h3>
              <p className="text-gray-600">Productos probados y certificados bajo los estandares mas exigentes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Trazabilidad Total</h3>
              <p className="text-gray-600">Control completo de todos los procesos de fabricacion y servicio</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Responsabilidad Ambiental</h3>
              <p className="text-gray-600">Comprometidos con el cuidado del medio ambiente</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
