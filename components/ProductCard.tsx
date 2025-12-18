'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/CartContext';

type ProductCardProps = {
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  oldPrice?: number;
  discount?: number;
  badge?: 'nuevo' | 'oferta' | 'agotado';
  stock?: number;
  slug?: string;
  id?: number;
};

export function ProductCard({ 
  name, 
  category, 
  price, 
  imageUrl,
  oldPrice,
  discount,
  badge,
  stock,
  slug = '#',
  id = 0
}: ProductCardProps) {
  const { addItem } = useCart();
  const isLowStock = stock !== undefined && stock > 0 && stock < 5;
  const isOutOfStock = stock !== undefined && stock === 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isOutOfStock) {
      addItem({
        id,
        name,
        price,
        imageUrl,
        slug,
      });
    }
  };

  return (
    <Link 
      href={slug}
      className="block bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 relative group"
    >
      {/* Badges superiores */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-2">
        {discount && discount > 0 && (
          <div className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            {discount}% OFF
          </div>
        )}
        
        {badge === 'nuevo' && (
          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            NUEVO
          </div>
        )}
        {badge === 'oferta' && (
          <div className="bg-brand-red text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            OFERTA
          </div>
        )}
        {badge === 'agotado' && (
          <div className="bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            AGOTADO
          </div>
        )}
      </div>

      {/* Imagen del producto */}
      <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center p-4">
        <Image 
          src={imageUrl} 
          alt={name} 
          width={200}
          height={200}
          className="object-contain max-h-full"
        />
        
        {isOutOfStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Agotado</span>
          </div>
        )}
      </div>

      {/* Información del producto */}
      <div className="p-4">
        <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
          {category}
        </p>

        <h3 className="text-sm font-semibold text-gray-800 mb-3 line-clamp-2 min-h-[40px] group-hover:text-brand-light transition-colors">
          {name}
        </h3>

        {/* Precio */}
        <div className="mb-3">
          {oldPrice && oldPrice > price ? (
            <div>
              <p className="text-xs text-gray-500 line-through mb-1">
                ${oldPrice.toFixed(2)}
              </p>
              <p className="text-2xl font-bold text-brand-light">
                ${price.toFixed(2)}
              </p>
            </div>
          ) : (
            <p className="text-2xl font-bold text-brand-light">
              ${price.toFixed(2)}
            </p>
          )}
        </div>

        {isLowStock && (
          <p className="text-xs text-orange-600 font-semibold mb-3">
            ⚠️ ¡Solo quedan {stock} unidades!
          </p>
        )}

        {/* Botón de añadir al carrito */}
        <button 
          onClick={handleAddToCart}
          className={`w-full py-2 px-4 rounded-lg font-bold text-sm transition-colors ${
            isOutOfStock
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-brand-light text-white hover:bg-brand-dark'
          }`}
          disabled={isOutOfStock}
        >
          {isOutOfStock ? 'Agotado' : 'Añadir al Carrito'}
        </button>
      </div>
    </Link>
  );
}