export const es = {
  nav: {
    projects: "Proyectos",
    experience: "Experiencia",
    knowledge: "Conocimientos",
    contact: "Contacto",
  },
  sections: {
    selectedWorks: "Trabajos Seleccionados",
    studies: "Estudios",
  },
  studies: [
    {
      title: "Desarrollo Web y Móvil",
      institution: "ISSD - Instituto Superior Santo Domingo",
      year: "Enero 2025 - Presente",
      icon: "/student/issd.png",
      description:
        "Actualmente cursando la tecnicatura en desarrollo web y aplicaciones móviles, cubriendo Java, JavaScript, PostgreSQL, MongoDB, MySQL, AWS, TypeScript, Docker y Shell scripting.",
    },
    {
      title: "Carrera Full Stack Developer",
      institution: "Coderhouse",
      year: "Agosto 2024 - Febrero 2025",
      icon: "/student/coderhouse.jpg",
      description:
        "Carrera completa de full stack cubriendo Sass, CSS, MongoDB, PostgreSQL, JavaScript, HTML, React, TypeScript, Docker, Postman, TailwindCSS, Node.js y Nest.js.",
    },
    {
      title: "Bootcamp Full Stack Development",
      institution: "Henry",
      year: "Enero 2025 - Julio 2025",
      icon: "/student/henry.jpg",
      description:
        "Bootcamp intensivo cubriendo MongoDB, PostgreSQL, TailwindCSS, React, Next.js, Nest.js, JavaScript, TypeScript, CSS y Figma para diseño UI.",
    },
    {
      title: "Especialización Frontend Moderno",
      institution: "Código Facilito",
      year: "Agosto 2025 - Noviembre 2025",
      icon: "/student/codigo-facilito.png",
      description:
        "Especialización avanzada en frontend con enfoque profundo en Angular, React y Vue a nivel profesional.",
    },
  ],
  projectDetail: {
    technologies: "Tecnologías",
    backToHome: "Volver al Inicio",
  },
  projects: [
    {
      id: "zatobox",
      year: "2025",
      title: "ZatoBox",
      subtitle: "Plataforma Full Stack & Soluciones Cloud",
      description:
        "Como Ingeniero Full Stack y Líder de DevOps en ZatoBox, superviso y optimizo todo el ciclo de vida del desarrollo de software. Lidero la arquitectura de la plataforma desde la concepción hasta el despliegue, asegurando que cada componente sea robusto, escalable y eficiente. Me especializo en integrar sistemas avanzados de reconocimiento de datos y gestionar infraestructura descentralizada. Mi enfoque principal está en optimizar flujos de trabajo, reducir costos en la nube y mejorar continuamente la resiliencia del sistema.",
      image: "/projects/zatobox.png",
      tech: [
        "Full Stack",
        "DevOps",
        "Cloud Architecture",
        "Escalabilidad",
        "AWS",
        "Docker",
      ],
      url: "https://zatobox.io/",
    },
    {
      id: "gym-master",
      year: "2025",
      title: "Gym Master",
      subtitle: "Aplicación Full Stack de Gestión Fitness",
      description:
        "Plataforma integral de gestión fitness construida durante mi pasantía en Dragon Pyramid. Desarrollé interfaces modernas y responsivas usando Next.js 14, TailwindCSS y Shadcn UI, aplicando las mejores prácticas de diseño y accesibilidad. Implementé componentes reutilizables, navegación fluida y una experiencia de usuario optimizada para dispositivos desktop y móviles (PWA). También participé en la integración de funcionalidades como autenticación con NextAuth, notificaciones en tiempo real, almacenamiento local con IndexedDB y visualización dinámica de datos desde Supabase.",
      image: "/projects/gym-master.jpg",
      tech: [
        "Next.js 14",
        "TailwindCSS",
        "Shadcn UI",
        "Supabase",
        "NextAuth",
        "PWA",
      ],
      url: "https://gym-master-new.vercel.app",
    },
    {
      id: "bycarket",
      year: "2025",
      title: "Bycarket",
      subtitle: "Marketplace de Vehículos con IA",
      description:
        "Plataforma construida en equipo que combina diseño moderno, IA y arquitectura full-stack robusta para comercio de vehículos. Mis contribuciones frontend incluyeron implementar lógica de integración Frontend-Backend, implementación del sistema de pagos Stripe, integración de experiencia de búsqueda con IA, y estilado TailwindCSS con pulido UX. La plataforma cuenta con integración de pagos sin problemas y un sistema de búsqueda inteligente impulsado por inteligencia artificial.",
      image: "/projects/bycarket.jpg",
      tech: [
        "Next.js",
        "Nest.js",
        "Integración IA",
        "Stripe",
        "TailwindCSS",
        "TypeScript",
      ],
      url: "https://bycarket-front-main.vercel.app/home",
    },
    {
      id: "portfolio",
      year: "2024",
      title: "Portfolio Web",
      subtitle: "Portfolio Personal de Desarrollador",
      description:
        "Portfolio personal moderno con soporte multiidioma, mostrando proyectos con diseño elegante y animaciones suaves. Construido con Astro para rendimiento óptimo, con sistema de soporte multiidioma, animaciones de scroll suaves, diseño moderno responsive y showcase interactivo de proyectos. El portfolio demuestra mis habilidades en crear experiencias web hermosas y de alto rendimiento.",
      image: "/projects/portfolio.png",
      tech: ["Astro", "TailwindCSS", "i18n", "TypeScript", "View Transitions"],
      url: "https://frysccou-dev.vercel.app/",
    },
    {
      id: "zzyn",
      year: "2024",
      title: "Zzyn",
      subtitle: "Experimento Web Creativo",
      description:
        "Proyecto de pasión que presenta diseño web experimental y características interactivas. Construido para explorar posibilidades creativas y tecnologías web modernas con enfoque artístico. Incluye diseño interactivo experimental, animaciones web modernas, conceptos creativos de UI/UX, y es completamente responsivo en todos los dispositivos. Este proyecto representa mi lado creativo y amor por empujar los límites de la web.",
      image: "/projects/zzyn.png",
      tech: ["Nuxt.js", "Framer Motion", "TailwindCSS", "TypeScript", "GSAP"],
      url: "https://zzyn.vercel.app/",
    },
    {
      id: "xview",
      year: "2024",
      title: "Xview",
      subtitle: "Plataforma E-commerce de Manga",
      description:
        "Plataforma completa de manga con diseño moderno, efectos glassmorphism y experiencia de usuario inmersiva con animaciones avanzadas y autenticación. La plataforma incluye gradientes animados y efectos glassmorphism, animaciones Framer Motion, diseño responsive con modo oscuro, y sistema de autenticación JWT para gestión segura de usuarios.",
      image: "/projects/xview.jpg",
      tech: ["React", "Glassmorphism", "Framer Motion", "JWT Auth", "Node.js"],
      url: "https://xview.vercel.app/",
    },
    {
      id: "zynner-solutions",
      year: "2024",
      title: "Zynner Solutions",
      subtitle: "Portfolio de Soluciones Profesionales",
      description:
        "Plataforma elegante de portfolio que exhibe servicios y soluciones profesionales. Cuenta con diseño limpio, exhibición de servicios y casos de estudio profesionales con estándares web modernos. La plataforma demuestra expertise en crear soluciones web orientadas a negocios con rendimiento optimizado y enfoque de diseño limpio y elegante.",
      image: "/projects/zynner-solutions.png",
      tech: ["Web Moderno", "Diseño Responsive", "Portfolio", "SEO Optimizado"],
      url: "https://zynner-portfolio.vercel.app/",
    },
    {
      id: "zynee",
      year: "2024",
      title: "Zynee",
      subtitle: "Plataforma de Aplicación Financiera",
      description:
        "Aplicación financiera moderna con interfaz intuitiva para gestión y análisis financiero. Construida con enfoque en experiencia de usuario, seguridad de datos e información financiera en tiempo real. Incluye gestión de datos financieros, dashboard de análisis en tiempo real, gestión segura de transacciones, e interfaz financiera intuitiva diseñada para facilidad de uso.",
      image: "/projects/zynee.png",
      tech: [
        "App Financiera",
        "Datos en Tiempo Real",
        "Arquitectura Segura",
        "Análisis",
        "Dashboard",
      ],
      url: "https://zynee.vercel.app/",
    },
    {
      id: "liz",
      year: "2024",
      title: "Liz",
      subtitle: "Plataforma de Anime y Manga",
      description:
        "Liz es una plataforma web para fans de anime y manga que permite descubrir contenido, buscar con filtros avanzados, ver detalles completos, gestionar listas personalizadas, seguir el progreso y recibir recomendaciones mediante un chatbot integrado. También incluye un sistema social para publicaciones, comentarios y seguidores. Una plataforma integral para la comunidad de anime y manga.",
      image: "/projects/liz.png",
      tech: ["Vue 3", "Supabase", "AniList API", "GSAP", "Chatbot IA"],
      url: "#",
    },
  ],
};
