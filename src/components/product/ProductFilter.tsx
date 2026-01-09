import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

interface FilterProps {
  onFilterChange: (filters: FilterState) => void;
  initialFilters?: FilterState;
}

export interface FilterState {
  priceRange: [number, number];
  sizes: string[];
  availability: 'all' | 'inStock' | 'outOfStock';
  sortBy: 'newest' | 'priceAsc' | 'priceDesc' | 'name';
  category: string; 
}

const allSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const allCategories = [
  { value: '', label: 'All' },
  { value: 'new-arrival', label: 'New Arrival' },
  { value: 'best-seller', label: 'Best Seller' },
  { value: 'retro', label: 'Retro' },
  { value: 'full-sleeve', label: 'Full Sleeve' },
  { value: 'fan-edition', label: 'Fan Edition' },
  { value: 'embroidery', label: 'Embroidery' },
];
const MAX_PRICE = 2000;

const ProductFilter = ({ onFilterChange, initialFilters }: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>(initialFilters || {
    priceRange: [0, MAX_PRICE],
    sizes: [],
    availability: 'all',
    sortBy: 'newest',
    category: '',  // <-- initialize category
  });

  const [expandedSections, setExpandedSections] = useState<string[]>(['price', 'size', 'availability', 'category']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const updateFilter = (key: keyof FilterState, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const toggleSize = (size: string) => {
    const newSizes = filters.sizes.includes(size)
      ? filters.sizes.filter(s => s !== size)
      : [...filters.sizes, size];
    updateFilter('sizes', newSizes);
  };

  const clearFilters = () => {
    const defaultFilters: FilterState = {
      priceRange: [0, MAX_PRICE],
      sizes: [],
      availability: 'all',
      sortBy: 'newest',
      category: '',  // reset category too
    };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  const hasActiveFilters =
    filters.sizes.length > 0 ||
    filters.availability !== 'all' ||
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < MAX_PRICE ||
    filters.category !== '';

  const formatPrice = (price: number) => `₹${price}`;

  return (
    <div className="mb-8">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden flex items-center justify-between mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 border border-border font-heading text-sm tracking-wide"
        >
          FILTER & SORT
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Sort (Desktop) */}
      <div className="hidden lg:flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <select
            value={filters.sortBy}
            onChange={(e) => updateFilter('sortBy', e.target.value)}
            className="bg-background border border-border px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary rounded"
          >
            <option value="newest">Newest</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>

        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
            Clear Filters
          </button>
        )}
      </div>

      {/* Filter Panel */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-start gap-8 pb-6 border-b border-border`}>
        {/* Price Range with Draggable Slider */}
        <div className="mb-6 lg:mb-0 lg:min-w-[280px]">
          <button
            onClick={() => toggleSection('price')}
            className="flex items-center justify-between w-full lg:w-auto font-heading text-sm font-medium tracking-wide mb-3"
          >
            PRICE
            <ChevronDown className={`lg:hidden w-4 h-4 transition-transform ${expandedSections.includes('price') ? 'rotate-180' : ''}`} />
          </button>

          {expandedSections.includes('price') && (
            <div className="space-y-4">
              <div className="px-2">
                <Slider
                  value={filters.priceRange}
                  onValueChange={(value) => updateFilter('priceRange', value as [number, number])}
                  max={MAX_PRICE}
                  min={0}
                  step={50}
                  className="w-full"
                />
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{formatPrice(filters.priceRange[0])}</span>
                <span>{formatPrice(filters.priceRange[1])}</span>
              </div>
            </div>
          )}
        </div>

        {/* Size */}
        <div className="mb-6 lg:mb-0">
          <button
            onClick={() => toggleSection('size')}
            className="flex items-center justify-between w-full lg:w-auto font-heading text-sm font-medium tracking-wide mb-3"
          >
            SIZE
            <ChevronDown className={`lg:hidden w-4 h-4 transition-transform ${expandedSections.includes('size') ? 'rotate-180' : ''}`} />
          </button>

          {expandedSections.includes('size') && (
            <div className="flex flex-wrap gap-2">
              {allSizes.map(size => (
                <button
                  key={size}
                  onClick={() => toggleSize(size)}
                  className={`px-4 py-2 border text-sm transition-colors rounded ${
                    filters.sizes.includes(size)
                      ? 'border-foreground bg-foreground text-background'
                      : 'border-border hover:border-foreground'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Availability */}
        <div className="mb-6 lg:mb-0">
          <button
            onClick={() => toggleSection('availability')}
            className="flex items-center justify-between w-full lg:w-auto font-heading text-sm font-medium tracking-wide mb-3"
          >
            AVAILABILITY
            <ChevronDown className={`lg:hidden w-4 h-4 transition-transform ${expandedSections.includes('availability') ? 'rotate-180' : ''}`} />
          </button>

          {expandedSections.includes('availability') && (
            <div className="flex flex-col gap-2">
              {[
                { value: 'all', label: 'All' },
                { value: 'inStock', label: 'In Stock' },
                { value: 'outOfStock', label: 'Out of Stock' }
              ].map(option => (
                <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="availability"
                    checked={filters.availability === option.value}
                    onChange={() => updateFilter('availability', option.value)}
                    className="w-4 h-4 accent-foreground"
                  />
                  <span className="text-sm">{option.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Sort */}
        <div className="lg:hidden">
          <button
            onClick={() => toggleSection('sort')}
            className="flex items-center justify-between w-full font-heading text-sm font-medium tracking-wide mb-3"
          >
            SORT BY
            <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.includes('sort') ? 'rotate-180' : ''}`} />
          </button>

          {expandedSections.includes('sort') && (
            <div className="flex flex-col gap-2">
              {[
                { value: 'newest', label: 'Newest' },
                { value: 'priceAsc', label: 'Price: Low to High' },
                { value: 'priceDesc', label: 'Price: High to Low' },
                { value: 'name', label: 'Name' }
              ].map(option => (
                <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="sortBy"
                    checked={filters.sortBy === option.value}
                    onChange={() => updateFilter('sortBy', option.value as FilterState['sortBy'])}
                    className="w-4 h-4 accent-foreground"
                  />
                  <span className="text-sm">{option.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
