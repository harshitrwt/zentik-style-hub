import { Link } from 'react-router-dom';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <Link 
      to={`/products/${product.slug}`}
      className="group block"
    >
      <div className="relative product-image-zoom bg-secondary aspect-[3/4] mb-4 overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-heading font-semibold tracking-wide">
              NEW
            </span>
          )}
          {product.isLimited && (
            <span className="px-2 py-1 bg-gold text-gold-foreground text-xs font-heading font-semibold tracking-wide">
              LIMITED
            </span>
          )}
          {!product.inStock && (
            <span className="px-2 py-1 bg-destructive text-destructive-foreground text-xs font-heading font-semibold tracking-wide">
              SOLD OUT
            </span>
          )}
        </div>

        {/* Quick View on Hover */}
        <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="px-6 py-3 bg-transparent border-2 border-white p-1 text-foreground font-heading text-sm tracking-wide">
            VIEW
          </span>
        </div>
      </div>

      <h3 className="font-heading text-sm font-medium tracking-wide uppercase mb-2 group-hover:text-muted-foreground transition-colors">
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
  );
};

export default ProductCard;
