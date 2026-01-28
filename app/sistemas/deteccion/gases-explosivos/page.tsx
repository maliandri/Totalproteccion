'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function GasesExplosivosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="sistemas" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-gradient-to-r from-amber-600 to-orange-700 py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/sistemas" className="hover:text-white">Sistemas</Link>
            <span>/</span>
            <Link href="/sistemas/deteccion" className="hover:text-white">Deteccion</Link>
            <span>/</span>
            <span className="text-white">Gases Explosivos</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Deteccion de Gases Explosivos</h1>
          <p className="text-xl text-white/90">Monitoreo continuo de atmosferas peligrosas</p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Los sistemas de <strong>deteccion de gases explosivos</strong> monitorean continuamente
                la presencia de gases inflamables y combustibles en el ambiente, alertando cuando las
                concentraciones alcanzan niveles peligrosos.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Estos sistemas son esenciales en <strong>instalaciones industriales, plantas quimicas,
                estaciones de servicio</strong> y cualquier lugar donde exista riesgo de fugas de gases
                inflamables como metano, propano, hidrogeno o vapores de solventes.
              </p>
            </div>
            <div className="relative h-80 bg-gray-100 rounded-xl overflow-hidden">
              <Image
                src="/sistemas/sistemas-de-deteccion-de-incendios/sistemas-de-deteccion-de-gases-explosivos/img-deteccion-gas-1.jpg"
                alt="Detector de gases explosivos"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gases Detectados */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Gases Detectados</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { name: 'Metano (CH4)', desc: 'Gas natural' },
              { name: 'Propano (C3H8)', desc: 'GLP' },
              { name: 'Hidrogeno (H2)', desc: 'Industrial' },
              { name: 'Monoxido de Carbono', desc: 'Combustion incompleta' },
              { name: 'Acetileno', desc: 'Soldadura' },
              { name: 'Amoniaco', desc: 'Refrigeracion' },
              { name: 'Vapores de Solventes', desc: 'Industria quimica' },
              { name: 'Gases Toxicos', desc: 'Varios' }
            ].map((gas, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-amber-700">{gas.name}</h4>
                <p className="text-sm text-gray-500">{gas.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funcionamiento */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Como Funciona</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">1</span>
              </div>
              <h3 className="font-bold mb-2">Muestreo Continuo</h3>
              <p className="text-gray-600 text-sm">Los detectores analizan el aire constantemente en busca de gases combustibles</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">2</span>
              </div>
              <h3 className="font-bold mb-2">Medicion LEL</h3>
              <p className="text-gray-600 text-sm">Se mide el porcentaje del Limite Inferior de Explosividad (LEL)</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">3</span>
              </div>
              <h3 className="font-bold mb-2">Alarma y Accion</h3>
              <p className="text-gray-600 text-sm">Al superar umbrales programados, se activan alarmas y sistemas de ventilacion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Niveles de Alarma */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Niveles de Alarma Tipicos</h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center bg-green-100 p-4 rounded-lg">
                <div className="w-24 font-bold text-green-700">0-10% LEL</div>
                <div className="flex-1">Normal - Sin accion requerida</div>
              </div>
              <div className="flex items-center bg-yellow-100 p-4 rounded-lg">
                <div className="w-24 font-bold text-yellow-700">10-20% LEL</div>
                <div className="flex-1">Pre-alarma - Activacion de ventilacion</div>
              </div>
              <div className="flex items-center bg-orange-100 p-4 rounded-lg">
                <div className="w-24 font-bold text-orange-700">20-40% LEL</div>
                <div className="flex-1">Alarma - Evacuacion y corte de suministros</div>
              </div>
              <div className="flex items-center bg-red-100 p-4 rounded-lg">
                <div className="w-24 font-bold text-red-700">{'>'}40% LEL</div>
                <div className="flex-1">Emergencia - Riesgo de explosion inminente</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Protege tus instalaciones de riesgos explosivos</h2>
          <p className="text-white/90 mb-8">Consultanos sobre sistemas de deteccion de gases</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5492995484575?text=Hola!%20Necesito%20cotizacion%20para%20sistema%20de%20deteccion%20de%20gases%20explosivos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Consultar por WhatsApp
            </a>
            <Link href="/sistemas/deteccion" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-amber-600 px-6 py-3 rounded-lg font-semibold transition-colors">
              Ver otros sistemas
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
