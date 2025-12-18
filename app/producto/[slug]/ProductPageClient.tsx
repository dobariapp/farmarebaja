'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShoppingCartIcon, 
  HeartIcon,
  ShareIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline';
import { ProductCarousel } from '@/components/ProductCarousel';
import { useCart } from '@/lib/CartContext';

type Product = {
  id: number;
  slug: string;
  name: string;
  fullName: string;
  code: string;
  category: string;
  brand: string;
  price: number;
  oldPrice: number;
  discount: number;
  stock: number;
  images: string[];
  description: string;
  indications: string;
  contraindications: string;
  dosage: string;
};

type TabType = 'description' | 'indications' | 'contraindications' | 'dosage';

export default function ProductPageClient({ 
  product, 
  relatedProducts 
}: { 
  product: Product; 
  relatedProducts: any[];
}) {
  const [activeTab, setActiveTab] = useState<TabType>('description');
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.fullName,
        price: product.price,
        imageUrl: product.images[0],
        slug: `/producto/${product.slug}`,
      });
    }
  };

  const tabContent: Record<TabType, string> = {
    description: product.description,
    indications: product.indications,
    contraindications: product.contraindications,
    dosage: product.dosage,
  };

  const tabTitles: Record<TabType, string> = {
    description: 'Descripción',
    indications: 'Indicaciones',
    contraindications: 'Contraindicaciones',
    dosage: 'Dosificación',
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex text-sm text-gray-600">
            <Link href="/" className="hover:text-brand-light">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href={`/categoria/${product.category.toLowerCase()}`} className="hover:text-brand-light">
              {product.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg p-6 lg:p-8">
          
          <div>
            <div className="mb-4 border rounded-lg overflow-hidden bg-white p-4">
              <Image
                src={product.images[0]}
                alt={product.fullName}
                width={600}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            <div className="grid grid-cols-3 gap-2">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-brand-light transition-colors p-2 bg-white"
                >
                  <Image
                    src={img}
                    alt={`Vista ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-auto object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm text-gray-500">{product.category}</span>
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm text-gray-500">Código: {product.code}</span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.fullName}
            </h1>

            <p className="text-gray-600 mb-4">
              Marca: <span className="font-semibold">{product.brand}</span>
            </p>

            <div className="bg-blue-50 border-2 border-brand-light rounded-lg p-6 mb-6">
              <div className="flex items-baseline gap-3 mb-2">
                {product.oldPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
                {product.discount > 0 && (
                  <span className="bg-brand-red text-white px-3 py-1 rounded-full text-sm font-bold">
                    {product.discount}% OFF
                  </span>
                )}
              </div>
              <div className="text-4xl font-bold text-brand-dark">
                ${product.price.toFixed(2)}
              </div>
              {product.oldPrice && (
                <p className="text-sm text-gray-600 mt-1">
                  Ahorra ${(product.oldPrice - product.price).toFixed(2)}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2 mb-6">
              <CheckCircleIcon className="w-5 h-5 text-green-600" />
              <span className="text-green-700 font-semibold">
                En stock ({product.stock} disponibles)
              </span>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Cantidad:
              </label>
              <div className="flex items-center gap-3">
                <button 
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                  className="w-10 h-10 border-2 border-gray-300 rounded-lg hover:border-brand-light hover:bg-gray-50 transition-colors font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  max={product.stock}
                  value={quantity}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (value >= 1 && value <= product.stock) {
                      setQuantity(value);
                    }
                  }}
                  className="w-20 h-10 text-center border-2 border-gray-300 rounded-lg focus:border-brand-light focus:outline-none"
                />
                <button 
                  onClick={incrementQuantity}
                  disabled={quantity >= product.stock}
                  className="w-10 h-10 border-2 border-gray-300 rounded-lg hover:border-brand-light hover:bg-gray-50 transition-colors font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-3 mb-6">
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-brand-light hover:bg-brand-dark text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCartIcon className="w-6 h-6" />
                Añadir al Carrito
              </button>
              <button className="w-14 h-14 border-2 border-gray-300 rounded-lg hover:border-brand-red hover:bg-red-50 transition-colors flex items-center justify-center">
                <HeartIcon className="w-6 h-6 text-gray-600" />
              </button>
              <button className="w-14 h-14 border-2 border-gray-300 rounded-lg hover:border-brand-light hover:bg-blue-50 transition-colors flex items-center justify-center">
                <ShareIcon className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-brand-light" />
                <span>Envío gratis en compras mayores a $10</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-brand-light" />
                <span>Retiro en tienda disponible</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-brand-light" />
                <span>Garantía de satisfacción</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 mt-8">
          <div className="border-b mb-6">
            <div className="flex gap-6 overflow-x-auto">
              {(Object.keys(tabTitles) as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`pb-4 border-b-2 whitespace-nowrap transition-colors ${
                    activeTab === tab
                      ? 'border-brand-light text-brand-light font-semibold'
                      : 'border-transparent text-gray-600 hover:text-brand-light'
                  }`}
                >
                  {tabTitles[tab]}
                </button>
              ))}
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {tabContent[activeTab]}
            </p>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-8">
            <ProductCarousel
              title="Productos Relacionados"
              subtitle="También te puede interesar"
              products={relatedProducts}
            />
          </div>
        )}
      </div>
    </main>
  );
}