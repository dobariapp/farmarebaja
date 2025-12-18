'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppWidget() {
  const phoneNumber = "593991594865"; // ← Cambia por el número real de la farmacia
  const message = "Hola Farma Rebajas, necesito ayuda con un pedido.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      
      {/* Tooltip opcional que aparece al pasar el mouse */}
      <span className="absolute right-16 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-md text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        ¿Necesitas ayuda?
      </span>
    </a>
  );
}