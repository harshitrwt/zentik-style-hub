import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import ProductCard from '@/components/product/ProductCard';
import { products, getSummerEssentials, getDenims, getPants, getWomensEssentials } from '@/data/products';
import { motion, useScroll, useTransform } from 'framer-motion';
import ShopByCategory from '@/components/layout/ShopCategory';
import ScrollReveal from '@/components/ScrollReveal';
import WelcomePopup from '@/components/WelcomePopup';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProducts = products.filter(p => p.isNew || p.isLimited).slice(0, 8);
  const newArrivals = products.filter(p => p.isNew).slice(0, 8);
  const menProducts = products.filter(p => p.category === 'men').slice(0, 4);
  const womenProducts = products.filter(p => p.category === 'women').slice(0, 4);

  const bestSellers = products.filter(p => p.isBestSeller);
  const mustBuys = products.filter(p => p.isMustBuy);
  const summerEssentials = getSummerEssentials();
  const denims = getDenims();
  const pants = getPants();
  const womensWear = getWomensEssentials();

  const bestSellerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const totalSlides = Math.ceil(featuredProducts.length / 4);
  const heroImages = [
    'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&q=80',
    'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&q=80',
    'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=1920&q=80',
    'https://images.unsplash.com/photo-1529720317453-c8da503f2051?w=1920&q=80'
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

      {/* Hero Section - Enhanced */}
      <section className="relative h-[100vh] overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          {heroImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ 
                opacity: idx === currentIndex ? 1 : 0,
                scale: idx === currentIndex ? 1 : 1.1
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img
                src={img}
                alt={`Hero slide ${idx + 1}`}
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>

        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Text Overlay */}
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-sm tracking-[0.3em] text-foreground/60 mb-4 block">
                PREMIUM STREETWEAR
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-heading text-6xl md:text-8xl font-black tracking-tight mb-6 text-foreground leading-none"
            >
              DEFINE
              <br />
              <span className="text-foreground/60">YOUR</span>
              <br />
              STYLE
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-foreground/70 mb-8 max-w-md leading-relaxed"
            >
              Premium streetwear collection crafted for the modern individual.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-4"
            >
              <Link
                to="/collections/men/all"
                className="group relative px-8 py-4 bg-foreground text-background font-heading text-sm tracking-widest overflow-hidden"
              >
                <span className="relative z-10">SHOP MEN</span>
                <div className="absolute inset-0 bg-foreground/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                to="/collections/women/all"
                className="group px-8 py-4 border border-foreground/30 font-heading text-sm tracking-widest hover:bg-foreground/10 transition-colors"
              >
                SHOP WOMEN
              </Link>
            </motion.div>
          </div>

          {/* Floating Brand Text */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-20 right-8 hidden lg:block"
          >
            <span className="font-heading text-[8rem] font-black text-foreground/5 tracking-wider">
              Z
            </span>
          </motion.div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 transition-all duration-500 ${
                idx === currentIndex 
                  ? 'w-12 bg-foreground' 
                  : 'w-6 bg-foreground/30 hover:bg-foreground/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest text-foreground/50 rotate-90 origin-center translate-y-8">
            SCROLL
          </span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-12 bg-gradient-to-b from-foreground/50 to-transparent"
          />
        </motion.div>
      </section>

      {/* Featured Products */}
      <ScrollReveal>
        <section className="py-16 md:py-24">
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
              {featuredProducts.slice(currentSlide * 4, currentSlide * 4 + 4).map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Link
                to="/collections/men/all"
                className="px-8 py-4 border border-border font-heading text-sm tracking-wide hover:bg-secondary transition-colors inline-flex items-center gap-2"
              >
                View all
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* BEST SELLERS – DRAGGABLE SCROLL */}
      <ScrollReveal>
        <section className="py-16 md:py-24 relative overflow-hidden bg-card/50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-wide">
                BEST SELLERS
              </h2>
              <span className="text-sm text-muted-foreground">← Drag to scroll →</span>
            </div>

            {/* Draggable Scroll Container */}
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
                  className="min-w-[200px] md:min-w-[280px] flex-shrink-0"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Link
                to="/collections/best-sellers"
                className="px-8 py-4 border border-border font-heading text-sm tracking-wide hover:bg-secondary transition-colors inline-flex items-center gap-2"
              >
                View all
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* MUST BUY */}
      <ScrollReveal>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-wide mb-8">
              MUST BUY
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {mustBuys.slice(0, 8).map((product, idx) => (
                <ScrollReveal key={product.id} delay={idx * 0.05}>
                  <ProductCard product={product} />
                </ScrollReveal>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Link
                to="/collections/must-buy"
                className="px-8 py-4 border border-border font-heading text-sm tracking-wide hover:bg-secondary transition-colors inline-flex items-center gap-2"
              >
                View all
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* New Arrivals */}
      <ScrollReveal>
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-wide text-center mb-4 underline underline-offset-8">
              NEW ARRIVALS
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
              {newArrivals.slice(0, 8).map((product, idx) => (
                <ScrollReveal key={product.id} delay={idx * 0.05}>
                  <ProductCard product={product} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Summer Essentials */}
      <ScrollReveal>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-wide">
                SUMMER ESSENTIALS
              </h2>
              <span className="text-sm text-foreground/50">☀️</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {summerEssentials.slice(0, 8).map((product, idx) => (
                <ScrollReveal key={product.id} delay={idx * 0.05}>
                  <ProductCard product={product} />
                </ScrollReveal>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Link
                to="/collections/summer"
                className="px-8 py-4 border border-border font-heading text-sm tracking-wide hover:bg-secondary transition-colors"
              >
                Shop Summer
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Denims */}
      <ScrollReveal>
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-wide mb-8">
              DENIMS
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {denims.slice(0, 8).map((product, idx) => (
                <ScrollReveal key={product.id} delay={idx * 0.05}>
                  <ProductCard product={product} />
                </ScrollReveal>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Link
                to="/collections/denims"
                className="px-8 py-4 border border-border font-heading text-sm tracking-wide hover:bg-secondary transition-colors"
              >
                Shop Denims
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Pants */}
      <ScrollReveal>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-wide mb-8">
              PANTS & JOGGERS
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {pants.slice(0, 8).map((product, idx) => (
                <ScrollReveal key={product.id} delay={idx * 0.05}>
                  <ProductCard product={product} />
                </ScrollReveal>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Link
                to="/collections/pants"
                className="px-8 py-4 border border-border font-heading text-sm tracking-wide hover:bg-secondary transition-colors"
              >
                Shop Pants
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Women's Wear */}
      <ScrollReveal>
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-wide mb-8">
              WOMEN'S COLLECTION
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {womensWear.slice(0, 8).map((product, idx) => (
                <ScrollReveal key={product.id} delay={idx * 0.05}>
                  <ProductCard product={product} />
                </ScrollReveal>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Link
                to="/collections/women/all"
                className="px-8 py-4 border border-border font-heading text-sm tracking-wide hover:bg-secondary transition-colors"
              >
                Shop Women
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Shop by Category */}
      <ShopByCategory />

      {/* Categories Banner */}
      <ScrollReveal>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Men's Category */}
              <Link
                to="/collections/men/all"
                className="relative h-[400px] md:h-[500px] overflow-hidden group"
              >
                <img
                  src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80"
                  alt="Men's Collection"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="font-heading text-3xl md:text-4xl font-bold tracking-wide mb-4">MEN'S</h3>
                  <span className="inline-flex items-center gap-2 font-heading text-sm tracking-wide group-hover:gap-4 transition-all">
                    SHOP NOW <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>

              {/* Women's Category */}
              <Link
                to="/collections/women/all"
                className="relative h-[400px] md:h-[500px] overflow-hidden group"
              >
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
                  alt="Women's Collection"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="font-heading text-3xl md:text-4xl font-bold tracking-wide mb-4">WOMEN'S</h3>
                  <span className="inline-flex items-center gap-2 font-heading text-sm tracking-wide group-hover:gap-4 transition-all">
                    SHOP NOW <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Brand Statement */}
      <ScrollReveal>
        <section className="py-24 md:py-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <span className="font-heading text-[30vw] font-black tracking-wider">Z</span>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <p className="font-heading text-3xl md:text-5xl font-light tracking-wide leading-tight max-w-4xl mx-auto">
              "Premium quality meets <span className="font-bold">urban aesthetics</span>.
              Every piece tells a story of <span className="font-bold">craftsmanship</span> and style."
            </p>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default Index;
