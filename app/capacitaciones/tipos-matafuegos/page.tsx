'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Clases de fuego con explicación técnica completa
const clasesDeFuego = [
  {
    clase: 'A',
    color: 'bg-green-600',
    nombre: 'Materiales Sólidos',
    materiales: 'Madera, papel, cartón, telas, plásticos y otros materiales sólidos que dejan brasas.',
    caracteristica: 'Producen brasas y cenizas al quemarse. El fuego se propaga en superficie y profundidad.',
    metodoExtincion: 'Enfriamiento y penetración. El agua es el agente más efectivo porque enfría y penetra el material.',
  },
  {
    clase: 'B',
    color: 'bg-red-600',
    nombre: 'Líquidos Inflamables',
    materiales: 'Naftas, alcoholes, solventes, pinturas, aceites, grasas y otros líquidos combustibles.',
    caracteristica: 'Arden solo en superficie. Los vapores del líquido son los que se inflaman, no el líquido en sí.',
    metodoExtincion: 'Sofocación. Se debe cortar el suministro de oxígeno mediante espuma o polvo químico.',
  },
  {
    clase: 'C',
    color: 'bg-blue-600',
    nombre: 'Equipos Energizados',
    materiales: 'Tableros eléctricos, motores, transformadores, computadoras y cualquier equipo bajo tensión.',
    caracteristica: 'El riesgo principal es la electrocución. El fuego puede ser Clase A o B, pero con corriente eléctrica.',
    metodoExtincion: 'Agentes no conductores como CO2, polvo químico o gases limpios. NUNCA usar agua.',
  },
  {
    clase: 'D',
    color: 'bg-yellow-500',
    nombre: 'Metales Combustibles',
    materiales: 'Aluminio, magnesio, titanio, sodio, potasio y sus aleaciones en forma de virutas o polvo.',
    caracteristica: 'Alcanzan temperaturas extremas (hasta 3000°C). Reaccionan violentamente con agua.',
    metodoExtincion: 'Polvos especiales clase D que forman costra aislante. NUNCA usar agua ni CO2.',
  },
  {
    clase: 'K',
    color: 'bg-purple-600',
    nombre: 'Aceites de Cocina',
    materiales: 'Aceites y grasas vegetales o animales utilizados en freidoras y cocinas industriales.',
    caracteristica: 'Temperatura de autoignición muy alta. El agua provoca explosión por vaporización instantánea.',
    metodoExtincion: 'Saponificación con acetato de potasio. Forma una capa jabonosa que sella y enfría.',
  },
]

