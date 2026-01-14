'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const slides = [
    {
      image: '/slider/slider-mobile-mfg-soluciones-contra-incendio-1-1.webp',
      title: 'Melisam Fire Group es Distribuidor',
      subtitle: 'Exclusivo Amerex en Argentina.',
    },
    {
      image: '/slider/slider-mobile-amerext.jpg',
      title: 'Distribuidor Exclusivo Amerex',
      subtitle: 'Líder en protección contra incendios',
    },
    {
      image: '/slider/slider-mobile-ing.jpg',
      title: 'Ingeniería y Diseño',
      subtitle: 'Soluciones personalizadas',
    },
    {
      image: '/slider/slider-mobile-ext.jpg',
      title: 'Extintores Profesionales',
      subtitle: 'Máxima calidad y seguridad',
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header Negro */}
      <header className="bg-[#1a1a1a] text-white fixed w-full top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/logos/Logo-Melisam.png"
                alt="Melisam Fire Group"
                width={200}
                height={40}
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#inicio" className="hover:text-red-500 transition text-sm font-medium">Inicio</a>
              <a href="#empresa" className="hover:text-red-500 transition text-sm font-medium">Empresa</a>
              <a href="#productos" className="hover:text-red-500 transition text-sm font-medium">Productos</a>
              <div className="relative group">
                <a href="#sistemas" className="hover:text-red-500 transition text-sm font-medium flex items-center">
                  Sistemas contra Incendios
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
              <a href="#certificaciones" className="hover:text-red-500 transition text-sm font-medium">Certificaciones</a>
              <div className="relative group">
                <a href="#capacitaciones" className="hover:text-red-500 transition text-sm font-medium flex items-center">
                  Capacitaciones
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
              <a href="#clientes" className="hover:text-red-500 transition text-sm font-medium">Clientes</a>
              <a href="#contacto" className="hover:text-red-500 transition text-sm font-medium">Contacto</a>
              <a href="#rrhh" className="hover:text-red-500 transition text-sm font-medium">RRHH</a>
              <a href="#rse" className="hover:text-red-500 transition text-sm font-medium">RSE</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#252525] border-t border-gray-700">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              <a href="#inicio" className="hover:text-red-500 transition py-2">Inicio</a>
              <a href="#empresa" className="hover:text-red-500 transition py-2">Empresa</a>
              <a href="#productos" className="hover:text-red-500 transition py-2">Productos</a>
              <a href="#sistemas" className="hover:text-red-500 transition py-2">Sistemas contra Incendios</a>
              <a href="#certificaciones" className="hover:text-red-500 transition py-2">Certificaciones</a>
              <a href="#capacitaciones" className="hover:text-red-500 transition py-2">Capacitaciones</a>
              <a href="#clientes" className="hover:text-red-500 transition py-2">Clientes</a>
              <a href="#contacto" className="hover:text-red-500 transition py-2">Contacto</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Slider */}
      <section className="relative h-[600px] mt-20 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide ? 'bg-red-600' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Certificaciones Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Calidad Certificada con Alcance Integral
          </h2>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
            <Image src="/9001-150x150.jpg" alt="ISO 9001" width={120} height={120} className="grayscale hover:grayscale-0 transition" />
            <Image src="/14001-150x150.jpg" alt="ISO 14001" width={120} height={120} className="grayscale hover:grayscale-0 transition" />
            <Image src="/logos/logo-certificaciones-01-150x150.jpg" alt="IRAM" width={120} height={120} className="grayscale hover:grayscale-0 transition" />
            <Image src="/logos/logo-certificaciones-02-150x150.jpg" alt="IRAM" width={120} height={120} className="grayscale hover:grayscale-0 transition" />
            <Image src="/logos/logo-certificaciones-05-150x150.jpg" alt="NFPA" width={120} height={120} className="grayscale hover:grayscale-0 transition" />
            <Image src="/logos/logo-certificaciones-06-150x150.jpg" alt="Bureau Veritas" width={120} height={120} className="grayscale hover:grayscale-0 transition" />
            <Image src="/logos/Logo-CAS-150x150.jpg" alt="CAS" width={120} height={120} className="grayscale hover:grayscale-0 transition" />
            <Image src="/logos/logo-certificaciones-13-150x150.jpg" alt="ODS" width={120} height={120} className="grayscale hover:grayscale-0 transition" />
          </div>
        </div>
      </section>

      {/* 4 Services Cards con colores */}
      <section className="py-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {/* Azul - Ingeniería */}
          <div className="relative h-96 bg-[#003d82] text-white overflow-hidden group">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
              <Image
                src="/services/melisam-ingenieria@3x-8-1024x211.png"
                alt="Melisam Ingeniería"
                width={250}
                height={51}
                className="mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">Instalaciones fijas</h3>
              <p className="text-lg mb-6">contra incendio llave en mano.</p>
              <button className="bg-[#0051a8] hover:bg-[#003d82] text-white px-6 py-2 rounded w-fit transition">
                Ver más
              </button>
            </div>
          </div>

          {/* Rojo - Extintores */}
          <div className="relative h-96 bg-[#c41e3a] text-white overflow-hidden group">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
              <Image
                src="/services/melisam-extintores@3x-8-1024x211.png"
                alt="Melisam Extintores"
                width={250}
                height={51}
                className="mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">Fabricación de</h3>
              <p className="text-lg mb-6">extintores de todo tipo y capacidad.</p>
              <button className="bg-[#a01829] hover:bg-[#8a1423] text-white px-6 py-2 rounded w-fit transition">
                Ver más
              </button>
            </div>
          </div>

          {/* Amarillo - Mantenimiento */}
          <div className="relative h-96 bg-[#f7b500] text-white overflow-hidden group">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
              <Image
                src="/services/melisam-mantenimiento@3x-8-1024x210.png"
                alt="Melisam Mantenimiento"
                width={250}
                height={51}
                className="mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">Mantenimiento</h3>
              <p className="text-lg mb-6">IFCI</p>
              <button className="bg-[#d49a00] hover:bg-[#b88500] text-white px-6 py-2 rounded w-fit transition">
                Ver más
              </button>
            </div>
          </div>

          {/* Verde - Máquinas */}
          <div className="relative h-96 bg-[#00a651] text-white overflow-hidden group">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
              <Image
                src="/services/melisam-fire-group@3x-8-scaled-1-1024x210.png"
                alt="Melisam Máquinas"
                width={250}
                height={51}
                className="mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">Máquinas para</h3>
              <p className="text-lg mb-6">talleres de mantenimiento de extintores.</p>
              <button className="bg-[#008a44] hover:bg-[#007038] text-white px-6 py-2 rounded w-fit transition">
                Ver más
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Productos Section con cards negras */}
      <section id="productos" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wide">CATEGORÍAS</p>
          </div>
          <h2 className="text-4xl font-bold text-center mb-16">Nuestros Productos</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - Mangueras */}
            <div className="bg-black text-white rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl font-bold">Mangueras</h3>
                  <p className="text-lg">de Incendio</p>
                </div>
              </div>
            </div>

            {/* Card 2 - Matafuegos */}
            <div className="bg-black text-white rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl font-bold">Matafuegos</h3>
                </div>
              </div>
            </div>

            {/* Card 3 - Broncería */}
            <div className="bg-black text-white rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl font-bold">Broncería</h3>
                  <p className="text-lg">para incendio</p>
                </div>
              </div>
            </div>

            {/* Card 4 - Máquinas */}
            <div className="bg-black text-white rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl font-bold">Máquinas para</h3>
                  <p className="text-lg">Talleres de Recarga</p>
                </div>
              </div>
            </div>

            {/* Card 5 - Gabinetes */}
            <div className="bg-black text-white rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl font-bold">Gabinetes</h3>
                  <p className="text-lg">para mangueras y extintores</p>
                </div>
              </div>
            </div>

            {/* Card 6 - Espumas */}
            <div className="bg-black text-white rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl font-bold">Espumas</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section con imágenes grandes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wide">CATEGORÍAS</p>
          </div>
          <h2 className="text-4xl font-bold text-center mb-16">Nuestros Servicios</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Servicio 1 - Extinción */}
            <div className="relative h-80 rounded-lg overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                <h3 className="text-3xl font-bold mb-2">Sistemas de Extinción</h3>
                <p className="text-xl mb-4">Contra Incendios</p>
              </div>
            </div>

            {/* Servicio 2 - Detección */}
            <div className="relative h-80 rounded-lg overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                <h3 className="text-3xl font-bold mb-2">Sistemas de Detección</h3>
                <p className="text-xl mb-4">Contra Incendios</p>
              </div>
            </div>

            {/* Servicio 3 - Mantenimiento */}
            <div className="relative h-80 rounded-lg overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                <h3 className="text-3xl font-bold mb-2">Servicio de</h3>
                <p className="text-xl mb-4">Mantenimiento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image
                src="/logos/Logo-Melisam.png"
                alt="Melisam Fire Group"
                width={180}
                height={36}
                className="h-10 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm">
                Soluciones integrales en protección contra incendios
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Nosotros</a></li>
                <li><a href="#" className="hover:text-white transition">Certificaciones</a></li>
                <li><a href="#" className="hover:text-white transition">Clientes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Ingeniería</a></li>
                <li><a href="#" className="hover:text-white transition">Extintores</a></li>
                <li><a href="#" className="hover:text-white transition">Mantenimiento</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>info@totalproteccion.com.ar</li>
                <li>Buenos Aires, Argentina</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2025 Total Protección. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
