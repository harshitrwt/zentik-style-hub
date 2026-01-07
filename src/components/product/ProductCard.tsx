import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Layers, Eye } from 'lucide-react';
import { Product } from '@/data/products';
import QuickViewModal from './QuickViewModal';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);

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
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.discount && (
              <span className="px-2 py-1 bg-destructive text-destructive-foreground text-xs font-semibold rounded">
                -{product.discount}%
              </span>
            )}
            {product.isNew && (
              <span className="px-2 py-1 bg-success text-success-foreground text-xs font-semibold rounded">
                New
              </span>
            )}
            {product.isLimited && (
              <span className="px-2 py-1 bg-amber-500 text-white text-xs font-semibold rounded">
                Limited
              </span>
            )}
            {!product.inStock && (
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
            <button 
              className="p-2 bg-background rounded-full shadow-lg hover:bg-secondary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <Layers className="w-4 h-4" />
            </button>
            <button 
              className="p-2 bg-background rounded-full shadow-lg hover:bg-secondary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowQuickView(true);
              }}
            >
              <Eye className="w-4 h-4" />
            </button>
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
              Select Options
            </button>
          </div>
        </div>

        {/* Product Info */}
        <Link to={`/products/${product.slug}`} className="block">
          <h3 className="font-heading text-sm font-medium tracking-wide mb-2 group-hover:text-muted-foreground transition-colors line-clamp-2">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-2">
            <span className="font-heading font-semibold">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-muted-foreground line-through text-sm">
                {formatPrice(product.originalPrice)}
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
