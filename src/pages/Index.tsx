import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';
import { motion } from 'framer-motion';
import ShopByCategory from '@/components/layout/ShopCategory';


const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProducts = products.filter(p => p.isNew || p.isLimited).slice(0, 4);
  const newArrivals = products.filter(p => p.isNew);
  const menProducts = products.filter(p => p.category === 'men').slice(0, 4);
  const womenProducts = products.filter(p => p.category === 'women').slice(0, 4);
  const [bestSellerSlide, setBestSellerSlide] = useState(0);
  const [mustBuySlide, setMustBuySlide] = useState(0);

  const bestSellers = products.slice(0, 8); // real data
  const mustBuys = products.slice(8, 16);

  const bestSellerTotal = Math.ceil(bestSellers.length / 4);
  const mustBuyTotal = Math.ceil(mustBuys.length / 4);


  const totalSlides = Math.ceil(featuredProducts.length / 4);
  const images = [
    'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&q=80',
    'https://images.unsplash.com/photo-1708035392101-b8e8fed39524?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0',
    'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0',
    'https://images.unsplash.com/photo-1529720317453-c8da503f2051?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0'
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[90vh] overflow-hidden">
        {/* Carousel Images */}
        <div className="absolute inset-0">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${idx === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <img
                src={img}
                alt={`Hero slide ${idx + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>

        {/* Text Overlay */}
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl">
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white drop-shadow-lg">
              DEFINE YOUR<br />
              <span className="text-gray-300">STYLE</span>
            </h1>
            <p className="text-md md:text-xl text-gray-300 mb-8 drop-shadow-md max-w-md leading-relaxed">
              Premium streetwear collection crafted for the modern individual.
              Elevate your wardrobe with our exclusive designs.
            </p>
            <Link
              to="/collections/men/all"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground font-heading text-lg font-semibold tracking-wide hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              SHOP NOW
            </Link>
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        
      </section>


      {/* Featured Products */}
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
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Link
              to="/collections/men/all"
              className="px-8 py-4 border border-primary font-heading text-sm tracking-wide hover:bg-secondary transition-colors inline-flex items-center gap-2"
            >
              View all
            </Link>
          </div>
        </div>
      </section>

      {/* BEST SELLERS – INFINITE SCROLL */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <style>
          {`
      /* glitch effect */
      .glitch {
        animation: glitch-animation 3s infinite;
      }

      @keyframes glitch-animation {
        0% { transform: translate(0,0); opacity: 1; }
        20% { transform: translate(-2px,2px); opacity: 0.9; }
        40% { transform: translate(2px,-2px); opacity: 1; }
        60% { transform: translate(-1px,1px); opacity: 0.95; }
        80% { transform: translate(1px,-1px); opacity: 1; }
        100% { transform: translate(0,0); opacity: 1; }
      }

      /* random gaps */
      .gap-card {
        opacity: 0;
      }
    `}
        </style>

        <div className="container mx-auto px-4">

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-wide">
              BEST SELLERS
            </h2>
          </div>

          {/* Infinite Scrolling Row */}
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Duplicate array to create perfect loop */}
            {[...bestSellers, ...bestSellers].map((product, i) => {

              // RANDOM glitch
              const isGlitch = Math.random() < 0.1;

              // RANDOM gap
              const isGap = Math.random() < 0.15;

              return (
                <div
                  key={i}
                  className={`min-w-[220px] md:min-w-[260px] ${isGap ? "gap-card" : ""
                    } ${isGlitch ? "glitch" : ""}`}
                >
                  <ProductCard product={product} />
                </div>
              );
            })}
          </motion.div>

          {/* View All */}
          <div className="flex justify-center mt-10">
            <Link
              to="/collections/best-sellers"
              className="px-8 py-4 border border-primary font-heading text-sm tracking-wide hover:bg-secondary transition-colors inline-flex items-center gap-2"
            >
              View all
            </Link>
          </div>
        </div>
      </section>



      {/* MUST BUY */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-wide">
              MUST BUY
            </h2>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {mustBuySlide + 1}/{mustBuyTotal}
              </span>

              <div className="flex gap-2">
                <button
                  onClick={() => setMustBuySlide(prev => Math.max(0, prev - 1))}
                  disabled={mustBuySlide === 0}
                  className="p-2 border border-border hover:bg-secondary transition-colors disabled:opacity-50"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setMustBuySlide(prev => Math.min(mustBuyTotal - 1, prev + 1))}
                  disabled={mustBuySlide === mustBuyTotal - 1}
                  className="p-2 border border-border hover:bg-secondary transition-colors disabled:opacity-50"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {mustBuys
              .slice(mustBuySlide * 4, mustBuySlide * 4 + 4)
              .map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>

          {/* View All */}
          <div className="flex justify-center mt-10">
            <Link
              to="/collections/must-buy"
              className="px-8 py-4 border border-primary font-heading text-sm tracking-wide hover:bg-secondary transition-colors inline-flex items-center gap-2"
            >
              View all
            </Link>
          </div>

        </div>
      </section>








      {/* New Arrivals */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-wide text-center mb-4 underline underline-offset-8">
            New Arrival
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
            {newArrivals.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <ShopByCategory />

      {/* Categories Banner */}
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

      {/* Brand Statement */}
      <section className="py-24 md:py-32 text-center">
        <div className="container mx-auto px-4">
          <p className="font-heading text-3xl md:text-5xl font-light tracking-wide leading-tight max-w-4xl mx-auto">
            "Premium quality meets <span className="font-bold">urban aesthetics</span>.
            Every piece tells a story of <span className="font-bold">craftsmanship</span> and style."
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
