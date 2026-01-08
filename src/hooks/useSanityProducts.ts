import { useQuery } from '@tanstack/react-query';
import { sanityClient, productsQuery, bestSellersQuery, newArrivalsQuery, productBySlugQuery, productsBySubcategoryQuery } from '@/lib/sanity';
import { products as fallbackProducts } from '@/data/products';

// Unified Product type that works with both Sanity and fallback data
export interface SanityProduct {
  _id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  images: { url: string; alt?: string }[];
  category: string;
  subcategory: string;
  sizes: { label: string; price?: number; inStock: boolean }[];
  colors: { name: string; hex: string }[];
  description: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  isMustBuy?: boolean;
  isLimited?: boolean;
}

// Transform fallback product to match Sanity structure
const transformFallbackProduct = (product: typeof fallbackProducts[0]): SanityProduct => ({
  _id: product.id,
  name: product.name,
  slug: product.slug,
  price: product.price,
  originalPrice: product.originalPrice,
  discount: product.discount,
  images: product.images.map(url => ({ url, alt: product.name })),
  category: product.category,
  subcategory: product.subcategory,
  sizes: product.sizes.map(label => ({ label, inStock: true })),
  colors: product.colors,
  description: product.description,
  isNew: product.isNew,
  isBestSeller: product.isBestSeller,
  isMustBuy: product.isMustBuy,
  isLimited: product.isLimited,
});

// Fetch all products from Sanity
export const useProducts = () => {
  return useQuery<SanityProduct[]>({
    queryKey: ['products'],
    queryFn: async () => {
      try {
        const sanityProducts = await sanityClient.fetch(productsQuery);
        if (sanityProducts && sanityProducts.length > 0) {
          return sanityProducts;
        }
        // Fallback to hardcoded products
        return fallbackProducts.map(transformFallbackProduct);
      } catch (error) {
        console.error('Error fetching from Sanity:', error);
        return fallbackProducts.map(transformFallbackProduct);
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

// Fetch best sellers
export const useBestSellers = () => {
  return useQuery<SanityProduct[]>({
    queryKey: ['bestSellers'],
    queryFn: async () => {
      try {
        const sanityProducts = await sanityClient.fetch(bestSellersQuery);
        if (sanityProducts && sanityProducts.length > 0) {
          return sanityProducts;
        }
        return fallbackProducts.filter(p => p.isBestSeller).map(transformFallbackProduct);
      } catch (error) {
        console.error('Error fetching best sellers:', error);
        return fallbackProducts.filter(p => p.isBestSeller).map(transformFallbackProduct);
      }
    },
    staleTime: 1000 * 60 * 5,
  });
};

// Fetch new arrivals
export const useNewArrivals = () => {
  return useQuery<SanityProduct[]>({
    queryKey: ['newArrivals'],
    queryFn: async () => {
      try {
        const sanityProducts = await sanityClient.fetch(newArrivalsQuery);
        if (sanityProducts && sanityProducts.length > 0) {
          return sanityProducts;
        }
        return fallbackProducts.filter(p => p.isNew).map(transformFallbackProduct);
      } catch (error) {
        console.error('Error fetching new arrivals:', error);
        return fallbackProducts.filter(p => p.isNew).map(transformFallbackProduct);
      }
    },
    staleTime: 1000 * 60 * 5,
  });
};

// Fetch single product by slug
export const useProductBySlug = (slug: string) => {
  return useQuery<SanityProduct | null>({
    queryKey: ['product', slug],
    queryFn: async () => {
      try {
        const sanityProduct = await sanityClient.fetch(productBySlugQuery, { slug });
        if (sanityProduct) {
          return sanityProduct;
        }
        const fallback = fallbackProducts.find(p => p.slug === slug);
        return fallback ? transformFallbackProduct(fallback) : null;
      } catch (error) {
        console.error('Error fetching product:', error);
        const fallback = fallbackProducts.find(p => p.slug === slug);
        return fallback ? transformFallbackProduct(fallback) : null;
      }
    },
    staleTime: 1000 * 60 * 5,
    enabled: !!slug,
  });
};

// Fetch products by subcategory
export const useProductsBySubcategory = (subcategory: string) => {
  return useQuery<SanityProduct[]>({
    queryKey: ['products', 'subcategory', subcategory],
    queryFn: async () => {
      try {
        const sanityProducts = await sanityClient.fetch(productsBySubcategoryQuery, { subcategory });
        if (sanityProducts && sanityProducts.length > 0) {
          return sanityProducts;
        }
        return fallbackProducts.filter(p => p.subcategory === subcategory).map(transformFallbackProduct);
      } catch (error) {
        console.error('Error fetching products by subcategory:', error);
        return fallbackProducts.filter(p => p.subcategory === subcategory).map(transformFallbackProduct);
      }
    },
    staleTime: 1000 * 60 * 5,
    enabled: !!subcategory,
  });
};

// Helper to get image URL from Sanity product
export const getProductImageUrl = (product: SanityProduct, index = 0): string => {
  if (!product.images || product.images.length === 0) {
    return '/placeholder.svg';
  }
  return product.images[index]?.url || product.images[0]?.url || '/placeholder.svg';
};

// Check if a specific size is in stock
export const isSizeInStock = (product: SanityProduct, sizeLabel: string): boolean => {
  const size = product.sizes?.find(s => s.label === sizeLabel);
  return size?.inStock ?? false;
};

// Get price for a specific size (if size-based pricing)
export const getSizePrice = (product: SanityProduct, sizeLabel: string): number => {
  const size = product.sizes?.find(s => s.label === sizeLabel);
  return size?.price || product.price;
};
