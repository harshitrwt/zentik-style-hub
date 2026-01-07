import { useParams, useSearchParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import ProductFilter, { FilterState } from '@/components/product/ProductFilter';
import { products, jerseyCategories } from '@/data/products';

const Collections = () => {
  const { gender, category } = useParams<{ gender: string; category: string }>();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [localSearch, setLocalSearch] = useState(searchQuery);
  
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 2000],
    sizes: [],
    availability: 'all',
    sortBy: 'newest'
  });

  const pageTitle = category === 'all' 
    ? 'All Jerseys' 
    : jerseyCategories.find(c => c.slug === category)?.name || category?.replace(/-/g, ' ').toUpperCase() || 'Collection';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.subcategory.toLowerCase().includes(query)
      );
    }

    // Filter by subcategory
    if (category && category !== 'all') {
      // Check if it's a jersey type filter
      if (['embroidery', 'full-sleeve', 'retro', 'five-sleeve'].includes(category)) {
        result = result.filter(p => p.subcategory === category);
      }
      // Check for new arrivals
      else if (category === 'new-arrival') {
        result = result.filter(p => p.isNew);
      }
      // Check for best sellers
      else if (category === 'best-seller') {
        result = result.filter(p => p.isBestSeller);
      }
      // Check for club/team names in product name
      else {
        const categoryName = category.replace(/-/g, ' ').toLowerCase();
        result = result.filter(p => 
          p.name.toLowerCase().includes(categoryName) ||
          p.slug.includes(category)
        );
      }
    }

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
  }, [category, filters, searchQuery]);

  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        {searchQuery && (
          <p className="text-sm text-muted-foreground mb-2">
            Home › Search: {filteredProducts.length} results found for "<span className="text-success">{searchQuery}</span>"
          </p>
        )}

        {/* Page Header */}
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-bold tracking-wide mb-4">
            {searchQuery ? 'Search Our Site' : pageTitle}
          </h1>
          
          {/* Search Box */}
          <div className="max-w-xl mx-auto mb-4">
            <div className="relative">
              <input
                type="text"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                placeholder={searchQuery || "Search jerseys..."}
                className="w-full px-6 py-3 bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
          </div>

          <p className="text-muted-foreground">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'}
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

export default Collections;
