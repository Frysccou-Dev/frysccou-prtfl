export const pt = {
  nav: {
    projects: "Projetos",
    aboutMe: "Sobre Mim",
    knowledge: "Conhecimentos",
    contact: "Contato",
  },
  sections: {
    selectedWorks: "Trabalhos Selecionados",
    studies: "Estudos",
    techStack: "Stack Tecnológico",
    mainStack: "Stack Principal",
    frontend: "Frontend",
    backend: "Backend",
    databases: "Bancos de Dados",
    tools: "Ferramentas e Outros",
    process: "Como Faço A Diferença",
    contact: "Contato",
    funnyFacts: "Curiosidades Sobre Mim",
  },
  funnyFacts: [
    {
      emoji: "👨‍💻",
      text: "Full Stack Developer desde 2023, transformando sonhos em código",
    },
    {
      emoji: "🎂",
      text: "20 anos, nascido em outubro de 2005 - vibes de Escorpião",
    },
    { emoji: "🎓", text: "Atualmente estudando Design UX/UI na Coderhouse" },
    {
      emoji: "🎯",
      text: "Minha meta: conquistar o título de Engenheiro Full Stack",
    },
    {
      emoji: "🎵",
      text: "Viciado em música - confira minha playlist no YouTube Music!",
    },
    {
      emoji: "🍜",
      text: "Comida favorita: Milanesa com batatas fritas, sem discussão",
    },
    { emoji: "📺", text: "Entusiasta de anime com uma lista que só cresce" },
    { emoji: "🎮", text: "Hora de jogar: Mario Kart, Pokémon e Brawl Stars" },
    { emoji: "💻", text: "Programar é meu hobby, não apenas meu trabalho" },
    { emoji: "☕", text: "Movido a chimarrão e sessões de debugging noturnas" },
  ],
  contactForm: {
    email: "Seu Email",
    subject: "Assunto",
    message: "Mensagem",
    send: "Enviar Mensagem",
    sending: "Enviando...",
    success: "Mensagem enviada com sucesso!",
    error: "Houve um erro. Por favor tente novamente.",
  },
  processSteps: [
    {
      number: "01",
      title: "Primeiro Contato",
      description:
        "Nos conectamos e conversamos sobre sua visão. Escuto atentamente para entender seus objetivos, desafios e expectativas do projeto.",
    },
    {
      number: "02",
      title: "Planejamento e Estratégia",
      description:
        "Analiso os requisitos e crio um roteiro detalhado. Definimos marcos, tecnologias e a melhor abordagem para suas necessidades.",
    },
    {
      number: "03",
      title: "Design e Protótipo",
      description:
        "Antes de programar, desenho a experiência e interface do usuário. Você vê e aprova a direção visual desde o início.",
    },
    {
      number: "04",
      title: "Desenvolvimento",
      description:
        "O código limpo e escalável ganha vida. Construo com tecnologias modernas, seguindo as melhores práticas e mantendo você informado.",
    },
    {
      number: "05",
      title: "Testes e Refinamento",
      description:
        "Testes rigorosos garantem que tudo funcione perfeitamente. Refino baseado no feedback até alcançar a perfeição.",
    },
    {
      number: "06",
      title: "Lançamento e Suporte",
      description:
        "Seu projeto vai ao ar. Ofereço suporte contínuo e supervisão para garantir o sucesso e funcionamento fluido.",
    },
  ],
  studies: [
    {
      title: "Desenvolvimento Web e Mobile",
      institution: "ISSD - Instituto Superior Santo Domingo",
      year: "Janeiro 2025 - Presente",
      icon: "/student/issd.png",
      description:
        "Atualmente cursando o curso técnico em desenvolvimento web e aplicativos móveis, cobrindo Java, JavaScript, PostgreSQL, MongoDB, MySQL, AWS, TypeScript, Docker e Shell scripting.",
    },
    {
      title: "Carreira Full Stack Developer",
      institution: "Coderhouse",
      year: "Agosto 2024 - Fevereiro 2025",
      icon: "/student/coderhouse.jpg",
      description:
        "Carreira completa de full stack cobrindo Sass, CSS, MongoDB, PostgreSQL, JavaScript, HTML, React, TypeScript, Docker, Postman, TailwindCSS, Node.js e Nest.js.",
    },
    {
      title: "Bootcamp Full Stack Development",
      institution: "Henry",
      year: "Janeiro 2025 - Julho 2025",
      icon: "/student/henry.jpg",
      description:
        "Bootcamp intensivo cobrindo MongoDB, PostgreSQL, TailwindCSS, React, Next.js, Nest.js, JavaScript, TypeScript, CSS e Figma para design UI.",
    },
    {
      title: "Especialização Frontend Moderno",
      institution: "Código Facilito",
      year: "Agosto 2025 - Novembro 2025",
      icon: "/student/codigo-facilito.png",
      description:
        "Especialização avançada em frontend com foco profundo em Angular, React e Vue a nível profissional.",
    },
  ],
  projectDetail: {
    technologies: "Tecnologias",
    backToHome: "Voltar ao Início",
  },
  projects: [
    {
      id: "zatobox",
      year: "2025",
      title: "ZatoBox",
      subtitle: "Plataforma Full Stack & Soluções Cloud",
      description:
        "Como Engenheiro Full Stack e Líder de DevOps na ZatoBox, supervisiono e otimizo todo o ciclo de vida do desenvolvimento de software. Lidero a arquitetura da plataforma desde a concepção até a implantação, garantindo que cada componente seja robusto, escalável e eficiente. Me especializo em integrar sistemas avançados de reconhecimento de dados e gerenciar infraestrutura descentralizada. Meu foco principal está em otimizar fluxos de trabalho, reduzir custos na nuvem e melhorar continuamente a resiliência do sistema.",
      image: "/projects/zatobox.png",
      tech: [
        "Full Stack",
        "DevOps",
        "Cloud Architecture",
        "Escalabilidade",
        "AWS",
        "Docker",
      ],
      url: "https://zatobox.io/",
    },
    {
      id: "gym-master",
      year: "2025",
      title: "Gym Master",
      subtitle: "Aplicação Full Stack de Gestão Fitness",
      description:
        "Plataforma integral de gestão fitness construída durante meu estágio na Dragon Pyramid. Desenvolvi interfaces modernas e responsivas usando Next.js 14, TailwindCSS e Shadcn UI, aplicando as melhores práticas de design e acessibilidade. Implementei componentes reutilizáveis, navegação fluida e uma experiência de usuário otimizada para dispositivos desktop e móveis (PWA). Também participei da integração de funcionalidades como autenticação com NextAuth, notificações em tempo real, armazenamento local com IndexedDB e visualização dinâmica de dados do Supabase.",
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
      subtitle: "Marketplace de Veículos com IA",
      description:
        "Plataforma construída em equipe que combina design moderno, IA e arquitetura full-stack robusta para comércio de veículos. Minhas contribuições frontend incluíram implementar lógica de integração Frontend-Backend, implementação do sistema de pagamentos Stripe, integração de experiência de busca com IA, e estilização TailwindCSS com polimento UX. A plataforma conta com integração de pagamentos sem problemas e um sistema de busca inteligente impulsionado por inteligência artificial.",
      image: "/projects/bycarket.jpg",
      tech: [
        "Next.js",
        "Nest.js",
        "Integração IA",
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
      subtitle: "Portfolio Pessoal de Desenvolvedor",
      description:
        "Portfolio pessoal moderno com suporte multilíngue, mostrando projetos com design elegante e animações suaves. Construído com Astro para desempenho ótimo, com sistema de suporte multilíngue, animações de scroll suaves, design moderno responsivo e showcase interativo de projetos. O portfolio demonstra minhas habilidades em criar experiências web bonitas e de alto desempenho.",
      image: "/projects/portfolio.png",
      tech: ["Astro", "TailwindCSS", "i18n", "TypeScript", "View Transitions"],
      url: "https://frysccou-dev.vercel.app/",
    },
    {
      id: "zzyn",
      year: "2024",
      title: "Zzyn",
      subtitle: "Experimento Web Criativo",
      description:
        "Projeto de paixão que apresenta design web experimental e características interativas. Construído para explorar possibilidades criativas e tecnologias web modernas com abordagem artística. Inclui design interativo experimental, animações web modernas, conceitos criativos de UI/UX, e é completamente responsivo em todos os dispositivos. Este projeto representa meu lado criativo e amor por empurrar os limites da web.",
      image: "/projects/zzyn.png",
      tech: ["Nuxt.js", "Framer Motion", "TailwindCSS", "TypeScript", "GSAP"],
      url: "https://zzyn.vercel.app/",
    },
    {
      id: "xview",
      year: "2024",
      title: "Xview",
      subtitle: "Plataforma E-commerce de Mangá",
      description:
        "Plataforma completa de mangá com design moderno, efeitos glassmorphism e experiência de usuário imersiva com animações avançadas e autenticação. A plataforma inclui gradientes animados e efeitos glassmorphism, animações Framer Motion, design responsivo com modo escuro, e sistema de autenticação JWT para gestão segura de usuários.",
      image: "/projects/xview.jpg",
      tech: ["React", "Glassmorphism", "Framer Motion", "JWT Auth", "Node.js"],
      url: "https://xview.vercel.app/",
    },
    {
      id: "zynner-solutions",
      year: "2024",
      title: "Zynner Solutions",
      subtitle: "Portfolio de Soluções Profissionais",
      description:
        "Plataforma elegante de portfolio que exibe serviços e soluções profissionais. Conta com design limpo, exibição de serviços e casos de estudo profissionais com padrões web modernos. A plataforma demonstra expertise em criar soluções web orientadas a negócios com desempenho otimizado e abordagem de design limpo e elegante.",
      image: "/projects/zynner-solutions.png",
      tech: ["Web Moderno", "Design Responsivo", "Portfolio", "SEO Otimizado"],
      url: "https://zynner-portfolio.vercel.app/",
    },
    {
      id: "zynee",
      year: "2024",
      title: "Zynee",
      subtitle: "Plataforma de Aplicação Financeira",
      description:
        "Aplicação financeira moderna com interface intuitiva para gestão e análise financeira. Construída com foco em experiência do usuário, segurança de dados e informações financeiras em tempo real. Inclui gestão de dados financeiros, dashboard de análise em tempo real, gestão segura de transações, e interface financeira intuitiva projetada para facilidade de uso.",
      image: "/projects/zynee.png",
      tech: [
        "App Financeiro",
        "Dados em Tempo Real",
        "Arquitetura Segura",
        "Análise",
        "Dashboard",
      ],
      url: "https://zynee.vercel.app/",
    },
    {
      id: "liz",
      year: "2024",
      title: "Liz",
      subtitle: "Plataforma de Anime e Mangá",
      description:
        "Liz é uma plataforma web para fãs de anime e mangá que permite descobrir conteúdo, buscar com filtros avançados, ver detalhes completos, gerenciar listas personalizadas, acompanhar o progresso e receber recomendações através de um chatbot integrado. Também inclui um sistema social para publicações, comentários e seguidores. Uma plataforma integral para a comunidade de anime e mangá.",
      image: "/projects/liz.png",
      tech: ["Vue 3", "Supabase", "AniList API", "GSAP", "Chatbot IA"],
      url: "#",
    },
  ],
};
