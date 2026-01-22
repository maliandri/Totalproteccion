# Total Proteccion
## Propuesta Integral: Sitio Web + Sistema de Gestion
**Fecha:** 21 de Enero 2026 | **Preparado por:** Mariano Aliandri

---

## Resumen del Proyecto

Desarrollo completo del ecosistema digital para **Total Proteccion**, distribuidor oficial de Melisam en la provincia de Neuquen. El proyecto incluye:

1. **Sitio web publico** - Catalogo de productos y servicios
2. **Sistema de gestion privado** - Control de equipos, clientes, tecnicos y mantenimientos

---

# MODULO 1: Sitio Web Publico

## Alcance del Sitio Web

### Paginas Institucionales
- Pagina de inicio con hero, carruseles y secciones destacadas
- Pagina "Empresa" con historia, mision, vision y certificaciones
- Pagina "Contacto" con formulario y mapa de ubicacion
- Integracion con WhatsApp Business para consultas directas

### Catalogo de Productos
- Pagina principal de productos con categorias
- **Matafuegos:** 8 subcategorias (Polvo ABC, CO2, Agua, Agua AFFF, Polvos Especiales, HCFC-123, HFC-236, Acetato de Potasio)
- **Mangueras:** Categorias por tipo y aplicacion
- **Espumas:** AFFF, AR-AFFF, Sinteticas
- **Bronceria:** Valvulas, hidrantes, accesorios
- **Dosificacion de Espuma:** Equipos especializados
- Fichas de producto con especificaciones tecnicas
- Botones de consulta via WhatsApp por producto

### Seccion de Capacitaciones
- Cursos para empresas
- Capacitacion para consorcios
- Cursos de brigadas de emergencia
- Formulario de inscripcion/consulta

### Caracteristicas Tecnicas
- Diseno 100% responsivo (mobile-first)
- Optimizacion SEO on-page
- Imagenes optimizadas con Next.js Image
- Animaciones y transiciones suaves
- Integracion con redes sociales

---

# MODULO 2: Sistema de Gestion Privado

Sistema web interno (no indexado en Google) para la gestion integral de productos, servicios tecnicos, clientes y mantenimientos.

## 2.1 Gestion de Productos e Inventario

**Registro de Equipos**
- Alta, baja y modificacion de matafuegos y equipos
- Codigo unico por equipo (QR/codigo de barras)
- Tipo de agente extintor, capacidad, marca, modelo
- Fecha de fabricacion y fecha de vencimiento
- Numero de serie y certificaciones
- Historial completo de cada equipo

**Control de Stock**
- Inventario en tiempo real
- Stock minimo con alertas automaticas
- Movimientos de entrada/salida
- Ubicacion en deposito (estanterias/sectores)
- Reporte de equipos disponibles vs asignados

**Estados de Equipos**
- Nuevo / En stock
- Asignado a cliente
- En mantenimiento
- En reparacion
- Vencido / Dado de baja

---

## 2.2 Gestion de Clientes

**Ficha de Cliente**
- Datos de empresa (CUIT, razon social, contacto)
- Multiples sucursales/ubicaciones
- Contactos por ubicacion (encargado, telefono, email)
- Rubro de la empresa
- Condicion fiscal

**Equipos por Cliente**
- Listado de todos los equipos asignados
- Ubicacion exacta dentro del cliente (piso, sector, oficina)
- Fecha de instalacion
- Proxima fecha de mantenimiento
- Historial de servicios realizados

**Documentacion**
- Contratos adjuntos (PDF)
- Certificados de servicio emitidos
- Facturas asociadas
- Fotos de instalaciones

---

## 2.3 Gestion de Tecnicos

**Registro de Tecnicos**
- Datos personales y de contacto
- Matricula/habilitacion profesional
- Especialidades (tipos de equipos que puede mantener)
- Zona de cobertura geografica
- Disponibilidad horaria

**Asignacion de Trabajos**
- Calendario visual de trabajos asignados
- Carga de trabajo por tecnico
- Reasignacion rapida de servicios
- Vista de tecnicos disponibles por fecha

**Rendimiento**
- Cantidad de servicios realizados
- Tiempo promedio por servicio
- Calificacion de clientes
- Historial de trabajos

