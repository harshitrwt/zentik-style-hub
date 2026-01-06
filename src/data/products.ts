export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: 'jersey';
  subcategory: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  description: string;
  inStock: boolean;
  isNew?: boolean;
  isLimited?: boolean;
  isBestSeller?: boolean;
  isMustBuy?: boolean;
  discount?: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "2006-07 AC Milan Home Jersey - Kaka Full Sleeve Embroidery Edition",
    slug: "ac-milan-home-jersey-kaka",
    price: 599,
    originalPrice: 1299,
    discount: 54,
    images: [
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80"
    ],
    category: "jersey",
    subcategory: "full-sleeve",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Red/Black", hex: "#C41E3A" }],
    description: "Classic AC Milan home jersey featuring Kaka's legendary era. Premium embroidery edition with full sleeves.",
    inStock: true,
    isNew: true,
    isBestSeller: true
  },
  {
    id: "2",
    name: "Juventus 2018-19 Home Kit Full Sleeve Edition",
    slug: "juventus-home-kit-2018",
    price: 599,
    originalPrice: 1299,
    discount: 54,
    images: [
      "https://images.unsplash.com/photo-1551854838-212c50b4c184?w=600&q=80",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80"
    ],
    category: "jersey",
    subcategory: "full-sleeve",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Black/White", hex: "#000000" }],
    description: "Iconic Juventus black and white stripes from the 2018-19 season. Full sleeve with premium finish.",
    inStock: true,
    isBestSeller: true,
    isMustBuy: true
  },
  {
    id: "3",
    name: "Barcelona 2008-09 Home Jersey - Messi Full Sleeve Embroidery",
    slug: "barcelona-messi-jersey-2008",
    price: 599,
    originalPrice: 1299,
    discount: 54,
    images: [
      "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=600&q=80",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80"
    ],
    category: "jersey",
    subcategory: "embroidery",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Blue/Red", hex: "#A50044" }],
    description: "Barcelona's iconic treble-winning season jersey. Premium embroidery with Messi's legendary number.",
    inStock: true,
    isNew: true,
    isBestSeller: true
  },
  {
    id: "4",
    name: "Argentina Special Edition - Messi Tribute Jersey",
    slug: "argentina-messi-tribute",
    price: 450,
    originalPrice: 1099,
    discount: 59,
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80"
    ],
    category: "jersey",
    subcategory: "embroidery",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Sky Blue/White", hex: "#74ACDF" }],
    description: "Tribute to the Greatest - Argentina special edition celebrating Messi's legendary career.",
    inStock: true,
    isNew: true,
    isMustBuy: true
  },
  {
    id: "5",
    name: "Japan 2024 Joro Special Edition Jersey",
    slug: "japan-joro-special-edition",
    price: 450,
    originalPrice: 1199,
    discount: 62,
    images: [
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&q=80",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80"
    ],
    category: "jersey",
    subcategory: "retro",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Blue/White", hex: "#002366" }],
    description: "Limited edition Japanese jersey inspired by tradition. Unique artistic design.",
    inStock: true,
    isLimited: true,
    isBestSeller: true
  },
  {
    id: "6",
    name: "Barcelona 2015-16 Messi #10 Jersey Edition",
    slug: "barcelona-messi-2015",
    price: 450,
    originalPrice: 1199,
    discount: 62,
    images: [
      "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&q=80",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80"
    ],
    category: "jersey",
    subcategory: "retro",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Blue/Red", hex: "#A50044" }],
    description: "Celebrating the legendary MSN era. Barcelona home jersey from the 2015-16 season.",
    inStock: true,
    isMustBuy: true
  },
  {
    id: "7",
    name: "Manchester United 2007 Away Kit - Ronaldo Embroidery",
    slug: "manchester-united-ronaldo-2007",
    price: 499,
    originalPrice: 1299,
    discount: 62,
    images: [
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=80",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80"
    ],
    category: "jersey",
    subcategory: "embroidery",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Black", hex: "#000000" }],
    description: "Classic Manchester United away kit from Ronaldo's breakout era. Premium embroidery edition.",
    inStock: true,
    isBestSeller: true
  },
  {
    id: "8",
    name: "Manchester United Beckham 2002-03 Home Jersey",
    slug: "manchester-united-beckham-2002",
    price: 399,
    originalPrice: 899,
    discount: 43,
    images: [
      "https://images.unsplash.com/photo-1508098682722-e99c643e7f76?w=600&q=80",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80"
    ],
    category: "jersey",
    subcategory: "retro",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Red", hex: "#DA291C" }],
    description: "Iconic Manchester United home jersey from Beckham's glory days. Vodafone sponsor era.",
    inStock: true,
    isNew: true,
    isMustBuy: true
  },
  {
    id: "9",
    name: "1998 England World Cup Jersey - Beckham Retro Edition",
    slug: "england-beckham-1998",
    price: 550,
    originalPrice: 1099,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80"
    ],
    category: "jersey",
    subcategory: "retro",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "White", hex: "#FFFFFF" }],
    description: "Historic England World Cup jersey. Beckham retro edition with classic design.",
    inStock: true,
    isBestSeller: true
  },
  {
    id: "10",
    name: "AC Milan 2006-07 Away Jersey - Full Sleeve Kaka Edition",
    slug: "ac-milan-away-kaka-2006",
    price: 650,
    originalPrice: 1199,
    discount: 46,
    images: [
      "https://images.unsplash.com/photo-1518091043644-c1d4457f78b2?w=600&q=80",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80"
    ],
    category: "jersey",
    subcategory: "full-sleeve",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Yellow/Black", hex: "#FFD700" }],
    description: "AC Milan's stunning away kit from the Champions League winning season. Full sleeve embroidery.",
    inStock: true,
    isMustBuy: true
  },
  {
    id: "11",
    name: "Sporting Lisbon 2002-03 Home Kit - Ronaldo Version",
    slug: "sporting-lisbon-ronaldo-2002",
    price: 450,
    originalPrice: 1099,
    discount: 59,
    images: [
      "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=600&q=80",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80"
    ],
    category: "jersey",
    subcategory: "retro",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Green/White", hex: "#006B3F" }],
    description: "Where legends begin - Sporting Lisbon's classic green and white stripes from Ronaldo's youth era.",
    inStock: true,
    isNew: true
  },
  {
    id: "12",
    name: "Germany 1990 World Cup Retro Jersey",
    slug: "germany-1990-retro",
    price: 499,
    originalPrice: 999,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1552667466-07770ae110d0?w=600&q=80",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80"
    ],
    category: "jersey",
    subcategory: "retro",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "White/Black/Red/Yellow", hex: "#FFFFFF" }],
    description: "Iconic German design from the 1990 World Cup winning team. Classic Adidas stripes.",
    inStock: true,
    isBestSeller: true
  },
  {
    id: "13",
    name: "Inter Miami 2024 Home Jersey - Messi Edition",
    slug: "inter-miami-messi-2024",
    price: 699,
    originalPrice: 1399,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=600&q=80",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80"
    ],
    category: "jersey",
    subcategory: "embroidery",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Pink/Black", hex: "#F5B6CD" }],
    description: "The new era of Messi. Inter Miami's iconic pink jersey with premium embroidery.",
    inStock: true,
    isNew: true,
    isBestSeller: true,
    isMustBuy: true
  },
  {
    id: "14",
    name: "Real Madrid 2013-14 Home Jersey - Ronaldo Edition",
    slug: "real-madrid-ronaldo-2013",
    price: 549,
    originalPrice: 1199,
    discount: 54,
    images: [
      "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=600&q=80",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80"
    ],
    category: "jersey",
    subcategory: "retro",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "White", hex: "#FFFFFF" }],
    description: "Los Blancos classic all-white home jersey from Ronaldo's peak years at Real Madrid.",
    inStock: true,
    isBestSeller: true
  },
  {
    id: "15",
    name: "Liverpool 2019-20 UCL Winning Jersey",
    slug: "liverpool-ucl-2019",
    price: 599,
    originalPrice: 1199,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&q=80",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80"
    ],
    category: "jersey",
    subcategory: "embroidery",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Red", hex: "#C8102E" }],
    description: "Celebrating Liverpool's Champions League triumph. Premium embroidery edition.",
    inStock: true,
    isMustBuy: true
  },
  {
    id: "16",
    name: "Brazil 2002 World Cup Jersey - Ronaldinho Edition",
    slug: "brazil-ronaldinho-2002",
    price: 499,
    originalPrice: 999,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80"
    ],
    category: "jersey",
    subcategory: "retro",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Yellow/Green", hex: "#FFDF00" }],
    description: "The samba magic! Brazil's World Cup winning jersey celebrating Ronaldinho and the golden era.",
    inStock: true,
    isNew: true,
    isBestSeller: true
  },
  {
    id: "17",
    name: "Chelsea 2011-12 UCL Home Jersey",
    slug: "chelsea-ucl-2011",
    price: 549,
    originalPrice: 1099,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=600&q=80",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80"
    ],
    category: "jersey",
    subcategory: "retro",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Blue", hex: "#034694" }],
    description: "Chelsea's miracle Champions League winning season. The iconic blue home kit.",
    inStock: true,
    isMustBuy: true
  },
  {
    id: "18",
    name: "PSG 2022-23 Home Jersey - Messi Neymar Mbappe",
    slug: "psg-messi-2022",
    price: 649,
    originalPrice: 1299,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&q=80",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80"
    ],
    category: "jersey",
    subcategory: "embroidery",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Blue/Red", hex: "#004170" }],
    description: "Paris Saint-Germain's star-studded lineup era. Premium home jersey with embroidery.",
    inStock: true,
    isNew: true
  },
  {
    id: "19",
    name: "Borussia Dortmund 2012 Jersey - Lewandowski Edition",
    slug: "dortmund-lewandowski-2012",
    price: 499,
    originalPrice: 999,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=80",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80"
    ],
    category: "jersey",
    subcategory: "retro",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Yellow/Black", hex: "#FDE100" }],
    description: "The Yellow Wall era! Dortmund's iconic yellow jersey from their Bundesliga domination.",
    inStock: true,
    isBestSeller: true
  },
  {
    id: "20",
    name: "Portugal 2016 Euro Jersey - Ronaldo Champions",
    slug: "portugal-ronaldo-2016",
    price: 549,
    originalPrice: 1099,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80"
    ],
    category: "jersey",
    subcategory: "embroidery",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Red/Green", hex: "#FF0000" }],
    description: "Portugal's historic Euro 2016 winning jersey. Celebrating Ronaldo's international triumph.",
    inStock: true,
    isMustBuy: true
  }
];

