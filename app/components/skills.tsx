import React from 'react'

export default function Skills() {
  const skills = [
    { name: "Estrategia Digital", level: 95 },
    { name: "Growth Marketing", level: 90 },
    { name: "Brand Strategy", level: 88 },
    { name: "Data Analytics", level: 85 },
    { name: "SEO / SEM", level: 92 },
    { name: "Content Marketing", level: 87 }
  ];

  return (
    <section id="habilidades" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
          Habilidades
        </h2>

        <div className="space-y-6">
          {skills.map((skill, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300 font-medium">{skill.name}</span>
                <span className="text-amber-400 font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-amber-400 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
