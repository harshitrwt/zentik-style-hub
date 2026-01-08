import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Package, ShoppingBag, Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface BottomNavProps {
  onCartOpen: () => void;
}

const BottomNav = ({ onCartOpen }: BottomNavProps) => {
  const location = useLocation();
  const { totalItems } = useCart();

  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  // Listen to scroll to hide/show nav
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // scrolling down
        setShowNav(false);
      } else {
        // scrolling up
        setShowNav(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Package, label: 'Orders', path: '/coming-soon' },
    { icon: ShoppingBag, label: 'Shop', path: '/shop', isCenter: true },
    { icon: Heart, label: 'Wishlist', path: '/wishlist' },
  ];

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50 lg:hidden transition-transform duration-300 ${
        showNav ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
                item.isCenter ? 'relative -mt-6' : ''
              }`}
            >
              {item.isCenter ? (
                <div className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center shadow-lg">
                  <Icon className="w-6 h-6" />
                </div>
              ) : (
                <Icon
                  className={`w-5 h-5 ${
                    isActive ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                />
              )}
              <span
                className={`text-xs ${
                  isActive ? 'text-foreground font-medium' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}

        {/* Cart Button */}
        <button
          onClick={onCartOpen}
          className="flex flex-col items-center gap-1 px-4 py-2 transition-colors relative"
        >
          <div className="relative">
            <ShoppingCart className="w-5 h-5 text-muted-foreground" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-destructive text-destructive-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
          <span className="text-xs text-muted-foreground">Cart</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;
