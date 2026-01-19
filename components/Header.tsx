'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const productosSubmenu = [
  { name: 'Mangueras de Incendio', href: '/productos/mangueras' },
  { name: 'Matafuegos', href: '/productos/matafuegos' },
  { name: 'Bronceria para Incendio', href: '/productos/bronceria' },
  { name: 'Maquinas para Talleres de Recarga', href: '/productos/maquinas-recarga' },
  { name: 'Gabinetes', href: '/productos/gabinetes' },
  { name: 'Espumas', href: '/productos/espumas' },
]

const sistemasSubmenu = [
  {
    category: 'Extincion',
    items: [
      { name: 'Sistemas a Base de Agua', href: '/sistemas/extincion-agua' },
      { name: 'Sistemas a Base de Espuma', href: '/sistemas/extincion-espuma' },
      { name: 'Sistemas por Gases', href: '/sistemas/extincion-gases' },
      { name: 'Sistemas en Cocinas', href: '/sistemas/extincion-cocinas' },
      { name: 'Sistemas en Vehiculos Pesados', href: '/sistemas/extincion-vehiculos' },
    ],
  },
  {
    category: 'Deteccion',
    items: [
      { name: 'Sistemas Convencionales', href: '/sistemas/deteccion-convencional' },
      { name: 'Sistemas Inteligentes', href: '/sistemas/deteccion-inteligente' },
      { name: 'Sistemas de Aspiracion de Humo', href: '/sistemas/deteccion-aspiracion' },
      { name: 'Barreras Infrarrojas', href: '/sistemas/deteccion-barreras' },
    ],
  },
  {
    category: 'Mantenimiento',
    items: [
      { name: 'Mantenimiento de Instalaciones Fijas', href: '/sistemas/mantenimiento-ifci' },
      { name: 'Central de Carga para Gases Limpios', href: '/sistemas/mantenimiento-gases' },
    ],
  },
]

const capacitacionesSubmenu = [
  { name: 'Origen del Fuego', href: '/capacitaciones/origen-fuego' },
  { name: 'Clases de Fuego', href: '/capacitaciones/clases-fuego' },
  { name: 'Tipos de Matafuegos', href: '/capacitaciones/tipos-matafuegos' },
  { name: 'Ubicacion y Dotacion', href: '/capacitaciones/ubicacion-dotacion' },
  { name: 'Academia Total Proteccion', href: '/capacitaciones/academia' },
]

interface HeaderProps {
  activePage?: string
}

export default function Header({ activePage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="bg-[#1a1a1a] text-white fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/Logo-TotalProteccion.png"
              alt="Total Proteccion"
              width={210}
              height={42}
              className="h-[3.15rem] w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              href="/"
              className={`hover:text-red-500 transition text-sm font-medium ${activePage === 'inicio' ? 'text-red-500' : ''}`}
            >
              Inicio
            </Link>

            <Link
              href="/empresa"
              className={`hover:text-red-500 transition text-sm font-medium ${activePage === 'empresa' ? 'text-red-500' : ''}`}
            >
              Empresa
            </Link>

            {/* Productos Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenDropdown('productos')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href="/productos"
                className={`hover:text-red-500 transition text-sm font-medium flex items-center ${activePage === 'productos' ? 'text-red-500' : ''}`}
              >
                Productos
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {openDropdown === 'productos' && (
                <div className="absolute top-full left-0 bg-white text-gray-800 rounded-lg shadow-xl py-2 min-w-[220px]">
                  {productosSubmenu.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600 text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Sistemas Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenDropdown('sistemas')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href="/sistemas"
                className={`hover:text-red-500 transition text-sm font-medium flex items-center ${activePage === 'sistemas' ? 'text-red-500' : ''}`}
              >
                Sistemas contra Incendios
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {openDropdown === 'sistemas' && (
                <div className="absolute top-full left-0 bg-white text-gray-800 rounded-lg shadow-xl py-4 min-w-[600px] grid grid-cols-3 gap-4 px-4">
                  {sistemasSubmenu.map((category, index) => (
                    <div key={index}>
                      <p className="font-bold text-red-600 mb-2 text-sm">{category.category}</p>
                      {category.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          href={item.href}
                          className="block py-1 hover:text-red-600 text-sm"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/certificaciones"
              className={`hover:text-red-500 transition text-sm font-medium ${activePage === 'certificaciones' ? 'text-red-500' : ''}`}
            >
              Certificaciones
            </Link>

            {/* Capacitaciones Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenDropdown('capacitaciones')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href="/capacitaciones"
                className={`hover:text-red-500 transition text-sm font-medium flex items-center ${activePage === 'capacitaciones' ? 'text-red-500' : ''}`}
              >
                Capacitaciones
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {openDropdown === 'capacitaciones' && (
                <div className="absolute top-full left-0 bg-white text-gray-800 rounded-lg shadow-xl py-2 min-w-[220px]">
                  {capacitacionesSubmenu.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600 text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/clientes"
              className={`hover:text-red-500 transition text-sm font-medium ${activePage === 'clientes' ? 'text-red-500' : ''}`}
            >
              Clientes
            </Link>

            <Link
              href="/contacto"
              className={`hover:text-red-500 transition text-sm font-medium ${activePage === 'contacto' ? 'text-red-500' : ''}`}
            >
              Contacto
            </Link>
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
        <div className="lg:hidden bg-[#252525] border-t border-gray-700 max-h-[80vh] overflow-y-auto">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-1">
            <Link href="/" className="hover:text-red-500 transition py-2">Inicio</Link>
            <Link href="/empresa" className="hover:text-red-500 transition py-2">Empresa</Link>

            <div className="border-t border-gray-700 pt-2">
              <p className="text-red-500 font-bold py-2">Productos</p>
              {productosSubmenu.map((item, index) => (
                <Link key={index} href={item.href} className="block pl-4 py-1 text-gray-400 hover:text-white text-sm">
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="border-t border-gray-700 pt-2">
              <p className="text-red-500 font-bold py-2">Sistemas contra Incendios</p>
              {sistemasSubmenu.map((category, catIndex) => (
                <div key={catIndex} className="mb-2">
                  <p className="pl-4 text-gray-500 text-xs uppercase">{category.category}</p>
                  {category.items.map((item, itemIndex) => (
                    <Link key={itemIndex} href={item.href} className="block pl-6 py-1 text-gray-400 hover:text-white text-sm">
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            <Link href="/certificaciones" className="hover:text-red-500 transition py-2 border-t border-gray-700 pt-3">
              Certificaciones
            </Link>

            <div className="border-t border-gray-700 pt-2">
              <p className="text-red-500 font-bold py-2">Capacitaciones</p>
              {capacitacionesSubmenu.map((item, index) => (
                <Link key={index} href={item.href} className="block pl-4 py-1 text-gray-400 hover:text-white text-sm">
                  {item.name}
                </Link>
              ))}
            </div>

            <Link href="/clientes" className="hover:text-red-500 transition py-2 border-t border-gray-700 pt-3">
              Clientes
            </Link>
            <Link href="/contacto" className="hover:text-red-500 transition py-2">
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
