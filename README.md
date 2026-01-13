# Total Protección

Sitio web inspirado en [Melisam Fire Group](https://melisam.com/) para **Total Protección** - Soluciones Integrales en Protección Contra Incendio.

---

## 🚀 Inicio Rápido

### Desarrollo local

```bash
# Instalar dependencias (solo la primera vez)
npm install

# Iniciar servidor de desarrollo con live-reload
npm run dev

# O también puedes usar
npm start
```

El sitio se abrirá automáticamente en http://localhost:3000

### Alternativa: Abrir directamente

También puedes simplemente abrir `index.html` en tu navegador.

---

## 📁 Estructura del Proyecto

```
totalproteccion/
├── index.html              # Página principal
├── css/
│   └── styles.css         # Estilos completos
├── js/
│   └── main.js            # Funcionalidades JavaScript
└── images/                # Imágenes del sitio
```

---

## ✨ Características

- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Navegación con menú hamburguesa en móvil
- ✅ Menús dropdown multinivel
- ✅ Header sticky con efecto de scroll
- ✅ Secciones modernas y profesionales
- ✅ Formularios de contacto y newsletter
- ✅ Optimizado para SEO
- ✅ Basado en el diseño profesional de Melisam Fire Group

---

## 📝 Tareas Pendientes

- [ ] Actualizar imágenes corporativas propias
- [ ] Actualizar dirección física en footer
- [ ] Configurar teléfonos de contacto
- [ ] Configurar enlaces de redes sociales
- [ ] Integrar backend para formularios

---

## 📧 Contacto

- **Email:** info@totalproteccion.com.ar

---

## 🚀 Deploy en Netlify

### Opción 1: Deploy desde Git (Recomendado)

1. Ve a [Netlify](https://app.netlify.com)
2. Click en "Add new site" → "Import an existing project"
3. Conecta con GitHub y selecciona el repositorio `Totalproteccion`
4. Configuración automática (ya está en netlify.toml):
   - **Build command:** (vacío)
   - **Publish directory:** `.`
5. Click en "Deploy site"

### Opción 2: Deploy Manual

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

El sitio estará disponible en: `https://tu-sitio.netlify.app`

### Configurar dominio personalizado

En Netlify dashboard:
1. Domain settings → Add custom domain
2. Agrega `totalproteccion.com.ar`
3. Configura los DNS según las instrucciones de Netlify

---

## 📄 Licencia

© 2025 Total Protección. Todos los derechos reservados.
