import React from 'react'
import { Briefcase, Award, Target, TrendingUp, Rocket } from 'lucide-react';

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
            <p className="max-w-3xl mx-auto text-gray-400 text-lg mb-4">
              Soy un estudiante <span className="font-bold">Bilingüe</span> con una base técnica sólida y
              validada por certificaciones de <span className="font-bold">Certiport</span> en <span className="font-bold">Python</span> y
              <span className="font-bold">Microsoft Excel</span>. Mi pasión es la <span className="font-bold">programación</span> y el <span className="font-bold">análisis
                de datos</span>, enfocándome en transformar datos complejos en
              información de negocio estratégico.
            </p>

            <p className="max-w-3xl mx-auto text-gray-400 text-lg mb-10">
              Más allá de mis estudios, he desarrollado experiencia práctica en
              <span className="font-bold">liderazgo</span> y <span className="font-bold">comunicación</span> como voluntario en <span className="font-bold">Glasswing
                International</span> y mediante mi participación en el <span className="font-bold">MUN ESEN</span>
              (Oratoria y Debate). Busco aplicar estas habilidades híbridas para
              impulsar resultados medibles en equipos enfocados en datos.
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
              <h3 className="text-xl font-semibold mb-2">Business Intelligence (BI)</h3>
              <p className="text-gray-400">
                Utilizo Python, Power BI y Excel para modelar datos complejos y convertirlos en información clave que optimiza la toma de decisiones.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-emerald-500/20 hover:border-emerald-400 transition-all">
              <Rocket className="text-emerald-400 mb-3" size={28} />
              <h3 className="text-xl font-semibold mb-2">Desarrollo (Python/JS)</h3>
              <p className="text-gray-400">
                Aplico conocimientos de programación y desarrollo web para crear soluciones funcionales y automatizar procesos analíticos.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-amber-500/20 hover:border-amber-400 transition-all">
              <TrendingUp className="text-amber-400 mb-3" size={28} />
              <h3 className="text-xl font-semibold mb-2">Liderazgo y Oratoria</h3>
              <p className="text-gray-400">
                Experiencia práctica en trabajo en equipo, comunicación asertiva y coordinación de equipos (Voluntariado y Debate).
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
