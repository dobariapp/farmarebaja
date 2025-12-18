'use client';

import { useCart } from '@/lib/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { XMarkIcon, ShoppingBagIcon, TrashIcon } from '@heroicons/react/24/outline';

export function CartDrawer() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, isOpen, closeCart } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay oscuro */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={closeCart}
      />

      {/* Panel lateral del carrito */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">
        
        {/* Header del carrito */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <ShoppingBagIcon className="w-6 h-6 text-brand-light" />
            <h2 className="text-xl font-bold text-gray-800">
              Mi Carrito ({totalItems})
            </h2>
          </div>
          <button 
            onClick={closeCart}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <XMarkIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Contenido del carrito */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            // Carrito vacío
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBagIcon className="w-24 h-24 text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Tu carrito está vacío
              </h3>
              <p className="text-gray-500 mb-6">
                Agrega productos para comenzar tu compra
              </p>
              <button
                onClick={closeCart}
                className="bg-brand-light text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors"
              >
                Continuar Comprando
              </button>
            </div>
          ) : (
            // Lista de productos
            <div className="space-y-4">
              {items.map((item) => (
                <div 
                  key={item.id}
                  className="flex gap-4 bg-gray-50 p-3 rounded-lg"
                >
                  {/* Imagen del producto */}
                  <Link href={item.slug} onClick={closeCart}>
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                  </Link>

                  {/* Información del producto */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <Link 
                        href={item.slug} 
                        onClick={closeCart}
                        className="font-semibold text-gray-800 hover:text-brand-light line-clamp-2 text-sm"
                      >
                        {item.name}
                      </Link>
                      <p className="text-lg font-bold text-brand-light mt-1">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    {/* Controles de cantidad */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 border border-gray-300 rounded hover:bg-gray-100 transition-colors flex items-center justify-center text-sm font-bold"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 border border-gray-300 rounded hover:bg-gray-100 transition-colors flex items-center justify-center text-sm font-bold"
                        >
                          +
                        </button>
                      </div>

                      {/* Botón eliminar */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors p-1"
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer del carrito (solo si hay productos) */}
        {items.length > 0 && (
          <div className="border-t p-4 space-y-4">
            {/* Subtotal */}
            <div className="flex justify-between items-center text-lg">
              <span className="font-semibold text-gray-700">Subtotal:</span>
              <span className="font-bold text-brand-dark text-2xl">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            {/* Botones de acción */}
            <div className="space-y-2">
                 <Link 
                    href="/carrito" 
                    onClick={closeCart} // Esto cierra el panel lateral al navegar
                    className="block w-full bg-brand-light text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-brand-dark transition-colors mb-3"
                  >
                    Proceder al Pago
                  </Link>
              <button 
                onClick={closeCart}
                className="w-full bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Continuar Comprando
              </button>
            </div>

            {/* Mensaje de envío */}
            <p className="text-xs text-center text-gray-500">
              Envío gratis en compras mayores a $10
            </p>
          </div>
        )}
      </div>
    </>
  );
}