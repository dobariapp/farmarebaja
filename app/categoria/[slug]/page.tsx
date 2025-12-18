import { ProductCard } from '@/components/ProductCard'; 
import { Sidebar } from '@/components/Sidebar';
import Link from 'next/link';

const mockProducts = [
  { 
    id: 1, 
    name: 'Paracetamol 500mg (Caja x 20)', 
    category: 'Medicinas', 
    price: 2.50,
    oldPrice: 3.00,
    discount: 17,
    stock: 45,
    imageUrl: 'https://i.imgur.com/gT81FN9.png',
    slug: '/producto/paracetamol-500mg'
  },
  { 
    id: 2, 
    name: 'Vitamina C 1000mg', 
    category: 'Vitaminas', 
    price: 15.00,
    oldPrice: 18.00,
    discount: 17,
    badge: 'nuevo' as const,
    stock: 30,
    imageUrl: 'https://i.imgur.com/gT81FN9.png',
    slug: '/producto/vitamina-c-1000mg'
  },
  { 
    id: 3, 
    name: 'Shampoo Anticaspa Pro-V', 
    category: 'Cuidado Personal', 
    price: 8.75,
    oldPrice: 10.50,
    discount: 17,
    stock: 20,
    imageUrl: 'https://i.imgur.com/gT81FN9.png',
    slug: '/producto/shampoo-anticaspa'
  },
  { 
    id: 4, 
    name: 'Ibuprofeno 400mg', 
    category: 'Medicinas', 
    price: 4.20,
    oldPrice: 5.00,
    discount: 16,
    stock: 3,
    imageUrl: 'https://i.imgur.com/gT81FN9.png',
    slug: '/producto/ibuprofeno-400mg'
  },
  { 
    id: 5, 
    name: 'Amoxicilina 500mg', 
    category: 'Medicinas', 
    price: 9.30,
    oldPrice: 11.00,
    discount: 15,
    stock: 25,
    imageUrl: 'https://i.imgur.com/gT81FN9.png',
    slug: '/producto/amoxicilina-500mg'
  },
  { 
    id: 6, 
    name: 'Aspirina 500mg', 
    category: 'Medicinas', 
    price: 3.50,
    oldPrice: 4.20,
    discount: 17,
    badge: 'oferta' as const,
    stock: 60,
    imageUrl: 'https://i.imgur.com/gT81FN9.png',
    slug: '/producto/aspirina-500mg'
  },
  { 
    id: 7, 
    name: 'Complejo B', 
    category: 'Vitaminas', 
    price: 12.50,
    oldPrice: 15.00,
    discount: 17,
    stock: 18,
    imageUrl: 'https://i.imgur.com/gT81FN9.png',
    slug: '/producto/complejo-b'
  },
  { 
    id: 8, 
    name: 'Omega 3', 
    category: 'Vitaminas', 
    price: 22.00,
    oldPrice: 26.00,
    discount: 15,
    stock: 40,
    imageUrl: 'https://i.imgur.com/gT81FN9.png',
    slug: '/producto/omega-3'
  },
];

export default async function CategoryPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // Await params en Next.js 15+
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // Mapeo de slugs a nombres de categorías reales
  const categoryMap: { [key: string]: string } = {
    'medicinas': 'Medicinas',
    'vitaminas': 'Vitaminas',
    'cuidado-personal': 'Cuidado Personal',
    'bebes': 'Bebés',
    'ofertas': 'Ofertas'
  };

  const displayCategory = categoryMap[slug] || slug.replace(/-/g, ' ');

  // Filtrar productos por categoría
  const filteredProducts = mockProducts.filter(
    product => product.category === displayCategory
  );

  const productCount = filteredProducts.length;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex text-sm text-gray-600">
            <Link href="/" className="hover:text-brand-light">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 capitalize">{displayCategory}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          <aside className="lg:col-span-1">
            <Sidebar />
          </aside>

          <main className="lg:col-span-3">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800 capitalize mb-2">
                {displayCategory}
              </h1>
              <p className="text-gray-600">
                {productCount} {productCount === 1 ? 'producto encontrado' : 'productos encontrados'}
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    category={product.category}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    oldPrice={product.oldPrice}
                    discount={product.discount}
                    badge={product.badge}
                    stock={product.stock}
                    slug={product.slug}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <div className="text-gray-400 mb-4">
                  <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No hay productos en esta categoría
                </h3>
                <p className="text-gray-500 mb-6">
                  Explora otras categorías o vuelve al inicio
                </p>
                <Link 
                  href="/"
                  className="inline-block bg-brand-light text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors"
                >
                  Volver al Inicio
                </Link>
              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  );
}