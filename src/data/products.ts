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
      "https://campeonsports.com/cdn/shop/files/5ED39552-C2F0-49A0-9171-BA143CECF5B0.jpg?v=1765471368",
      "https://jerseywala.in/cdn/shop/files/WhatsApp_Image_2025-02-01_at_2.40.25_PM.jpg?v=1755723149&width=2048",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFP3oJ3qeNKrVpaYFkyLTl4V0gNqwbWCGOCA&s"
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
    name: "AC Milan 2006-07 Away Jersey - Full Sleeve Kaka Edition",
    slug: "ac-milan-away-kaka-2006",
    price: 650,
    originalPrice: 1199,
    discount: 46,
    images: [
      "https://jerseywala.in/cdn/shop/files/WhatsApp_Image_2025-01-25_at_8.01.05_PM.png?v=1755723869&width=2048",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3HpZwYMooWZKqVqCaZLDdckjqeYV5o1LcSQ&s"
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
      "https://sansirosports.in/wp-content/uploads/2024/11/1000125932.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5pfQZfj2U4mJ4P4HJmIvgIy7BQXuGoZft2izbXgk1Sfu2aVSzHhUlVUCmHmLbBZ8z2II&usqp=CAU"
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
    name: "Germany Jersey 2022 worldcup Edition",
    slug: "germany",
    price: 499,
    originalPrice: 999,
    discount: 50,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4kQh8oZWH5EfosprSZNFo-eWajsXAC_qsKw&s",
      "https://media.karousell.com/media/photos/products/2023/3/8/original_germany_national_team_1678253353_614c26a1_progressive.jpg"
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
  },
  {
    id: "14",
    name: "Real Madrid 2013-14 Home Jersey - Ronaldo Edition",
    slug: "real-madrid-ronaldo-2013",
    price: 549,
    originalPrice: 1199,
    discount: 54,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTko4FKC8HBpDBYwZPihZRA17L_yK76nz3aVA&s",
      "https://media-assets.grailed.com/prd/listing/temp/0acc34a41832431c871df9130ceaa18c"
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgcY1qOkm6i1Z3Tkvwzxzd6dyzCnsI9Tud3g&s",
      "https://i.ebayimg.com/images/g/59IAAOSwWxdg-7PM/s-l400.jpg"
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
    name: "Brazil World Cup Jersey",
    slug: "brazil-ronaldinho-2002",
    price: 499,
    originalPrice: 999,
    discount: 50,
    images: [
      "https://media-assets.grailed.com/prd/listing/temp/ea302bab1c8247979d67fa407337a967",
      "https://i.ebayimg.com/images/g/kasAAOSwtytmbUYv/s-l400.jpg"
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyv0h9FBFm25Wf9jHgqjDyzxIKZ-YtSYKDwQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZiChnjo3vr0SJ5W6TXte9GdXUIOV2pU1nrg&s"
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
    name: "PSG 2022-23 Jersey",
    slug: "psg-messi-2022",
    price: 649,
    originalPrice: 1299,
    discount: 50,
    images: [
      "https://i.ebayimg.com/images/g/63sAAOSwb69lBaKo/s-l1200.jpg",
      "https://i.ebayimg.com/images/g/1toAAOSwZ~pkVen5/s-l1200.jpg"
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgP_oTDqUmz5CxhJgvs-BVvtfOrzmtB9w46A&s",
      "https://i.ebayimg.com/images/g/K7QAAOSw6RVnY1iQ/s-l1200.jpg"
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
      "https://i.ebayimg.com/images/g/eTcAAOSwU5xmvEJa/s-l1200.jpg",
      "https://i.ebayimg.com/images/g/kH8AAOSw4ztjJ5wL/s-l1200.jpg"
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

// Helper functions
export const getBestSellers = () => products.filter(p => p.isBestSeller);
export const getMustBuy = () => products.filter(p => p.isMustBuy);
export const getNewArrivals = () => products.filter(p => p.isNew);
export const getBySubcategory = (subcategory: string) => products.filter(p => p.subcategory === subcategory);
export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);