---

## 2.4 Ordenes de Servicio

**Tipos de Servicio**
- Mantenimiento preventivo (recarga anual)
- Mantenimiento correctivo (reparaciones)
- Prueba hidrostatica (cada 5 anos)
- Instalacion de equipo nuevo
- Retiro de equipo vencido
- Inspeccion/relevamiento

**Flujo de Orden de Servicio**
1. Creacion de orden (manual o automatica por vencimiento)
2. Asignacion de tecnico
3. Programacion de fecha y hora
4. Ejecucion del servicio
5. Registro de trabajos realizados
6. Generacion de certificado
7. Cierre de orden

**Documentacion del Servicio**
- Checklist digital de tareas realizadas
- Fotos antes/despues
- Firma digital del cliente
- Observaciones y recomendaciones
- Materiales utilizados

---

## 2.5 Sistema de Alertas y Notificaciones

**Alertas Automaticas**
- Equipos proximos a vencer (30, 15, 7 dias)
- Prueba hidrostatica vencida
- Stock bajo de productos
- Ordenes de servicio pendientes
- Servicios programados para manana

**Canales de Notificacion**
- Notificaciones en el sistema (campana)
- Email automatico

**Configuracion**
- Dias de anticipacion personalizables
- Destinatarios por tipo de alerta
- Frecuencia de recordatorios

---

## 2.6 Reportes y Estadisticas

**Dashboard Principal**
- Equipos totales en gestion
- Servicios del mes (realizados vs pendientes)
- Equipos por vencer esta semana
- Facturacion del mes
- Tecnicos activos

**Reportes Exportables (PDF/Excel)**
- Listado de equipos por cliente
- Equipos proximos a vencer (por rango de fechas)
- Servicios realizados por periodo
- Productividad por tecnico
- Inventario valorizado
- Clientes con servicios pendientes

**Graficos y Metricas**
- Evolucion de servicios mensual
- Distribucion de equipos por tipo
- Clientes por zona geografica
- Comparativo anual

---

## 2.7 Usuarios y Permisos

**Roles del Sistema**
- **Administrador:** Acceso total, configuracion del sistema
- **Supervisor:** Gestion de tecnicos, reportes, clientes
- **Operador:** Carga de ordenes, seguimiento basico
- **Tecnico:** Ver sus trabajos asignados, cargar servicios

**Seguridad**
- Login con email y contrasena
- Recuperacion de contrasena por email
- Sesiones seguras con tokens
- Registro de actividad (log de acciones)

---

## 2.8 Funcionalidades Adicionales

**Generacion de Documentos**
- Certificados de servicio (PDF con logo)
- Etiquetas para matafuegos
- Remitos de entrega/retiro
- Presupuestos para clientes

**Busqueda Avanzada**
- Buscar equipo por codigo, serie, cliente
- Filtros multiples combinables
- Busqueda por fecha de vencimiento
- Exportar resultados

**Calendario Integrado**
- Vista mensual/semanal de servicios
- Arrastrar y soltar para reprogramar
- Colores por tipo de servicio
- Filtrar por tecnico

---

# Arquitectura Tecnica

| Componente | Tecnologia |
|------------|------------|
| Frontend | Next.js 14 / React |
| Backend | Node.js / API REST |
| Base de Datos | PostgreSQL (Neon/Supabase) |
| Autenticacion | NextAuth.js / JWT |
| Hosting | Vercel / Railway |
| Almacenamiento | Cloudinary (imagenes/PDFs) |
| Reportes PDF | React-PDF / Puppeteer |

**Caracteristicas**
- Aplicacion web responsiva (funciona en PC, tablet y celular)
- Sistema de gestion con acceso privado (no indexado en Google)
- Base de datos en la nube (backups automaticos)
- SSL incluido (conexion segura)
- CDN global para maxima velocidad

---

# Inversion: Desarrollo