// Jersey categories for the shop
export const jerseyCategories = [
  { name: "Embroidery", slug: "embroidery", image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80" },
  { name: "Full Sleeve", slug: "full-sleeve", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80" },
  { name: "Five Sleeve", slug: "five-sleeve", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80" },
  { name: "Retro", slug: "retro", image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80" },
  { name: "New Arrival", slug: "new-arrival", image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&q=80" },
  { name: "Best Seller", slug: "best-seller", image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&q=80" }
];

// Collections for navbar dropdown
export const collections = {
  clubs: [
    { name: "Barcelona", slug: "barcelona" },
    { name: "Real Madrid", slug: "real-madrid" },
    { name: "Manchester United", slug: "manchester-united" },
    { name: "AC Milan", slug: "ac-milan" },
    { name: "Juventus", slug: "juventus" },
    { name: "Liverpool", slug: "liverpool" },
    { name: "Chelsea", slug: "chelsea" },
    { name: "PSG", slug: "psg" }
  ],
  national: [
    { name: "Argentina", slug: "argentina" },
    { name: "Brazil", slug: "brazil" },
    { name: "Germany", slug: "germany" },
    { name: "England", slug: "england" },
    { name: "Portugal", slug: "portugal" },
    { name: "Japan", slug: "japan" }
  ],
  types: [
    { name: "Embroidery Edition", slug: "embroidery" },
    { name: "Full Sleeve", slug: "full-sleeve" },
    { name: "Retro Collection", slug: "retro" },
    { name: "New Arrivals", slug: "new-arrival" },
    { name: "Best Sellers", slug: "best-seller" }
  ]
};

export const categories = {
  jersey: [
    { name: "All Jerseys", slug: "all" },
    { name: "Embroidery", slug: "embroidery" },
    { name: "Full Sleeve", slug: "full-sleeve" },
    { name: "Retro", slug: "retro" }
  ]
};

// Helper functions
export const getBestSellers = () => products.filter(p => p.isBestSeller);
export const getMustBuy = () => products.filter(p => p.isMustBuy);
export const getNewArrivals = () => products.filter(p => p.isNew);
export const getBySubcategory = (subcategory: string) => products.filter(p => p.subcategory === subcategory);
export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);
