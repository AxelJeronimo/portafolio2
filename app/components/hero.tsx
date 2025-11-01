import React from 'react'
import { Briefcase, Award, Target, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section id="sobre-mi" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
          Sobre Mí
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto principal */}
          <div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Con formación en marketing digital y un enfoque estratégico, he dedicado mi carrera a impulsar el crecimiento de marcas mediante soluciones digitales efectivas y medibles.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Combino análisis de datos, creatividad e innovación para diseñar campañas que conectan con las personas y fortalecen la identidad de marca de forma sostenible.
            </p>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20 hover:border-blue-400 transition-all">
                <Briefcase className="text-blue-400 mb-2" size={32} />
                <div className="text-3xl font-bold text-blue-400">5+</div>
                <div className="text-sm text-gray-400">Proyectos Exitosos</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-amber-500/20 hover:border-amber-400 transition-all">
                <Award className="text-amber-400 mb-2" size={32} />
                <div className="text-3xl font-bold text-amber-400">5+</div>
                <div className="text-sm text-gray-400">Reconocimientos</div>
              </div>
            </div>
          </div>

          {/* Habilidades destacadas */}
          <div className="space-y-4">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20 hover:border-blue-400 transition-all">
              <Target className="text-blue-400 mb-3" size={28} />
              <h3 className="text-xl font-semibold mb-2">Estrategia Basada en Datos</h3>
              <p className="text-gray-400">
                Utilizo métricas y análisis para tomar decisiones informadas que optimizan los resultados de cada proyecto.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-amber-500/20 hover:border-amber-400 transition-all">
              <TrendingUp className="text-amber-400 mb-3" size={28} />
              <h3 className="text-xl font-semibold mb-2">Crecimiento Sostenible</h3>
              <p className="text-gray-400">
                Implemento estrategias que generan valor a corto plazo y consolidan el posicionamiento a largo plazo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
