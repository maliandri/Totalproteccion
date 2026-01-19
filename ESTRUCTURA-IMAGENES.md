# Estructura de Imágenes - Total Protección

Este documento describe la organización de todas las imágenes del proyecto.

## 📁 Estructura de Carpetas

```
public/
├── hero/              (5 imágenes) - Carrusel principal
├── logos/             (2 imágenes) - Logos de la empresa
├── certifications/    (15 imágenes) - Certificaciones ISO, IRAM, etc.
├── services/          (8 imágenes) - Iconos de servicios
├── clients/           (7 imágenes) - Logos de clientes
└── products/          (14 imágenes) - Productos y categorías
```

## 🎨 Detalle de Imágenes por Categoría

### 1. Hero/Slider (5 imágenes)
Carrusel principal de la página de inicio (1920x1080):
- `slider-mobile-mfg-soluciones-contra-incendio-1-1.webp` - Slide principal
- `slider-mobile-amerext.jpg` - Amerex distribuidor
- `slider-mobile-ing.jpg` - Ingeniería
- `slider-mobile-ext.jpg` - Extintores
- `slider-mobile-mant.jpg` - Mantenimiento

### 2. Logos (2 imágenes)
Logos principales:
- `Logo-TotalProteccion.png` - Logo principal usado en header y footer
- `logo-amerex.png` - Logo de Amerex

### 3. Certificaciones (15 imágenes)
Badges de certificaciones mostradas en la sección de calidad:
- `9001-150x150.jpg` - ISO 9001
- `14001-150x150.jpg` - ISO 14001
- `45001-150x150.jpg` - ISO 45001
- `Logo-CAS-150x150.jpg` - CAS
- `logo-certificaciones-01-150x150.jpg` - IRAM
- `logo-certificaciones-02-150x150.jpg` - IRAM
- `logo-certificaciones-03-150x150.jpg`
- `logo-certificaciones-05-150x150.jpg` - NFPA
- `logo-certificaciones-06-150x150.jpg` - Bureau Veritas
- `logo-certificaciones-07-150x150.jpg`
- `logo-certificaciones-08-150x150.jpg`
- `logo-certificaciones-09-150x150.jpg`
- `logo-certificaciones-10-150x150.jpg`
- `logo-certificaciones-11-150x150.jpg`
- `logo-certificaciones-13-150x150.jpg` - ODS

### 4. Servicios (8 imágenes)
Iconos e imágenes de los servicios principales:

**Iconos de colores:**
- `totalproteccion-azul.png` - Icono servicio azul
- `totalproteccion-rojo.png` - Icono servicio rojo
- `totalproteccion-amarillo.png` - Icono servicio amarillo
- `totalproteccion-verde.png` - Icono servicio verde

**Logos de servicios:**
- `totalproteccion-ingenieria@3x-8-1024x211.png` - Logo Ingeniería (card azul)
- `totalproteccion-extintores@3x-8-1024x211.png` - Logo Extintores (card rojo)
- `totalproteccion-mantenimiento@3x-8-1024x210.png` - Logo Mantenimiento (card amarillo)
- `totalproteccion-fire-group@3x-8-scaled-1-1024x210.png` - Logo Fire Group (card verde)

### 5. Clientes (7 imágenes)
Logos de empresas clientes:
- `imgi_127_logo-ypf-min-1-1.png` - YPF
- `imgi_30_logo-coca-cola-min.png` - Coca-Cola
- `logo-ford-scale-300x226.png` - Ford
- `imgi_75_logo-mercado-libre-min.png` - Mercado Libre
- `imgi_99_logo-quilmes-min.png` - Quilmes
- `imgi_32_logo-correo-arg-min-1.png` - Correo Argentino
- `metrovias-min.png` - Metrovías

### 6. Productos (14 imágenes)
Imágenes de productos y categorías:

**Gabinetes:**
- `gabientes-extintores-300x240.jpg` - Gabinetes para extintores
- `gabinetes-especiales-300x240.jpg` - Gabinetes especiales
- `gabintenes-mangueras-300x240.jpg` - Gabinetes para mangueras

**Clases de extintores:**
- `clasea150x150-1.png` - Clase A
- `claseb150x150.png` - Clase B
- `clasec150x150.png` - Clase C
- `clased150x150.png` - Clase D
- `clasek150x150.png` - Clase K

**Accesorios y maquinaria:**
- `arjet-1-300x240.png` - Arjet
- `armtex-300x240.png` - Armtex (máquinas)
- `balde-arena-300x240.jpg` - Balde de arena
- `pataboca-impulsor-300x240.jpg` - Pataboca impulsor
- `ryljet-300x240.png` - Ryljet

**Otros productos:**
- `Tipos-de-matafuegos_b-1024x670.jpg` - Imagen principal de matafuegos

## 🔧 Uso en el Código

### Rutas actualizadas en `app/page.tsx`:

```typescript
// Hero/Slider
'/hero/slider-mobile-mfg-soluciones-contra-incendio-1-1.webp'
'/hero/slider-mobile-amerext.jpg'
'/hero/slider-mobile-ing.jpg'
'/hero/slider-mobile-ext.jpg'

// Logos
'/logos/Logo-TotalProteccion.png'

// Certificaciones
'/certifications/9001-150x150.jpg'
'/certifications/14001-150x150.jpg'
// ... etc

// Servicios
'/services/totalproteccion-ingenieria@3x-8-1024x211.png'
'/services/totalproteccion-extintores@3x-8-1024x211.png'
'/services/totalproteccion-mantenimiento@3x-8-1024x210.png'
'/services/totalproteccion-fire-group@3x-8-scaled-1-1024x210.png'

// Clientes
'/clients/imgi_127_logo-ypf-min-1-1.png'
'/clients/imgi_30_logo-coca-cola-min.png'
// ... etc

// Productos
'/products/gabintenes-mangueras-300x240.jpg'
'/products/Tipos-de-matafuegos_b-1024x670.jpg'
'/products/pataboca-impulsor-300x240.jpg'
'/products/armtex-300x240.png'
'/products/gabientes-extintores-300x240.jpg'
'/products/balde-arena-300x240.jpg'
```

## 📝 Notas

1. **Imágenes del carrusel**: Optimizadas a 1920x1080 (Full HD) para mejor visualización.

2. **Archivos renombrados**: Todos los archivos "melisam" fueron renombrados a "totalproteccion".

3. **Optimización**: Next.js optimiza automáticamente todas las imágenes usando el componente `Image`.

4. **Próximo paso**: Convertir imágenes a formato WebP para mejor rendimiento.

---

**Última actualización**: 15 de enero de 2026
**Total de imágenes**: 51
**Estado**: ✅ Todas las imágenes organizadas y renombradas
