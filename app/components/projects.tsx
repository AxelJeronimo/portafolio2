import React from 'react'

export default function Projects() {
  const projects = [
    {
      title: "Campaña de Lanzamiento de Producto X",
      client: "Tech Innovators Inc.",
      category: "Lanzamiento de Producto",
      description:
        "Desarrollé y ejecuté una campaña integral de marketing digital para el lanzamiento del Producto X, logrando alta visibilidad y un sólido posicionamiento en su segmento objetivo.",
      metrics: [
        "Aumento del 40% en notoriedad de marca",
        "Generación de 10,000 leads en el primer mes",
        "ROI del 300% en campañas publicitarias"
      ]
    }
  ];

  return (
    <section id="proyectos" className="py-20 px-4 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
          Proyectos Destacados
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20 hover:border-blue-400 transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="inline-block px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300 mb-4">
                {project.category}
              </div>

              <h3 className="text-2xl font-bold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-amber-400 text-sm mb-3 font-medium">
                {project.client}
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.metrics.map((metric, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gradient-to-r from-blue-600/30 to-amber-500/30 rounded-full text-xs border border-blue-400/30 text-gray-200"
                  >
                    {metric}
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