// Agentes extintores con explicación técnica
const agentesExtintores = [
  {
    nombre: 'Agua',
    descripcion: 'El agente extintor más antiguo y económico. Actúa por enfriamiento, absorbiendo el calor del fuego.',
    ventajas: ['Económico y abundante', 'Excelente para Clase A', 'No tóxico', 'Penetra materiales porosos'],
    desventajas: ['Conductor eléctrico (peligro Clase C)', 'No efectivo en líquidos (Clase B)', 'Puede dañar equipos'],
    clases: { A: 'SI', B: 'NO', C: 'NO', D: 'NO', K: 'NO' },
    colorClases: { A: 'bg-green-500', B: 'bg-red-500', C: 'bg-red-500', D: 'bg-red-500', K: 'bg-red-500' },
  },
  {
    nombre: 'AFFF (Espuma)',
    descripcion: 'Agua con aditivo formador de película acuosa. Crea una película que sofoca y enfría simultáneamente.',
    ventajas: ['Efectivo en A y B', 'Forma barrera contra reignición', 'Enfría y sofoca', 'Biodegradable'],
    desventajas: ['Conductor eléctrico', 'No apto para Clase C', 'Requiere técnica de aplicación'],
    clases: { A: 'SI', B: 'SI', C: 'NO', D: 'NO', K: 'NO' },
    colorClases: { A: 'bg-green-500', B: 'bg-green-500', C: 'bg-red-500', D: 'bg-red-500', K: 'bg-red-500' },
  },
  {
    nombre: 'CO2 (Dióxido de Carbono)',
    descripcion: 'Gas inerte que desplaza el oxígeno y enfría por expansión. No deja residuos después de su uso.',
    ventajas: ['No conductor eléctrico', 'No deja residuos', 'Ideal para equipos electrónicos', 'Penetra espacios cerrados'],
    desventajas: ['Poco efectivo al aire libre', 'Riesgo de asfixia en espacios cerrados', 'No enfría brasas'],
    clases: { A: 'NO', B: 'SI', C: 'SI', D: 'NO', K: 'NO' },
    colorClases: { A: 'bg-yellow-500', B: 'bg-green-500', C: 'bg-green-500', D: 'bg-red-500', K: 'bg-red-500' },
  },
  {
    nombre: 'Polvo ABC',
    descripcion: 'Fosfato monoamónico. El más versátil, actúa por sofocación química interrumpiendo la reacción en cadena.',
    ventajas: ['Triple clase A-B-C', 'No conductor', 'Económico', 'Alta efectividad', 'El más común'],
    desventajas: ['Deja residuos corrosivos', 'Puede dañar equipos electrónicos', 'Reduce visibilidad'],
    clases: { A: 'SI', B: 'SI', C: 'SI', D: 'NO', K: 'NO' },
    colorClases: { A: 'bg-green-500', B: 'bg-green-500', C: 'bg-green-500', D: 'bg-red-500', K: 'bg-red-500' },
  },
  {
    nombre: 'Polvo BC',
    descripcion: 'Bicarbonato de sodio o potasio. Específico para fuegos de líquidos y equipos eléctricos.',
    ventajas: ['No conductor', 'Rápida extinción en líquidos', 'Menor corrosión que ABC'],
    desventajas: ['No efectivo en Clase A', 'Deja residuos', 'Reduce visibilidad'],
    clases: { A: 'NO', B: 'SI', C: 'SI', D: 'NO', K: 'NO' },
    colorClases: { A: 'bg-yellow-500', B: 'bg-green-500', C: 'bg-green-500', D: 'bg-red-500', K: 'bg-red-500' },
  },
  {
    nombre: 'HCFC 123',
    descripcion: 'Hidroclorofluorocarbono. Gas limpio que no deja residuos, ideal para salas de servidores y equipos sensibles.',
    ventajas: ['No deja residuos', 'No conductor', 'Seguro para personas', 'Ideal para electrónica'],
    desventajas: ['Costo elevado', 'Regulación ambiental', 'Requiere recarga especializada'],
    clases: { A: 'SI', B: 'SI', C: 'SI', D: 'NO', K: 'NO' },
    colorClases: { A: 'bg-green-500', B: 'bg-green-500', C: 'bg-green-500', D: 'bg-red-500', K: 'bg-red-500' },
  },
  {
    nombre: 'HFC 236',
    descripcion: 'Hexafluoropropano. Gas limpio de última generación, reemplazo del Halón sin daño a la capa de ozono.',
    ventajas: ['Cero daño ozono', 'No deja residuos', 'Seguro para personas', 'Alta eficiencia'],
    desventajas: ['Muy costoso', 'Disponibilidad limitada', 'Requiere certificación especial'],
    clases: { A: 'SI', B: 'SI', C: 'SI', D: 'NO', K: 'NO' },
    colorClases: { A: 'bg-green-500', B: 'bg-green-500', C: 'bg-green-500', D: 'bg-red-500', K: 'bg-red-500' },
  },
  {
    nombre: 'Polvo D',
    descripcion: 'Polvos especiales (cloruro de sodio, grafito) diseñados exclusivamente para metales combustibles.',
    ventajas: ['Único efectivo en metales', 'Forma costra protectora', 'Resiste altas temperaturas'],
    desventajas: ['Solo para Clase D', 'Muy especializado', 'Requiere capacitación específica'],
    clases: { A: 'NO', B: 'NO', C: 'NO', D: 'SI', K: 'NO' },
    colorClases: { A: 'bg-red-500', B: 'bg-red-500', C: 'bg-red-500', D: 'bg-green-500', K: 'bg-red-500' },
  },
  {
    nombre: 'Agua Vaporizada',
    descripcion: 'Agua en microgotas que maximiza el enfriamiento y minimiza el daño por agua. Tecnología de última generación.',
    ventajas: ['Mínimo daño por agua', 'Efectivo en A y parcialmente C', 'Enfriamiento rápido', 'Reduce humo'],
    desventajas: ['Costo elevado', 'Menor alcance', 'No apto para Clase B'],
    clases: { A: 'SI', B: 'NO', C: 'SI', D: 'NO', K: 'NO' },
    colorClases: { A: 'bg-green-500', B: 'bg-red-500', C: 'bg-green-500', D: 'bg-red-500', K: 'bg-red-500' },
  },
  {
    nombre: 'Acetato de Potasio',
    descripcion: 'Agente húmedo específico para cocinas. Produce saponificación: convierte el aceite en jabón, sellando el fuego.',
    ventajas: ['Único efectivo en Clase K', 'Saponificación del aceite', 'Previene reignición', 'Enfría gradualmente'],
    desventajas: ['Solo para cocinas', 'Costo moderado', 'Requiere limpieza posterior'],
    clases: { A: 'SI', B: 'NO', C: 'NO', D: 'NO', K: 'SI' },
    colorClases: { A: 'bg-green-500', B: 'bg-red-500', C: 'bg-red-500', D: 'bg-red-500', K: 'bg-green-500' },
  },
]

