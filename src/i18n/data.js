export const skills = {
  languages: [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "Java" },
    { name: "Python" },
    { name: "PHP" },
  ],
  frontend: [
    { name: "React" },
    { name: "Vue" },
    { name: "Angular" },
    { name: "Gatsby" },
  ],
  backend: [
    { name: "Node.js" },
    { name: "NestJS" },
    { name: "Spring Boot" },
    { name: "Django" },
    { name: "FastAPI" },
    { name: "Laravel" },
  ],
  fullstack: [
    { name: "Next.js" },
    { name: "Nuxt.js" },
    { name: "Meteor" },
    { name: "Astro" },
  ],
  design: [
    { name: "Tailwind CSS" },
    { name: "Bootstrap" },
    { name: "Figma" },
    { name: "Photoshop" },
  ],
  databases: [
    { name: "MongoDB" },
    { name: "Supabase" },
    { name: "Firebase" },
    { name: "MySQL" },
    { name: "PostgreSQL" },
  ],
  devops: [{ name: "Docker" }, { name: "GitHub" }, { name: "Git" }],
};

export const projects = [
  {
    id: 1,
    title: {
      en: "Liz | Anime & Manga Discovery",
      es: "Liz | Descubrimiento de Anime y Manga",
    },
    description: {
      en: "Liz is a modern, responsive web application designed for anime and manga enthusiasts. It allows users to discover trending content, search with advanced filters, track their watching/reading progress, and manage custom lists. Built with performance and aesthetics in mind, Liz leverages the power of Vue 3, Supabase, and the AniList API.",
      es: "Liz es una aplicación web moderna y responsiva diseñada para entusiastas del anime y manga. Permite a los usuarios descubrir contenido en tendencia, buscar con filtros avanzados, rastrear su progreso de visualización/lectura y gestionar listas personalizadas. Construida con el rendimiento y la estética en mente, Liz aprovecha el poder de Vue 3, Supabase y la API de AniList.",
    },
    aptitudes: [
      "Vue.js",
      "TailwindCSS",
      "Pinia",
      "Anilist API",
      "Supabase",
      "Vite",
    ],
    image: "/projects/liz.png",
    liveUrl: "https://liz-beth.vercel.app",
    codeUrl: "https://github.com/dot-studio-devs/liz",
  },
  {
    id: 2,
    title: {
      en: "ConSentido Cognitivo | Psicopedagogía",
      es: "ConSentido Cognitivo | Psicopedagogía",
    },
    description: {
      en: "Informational and accessible website for neurocognitive stimulation for older adults, featuring downloadable resources and cognitive workshops focused on active aging.",
      es: "Sitio web informativo y accesible para estimulación neurocognitiva para adultos mayores, con recursos descargables y talleres cognitivos enfocados en el envejecimiento activo.",
    },
    aptitudes: ["Next.js", "Tailwind CSS", "Firebase"],
    image: "/projects/consentido.png",
    liveUrl: "https://www.consentidocognitivo.site/",
    codeUrl: "https://github.com/dot-studio-devs/ConSentido-Cognitivo",
  },
  {
    id: 3,
    title: {
      en: "ZatoBox | Modular Open-Source POS",
      es: "ZatoBox | POS Modular Open-Source",
    },
    description: {
      en: "ZatoBox is a modular, open-source POS system for SMEs and entrepreneurs. It includes cloud-based inventory management, online catalogs with ZatoLink, payment connection through ZatoConnect, and upcoming modules like Smart Inventory and automation. Designed to be simple, scalable, and adaptable to any business.",
      es: "ZatoBox es un sistema POS modular de código abierto para PYMEs y emprendedores. Incluye gestión de inventario basada en la nube, catálogos en línea con ZatoLink, conexión de pagos a través de ZatoConnect y próximos módulos como Smart Inventory y automatización.",
    },
    aptitudes: [
      "React.js",
      "Zustand",
      "Supabase",
      "Next.js",
      "Python",
      "PostgreSQL",
      "BTC Server",
      "Docker",
      "Vercel",
      "Tailwind CSS",
      "TypeScript",
    ],
    image: "/projects/zatobox.png",
    liveUrl: "https://zatobox.io/",
    codeUrl: "https://github.com/ZatoBox/main",
  },
  {
    id: 4,
    title: {
      en: "Dot Studio | Custom Solutions",
      es: "Dot Studio | Soluciones a Medida",
    },
    description: {
      en: "At Dot Studio, we don't just build websites; we create digital ecosystems that drive growth. We specialize in transforming complex ideas into seamless, responsive, and high-converting web experiences. Whether you are a startup or an established business, our team combines cutting-edge technology with strategic design to help you scale.",
      es: "En Dot Studio, no solo construimos sitios web; creamos ecosistemas digitales que impulsan el crecimiento. Nos especializamos en transformar ideas complejas en experiencias web fluidas, responsivas y de alta conversión.",
    },
    aptitudes: ["Next.js", "UI/UX", "SEO", "E-commerce"],
    image: "/projects/dot-studio.png",
    liveUrl: "https://dot-studio.site",
    codeUrl: "https://github.com/dot-studio-devs/dot-site",
  },
];

