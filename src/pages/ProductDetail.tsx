import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { Minus, Plus, Share2, ChevronDown, ChevronRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { getProductBySlug, products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { toast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || '');
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showDescription, setShowDescription] = useState(true);

  if (!product) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl font-heading font-bold mb-4">Product Not Found</h1>
        <Link to="/" className="text-primary underline">Return to Home</Link>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        variant: "destructive"
      });
      return;
    }
    if (!selectedColor && product.colors.length > 0) {
      toast({
        title: "Please select a color",
        variant: "destructive"
      });
      return;
    }

    addToCart(product, selectedSize, selectedColor || product.colors[0]?.name, quantity);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`
    });
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to={`/collections/${product.category}/all`} className="hover:text-foreground transition-colors capitalize">
            {product.category}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-secondary overflow-hidden">
              <img 
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto hide-scrollbar">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-24 bg-secondary overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-heading text-2xl md:text-3xl font-bold tracking-wide uppercase mb-4">
              {product.name}
            </h1>
            
            <p className="text-2xl font-heading font-semibold mb-2">
              {formatPrice(product.price)}
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Taxes included. <span className="underline cursor-pointer">Shipping</span> calculated at checkout.
            </p>

            {/* Offer Banner */}
            <div className="bg-gold/20 text-gold p-3 text-center text-sm mb-6">
              Buy More, Save More!<br />
              Buy 2 get 5% off | Buy 4 Get 10% Off
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="font-heading text-sm font-medium">Size</span>
                <button className="text-sm text-muted-foreground underline">Size Chart</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[3rem] px-4 py-3 border text-sm transition-colors ${
                      selectedSize === size
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            {product.colors.length > 0 && (
              <div className="mb-6">
                <span className="font-heading text-sm font-medium mb-3 block">COLORS</span>
                <div className="flex gap-3">
                  {product.colors.map(color => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 rounded-full border-2 transition-colors ${
                        selectedColor === color.name ? 'border-primary' : 'border-transparent'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <span className="font-heading text-sm font-medium mb-3 block">Quantity</span>
              <div className="flex items-center border border-border w-fit">
                <button 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="p-3 hover:bg-secondary transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="p-3 hover:bg-secondary transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button 
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full py-4 border border-primary font-heading text-sm tracking-wide hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {product.inStock ? 'Add to cart' : 'Sold Out'}
              </button>
              <button 
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full py-4 bg-primary text-primary-foreground font-heading text-sm tracking-wide hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Buy it now
              </button>
            </div>

            {/* Description */}
            <div className="mt-8 border-t border-border pt-6">
              <button 
                onClick={() => setShowDescription(!showDescription)}
                className="flex items-center justify-between w-full font-heading text-sm font-medium"
              >
                Description
                <ChevronDown className={`w-5 h-5 transition-transform ${showDescription ? 'rotate-180' : ''}`} />
              </button>
              
              {showDescription && (
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              )}
            </div>

            {/* Share */}
            <button className="flex items-center gap-2 mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 md:mt-24">
            <h2 className="font-heading text-xl md:text-2xl font-bold tracking-wide mb-8">
              You may also like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
