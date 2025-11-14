import React from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  company: string;
  shortDesc: string;
  tags: string[];
  image: string;
  fullDescription: string[];
  results: string[];
  liveUrl?: string;
}

const projects: Project[] = [
  // PROYECTO 1: Jambo (Análisis y Desarrollo)
  {
    id: 1,
    title: "Jambo - Diseño UI/UX - Web",
    category: "Análisis y Desarrollo",
    company: "Proyecto Freelance",
    shortDesc:
      "Diseño completo de Interfaz de Usuario y Experiencia (UI/UX) para una plataforma de servicios.",
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
    liveUrl: "https://github.com/javo-zy/jambo-app.git",
  },

  // PROYECTO 2: Dyna Tours (Análisis y Desarrollo)
  {
    id: 2,
    title: "Dina Tours - Web Front-end",
    category: "Análisis y Desarrollo",
    company: "Proyecto Personal",
    shortDesc:
      "Desarrollo Front-end interactivo y optimización de rendimiento para un sitio de viajes (uso de código JavaScript).",
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
    liveUrl: "https://dinatours.vercel.app",
  },

  // PROYECTO 3: Campaña (Estrategia Digital)
  {
    id: 3,
    title: "Campaña de Lanzamiento de Producto de B&C",
    category: "Estrategia Digital",
    company: "Bread&Chiken",
    shortDesc:
      "Diseño y ejecución de una campaña integral, utilizando análisis de datos para optimizar el retorno de la inversión.",
    tags: ["Estrategia Digital", "Google Ads", "Análisis de Datos", "KPIs"],
    image: "/1.jpg",
    fullDescription: [
      "Análisis de necesidades y generación de soluciones.",
      "Diseño agradable con funcionalidades adaptables al mercado.",
    ],
    results: [
      "Experiencia medianamente disfrutable",
      "Adquisición de habilidades Blandas",
      "Adquisición de habilidades de Power Apps.",
    ],
  },
  {
    id: 4,
    title: "Desarollo de proyecto FOURTI",
    category: "Desarrollo de StarUp",
    company: "Proyecto Freelance",
    shortDesc:
      "Creación y desarrollo de bases de proyecto StarUP, utilizando tecnologias de Microsoft.",
    tags: ["Desarrollo Digital", "Figma", "Power Apps", "Canva"],
    image: "/1.jpg",
    fullDescription: [
      "Análisis de segmentación de audiencia y propuesta de valor.",
      "Monitoreo diario de KPIs (Key Performance Indicators) y optimización de presupuesto.",
    ],
    results: [
      "Aumento del 40% en visibilidad de marca.",
      "Generación de %100 ventas en el primer día.",
      "ROI del 120% en campañas publicitarias.",
    ],
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 px-4 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
          Proyectos Destacados
        </h2>

        {/* Rejilla ajustada a 3 columnas */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 rounded-xl p-6 border border-blue-500/20 hover:border-blue-400 transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              {/* Categoría */}
              <div className="inline-block px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300 mb-4">
                {project.category}
              </div>

              {/* Título */}
              <h3 className="text-2xl font-bold mb-2 text-white">
                {project.title}
              </h3>

              {/* Empresa */}
              <p className="text-amber-400 text-sm mb-3 font-medium">
                {project.company}
              </p>

              {/* Descripción corta */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.shortDesc}
              </p>

              {/* Etiquetas */}
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

              {/* Resultados / Métricas */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.results.map((result, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gradient-to-r from-emerald-600/30 to-blue-500/30 rounded-full text-xs border border-emerald-400/30 text-gray-200"
                  >
                    {result}
                  </span>
                ))}
              </div>

              {/* Enlace opcional */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm text-blue-400 hover:text-amber-400 transition-colors"
                >
                  Ver proyecto →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
