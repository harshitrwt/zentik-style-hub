import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  const { items, updateQuantity, removeFromCart, totalPrice, totalDiscount, finalPrice, totalItems, getItemDiscount } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(Math.floor(price));
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
              YOUR CART ({totalItems})
            </h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-secondary transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-muted-foreground mb-4">Your cart is empty</p>
                <button 
                  onClick={onClose}
                  className="px-6 py-3 bg-primary text-primary-foreground font-heading text-sm tracking-wide hover:bg-primary/90 transition-colors"
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            ) : (
              items.map((item) => {
                const itemDiscount = getItemDiscount(item);
                const itemTotal = item.product.price * item.quantity;
                const discountedTotal = itemTotal - itemDiscount;
                
                return (
                  <div 
                    key={`${item.product.id}-${item.size}-${item.color}`}
                    className="flex gap-4 pb-4 border-b border-border"
                  >
                    <div className="w-24 h-28 bg-secondary overflow-hidden flex-shrink-0">
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-sm font-medium truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Size: {item.size} | Color: {item.color}
                      </p>
                      <div className="mt-2">
                        {itemDiscount > 0 ? (
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-heading font-semibold text-green-600">
                                {formatPrice(discountedTotal)}
                              </span>
                              <span className="text-muted-foreground line-through text-sm">
                                {formatPrice(itemTotal)}
                              </span>
                            </div>
                            <span className="inline-block px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded">
                              10% off (2+ items)
                            </span>
                          </div>
                        ) : (
                          <span className="font-heading font-semibold">
                            {formatPrice(itemTotal)}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-border">
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                            className="p-2 hover:bg-secondary transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-4 text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                            className="p-2 hover:bg-secondary transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                          className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-border p-4 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                {totalDiscount > 0 && (
                  <div className="flex items-center justify-between text-sm text-green-600">
                    <span>Quantity Discount (10%)</span>
                    <span>-{formatPrice(totalDiscount)}</span>
                  </div>
                )}
                <div className="flex items-center justify-between text-lg pt-2 border-t border-border">
                  <span className="font-heading font-medium">TOTAL</span>
                  <span className="font-heading font-bold">{formatPrice(finalPrice)}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Taxes and shipping calculated at checkout
              </p>
              <Link 
                to="/checkout"
                onClick={onClose}
                className="block w-full py-4 bg-primary text-primary-foreground text-center font-heading text-sm tracking-wide hover:bg-primary/90 transition-colors"
              >
                CHECKOUT
              </Link>
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

export default CartSidebar;
