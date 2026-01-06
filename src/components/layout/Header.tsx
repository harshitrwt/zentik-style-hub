import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, ShoppingBag, Heart, Menu, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { collections } from '@/data/products';

interface HeaderProps {
  onMenuOpen: () => void;
  onCartOpen: () => void;
}

const Header = ({ onMenuOpen, onCartOpen }: HeaderProps) => {
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const [showCollectionsDropdown, setShowCollectionsDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowCollectionsDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(
        `/collections/jersey/all?search=${encodeURIComponent(searchQuery.trim())}`
      );
      setSearchQuery('');
    }
  };

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
          <Link to="/" className="font-heading text-xl md:text-2xl font-bold tracking-wider">
            Zerć India
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="font-heading text-sm font-medium tracking-wide hover:text-muted-foreground transition-colors">
              HOME
            </Link>

            <div
              className="relative"
              ref={dropdownRef}
              onClick={() => setShowCollectionsDropdown(prev => !prev)}
            >
              <button className="flex items-center gap-1 font-heading text-sm font-medium tracking-wide hover:text-muted-foreground transition-colors">
                COLLECTIONS
                <ChevronDown className="w-4 h-4" />
              </button>

              {showCollectionsDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-background border border-border shadow-lg animate-fade-in z-50 p-6">
                  <div className="grid grid-cols-3 gap-8">

                    <div>
                      <h4 className="font-heading text-xs font-bold tracking-wider text-muted-foreground mb-3">
                        CLUB JERSEYS
                      </h4>
                      {collections.clubs.map(col => (
                        <Link
                          key={col.slug}
                          to={`/collections/jersey/${col.slug}`}
                          className="block py-2 text-sm hover:text-muted-foreground transition-colors"
                        >
                          {col.name}
                        </Link>
                      ))}
                    </div>

                    <div>
                      <h4 className="font-heading text-xs font-bold tracking-wider text-muted-foreground mb-3">
                        NATIONAL TEAMS
                      </h4>
                      {collections.national.map(col => (
                        <Link
                          key={col.slug}
                          to="/coming-soon"
                          className="block py-2 text-sm hover:text-muted-foreground transition-colors"
                        >
                          {col.name}
                        </Link>
                      ))}
                    </div>

                    <div>
                      <h4 className="font-heading text-xs font-bold tracking-wider text-muted-foreground mb-3">
                        JERSEY TYPES
                      </h4>
                      {collections.types.map(col => (
                        <Link
                          key={col.slug}
                          to={`/collections/jersey/${col.slug}`}
                          className="block py-2 text-sm hover:text-muted-foreground transition-colors"
                        >
                          {col.name}
                        </Link>
                      ))}
                    </div>

                  </div>

                  <div className="mt-6 pt-6 border-t border-border flex gap-8">
                    <Link to="/collections/jersey/all" className="font-heading text-xs font-bold tracking-wider hover:text-muted-foreground transition-colors">
                      ALL JERSEYS →
                    </Link>
                    <Link to="/collections/jersey/new-arrival" className="font-heading text-xs font-bold tracking-wider hover:text-muted-foreground transition-colors">
                      NEW ARRIVALS →
                    </Link>
                    <Link to="/collections/jersey/best-seller" className="font-heading text-xs font-bold tracking-wider text-success hover:text-success/80 transition-colors">
                      BEST SELLERS →
                    </Link>
                  </div>
                </div>
              )}
            </div>

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
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-foreground text-background text-xs font-bold rounded-full flex items-center justify-center">
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
