import { useParams, useSearchParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import ProductFilter, { FilterState } from '@/components/product/ProductFilter';
import { jerseyCategories } from '@/data/products';
import { useProducts } from '@/hooks/useSanityProducts';

const Collections = () => {
  const { category } = useParams<{ gender: string; category: string }>();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [localSearch, setLocalSearch] = useState(searchQuery);
  
  const { data: products = [], isLoading } = useProducts();
  
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
        p.description?.toLowerCase().includes(query) ||
        p.subcategory?.toLowerCase().includes(query)
      );
    }

    // Filter by subcategory
    if (category && category !== 'all') {
      if (['embroidery', 'full-sleeve', 'retro', 'five-sleeve'].includes(category)) {
        result = result.filter(p => p.subcategory === category);
      } else if (category === 'new-arrival') {
        result = result.filter(p => p.isNew);
      } else if (category === 'best-seller') {
        result = result.filter(p => p.isBestSeller);
      } else {
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
        filters.sizes.some(size => p.sizes?.some(s => s.label === size))
      );
    }

    // Apply availability filter
    if (filters.availability === 'inStock') {
      result = result.filter(p => p.sizes?.some(s => s.inStock));
    } else if (filters.availability === 'outOfStock') {
      result = result.filter(p => !p.sizes?.some(s => s.inStock));
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
  }, [category, filters, searchQuery, products]);

  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {searchQuery && (
          <p className="text-sm text-muted-foreground mb-2">
            Home › Search: {filteredProducts.length} results found for "<span className="text-success">{searchQuery}</span>"
          </p>
        )}

        <div className="mb-8 md:mb-12 text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-bold tracking-wide mb-4">
            {searchQuery ? 'Search Our Site' : pageTitle}
          </h1>
          
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

        <ProductFilter onFilterChange={setFilters} initialFilters={filters} />

        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-secondary aspect-[3/4] rounded-lg mb-4" />
                <div className="h-4 bg-secondary rounded mb-2" />
                <div className="h-4 bg-secondary rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product._id} product={product} />
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
