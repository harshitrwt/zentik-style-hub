export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: 'men' | 'women';
  subcategory: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  description: string;
  inStock: boolean;
  isNew?: boolean;
  isLimited?: boolean;
  isBestSeller?: boolean;
  isMustBuy?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Black Venom Dragon Hoodie",
    slug: "black-venom-dragon-hoodie",
    price: 3699,
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80"
    ],
    category: "men",
    subcategory: "hoodies",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Black", hex: "#000000" }],
    description: "Premium black hoodie featuring an intricate dragon print on the back. Made from 100% cotton with a soft fleece interior.",
    inStock: true,
    isNew: true,
    isBestSeller: true
  },
  {
    id: "2",
    name: "Brown Balaclava Zipper Hoodie",
    slug: "brown-balaclava-zipper-hoodie",
    price: 4549,
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80"
    ],
    category: "men",
    subcategory: "hoodies",
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    colors: [{ name: "Brown", hex: "#5C4033" }],
    description: "Urban streetwear balaclava hoodie with full zip closure. Features integrated face covering and premium quality fabric.",
    inStock: true,
    isLimited: true,
    isMustBuy: true
  },
  {
    id: "3",
    name: "Black Balaclava Zipper Hoodie",
    slug: "black-balaclava-zipper-hoodie",
    price: 4549,
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80"
    ],
    category: "men",
    subcategory: "hoodies",
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    colors: [{ name: "Black", hex: "#000000" }],
    description: "Stealth mode activated. This all-black balaclava hoodie combines style with functionality.",
    inStock: true,
    isBestSeller: true
  },
  {
    id: "4",
    name: "Angelic Wings Printed Sweatpants",
    slug: "angelic-wings-printed-sweatpants",
    price: 2399,
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80"
    ],
    category: "men",
    subcategory: "pants",
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    colors: [{ name: "Black", hex: "#000000" }],
    description: "Extreme baggy sweatpants with angelic wings print. Perfect for streetwear enthusiasts.",
    inStock: true,
    isNew: true,
    isMustBuy: true
  },
  {
    id: "5",
    name: "Brown & Light Brown Buckle Hoodie",
    slug: "brown-light-brown-buckle-hoodie",
    price: 4799,
    images: [
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80"
    ],
    category: "men",
    subcategory: "hoodies",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Brown", hex: "#8B4513" }, { name: "Light Brown", hex: "#D2B48C" }],
    description: "Two-tone buckle hoodie with tactical styling. Premium heavyweight cotton construction.",
    inStock: true,
    isLimited: true,
    isBestSeller: true
  },
  {
    id: "6",
    name: "Classic White Polo Shirt",
    slug: "classic-white-polo-shirt",
    price: 1899,
    images: [
      "https://images.unsplash.com/photo-1625910513413-5fc420e11bec?w=600&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80",
      "https://images.unsplash.com/photo-1625910513413-5fc420e11bec?w=600&q=80"
    ],
    category: "men",
    subcategory: "shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "White", hex: "#FFFFFF" }, { name: "Black", hex: "#000000" }],
    description: "Timeless polo shirt crafted from premium pique cotton. Essential wardrobe staple.",
    inStock: true
  },
  {
    id: "7",
    name: "Oversized Black Graphic Tee",
    slug: "oversized-black-graphic-tee",
    price: 1599,
    images: [
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80"
    ],
    category: "men",
    subcategory: "tshirts",
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    colors: [{ name: "Black", hex: "#000000" }],
    description: "Oversized fit graphic tee with bold front print. 100% organic cotton.",
    inStock: true,
    isNew: true,
    isMustBuy: true
  },
  {
    id: "8",
    name: "Cargo Joggers Olive",
    slug: "cargo-joggers-olive",
    price: 2899,
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80"
    ],
    category: "men",
    subcategory: "pants",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Olive", hex: "#556B2F" }],
    description: "Utility cargo joggers with multiple pockets. Perfect for streetwear looks.",
    inStock: false
  },
  // Women's Products
  {
    id: "9",
    name: "Women's Cropped Hoodie Black",
    slug: "womens-cropped-hoodie-black",
    price: 2999,
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80"
    ],
    category: "women",
    subcategory: "hoodies",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [{ name: "Black", hex: "#000000" }],
    description: "Trendy cropped hoodie for women. Soft fleece interior with raw hem finish.",
    inStock: true,
    isNew: true,
    isBestSeller: true
  },
  {
    id: "10",
    name: "High Waist Cargo Pants",
    slug: "high-waist-cargo-pants",
    price: 3299,
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80"
    ],
    category: "women",
    subcategory: "pants",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [{ name: "Black", hex: "#000000" }, { name: "Khaki", hex: "#C3B091" }],
    description: "High-waisted cargo pants with adjustable waist. Street style essential.",
    inStock: true,
    isMustBuy: true
  },
  {
    id: "11",
    name: "Oversized Graphic Tee Women",
    slug: "oversized-graphic-tee-women",
    price: 1499,
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=80"
    ],
    category: "women",
    subcategory: "tshirts",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [{ name: "White", hex: "#FFFFFF" }],
    description: "Boyfriend fit graphic tee. Soft cotton with vintage wash effect.",
    inStock: true,
    isBestSeller: true
  },
  {
    id: "12",
    name: "Fitted Zip-Up Track Jacket",
    slug: "fitted-zip-up-track-jacket",
    price: 3599,
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80"
    ],
    category: "women",
    subcategory: "jackets",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [{ name: "Black", hex: "#000000" }],
    description: "Sleek fitted track jacket with contrast piping. Perfect for athleisure looks.",
    inStock: true,
    isLimited: true,
    isMustBuy: true
  }
];

