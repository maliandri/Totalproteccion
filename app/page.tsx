'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentCertSlide, setCurrentCertSlide] = useState(0)
  const [currentClientSlide, setCurrentClientSlide] = useState(0)

  const slides = [
    {
      image: '/hero/slider-mobile-mfg-soluciones-contra-incendio-1-1.webp',
      title: 'Total Protección es Distribuidor',
      subtitle: 'Exclusivo Amerex en Argentina.',
    },
    {
      image: '/hero/slider-mobile-amerext.webp',
      title: 'Distribuidor Exclusivo Amerex',
      subtitle: 'Líder en protección contra incendios',
    },
    {
      image: '/hero/slider-mobile-ing.webp',
      title: 'Instalaciones Fijas contra Incendios',
      subtitle: 'Obra llave en mano certificadas.',
    },
    {
      image: '/hero/slider-mobile-ext.webp',
      title: 'Distribuidor Oficial Mayorista Melisam',
      subtitle: 'Extintores de todo Tipo y Capacidad.',
    },
    {
      image: '/hero/slider-mobile-mant.webp',
      title: 'Mantenimiento de instalaciones fijas',
      subtitle: 'contra incendios',
    },


  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Certificaciones data
  const certifications = [
    { src: '/certifications/9001-150x150.jpg', alt: 'ISO 9001' },
    { src: '/certifications/14001-150x150.jpg', alt: 'ISO 14001' },
    { src: '/certifications/logo-certificaciones-01-150x150.jpg', alt: 'IRAM' },
    { src: '/certifications/logo-certificaciones-02-150x150.jpg', alt: 'IRAM' },
    { src: '/certifications/logo-certificaciones-05-150x150.jpg', alt: 'NFPA' },
    { src: '/certifications/logo-certificaciones-06-150x150.jpg', alt: 'Bureau Veritas' },
    { src: '/certifications/Logo-CAS-150x150.jpg', alt: 'CAS' },
    { src: '/certifications/logo-certificaciones-13-150x150.jpg', alt: 'ODS' },
  ]

  // Clientes data
  const clients = [
    { src: '/clients/imgi_127_logo-ypf-min-1-1.png', alt: 'YPF' },
    { src: '/clients/imgi_30_logo-coca-cola-min.png', alt: 'Coca Cola' },
    { src: '/clients/logo-ford-scale-300x226.png', alt: 'Ford' },
    { src: '/clients/imgi_75_logo-mercado-libre-min.png', alt: 'Mercado Libre' },
    { src: '/clients/imgi_99_logo-quilmes-min.png', alt: 'Quilmes' },
    { src: '/clients/imgi_32_logo-correo-arg-min-1.png', alt: 'Correo Argentino' },
    { src: '/clients/metrovias-min.png', alt: 'Metrovías' },
  ]

  // Auto-slide para Hero cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  // Auto-slide para Certificaciones cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCertSlide((prev) => (prev + 1) % certifications.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [certifications.length])

  // Auto-slide para Clientes cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentClientSlide((prev) => (prev + 1) % clients.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [clients.length])

  return (
    <main className="min-h-screen bg-white">
      <Header activePage="inicio" />

      {/* Hero Slider - 600px height like melisam.com */}
      <section className="relative w-full mt-20 bg-black">
        <div className="relative w-full h-[250px] md:h-[500px] lg:h-[600px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-contain md:object-cover object-center"
                priority={index === 0}
                sizes="100vw"
              />
              {/* Text Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center">
                <div className="container mx-auto px-4 md:px-12 lg:px-20">
                  <div className="max-w-2xl">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
                      {slide.title}
                    </h2>
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6">
                      {slide.subtitle}
                    </p>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-semibold transition-colors duration-300 text-sm">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

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

      {/* Certificaciones Section - Carrusel animado */}
      <section id="certificaciones" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-4">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wide">CALIDAD</p>
          </div>
          <h2 className="text-4xl font-bold text-center mb-4">
            Calidad Certificada con Alcance Integral
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Nuestros procesos y servicios están respaldados por las certificaciones más rigurosas de la industria
          </p>

          {/* Carrusel de certificaciones */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentCertSlide * (100 / 4)}%)` }}
            >
              {[...certifications, ...certifications].map((cert, index) => (
                <div key={index} className="flex-shrink-0 w-1/2 md:w-1/4 px-4">
                  <div className="flex justify-center">
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      width={150}
                      height={150}
                      className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-8 gap-2">
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCertSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentCertSlide ? 'bg-red-600 w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Productos Section - 12 categorías */}
      <section id="productos" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-4">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wide">CATEGORÍAS</p>
          </div>
          <h2 className="text-4xl font-bold text-center mb-16">Nuestros Productos</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Matafuegos */}
            <Link href="/productos/matafuegos" className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer bg-gradient-to-br from-gray-900 via-gray-800 to-black">
              <div className="absolute top-6 left-6 z-10">
                <h3 className="text-2xl font-bold text-white">Matafuegos</h3>
              </div>
              <div className="absolute inset-0 w-full h-full">
                <Image src="/products/matafuegos-1.jpg" alt="Matafuegos" width={400} height={320} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </Link>

            {/* Mangueras */}
            <Link href="/productos/mangueras" className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer bg-gradient-to-br from-gray-900 via-gray-800 to-black">
              <div className="absolute top-6 left-6 z-10">
                <h3 className="text-2xl font-bold text-white">Mangueras</h3>
                <p className="text-lg text-white/90">de Incendio</p>
              </div>
              <div className="absolute inset-0 w-full h-full">
                <Image src="/products/mangueras-productos-1-1.jpg" alt="Mangueras de Incendio" width={400} height={320} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </Link>

            {/* Gabinetes */}
            <Link href="/productos/gabinetes" className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer bg-gradient-to-br from-gray-900 via-gray-800 to-black">
              <div className="absolute top-6 left-6 z-10">
                <h3 className="text-2xl font-bold text-white">Gabinetes</h3>
                <p className="text-lg text-white/90">para mangueras y extintores</p>
              </div>
              <div className="absolute inset-0 w-full h-full">
                <Image src="/products/gabintenes-mangueras-300x240.jpg" alt="Gabinetes" width={400} height={320} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </Link>

            {/* Bronceria */}
            <Link href="/productos/bronceria" className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer bg-gradient-to-br from-gray-900 via-gray-800 to-black">
              <div className="absolute top-6 left-6 z-10">
                <h3 className="text-2xl font-bold text-white">Bronceria</h3>
                <p className="text-lg text-white/90">para incendio</p>
              </div>
              <div className="absolute inset-0 w-full h-full">
                <Image src="/products/bronceria-1.jpg" alt="Bronceria" width={400} height={320} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </Link>

            {/* Maquinas */}
            <Link href="/productos/maquinas-recarga" className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer bg-gradient-to-br from-gray-900 via-gray-800 to-black">
              <div className="absolute top-6 left-6 z-10">
                <h3 className="text-2xl font-bold text-white">Maquinas</h3>
                <p className="text-lg text-white/90">para talleres de recarga</p>
              </div>
              <div className="absolute inset-0 w-full h-full">
                <Image src="/products/maquinaria-recarga-1.jpg" alt="Maquinas para Recarga" width={400} height={320} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </Link>

            {/* Unidades de Intervención Rápida */}
            <Link href="/productos/intervencion-rapida" className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer bg-gradient-to-br from-gray-900 via-gray-800 to-black">
              <div className="absolute top-6 left-6 z-10">
                <h3 className="text-2xl font-bold text-white">Unidades de</h3>
                <p className="text-lg text-white/90">Intervención Rápida</p>
              </div>
              <div className="absolute inset-0 w-full h-full">
                <Image src="/products/unidades-de-intervencion-rapida.jpg" alt="Unidades de Intervención Rápida" width={400} height={320} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </Link>

            {/* Sistemas de Dosificación de Espuma */}
            <Link href="/productos/dosificacion-espuma" className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer bg-gradient-to-br from-gray-900 via-gray-800 to-black">
              <div className="absolute top-6 left-6 z-10">
                <h3 className="text-2xl font-bold text-white">Sistemas de Dosificación</h3>
                <p className="text-lg text-white/90">de Espuma</p>
              </div>
              <div className="absolute inset-0 w-full h-full">
                <Image src="/products/dosificacion-de-espuma.jpg" alt="Dosificación de Espuma" width={400} height={320} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </Link>

            {/* Espumas */}
            <Link href="/productos/espumas" className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer bg-gradient-to-br from-gray-900 via-gray-800 to-black">
              <div className="absolute top-6 left-6 z-10">
                <h3 className="text-2xl font-bold text-white">Espumas</h3>
              </div>
              <div className="absolute inset-0 w-full h-full">
                <Image src="/products/cat-producto-Espumas-1-1.jpg" alt="Espumas" width={400} height={320} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </Link>

            {/* Equipamiento Bomberos */}
            <Link href="/productos/equipamiento-bomberos" className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer bg-gradient-to-br from-gray-900 via-gray-800 to-black">
              <div className="absolute top-6 left-6 z-10">
                <h3 className="text-2xl font-bold text-white">Equipamiento</h3>
                <p className="text-lg text-white/90">Bomberos</p>
              </div>
              <div className="absolute inset-0 w-full h-full">
                <Image src="/products/equipamiento-bomberos.jpg" alt="Equipamiento Bomberos" width={400} height={320} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </Link>

            {/* Trajes Estructurales */}
            <Link href="/productos/trajes-estructurales" className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer bg-gradient-to-br from-gray-900 via-gray-800 to-black">
              <div className="absolute top-6 left-6 z-10">
                <h3 className="text-2xl font-bold text-white">Trajes</h3>
                <p className="text-lg text-white/90">Estructurales</p>
              </div>
              <div className="absolute inset-0 w-full h-full">
                <Image src="/products/trajes-estructurales-1.jpg" alt="Trajes Estructurales" width={400} height={320} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </Link>

            {/* Equipos de Bombeo */}
            <Link href="/productos/equipos-bombeo" className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer bg-gradient-to-br from-gray-900 via-gray-800 to-black">
              <div className="absolute top-6 left-6 z-10">
                <h3 className="text-2xl font-bold text-white">Equipos</h3>
                <p className="text-lg text-white/90">de Bombeo</p>
              </div>
              <div className="absolute inset-0 w-full h-full">
                <Image src="/products/maquinaria-recarga-1.jpg" alt="Equipos de Bombeo" width={400} height={320} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </Link>

            {/* Válvulas, Postes e Hidrantes */}
            <Link href="/productos/valvulas-hidrantes" className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer bg-gradient-to-br from-gray-900 via-gray-800 to-black">
              <div className="absolute top-6 left-6 z-10">
                <h3 className="text-2xl font-bold text-white">Válvulas, Postes</h3>
                <p className="text-lg text-white/90">e Hidrantes</p>
              </div>
              <div className="absolute inset-0 w-full h-full">
                <Image src="/products/bronceria-1.jpg" alt="Válvulas e Hidrantes" width={400} height={320} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </Link>
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
                src="/services/totalproteccion-ingenieria@3x-8-1024x211.png"
                alt="Total Protección Ingeniería"
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
                src="/services/totalproteccion-extintores@3x-8-1024x211.png"
                alt="Total Protección Extintores"
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
                src="/services/totalproteccion-mantenimiento@3x-8-1024x210.png"
                alt="Total Protección Mantenimiento"
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
                src="/services/totalproteccion-fire-group@3x-8-scaled-1-1024x210.png"
                alt="Total Protección Máquinas"
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

      {/* Servicios Section - 3 cols con imágenes */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-4">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wide">SERVICIOS</p>
          </div>
          <h2 className="text-4xl font-bold text-center mb-16">Nuestros Servicios</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Servicio 1 - Extincion */}
            <Link href="/sistemas/extincion" className="relative h-80 rounded-lg overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/products/rociador-uai-325x325-1.png"
                  alt="Sistemas de Extinción"
                  width={400}
                  height={320}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                <h3 className="text-3xl font-bold mb-2">Sistemas de Extinción</h3>
                <p className="text-lg">Soluciones basadas en agua, espuma, gases y sistemas especializados</p>
              </div>
            </Link>

            {/* Servicio 2 - Deteccion */}
            <Link href="/sistemas/deteccion" className="relative h-80 rounded-lg overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/products/Sistema-deteccion-incendios-1.jpg"
                  alt="Sistemas de Detección"
                  width={400}
                  height={320}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                <h3 className="text-3xl font-bold mb-2">Sistemas de Detección</h3>
                <p className="text-lg">Sistemas convencionales e inteligentes para máxima eficacia</p>
              </div>
            </Link>

            {/* Servicio 3 - Mantenimiento */}
            <Link href="/sistemas/mantenimiento" className="relative h-80 rounded-lg overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/products/Servicio-mantenimiento-1.jpg"
                  alt="Servicio de Mantenimiento"
                  width={400}
                  height={320}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                <h3 className="text-3xl font-bold mb-2">Mantenimiento</h3>
                <p className="text-lg">Servicio integral para instalaciones fijas contra incendios</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Clientes Section - Carrusel animado */}
      <section id="clientes" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-4">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wide">CONFIANZA</p>
          </div>
          <h2 className="text-4xl font-bold text-center mb-4">Nuestros Clientes</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Empresas líderes confían en nosotros para proteger sus instalaciones
          </p>

          {/* Carrusel de clientes */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentClientSlide * (100 / 4)}%)` }}
            >
              {[...clients, ...clients].map((client, index) => (
                <div key={index} className="flex-shrink-0 w-1/2 md:w-1/4 px-4">
                  <div className="flex justify-center p-4 bg-white rounded-lg shadow-sm">
                    <Image
                      src={client.src}
                      alt={client.alt}
                      width={140}
                      height={70}
                      className="grayscale hover:grayscale-0 transition-all duration-300 object-contain w-full h-16"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-8 gap-2">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentClientSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentClientSlide ? 'bg-red-600 w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
