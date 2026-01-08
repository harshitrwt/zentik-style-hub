import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Sanity client configuration
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_DATASET
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2025-01-08'

if (!projectId || !dataset) {
  throw new Error('Missing Sanity project ID or dataset in environment variables')
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if you want fresh data
})

// Image URL builder for Sanity images
const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source: any) => {
  if (!source) return ''
  return builder.image(source).url()
}

// Base product fields for reuse
const productFields = `
  _id,
  name,
  "slug": slug.current,
  price,
  originalPrice,
  discount,
  "images": images[] {
    "url": asset->url,
    "alt": coalesce(alt, name)
  },
  category,
  subcategory,
  "sizes": sizes[] {
    label,
    price,
    inStock
  },
  "colors": colors[] {
    name,
    hex
  },
  description,
  isNew,
  isBestSeller,
  isMustBuy,
  isLimited
`

// GROQ query to fetch all products
export const productsQuery = `
  *[_type == "product" && isActive == true] {
    ${productFields}
  } | order(_createdAt desc)
`

// Query for single product by slug
export const productBySlugQuery = `
  *[_type == "product" && slug.current == $slug && isActive == true][0] {
    _id,
    name,
    "slug": slug.current,
    price,
    originalPrice,
    discount,
    "images": images[] {
      "url": asset->url,
      alt
    },
    category,
    subcategory,
    "sizes": sizes[] {
      label,
      price,
      inStock
    },
    "colors": colors[] {
      name,
      hex
    },
    description,
    isNew,
    isBestSeller,
    isMustBuy,
    isLimited
  }
`

// Query for best sellers
export const bestSellersQuery = `
  *[_type == "product" && isBestSeller == true && isActive == true] {
    _id,
    name,
    "slug": slug.current,
    price,
    originalPrice,
    discount,
    "images": images[] {
      "url": asset->url,
      alt
    },
    category,
    subcategory,
    "sizes": sizes[] {
      label,
      price,
      inStock
    },
    "colors": colors[] {
      name,
      hex
    },
    description,
    isNew,
    isBestSeller,
    isMustBuy,
    isLimited
  } | order(_createdAt desc)
`

// Query for new arrivals
export const newArrivalsQuery = `
  *[_type == "product" && isNew == true && isActive == true] {
    _id,
    name,
    "slug": slug.current,
    price,
    originalPrice,
    discount,
    "images": images[] {
      "url": asset->url,
      alt
    },
    category,
    subcategory,
    "sizes": sizes[] {
      label,
      price,
      inStock
    },
    "colors": colors[] {
      name,
      hex
    },
    description,
    isNew,
    isBestSeller,
    isMustBuy,
    isLimited
  } | order(_createdAt desc)
`

// Query for products by subcategory
export const productsBySubcategoryQuery = `
  *[_type == "product" && subcategory == $subcategory && isActive == true] {
    _id,
    name,
    "slug": slug.current,
    price,
    originalPrice,
    discount,
    "images": images[] {
      "url": asset->url,
      alt
    },
    category,
    subcategory,
    "sizes": sizes[] {
      label,
      price,
      inStock
    },
    "colors": colors[] {
      name,
      hex
    },
    description,
    isNew,
    isBestSeller,
    isMustBuy,
    isLimited
  } | order(_createdAt desc)
`
