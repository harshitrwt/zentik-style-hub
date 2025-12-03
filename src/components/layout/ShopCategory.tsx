import { Link } from "react-router-dom";

const categories = [
  {
    name: "DENIM",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=1000&q=80",
    link: "/collections/denim",
  },
  {
    name: "WINTER WEAR",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1000&q=80",
    link: "/collections/winter",
  },
  {
    name: "HOODIES",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1000&q=80",
    link: "/collections/hoodies",
  },
  {
    name: "SWEATERS",
    image:
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=1000&q=80",
    link: "/collections/sweaters",
  },
  {
    name: "TSHIRTS",
    image:
      "https://images.unsplash.com/photo-1520974735194-2bb30f7e2bc1?w=1000&q=80",
    link: "/collections/tshirts",
  }
];

const ShopByCategory = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wide mb-12 text-left">
          SHOP BY CATEGORY
        </h2>

        {/* 6-box Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6">
          {/* Left big box spanning 2 rows */}
          <Link
            to={categories[0].link}
            className="relative col-span-2 row-span-2 md:col-span-2 md:row-span-2 overflow-hidden group"
          >
            <img
              src={categories[0].image}
              alt={categories[0].name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="font-heading text-3xl md:text-4xl font-bold tracking-wide">
                {categories[0].name}
              </h3>
              <span className="inline-flex items-center gap-2 text-sm tracking-wide opacity-90">
                Shop Now →
              </span>
            </div>
          </Link>

          {/* Right top row boxes */}
          {categories.slice(1, 4).map((cat, idx) => (
            <Link
              key={idx}
              to={cat.link}
              className="relative overflow-hidden group"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-heading text-2xl md:text-3xl font-bold tracking-wide">
                  {cat.name}
                </h3>
                <span className="inline-flex items-center gap-2 text-sm tracking-wide opacity-90">
                  Shop Now →
                </span>
              </div>
            </Link>
          ))}

          {/* Right bottom row boxes */}
          {categories.slice(4, 6).map((cat, idx) => (
            <Link
              key={idx + 3}
              to={cat.link}
              className="relative overflow-hidden group"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-heading text-2xl md:text-3xl font-bold tracking-wide">
                  {cat.name}
                </h3>
                <span className="inline-flex items-center gap-2 text-sm tracking-wide opacity-90">
                  Shop Now →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
