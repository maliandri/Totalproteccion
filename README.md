# Total Protección

Sitio web clon de [Melisam Fire Group](https://melisam.com/) adaptado para **Total Protección** - Soluciones Integrales en Protección Contra Incendio.

## 🚀 Tecnologías

- **Next.js 14** - Framework React con App Router
- **React 18** - Biblioteca UI
- **Tailwind CSS** - Estilos utility-first
- **TypeScript** - Tipado estático
- **Netlify** - Hosting y deployment

---

## 📁 Estructura del Proyecto

```
totalproteccion/
├── app/
│   ├── layout.tsx         # Layout principal con SEO
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales Tailwind
├── public/
│   ├── logos/             # Logos de clientes y certificaciones
│   ├── services/          # Imágenes de servicios
│   └── slider/            # Imágenes del hero slider
├── components/            # Componentes React (futuro)
├── next.config.js         # Configuración Next.js
├── tailwind.config.ts     # Configuración Tailwind
└── netlify.toml           # Configuración Netlify
```

---

## 🚀 Inicio Rápido

### 1. Instalar dependencias

```bash
npm install
```

### 2. Desarrollo local

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 3. Build de producción

```bash
npm run build
```

Genera el sitio estático en la carpeta `out/`.

---

## ✨ Características

### SEO Optimizado
- ✅ Meta tags completos (title, description, keywords)
- ✅ Open Graph para redes sociales
- ✅ Twitter Cards
- ✅ Metadata API de Next.js 14
- ✅ Sitemap automático
- ✅ URLs amigables

### Performance
- ✅ Static Site Generation (SSG)
- ✅ Optimización automática de imágenes
- ✅ Code splitting automático
- ✅ CSS optimizado con Tailwind

### Diseño
- ✅ Responsive (móvil, tablet, desktop)
- ✅ Tailwind CSS para estilos rápidos
- ✅ Componentes React reutilizables
- ✅ Basado en diseño de Melisam Fire Group

---

## 🚀 Deploy en Netlify

### Opción 1: Deploy desde GitHub (Recomendado)

1. Ve a [Netlify](https://app.netlify.com)
2. Click en **"Add new site"** → **"Import an existing project"**
3. Conecta con **GitHub** y selecciona **`Totalproteccion`**
4. Netlify detectará automáticamente la configuración de `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
5. Click en **"Deploy site"**

¡Listo! En 2-3 minutos tu sitio estará en línea.

### Opción 2: Deploy Manual con Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### Configurar dominio personalizado

Una vez deployado:
1. En Netlify dashboard → **Domain settings**
2. Click en **"Add custom domain"**
3. Agrega tu dominio (ej: `totalproteccion.com.ar`)
4. Configura los DNS según las instrucciones

---

## 📝 Personalización

### Cambiar contenido

Edita `app/page.tsx` para modificar:
- Textos de las secciones
- Información de contacto
- Servicios ofrecidos

### Cambiar estilos

Los colores principales están en `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#1a365d',  // Azul principal
    light: '#2c5282',
    dark: '#0f2644',
  },
  secondary: {
    DEFAULT: '#e53e3e',  // Rojo secundario
    light: '#fc8181',
    dark: '#c53030',
  },
}
```

### Agregar imágenes

Coloca las imágenes en `public/` y úsalas con:

```tsx
<Image src="/tu-imagen.jpg" alt="..." width={500} height={300} />
```

---

## 📧 Contacto

- **Email:** info@totalproteccion.com.ar
- **Sitio:** https://totalproteccion.netlify.app (por definir)

---

## 📄 Licencia

© 2025 Total Protección. Todos los derechos reservados.

Diseño basado en [Melisam Fire Group](https://melisam.com/).
