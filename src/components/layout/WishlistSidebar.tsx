import { useState, useEffect } from 'react';
import { X, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProducts, SanityProduct, getProductImageUrl } from '@/hooks/useSanityProducts';
import { Product } from '@/data/products';

interface WishlistSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// Helper to get wishlist from localStorage
const getWishlist = (): string[] => {
  try {
    return JSON.parse(localStorage.getItem('wishlist') || '[]');
  } catch {
    return [];
  }
};

// Helper to remove item from wishlist
const removeFromWishlist = (productId: string): string[] => {
  const wishlist = getWishlist();
  const updated = wishlist.filter(id => id !== productId);
  localStorage.setItem('wishlist', JSON.stringify(updated));
  return updated;
};

const WishlistSidebar = ({ isOpen, onClose }: WishlistSidebarProps) => {
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const { data: products = [] } = useProducts();

  // Sync wishlist state when sidebar opens
  useEffect(() => {
    if (isOpen) {
      setWishlistIds(getWishlist());
    }
  }, [isOpen]);

  // Also listen for storage changes
  useEffect(() => {
    const handleStorageChange = () => {
      setWishlistIds(getWishlist());
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleRemove = (productId: string) => {
    const updated = removeFromWishlist(productId);
    setWishlistIds(updated);
    // Dispatch storage event for other components
    window.dispatchEvent(new Event('storage'));
  };

  // Get wishlisted products
  const wishlistProducts = products.filter(product => {
    const id = '_id' in product ? product._id : (product as Product).id;
    return wishlistIds.includes(id);
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getProductData = (product: SanityProduct | Product) => {
    if ('_id' in product) {
      const sanityProduct = product as SanityProduct;
      return {
        id: sanityProduct._id,
        name: sanityProduct.name,
        slug: sanityProduct.slug,
        price: sanityProduct.price,
        imageUrl: getProductImageUrl(sanityProduct),
      };
    }
    const fallbackProduct = product as Product;
    return {
      id: fallbackProduct.id,
      name: fallbackProduct.name,
      slug: fallbackProduct.slug,
      price: fallbackProduct.price,
      imageUrl: fallbackProduct.images[0] || '/placeholder.svg',
    };
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 animate-fade-in"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-background border-l border-border z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="font-heading text-lg font-semibold tracking-wide">
              YOUR WISHLIST ({wishlistProducts.length})
            </h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-secondary transition-colors"
              aria-label="Close wishlist"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Wishlist Items */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {wishlistProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-muted-foreground mb-4">Your wishlist is empty</p>
                <button 
                  onClick={onClose}
                  className="px-6 py-3 bg-primary text-primary-foreground font-heading text-sm tracking-wide hover:bg-primary/90 transition-colors"
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            ) : (
              wishlistProducts.map((product) => {
                const data = getProductData(product);
                return (
                  <div 
                    key={data.id}
                    className="flex gap-4 pb-4 border-b border-border"
                  >
                    <Link 
                      to={`/products/${data.slug}`}
                      onClick={onClose}
                      className="w-20 h-24 bg-secondary overflow-hidden flex-shrink-0"
                    >
                      <img 
                        src={data.imageUrl} 
                        alt={data.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    
                    <div className="flex-1 min-w-0">
                      <Link 
                        to={`/products/${data.slug}`}
                        onClick={onClose}
                        className="block"
                      >
                        <h3 className="font-heading text-sm font-medium truncate hover:text-muted-foreground transition-colors">
                          {data.name}
                        </h3>
                      </Link>
                      <p className="font-heading font-semibold mt-2">
                        {formatPrice(data.price)}
                      </p>
                    </div>
                    
                    <button 
                      onClick={() => handleRemove(data.id)}
                      className="p-2 text-muted-foreground hover:text-destructive transition-colors self-start"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer */}
          {wishlistProducts.length > 0 && (
            <div className="border-t border-border p-4">
              <button 
                onClick={onClose}
                className="block w-full py-4 border border-primary text-center font-heading text-sm tracking-wide hover:bg-secondary transition-colors"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WishlistSidebar;
