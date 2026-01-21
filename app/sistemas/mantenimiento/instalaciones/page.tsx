'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MantenimientoInstalacionesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="sistemas" />

      <section className="relative w-full mt-20 bg-gradient-to-r from-yellow-600 to-yellow-700 py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/sistemas" className="hover:text-white">Sistemas</Link>
            <span>/</span>
            <Link href="/sistemas/mantenimiento" className="hover:text-white">Mantenimiento</Link>
            <span>/</span>
            <span className="text-white">Instalaciones Fijas</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Mantenimiento de Instalaciones Fijas</h1>
          <p className="text-xl text-white/90">Servicio integral para sistemas fijos de proteccion contra incendios</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            Ejecutamos servicios de mantenimiento para sistemas fijos de proteccion contra incendios,
            asegurando que funcionen de manera optima y cumplan con las normativas vigentes.
          </p>

          <h2 className="text-2xl font-bold mb-6">Sistemas que Mantenemos</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              'Redes de hidrantes interiores y exteriores',
              'Sistemas de rociadores automaticos',
              'Bombas contra incendio',
              'Sistemas de deteccion y alarma',
              'Sistemas de extincion por gases',
              'Sistemas de extincion en cocinas',
              'Valvulas de control y accesorios',
              'Gabinetes y mangueras',
            ].map((item, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <svg className="w-5 h-5 mr-3 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6">Nuestro Servicio Incluye</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">1</span>
                <div>
                  <strong>Inspeccion visual</strong> - Revision del estado general de los componentes
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">2</span>
                <div>
                  <strong>Pruebas funcionales</strong> - Verificacion del correcto funcionamiento
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">3</span>
                <div>
                  <strong>Limpieza y lubricacion</strong> - Mantenimiento preventivo de componentes
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">4</span>
                <div>
                  <strong>Informe tecnico</strong> - Documentacion detallada del estado del sistema
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-yellow-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Programa tu mantenimiento</h2>
          <p className="text-white/90 mb-8">Contactanos para una inspeccion de tu sistema</p>
          <a
            href="https://wa.me/5492995484575?text=Hola!%20Necesito%20mantenimiento%20de%20instalaciones%20fijas%20contra%20incendios"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
