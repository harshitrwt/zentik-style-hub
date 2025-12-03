import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CartSidebar from './CartSidebar';
import MenuSidebar from './MenuSidebar';
import { useCart } from '@/context/CartContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isCartOpen, setIsCartOpen } = useCart();

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        onMenuOpen={() => setIsMenuOpen(true)} 
        onCartOpen={() => setIsCartOpen(true)} 
      />
      
      <main className="flex-1 pt-16 md:pt-20">
        {children}
      </main>
      
      <Footer />

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
      
      <MenuSidebar 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </div>
  );
};

export default Layout;
