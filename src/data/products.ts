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
  isSummer?: boolean;
  isDenim?: boolean;
  isPants?: boolean;
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
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80"
    ],
    category: "men",
    subcategory: "pants",
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    colors: [{ name: "Black", hex: "#000000" }],
    description: "Extreme baggy sweatpants with angelic wings print. Perfect for streetwear enthusiasts.",
    inStock: true,
    isNew: true,
    isMustBuy: true,
    isPants: true
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
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80"
    ],
    category: "men",
    subcategory: "shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "White", hex: "#FFFFFF" }, { name: "Black", hex: "#000000" }],
    description: "Timeless polo shirt crafted from premium pique cotton. Essential wardrobe staple.",
    inStock: true,
    isSummer: true
  },
  {
    id: "7",
    name: "Oversized Black Graphic Tee",
    slug: "oversized-black-graphic-tee",
    price: 1599,
    images: [
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80"
    ],
    category: "men",
    subcategory: "tshirts",
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    colors: [{ name: "Black", hex: "#000000" }],
    description: "Oversized fit graphic tee with bold front print. 100% organic cotton.",
    inStock: true,
    isNew: true,
    isMustBuy: true,
    isSummer: true
  },
  {
    id: "8",
    name: "Cargo Joggers Olive",
    slug: "cargo-joggers-olive",
    price: 2899,
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80"
    ],
    category: "men",
    subcategory: "pants",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Olive", hex: "#556B2F" }],
    description: "Utility cargo joggers with multiple pockets. Perfect for streetwear looks.",
    inStock: true,
    isPants: true
  },
  // Women's Products
  {
    id: "9",
    name: "Women's Cropped Hoodie Black",
    slug: "womens-cropped-hoodie-black",
    price: 2999,
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80"
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
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80"
    ],
    category: "women",
    subcategory: "pants",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [{ name: "Black", hex: "#000000" }, { name: "Khaki", hex: "#C3B091" }],
    description: "High-waisted cargo pants with adjustable waist. Street style essential.",
    inStock: true,
    isMustBuy: true,
    isPants: true
  },
  {
    id: "11",
    name: "Oversized Graphic Tee Women",
    slug: "oversized-graphic-tee-women",
    price: 1499,
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80"
    ],
    category: "women",
    subcategory: "tshirts",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [{ name: "White", hex: "#FFFFFF" }],
    description: "Boyfriend fit graphic tee. Soft cotton with vintage wash effect.",
    inStock: true,
    isBestSeller: true,
    isSummer: true
  },
  {
    id: "12",
    name: "Fitted Zip-Up Track Jacket",
    slug: "fitted-zip-up-track-jacket",
    price: 3599,
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80"
    ],
    category: "women",
    subcategory: "jackets",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [{ name: "Black", hex: "#000000" }],
    description: "Sleek fitted track jacket with contrast piping. Perfect for athleisure looks.",
    inStock: true,
    isLimited: true,
    isMustBuy: true
  },
  // Summer Essentials
  {
    id: "13",
    name: "Linen Beach Shirt",
    slug: "linen-beach-shirt",
    price: 2199,
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80"
    ],
    category: "men",
    subcategory: "shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "White", hex: "#FFFFFF" }, { name: "Beige", hex: "#F5F5DC" }],
    description: "Breathable linen shirt perfect for summer days. Relaxed fit with coconut buttons.",
    inStock: true,
    isSummer: true,
    isNew: true
  },
  {
    id: "14",
    name: "Cotton Shorts Khaki",
    slug: "cotton-shorts-khaki",
    price: 1799,
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80",
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=600&q=80"
    ],
    category: "men",
    subcategory: "shorts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Khaki", hex: "#C3B091" }],
    description: "Classic cotton shorts with elastic waistband. Perfect for casual summer outings.",
    inStock: true,
    isSummer: true
  },
  {
    id: "15",
    name: "Summer Graphic Tank Top",
    slug: "summer-graphic-tank-top",
    price: 1299,
    images: [
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&q=80",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80"
    ],
    category: "men",
    subcategory: "tshirts",
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Black", hex: "#000000" }, { name: "White", hex: "#FFFFFF" }],
    description: "Lightweight tank top with bold graphic print. Stay cool in style.",
    inStock: true,
    isSummer: true,
    isBestSeller: true
  },
  {
    id: "16",
    name: "Floral Summer Dress",
    slug: "floral-summer-dress",
    price: 2799,
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80"
    ],
    category: "women",
    subcategory: "dresses",
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Floral", hex: "#FFB6C1" }],
    description: "Elegant floral summer dress with flowing silhouette. Perfect for beach days.",
    inStock: true,
    isSummer: true,
    isNew: true
  },
  // Denims
  {
    id: "17",
    name: "Classic Blue Denim Jacket",
    slug: "classic-blue-denim-jacket",
    price: 3999,
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&q=80",
      "https://images.unsplash.com/photo-1601333144130-8cbb312386b6?w=600&q=80"
    ],
    category: "men",
    subcategory: "jackets",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Blue", hex: "#4169E1" }],
    description: "Timeless denim jacket with vintage wash. A wardrobe essential for any season.",
    inStock: true,
    isDenim: true,
    isBestSeller: true
  },
  {
    id: "18",
    name: "Slim Fit Dark Wash Jeans",
    slug: "slim-fit-dark-wash-jeans",
    price: 2999,
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80"
    ],
    category: "men",
    subcategory: "pants",
    sizes: ["28", "30", "32", "34", "36"],
    colors: [{ name: "Dark Blue", hex: "#00008B" }],
    description: "Premium slim fit jeans with stretch denim. Dark wash for a sophisticated look.",
    inStock: true,
    isDenim: true,
    isPants: true
  },
  {
    id: "19",
    name: "Ripped Boyfriend Jeans",
    slug: "ripped-boyfriend-jeans",
    price: 3299,
    images: [
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80"
    ],
    category: "women",
    subcategory: "pants",
    sizes: ["24", "26", "28", "30", "32"],
    colors: [{ name: "Light Blue", hex: "#ADD8E6" }],
    description: "Trendy ripped boyfriend jeans with relaxed fit. Vintage distressed details.",
    inStock: true,
    isDenim: true,
    isPants: true,
    isNew: true
  },
  {
    id: "20",
    name: "High Rise Skinny Jeans",
    slug: "high-rise-skinny-jeans",
    price: 2799,
    images: [
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=600&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80"
    ],
    category: "women",
    subcategory: "pants",
    sizes: ["24", "26", "28", "30", "32"],
    colors: [{ name: "Black", hex: "#000000" }],
    description: "Figure-flattering high rise skinny jeans. Super stretch for all-day comfort.",
    inStock: true,
    isDenim: true,
    isPants: true,
    isBestSeller: true
  },
  // More Pants
  {
    id: "21",
    name: "Relaxed Fit Chinos",
    slug: "relaxed-fit-chinos",
    price: 2499,
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80"
    ],
    category: "men",
    subcategory: "pants",
    sizes: ["28", "30", "32", "34", "36"],
    colors: [{ name: "Tan", hex: "#D2B48C" }, { name: "Navy", hex: "#000080" }],
    description: "Comfortable relaxed fit chinos. Perfect for smart casual occasions.",
    inStock: true,
    isPants: true
  },
  {
    id: "22",
    name: "Tech Cargo Pants",
    slug: "tech-cargo-pants",
    price: 3499,
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80"
    ],
    category: "men",
    subcategory: "pants",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Black", hex: "#000000" }],
    description: "Technical cargo pants with water-resistant fabric. Multiple utility pockets.",
    inStock: true,
    isPants: true,
    isNew: true,
    isMustBuy: true
  },
  {
    id: "23",
    name: "Wide Leg Trousers",
    slug: "wide-leg-trousers",
    price: 2899,
    images: [
      "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=600&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80"
    ],
    category: "women",
    subcategory: "pants",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [{ name: "Black", hex: "#000000" }, { name: "Cream", hex: "#FFFDD0" }],
    description: "Elegant wide leg trousers with high waist. Flowy and comfortable.",
    inStock: true,
    isPants: true
  },
  // More Women's Essentials
  {
    id: "24",
    name: "Ribbed Crop Top",
    slug: "ribbed-crop-top",
    price: 999,
    images: [
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=80"
    ],
    category: "women",
    subcategory: "tops",
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "White", hex: "#FFFFFF" }, { name: "Black", hex: "#000000" }],
    description: "Form-fitting ribbed crop top. Essential layering piece for any outfit.",
    inStock: true,
    isSummer: true
  },
  {
    id: "25",
    name: "Oversized Blazer",
    slug: "oversized-blazer",
    price: 4499,
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80"
    ],
    category: "women",
    subcategory: "jackets",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [{ name: "Black", hex: "#000000" }],
    description: "Structured oversized blazer with padded shoulders. Power dressing essential.",
    inStock: true,
    isNew: true,
    isBestSeller: true
  },
  {
    id: "26",
    name: "Satin Midi Skirt",
    slug: "satin-midi-skirt",
    price: 2199,
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80"
    ],
    category: "women",
    subcategory: "skirts",
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Champagne", hex: "#F7E7CE" }],
    description: "Luxurious satin midi skirt with bias cut. Elegant and versatile.",
    inStock: true,
    isNew: true
  },
  {
    id: "27",
    name: "Athletic Leggings",
    slug: "athletic-leggings",
    price: 1899,
    images: [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80"
    ],
    category: "women",
    subcategory: "pants",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [{ name: "Black", hex: "#000000" }],
    description: "High-performance athletic leggings. Squat-proof with hidden pocket.",
    inStock: true,
    isPants: true,
    isBestSeller: true
  },
  {
    id: "28",
    name: "Denim Mini Skirt",
    slug: "denim-mini-skirt",
    price: 1799,
    images: [
      "https://images.unsplash.com/photo-1582142306909-195724d33ffc?w=600&q=80",
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80"
    ],
    category: "women",
    subcategory: "skirts",
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Blue", hex: "#4169E1" }],
    description: "Classic denim mini skirt with raw hem. Y2K vibes for modern styling.",
    inStock: true,
    isDenim: true,
    isSummer: true
  },
  // More products for variety
  {
    id: "29",
    name: "Vintage Wash Hoodie",
    slug: "vintage-wash-hoodie",
    price: 3299,
    images: [
      "https://images.unsplash.com/photo-1614975059251-992f11792b9f?w=600&q=80",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80"
    ],
    category: "men",
    subcategory: "hoodies",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Washed Black", hex: "#36454F" }],
    description: "Vintage acid wash hoodie with distressed details. Retro streetwear vibes.",
    inStock: true,
    isBestSeller: true
  },
  {
    id: "30",
    name: "Striped Summer Shirt",
    slug: "striped-summer-shirt",
    price: 1999,
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80"
    ],
    category: "men",
    subcategory: "shirts",
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Blue/White", hex: "#87CEEB" }],
    description: "Classic striped button-down shirt. Perfect for summer casual looks.",
    inStock: true,
    isSummer: true
  },
  {
    id: "31",
    name: "Puffer Jacket",
    slug: "puffer-jacket",
    price: 5999,
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80",
      "https://images.unsplash.com/photo-1544923246-77307dd628b6?w=600&q=80"
    ],
    category: "men",
    subcategory: "jackets",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Black", hex: "#000000" }],
    description: "Warm puffer jacket with premium down filling. Stay warm in style.",
    inStock: true,
    isNew: true,
    isMustBuy: true
  },
  {
    id: "32",
    name: "Knit Sweater Cream",
    slug: "knit-sweater-cream",
    price: 2799,
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80"
    ],
    category: "women",
    subcategory: "sweaters",
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Cream", hex: "#FFFDD0" }],
    description: "Cozy oversized knit sweater. Soft and warm for cooler days.",
    inStock: true,
    isNew: true
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
  return products.filter(p => p.category === 'women');
};

export const getSummerEssentials = (): Product[] => {
  return products.filter(p => p.isSummer);
};

export const getDenims = (): Product[] => {
  return products.filter(p => p.isDenim);
};

export const getPants = (): Product[] => {
  return products.filter(p => p.isPants);
};
