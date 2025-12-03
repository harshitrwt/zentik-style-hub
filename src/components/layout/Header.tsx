import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingBag, Heart, Menu, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { collections } from '@/data/products';

interface HeaderProps {
  onMenuOpen: () => void;
  onCartOpen: () => void;
}

const Header = ({ onMenuOpen, onCartOpen }: HeaderProps) => {
  const { totalItems } = useCart();
  const [showCollectionsDropdown, setShowCollectionsDropdown] = useState(false);

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
            
            {/* Collections Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowCollectionsDropdown(true)}
              onMouseLeave={() => setShowCollectionsDropdown(false)}
            >
              <button className="flex items-center gap-1 font-heading text-sm font-medium tracking-wide hover:text-muted-foreground transition-colors">
                COLLECTIONS
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {showCollectionsDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-card border border-border shadow-lg animate-fade-in z-50 p-6">
                  <div className="grid grid-cols-3 gap-8">
                    {/* Seasonal */}
                    <div>
                      <h4 className="font-heading text-xs font-bold tracking-wider text-muted-foreground mb-3">SEASONAL</h4>
                      {collections.seasonal.map(col => (
                        <Link
                          key={col.slug}
                          to={`/collections/men/${col.slug}`}
                          className="block py-2 text-sm hover:text-primary transition-colors"
                        >
                          {col.name}
                        </Link>
                      ))}
                    </div>
                    
                    {/* Categories */}
                    <div>
                      <h4 className="font-heading text-xs font-bold tracking-wider text-muted-foreground mb-3">CATEGORIES</h4>
                      {collections.categories.map(col => (
                        <Link
                          key={col.slug}
                          to={`/collections/men/${col.slug}`}
                          className="block py-2 text-sm hover:text-primary transition-colors"
                        >
                          {col.name}
                        </Link>
                      ))}
                    </div>
                    
                    {/* Styles */}
                    <div>
                      <h4 className="font-heading text-xs font-bold tracking-wider text-muted-foreground mb-3">STYLES</h4>
                      {collections.styles.map(col => (
                        <Link
                          key={col.slug}
                          to={`/collections/men/${col.slug}`}
                          className="block py-2 text-sm hover:text-primary transition-colors"
                        >
                          {col.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {/* Featured Links */}
                  <div className="mt-6 pt-6 border-t border-border flex gap-8">
                    <Link
                      to="/collections/men/all"
                      className="font-heading text-xs font-bold tracking-wider hover:text-primary transition-colors"
                    >
                      SHOP MEN →
                    </Link>
                    <Link
                      to="/collections/women/all"
                      className="font-heading text-xs font-bold tracking-wider hover:text-primary transition-colors"
                    >
                      SHOP WOMEN →
                    </Link>
                    <Link
                      to="/collections/limited"
                      className="font-heading text-xs font-bold tracking-wider text-gold hover:text-gold/80 transition-colors"
                    >
                      LIMITED EDITION →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/our-story" 
              className="font-heading text-sm font-medium tracking-wide hover:text-muted-foreground transition-colors"
            >
              OUR STORY
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
