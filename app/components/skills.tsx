import React from 'react'

export default function Skills() {
  const skills = [
    { name: "Business Intelligence", level: 95 },
    { name: "Python / Data Science", level: 90 },
    { name: "SQL / Bases de Datos", level: 88 },
    { name: "Microsoft Excel / BI", level: 85 },
    { name: "Liderazgo y Comunicación", level: 92 },
    { name: "Marketing Digital", level: 87 }
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
                <span className="text-emerald-400 font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 via-amber-500 to-emerald-400"
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
