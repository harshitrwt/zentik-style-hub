import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "@/components/product/ProductCard";
import { useState } from "react";

interface Props {
  bestSellerProducts: any[];
  mustBuyProducts: any[];
}

const fallbackImages = [
  "https://images.unsplash.com/photo-1708035392101-b8e8fed39524?q=80&w=1170&auto=format",
  "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=1170&auto=format",
  "https://images.unsplash.com/photo-1529720317453-c8da503f2051?q=80&w=1170&auto=format",
];

// ✅ FIXED fallback structure
const makeFallbackProduct = (id: string, img: string) => ({
  id,
  name: "Premium Streetwear",
  price: 1499,
  category: "men",
  slug: "premium-streetwear",
  images: [img], // REQUIRED by ProductCard
});

const BestSeller = ({ bestSellerProducts, mustBuyProducts }: Props) => {
  const [bestSellerSlide, setBestSellerSlide] = useState(0);
  const [mustBuySlide, setMustBuySlide] = useState(0);

  const bestSellers =
    bestSellerProducts.length > 0
      ? bestSellerProducts
      : fallbackImages.map((img, i) =>
          makeFallbackProduct("fallback-bs-" + i, img)
        );

  const mustBuys =
    mustBuyProducts.length > 0
      ? mustBuyProducts
      : fallbackImages.map((img, i) =>
          makeFallbackProduct("fallback-mb-" + i, img)
        );

  const bestSellerTotal = Math.ceil(bestSellers.length / 4);
  const mustBuyTotal = Math.ceil(mustBuys.length / 4);

  return (
    <>
      {/* BEST SELLERS */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">

          {/* HEADER */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-wide">
              BEST SELLERS
            </h2>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {bestSellerSlide + 1}/{bestSellerTotal}
              </span>

              <div className="flex gap-2">
                <button
                  onClick={() => setBestSellerSlide(prev => Math.max(0, prev - 1))}
                  disabled={bestSellerSlide === 0}
                  className="p-2 border border-border hover:bg-secondary disabled:opacity-50"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={() =>
                    setBestSellerSlide(prev => Math.min(bestSellerTotal - 1, prev + 1))
                  }
                  disabled={bestSellerSlide === bestSellerTotal - 1}
                  className="p-2 border border-border hover:bg-secondary disabled:opacity-50"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {bestSellers
              .slice(bestSellerSlide * 4, bestSellerSlide * 4 + 4)
              .map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>

          <div className="flex justify-center mt-10">
            <Link
              to="/collections/best-sellers"
              className="px-8 py-4 border border-primary font-heading text-sm tracking-wide hover:bg-secondary inline-flex items-center gap-2"
            >
              View all
            </Link>
          </div>
        </div>
      </section>

      {/* MUST BUY */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">

          {/* HEADER */}
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
                  className="p-2 border border-border hover:bg-secondary disabled:opacity-50"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={() =>
                    setMustBuySlide(prev => Math.min(mustBuyTotal - 1, prev + 1))
                  }
                  disabled={mustBuySlide === mustBuyTotal - 1}
                  className="p-2 border border-border hover:bg-secondary disabled:opacity-50"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {mustBuys
              .slice(mustBuySlide * 4, mustBuySlide * 4 + 4)
              .map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>

          <div className="flex justify-center mt-10">
            <Link
              to="/collections/must-buy"
              className="px-8 py-4 border border-primary font-heading text-sm tracking-wide hover:bg-secondary inline-flex items-center gap-2"
            >
              View all
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSeller;
