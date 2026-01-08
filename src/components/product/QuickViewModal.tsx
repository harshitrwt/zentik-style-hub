import { X, Heart, Minus, Plus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { useState, useMemo } from 'react';
import { SanityProduct, getProductImageUrl, isSizeInStock, getSizePrice } from '@/hooks/useSanityProducts';
import { Product } from '@/data/products';

// Union type to accept both Sanity and fallback products
type ProductType = SanityProduct | Product;

interface QuickViewModalProps {
  product: ProductType;
  isOpen: boolean;
  onClose: () => void;
}

// Helper to normalize product for display
const normalizeForDisplay = (product: ProductType) => {
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
      colors: sanityProduct.colors ?? [],
      sizes: sanityProduct.sizes?.map(s => ({
        label: s.label,
        inStock: s.inStock,
        price: s.price
      })) ?? [],
      isSanity: true,
      originalProduct: sanityProduct
    };
  }
  
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
    colors: fallbackProduct.colors,
    sizes: fallbackProduct.sizes.map(s => ({
      label: s,
      inStock: true,
      price: undefined
    })),
    isSanity: false,
    originalProduct: fallbackProduct
  };
};

const QuickViewModal = ({ product, isOpen, onClose }: QuickViewModalProps) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  
  const normalized = useMemo(() => normalizeForDisplay(product), [product]);
  
  const [selectedSize, setSelectedSize] = useState(normalized.sizes[0]?.label || '');
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(price);
  };

  // Get current price based on selected size
  const currentPrice = useMemo(() => {
    const sizeData = normalized.sizes.find(s => s.label === selectedSize);
    return sizeData?.price || normalized.price;
  }, [selectedSize, normalized]);

  const handleAddToCart = () => {
    // Create a compatible product object for cart
    const cartProduct = {
      id: normalized.id,
      name: normalized.name,
      slug: normalized.slug,
      price: currentPrice,
      originalPrice: normalized.originalPrice,
      images: [normalized.imageUrl],
      category: 'jersey' as const,
      subcategory: '',
      sizes: normalized.sizes.map(s => s.label),
      colors: normalized.colors,
      description: '',
      inStock: true,
    };
    
    addToCart(cartProduct, selectedSize, normalized.colors[0]?.name || 'Default', quantity);
    onClose();
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/checkout');
  };

  const isSizeAvailable = (sizeLabel: string) => {
    const size = normalized.sizes.find(s => s.label === sizeLabel);
    return size?.inStock ?? true;
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-[100] animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
        <div 
          className="bg-background w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid md:grid-cols-2">
            {/* Product Image */}
            <div className="relative aspect-square md:aspect-auto">
              <img 
                src={normalized.imageUrl} 
                alt={normalized.name}
                className="w-full h-full object-cover"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                {normalized.discount && (
                  <span className="px-3 py-1 bg-destructive text-destructive-foreground text-sm font-semibold rounded">
                    -{normalized.discount}%
                  </span>
                )}
                {normalized.isNew && (
                  <span className="px-3 py-1 bg-success text-success-foreground text-sm font-semibold rounded">
                    New
                  </span>
                )}
              </div>
            </div>

            {/* Product Details */}
            <div className="p-6 md:p-8 relative">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="font-heading text-xl md:text-2xl font-bold mb-4 pr-8">
                {normalized.name}
              </h2>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="font-heading text-2xl font-bold text-success">
                  {formatPrice(currentPrice)}
                </span>
                {normalized.originalPrice && (
                  <span className="text-muted-foreground line-through">
                    {formatPrice(normalized.originalPrice)}
                  </span>
                )}
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <span className="text-sm font-medium mb-3 block">
                  Size: <strong>{selectedSize}</strong>
                </span>
                <div className="flex flex-wrap gap-2">
                  {normalized.sizes.map(size => {
                    const available = isSizeAvailable(size.label);
                    return (
                      <button
                        key={size.label}
                        onClick={() => available && setSelectedSize(size.label)}
                        disabled={!available}
                        className={`px-4 py-2 border text-sm font-medium transition-colors ${
                          selectedSize === size.label
                            ? 'bg-foreground text-background border-foreground'
                            : available 
                              ? 'border-border hover:border-foreground'
                              : 'border-border bg-muted text-muted-foreground cursor-not-allowed line-through'
                        }`}
                      >
                        {size.label}
                        {!available && ' (Out)'}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border border-border">
                  <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="p-3 hover:bg-secondary transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(q => q + 1)}
                    className="p-3 hover:bg-secondary transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={!isSizeAvailable(selectedSize)}
                  className="flex-1 py-3 bg-foreground text-background font-heading text-sm tracking-wide hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Add to Cart
                </button>

                <button className="p-3 border border-border hover:bg-secondary transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              <button 
                onClick={handleBuyNow}
                disabled={!isSizeAvailable(selectedSize)}
                className="w-full py-4 bg-black text-white font-heading text-sm tracking-wide hover:bg-success/90 transition-colors mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                BUY NOW
              </button>

              <Link 
                to={`/products/${normalized.slug}`}
                onClick={onClose}
                className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"
              >
                View Full Details →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickViewModal;
