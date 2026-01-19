'use client'

import { usePathname } from 'next/navigation'

interface WhatsAppButtonProps {
  phoneNumber?: string
  productName?: string // Para páginas de productos específicos
}

export default function WhatsAppButton({ phoneNumber = '5492995484575', productName }: WhatsAppButtonProps) {
  const pathname = usePathname()

  const getContextMessage = () => {
    // Si se pasa un nombre de producto específico, usarlo
    if (productName) {
      return `Hola! Estuve viendo ${productName} en totalproteccion.com.ar y me gustaría recibir más información.`
    }

    // Detectar contexto según la URL
    const pathSegments = pathname.split('/').filter(Boolean)

    // Mapeo de rutas a nombres legibles
    const routeNames: Record<string, string> = {
      'productos': 'la sección de Productos',
      'matafuegos': 'Matafuegos',
      'mangueras': 'Mangueras de Incendio',
      'gabinetes': 'Gabinetes',
      'bronceria': 'Broncería para Incendio',
      'maquinas-recarga': 'Máquinas para Recarga',
      'intervencion-rapida': 'Unidades de Intervención Rápida',
      'dosificacion-espuma': 'Sistemas de Dosificación de Espuma',
      'espumas': 'Espumas',
      'equipamiento-bomberos': 'Equipamiento para Bomberos',
      'trajes-estructurales': 'Trajes Estructurales',
      'equipos-bombeo': 'Equipos de Bombeo',
      'valvulas-hidrantes': 'Válvulas, Postes e Hidrantes',
      'sistemas': 'Sistemas Contra Incendios',
      'extincion-agua': 'Sistemas de Extinción por Agua',
      'extincion-espuma': 'Sistemas de Extinción por Espuma',
      'extincion-gases': 'Sistemas de Extinción por Gases',
      'extincion-cocinas': 'Sistemas de Extinción para Cocinas',
      'deteccion-convencional': 'Detección Convencional',
      'deteccion-inteligente': 'Detección Inteligente',
      'certificaciones': 'Certificaciones',
      'capacitaciones': 'Capacitaciones',
      'clientes': 'la sección de Clientes',
      'contacto': 'la página de Contacto',
      'empresa': 'la página de Empresa',
    }

    // Construir mensaje según la ruta
    if (pathSegments.length === 0 || pathname === '/') {
      return 'Hola! Visité totalproteccion.com.ar y me gustaría recibir más información sobre sus productos y servicios.'
    }

    // Obtener el último segmento significativo de la ruta
    const lastSegment = pathSegments[pathSegments.length - 1]
    const contextName = routeNames[lastSegment] || lastSegment.replace(/-/g, ' ')

    // Si es una subcategoría de productos
    if (pathSegments[0] === 'productos' && pathSegments.length > 1) {
      return `Hola! Estuve viendo ${contextName} en totalproteccion.com.ar y me gustaría recibir más información.`
    }

    // Si es una subcategoría de sistemas
    if (pathSegments[0] === 'sistemas' && pathSegments.length > 1) {
      return `Hola! Estuve viendo ${contextName} en totalproteccion.com.ar y me gustaría recibir más información.`
    }

    // Para otras páginas
    return `Hola! Estuve viendo ${contextName} en totalproteccion.com.ar y me gustaría recibir más información.`
  }

  const message = encodeURIComponent(getContextMessage())
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
      aria-label="Contactar por WhatsApp"
    >
      {/* WhatsApp Icon */}
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chateá con Ventas
      </span>
    </a>
  )
}
