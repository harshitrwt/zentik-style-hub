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
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 animate-fade-in"
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
              className="font-heading text-xl font-bold tracking-wider"
            >
              Zerć India
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
                  {/* Clubs */}
                  <div className="pl-4">
                    <h4 className="font-heading text-xs font-bold tracking-wider text-muted-foreground mb-2">CLUB JERSEYS</h4>
                    {collections.clubs.map(col => (
                      <Link
                        key={col.slug}
                        to={`/collections/jersey/${col.slug}`}
                        onClick={onClose}
                        className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {col.name}
                      </Link>
                    ))}
                  </div>
                  
                  {/* National - Coming Soon */}
                  <div className="pl-4">
                    <h4 className="font-heading text-xs font-bold tracking-wider text-muted-foreground mb-2">NATIONAL TEAMS</h4>
                    {collections.national.map(col => (
                      <Link
                        key={col.slug}
                        to="/coming-soon"
                        onClick={onClose}
                        className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {col.name}
                      </Link>
                    ))}
                  </div>
                  
                  {/* Types */}
                  <div className="pl-4">
                    <h4 className="font-heading text-xs font-bold tracking-wider text-muted-foreground mb-2">JERSEY TYPES</h4>
                    {collections.types.map(col => (
                      <Link
                        key={col.slug}
                        to={`/collections/jersey/${col.slug}`}
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
                      to="/collections/jersey/all"
                      onClick={onClose}
                      className="block font-heading text-sm font-bold tracking-wide hover:text-muted-foreground transition-colors"
                    >
                      ALL JERSEYS →
                    </Link>
                    <Link
                      to="/collections/jersey/best-seller"
                      onClick={onClose}
                      className="block font-heading text-sm font-bold tracking-wide text-success hover:text-success/80 transition-colors"
                    >
                      BEST SELLERS →
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
