import { useParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import ProductCard from '@/components/product/ProductCard';
import ProductFilter, { FilterState } from '@/components/product/ProductFilter';
import { products, categories } from '@/data/products';

const Collections = () => {
  const { gender, category } = useParams<{ gender: string; category: string }>();
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 10000],
    sizes: [],
    availability: 'all',
    sortBy: 'newest'
  });

  const isLimited = gender === 'limited';
  const pageTitle = isLimited 
    ? 'Limited Edition' 
    : `${gender?.toUpperCase()}'S ${category === 'all' ? 'COLLECTION' : categories[gender as 'men' | 'women']?.find(c => c.slug === category)?.name?.toUpperCase() || 'COLLECTION'}`;

  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by gender/limited
    if (isLimited) {
      result = result.filter(p => p.isLimited);
    } else if (gender === 'men' || gender === 'women') {
      result = result.filter(p => p.category === gender);
      
      // Filter by subcategory
      if (category && category !== 'all') {
        result = result.filter(p => p.subcategory === category);
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
  }, [gender, category, filters, isLimited]);

  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="font-heading text-3xl md:text-4xl font-bold tracking-wide">
            {pageTitle}
          </h1>
          <p className="text-muted-foreground mt-2">
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

export default Collections;
