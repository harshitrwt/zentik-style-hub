import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, ShoppingBag, Heart, Menu } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import AuthModal from '@/components/auth/AuthModal';

interface HeaderProps {
  onMenuOpen: () => void;
  onCartOpen: () => void;
}

const Header = ({ onMenuOpen, onCartOpen }: HeaderProps) => {
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [showAuthModal, setShowAuthModal] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % marqueeMessages.length);
    }, 5000); // match Tailwind animation duration
    return () => clearInterval(interval);
  }, []);


  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(
        `/collections/jersey/all?search=${encodeURIComponent(searchQuery.trim())}`
      );
      setSearchQuery('');
    }
  };

  const marqueeMessages = [
    "🎉 Free shipping on orders above ₹2000.",
    "🎁 Get 10% off on your first purchase.",
    "🚚 Fast delivery across India.",
  ];


  return (
    <>


      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="w-full bg-black text-white text-xs md:text-sm py-1 px-4 flex justify-center md:justify-between items-center">
          <div className="overflow-hidden text-center md:text-left flex-1">
            <span
              key={currentIndex}
              className="inline-block animate-fade"
            >
              {marqueeMessages[currentIndex]}
            </span>
          </div>

          
          <div className="hidden md:block font-semibold ml-4">
            India
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">


            <button
              onClick={onMenuOpen}
              className="lg:hidden p-2 hover:bg-secondary transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link to="/" className="font-heading text-xl md:text-2xl font-bold tracking-wider">
              Zerć India
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link to="/" className="font-heading text-sm font-medium tracking-wide hover:text-muted-foreground transition-colors">
                HOME
              </Link>

              <Link to="/shop" className="font-heading text-sm font-medium tracking-wide hover:text-muted-foreground transition-colors">
                SHOP
              </Link>

              <Link to="/our-story" className="font-heading text-sm font-medium tracking-wide hover:text-muted-foreground transition-colors">
                OUR STORY
              </Link>

              <Link to="/contact" className="font-heading text-sm font-medium tracking-wide hover:text-muted-foreground transition-colors">
                CONTACT US
              </Link>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-2 md:gap-4">

              {/* Search Box */}
              <div className="relative hidden md:block">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearchKeyDown}
                  placeholder="Am looking for..."
                  className="w-40 lg:w-52 pl-9 pr-4 py-2 text-sm bg-secondary rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-foreground/20"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>

              <button
                onClick={() => setShowAuthModal(true)}
                className="hidden md:block p-2 hover:bg-secondary transition-colors"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </button>

              <button className="hidden md:block p-2 hover:bg-secondary transition-colors" aria-label="Wishlist">
                <Heart className="w-5 h-5" />
              </button>

              <button
                onClick={onCartOpen}
                className="relative p-2 hover:bg-secondary transition-colors"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-foreground text-background text-xs font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

            </div>
          </div>
        </div>
      </header>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
};

export default Header;
