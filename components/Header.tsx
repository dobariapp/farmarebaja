'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  MagnifyingGlassIcon, 
  UserCircleIcon, 
  ShoppingCartIcon 
} from '@heroicons/react/24/outline';
import { CategoryBar } from './CategoryBar';
import { CartDrawer } from './CartDrawer';
import { useCart } from '@/lib/CartContext';

export function Header() {
  const { totalItems, openCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/buscar?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <>
      <header className="shadow-md">
        {/* SECCIÓN PRINCIPAL (Blanca) */}
        <div className="bg-white py-4 px-6">
          <div className="container mx-auto flex flex-wrap justify-between items-center">
            {/* 1. Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image 
                src="/logo.png" 
                alt="Logo Farma Rebajas" 
                width={200}
                height={50}
                priority
              />
            </Link>

            {/* 2. Barra de Búsqueda - UX Mejorado para Móvil */}
            <div className="order-3 mt-4 w-full md:order-none md:mt-0 md:flex-grow md:max-w-xl md:mx-4">
              <form onSubmit={handleSearch} className="relative w-full">
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar producto..." 
                  className="w-full py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-light text-sm"
                />
                <button type="submit" className="absolute right-0 top-0 mt-2 mr-3 text-gray-500">
                  <MagnifyingGlassIcon className="h-6 w-6" />
                </button>
              </form>
            </div>

            {/* 3. Íconos de Usuario y Carrito */}
            <div className="flex items-center space-x-4">
              <Link href="/login" className="flex items-center text-gray-700 hover:text-brand-dark">
                <UserCircleIcon className="h-7 w-7" />
                <span className="hidden lg:inline ml-2">Mi Cuenta</span>
              </Link>
              
              {/* Botón del carrito con badge */}
              <button 
                onClick={openCart}
                className="flex items-center text-gray-700 hover:text-brand-dark relative"
              >
                <ShoppingCartIcon className="h-7 w-7" />
                <span className="hidden lg:inline ml-2">Carrito</span>
                
                {/* Badge con contador */}
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-brand-red text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* SECCIÓN DE NAVEGACIÓN (Azul) */}
        <nav className="bg-brand-dark text-white">
          <div className="container mx-auto flex items-center">
            <CategoryBar />
            
            <div className="hidden lg:flex items-center ml-6 space-x-1">
              <Link href="/categoria/dias-del-bebe" className="px-4 py-3 hover:bg-brand-light transition-colors">DÍAS DEL BEBÉ</Link>
              <Link href="/categoria/medicinas" className="px-4 py-3 hover:bg-brand-light transition-colors">MEDICINAS</Link>
              <Link href="/categoria/tratamientos" className="px-4 py-3 hover:bg-brand-light transition-colors">TRATAMIENTOS Y SALUD</Link>
              <Link href="/categoria/cuidado-personal" className="px-4 py-3 hover:bg-brand-light transition-colors">CUIDADO PERSONAL</Link>
              <Link href="/categoria/infantil" className="px-4 py-3 hover:bg-brand-light transition-colors">CUIDADO INFANTIL</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* CartDrawer - Se muestra cuando isOpen es true */}
      <CartDrawer />
    </>
  );
}