import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingBag, Heart, Menu, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { categories } from '@/data/products';

interface HeaderProps {
  onMenuOpen: () => void;
  onCartOpen: () => void;
}

const Header = ({ onMenuOpen, onCartOpen }: HeaderProps) => {
  const { totalItems } = useCart();
  const [showMenDropdown, setShowMenDropdown] = useState(false);
  const [showWomenDropdown, setShowWomenDropdown] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile Menu Button */}
          <button 
            onClick={onMenuOpen}
            className="lg:hidden p-2 hover:bg-secondary transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <Link to="/" className="font-heading text-2xl md:text-3xl font-bold tracking-wider">
            ZENTIK
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              to="/" 
              className="font-heading text-sm font-medium tracking-wide hover:text-muted-foreground transition-colors"
            >
              HOME
            </Link>
            
            {/* Men's Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowMenDropdown(true)}
              onMouseLeave={() => setShowMenDropdown(false)}
            >
              <button className="flex items-center gap-1 font-heading text-sm font-medium tracking-wide hover:text-muted-foreground transition-colors">
                MEN
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {showMenDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border shadow-lg animate-fade-in z-50">
                  {categories.men.map(cat => (
                    <Link
                      key={cat.slug}
                      to={`/collections/men/${cat.slug}`}
                      className="block px-4 py-3 text-sm hover:bg-secondary transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Women's Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowWomenDropdown(true)}
              onMouseLeave={() => setShowWomenDropdown(false)}
            >
              <button className="flex items-center gap-1 font-heading text-sm font-medium tracking-wide hover:text-muted-foreground transition-colors">
                WOMEN
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {showWomenDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border shadow-lg animate-fade-in z-50">
                  {categories.women.map(cat => (
                    <Link
                      key={cat.slug}
                      to={`/collections/women/${cat.slug}`}
                      className="block px-4 py-3 text-sm hover:bg-secondary transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/collections/limited" 
              className="font-heading text-sm font-medium tracking-wide hover:text-muted-foreground transition-colors"
            >
              LIMITED EDITION
            </Link>
            
            <Link 
              to="/contact" 
              className="font-heading text-sm font-medium tracking-wide hover:text-muted-foreground transition-colors"
            >
              CONTACT US
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-2 md:gap-4">
            <button className="p-2 hover:bg-secondary transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden md:block p-2 hover:bg-secondary transition-colors" aria-label="Account">
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
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
