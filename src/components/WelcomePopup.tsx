import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('zerc_visited');
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('zerc_visited', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-[100]"
            onClick={handleClose}
          />
          
          {/* Popup - Centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div className="w-full max-w-lg">
              <div className="relative bg-background border border-border overflow-hidden shadow-2xl">
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 z-10 p-2 hover:bg-secondary transition-colors bg-white"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Image Section */}
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80"
                    alt="Football Jersey"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  
                  {/* Brand Name */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-4 left-0 right-0 text-center"
                  >
                    <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-[0.2em] text-foreground">
                      Zerć India
                    </h2>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 text-center">
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg md:text-xl text-muted-foreground mb-2"
                  >
                    Premium Football Jerseys
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-sm text-muted-foreground mb-6"
                  >
                    Get 10% OFF on your first order.
                  </motion.p>

                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    onClick={handleClose}
                    className="w-full py-4 bg-foreground text-background font-heading text-sm tracking-widest hover:bg-foreground/90 transition-colors"
                  >
                    START SHOPPING
                  </motion.button>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-4 text-xs text-muted-foreground"
                  >
                    Free shipping on orders above ₹1999
                  </motion.p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-foreground/20" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-foreground/20" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup;
