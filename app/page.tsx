import { Carousel } from '@/components/Carousel';
import { CategoryCircles } from '@/components/CategoryCircles'; 
import { ProductCarousel } from '@/components/ProductCarousel';
import Image from 'next/image';
import Link from 'next/link';

const mockProducts = [
  // MEDICINAS
  { 
    id: 1, 
    name: 'Paracetamol 500mg (Caja x 20)', 
    category: 'Medicinas', 
    price: 2.50, 
    oldPrice: 3.00,
    discount: 17,
    stock: 45,
    imageUrl: 'https://placehold.co/400x400/e3f2fd/1976d2?text=💊+Paracetamol',
    slug: '/producto/paracetamol-500mg'
  },
  { 
    id: 4, 
    name: 'Ibuprofeno 400mg', 
    category: 'Medicinas', 
    price: 4.20,
    oldPrice: 5.00,
    discount: 16,
    stock: 3,
    imageUrl: 'https://placehold.co/400x400/e3f2fd/1976d2?text=💊+Ibuprofeno',
    slug: '/producto/ibuprofeno-400mg'
  },
  { 
    id: 8, 
    name: 'Amoxicilina 500mg', 
    category: 'Medicinas', 
    price: 9.30,
    oldPrice: 11.00,
    discount: 15,
    stock: 25,
    imageUrl: 'https://placehold.co/400x400/e3f2fd/1976d2?text=💊+Amoxicilina',
    slug: '/producto/amoxicilina-500mg'
  },
  { 
    id: 11, 
    name: 'Aspirina 500mg', 
    category: 'Medicinas', 
    price: 3.50,
    oldPrice: 4.20,
    discount: 17,
    badge: 'oferta' as const,
    stock: 60,
    imageUrl: 'https://placehold.co/400x400/e3f2fd/1976d2?text=💊+Aspirina',
    slug: '/producto/aspirina-500mg'
  },
  { 
    id: 12, 
    name: 'Naproxeno 250mg', 
    category: 'Medicinas', 
    price: 5.80,
    oldPrice: 7.00,
    discount: 17,
    stock: 30,
    imageUrl: 'https://placehold.co/400x400/e3f2fd/1976d2?text=💊+Naproxeno',
    slug: '/producto/naproxeno-250mg'
  },
  { 
    id: 13, 
    name: 'Loratadina 10mg', 
    category: 'Medicinas', 
    price: 3.20,
    oldPrice: 4.00,
    discount: 20,
    badge: 'nuevo' as const,
    stock: 50,
    imageUrl: 'https://placehold.co/400x400/e3f2fd/1976d2?text=💊+Loratadina',
    slug: '/producto/loratadina-10mg'
  },
  { 
    id: 14, 
    name: 'Omeprazol 20mg', 
    category: 'Medicinas', 
    price: 6.50,
    oldPrice: 8.00,
    discount: 19,
    stock: 40,
    imageUrl: 'https://placehold.co/400x400/e3f2fd/1976d2?text=💊+Omeprazol',
    slug: '/producto/omeprazol-20mg'
  },
  { 
    id: 15, 
    name: 'Losartán 50mg', 
    category: 'Medicinas', 
    price: 8.90,
    oldPrice: 11.00,
    discount: 19,
    stock: 35,
    imageUrl: 'https://placehold.co/400x400/e3f2fd/1976d2?text=💊+Losartán',
    slug: '/producto/losartan-50mg'
  },
  { 
    id: 16, 
    name: 'Metformina 850mg', 
    category: 'Medicinas', 
    price: 7.20,
    oldPrice: 9.00,
    discount: 20,
    stock: 28,
    imageUrl: 'https://placehold.co/400x400/e3f2fd/1976d2?text=💊+Metformina',
    slug: '/producto/metformina-850mg'
  },
  { 
    id: 17, 
    name: 'Diclofenaco Gel', 
    category: 'Medicinas', 
    price: 8.90,
    oldPrice: 11.00,
    discount: 19,
    badge: 'oferta' as const,
    stock: 22,
    imageUrl: 'https://placehold.co/400x400/e3f2fd/1976d2?text=💊+Diclofenaco',
    slug: '/producto/diclofenaco-gel'
  },

  // VITAMINAS
  { 
    id: 2, 
    name: 'Vitamina C 1000mg', 
    category: 'Vitaminas', 
    price: 15.00,
    oldPrice: 18.00,
    discount: 17,
    badge: 'nuevo' as const,
    stock: 30,
    imageUrl: 'https://placehold.co/400x400/fff3e0/f57c00?text=🍊+Vitamina+C',
    slug: '/producto/vitamina-c-1000mg'
  },
  { 
    id: 18, 
    name: 'Complejo B', 
    category: 'Vitaminas', 
    price: 12.50,
    oldPrice: 15.00,
    discount: 17,
    stock: 18,
    imageUrl: 'https://placehold.co/400x400/fff3e0/f57c00?text=💊+Complejo+B',
    slug: '/producto/complejo-b'
  },
  { 
    id: 19, 
    name: 'Omega 3', 
    category: 'Vitaminas', 
    price: 22.00,
    oldPrice: 26.00,
    discount: 15,
    stock: 40,
    imageUrl: 'https://placehold.co/400x400/fff3e0/f57c00?text=🐟+Omega+3',
    slug: '/producto/omega-3'
  },
  { 
    id: 20, 
    name: 'Vitamina D3 2000 UI', 
    category: 'Vitaminas', 
    price: 16.50,
    oldPrice: 20.00,
    discount: 18,
    badge: 'oferta' as const,
    stock: 25,
    imageUrl: 'https://placehold.co/400x400/fff3e0/f57c00?text=☀️+Vitamina+D3',
    slug: '/producto/vitamina-d3'
  },
  { 
    id: 21, 
    name: 'Multivitamínico Centrum', 
    category: 'Vitaminas', 
    price: 28.00,
    oldPrice: 35.00,
    discount: 20,
    stock: 15,
    imageUrl: 'https://placehold.co/400x400/fff3e0/f57c00?text=💊+Centrum',
    slug: '/producto/centrum'
  },
  { 
    id: 22, 
    name: 'Calcio + Vitamina D', 
    category: 'Vitaminas', 
    price: 14.90,
    oldPrice: 18.00,
    discount: 17,
    stock: 32,
    imageUrl: 'https://placehold.co/400x400/fff3e0/f57c00?text=🦴+Calcio',
    slug: '/producto/calcio-vitamina-d'
  },
  { 
    id: 23, 
    name: 'Hierro + Ácido Fólico', 
    category: 'Vitaminas', 
    price: 11.50,
    oldPrice: 14.00,
    discount: 18,
    stock: 28,
    imageUrl: 'https://placehold.co/400x400/fff3e0/f57c00?text=💊+Hierro',
    slug: '/producto/hierro-acido-folico'
  },
  { 
    id: 24, 
    name: 'Vitamina E 400 UI', 
    category: 'Vitaminas', 
    price: 13.80,
    oldPrice: 17.00,
    discount: 19,
    badge: 'nuevo' as const,
    stock: 20,
    imageUrl: 'https://placehold.co/400x400/fff3e0/f57c00?text=💊+Vitamina+E',
    slug: '/producto/vitamina-e'
  },

  // BEBÉS
  { 
    id: 6, 
    name: 'Pañales Etapa 3', 
    category: 'Bebés', 
    price: 18.50,
    oldPrice: 22.00,
    discount: 16,
    stock: 50,
    imageUrl: 'https://placehold.co/400x400/fce4ec/c2185b?text=🍼+Pañales+E3',
    slug: '/producto/panales-etapa-3'
  },
  { 
    id: 9, 
    name: 'Leche NutriBaby Premium 3', 
    category: 'Bebés', 
    price: 25.60,
    oldPrice: 32.00,
    discount: 20,
    badge: 'oferta' as const,
    stock: 12,
    imageUrl: 'https://placehold.co/400x400/fce4ec/c2185b?text=🍼+NutriBaby',
    slug: '/producto/leche-nutribaby'
  },
  { 
    id: 10, 
    name: 'Toallitas Húmedas', 
    category: 'Bebés', 
    price: 7.50,
    oldPrice: 9.00,
    discount: 17,
    stock: 40,
    imageUrl: 'https://placehold.co/400x400/fce4ec/c2185b?text=🧻+Toallitas',
    slug: '/producto/toallitas-humedas'
  },
  { 
    id: 25, 
    name: 'Pañales Recién Nacido', 
    category: 'Bebés', 
    price: 16.00,
    oldPrice: 20.00,
    discount: 20,
    stock: 35,
    imageUrl: 'https://placehold.co/400x400/fce4ec/c2185b?text=👶+Pañales+RN',
    slug: '/producto/panales-recien-nacido'
  },
  { 
    id: 26, 
    name: 'Shampoo Bebé Johnson', 
    category: 'Bebés', 
    price: 8.90,
    oldPrice: 11.00,
    discount: 19,
    stock: 45,
    imageUrl: 'https://placehold.co/400x400/fce4ec/c2185b?text=🧴+Shampoo',
    slug: '/producto/shampoo-bebe'
  },
  { 
    id: 27, 
    name: 'Crema Pañalitis', 
    category: 'Bebés', 
    price: 9.50,
    oldPrice: 12.00,
    discount: 21,
    badge: 'nuevo' as const,
    stock: 30,
    imageUrl: 'https://placehold.co/400x400/fce4ec/c2185b?text=🧴+Crema',
    slug: '/producto/crema-panalitis'
  },
  { 
    id: 28, 
    name: 'Aceite Bebé Johnson', 
    category: 'Bebés', 
    price: 7.80,
    oldPrice: 10.00,
    discount: 22,
    stock: 38,
    imageUrl: 'https://placehold.co/400x400/fce4ec/c2185b?text=🧴+Aceite',
    slug: '/producto/aceite-bebe'
  },
  { 
    id: 29, 
    name: 'Talco para Bebé', 
    category: 'Bebés', 
    price: 5.50,
    oldPrice: 7.00,
    discount: 21,
    stock: 50,
    imageUrl: 'https://placehold.co/400x400/fce4ec/c2185b?text=🧴+Talco',
    slug: '/producto/talco-bebe'
  },
  { 
    id: 30, 
    name: 'Biberón Anticólico', 
    category: 'Bebés', 
    price: 12.90,
    oldPrice: 16.00,
    discount: 19,
    stock: 22,
    imageUrl: 'https://placehold.co/400x400/fce4ec/c2185b?text=🍼+Biberón',
    slug: '/producto/biberon-anticolico'
  },
  { 
    id: 31, 
    name: 'Chupón Silicona 0-6m', 
    category: 'Bebés', 
    price: 6.50,
    oldPrice: 8.00,
    discount: 19,
    stock: 48,
    imageUrl: 'https://placehold.co/400x400/fce4ec/c2185b?text=🍼+Chupón',
    slug: '/producto/chupon-silicona'
  },

  // CUIDADO PERSONAL
  { 
    id: 3, 
    name: 'Shampoo Anticaspa Pro-V', 
    category: 'Cuidado Personal', 
    price: 8.75,
    oldPrice: 10.50,
    discount: 17,
    stock: 20,
    imageUrl: 'https://placehold.co/400x400/f3e5f5/7b1fa2?text=🧴+Shampoo',
    slug: '/producto/shampoo-anticaspa'
  },
  { 
    id: 5, 
    name: 'Protector Solar SPF 50', 
    category: 'Cuidado Personal', 
    price: 22.00,
    oldPrice: 28.00,
    discount: 21,
    badge: 'oferta' as const,
    stock: 15,
    imageUrl: 'https://placehold.co/400x400/f3e5f5/7b1fa2?text=☀️+Protector',
    slug: '/producto/protector-solar-spf50'
  },
  { 
    id: 7, 
    name: 'Crema Hidratante', 
    category: 'Cuidado Personal', 
    price: 12.00,
    stock: 0,
    badge: 'agotado' as const,
    imageUrl: 'https://placehold.co/400x400/f3e5f5/7b1fa2?text=🧴+Crema',
    slug: '/producto/crema-hidratante'
  },
  { 
    id: 32, 
    name: 'Desodorante Rexona 48h', 
    category: 'Cuidado Personal', 
    price: 5.90,
    oldPrice: 7.50,
    discount: 21,
    stock: 55,
    imageUrl: 'https://placehold.co/400x400/f3e5f5/7b1fa2?text=🧴+Desodorante',
    slug: '/producto/desodorante-rexona'
  },
  { 
    id: 33, 
    name: 'Pasta Dental Colgate', 
    category: 'Cuidado Personal', 
    price: 4.20,
    oldPrice: 5.50,
    discount: 24,
    stock: 60,
    imageUrl: 'https://placehold.co/400x400/f3e5f5/7b1fa2?text=🦷+Colgate',
    slug: '/producto/pasta-dental-colgate'
  },
];

