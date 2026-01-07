import { X, Heart, Layers, Minus, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

interface QuickViewModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const QuickViewModal = ({ product, isOpen, onClose }: QuickViewModalProps) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedSize, product.colors[0]?.name || 'Default', quantity);
    onClose();
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
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                {product.discount && (
                  <span className="px-3 py-1 bg-destructive text-destructive-foreground text-sm font-semibold rounded">
                    -{product.discount}%
                  </span>
                )}
                {product.isNew && (
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
                {product.name}
              </h2>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="font-heading text-2xl font-bold text-success">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <span className="text-sm font-medium mb-3 block">Size: <strong>{selectedSize}</strong></span>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border text-sm font-medium transition-colors ${
                        selectedSize === size
                          ? 'bg-foreground text-background border-foreground'
                          : 'border-border hover:border-foreground'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
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
                  className="flex-1 py-3 bg-foreground text-background font-heading text-sm tracking-wide hover:bg-foreground/90 transition-colors"
                >
                  Add to Cart
                </button>

                <button className=" p-3 border border-border hover:bg-secondary transition-colors">
                  <Heart className="w-5 h-5" />
                </button>

                <button className="hidden p-3 border border-border hover:bg-secondary transition-colors">
                  <Layers className="w-5 h-5" />
                </button>
              </div>

             
              <button className="w-full py-4 bg-black text-white font-heading text-sm tracking-wide hover:bg-success/90 transition-colors mb-6">
                BUY NOW
              </button>

              <Link 
                to={`/products/${product.slug}`}
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
