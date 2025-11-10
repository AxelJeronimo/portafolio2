import React from 'react';
import { X, Globe } from 'lucide-react'; 
// Importamos la estructura de datos que creaste
import { Project } from '../../data/projectsData'; 

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    // Fondo oscuro que cubre toda la pantalla
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      
      {/* Contenedor del contenido del Modal */}
      <div 
        className="bg-slate-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()} // Evita que el clic cierre el modal
      >
        {/* Botón de Cierre */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors z-10 p-2"
        >
          <X size={24} />
        </button>

        {/* Imagen y Contenido Detallado */}
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-80 object-cover object-top rounded-t-xl"
        />

        <div className="p-8">
          <h2 className="text-4xl font-bold text-amber-400 mb-2">{project.title}</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-white">Descripción</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {project.fullDescription.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-white">Resultados Clave</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {project.results.map((item, index) => (
                <li key={index} className="text-emerald-400 font-medium">{item}</li>
              ))}
            </ul>
          </div>
          
          {/* Enlace */}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-bold transition-colors mt-4"
            >
              <Globe size={20} className="mr-2" />
              Ver Proyecto o Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;