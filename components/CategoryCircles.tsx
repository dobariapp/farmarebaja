'use client';

import Link from 'next/link';
import { 
  Heart, 
  Thermometer, 
  Baby, 
  PillBottle, 
  Sparkles, 
  User,
  Activity,
  Droplet 
} from 'lucide-react';

// Categorías con iconos y gradientes
const categories = [
  { 
    name: 'Hipertensión', 
    href: '/categoria/hipertension',
    icon: Heart,
    gradient: 'from-pink-500 to-rose-500'
  },
  { 
    name: 'Tos y Gripe', 
    href: '/categoria/tos-gripe',
    icon: Thermometer,
    gradient: 'from-cyan-500 to-blue-500'
  },
  { 
    name: 'Cuidado Infantil', 
    href: '/categoria/infantil',
    icon: Baby,
    gradient: 'from-orange-500 to-amber-500'
  },
  { 
    name: 'Digestivos y Hepatoprotectores', 
    href: '/categoria/digestivos',
    icon: Activity,
    gradient: 'from-purple-500 to-fuchsia-500'
  },
  { 
    name: 'Piel y Belleza', 
    href: '/categoria/belleza',
    icon: Sparkles,
    gradient: 'from-rose-500 to-pink-500'
  },
  { 
    name: 'Cuidado Personal', 
    href: '/categoria/cuidado-personal',
    icon: User,
    gradient: 'from-violet-500 to-purple-500'
  },
  { 
    name: 'Vitaminas', 
    href: '/categoria/vitaminas',
    icon: PillBottle,
    gradient: 'from-green-500 to-emerald-500'
  },
  { 
    name: 'Hidratación', 
    href: '/categoria/hidratacion',
    icon: Droplet,
    gradient: 'from-blue-500 to-cyan-500'
  },
];

export function CategoryCircles() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
          Categorías Recomendadas
        </h2>

        {/* Grid de categorías */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                href={category.href}
                className="flex flex-col items-center group"
              >
                {/* Círculo con gradiente */}
                <div className="relative mb-3">
                  {/* Sombra del círculo */}
                  <div className="absolute inset-0 bg-gray-300 rounded-full blur-md opacity-40 scale-90" />
                  
                  {/* Círculo exterior blanco */}
                  <div className="relative bg-white rounded-full p-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {/* Círculo interior con gradiente */}
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${category.gradient} flex items-center justify-center`}>
                      <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Nombre de la categoría */}
                <span className="text-sm text-center text-gray-700 font-medium group-hover:text-brand-light transition-colors">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}