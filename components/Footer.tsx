import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon 
} from '@heroicons/react/24/outline';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-6 py-12">
        
        {/* Sección Superior: 4 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Columna 1: Logo e Info de Contacto */}
          <div>
            <Link href="/" className="mb-4 inline-block">
              <Image 
                src="/logo.png" 
                alt="Logo Farma Rebajas" 
                width={180} 
                height={45}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 text-sm mb-4">Salud a tu alcance.</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Av. Principal 123, Guayaquil, Ecuador</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+59342123456" className="hover:text-white hover:underline">
                  (04) 212-3456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <EnvelopeIcon className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@farmarebajas.com.ec" className="hover:text-white hover:underline">
                  info@farmarebajas.com.ec
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 2: Sobre Nosotros */}
          <div>
            <h4 className="text-lg font-bold mb-4">Farma Rebajas</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/quienes-somos" className="hover:text-white hover:underline transition-colors">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="/nuestras-tiendas" className="hover:text-white hover:underline transition-colors">
                  Nuestras Tiendas
                </Link>
              </li>
              <li>
                <Link href="/trabaja-con-nosotros" className="hover:text-white hover:underline transition-colors">
                  Trabaja con Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Servicio al Cliente */}
          <div>
            <h4 className="text-lg font-bold mb-4">Servicio al Cliente</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/contacto" className="hover:text-white hover:underline transition-colors">
                  Contáctanos
                </Link>
              </li>
              <li>
                <Link href="/preguntas-frecuentes" className="hover:text-white hover:underline transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/politica-de-devoluciones" className="hover:text-white hover:underline transition-colors">
                  Política de Devoluciones
                </Link>
              </li>
              <li>
                <Link href="/terminos-y-condiciones" className="hover:text-white hover:underline transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes Sociales y Métodos de Pago */}
          <div>
            <h4 className="text-lg font-bold mb-4">Síguenos</h4>
            <div className="flex space-x-3 mb-6">
              <a 
                href="https://www.facebook.com/farmarebajas" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/farmarebajasec" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.youtube.com/@farmarebajas" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>

            {/* ← AQUÍ ESTÁN LOS MÉTODOS DE PAGO */}
            <div>
              <p className="text-sm text-gray-400 mb-3">Métodos de pago</p>
              <div className="flex flex-wrap gap-2">
                <div className="bg-white rounded px-3 py-1.5 text-xs font-semibold text-gray-800">
                  Visa
                </div>
                <div className="bg-white rounded px-3 py-1.5 text-xs font-semibold text-gray-800">
                  Mastercard
                </div>
                <div className="bg-white rounded px-3 py-1.5 text-xs font-semibold text-gray-800">
                  Efectivo
                </div>
                <div className="bg-white rounded px-3 py-1.5 text-xs font-semibold text-gray-800">
                  Transferencia
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección Inferior: Copyright */}
        <div className="border-t border-white/10 mt-10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Farma Rebajas. Todos los derechos reservados.</p>
          <p className="mt-1">Desarrollado con ❤️ en Ecuador</p>
        </div>
      </div>
    </footer>
  );
}