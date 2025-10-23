// app/page.tsx o donde tengas tu homepage.tsx

import React from 'react';
import Link from 'next/link';

// Define el componente principal de la página
const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      
      {/* Sección de Encabezado/Título */}
      <header className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-4">
          🚀 Mi Proyecto Next.js
        </h1>
        <p className="text-xl text-gray-600">
          La base de mi aplicación moderna con React y TypeScript.
        </p>
      </header>
      
      {/* Sección de Contenido Principal */}
      <main className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
          Primeros Pasos
        </h2>
        
        {/* Lista de Características */}
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Componente definido con TypeScript (.tsx).</li>
          {/* LÍNEA CORREGIDA */}
          <li>Contiene un título principal (`h1`) y una sección de contenido (`main`).</li>
          <li>Listo para integrar la navegación.</li>
        </ul>
        
        {/* Llamada a la Acción (CTA) */}
        <div className="mt-6 pt-4 border-t text-center">
          <Link href="/about" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Ir a la página 'Acerca de' →
          </Link>
        </div>
      </main>

      {/* Pie de Página */}
      <footer className="mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Mi Aplicación. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default HomePage;