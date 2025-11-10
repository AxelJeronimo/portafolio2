export interface Project {
  id: number;
  title: string;
  category: "Análisis y Desarrollo" | "Estrategia Digital"; 
  company: string;
  shortDesc: string; 
  tags: string[]; 
  image: string; 
  fullDescription: string[]; 
  results: string[]; 
  liveUrl?: string; 
}

export const projects: Project[] = [
  // PROYECTO 1: Jambo (Análisis y Desarrollo)
  {
    id: 1,
    title: "Jambo - Diseño UI/UX",
    category: "Análisis y Desarrollo",
    company: "Proyecto Freelance",
    shortDesc: "Diseño completo de Interfaz de Usuario y Experiencia (UI/UX) para una plataforma de servicios.",
    tags: ["UI/UX", "Figma", "Branding", "Diseño"],
    image: "/1.jpg", // Asegúrate de tener una imagen con este nombre en la carpeta /public
    fullDescription: [
      "Lideré el diseño de interfaz completo en Figma, centrado en la usabilidad.",
      "Definición de guía de estilo (paleta de colores, tipografía).",
      "Creación de un sistema de diseño modular para escalabilidad.",
    ],
    results: [
      "Diseño optimizado que redujo el tiempo de desarrollo Front-end.",
      "Experiencia de usuario validada y aprobada.",
    ],
    liveUrl: "https://www.enlace-a-tu-figma-o-demo.com", 
  },
  
  // PROYECTO 2: Dyna Tours (Análisis y Desarrollo)
  {
    id: 2,
    title: "Dyna Tours - Web Front-end",
    category: "Análisis y Desarrollo",
    company: "Proyecto Personal",
    shortDesc: "Desarrollo Front-end interactivo y optimización de rendimiento para un sitio de viajes (uso de código JavaScript).",
    tags: ["Front-end", "JavaScript", "Next.js", "Tailwind CSS"],
    image: "/1.jpg", 
    fullDescription: [
      "Implementación de layouts con Next.js/React y modularidad de componentes.",
      "Optimización de la velocidad de carga y rendimiento.",
      "Integración de formularios de contacto y validación.",
    ],
    results: [
      "Sitio 100% responsivo y adaptado a móviles.",
      "Puntaje de rendimiento en Lighthouse superior a 85/100.",
    ],
    liveUrl: "https://www.enlace-a-tu-github-o-web.com",
  },
  
  // PROYECTO 3: Campaña (Estrategia Digital)
  {
    id: 3,
    title: "Campaña de Lanzamiento de Producto X",
    category: "Estrategia Digital",
    company: "Consultoría",
    shortDesc: "Diseño y ejecución de una campaña integral, utilizando análisis de datos para optimizar el retorno de la inversión.",
    tags: ["Estrategia Digital", "Google Ads", "Análisis de Datos", "KPIs"],
    image: "/1.jpg",
    fullDescription: [
      "Análisis de segmentación de audiencia y propuesta de valor.",
      "Monitoreo diario de KPIs (Key Performance Indicators) y optimización de presupuesto.",
    ],
    results: [
      "Aumento del 40% en visibilidad de marca.",
      "Generación de 10,000 leads en el primer mes.",
      "ROI del 300% en campañas publicitarias.",
    ],
  },
];