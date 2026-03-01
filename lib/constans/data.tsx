import { EducationProps } from "@/components/layout/about/EducationCard";

export const servicios = [
  {
    id: 1,
    title: "Desarrollo Web",
    description:
      "Desarrollo aplicaciones web modernas con React y Next.js, enfocadas en rendimiento, escalabilidad y buenas prácticas. Construyo desde sitios optimizados hasta plataformas completas con autenticación, bases de datos e integración de APIs, listas para producción.",
    img: "/services/desarrollo.png",
  },
  {
    id: 2,
    title: "Desarrollo De Aplicaciones",
    description:
      "Desarrollo aplicaciones móviles multiplataforma con React Native y Expo, priorizando experiencia de usuario, arquitectura limpia e integración con APIs, autenticación y notificaciones push.",
    img: "/services/app.png",
  },
  {
    id: 3,
    title: "Diseño Web",
    description:
      "Diseño interfaces modernas, responsivas y centradas en el usuario utilizando Tailwind CSS y componentes reutilizables, combinando estética profesional con estructura técnica sólida.",
    img: "/services/diseno.png",
  },
  {
    id: 4,
    title: "Integraciones Con IA",
    description:
      "Integro inteligencia artificial en aplicaciones web mediante APIs como OpenAI y Google AI, desarrollando sistemas de chat, generación de contenido y automatización inteligente.",
    img: "/services/integracion-ai.png",
  },
];

export const SelectedWorks = [
  {
    id: 1,
    title: "IdeasDev – Generador de Ideas con IA",
    description:
      "Plataforma SaaS basada en inteligencia artificial para generación de ideas y seguimiento de proyectos. Incluye chat contextual por proyecto, generación automática de tareas, resúmenes y recursos.",
    tags: [
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
    src: "/works/1/shot.png",
    link: "https://ideas-dev-black.vercel.app",
  },
  {
    id: 2,
    title: "Ultramadness – Plataforma de Eventos",
    description:
      "Plataforma web para gestión y visualización de eventos con CMS, autenticación, base de datos relacional y sistema de captación de leads segmentados.",
    tags: [
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
    src: "/works/2/shot.png",
    link: "https://ultramadness.mx",
  },
  {
    id: 3,
    title: "Profiler | Chat Semántico Comercial",
    description:
      "Una plataforma de análisis de perfiles comerciales impulsada por IA que utiliza procesamiento de lenguaje natural para generar insights semánticos sobre clientes potenciales y facilitar conversaciones comerciales inteligentes.",
    tags: [
      "2025",
      "Next.JS",
      "React.JS",
      "TailwindCSS",
      "Sanity",
      "Stripe",
      "OpenAI",
      "Google AI",
      "Vercel",
      "NeonDB",
      "Prisma",
      "Auth.js",
    ],
    src: "/works/3/shot.png",
    link: "https://www.marketailabs.com",
  },
  {
    id: 4,
    title: "AFOCAT360 – Aplicación Móvil",
    description:
      "Aplicación móvil desarrollada con React Native y Expo para consulta de certificados, búsqueda por placa, historial de registros y notificaciones push.",
    tags: ["Expo", "React Native", "NativeWind", "Axios", "SQL"],
    src: "/works/4/shot.png",
    link: "https://play.google.com/store/apps/details?id=com.marcosdevyt.Afocat360",
  },
];

export const educationData: EducationProps[] = [
  {
    id: 1,
    proximamente: true,
    title: "Licenciatura en Informática",
    institution: "Universidad Siglo 21",
    date: "2026 - Presente",
    img: "",
    description:
      "Formación universitaria orientada a consolidar fundamentos teóricos avanzados en ciencias de la computación y arquitectura de software.",
  },
  {
    id: 2,
    title: "Desarrollo Full Stack",
    institution: "CoderHouse",
    date: "2024 - 2025",
    img: "/certificados/fullstack.png",
    description:
      "Formación intensiva en desarrollo web moderno (React, Node.js, DBs), marcando la transición hacia proyectos más complejos.",
  },
  {
    id: 3,
    title: "Programación con JavaScript",
    institution: "Coursera",
    date: "2024",
    img: "/certificados/meta-js.png",
    description:
      "Programación con JavaScript. Bases en manipulación del DOM y asincronía.",
  },
  {
    id: 4,
    title: "Versionado con Git/GitHub",
    institution: "Coursera",
    date: "2024",
    img: "/certificados/meta-git.png",
    description:
      "Versionado con Git/GitHub utilizando repositorios, commits, branches, pull requests, etc.",
  },
  {
    id: 5,
    title: "Introducción al Desarrollo Frontend",
    institution: "Coursera",
    date: "2024",
    img: "/certificados/meta-frontend.png",
    description:
      "Introduccion al Desarrollo Frontend utilizando React.js y conceptos como SPA, componentes, props, state, hooks, etc.",
  },
  {
    id: 6,
    title: "Fundamentos Profesionales en Desarrollo Web",
    institution: "Edutin Academy",
    date: "2024",
    img: "/certificados/edutin.png",
    description:
      "Curso orientado a bases conceptuales del desarrollo web, estructura de proyectos y buenas prácticas iniciales.",
  },
  {
    id: 7,
    title: "Técnico en Informática",
    institution: "Secundaria Técnica",
    date: "2016 - 2023",
    img: "/about.jpg",
    description:
      "Técnico en Informática Profesional y Personal. Base técnica donde desarrollé mis primeros proyectos web con HTML, CSS y JS.",
  },
];

export const focusCards = [
  {
    id: "01",
    title: "Desarrollo de MVPs",
    desc: "Construcción rápida y robusta de aplicaciones completas para validación de mercado.",
  },
  {
    id: "02",
    title: "Arquitectura Cloud",
    desc: "Integración de sistemas de autenticación, pagos (Stripe), y bases de datos escalables (PostgreSQL).",
  },
  {
    id: "03",
    title: "Inteligencia Artificial",
    desc: "Integración estratégica de IA en productos digitales y herramientas operativas de negocio.",
  },
];