export default function HomePage() {
  return (
    <main>
      <div className="container mx-auto px-4 pt-4">
        <Carousel />
      </div>

      <CategoryCircles />

      <div className="container mx-auto px-4">
        
        <ProductCarousel 
          title="Productos Destacados" 
          href="/productos"
          products={mockProducts} 
        />
        
        <div className="my-8">
          <Link href="/producto/protector-solar-50"> 
            <Image
              src="/banners/promo-solares.png" 
              alt="Promoción Protectores Solares 20% OFF"
              width={1200}
              height={200}
              className="w-full h-auto rounded-lg shadow-md transition-transform hover:scale-[1.02]"
            />
          </Link>
        </div>
        
        <ProductCarousel 
          title="🍼 Días del Bebé" 
          subtitle="TODO en Cuidado Infantil con 20% OFF"
          href="/categoria/bebes"
          products={mockProducts.filter(p => p.category === 'Bebés')} 
        />
       
        <div className="my-8">
          <Link href="/categoria/vitaminas">
            <Image
              src="/banners/promo-vitaminas.png"
              alt="Promoción Vitaminas 30% OFF"
              width={1200}
              height={200}
              className="w-full h-auto rounded-lg shadow-md transition-transform hover:scale-[1.02]"
            />
          </Link>
        </div>

        <ProductCarousel 
          title="💊 Medicinas Esenciales" 
          href="/categoria/medicinas"
          products={mockProducts.filter(p => p.category === 'Medicinas')} 
        />
      </div>
    </main>
  );
}