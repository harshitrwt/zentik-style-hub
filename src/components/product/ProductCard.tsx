import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye } from 'lucide-react';
import QuickViewModal from './QuickViewModal';
import { SanityProduct, getProductImageUrl } from '@/hooks/useSanityProducts';
import { Product } from '@/data/products';

// Union type to accept both Sanity and fallback products
type ProductType = SanityProduct | Product;

interface ProductCardProps {
  product: ProductType;
}

// Helper to normalize product data
const normalizeProduct = (product: ProductType) => {
  // Check if it's a Sanity product (has _id)
  if ('_id' in product) {
    const sanityProduct = product as SanityProduct;
    return {
      id: sanityProduct._id,
      name: sanityProduct.name,
      slug: sanityProduct.slug,
      price: sanityProduct.price,
      originalPrice: sanityProduct.originalPrice,
      discount: sanityProduct.discount,
      imageUrl: getProductImageUrl(sanityProduct),
      isNew: sanityProduct.isNew,
      isLimited: sanityProduct.isLimited,
      inStock: sanityProduct.sizes?.some(s => s.inStock) ?? true,
      sizes: sanityProduct.sizes?.map(s => s.label) ?? [],
      colors: sanityProduct.colors ?? [],
    };
  }
  
  // It's a fallback product
  const fallbackProduct = product as Product;
  return {
    id: fallbackProduct.id,
    name: fallbackProduct.name,
    slug: fallbackProduct.slug,
    price: fallbackProduct.price,
    originalPrice: fallbackProduct.originalPrice,
    discount: fallbackProduct.discount,
    imageUrl: fallbackProduct.images[0] || '/placeholder.svg',
    isNew: fallbackProduct.isNew,
    isLimited: fallbackProduct.isLimited,
    inStock: fallbackProduct.inStock,
    sizes: fallbackProduct.sizes,
    colors: fallbackProduct.colors,
  };
};

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);

  const normalized = normalizeProduct(product);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <>
      <div 
        className="group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative bg-secondary aspect-[3/4] mb-4 overflow-hidden rounded-lg">
          <img 
            src={normalized.imageUrl} 
            alt={normalized.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {normalized.discount && (
              <span className="px-2 py-1 bg-destructive text-destructive-foreground text-xs font-semibold rounded">
                -{normalized.discount}%
              </span>
            )}
            {normalized.isNew && (
              <span className="px-2 py-1 bg-white text-black text-xs font-semibold rounded">
                New
              </span>
            )}
            {normalized.isLimited && (
              <span className="px-2 py-1 bg-amber-500 text-white text-xs font-semibold rounded">
                Limited
              </span>
            )}
            {!normalized.inStock && (
              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-semibold rounded">
                Sold Out
              </span>
            )}
          </div>

          {/* Action Buttons on Hover */}
          <div 
            className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
          >
            <button 
              className="p-2 bg-background rounded-full shadow-lg hover:bg-secondary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <Heart className="w-4 h-4" />
            </button>
            <Link
              className="p-2 bg-background rounded-full shadow-lg hover:bg-secondary transition-colors"
              to={`/products/${product.slug}`}
            >
              <Eye 
              className="w-4 h-4" />
            </Link>
          </div>

          {/* Select Options Button on Hover */}
          <div 
            className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowQuickView(true);
              }}
              className="w-[90%] mx-auto mb-3 block py-3 bg-background/95 backdrop-blur-sm text-foreground font-heading text-sm tracking-wide rounded-full hover:bg-background transition-colors shadow-lg"
            >
              View
            </button>
          </div>
        </div>

        {/* Product Info */}
        <Link to={`/products/${normalized.slug}`} className="block">
          <h3 className="font-heading text-sm font-medium tracking-wide mb-2 group-hover:text-muted-foreground transition-colors line-clamp-2">
            {normalized.name}
          </h3>
          
          <div className="flex items-center gap-2">
            <span className="font-heading font-semibold">
              {formatPrice(normalized.price)}
            </span>
            {normalized.originalPrice && (
              <span className="text-muted-foreground line-through text-sm">
                {formatPrice(normalized.originalPrice)}
              </span>
            )}
          </div>
        </Link>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal 
        product={product}
        isOpen={showQuickView}
        onClose={() => setShowQuickView(false)}
      />
    </>
  );
};

export default ProductCard;
