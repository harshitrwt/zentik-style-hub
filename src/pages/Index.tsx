import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProducts = products.filter(p => p.isNew || p.isLimited).slice(0, 4);
  const newArrivals = products.filter(p => p.isNew);
  const menProducts = products.filter(p => p.category === 'men').slice(0, 4);
  const womenProducts = products.filter(p => p.category === 'women').slice(0, 4);

  const totalSlides = Math.ceil(featuredProducts.length / 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[90vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl">
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
              DEFINE YOUR<br />
              <span className="text-muted-foreground">STYLE</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Premium streetwear collection crafted for the modern individual. 
              Elevate your wardrobe with our exclusive designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Link 
                to="/collections/men/all"
                className="px-8 py-4 bg-primary text-primary-foreground font-heading text-sm tracking-wide hover:bg-primary/90 transition-colors text-center"
              >
                SHOP MEN
              </Link>
              <Link 
                to="/collections/women/all"
                className="px-8 py-4 border border-primary font-heading text-sm tracking-wide hover:bg-secondary transition-colors text-center"
              >
                SHOP WOMEN
              </Link>
            </div>
          </div>
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
