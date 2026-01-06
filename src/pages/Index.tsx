import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import ProductCard from '@/components/product/ProductCard';
import { products, jerseyCategories, getBestSellers, getNewArrivals } from '@/data/products';
import { motion, useScroll, useTransform } from 'framer-motion';
import WelcomePopup from '@/components/WelcomePopup';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProducts = products.filter(p => p.isNew || p.isLimited).slice(0, 8);
  const totalSlides = Math.ceil(featuredProducts.length / 4);
  
  const bestSellers = getBestSellers();
  const newArrivals = getNewArrivals();

  const bestSellerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const heroImages = [
    '/images/hero-1.jpg',
    '/images/hero-2.jpg',
    '/images/hero-3.jpg'
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hero parallax
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Drag scroll handlers for best sellers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!bestSellerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - bestSellerRef.current.offsetLeft);
    setScrollLeft(bestSellerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !bestSellerRef.current) return;
    e.preventDefault();
    const x = e.pageX - bestSellerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    bestSellerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  return (
    <div className="overflow-hidden">
      <WelcomePopup />

      {/* Hero Section */}
      <section className="relative h-[100vh] overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          {heroImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={img}
                alt={`Hero slide ${idx + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>

        {/* Text Overlay */}
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-sm tracking-[0.3em] text-muted-foreground mb-4 block">
                PREMIUM FOOTBALL JERSEYS
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-heading text-5xl md:text-7xl font-black tracking-tight mb-6 text-foreground leading-none"
            >
              WEAR
              <br />
              <span className="text-muted-foreground">YOUR</span>
              <br />
              LEGENDS
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md leading-relaxed"
            >
              Authentic retro football jerseys from legendary clubs and players.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-4"
            >
              <Link
                to="/collections/jersey/all"
                className="group relative px-8 py-4 bg-foreground text-background font-heading text-sm tracking-widest overflow-hidden"
              >
                <span className="relative z-10">SHOP NOW</span>
                <div className="absolute inset-0 bg-foreground/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                to="/collections/jersey/retro"
                className="group px-8 py-4 border border-foreground/30 font-heading text-sm tracking-widest hover:bg-foreground/10 transition-colors"
              >
                RETRO COLLECTION
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-wide text-center mb-12">
            Shop by Category
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {jerseyCategories.map((cat, idx) => (
              <Link
                key={idx}
                to={`/collections/jersey/${cat.slug}`}
                className="group text-center"
              >
                <div className="relative w-full aspect-square rounded-full overflow-hidden mx-auto mb-4 border-2 border-border group-hover:border-foreground transition-colors">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <span className="font-heading text-sm tracking-wide text-muted-foreground group-hover:text-foreground transition-colors">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-wide">FEATURED</h2>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {currentSlide + 1}/{totalSlides}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
                  disabled={currentSlide === 0}
                  className="p-2 border border-border hover:bg-secondary transition-colors disabled:opacity-50"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentSlide(prev => Math.min(totalSlides - 1, prev + 1))}
                  disabled={currentSlide === totalSlides - 1}
                  className="p-2 border border-border hover:bg-secondary transition-colors disabled:opacity-50"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.slice(currentSlide * 4, currentSlide * 4 + 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Link
              to="/collections/jersey/all"
              className="px-8 py-4 border border-border font-heading text-sm tracking-wide hover:bg-secondary transition-colors inline-flex items-center gap-2"
            >
              View all
            </Link>
          </div>
        </div>
      </section>

      {/* BEST SELLERS – DRAGGABLE SCROLL */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-wide">
              BEST SELLERS
            </h2>
            <span className="text-sm text-muted-foreground">← Drag →</span>
          </div>

          <div 
            ref={bestSellerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className={`flex gap-4 overflow-x-auto scrollbar-hide pb-4 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
          >
            {[...bestSellers, ...bestSellers].map((product, i) => (
              <div
                key={`${product.id}-${i}`}
                className="w-[180px] md:w-[280px] flex-shrink-0"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Link
              to="/collections/jersey/best-seller"
              className="px-8 py-4 border border-border font-heading text-sm tracking-wide hover:bg-secondary transition-colors inline-flex items-center gap-2"
            >
              View all Best Sellers
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-wide text-center mb-4 underline underline-offset-8">
            NEW ARRIVALS
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
            {newArrivals.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-wide mb-8">
            Products
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Link
              to="/collections/jersey/all"
              className="px-8 py-4 bg-foreground text-background font-heading text-sm tracking-wide hover:bg-foreground/90 transition-colors inline-flex items-center gap-2"
            >
              Load more
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-24 md:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <span className="font-heading text-[20vw] font-black tracking-wider">Z</span>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <p className="font-heading text-3xl md:text-5xl font-light tracking-wide leading-tight max-w-4xl mx-auto">
            "Premium quality <span className="font-bold">football jerseys</span>.
            Celebrating the <span className="font-bold">legends</span> of the beautiful game."
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
