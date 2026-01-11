import { Link } from 'react-router-dom';

const OurStory = () => {
  return (
    <div className="bg-background text-foreground">
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1563580853176-38535245e8b6?q=80&w=1159&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Football culture"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 mt-10 text-white">
              OUR STORY
            </h1>
            <p className="text-lg text-gray-200 md:text-xl text-muted-foreground max-w-2xl">
              Bringing legendary football moments to life through premium, 
              collectible jerseys made for true fans.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              THE BEGINNING
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Zerć India was born from an obsession with football — the culture,
              the history, and the emotion stitched into every legendary jersey.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              What started as a passion project is now a curated destination for
              retro and premium football jerseys that celebrate iconic players,
              unforgettable moments, and timeless designs.
            </p>
          </div>

          {/* Image Stack */}
          <div className="relative h-[420px] md:h-[520px]">
            <img
              src="https://images.pexels.com/photos/32540205/pexels-photo-32540205.png"
              alt="Football stadium"
              className="absolute top-0 left-0 w-[70%] h-[70%] object-cover rounded-xl shadow-xl"
            />
            <img
              src="https://images.pexels.com/photos/32022220/pexels-photo-32022220.png"
              alt="Football crowd"
              className="absolute bottom-0 right-0 w-[65%] h-[65%] object-cover rounded-xl shadow-xl border border-border"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16">
            WHY ZERĆ INDIA
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: 'PREMIUM QUALITY',
                desc: 'High-grade fabrics, detailed embroidery, and durable prints built to last season after season.',
                index: '01',
              },
              {
                title: 'AUTHENTIC DESIGNS',
                desc: 'Iconic jerseys inspired by football legends and historic moments that shaped the game.',
                index: '02',
              },
              {
                title: 'BUILT FOR FANS',
                desc: 'Designed by football lovers, for football lovers — because jerseys are more than merch.',
                index: '03',
              },
            ].map((item) => (
              <div
                key={item.index}
                className="relative p-10 border border-border rounded-2xl bg-background hover:shadow-xl transition-shadow"
              >
                <span className="absolute -top-6 left-6 text-5xl font-heading font-bold text-muted-foreground/20">
                  {item.index}
                </span>
                <h3 className="font-heading text-xl font-bold mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "https://images.unsplash.com/photo-1563580853176-38535245e8b6?q=80&w=1159&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1665413813191-3143ec934960?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1595030044556-acfaa61edc0f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.pexels.com/photos/10732400/pexels-photo-10732400.jpeg"
            ].map((src, i) => (
              <div
                key={i}
                className="aspect-[3/4] overflow-hidden rounded-xl"
              >
                <img
                  src={src}
                  alt="Football culture"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-28 bg-card">
        <div className="container mx-auto px-4 text-center">
          <p className="font-heading text-2xl md:text-4xl font-light max-w-4xl mx-auto leading-relaxed">
            “Football isn&apos;t just played — it&apos;s felt.  
            Every jersey carries a story of passion, pride, and history.”
          </p>
          <p className="mt-8 text-muted-foreground font-heading tracking-wide">
            — ZERĆ INDIA
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            WEAR YOUR LEGENDS
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            Discover premium football jerseys crafted for fans who live and breathe the game.
          </p>
          <Link
            to="/shop"
            className="inline-block px-10 py-4 bg-foreground text-background font-heading text-sm tracking-wide hover:bg-foreground/90 transition-colors rounded-full"
          >
            SHOP COLLECTION
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
