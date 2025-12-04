import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  {
    name: "DENIM",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80",
    link: "/collections/denim",
  },
  {
    name: "WINTER WEAR",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
    link: "/collections/winter",
  },
  {
    name: "HOODIES",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
    link: "/collections/hoodies",
  },
  {
    name: "SWEATERS",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
    link: "/collections/sweaters",
  },
  {
    name: "T-SHIRTS",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80",
    link: "/collections/tshirts",
  },
  {
    name: "PANTS",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80",
    link: "/collections/pants",
  },
  {
    name: "JACKETS",
    image: "https://images.unsplash.com/photo-1544923246-77307dd628b6?w=800&q=80",
    link: "/collections/jackets",
  },
  {
    name: "SHIRTS",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
    link: "/collections/shirts",
  },
  {
    name: "SHORTS",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&q=80",
    link: "/collections/shorts",
  },
  {
    name: "DRESSES",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80",
    link: "/collections/dresses",
  },
  {
    name: "SKIRTS",
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&q=80",
    link: "/collections/skirts",
  },
  {
    name: "ATHLEISURE",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80",
    link: "/collections/athleisure",
  },
];

const ShopByCategory = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-4xl font-bold tracking-wide mb-12 text-left"
        >
          SHOP BY CATEGORY
        </motion.h2>

        {/* Grid Layout - 4 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <Link
                to={cat.link}
                className="relative block aspect-square overflow-hidden group"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-heading text-lg md:text-xl font-bold tracking-wider text-center px-2">
                    {cat.name}
                  </h3>
                </div>
                <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs tracking-widest text-foreground/80">
                    EXPLORE →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
