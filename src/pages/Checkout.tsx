// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { ChevronRight, ChevronDown, CreditCard, Smartphone } from 'lucide-react';
// import { useCart } from '@/context/CartContext';
// import { toast } from '@/hooks/use-toast';
// import { z } from 'zod';

// const checkoutSchema = z.object({
//   email: z.string().email('Invalid email address'),
//   firstName: z.string().min(1, 'First name is required'),
//   lastName: z.string().min(1, 'Last name is required'),
//   address: z.string().min(5, 'Address is required'),
//   city: z.string().min(2, 'City is required'),
//   state: z.string().min(2, 'State is required'),
//   pincode: z.string().regex(/^\d{6}$/, 'Invalid PIN code'),
//   phone: z.string().regex(/^\d{10}$/, 'Invalid phone number'),
// });

// const Checkout = () => {
//   const { items, totalPrice, clearCart } = useCart();
//   const navigate = useNavigate();
//   const [paymentMethod, setPaymentMethod] = useState<'razorpay' | 'cod'>('razorpay');
//   const [loading, setLoading] = useState(false);
//   const [showOrderSummary, setShowOrderSummary] = useState(false);
//   const [errors, setErrors] = useState<Record<string, string>>({});

//   const [formData, setFormData] = useState({
//     email: '',
//     firstName: '',
//     lastName: '',
//     address: '',
//     apartment: '',
//     city: '',
//     state: '',
//     pincode: '',
//     phone: '',
//   });

//   const formatPrice = (price: number) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 0
//     }).format(price);
//   };

