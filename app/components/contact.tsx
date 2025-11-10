import React from 'react'
import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-20 px-4 bg-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
          ¿Listo para impulsar el crecimiento con datos?
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Conectemos para discutir cómo la <span className="font-bold">Inteligencia de Negocios</span> puede transformar tu estrategia y obtener resultados medibles.
        </p>

        {/* Redes de contacto */}
        <div className="flex flex-wrap gap-6 justify-center mb-12">
          <a
            href="mailto:axel.alvarenga2025@hilasal.superate.org.sv"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-blue-500/20 hover:border-blue-400 transition-all"
          >
            <Mail size={20} />
            axel.alvarenga2025@hilasal.superate.org.sv
          </a>

          <a
            href="#"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-amber-500/20 hover:border-amber-400 transition-all"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>

        {/* Llamado a la acción */}
        <div className="bg-gradient-to-r from-blue-600/20 to-amber-500/20 backdrop-blur-sm rounded-lg p-8 border border-blue-500/20 hover:border-blue-400 transition-all">
          <h3 className="text-2xl font-bold mb-4 text-white">Oportunidades & Colaboración</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Pasantías/oportunidades donde aplicar mis habilidades técnicas y analíticas (Python, Excel, BI)
            para desarrollar soluciones sólidas y enfocadas en métricas.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full hover:shadow-lg hover:shadow-blue-500/40 transition-all font-semibold">
            Enviar un Mensaje
          </button>
        </div>
      </div>
    </section>
  )
}
