'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RRHHPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  })
  const [archivo, setArchivo] = useState<File | null>(null)
  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.type !== 'application/pdf') {
        setError('Solo se permiten archivos PDF')
        return
      }
      if (file.size > 5 * 1024 * 1024) {
        setError('El archivo no puede superar los 5MB')
        return
      }
      setArchivo(file)
      setError('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!archivo) {
      setError('Por favor adjunta tu CV en formato PDF')
      return
    }

    setEnviando(true)
    setError('')

    // Crear el mailto con los datos del formulario
    const subject = encodeURIComponent(`CV - ${formData.nombre}`)
    const body = encodeURIComponent(
      `Nombre: ${formData.nombre}\n` +
      `Email: ${formData.email}\n` +
      `Teléfono: ${formData.telefono}\n\n` +
      `Mensaje:\n${formData.mensaje}\n\n` +
      `---\n` +
      `IMPORTANTE: Por favor adjunta el archivo PDF "${archivo.name}" a este correo antes de enviarlo.`
    )

    // Abrir cliente de correo
    window.location.href = `mailto:rrhh@totalproteccion.com.ar?subject=${subject}&body=${body}`

    setEnviando(false)
    setEnviado(true)
  }

  const removeFile = () => {
    setArchivo(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Header activePage="rrhh" />

      {/* Hero Banner */}
      <section className="relative w-full mt-20 bg-gradient-to-r from-green-700 to-green-900 py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <span className="text-white">Trabaja con Nosotros</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Trabaja con Nosotros</h1>
          <p className="text-xl text-white/90">Sumate al equipo de Total Proteccion</p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Unite a nuestro equipo</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                En <strong>Total Proteccion</strong> estamos siempre en busqueda de profesionales
                comprometidos con la seguridad y la excelencia en el servicio.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Si te interesa formar parte de una empresa lider en proteccion contra incendios
                en la region, envia tu CV y nos pondremos en contacto contigo.
              </p>

              <div className="bg-green-50 p-6 rounded-xl mb-8">
                <h3 className="font-bold text-green-800 mb-4">Buscamos perfiles como:</h3>
                <ul className="space-y-2">
                  {[
                    'Tecnicos en sistemas contra incendio',
                    'Ingenieros en seguridad e higiene',
                    'Vendedores con experiencia comercial',
                    'Personal para instalaciones y mantenimiento',
                    'Administrativos',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-100 p-6 rounded-xl">
                <h3 className="font-bold mb-2">Contacto directo</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Tambien podes enviar tu CV directamente a:
                </p>
                <a
                  href="mailto:rrhh@totalproteccion.com.ar"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  rrhh@totalproteccion.com.ar
                </a>
              </div>
            </div>

            {/* Formulario */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6">Envia tu CV</h3>

              {enviado ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Listo!</h4>
                  <p className="text-gray-600 mb-4">
                    Se abrio tu cliente de correo. Recorda adjuntar el archivo PDF antes de enviar.
                  </p>
                  <button
                    onClick={() => {
                      setEnviado(false)
                      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' })
                      setArchivo(null)
                    }}
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Enviar otro CV
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="+54 9 299 ..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje / Area de interes
                    </label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Contanos sobre tu experiencia y que area te interesa..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CV en PDF * (max 5MB)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-green-500 transition-colors">
                      {archivo ? (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg className="w-8 h-8 text-red-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                            </svg>
                            <span className="text-sm text-gray-700">{archivo.name}</span>
                          </div>
                          <button
                            type="button"
                            onClick={removeFile}
                            className="text-red-500 hover:text-red-700"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <label className="cursor-pointer">
                          <svg className="w-10 h-10 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <span className="text-sm text-gray-600">
                            Click para seleccionar o arrastra tu CV aqui
                          </span>
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept=".pdf"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                        </label>
                      )}
                    </div>
                  </div>

                  {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={enviando}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-50"
                  >
                    {enviando ? 'Procesando...' : 'Enviar CV'}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    Al enviar aceptas que procesemos tus datos para fines de seleccion de personal.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