export default function TiposMatafuegosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activePage="capacitaciones" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-gradient-to-r from-[#8B0000] to-[#c41e3a] py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/capacitaciones" className="hover:text-white">Capacitaciones</Link>
            <span>/</span>
            <span className="text-white">Tipos de Matafuegos</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Tipos de Matafuegos</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Guía técnica completa sobre extintores: clases de fuego, agentes extintores y cómo elegir el matafuego correcto para cada situación.
          </p>
        </div>
      </section>

      {/* Imagen Principal con Autoría */}
      <section className="py-12 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative">
            <Image
              src="/products/product/Tipos-de-matafuegos_b-1024x670.jpg"
              alt="Tabla de Agentes Extintores según Clase de Fuego - Melisam"
              width={1024}
              height={670}
              className="w-full rounded-lg shadow-2xl"
              priority
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm">
              <p className="font-semibold">Fuente: Melisam Extintores</p>
              <p className="text-xs text-gray-300">Total Protección - Distribuidor Oficial</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Esta tabla muestra la compatibilidad de cada agente extintor con las diferentes clases de fuego.
              <span className="text-green-400 ml-2">Verde = Recomendado</span>
              <span className="text-yellow-400 ml-2">Amarillo = No recomendable</span>
              <span className="text-red-400 ml-2">Rojo = Peligroso</span>
            </p>
          </div>
        </div>
      </section>

      {/* Introducción Técnica */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <span className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              ¿Por qué es importante conocer los tipos de fuego?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Usar el extintor incorrecto puede ser más peligroso que no usar ninguno.</strong> Por ejemplo, si usás agua en un fuego de aceite de cocina (Clase K), el agua se vaporiza instantáneamente provocando una explosión de aceite hirviendo. Si usás agua en un equipo eléctrico energizado (Clase C), podés electrocutarte.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Por eso, entender las clases de fuego y los agentes extintores adecuados no es solo conocimiento técnico: <strong>puede salvar vidas.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Clases de Fuego - Detallado */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wide mb-2">CONOCIMIENTO ESENCIAL</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Las 5 Clases de Fuego</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Los fuegos se clasifican según el material combustible. Cada clase requiere un método de extinción específico.
            </p>
          </div>

          <div className="space-y-6">
            {clasesDeFuego.map((clase, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row">
                  {/* Indicador de Clase */}
                  <div className={`${clase.color} p-8 flex flex-col items-center justify-center md:w-48`}>
                    <span className="text-6xl font-bold text-white">{clase.clase}</span>
                    <span className="text-white/80 text-sm mt-2">CLASE</span>
                  </div>

                  {/* Contenido */}
                  <div className="flex-1 p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{clase.nombre}</h3>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm font-semibold text-gray-500 uppercase mb-1">Materiales</p>
                        <p className="text-gray-700">{clase.materiales}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-500 uppercase mb-1">Característica</p>
                        <p className="text-gray-700">{clase.caracteristica}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-500 uppercase mb-1">Método de Extinción</p>
                        <p className="text-gray-700">{clase.metodoExtincion}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agentes Extintores - Detallado */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wide mb-2">GUÍA TÉCNICA</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Agentes Extintores</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cada agente extintor tiene características específicas que lo hacen efectivo para ciertos tipos de fuego e inadecuado para otros.
            </p>
          </div>

          <div className="grid gap-6">
            {agentesExtintores.map((agente, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Info Principal */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{agente.nombre}</h3>
                    <p className="text-gray-600 mb-4">{agente.descripcion}</p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-semibold text-green-600 mb-2">Ventajas</p>
                        <ul className="space-y-1">
                          {agente.ventajas.map((v, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                              <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {v}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-red-600 mb-2">Limitaciones</p>
                        <ul className="space-y-1">
                          {agente.desventajas.map((d, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                              <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Compatibilidad con Clases */}
                  <div className="lg:w-64 flex-shrink-0">
                    <p className="text-sm font-semibold text-gray-500 mb-3 text-center">Compatibilidad</p>
                    <div className="flex justify-center gap-2">
                      {Object.entries(agente.clases).map(([clase, valor]) => (
                        <div key={clase} className="text-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${agente.colorClases[clase as keyof typeof agente.colorClases]}`}>
                            {clase}
                          </div>
                          <p className={`text-xs mt-1 font-medium ${valor === 'SI' ? 'text-green-600' : 'text-red-600'}`}>
                            {valor}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo elegir el matafuego correcto */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wide mb-2">RECOMENDACIONES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">¿Cómo elegir el matafuego correcto?</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="font-bold text-blue-800 text-lg mb-2">Para Oficinas y Comercios</h3>
              <p className="text-blue-700">
                <strong>Polvo ABC</strong> es la opción más versátil. Cubre papeles (A), posibles líquidos (B) y equipos eléctricos (C). Complementar con <strong>CO2</strong> cerca de computadoras para evitar daños por residuos.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h3 className="font-bold text-yellow-800 text-lg mb-2">Para Cocinas Industriales</h3>
              <p className="text-yellow-700">
                <strong>Acetato de Potasio (Clase K)</strong> es obligatorio. Es el único que puede extinguir aceites a alta temperatura de forma segura mediante saponificación. NUNCA usar agua ni polvo ABC.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="font-bold text-purple-800 text-lg mb-2">Para Data Centers y Servidores</h3>
              <p className="text-purple-700">
                <strong>HCFC 123, HFC 236 o CO2</strong> son ideales porque no dejan residuos que dañen los equipos. El polvo ABC, aunque efectivo, puede destruir componentes electrónicos por su naturaleza corrosiva.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="font-bold text-green-800 text-lg mb-2">Para Industrias con Metales</h3>
              <p className="text-green-700">
                <strong>Polvo Clase D</strong> específico para el metal que se trabaja. Magnesio, aluminio y titanio requieren agentes diferentes. Consultar con especialistas para determinar el polvo correcto.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="font-bold text-red-800 text-lg mb-2">Para Estaciones de Servicio</h3>
              <p className="text-red-700">
                <strong>Polvo BC o ABC</strong> de alta capacidad. También espuma AFFF para derrames. Es fundamental contar con extintores de gran tamaño (10kg o más) y personal capacitado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#8B0000] to-[#c41e3a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Necesitás asesoramiento para elegir el matafuego correcto?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Como distribuidores oficiales de Melisam, te asesoramos sin compromiso para que tu empresa cuente con la protección adecuada.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5492995484575?text=Hola!%20Estuve%20viendo%20la%20guía%20de%20tipos%20de%20matafuegos%20y%20necesito%20asesoramiento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Solicitar Asesoramiento
            </a>
            <Link
              href="/productos/matafuegos"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-red-700 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Ver Matafuegos
            </Link>
          </div>
        </div>
      </section>

      {/* Fuente */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            Información técnica basada en normativas IRAM y especificaciones de <strong>Melisam Extintores</strong>.
            <br />
            <strong>Total Protección</strong> - Distribuidor Oficial para la Provincia de Neuquén.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
