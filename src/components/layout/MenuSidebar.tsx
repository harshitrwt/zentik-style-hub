import { useState } from 'react';
import { X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { jerseyCategories, collections } from '@/data/products';
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

interface MenuSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthOpen: () => void;
}

const MenuSidebar = ({ isOpen, onClose, onAuthOpen }: MenuSidebarProps) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const { user } = useAuth();
  const navigate = useNavigate();

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

            <Link 
              to="/shop"
              onClick={onClose}
              className="block py-4 font-heading text-lg font-medium tracking-wide border-b border-border"
            >
              SHOP
            </Link>

            {/* Categories */}
            <div className="border-b border-border">
              <button 
                onClick={() => toggleSection('categories')}
                className="flex items-center justify-between w-full py-4 font-heading text-lg font-medium tracking-wide"
              >
                CATEGORIES
                {expandedSection === 'categories' ? (
                  <ChevronDown className="w-5 h-5" />
                ) : (
                  <ChevronRight className="w-5 h-5" />
                )}
              </button>
              
              {expandedSection === 'categories' && (
                <div className="pb-4 space-y-2 animate-fade-in">
                  {jerseyCategories.map(cat => (
                    <Link
                      key={cat.slug}
                      to={`/collections/jersey/${cat.slug}`}
                      onClick={onClose}
                      className="block py-2 pl-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Clubs */}
            <div className="border-b border-border">
              <button 
                onClick={() => toggleSection('clubs')}
                className="flex items-center justify-between w-full py-4 font-heading text-lg font-medium tracking-wide"
              >
                CLUBS
                {expandedSection === 'clubs' ? (
                  <ChevronDown className="w-5 h-5" />
                ) : (
                  <ChevronRight className="w-5 h-5" />
                )}
              </button>
              
              {expandedSection === 'clubs' && (
                <div className="pb-4 space-y-2 animate-fade-in">
                  {collections.clubs.map(col => (
                    <Link
                      key={col.slug}
                      to={`/collections/jersey/${col.slug}`}
                      onClick={onClose}
                      className="block py-2 pl-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {col.name}
                    </Link>
                  ))}
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
            <button 
              onClick={() => {
                onClose();
                user ? navigate("/signin") : onAuthOpen();
              }}
              className="block w-full py-3 text-center border border-border font-heading text-sm tracking-wide hover:bg-secondary transition-colors"
            >
              MY ACCOUNT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuSidebar;