export const workExperience = [
  {
    id: 1,
    company: {
      en: "Niuro",
      es: "Niuro",
    },
    role: {
      en: "Full Stack Engineer - Marketplace Platform",
      es: "Full Stack Engineer - Plataforma Marketplace",
    },
    period: "Dec 2025 - Present",
    description: {
      en: "Developing and optimizing core features for the marketplace platform, ensuring scalability and performance.",
      es: "Desarrollando y optimizando funcionalidades principales para la plataforma marketplace, asegurando escalabilidad y rendimiento.",
    },
    logo: "/work/niuro.jpg",
    isCurrent: true,
  },
  {
    id: 2,
    company: {
      en: "Zatobox",
      es: "Zatobox",
    },
    role: {
      en: "Full Stack & Cloud Solutions Architect",
      es: "Full Stack & Cloud Solutions Architect",
    },
    period: "Aug 2025 - Dec 2025",
    description: {
      en: "Overseeing and optimizing the entire software development lifecycle as DevOps Lead. Led platform architecture from conception to deployment. Specialized in advanced data recognition systems and decentralized infrastructure.",
      es: "Supervisando y optimizando todo el ciclo de vida del desarrollo como Líder DevOps. Lideré la arquitectura de plataforma desde la concepción al despliegue. Especializado en sistemas avanzados de datos e infraestructura descentralizada.",
    },
    logo: "/work/zatobox.jpg",
  },
  {
    id: 3,
    company: {
      en: "Dragon Pyramid",
      es: "Dragon Pyramid",
    },
    role: {
      en: "Full Stack Engineer",
      es: "Full Stack Engineer",
    },
    period: "Jun 2025 - Oct 2025",
    description: {
      en: "Working on the Gym Master project with focus on Front-End. Developing modern interfaces using Next.js 14, TailwindCSS, and Shadcn UI. Integrated authentication with NextAuth, real-time notifications, and dynamic data from Supabase.",
      es: "Trabajando en el proyecto Gym Master con enfoque en Front-End. Desarrollando interfaces modernas con Next.js 14, TailwindCSS y Shadcn UI e integrando autenticación, notificaciones y datos de Supabase.",
    },
    logo: "/work/dragon-pyramid.jpg",
  },
  {
    id: 4,
    company: {
      en: "Dot Studio",
      es: "Dot Studio",
    },
    role: {
      en: "Full Stack Engineer & Content Creator",
      es: "Full Stack Engineer & Creador de Contenido",
    },
    period: "Aug 2024 - Present",
    description: {
      en: "Independent Developer building functional, well-structured digital solutions. Creating tech content to bridge the gap between complex code and community learning.",
      es: "Desarrollador independiente construyendo soluciones digitales funcionales y bien estructuradas. Creando contenido tecnológico para cerrar la brecha entre código complejo y aprendizaje comunitario.",
    },
    logo: "/work/dot-logo.svg",
    isCurrent: true,
  },
];

export const education = [
  {
    id: 1,
    institution: {
      en: "Instituto Superior Santo Domingo",
      es: "Instituto Superior Santo Domingo",
    },
    degree: {
      en: "Web Development & Mobile Applications",
      es: "Tecnicatura en Desarrollo Web & Aplicaciones Móviles",
    },
    period: "2025 - 2027",
    description: {
      en: "Comprehensive training in modern web and mobile development technologies and methodologies.",
      es: "Formación integral en tecnologías y metodologías modernas de desarrollo web y móvil.",
    },
    logo: "/student/issd.png",
  },
  {
    id: 2,
    institution: {
      en: "Codigo Facilito",
      es: "Codigo Facilito",
    },
    degree: {
      en: "Modern Frontend Development Bootcamp",
      es: "Bootcamp de Desarrollo en Frontend Moderno",
    },
    period: "Graduated Jan 2026",
    description: {
      en: "Intensive training in modern frontend technologies, performance optimization, and advanced UI patterns.",
      es: "Entrenamiento intensivo en tecnologías frontend modernas, optimización de rendimiento y patrones de UI avanzados.",
    },
    logo: "/student/codigo-facilito.png",
  },
  {
    id: 3,
    institution: {
      en: "Henry",
      es: "Henry",
    },
    degree: {
      en: "Full Stack Development Bootcamp",
      es: "Bootcamp de Full Stack Development",
    },
    period: "Graduated Jun 2025",
    description: {
      en: "Intense +800 hour coding bootcamp focused on JavaScript, React, Node.js, and PostgreSQL.",
      es: "Bootcamp intensivo de más de 800 horas enfocado en JavaScript, React, Node.js y PostgreSQL.",
    },
    logo: "/student/henry.jpg",
  },
  {
    id: 4,
    institution: {
      en: "Coderhouse",
      es: "Coderhouse",
    },
    degree: {
      en: "Full Stack Development Program",
      es: "Carrera de Full Stack Development",
    },
    period: "Graduated Feb 2025",
    description: {
      en: "Pathway from frontend to backend development, building real-world applications and mastering the MERN stack.",
      es: "Trayectoria de desarrollo frontend a backend, construyendo aplicaciones del mundo real y dominando el stack MERN.",
    },
    logo: "/student/coderhouse.jpg",
  },
];

export const hobbies = [
  { key: "anime", icon: "📺" },
  { key: "gaming", icon: "🎮" },
  { key: "music", icon: "🎧" },
  { key: "building", icon: "🔨" },
];
