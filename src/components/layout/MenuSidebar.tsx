import { useState } from 'react';
import { X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

interface MenuSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuSidebar = ({ isOpen, onClose }: MenuSidebarProps) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setExpandedCategory(prev => prev === category ? null : category);
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
        className={`fixed top-0 left-0 h-full w-full max-w-sm bg-background border-r border-border z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <Link 
              to="/" 
              onClick={onClose}
              className="font-heading text-2xl font-bold tracking-wider"
            >
              ZENTIK
            </Link>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-secondary transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <Link 
              to="/"
              onClick={onClose}
              className="block py-4 font-heading text-lg font-medium tracking-wide border-b border-border"
            >
              HOME
            </Link>

            {/* Men's Category */}
            <div className="border-b border-border">
              <button 
                onClick={() => toggleCategory('men')}
                className="flex items-center justify-between w-full py-4 font-heading text-lg font-medium tracking-wide"
              >
                MEN
                {expandedCategory === 'men' ? (
                  <ChevronDown className="w-5 h-5" />
                ) : (
                  <ChevronRight className="w-5 h-5" />
                )}
              </button>
              
              {expandedCategory === 'men' && (
                <div className="pb-4 pl-4 space-y-3 animate-fade-in">
                  {categories.men.map(cat => (
                    <Link
                      key={cat.slug}
                      to={`/collections/men/${cat.slug}`}
                      onClick={onClose}
                      className="block text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Women's Category */}
            <div className="border-b border-border">
              <button 
                onClick={() => toggleCategory('women')}
                className="flex items-center justify-between w-full py-4 font-heading text-lg font-medium tracking-wide"
              >
                WOMEN
                {expandedCategory === 'women' ? (
                  <ChevronDown className="w-5 h-5" />
                ) : (
                  <ChevronRight className="w-5 h-5" />
                )}
              </button>
              
              {expandedCategory === 'women' && (
                <div className="pb-4 pl-4 space-y-3 animate-fade-in">
                  {categories.women.map(cat => (
                    <Link
                      key={cat.slug}
                      to={`/collections/women/${cat.slug}`}
                      onClick={onClose}
                      className="block text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/collections/limited"
              onClick={onClose}
              className="block py-4 font-heading text-lg font-medium tracking-wide border-b border-border"
            >
              LIMITED EDITION
            </Link>

            <Link 
              to="/contact"
              onClick={onClose}
              className="block py-4 font-heading text-lg font-medium tracking-wide border-b border-border"
            >
              CONTACT US
            </Link>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border space-y-4">
            <Link 
              to="/account"
              onClick={onClose}
              className="block py-3 text-center border border-border font-heading text-sm tracking-wide hover:bg-secondary transition-colors"
            >
              MY ACCOUNT
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuSidebar;
