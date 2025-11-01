'use client';
import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Mail,
  Linkedin,
  Twitter,
  Github,
  ChevronDown,
} from 'lucide-react';
import Hero from './components/hero';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-900/95 backdrop-blur-lg shadow-md border-b border-slate-700/40'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
              AXL
            </div>

            <div className="hidden md:flex space-x-8">
              {['inicio', 'sobre-mi', 'proyectos', 'habilidades', 'contacto'].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize hover:text-amber-400 transition-colors ${
                      activeSection === item ? 'text-amber-400' : 'text-gray-300'
                    }`}
                  >
                    {item.replace('-', ' ')}
                  </button>
                )
              )}
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-lg">
            <div className="px-4 py-4 space-y-3">
              {['inicio', 'sobre-mi', 'proyectos', 'habilidades', 'contacto'].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left capitalize hover:text-amber-400 transition-colors py-2"
                  >
                    {item.replace('-', ' ')}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="min-h-screen flex items-center justify-center px-4 pt-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-amber-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <img
                  src="/1.jpg"
                  alt="Axel Alvarenga"
                  className="w-28 h-28 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-300 via-amber-300 to-blue-400 bg-clip-text text-transparent">
            Axel Alvarenga
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Estratega en Marketing Digital
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Impulso el crecimiento de marcas mediante estrategias digitales
            integrales, combinando análisis de datos, innovación y enfoque en la
            experiencia del cliente.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('contacto')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full hover:shadow-lg hover:shadow-blue-600/40 transition-all font-medium"
            >
              Contáctame
            </button>
            <button
              onClick={() => scrollToSection('proyectos')}
              className="px-8 py-3 border border-blue-400 rounded-full hover:bg-blue-400/10 transition-all font-medium"
            >
              Ver proyectos
            </button>
          </div>
          <ChevronDown
            className="mx-auto animate-bounce text-amber-400"
            size={32}
          />
        </div>
      </section>

      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