//   const shippingCost = totalPrice > 2000 ? 0 : 99;
//   const grandTotal = totalPrice + shippingCost;

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   const validateForm = () => {
//     try {
//       checkoutSchema.parse(formData);
//       setErrors({});
//       return true;
//     } catch (err) {
//       if (err instanceof z.ZodError) {
//         const newErrors: Record<string, string> = {};
//         err.errors.forEach(error => {
//           if (error.path[0]) {
//             newErrors[error.path[0] as string] = error.message;
//           }
//         });
//         setErrors(newErrors);
//       }
//       return false;
//     }
//   };





//   const handlePayment = async () => {
//   if (!validateForm() || items.length === 0) return;

//   setLoading(true);

//   if (paymentMethod === "cod") {
//     setTimeout(() => {
//         clearCart();
//         toast({
//           title: "Order placed successfully!",
//           description: "You will receive a confirmation email shortly."
//         });
//         navigate('/');
//         setLoading(false);
//       }, 1500);
//       return;
//   }

//   try {
//     const res = await fetch(
//       `${import.meta.env.VITE_BACKEND_URL}/api/razorpay/create-order`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: grandTotal })
//       }
//     );

//     const order = await res.json();

//     const options = {
//       key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//       amount: order.amount,
//       currency: "INR",
//       name: "Zerc India",
//       description: "Order Payment",
//       order_id: order.id,
//       prefill: {
//         name: formData.firstName + " " + formData.lastName,
//         email: formData.email,
//         contact: formData.phone
//       },
//       handler: async (response: any) => {
//         await fetch(
//           `${import.meta.env.VITE_BACKEND_URL}/api/razorpay/verify`,
//           {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(response)
//           }
//         );

//         clearCart();
//         toast({ title: "Payment successful!" });
//         navigate("/");
//       }
//     };

//     const rzp = new (window as any).Razorpay(options);
//     rzp.open();
//   } catch {
//     toast({ title: "Payment failed", variant: "destructive" });
//     setLoading(false);
//   }
// };


//   if (items.length === 0) {
//     return (
//       <div className="py-16 text-center">
//         <h1 className="text-2xl font-heading font-bold mb-4">Your cart is empty</h1>
//         <Link 
//           to="/"
//           className="inline-block px-8 py-4 bg-primary text-primary-foreground font-heading text-sm tracking-wide"
//         >
//           CONTINUE SHOPPING
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="py-8 md:py-12">
//       <div className="container mx-auto px-4">
//         {/* Breadcrumb */}
//         <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
//           <Link to="/" className="hover:text-foreground transition-colors">Cart</Link>
//           <ChevronRight className="w-4 h-4" />
//           <span className="text-foreground">Checkout</span>
//         </nav>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Left - Form */}
//           <div>
//             <h1 className="font-heading text-2xl font-bold mb-8">CHECKOUT</h1>

//             {/* Contact */}
//             <div className="mb-8">
//               <h2 className="font-heading font-semibold mb-4">Contact</h2>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 placeholder="Email"
//                 className={`w-full px-4 py-3 bg-transparent border ${errors.email ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-1 focus:ring-primary`}
//               />
//               {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
//             </div>

//             {/* Shipping Address */}
//             <div className="mb-8">
//               <h2 className="font-heading font-semibold mb-4">Shipping Address</h2>
//               <div className="space-y-4">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       placeholder="First name"
//                       className={`w-full px-4 py-3 bg-transparent border ${errors.firstName ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-1 focus:ring-primary`}
//                     />
//                     {errors.firstName && <p className="text-destructive text-sm mt-1">{errors.firstName}</p>}
//                   </div>
//                   <div>
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       placeholder="Last name"
//                       className={`w-full px-4 py-3 bg-transparent border ${errors.lastName ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-1 focus:ring-primary`}
//                     />
//                     {errors.lastName && <p className="text-destructive text-sm mt-1">{errors.lastName}</p>}
//                   </div>
//                 </div>

//                 <div>
//                   <input
//                     type="text"
//                     name="address"
//                     value={formData.address}
//                     onChange={handleInputChange}
//                     placeholder="Address"
//                     className={`w-full px-4 py-3 bg-transparent border ${errors.address ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-1 focus:ring-primary`}
//                   />
//                   {errors.address && <p className="text-destructive text-sm mt-1">{errors.address}</p>}
//                 </div>

//                 <input
//                   type="text"
//                   name="apartment"
//                   value={formData.apartment}
//                   onChange={handleInputChange}
//                   placeholder="Apartment, suite, etc. (optional)"
//                   className="w-full px-4 py-3 bg-transparent border border-border focus:outline-none focus:ring-1 focus:ring-primary"
//                 />

//                 <div className="grid grid-cols-3 gap-4">
//                   <div>
//                     <input
//                       type="text"
//                       name="city"
//                       value={formData.city}
//                       onChange={handleInputChange}
//                       placeholder="City"
//                       className={`w-full px-4 py-3 bg-transparent border ${errors.city ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-1 focus:ring-primary`}
//                     />
//                     {errors.city && <p className="text-destructive text-sm mt-1">{errors.city}</p>}
//                   </div>
//                   <div>
//                     <input
//                       type="text"
//                       name="state"
//                       value={formData.state}
//                       onChange={handleInputChange}
//                       placeholder="State"
//                       className={`w-full px-4 py-3 bg-transparent border ${errors.state ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-1 focus:ring-primary`}
//                     />
//                     {errors.state && <p className="text-destructive text-sm mt-1">{errors.state}</p>}
//                   </div>
//                   <div>
//                     <input
//                       type="text"
//                       name="pincode"
//                       value={formData.pincode}
//                       onChange={handleInputChange}
//                       placeholder="PIN Code"
//                       className={`w-full px-4 py-3 bg-transparent border ${errors.pincode ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-1 focus:ring-primary`}
//                     />
//                     {errors.pincode && <p className="text-destructive text-sm mt-1">{errors.pincode}</p>}
//                   </div>
//                 </div>

//                 <div>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     placeholder="Phone"
//                     className={`w-full px-4 py-3 bg-transparent border ${errors.phone ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-1 focus:ring-primary`}
//                   />
//                   {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
//                 </div>
//               </div>
//             </div>

//             {/* Payment Method */}
//             <div className="mb-8">
//               <h2 className="font-heading font-semibold mb-4">Payment Method</h2>
//               <div className="space-y-3">
//                 <label 
//                   className={`flex items-center gap-4 p-4 border cursor-pointer transition-colors ${
//                     paymentMethod === 'razorpay' ? 'border-primary bg-secondary' : 'border-border'
//                   }`}
//                 >
//                   <input
//                     type="radio"
//                     name="payment"
//                     checked={paymentMethod === 'razorpay'}
//                     onChange={() => setPaymentMethod('razorpay')}
//                     className="w-4 h-4 accent-primary"
//                   />
//                   <CreditCard className="w-5 h-5" />
//                   <div>
//                     <span className="font-medium">Online</span>
//                     <p className="text-sm text-muted-foreground">Cards, UPI, Netbanking, Wallets</p>
//                   </div>
//                 </label>

//                 <label 
//                   className={`flex items-center gap-4 p-4 border cursor-pointer transition-colors ${
//                     paymentMethod === 'cod' ? 'border-primary bg-secondary' : 'border-border'
//                   }`}
//                 >
//                   <input
//                     type="radio"
//                     name="payment"
//                     checked={paymentMethod === 'cod'}
//                     onChange={() => setPaymentMethod('cod')}
//                     className="w-4 h-4 accent-primary"
//                   />
//                   <Smartphone className="w-5 h-5" />
//                   <div>
//                     <span className="font-medium">Cash on Delivery</span>
//                     <p className="text-sm text-muted-foreground">Pay when you receive your order</p>
//                   </div>
//                 </label>
//               </div>
//             </div>

//             <button
//               onClick={handlePayment}
//               disabled={loading}
//               className="w-full py-4 bg-primary text-primary-foreground font-heading text-sm tracking-wide hover:bg-primary/90 transition-colors disabled:opacity-50"
//             >
//               {loading ? 'PROCESSING...' : `PAY ${formatPrice(grandTotal)}`}
//             </button>
//           </div>

//           {/* Mobile Toggle */}
// <button 
//   onClick={() => setShowOrderSummary(!showOrderSummary)}
//   className="lg:hidden flex items-center justify-between w-full py-4 border-b border-border mb-4"
// >
//   <span className="font-heading font-semibold">Order Summary ({items.length})</span>
//   <div className="flex items-center gap-2">
//     <span className="font-semibold">{formatPrice(grandTotal)}</span>
//     <ChevronDown className={`w-5 h-5 transition-transform ${showOrderSummary ? 'rotate-180' : ''}`} />
//   </div>
// </button>

// {/* Mobile Order Summary */}
// <div
//   className={`lg:hidden transition-all duration-300 overflow-hidden ${showOrderSummary ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
// >
//   <div className="bg-background border border-border p-4 rounded-lg shadow-md">
    
//     {/* Items */}
//     <div className="space-y-4 mb-4">
//       {items.map(item => (
//         <div 
//           key={`${item.product.id}-${item.size}-${item.color}`}
//           className="flex gap-4"
//         >
//           <div className="relative w-16 h-20 bg-secondary flex-shrink-0">
//             <img 
//               src={item.product.images[0]}
//               alt={item.product.name}
//               className="w-full h-full object-cover"
//             />
//             <span className="absolute -top-2 -right-2 w-5 h-5 bg-muted-foreground text-background text-xs font-bold rounded-full flex items-center justify-center">
//               {item.quantity}
//             </span>
//           </div>
//           <div className="flex-1 min-w-0">
//             <h3 className="font-medium text-sm truncate">{item.product.name}</h3>
//             <p className="text-sm text-muted-foreground">
//               {item.size} / {item.color}
//             </p>
//           </div>
//           <span className="font-medium">
//             {formatPrice(item.product.price * item.quantity)}
//           </span>
//         </div>
//       ))}
//     </div>

//     {/* Totals */}
//     <div className="border-t border-border pt-4 space-y-3">
//       <div className="flex items-center justify-between text-sm">
//         <span className="text-muted-foreground">Subtotal</span>
//         <span>{formatPrice(totalPrice)}</span>
//       </div>
//       <div className="flex items-center justify-between text-sm">
//         <span className="text-muted-foreground">Shipping</span>
//         <span>{shippingCost === 0 ? 'FREE' : formatPrice(shippingCost)}</span>
//       </div>
//       {shippingCost === 0 && (
//         <p className="text-sm text-gold">Free shipping on orders above ₹2,000</p>
//       )}
//       <div className="flex items-center justify-between text-lg font-heading font-bold pt-3 border-t border-border">
//         <span>Total</span>
//         <span>{formatPrice(grandTotal)}</span>
//       </div>
//     </div>
//   </div>
// </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;









import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronDown, CreditCard, Smartphone } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';
import { z } from 'zod';

