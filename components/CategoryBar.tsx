'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

// ¡Esta lista de categorías es perfecta!
const categories = [
  { name: 'Días del Bebé', href: '/categoria/bebes' },
  { name: 'Medicinas', href: '/categoria/medicinas' },
  { name: 'Tratamientos y Salud', href: '/categoria/tratamientos' },
  { name: 'Cuidado Personal', href: '/categoria/cuidado-personal' },
  { name: 'Cuidado Infantil', href: '/categoria/infantil' },
  { name: 'Vitaminas y Suplementos', href: '/categoria/vitaminas' },
  { name: 'Belleza y Cuidado de la Piel', href: '/categoria/belleza' },
  { name: 'Equipos y Accesorios de Salud', href: '/categoria/equipos' },
  { name: 'Nutrición y Fitness', href: '/categoria/nutricion' },
  { name: 'Cuidado Sexual', href: '/categoria/sexual' },
  { name: 'Minimarket', href: '/categoria/minimarket' },
  { name: 'Hogar', href: '/categoria/hogar' },
];

export function CategoryBar() {
  const [isOpen, setIsOpen] = useState(false);

  // 1. Quitamos el 'bg-brand-light' y el 'container'.
  // 'relative' es necesario para posicionar el menú.
  return (
    <div className="relative"> 
      {/* Botón principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        // 2. Le damos el color de texto 'blanco' que hereda del Header.
        className="flex items-center gap-2 px-6 py-3 text-white font-semibold hover:bg-brand-dark transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        TODAS LAS CATEGORÍAS
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Menú desplegable hacia abajo */}
      {isOpen && (
        <>
          {/* Overlay para cerrar al hacer clic fuera */}
          <div 
            className="fixed inset-0 z-30"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menú */}
          <div 
            className="absolute left-0 top-full bg-white shadow-xl z-40 w-80 max-h-96 overflow-y-auto"
            onMouseLeave={() => setIsOpen(false)}
          >
            <ul className="py-2">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <Link
                    href={cat.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand-light transition-colors border-b border-gray-100"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}