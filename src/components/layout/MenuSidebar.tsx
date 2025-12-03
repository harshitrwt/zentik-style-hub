import { useState } from 'react';
import { X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { collections } from '@/data/products';

interface MenuSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuSidebar = ({ isOpen, onClose }: MenuSidebarProps) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(prev => prev === section ? null : section);
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

            {/* Collections */}
            <div className="border-b border-border">
              <button 
                onClick={() => toggleSection('collections')}
                className="flex items-center justify-between w-full py-4 font-heading text-lg font-medium tracking-wide"
              >
                COLLECTIONS
                {expandedSection === 'collections' ? (
                  <ChevronDown className="w-5 h-5" />
                ) : (
                  <ChevronRight className="w-5 h-5" />
                )}
              </button>
              
              {expandedSection === 'collections' && (
                <div className="pb-4 space-y-4 animate-fade-in">
                  {/* Seasonal */}
                  <div className="pl-4">
                    <h4 className="font-heading text-xs font-bold tracking-wider text-muted-foreground mb-2">SEASONAL</h4>
                    {collections.seasonal.map(col => (
                      <Link
                        key={col.slug}
                        to={`/collections/men/${col.slug}`}
                        onClick={onClose}
                        className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {col.name}
                      </Link>
                    ))}
                  </div>
                  
                  {/* Categories */}
                  <div className="pl-4">
                    <h4 className="font-heading text-xs font-bold tracking-wider text-muted-foreground mb-2">CATEGORIES</h4>
                    {collections.categories.map(col => (
                      <Link
                        key={col.slug}
                        to={`/collections/men/${col.slug}`}
                        onClick={onClose}
                        className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {col.name}
                      </Link>
                    ))}
                  </div>
                  
                  {/* Styles */}
                  <div className="pl-4">
                    <h4 className="font-heading text-xs font-bold tracking-wider text-muted-foreground mb-2">STYLES</h4>
                    {collections.styles.map(col => (
                      <Link
                        key={col.slug}
                        to={`/collections/men/${col.slug}`}
                        onClick={onClose}
                        className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {col.name}
                      </Link>
                    ))}
                  </div>
                  
                  {/* Shop Links */}
                  <div className="pl-4 pt-4 border-t border-border space-y-2">
                    <Link
                      to="/collections/men/all"
                      onClick={onClose}
                      className="block font-heading text-sm font-bold tracking-wide hover:text-primary transition-colors"
                    >
                      SHOP MEN →
                    </Link>
                    <Link
                      to="/collections/women/all"
                      onClick={onClose}
                      className="block font-heading text-sm font-bold tracking-wide hover:text-primary transition-colors"
                    >
                      SHOP WOMEN →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/our-story"
              onClick={onClose}
              className="block py-4 font-heading text-lg font-medium tracking-wide border-b border-border"
            >
              OUR STORY
            </Link>

            <Link 
              to="/collections/limited"
              onClick={onClose}
              className="block py-4 font-heading text-lg font-medium tracking-wide border-b border-border text-gold"
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
