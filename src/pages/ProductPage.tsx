import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Minus, Plus, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import {
  useProductBySlug,
  useProducts,
  getProductImageUrl,
  getSizePrice,
  isSizeInStock,
} from '@/hooks/useSanityProducts';

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Fetch product by slug
  const { data: product, isLoading, isError } = useProductBySlug(slug || '');

  // Fetch all products for recommendations
  const { data: allProducts } = useProducts();

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [mainImageIndex, setMainImageIndex] = useState<number>(0);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0]?.label || '');
      setQuantity(1);
      setMainImageIndex(0);
    }
  }, [product]);

  if (isLoading) return <p className="text-center py-20">Loading...</p>;
  if (isError || !product) return <p className="text-center py-20">Product not found.</p>;

  const currentPrice = getSizePrice(product, selectedSize);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(price);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(
      {
        id: product._id,
        name: product.name,
        slug: product.slug,
        price: currentPrice,
        originalPrice: product.originalPrice,
        images: product.images.map(i => i.url),
        category: product.category as 'jersey',
        subcategory: product.subcategory,
        sizes: product.sizes.map(s => s.label),
        colors: [],
        description: product.description,
        inStock: true,
      },
      selectedSize,
      'Default',
      quantity
    );
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/checkout');
  };

  const recommendedProducts = allProducts
    ? allProducts.filter(p => p.slug !== product.slug).slice(0, 4)
    : [];

  return (
    <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Images */}
        <div className="relative">
          <div className="w-full aspect-[4/5] border rounded overflow-hidden">
            <img
              src={getProductImageUrl(product, mainImageIndex)}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300"
            />
          </div>

          {/* Left/Right Arrows */}
          {product.images.length > 1 && (
            <>
              <button
                onClick={() => setMainImageIndex(idx => (idx - 1 + product.images.length) % product.images.length)}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
              >
                <ChevronLeft className="w-6 h-6 " />
              </button>
              <button
                onClick={() => setMainImageIndex(idx => (idx + 1) % product.images.length)}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-2 mt-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setMainImageIndex(idx)}
                  className={`w-20 h-20 border rounded overflow-hidden ${
                    mainImageIndex === idx ? 'border-foreground' : 'border-border'
                  }`}
                >
                  <img src={img.url} alt={product.name} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>

          <div className="flex items-center gap-6">
            <span className="text-3xl font-bold text-success">{formatPrice(currentPrice)}</span>
            {product.originalPrice && (
              <span className="line-through text-muted-foreground text-lg">{formatPrice(product.originalPrice)}</span>
            )}
          </div>

          {/* Sizes */}
          {product.sizes.length > 0 && (
            <div>
              <span className="font-medium mb-2 block text-lg">Size:</span>
              <div className="flex gap-3 flex-wrap">
                {product.sizes.map(size => {
                  const available = isSizeInStock(product, size.label);
                  return (
                    <button
                      key={size.label}
                      onClick={() => available && setSelectedSize(size.label)}
                      disabled={!available}
                      className={`px-5 py-3 border text-sm md:text-base font-medium transition-colors ${
                        selectedSize === size.label
                          ? 'bg-foreground text-background border-foreground'
                          : available
                          ? 'border-border hover:border-foreground'
                          : 'border-border bg-muted text-muted-foreground cursor-not-allowed line-through'
                      }`}
                    >
                      {size.label}
                      {!available && ' (Out)'}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quantity & Cart */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border border-border py-2">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-3 ">
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-14 text-center font-medium text-lg">{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)} className="p-3">
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!isSizeInStock(product, selectedSize)}
              className="flex-1 py-4 bg-foreground text-background font-semibold hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              Add to Cart
            </button>
          </div>

          <button
            onClick={handleBuyNow}
            disabled={!isSizeInStock(product, selectedSize)}
            className="w-full py-4 bg-black text-white font-semibold hover:bg-success/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
          >
            Buy Now
          </button>

          {/* Description */}
          <div className="pt-6 border-t border-border">
            <h2 className="font-medium mb-3 text-lg">Description</h2>
            <p className="text-base text-muted-foreground whitespace-pre-line">{product.description}</p>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      {recommendedProducts.length > 0 && (
        <section className="mt-20">
          <h3 className="text-2xl font-semibold mb-8">You may also like</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {recommendedProducts.map(recProd => (
              <Link
                key={recProd._id}
                to={`/products/${recProd.slug}`}
                className="relative border rounded-md overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <img
                  src={getProductImageUrl(recProd)}
                  alt={recProd.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <div className="p-3">
                  <h4 className="text-sm font-semibold truncate">{recProd.name}</h4>
                  <p className="text-sm font-bold text-success">
                    ₹{recProd.price.toLocaleString('en-IN')}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductPage;
