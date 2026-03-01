export const ListaDeTrabajos = [
  {
    id: 1,
    title: "IdeasDev – Generador de Ideas con IA",
    description:
      "Plataforma SaaS basada en inteligencia artificial para generación de ideas y seguimiento de proyectos. Incluye chat contextual por proyecto, generación automática de tareas, resúmenes y recursos.",
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Auth.js",
      "Prisma",
      "PostgreSQL",
      "Nodemailer",
    ],
    fecha: "2026",
    fechaCompleta: "2026",
    mainImage: "/works/1/shot.png",
    images: ["/works/1/img1.png", "/works/1/img2.png", "/works/1/img3.png"],
    link: "https://ideas-dev-black.vercel.app",
    markdown: `
    ## IdeasDev – Generador de Ideas y Seguimiento con IA

IdeasDev es una plataforma SaaS desarrollada para generar ideas de proyectos mediante inteligencia artificial y permitir su seguimiento dentro de la misma aplicación.

### Funcionalidades principales
- Generación de ideas mediante chat con IA
- Creación de proyectos a partir de cards dinámicas
- Chat contextual por proyecto
- Generación automática de tareas
- Resúmenes estructurados
- Recomendación de recursos

### Arquitectura
Aplicación full stack desarrollada con Next.js y TypeScript, autenticación con Auth.js, base de datos PostgreSQL gestionada con Prisma y envío de correos mediante Nodemailer.

El proyecto demuestra integración avanzada de IA y arquitectura orientada a producto SaaS.
    `,
  },
  {
    id: 2,
    title: "Ultramadness – Plataforma de Eventos",
    description:
      "Plataforma web para gestión y visualización de eventos con CMS, autenticación, base de datos relacional y sistema de captación de leads segmentados.",
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Auth.js",
      "Prisma",
      "PostgreSQL",
      "Sanity",
      "Resend",
    ],
    fecha: "2025",
    fechaCompleta: "2025",
    mainImage: "/works/2/shot.png",
    images: ["/works/2/img1.png", "/works/2/img2.png", "/works/2/img3.png"],
    link: "https://ultramadness.mx",
    markdown: `## Ultramadness – Plataforma de Eventos

Plataforma web para visualización y gestión de eventos musicales.

### Funcionalidades principales
- Visualización dinámica de eventos
- CMS con Sanity
- Sistema de captación de leads
- Autenticación de usuarios
- Envío de correos transaccionales

### Arquitectura
Desarrollado con Next.js, Prisma y PostgreSQL, con animaciones mediante Framer Motion y componentes UI con shadcn. Diseño responsive y estructura preparada para crecimiento.`,
  },
  {
    id: 3,
    title: "Profiler – Análisis con IA Multimodelo",
    description:
      "Herramienta web de análisis de perfiles con integración de múltiples modelos de IA (OpenAI, Google AI y Groq). Implementación full stack con autenticación segura y base de datos relacional.",
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Sanity",
      "Auth.js",
      "Prisma",
      "PostgreSQL",
      "OpenAI",
      "Google AI",
      "Groq AI",
    ],
    fecha: "2025",
    fechaCompleta: "2025",
    mainImage: "/works/3/shot.png",
    images: ["/works/3/img1.png", "/works/3/img2.png", "/works/3/img3.png"],
    link: "https://www.marketailabs.com",
    markdown: `## Profiler – Plataforma de Análisis con IA

Profiler es una herramienta web que integra múltiples modelos de inteligencia artificial para análisis avanzado de perfiles y generación de contenido inteligente.

### Funcionalidades principales
- Integración con OpenAI, Google AI y Groq
- Sistema de autenticación segura
- Persistencia de datos en PostgreSQL
- CMS gestionado con Sanity
- Procesamiento y análisis automatizado

### Arquitectura
Desarrollado con Next.js, Prisma y Auth.js, enfocado en seguridad, escalabilidad y arquitectura modular para integración de múltiples modelos de IA.`,
  },
  {
    id: 4,
    title: "AFOCAT360 – Aplicación Móvil",
    description:
      "Aplicación móvil desarrollada con React Native y Expo para consulta de certificados, búsqueda por placa, historial de registros y notificaciones push.",
    stack: ["Expo", "React Native", "NativeWind"],
    fecha: "2025",
    fechaCompleta: "2025",
    mainImage: "/works/4/shot.png",
    images: ["/works/4/img1.png", "/works/4/img2.png", "/works/4/img3.png"],
    link: "https://play.google.com/store/apps/details?id=com.marcosdevyt.Afocat360",
    markdown: `## AFOCAT360 – Aplicación Móvil

Aplicación móvil desarrollada para consulta y validación de certificados AFOCAT en Perú.

### Funcionalidades principales
- Búsqueda por placa y certificado
- Historial de consultas
- Notificaciones push
- Consumo seguro de APIs

### Arquitectura
Desarrollada con React Native y Expo, utilizando NativeWind para estilos. Enfocada en rendimiento, experiencia móvil optimizada y seguridad en el manejo de datos.`,
  },
  {
    id: 5,
    title: "Marketplace Técnico (MVP)",
    description:
      "Desarrollo completo de MVP para marketplace con registro y login de usuarios, publicación de productos, filtros avanzados, mensajería interna y pagos en modo sandbox.",
    stack: ["Next.js", "React", "Supabase", "PostgreSQL", "Stripe"],
    fecha: "2025",
    fechaCompleta: "Agosto 2025 - Noviembre 2025",
    mainImage: "/works/5/shot.png",
    images: ["/works/5/img1.png", "/works/5/img2.png", "/works/5/img3.png"],
    link: "https://despiezo.com",
    markdown: `## Marketplace Técnico – MVP

Desarrollo de producto mínimo viable para marketplace especializado en productos técnicos.

### Funcionalidades principales
- Registro y autenticación de usuarios
- Publicación y gestión de productos
- Filtros avanzados de búsqueda
- Mensajería interna entre usuarios
- Integración de pagos en modo sandbox

### Arquitectura
Construido con Next.js y Supabase, base de datos PostgreSQL e integración con Stripe. Estructurado para validación temprana de producto y escalabilidad futura.`,
  },
  {
    id: 6,
    title: "Plataforma de Seguros Vehiculares",
    description:
      "Migración de sistema Laravel a arquitectura REST API y desarrollo de frontend con Next.js. Implementación de formulario paso a paso e integración de pagos con Stripe.",
    stack: [
      "Next.js",
      "React",
      "Node.js",
      "Laravel API",
      "PostgreSQL",
      "Stripe",
    ],
    fecha: "2025",
    fechaCompleta: "Febrero 2025 - Marzo 2025",
    mainImage: "/works/6/shot.png",
    images: ["/works/6/img1.png", "/works/6/img2.png", "/works/6/img3.png"],
    link: "https://www.compratucat.pe",
    markdown: `## Plataforma de Seguros Vehiculares

Desarrollo de sistema web para contratación de seguros con flujo paso a paso e integración de pagos.

### Funcionalidades principales
- Migración de Laravel monolítico a REST API
- Formulario multi-step
- Integración con Stripe
- Gestión de clientes y modelos de vehículos

### Arquitectura
Frontend en Next.js conectado a backend estructurado como API REST, con base de datos relacional y arquitectura enfocada en rendimiento y claridad estructural.`,
  },
  {
    id: 7,
    title: "Iconic Plats – E-commerce de Muebles",
    description:
      "E-commerce completo desarrollado con Next.js 15 y Firebase, con catálogo dinámico, carrito de compras, seguimiento de pedidos e integración de pagos. Plataforma optimizada para producción con arquitectura moderna y diseño responsive.",
    stack: [
      "Next.js 15",
      "React",
      "Tailwind CSS",
      "Firebase",
      "Firestore",
      "MercadoPago",
    ],
    fecha: "2025",
    fechaCompleta: "2025",
    mainImage: "/works/7/shot.png",
    images: ["/works/7/img1.png", "/works/7/img2.png", "/works/7/img3.png"],
    link: "https://house-ecommerce.vercel.app",
    markdown: `## Iconic Plats – E-commerce de Muebles y Decoración

E-commerce completo desarrollado con Next.js 15 (App Router) orientado a la venta de muebles y artículos de decoración para el hogar.

### Funcionalidades principales
- Catálogo dinámico por categorías
- Carrito de compras y proceso de checkout
- Seguimiento de pedidos
- Diseño completamente responsive
- Navegación intuitiva y optimizada

### Arquitectura
Aplicación construida con Next.js 15 y Tailwind CSS, utilizando Firebase (Firestore) como base de datos en tiempo real. Integración con pasarela de pago y estructura preparada para producción con buenas prácticas modernas.`,
  },
  {
    id: 8,
    title: "LMS-Courselly – Plataforma de Cursos Online",
    description:
      "Plataforma LMS moderna con autenticación, compra de cursos mediante Stripe y gestión de contenido en tiempo real con Sanity. Incluye dashboard de usuario y arquitectura escalable orientada a producto digital.",
    stack: [
      "Next.js 15",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Sanity",
      "Clerk",
      "Stripe",
    ],
    fecha: "2025",
    fechaCompleta: "2025",
    mainImage: "/works/8/shot.png",
    images: ["/works/8/img1.png", "/works/8/img2.png", "/works/8/img3.png"],
    link: "https://lms-marcosdev-course.vercel.app",
    markdown: `## LMS-Courselly – Plataforma de Cursos Online

Plataforma LMS moderna desarrollada para la venta y gestión de cursos digitales con experiencia optimizada para estudiantes y administradores.

### Funcionalidades principales
- Registro y autenticación con Clerk
- Compra de cursos mediante Stripe
- Dashboard personalizado del estudiante
- Gestión de contenido en tiempo real con Sanity
- Interfaz moderna con modo claro/oscuro

### Arquitectura
Construido con Next.js 15 (App Router), Tailwind CSS y shadcn/ui. Integración de pagos seguros y CMS desacoplado para administración sin tocar código. Arquitectura escalable y lista para producción.`,
  },
  {
    id: 9,
    title: "SaaS Landing Page",
    description:
      "Landing page moderna para productos SaaS desarrollada con Next.js y animaciones con Framer Motion. Optimizada para conversión, rendimiento y SEO técnico, con diseño responsive y componentes reutilizables.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    fecha: "2025",
    fechaCompleta: "2025",
    mainImage: "/works/9/shot.png",
    images: ["/works/9/img1.png", "/works/9/img2.png", "/works/9/img3.png"],
    link: "https://saas-landing-page-xi-three.vercel.app",
    markdown: `## SaaS Landing Page – Optimizada para Conversión

Landing page moderna desarrollada para productos SaaS con enfoque en conversión, rendimiento y experiencia de usuario.

### Características principales
- Diseño responsive y minimalista
- Animaciones fluidas con Framer Motion
- Componentes reutilizables
- Optimización SEO técnica
- Enfoque en propuesta de valor clara

### Arquitectura
Desarrollada con Next.js y Tailwind CSS, priorizando velocidad, estructura limpia y rendimiento. Ideal para startups y productos digitales en etapa de lanzamiento.
`,
  },
  {
    id: 10,
    title: "Portafolio 3D Interactivo",
    description:
      "Portafolio 3D desarrollado con React y Three.js, ofreciendo experiencia inmersiva con gráficos en tiempo real, animaciones fluidas y arquitectura híbrida optimizada con Next.js.",
    stack: ["Next.js", "React", "Three.js", "Tailwind CSS"],
    fecha: "2025",
    fechaCompleta: "2025",
    mainImage: "/works/10/shot.png",
    images: ["/works/10/img1.png", "/works/10/img2.png", "/works/10/img3.png"],
    link: "https://portfolio-3d-nu-ten.vercel.app",
    markdown: `## Portafolio 3D Interactivo

Experiencia web inmersiva desarrollada con React, Three.js y Next.js para presentar proyectos y habilidades en un entorno visual dinámico.

### Funcionalidades principales
- Gráficos 3D en tiempo real
- Animaciones fluidas
- Navegación intuitiva
- Optimización híbrida con SSR y renderizado cliente

### Arquitectura
Construido con Next.js para combinar rendimiento y experiencia visual avanzada. Enfoque en usabilidad, performance y experiencia premium tanto en desktop como en dispositivos móviles.`,
  },
  {
    id: 11,
    title: "Shoe-Marcos – E-commerce con Dashboard",
    description:
      "Plataforma e-commerce completa con panel administrativo, autenticación, análisis de ventas y pagos con Stripe. Incluye dashboard con métricas, gestión de productos y monitoreo en tiempo real.",
    stack: [
      "Next.js 15",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Redis",
      "Kinde",
      "Stripe",
    ],
    fecha: "2025",
    fechaCompleta: "2025",
    mainImage: "/works/11/shot.png",
    images: ["/works/11/img1.png", "/works/11/img2.png", "/works/11/img3.png"],
    link: "https://shoe-marcos.vercel.app",
    markdown: `## Shoe-Marcos – E-commerce con Panel Administrativo

Plataforma de comercio electrónico enfocada en venta de calzado, incluyendo dashboard administrativo y análisis de ventas en tiempo real.

### Funcionalidades principales
- Catálogo filtrable y detalle de productos
- Checkout seguro con Stripe
- Autenticación con Kinde
- Panel administrativo para gestión de productos
- Dashboard con métricas y gráfico de ventas
- Modo claro/oscuro

### Arquitectura
Desarrollado con Next.js 15, Tailwind CSS y shadcn/ui. Integración con Redis para optimización y estructura orientada a escalabilidad y mantenimiento a largo plazo.`,
  },
  {
    id: 12,
    title: "NoteSpace – Plataforma de Documentos Colaborativos con IA",
    description:
      "Aplicación web colaborativa desarrollada con Next.js que permite la creación y edición de documentos en tiempo real, integrando autenticación segura, almacenamiento en la nube y funciones de inteligencia artificial como consulta contextual y traducción instantánea.",
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Sanity",
      "Clerk",
      "Firebase",
      "Google AI",
      "Vercel",
    ],
    fecha: "2024",
    fechaCompleta: "2024",
    mainImage: "/works/12/shot.png",
    images: ["/works/12/img1.png", "/works/12/img2.png", "/works/12/img3.png"],
    link: "https://note-space-delta.vercel.app",
    markdown: `
## NoteSpace – Plataforma de Documentos Colaborativos con IA

NoteSpace es una aplicación web colaborativa diseñada para la creación y edición de documentos en tiempo real, incorporando funcionalidades avanzadas de inteligencia artificial.

### Funcionalidades principales
- Creación y edición colaborativa en tiempo real
- Autenticación segura con Clerk
- Persistencia de datos en la nube
- Consulta inteligente del contenido mediante IA
- Traducción automática en tiempo real
- Interfaz moderna y completamente responsive

### Arquitectura
Construida con Next.js y React, utilizando Tailwind CSS para estilos modernos y escalables. La autenticación se gestiona con Clerk, mientras que Firebase se utiliza para almacenamiento y sincronización en tiempo real. Se integran modelos de Google AI para análisis y traducción de contenido. Desplegada en Vercel para alto rendimiento y escalabilidad.
`,
  },
  {
    id: 13,
    title: "Portafolio Personal – Versión Anterior",
    description:
      "Portafolio web personal desarrollado con Next.js y TypeScript para presentar proyectos, habilidades y stack tecnológico mediante una interfaz moderna, animaciones fluidas y diseño completamente responsive.",
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Aceternity UI",
    ],
    fecha: "2024",
    fechaCompleta: "2024",
    mainImage: "/works/13/shot.png",
    images: ["/works/13/img1.png", "/works/13/img2.png", "/works/13/img3.png"],
    link: "https://portfolio-marcosdev-old.vercel.app",
    markdown: `
## Portafolio Personal – Versión Anterior

Portafolio web desarrollado para presentar proyectos, experiencia y tecnologías de forma moderna e interactiva.

### Funcionalidades principales
- Secciones dinámicas para proyectos y stack
- Animaciones fluidas con Framer Motion
- Componentes interactivos con Aceternity UI
- Diseño responsive optimizado
- Enfoque en rendimiento y claridad visual

### Arquitectura
Construido con Next.js y TypeScript, utilizando React para una estructura modular y Tailwind CSS para estilos escalables. Proyecto enfocado en experiencia de usuario, animaciones suaves y presentación profesional.
`,
  },
  {
    id: 14,
    title: "E-commerce Headless con Sanity y Stripe",
    description:
      "Tienda online moderna desarrollada con arquitectura headless, integrando gestión dinámica de productos mediante Sanity CMS, autenticación segura con Clerk y pagos online con Stripe, optimizada para rendimiento y escalabilidad.",
    stack: ["Next.js", "React", "Tailwind CSS", "Sanity", "Clerk", "Stripe"],
    fecha: "2025",
    fechaCompleta: "2025",
    mainImage: "/works/14/shot.png",
    images: ["/works/14/img1.png", "/works/14/img2.png", "/works/14/img3.png"],
    link: "https://sanity-ecommerce-sepia.vercel.app",
    markdown: `
## E-commerce Headless con Sanity y Stripe

Plataforma de comercio electrónico desarrollada bajo arquitectura headless, enfocada en rendimiento, escalabilidad y experiencia de usuario moderna.

### Funcionalidades principales
- Catálogo dinámico gestionado desde Sanity CMS
- Autenticación segura con Clerk
- Carrito de compras y flujo de checkout optimizado
- Integración de pagos online con Stripe
- Panel administrable desde CMS sin modificar código
- Diseño responsive y optimizado para SEO

### Arquitectura
Construido con Next.js y React bajo una arquitectura desacoplada (headless). Sanity permite la gestión flexible de productos y contenido en tiempo real. Clerk gestiona autenticación y sesiones de usuario, mientras que Stripe procesa pagos de forma segura. La estructura está preparada para producción y escalabilidad futura.
`,
  },
];
