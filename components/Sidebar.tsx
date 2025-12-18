import Link from 'next/link';
import { TagIcon } from '@heroicons/react/24/outline';

// Las mismas categorías que en CategoryBar
const categories = [
  { name: 'Días del Bebé', href: '/categoria/dias-del-bebe' },
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
  { name: 'Ofertas', href: '/categoria/ofertas', isSpecial: true },
];

export function Sidebar() {
  return (
    <aside className="bg-white p-4 rounded-lg shadow-lg sticky top-4">
      <h3 className="text-xl font-bold mb-4 text-brand-dark">
        Categorías
      </h3>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat.name}>
            <Link 
              href={cat.href} 
              className={`
                flex items-center space-x-3 p-2 rounded-md transition-colors 
                hover:bg-gray-100 hover:text-brand-light
                ${cat.isSpecial ? 'text-brand-red font-bold' : 'text-gray-700'}
              `}
            >
              <TagIcon className="h-5 w-5 flex-shrink-0" />
              <span className="text-sm">{cat.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}