| Concepto | Monto (USD) |
|----------|-------------|
| | |
| **MODULO 1: SITIO WEB PUBLICO** | |
| Frontend - Diseno, maquetacion, paginas y catalogo | $1,000 |
| | |
| **MODULO 2: SISTEMA DE GESTION** | |
| Backend - Arquitectura, base de datos, API, autenticacion | $2,000 |
| Modulo de Productos e Inventario | $500 |
| Modulo de Clientes | $400 |
| Modulo de Tecnicos y Asignaciones | $400 |
| Modulo de Ordenes de Servicio | $500 |
| Sistema de Alertas y Notificaciones | $300 |
| Reportes, Dashboard y Exportaciones | $400 |
| Usuarios, Permisos y Seguridad | $300 |
| Generacion de PDFs y Documentos | $200 |
| | |
| **TOTAL DESARROLLO:** | **$6,000 USD** |

---

# Plan de Pagos

| Cuota | Monto | Detalle |
|-------|-------|---------|
| 1ra cuota | $2,000 USD | Al inicio del proyecto |
| 2da cuota | $2,000 USD | Al entregar Sitio Web + Modulos 1-3 |
| 3ra cuota | $2,000 USD | Al finalizar el proyecto |

---

# Soporte y Mantenimiento Mensual

A partir de la entrega completa del proyecto:

**Incluye:**
- Hosting sitio web y sistema de gestion
- Base de datos en la nube
- Backups diarios automaticos
- Soporte tecnico por WhatsApp
- Correccion de bugs
- Actualizaciones de seguridad
- Hasta 10 actualizaciones menores por mes

| **SOPORTE MENSUAL:** | **$100 USD/mes** |
|----------------------|------------------|

---

# Entregables y Tiempos

### Fase 1: Sitio Web Publico
| Entregable | Tiempo |
|------------|--------|
| Estructura del proyecto y configuracion | 1 semana |
| Paginas institucionales (Inicio, Empresa, Contacto) | 1 semana |
| Catalogo de Matafuegos (8 subcategorias) | 1 semana |
| Catalogo de productos adicionales | 1 semana |
| Seccion de Capacitaciones | 3 dias |
| Integraciones (WhatsApp, Analytics, SEO) | 3 dias |

### Fase 2: Sistema de Gestion
| Entregable | Tiempo |
|------------|--------|
| Arquitectura, base de datos y autenticacion | 1 semana |
| Modulo de Productos e Inventario | 1 semana |
| Modulo de Clientes | 1 semana |
| Modulo de Tecnicos y Asignaciones | 1 semana |
| Modulo de Ordenes de Servicio | 1.5 semanas |
| Sistema de Alertas | 0.5 semanas |
| Reportes y Dashboard | 1 semana |
| Generacion de PDFs | 0.5 semanas |

### Fase 3: Finalizacion
| Entregable | Tiempo |
|------------|--------|
| Testing integral | 1 semana |
| Ajustes finales y capacitacion | 0.5 semanas |

**Tiempo total estimado: 12-14 semanas**

---

# Notas Importantes

- Los montos pueden abonarse en **Pesos Argentinos** a cotizacion dolar MEP del dia de pago
- El sistema de gestion NO sera publico ni indexado en buscadores
- Se incluye capacitacion basica para el uso del sistema (2 sesiones de 2 horas)
- Se entrega manual de usuario basico
- El cliente debe proveer:
  - Imagenes de productos (o se usan las de Melisam con autorizacion)
  - Lista de clientes actuales para carga inicial
  - Lista de equipos en gestion para carga inicial
- Funcionalidades adicionales fuera del alcance se cotizan por separado

---

# Opcionales (Cotizacion Adicional)

| Funcionalidad | Monto |
|---------------|-------|
| App movil nativa (Android) para tecnicos | $1,500 USD |
| Integracion con WhatsApp Business (alertas automaticas) | $300 USD |
| Lectura de codigos QR desde celular | $200 USD |
| Portal de clientes (ver sus equipos y certificados) | $400 USD |
| Facturacion electronica (AFIP) | $500 USD |

---

# Conformidad del Acuerdo

&nbsp;

______________________________
**Cliente**
Total Proteccion

&nbsp;

______________________________
**Mariano Aliandri**
Desarrollador

---

**Mariano Aliandri**
Full Stack Developer & Data Analyst

yo@marianoaliandri.com.ar | 299-541-4422 | marianoaliandri.com.ar
