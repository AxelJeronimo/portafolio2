import React from 'react'

// 1. DEFINICIÓN DE INTERFAZ Y DATOS (Copiados de projectsData.ts)
// ******************************************************************
export interface Project {
  id: number;
  title: string;
  category: "Análisis y Desarrollo" | "Estrategia Digital"; 
  company: string;
  shortDesc: string; // Usaremos esto como la descripción principal en la ficha
  tags: string[]; // Usaremos esto para las etiquetas
  image: string; 
  fullDescription: string[]; 
  results: string[]; // Usaremos esto para las métricas
  liveUrl?: string; 
}

export const projects: Project[] = [
  // PROYECTO 1: Jambo (Análisis y Desarrollo)
  {
    id: 1,
    title: "Jambo - Diseño UI/UX - Web",
    category: "Análisis y Desarrollo",
    company: "Proyecto Freelance",
    shortDesc: "Diseño completo de Interfaz de Usuario y Experiencia (UI/UX) para una plataforma de servicios.",
    tags: ["UI/UX", "Figma", "Branding", "Diseño", "Canva", "ColorPallete"],
    image: "/1.jpg", 
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
// ******************************************************************


export default function Projects() {

  // La rejilla (grid) se ajusta a 3 columnas para mostrar los 3 proyectos
  return (
    <section id="proyectos" className="py-20 px-4 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
          Proyectos Destacados
        </h2>

        {/* 2. REEMPLAZAMOS md:grid-cols-2 por md:grid-cols-3 para mostrar los 3 proyectos en una fila (si el espacio lo permite) */}
        <div className="grid md:grid-cols-3 gap-8"> 
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-slate-800 rounded-xl p-6 border border-blue-500/20 hover:border-blue-400 transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              {/* Categoría (se usa el color de "Análisis y Desarrollo" por defecto para un look limpio) */}
              <div className="inline-block px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300 mb-4">
                {project.category}
              </div>

              <h3 className="text-2xl font-bold mb-2 text-white">
                {project.title}
              </h3>
              {/* Compañía/Cliente (usamos 'company') */}
              <p className="text-amber-400 text-sm mb-3 font-medium">
                {project.company}
              </p>
              {/* Descripción (usamos 'shortDesc') */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.shortDesc}
              </p>

              {/* Etiquetas/Tags (usamos 'tags' para las etiquetas de tecnología) */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-indigo-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Métricas/Resultados (usamos 'results' para los resultados clave) */}
              <div className="flex flex-wrap gap-2">
                {project.results.map((result, i) => (
                  <span
                    key={i}
                    // Usamos un estilo que resalte los resultados (tus antiguas métricas)
                    className="px-3 py-1 bg-gradient-to-r from-emerald-600/30 to-blue-500/30 rounded-full text-xs border border-emerald-400/30 text-gray-200"
                  >
                    {result.split(":")[0]} {/* Solo mostramos el primer fragmento si hay dos puntos (:) */}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
