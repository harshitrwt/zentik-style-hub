import { useMemo, useState } from 'react';
import ProductCard from '@/components/product/ProductCard';
import ProductFilter, { FilterState } from '@/components/product/ProductFilter';
import { products, jerseyCategories } from '@/data/products';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 2000],
    sizes: [],
    availability: 'all',
    sortBy: 'newest'
  });

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Apply price filter
    result = result.filter(p => 
      p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    // Apply size filter
    if (filters.sizes.length > 0) {
      result = result.filter(p => 
        filters.sizes.some(size => p.sizes.includes(size))
      );
    }

    // Apply availability filter
    if (filters.availability === 'inStock') {
      result = result.filter(p => p.inStock);
    } else if (filters.availability === 'outOfStock') {
      result = result.filter(p => !p.inStock);
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'priceAsc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
      default:
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return result;
  }, [filters]);

  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Shop by Category */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-wide text-center mb-8">
            Shop by Category
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {jerseyCategories.map((cat, idx) => (
              <Link
                key={idx}
                to={`/collections/jersey/${cat.slug}`}
                className="group text-center"
              >
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mx-auto mb-3 border-2 border-border group-hover:border-foreground transition-colors">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <span className="font-heading text-xs md:text-sm tracking-wide group-hover:text-muted-foreground transition-colors">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-bold tracking-wide mb-4">
            Products
          </h1>
          <p className="text-muted-foreground">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        {/* Filters */}
        <ProductFilter 
          onFilterChange={setFilters}
          initialFilters={filters}
        />

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-muted-foreground">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
