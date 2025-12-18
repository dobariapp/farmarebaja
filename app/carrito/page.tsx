'use client';

import { useCart } from '@/lib/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { TrashIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  // Si el carrito está vacío
  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Tu carrito está vacío</h1>
        <p className="text-gray-600 mb-8">Parece que aún no has añadido productos a tu carrito.</p>
        <Link 
          href="/" 
          className="bg-brand-light text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-dark transition-colors"
        >
          Ir a comprar
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Mi Carrito ({totalItems})</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LISTA DE PRODUCTOS */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4">
                <div className="relative w-24 h-24 flex-shrink-0 border rounded-lg overflow-hidden bg-gray-50">
                  <Image 
                    src={item.imageUrl} 
                    alt={item.name} 
                    fill 
                    className="object-contain p-2" 
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 leading-tight text-sm md:text-base">{item.name}</h3>
                  <p className="text-brand-light font-bold mt-1">${item.price.toFixed(2)}</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center border rounded-lg bg-white">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 hover:bg-gray-100 font-bold text-gray-600"
                    >-</button>
                    <span className="px-2 font-semibold min-w-[20px] text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 hover:bg-gray-100 font-bold text-gray-600"
                    >+</button>
                  </div>
                  
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors"
                    title="Eliminar producto"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}

            <Link href="/" className="inline-flex items-center gap-2 text-brand-light font-semibold hover:underline mt-4">
              <ArrowLeftIcon className="w-4 h-4" />
              Continuar comprando
            </Link>
          </div>

          {/* RESUMEN DE COMPRA */}
          <div className="bg-white p-6 rounded-xl shadow-lg h-fit border-t-4 border-brand-light">
            <h2 className="text-xl font-bold mb-6 text-gray-800">Resumen del pedido</h2>
            
            <div className="space-y-4 border-b pb-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600 text-sm italic">
                <span>Envío</span>
                <span className="text-green-600 font-medium">¡GRATIS!</span>
              </div>
            </div>

            <div className="flex justify-between items-center py-6">
              <span className="text-lg font-bold text-gray-800">Total a pagar</span>
              <span className="text-2xl font-black text-brand-dark">${totalPrice.toFixed(2)}</span>
            </div>

            <button className="w-full bg-brand-light text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-dark shadow-md transition-all active:scale-95">
              Proceder al Pago
            </button>
            
            <p className="text-xs text-gray-400 text-center mt-4 uppercase tracking-tighter">
              Compra segura con encriptación SSL
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}