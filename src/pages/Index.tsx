import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import ProductCard from '@/components/product/ProductCard';
import { jerseyCategories } from '@/data/products';
import { useProducts, useBestSellers, useNewArrivals } from '@/hooks/useSanityProducts';
import { motion, useScroll, useTransform } from 'framer-motion';
import WelcomePopup from '@/components/WelcomePopup';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Fetch data from Sanity (with fallback)
  const { data: allProducts = [], isLoading: loadingProducts } = useProducts();
  const { data: bestSellers = [], isLoading: loadingBestSellers } = useBestSellers();
  const { data: newArrivals = [], isLoading: loadingNewArrivals } = useNewArrivals();

  const featuredProducts = allProducts.filter(p => p.isNew || p.isLimited).slice(0, 8);
  const totalSlides = Math.ceil(featuredProducts.length / 4) || 1;

  const bestSellerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const heroImages = [
    'https://cdn.pixabay.com/photo/2021/10/31/00/18/brazil-6755880_1280.jpg',
    'https://images.pexels.com/photos/30417185/pexels-photo-30417185.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200',
    'https://images.pexels.com/photos/3651674/pexels-photo-3651674.jpeg?cs=srgb&dl=pexels-aleksandar069-3651674.jpg&fm=jpg'
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

      <section className="relative h-[60vh] md:h-[100vh] overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          {heroImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <img
                src={img}
                alt={`Hero slide ${idx + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </motion.div>

        {/* Text Overlay */}
        <div className="relative container mx-auto px-4 h-full">
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-4"
            >
              <Link
                to="/shop"
                className="group relative px-8 py-4 bg-white text-black font-heading text-sm tracking-widest overflow-hidden flex items-center justify-center hover:bg-foreground/90 hover:text-white transition-colors mb-10"
              >
                <span className="relative z-10">SHOP NOW</span>
                <div className="absolute inset-0 bg-foreground/80 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Shop by Category */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-4xl font-semibold tracking-wide text-center mb-12">
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
                <span className="font-heading text-sm tracking-wide text-black group-hover:text-foreground transition-colors">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-white">
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

          {loadingProducts ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-secondary aspect-[3/4] rounded-lg mb-4" />
                  <div className="h-4 bg-secondary rounded mb-2" />
                  <div className="h-4 bg-secondary rounded w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {featuredProducts.slice(currentSlide * 4, currentSlide * 4 + 4).map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}

          <div className="flex justify-center mt-10">
            <Link
              to="/shop"
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

          {loadingBestSellers ? (
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-[180px] md:w-[280px] flex-shrink-0 animate-pulse">
                  <div className="bg-secondary aspect-[3/4] rounded-lg mb-4" />
                  <div className="h-4 bg-secondary rounded mb-2" />
                  <div className="h-4 bg-secondary rounded w-1/2" />
                </div>
              ))}
            </div>
          ) : (
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
                  key={`${product._id}-${i}`}
                  className="w-[180px] md:w-[280px] flex-shrink-0"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}

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

          {loadingNewArrivals ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-secondary aspect-[3/4] rounded-lg mb-4" />
                  <div className="h-4 bg-secondary rounded mb-2" />
                  <div className="h-4 bg-secondary rounded w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
              {newArrivals.slice(0, 8).map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-wide mb-8">
            Products
          </h2>

          {loadingProducts ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-secondary aspect-[3/4] rounded-lg mb-4" />
                  <div className="h-4 bg-secondary rounded mb-2" />
                  <div className="h-4 bg-secondary rounded w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {allProducts.slice(0, 8).map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}

          <div className="flex justify-center mt-10">
            <Link
              to="/shop"
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
            Celebrating the

            <img
              src="https://png.pngtree.com/png-vector/20221015/ourmid/pngtree-brazil-soccer-team-home-jersey-png-image_6332687.png"
              alt="Brazil Jersey"
              className="w-6 h-6 md:w-8 md:h-8 object-contain inline-block"
            />

            <span className="font-bold">legends</span> of the beautiful game."
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