export const categories = {
  men: [
    { name: "All", slug: "all" },
    { name: "Hoodies", slug: "hoodies" },
    { name: "T-Shirts", slug: "tshirts" },
    { name: "Shirts", slug: "shirts" },
    { name: "Pants", slug: "pants" },
    { name: "Jackets", slug: "jackets" },
    { name: "Shorts", slug: "shorts" },
    { name: "Sweaters", slug: "sweaters" }
  ],
  women: [
    { name: "All", slug: "all" },
    { name: "Hoodies", slug: "hoodies" },
    { name: "T-Shirts", slug: "tshirts" },
    { name: "Tops", slug: "tops" },
    { name: "Pants", slug: "pants" },
    { name: "Jackets", slug: "jackets" },
    { name: "Dresses", slug: "dresses" },
    { name: "Skirts", slug: "skirts" }
  ]
};

export const collections = {
  seasonal: [
    { name: "Winter Collection", slug: "winter" },
    { name: "Summer Essentials", slug: "summer" },
    { name: "Spring Looks", slug: "spring" },
    { name: "Autumn Vibes", slug: "autumn" },
    { name: "Holiday Special", slug: "holiday" }
  ],
  categories: [
    { name: "All Products", slug: "all" },
    { name: "Hoodies & Sweaters", slug: "hoodies" },
    { name: "T-Shirts & Tops", slug: "tshirts" },
    { name: "Shirts", slug: "shirts" },
    { name: "Pants & Joggers", slug: "pants" },
    { name: "Jackets & Outerwear", slug: "jackets" },
    { name: "Shorts", slug: "shorts" },
    { name: "Denims", slug: "denims" },
    { name: "Accessories", slug: "accessories" }
  ],
  styles: [
    { name: "Streetwear", slug: "streetwear" },
    { name: "Casual", slug: "casual" },
    { name: "Athleisure", slug: "athleisure" },
    { name: "Oversized", slug: "oversized" },
    { name: "Vintage", slug: "vintage" },
    { name: "Minimalist", slug: "minimalist" },
    { name: "Urban", slug: "urban" },
    { name: "Limited Edition", slug: "limited" }
  ]
};

export const shopByCategory = [
  { name: "Hoodies", slug: "hoodies", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80" },
  { name: "T-Shirts", slug: "tshirts", image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80" },
  { name: "Pants", slug: "pants", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80" },
  { name: "Jackets", slug: "jackets", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80" },
  { name: "Shirts", slug: "shirts", image: "https://images.unsplash.com/photo-1625910513413-5fc420e11bec?w=600&q=80" },
  { name: "Denims", slug: "denims", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80" }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (category: 'men' | 'women', subcategory?: string): Product[] => {
  return products.filter(p => {
    if (p.category !== category) return false;
    if (subcategory && subcategory !== 'all' && p.subcategory !== subcategory) return false;
    return true;
  });
};

export const getBestSellers = (): Product[] => {
  return products.filter(p => p.isBestSeller);
};

export const getMustBuy = (): Product[] => {
  return products.filter(p => p.isMustBuy);
};

export const getWomensEssentials = (): Product[] => {
  return products.filter(p => p.category === 'women').slice(0, 4);
};
