import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const agentes = [
  {
    name: 'FM-200 (HFC-227ea)',
    description: 'Agente limpio de extincion rapida, seguro para personas. No deja residuos y no daña equipos electronicos.',
    features: ['Extincion en menos de 10 segundos', 'Seguro para areas ocupadas', 'Sin residuos', 'No conduce electricidad', 'ODP = 0'],
    applications: ['Centros de datos', 'Salas de control', 'Telecomunicaciones', 'Archivos'],
    color: 'bg-blue-600',
  },
  {
    name: 'NOVEC 1230',
    description: 'El agente mas avanzado del mercado. Margen de seguridad superior y minimo impacto ambiental.',
    features: ['GWP < 1', 'Mayor margen de seguridad', 'Extincion ultra rapida', 'Electricamente no conductor', 'No agota ozono'],
    applications: ['Data centers', 'Museos', 'Laboratorios', 'Salas blancas'],
    color: 'bg-green-600',
  },
  {
    name: 'CO2 (Dioxido de Carbono)',
    description: 'Gas inerte de alta efectividad. Ideal para riesgos industriales donde no hay presencia de personas.',
    features: ['Penetracion profunda', 'Sin residuos', 'Economico', 'Electricamente no conductor', 'Disponibilidad garantizada'],
    applications: ['Cuartos de pintura', 'Imprentas', 'Maquinaria industrial', 'Turbinas'],
    color: 'bg-gray-600',
  },
]

const componentes = [
  'Cilindros de almacenamiento',
  'Valvulas de descarga',
  'Boquillas de distribucion',
  'Panel de control',
  'Detectores de humo',
  'Pulsadores manuales',
  'Sirenas y luces estroboscopicas',
  'Presostatos de supervision',
]

const ventajas = [
  {
    title: 'Sin Daños Colaterales',
    description: 'Los agentes gaseosos no dejan residuos que puedan dañar equipos o materiales valiosos.',
  },
  {
    title: 'Extincion Rapida',
    description: 'Actuan en segundos, minimizando el tiempo de exposicion al fuego y los daños asociados.',
  },
  {
    title: 'Tridimensional',
    description: 'El gas penetra en todos los rincones del area protegida, alcanzando fuegos ocultos.',
  },
  {
    title: 'Electricamente Seguros',
    description: 'No conducen electricidad, ideales para proteccion de equipos electronicos energizados.',
  },
]

export default function ExtincionGasesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="sistemas" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-[#333] py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/sistemas" className="hover:text-white">Sistemas</Link>
            <span>/</span>
            <span className="text-white">Sistemas por Gases</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sistemas por Gases</h1>
          <p className="text-xl text-white/90">Proteccion con FM-200, Novec 1230 y CO2 para areas criticas</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Agentes Limpios de Extincion</h2>
          <p className="text-gray-600 text-lg">
            Los sistemas de extincion por gases son la solucion ideal para proteger areas donde el agua o la espuma
            causarian daños mayores que el propio fuego. Utilizamos agentes limpios de ultima generacion que extinguen
            el fuego sin dejar residuos ni dañar equipos sensibles.
          </p>
        </div>
      </section>

      {/* Ventajas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ventajas de la Extincion por Gases</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {ventajas.map((ventaja, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">{ventaja.title}</h3>
                <p className="text-gray-600 text-sm">{ventaja.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agentes */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Agentes Extintores</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Trabajamos con los agentes de extincion gaseosa mas avanzados del mercado
          </p>

          <div className="space-y-8">
            {agentes.map((agente, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className={`${agente.color} p-6 text-white`}>
                  <h3 className="text-2xl font-bold">{agente.name}</h3>
                  <p className="text-white/90 mt-2">{agente.description}</p>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-700">Caracteristicas:</h4>
                      <ul className="space-y-2">
                        {agente.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center text-gray-600 text-sm">
                            <svg className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-700">Aplicaciones tipicas:</h4>
                      <ul className="space-y-2">
                        {agente.applications.map((app, aIndex) => (
                          <li key={aIndex} className="flex items-center text-gray-600 text-sm">
                            <svg className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Componentes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Componentes del Sistema</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {componentes.map((componente, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <svg className="w-5 h-5 mr-3 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-gray-700 text-sm">{componente}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Normativas */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Normativas y Certificaciones</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-gray-800">
              <h3 className="text-xl font-bold mb-2">NFPA 2001</h3>
              <p className="text-gray-600 text-sm">Sistemas de extincion con agentes limpios</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-gray-800">
              <h3 className="text-xl font-bold mb-2">ISO 14520</h3>
              <p className="text-gray-600 text-sm">Sistemas de extincion gaseosa</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-gray-800">
              <h3 className="text-xl font-bold mb-2">UL Listed</h3>
              <p className="text-gray-600 text-sm">Certificacion de equipos</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-gray-800">
              <h3 className="text-xl font-bold mb-2">FM Approved</h3>
              <p className="text-gray-600 text-sm">Aprobacion Factory Mutual</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#333] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Proteja sus Activos Criticos</h2>
          <p className="text-xl text-white/90 mb-8">
            Diseñamos sistemas de extincion gaseosa para centros de datos, salas de control y areas sensibles
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Solicitar Evaluacion
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