const checkoutSchema = z.object({
  email: z.string().email('Invalid email address'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  address: z.string().min(5, 'Address is required'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  pincode: z.string().regex(/^\d{6}$/, 'Invalid PIN code'),
  phone: z.string().regex(/^\d{10}$/, 'Invalid phone number'),
});


const OrderSummary = ({ items, totalPrice, totalDiscount, finalPrice, shippingCost, grandTotal, formatPrice, getItemDiscount }) => {
  return (
    <div className="bg-background border border-border p-10 rounded-lg shadow-md">
      
      <div className="space-y-4 mb-6">
        {items.map(item => {
          const itemDiscount = getItemDiscount(item);
          const itemTotal = item.product.price * item.quantity;
          const discountedTotal = itemTotal - itemDiscount;
          
          return (
            <div 
              key={`${item.product.id}-${item.size}-${item.color}`}
              className="flex gap-4"
            >
              <div className="relative w-16 h-20 bg-secondary flex-shrink-0">
                <img 
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-muted-foreground text-background text-xs font-bold rounded-full flex items-center justify-center">
                  {item.quantity}
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm truncate">{item.product.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.size} / {item.color}
                </p>
                {itemDiscount > 0 && (
                  <span className="inline-block mt-1 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded">
                    10% off
                  </span>
                )}
              </div>

              <div className="text-right">
                {itemDiscount > 0 ? (
                  <div>
                    <span className="font-medium text-green-600">
                      {formatPrice(discountedTotal)}
                    </span>
                    <div className="text-xs text-muted-foreground line-through">
                      {formatPrice(itemTotal)}
                    </div>
                  </div>
                ) : (
                  <span className="font-medium">
                    {formatPrice(itemTotal)}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Totals */}
      <div className="border-t border-border pt-4 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span>{formatPrice(totalPrice)}</span>
        </div>

        {totalDiscount > 0 && (
          <div className="flex justify-between text-sm text-green-600">
            <span>Quantity Discount (10%)</span>
            <span>-{formatPrice(totalDiscount)}</span>
          </div>
        )}

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span>{shippingCost === 0 ? 'FREE' : formatPrice(shippingCost)}</span>
        </div>

        {shippingCost === 0 && (
          <p className="text-sm text-gold">Free shipping on orders above ₹2,000</p>
        )}

        <div className="flex justify-between text-lg font-heading font-bold pt-3 border-t border-border">
          <span>Total</span>
          <span>{formatPrice(grandTotal)}</span>
        </div>
      </div>
    </div>
  );
};

const Checkout = () => {
  const { items, totalPrice, totalDiscount, finalPrice, clearCart, getItemDiscount } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'razorpay' | 'cod'>('razorpay');
  const [loading, setLoading] = useState(false);
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(Math.floor(price));
  };

  const shippingCost = finalPrice > 2000 ? 0 : 99;
  const grandTotal = finalPrice + shippingCost;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    try {
      checkoutSchema.parse(formData);
      setErrors({});
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        err.errors.forEach(error => {
          if (error.path[0]) {
            newErrors[error.path[0] as string] = error.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handlePayment = async () => {
    if (!validateForm() || items.length === 0) return;

    setLoading(true);

    if (paymentMethod === "cod") {
      setTimeout(() => {
        clearCart();
        toast({
          title: "Order placed successfully!",
          description: "You will receive a confirmation email shortly."
        });
        navigate('/');
        setLoading(false);
      }, 1500);
      return;
    }

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/razorpay/create-order`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: grandTotal })
        }
      );

      const order = await res.json();

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "Zerc India",
        description: "Order Payment",
        order_id: order.id,
        prefill: {
          name: formData.firstName + " " + formData.lastName,
          email: formData.email,
          contact: formData.phone
        },
        handler: async (response: any) => {
          await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/api/razorpay/verify`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response)
            }
          );

          clearCart();
          toast({ title: "Payment successful!" });
          navigate("/");
        }
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch {
      toast({ title: "Payment failed", variant: "destructive" });
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl font-heading font-bold mb-4">Your cart is empty</h1>
        <Link 
          to="/"
          className="inline-block px-8 py-4 bg-primary text-primary-foreground font-heading text-sm tracking-wide"
        >
          CONTINUE SHOPPING
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">Cart</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">Checkout</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Form */}
          <div>
            <h1 className="font-heading text-2xl font-bold mb-8">CHECKOUT</h1>

            {/* Contact */}
            <div className="mb-8">
              <h2 className="font-heading font-semibold mb-4">Contact</h2>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className={`w-full px-4 py-3 bg-transparent border ${errors.email ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-1 focus:ring-primary`}
              />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Shipping Address */}
            <div className="mb-8">
              <h2 className="font-heading font-semibold mb-4">Shipping Address</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First name"
                      className={`w-full px-4 py-3 bg-transparent border ${errors.firstName ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-1 focus:ring-primary`}
                    />
                    {errors.firstName && <p className="text-destructive text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last name"
                      className={`w-full px-4 py-3 bg-transparent border ${errors.lastName ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-1 focus:ring-primary`}
                    />
                    {errors.lastName && <p className="text-destructive text-sm mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                    className={`w-full px-4 py-3 bg-transparent border ${errors.address ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-1 focus:ring-primary`}
                  />
                  {errors.address && <p className="text-destructive text-sm mt-1">{errors.address}</p>}
                </div>

                <input
                  type="text"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleInputChange}
                  placeholder="Apartment, suite, etc. (optional)"
                  className="w-full px-4 py-3 bg-transparent border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                />

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City"
                      className={`w-full px-4 py-3 bg-transparent border ${errors.city ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-1 focus:ring-primary`}
                    />
                    {errors.city && <p className="text-destructive text-sm mt-1">{errors.city}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="State"
                      className={`w-full px-4 py-3 bg-transparent border ${errors.state ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-1 focus:ring-primary`}
                    />
                    {errors.state && <p className="text-destructive text-sm mt-1">{errors.state}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      placeholder="PIN Code"
                      className={`w-full px-4 py-3 bg-transparent border ${errors.pincode ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-1 focus:ring-primary`}
                    />
                    {errors.pincode && <p className="text-destructive text-sm mt-1">{errors.pincode}</p>}
                  </div>
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    className={`w-full px-4 py-3 bg-transparent border ${errors.phone ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-1 focus:ring-primary`}
                  />
                  {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-8">
              <h2 className="font-heading font-semibold mb-4">Payment Method</h2>
              <div className="space-y-3">
                <label 
                  className={`flex items-center gap-4 p-4 border cursor-pointer transition-colors ${
                    paymentMethod === 'razorpay' ? 'border-primary bg-secondary' : 'border-border'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'razorpay'}
                    onChange={() => setPaymentMethod('razorpay')}
                    className="w-4 h-4 accent-primary"
                  />
                  <CreditCard className="w-5 h-5" />
                  <div>
                    <span className="font-medium">Online</span>
                    <p className="text-sm text-muted-foreground">Cards, UPI, Netbanking, Wallets</p>
                  </div>
                </label>

                <label 
                  className={`flex items-center gap-4 p-4 border cursor-pointer transition-colors ${
                    paymentMethod === 'cod' ? 'border-primary bg-secondary' : 'border-border'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    className="w-4 h-4 accent-primary"
                  />
                  <Smartphone className="w-5 h-5" />
                  <div>
                    <span className="font-medium">Cash on Delivery</span>
                    <p className="text-sm text-muted-foreground">Pay when you receive your order</p>
                  </div>
                </label>
              </div>
            </div>

            <button
              onClick={handlePayment}
              disabled={loading}
              className="w-full py-4 bg-primary text-primary-foreground font-heading text-sm tracking-wide hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {loading ? 'PROCESSING...' : `PAY ${formatPrice(grandTotal)}`}
            </button>
          </div>

          {/* Desktop Order Summary */}
          <div className="hidden lg:block">
            <OrderSummary
              items={items}
              totalPrice={totalPrice}
              totalDiscount={totalDiscount}
              finalPrice={finalPrice}
              shippingCost={shippingCost}
              grandTotal={grandTotal}
              formatPrice={formatPrice}
              getItemDiscount={getItemDiscount}
            />
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setShowOrderSummary(!showOrderSummary)}
          className="lg:hidden flex items-center justify-between w-full py-4 border-b border-border mb-4"
        >
          <span className="font-heading font-semibold">Order Summary ({items.length})</span>
          <div className="flex items-center gap-2">
            <span className="font-semibold">{formatPrice(grandTotal)}</span>
            <ChevronDown className={`w-5 h-5 transition-transform ${showOrderSummary ? 'rotate-180' : ''}`} />
          </div>
        </button>

        
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${showOrderSummary ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <OrderSummary
            items={items}
            totalPrice={totalPrice}
            totalDiscount={totalDiscount}
            finalPrice={finalPrice}
            shippingCost={shippingCost}
            grandTotal={grandTotal}
            formatPrice={formatPrice}
            getItemDiscount={getItemDiscount}
          />
        </div>

      </div>
    </div>
  );
};

export default Checkout;
