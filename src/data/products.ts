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

// Reduced to 10 fallback products (used when Sanity is unavailable)
export const products: Product[] = [
  {
    id: "1",
    name: "2006-07 AC Milan Home Jersey - Kaka Full Sleeve Embroidery Edition",
    slug: "ac-milan-home-jersey-kaka",
    price: 599,
    originalPrice: 1299,
    discount: 54,
    images: [
      "https://campeonsports.com/cdn/shop/files/5ED39552-C2F0-49A0-9171-BA143CECF5B0.jpg?v=1765471368",
      "https://jerseywala.in/cdn/shop/files/WhatsApp_Image_2025-02-01_at_2.40.25_PM.jpg?v=1755723149&width=2048"
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
      "https://i.ebayimg.com/images/g/0w0AAOSwu0hnaUVu/s-l400.jpg",
      "https://media-assets.grailed.com/prd/listing/temp/f47146ca03b541dd8d0d8957cbd8f58e"
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
      "https://jerseywala.in/cdn/shop/files/WhatsApp_Image_2025-01-11_at_9.33.07_PM_2.jpg?crop=center&height=1200&v=1755029687&width=1200",
      "https://jerseywala.in/cdn/shop/files/WhatsApp_Image_2025-01-11_at_9.33.09_PM.jpg?v=1755029687&width=1200"
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
      "https://campeonsports.com/cdn/shop/files/IMG-1514.png?v=1767517229",
      "https://apsportswear.in/images/7362_image1.jpg"
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
      "https://thefootballheritage.com/wp-content/uploads/2024/03/Artboard1_1800x1800.webp",
      "https://campeonsports.com/cdn/shop/files/WhatsAppImage2024-10-30at18.46.14_2.jpg?v=1765537230"
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
      "https://www.retrosoccer.co.uk/cdn/shop/files/Untitled_design_-_2025-03-02T082224.553_1080x.png?v=1740908132",
      "https://footballmonk.in/wp-content/uploads/2024/12/FC-Barcelona-Home-2015-16-Messi-Retro-Jersey-1.jpg"
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
      "https://jerseywala.in/cdn/shop/files/WhatsApp_Image_2024-11-28_at_1.59.25_PM_1.jpg?v=1755723388&width=2048",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKtmWSyqhv1LS48IhGFiLDGLW9X94w2i5kGA&s"
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
    name: "Manchester United 2022",
    slug: "manchester-united-2022",
    price: 399,
    originalPrice: 899,
    discount: 43,
    images: [
      "https://www.copycatz.in/wp-content/uploads/2022/06/man-united-home-2022-23.jpeg",
      "https://i.ebayimg.com/images/g/5AYAAOSwUphi6Hp0/s-l1200.jpg"
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
    name: "2022 England World Cup Jersey",
    slug: "england-2022",
    price: 550,
    originalPrice: 1099,
    discount: 50,
    images: [
      "https://redravenstore.in/cdn/shop/files/Home1.jpg?v=1729337095",
      "https://topfootball.in/wp-content/uploads/2023/02/IMG-20221021-WA0002.jpg.webp"
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
    name: "Inter Miami 2024 Home Jersey - Messi Edition",
    slug: "inter-miami-messi-2024",
    price: 699,
    originalPrice: 1399,
    discount: 50,
    images: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/cb5aa62fe3ac490eb46221986fc2ee30_9366/Inter_Miami_CF_24-25_Messi_Home_Jersey_Pink_JE9741_01_laydown.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpzXEH7RZXBOPCWvsLr3blhlg0q4twqglQJQ&s"
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
  }
];

// Jersey categories for the shop
export const jerseyCategories = [
  { name: "Embroidery", slug: "embroidery", image: "/images/categories/embroidery.png" },
  { name: "Full Sleeve", slug: "full-sleeve", image: "/images/categories/full-sleeve.png" },
  { name: "Retro", slug: "retro", image: "/images/categories/retro.png" },
  { name: "Fan Edition", slug: "fan-edition", image: "/images/categories/fan.png"},
  { name: "New Arrival", slug: "new-arrival", image: "/images/categories/new-arrival.png" },
  { name: "Best Seller", slug: "best-seller", image: "/images/categories/best-seller.png" }
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

// Helper functions (fallback only - use hooks for CMS data)
export const getBestSellers = () => products.filter(p => p.isBestSeller);
export const getMustBuy = () => products.filter(p => p.isMustBuy);
export const getNewArrivals = () => products.filter(p => p.isNew);
export const getBySubcategory = (subcategory: string) => products.filter(p => p.subcategory === subcategory);
export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);
