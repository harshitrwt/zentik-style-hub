import { useState, useEffect } from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
  image: string;
  orderedAt: string;
}

interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  orderedAt: string;
}

interface OrdersSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// Helper to get orders from localStorage
const getOrders = (): Order[] => {
  try {
    return JSON.parse(localStorage.getItem('user-orders') || '[]');
  } catch {
    return [];
  }
};

// Helper to remove order from localStorage
const removeOrder = (orderId: string): Order[] => {
  const orders = getOrders();
  const updated = orders.filter(order => order.id !== orderId);
  localStorage.setItem('user-orders', JSON.stringify(updated));
  return updated;
};

const OrdersSidebar = ({ isOpen, onClose }: OrdersSidebarProps) => {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);

  // Sync orders when sidebar opens
  useEffect(() => {
    if (isOpen) {
      setOrders(getOrders());
    }
  }, [isOpen]);

  // Listen for storage changes
  useEffect(() => {
    const handleStorageChange = () => {
      setOrders(getOrders());
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleRemoveOrder = (orderId: string) => {
    const updated = removeOrder(orderId);
    setOrders(updated);
    window.dispatchEvent(new Event('storage'));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(Math.floor(price));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
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
              YOUR ORDERS
            </h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-secondary transition-colors"
              aria-label="Close orders"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {!user ? (
              // Not logged in
              <div className="flex flex-col items-center justify-center h-full text-center px-6">
                <ShoppingBag className="w-16 h-16 text-muted-foreground mb-4" />
                <h3 className="font-heading text-xl font-semibold mb-2">
                  Sign in to view orders
                </h3>
                <p className="text-muted-foreground mb-6">
                  Please sign in to your account to view your order history and track your purchases.
                </p>
                <button 
                  onClick={onClose}
                  className="px-6 py-3 bg-primary text-primary-foreground font-heading text-sm tracking-wide hover:bg-primary/90 transition-colors"
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            ) : orders.length === 0 ? (
              // Logged in but no orders
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-4">You haven't placed any orders yet</p>
                <button 
                  onClick={onClose}
                  className="px-6 py-3 bg-primary text-primary-foreground font-heading text-sm tracking-wide hover:bg-primary/90 transition-colors"
                >
                  START SHOPPING
                </button>
              </div>
            ) : (
              // Has orders
              <div className="space-y-6">
                {orders.map((order) => (
                  <div 
                    key={order.id}
                    className="border border-border rounded-lg overflow-hidden"
                  >
                    {/* Order Header */}
                    <div className="flex items-center justify-between p-3 bg-secondary/50">
                      <div>
                        <p className="text-xs text-muted-foreground">Order #{order.id.slice(-8)}</p>
                        <p className="text-xs text-muted-foreground">{formatDate(order.orderedAt)}</p>
                      </div>
                      <button 
                        onClick={() => handleRemoveOrder(order.id)}
                        className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                        aria-label="Delete order"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    {/* Order Items */}
                    <div className="p-3 space-y-3">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex gap-3">
                          <div className="w-14 h-16 bg-secondary overflow-hidden flex-shrink-0 rounded">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium truncate">{item.name}</h4>
                            <p className="text-xs text-muted-foreground">
                              Size: {item.size} | Qty: {item.quantity}
                            </p>
                            <p className="text-sm font-semibold mt-1">
                              {formatPrice(item.price * item.quantity)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Order Total */}
                    <div className="p-3 border-t border-border bg-secondary/30">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm">Total</span>
                        <span className="font-heading font-bold">{formatPrice(order.total)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {user && orders.length > 0 && (
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

export default OrdersSidebar;
