import { Link } from 'react-router-dom';

const OurStory = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-background/70" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
              OUR STORY
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Crafting premium streetwear since 2020
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wide mb-6">
                THE BEGINNING
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ZENTIK was born from a simple idea: to create streetwear that doesn't compromise on quality or style. 
                Founded in 2020, we started as a small passion project, designing clothes that we ourselves wanted to wear.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What began in a small studio has grown into a movement. Today, ZENTIK represents a community of 
                individuals who believe in expressing themselves through fashion that's both bold and timeless.
              </p>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
                alt="ZENTIK Studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wide text-center mb-16">
            OUR VALUES
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 border border-primary flex items-center justify-center">
                <span className="font-heading text-2xl font-bold">01</span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-4">QUALITY FIRST</h3>
              <p className="text-muted-foreground">
                Every piece is crafted with premium materials and meticulous attention to detail. 
                We believe in creating clothes that last.
              </p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 border border-primary flex items-center justify-center">
                <span className="font-heading text-2xl font-bold">02</span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-4">AUTHENTIC DESIGN</h3>
              <p className="text-muted-foreground">
                Our designs are original and bold. We draw inspiration from urban culture, 
                art, and the streets that shape our world.
              </p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 border border-primary flex items-center justify-center">
                <span className="font-heading text-2xl font-bold">03</span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-4">COMMUNITY</h3>
              <p className="text-muted-foreground">
                ZENTIK is more than a brand—it's a community. We celebrate individuality 
                and the unique stories of everyone who wears our clothes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80"
                alt="ZENTIK Collection"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80"
                alt="ZENTIK Collection"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80"
                alt="ZENTIK Collection"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80"
                alt="ZENTIK Collection"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-4 text-center">
          <p className="font-heading text-2xl md:text-4xl font-light tracking-wide leading-relaxed max-w-4xl mx-auto">
            "We don't just make clothes. We create <span className="font-bold">statements</span>. 
            Every thread, every stitch, every design tells the story of who you are."
          </p>
          <p className="mt-8 text-muted-foreground font-heading tracking-wide">
            — ZENTIK FOUNDERS
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wide mb-6">
            JOIN THE MOVEMENT
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our latest collections and find pieces that speak to your unique style.
          </p>
          <Link 
            to="/collections/men/all"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-heading text-sm tracking-wide hover:bg-primary/90 transition-colors"
          >
            SHOP NOW
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
