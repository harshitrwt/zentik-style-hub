import { Link } from 'react-router-dom';

const OurStory = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1920&q=80)',
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
              Bringing legendary football moments to life through premium jerseys
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
                Zerć India was born from a deep love for the beautiful game. As football enthusiasts, we understood the desire to wear the iconic jerseys of legendary players and historic moments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What started as a passion project has grown into India's premier destination for authentic retro and premium football jerseys. We curate jerseys that celebrate the greatest players, clubs, and moments in football history.
              </p>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80"
                alt="Football Stadium"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wide text-center mb-16">
            WHY CHOOSE US
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 border border-foreground flex items-center justify-center rounded-full">
                <span className="font-heading text-2xl font-bold">01</span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-4">PREMIUM QUALITY</h3>
              <p className="text-muted-foreground">
                Every jersey is crafted with premium materials and authentic embroidery. 
                We ensure quality that matches the legends they represent.
              </p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 border border-foreground flex items-center justify-center rounded-full">
                <span className="font-heading text-2xl font-bold">02</span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-4">AUTHENTIC DESIGNS</h3>
              <p className="text-muted-foreground">
                From Messi to Ronaldo, Kaka to Zidane - we bring you jerseys that 
                capture the essence of football's greatest moments.
              </p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 border border-foreground flex items-center justify-center rounded-full">
                <span className="font-heading text-2xl font-bold">03</span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-4">FAN COMMUNITY</h3>
              <p className="text-muted-foreground">
                Join thousands of football fans across India who trust Zerć India 
                for their jersey collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80"
                alt="Football Jerseys"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=600&q=80"
                alt="Football Match"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=600&q=80"
                alt="Football Stadium"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&q=80"
                alt="Football Fans"
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
            "Football is not just a game, it's a <span className="font-bold">feeling</span>. 
            Every jersey tells a story of passion, glory, and unforgettable moments."
          </p>
          <p className="mt-8 text-muted-foreground font-heading tracking-wide">
            — ZERĆ INDIA TEAM
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wide mb-6">
            WEAR YOUR LEGENDS
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our collection of premium football jerseys and find the perfect piece to celebrate your favorite players and clubs.
          </p>
          <Link 
            to="/shop"
            className="inline-block px-8 py-4 bg-foreground text-background font-heading text-sm tracking-wide hover:bg-foreground/90 transition-colors rounded"
          >
            SHOP NOW
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
