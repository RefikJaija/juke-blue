// // // src/app/shop/page.jsx
// "use client";
// import { useEffect, useState, useCallback } from 'react';
// import Image from 'next/image';
// import CartSummary from '@/app/components/CartSummary';

// // Utility to safely parse JSON from localStorage
// const getInitialCart = () => {
//   if (typeof window !== 'undefined') {
//     const savedCart = localStorage.getItem('jukeBlueCart');
//     try {
//       return savedCart ? JSON.parse(savedCart) : [];
//     } catch (e) {
//       console.error("Failed to parse cart from localStorage", e);
//       return [];
//     }
//   }
//   return [];
// };

// export default function ShopPage() {
//   const [product, setProduct] = useState(null); // Changed from 'products' to 'product'
//   const [cart, setCart] = useState(getInitialCart);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const STORE_URL = process.env.NEXT_PUBLIC_WOOCOMMERCE_STORE_URL;

//   // Fetch only the "Double Blue" product
//   const fetchDoubleBlueProduct = useCallback(async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       // Your API route should still be configured to search for "Double Blue"
//       // as discussed in the previous step (e.g., ?search=Double%20Blue&per_page=1)
//       const response = await fetch('/api/products'); // This route is expected to return "Double Blue"

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.details || 'Failed to fetch product from our server.');
//       }

//       const data = await response.json();
//       // The API returns an array, so we take the first item
//       if (data && data.length > 0) {
//         setProduct(data[0]); // Set the single product
//       } else {
//         setError("Product 'Double Blue' not found on the store.");
//       }

//     } catch (err) {
//       console.error("Error fetching Double Blue product:", err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchDoubleBlueProduct();
//   }, [fetchDoubleBlueProduct]);

//   // Effect to save cart to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('jukeBlueCart', JSON.stringify(cart));
//   }, [cart]);

//   // Add to cart function (for the single product)
//   const addToCart = useCallback((productToAdd) => {
//     setCart(prevCart => {
//       const existingItem = prevCart.find(item => item.id === productToAdd.id);

//       if (existingItem) {
//         return prevCart.map(item =>
//           item.id === productToAdd.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         return [...prevCart, { ...productToAdd, quantity: 1 }];
//       }
//     });
//     alert(`${productToAdd.name} added to cart!`); // Provide feedback to the user
//   }, []);

//   // Remove from cart
//   const removeFromCart = (productId) => {
//     setCart(prevCart => prevCart.filter(item => item.id !== productId));
//   };

//   // Update quantity
//   const updateQuantity = (productId, newQuantity) => {
//     setCart(prevCart => {
//       if (newQuantity < 1) return prevCart.filter(item => item.id !== productId);

//       return prevCart.map(item =>
//         item.id === productId
//           ? { ...item, quantity: newQuantity }
//           : item
//       );
//     });
//   };

//   // Calculate totals
//   const subtotal = cart.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);
//   const shipping = subtotal > 0 ? 5.99 : 0;
//   const total = subtotal + shipping;

//   const handleCheckout = () => {
//     if (cart.length === 0) {
//       alert("Your cart is empty. Please add items before checking out.");
//       return;
//     }

//     const checkoutUrl = `${STORE_URL}/checkout/?add-to-cart=${cart.map(item => `${item.id}:${item.quantity}`).join(',')}`;
//     alert('Proceeding to secure checkout...');
//     window.location.href = checkoutUrl;
//   };

//   // --- Render Logic for Single Product ---
//   if (loading) {
//     return (
//       // Removed bg-blush-darker
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-3xl font-title text-antique animate-pulse">Loading The Spirit...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       // Removed bg-blush-darker
//       <div className="min-h-screen flex flex-col items-center justify-center p-4">
//         <div className="text-2xl text-red-500 text-center mb-6">
//           <p>Error: {error}</p>
//           <p className="text-lg text-antique/70 mt-2">
//             Could not load 'Double Blue' product. Please ensure the WooCommerce API is working and the product exists.
//           </p>
//         </div>
//         <button
//           onClick={fetchDoubleBlueProduct}
//           className="mt-4 px-6 py-3 bg-nautical text-antique rounded-lg text-lg font-semibold hover:bg-blush transition-colors"
//         >
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   if (!product) {
//     return (
//       // Removed bg-blush-darker
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-2xl text-antique/70">Product 'Double Blue' not found.</div>
//       </div>
//     );
//   }

//   const imageUrl = product.images?.[0]?.src || null;
//   const imageAlt = product.name || 'Product Image';
//   const isInStock = product.stock_status === 'instock';

//   return (
//     // Removed bg-blush-darker
//     <div className="min-h-screen py-16 px-4 max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
//       {/* Left Section: Single Product Display */}
//       {/* Removed bg-antique-medium */}
//       <div className="flex-1 flex flex-col items-center lg:items-start justify-center rounded-xl shadow-2xl overflow-hidden p-8 lg:p-12">
//         {/* Product Details - Adjusted for single product on shop page */}
//         <div className="text-center lg:text-left p-4">
//           <h1 className="font-title text-6xl md:text-7xl text-nautical mb-4 leading-tight">
//             DOUBLE BLUE
//           </h1>
//           <p className="font-sans text-3xl text-nautical/80 mb-6 uppercase tracking-wider">
//             SPIRIT
//           </p>
//           <p className="text-5xl font-bold text-blush mb-8">
//             {new Intl.NumberFormat('de-DE', {
//               style: 'currency',
//               currency: 'EUR'
//             }).format(parseFloat(product.price) || 0)}
//           </p>

//           <button
//             onClick={() => addToCart(product)}
//             disabled={!isInStock}
//             className={`px-12 py-4 rounded-lg transition-colors font-title text-2xl uppercase tracking-wider shadow-lg ${
//               isInStock
//                 ? 'bg-nautical text-antique hover:bg-blush hover:text-nautical'
//                 : 'bg-gray-400 text-gray-700 cursor-not-allowed'
//             }`}
//           >
//             {isInStock ? 'Add to Cart' : 'Sold Out'}
//           </button>
//           {!isInStock && product.stock_quantity !== undefined && (
//             <p className="text-red-500 text-sm mt-2">Currently out of stock.</p>
//           )}

//           {/* Short Description */}
//           {product.short_description && (
//             <div
//               className="text-nautical/80 mt-8 text-lg leading-relaxed max-w-md lg:max-w-none mx-auto lg:mx-0"
//               dangerouslySetInnerHTML={{ __html: product.short_description }}
//             />
//           )}
//         </div>

//         {/* Product Image */}
//         <div className="flex justify-center items-center p-4 mt-8 lg:mt-0">
//           {imageUrl ? (
//             <Image
//               src={imageUrl}
//               alt={imageAlt}
//               width={400} // Adjust as needed for larger display
//               height={600} // Adjust as needed for larger display (aspect ratio of bottle)
//               layout="intrinsic"
//               objectFit="contain"
//               className="rounded-xl shadow-xl border-4 border-nautical/20 transform hover:scale-105 transition-transform duration-300"
//             />
//           ) : (
//             <div className="bg-gray-200 border-2 border-dashed rounded-xl w-80 h-96 flex items-center justify-center text-nautical/50 text-xl">
//               No Image Available
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Cart Summary - Sticky on desktop */}
//       <div className="lg:w-96 lg:sticky lg:top-24 h-fit">
//         <CartSummary
//           cart={cart}
//           subtotal={subtotal}
//           shipping={shipping}
//           total={total}
//           onRemove={removeFromCart}
//           onUpdate={updateQuantity}
//           onCheckout={handleCheckout}
//         />
//       </div>
//     </div>
//   );
// }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// // src/app/shop/page.jsx
// "use client";
// import { useEffect, useState, useCallback } from 'react';
// import Image from 'next/image';
// import CartSummary from '@/app/components/CartSummary'; // Make sure the path is correct

// // --- TEMPORARY MOCK PRODUCT DATA ---
// // This data is used to display the layout when the API is not working.
// // REMEMBER TO REMOVE THIS MOCK DATA AND REVERT TO API FETCHING ONCE WOOCOMMERCE IS FIXED.
// const MOCK_DOUBLE_BLUE_PRODUCT = {
//   id: 1001, // A unique ID for the mock product
//   name: "Double Blue Spirit", // The name you want displayed
//   price: "17.99", // A placeholder price
//   short_description: "<p>Experience the deep and captivating essence of Double Blue Spirit, meticulously crafted for a smooth and memorable finish.</p>",
//   // Use the image path you provided. Ensure this image is in your `public` folder.
//   images: [{ src: '/images/DoubleBlueNoBg2.png' }], // Corrected: was missing array brackets before
//   stock_status: "instock",
//   stock_quantity: 99,
// };
// // --- END TEMPORARY MOCK PRODUCT DATA ---


// // Utility to safely parse JSON from localStorage
// const getInitialCart = () => {
//   if (typeof window !== 'undefined') {
//     const savedCart = localStorage.getItem('jukeBlueCart');
//     try {
//       return savedCart ? JSON.parse(savedCart) : [];
//     } catch (e) {
//       console.error("Failed to parse cart from localStorage", e);
//       return [];
//     }
//   }
//   return [];
// };

// export default function ShopPage() {
//   const [product, setProduct] = useState(null);
//   const [cart, setCart] = useState(getInitialCart);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const STORE_URL = process.env.NEXT_PUBLIC_WOOCOMMERCE_STORE_URL;

//   // Modified to use mock data for display purposes
//   const fetchDoubleBlueProduct = useCallback(async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       // Simulate a network delay (optional, for realism)
//       await new Promise(resolve => setTimeout(resolve, 500));

//       // --- Use MOCK DATA instead of API call ---
//       setProduct(MOCK_DOUBLE_BLUE_PRODUCT);
//       // --- END MOCK DATA usage ---

//       // KEEP the API call commented out, but remember it's what you need
//       // to uncomment once dwersteg.de's WooCommerce API is fixed.
//       /*
//       const response = await fetch('/api/products');

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.details || 'Failed to fetch product from our server.');
//       }

//       const data = await response.json();
//       if (data && data.length > 0) {
//         setProduct(data[0]);
//       } else {
//         setError("Product 'Double Blue' not found on the store.");
//       }
//       */

//     } catch (err) {
//       // This catch block might not be hit with static mock data, but good to keep.
//       console.error("Error fetching Double Blue product (using mock data):", err);
//       setError("Failed to load product data (using mock data).");
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchDoubleBlueProduct();
//   }, [fetchDoubleBlueProduct]);

//   // Effect to save cart to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('jukeBlueCart', JSON.stringify(cart));
//   }, [cart]);

//   // Add to cart function (for the single product)
//   const addToCart = useCallback((productToAdd) => {
//     setCart(prevCart => {
//       const existingItem = prevCart.find(item => item.id === productToAdd.id);

//       if (existingItem) {
//         return prevCart.map(item =>
//           item.id === productToAdd.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         return [...prevCart, { ...productToAdd, quantity: 1 }];
//       }
//     });
//     // REMOVED: alert(`${productToAdd.name} added to cart!`);
//   }, []);

//   // Remove from cart
//   const removeFromCart = (productId) => {
//     setCart(prevCart => prevCart.filter(item => item.id !== productId));
//   };

//   // Update quantity
//   const updateQuantity = (productId, newQuantity) => {
//     setCart(prevCart => {
//       if (newQuantity < 1) return prevCart.filter(item => item.id !== productId);

//       return prevCart.map(item =>
//         item.id === productId
//           ? { ...item, quantity: newQuantity }
//           : item
//       );
//     });
//   };

//   // Calculate totals
//   const subtotal = cart.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);
//   const shipping = subtotal > 0 ? 5.99 : 0;
//   const total = subtotal + shipping;

//   const handleCheckout = () => {
//     if (cart.length === 0) {
//       alert("Your cart is empty. Please add items before checking out.");
//       return;
//     }

//     // This will still attempt to redirect to the actual WooCommerce checkout,
//     // which might or might not work depending on their site setup.
//     const checkoutUrl = `${STORE_URL}/checkout/?add-to-cart=${cart.map(item => `${item.id}:${item.quantity}`).join(',')}`;
//     alert('Proceeding to secure checkout...');
//     window.location.href = checkoutUrl;
//   };

//   // --- Render Logic for Single Product ---
//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-3xl font-title text-antique animate-pulse">Loading The Spirit...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center p-4">
//         <div className="text-2xl text-red-500 text-center mb-6">
//           <p>Error: {error}</p>
//           <p className="text-lg text-antique/70 mt-2">
//             This is a mock display. Actual product data could not be loaded due to an API error.
//           </p>
//         </div>
//         <button
//           onClick={fetchDoubleBlueProduct}
//           className="mt-4 px-6 py-3 bg-nautical text-antique rounded-lg text-lg font-semibold hover:bg-blush transition-colors"
//         >
//           Reload Mock Data
//         </button>
//       </div>
//     );
//   }

//   if (!product) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-2xl text-antique/70">Mock product data not available.</div>
//       </div>
//     );
//   }

//   const imageUrl = product.images?.[0]?.src || null;
//   const imageAlt = product.name || 'Product Image';
//   const isInStock = product.stock_status === 'instock';

//   return (
//     <div className="min-h-screen py-16 px-4 max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
//       {/* Left Section: Single Product Display */}
//       <div className="flex-1 flex flex-col items-center lg:items-start justify-center rounded-xl shadow-2xl overflow-hidden p-8 lg:p-12">
//         {/* Product Details */}
//         <div className="text-center lg:text-left p-4">
//           <h1 className="font-title text-6xl md:text-7xl text-nautical mb-4 leading-tight">
//             DOUBLE BLUE {/* Hardcoded name as requested */}
//           </h1>
//           <p className="font-sans text-3xl text-nautical/80 mb-6 uppercase tracking-wider">
//             SPIRIT
//           </p>
//           <p className="text-5xl font-bold text-blush mb-8">
//             {new Intl.NumberFormat('de-DE', {
//               style: 'currency',
//               currency: 'EUR'
//             }).format(parseFloat(product.price) || 0)}
//           </p>

          

//           {/* Short Description */}
//           {product.short_description && (
//             <div
//               className="text-nautical/80 mt-8 text-lg leading-relaxed max-w-md lg:max-w-none mx-auto lg:mx-0"
//               dangerouslySetInnerHTML={{ __html: product.short_description }}
//             />
//           )}
//         </div>

//         {/* Product Image */}
//         <div className="flex justify-center items-center p-4 mt-8 mb-16 lg:mt-0">
//           {imageUrl ? (
//             <Image
//               src={imageUrl}
//               alt={imageAlt}
//               width={400} // Adjust as needed for larger display
//               height={600} // Adjust as needed for larger display (aspect ratio of bottle)
//               layout="intrinsic"
//               objectFit="contain"
//               className="rounded-xl transform hover:scale-105 transition-transform duration-300"
//               //shadow-xl border-4 border-nautical/20
//             />
//           ) : (
//             <div className="bg-gray-200 border-2 border-dashed rounded-xl w-80 h-96 flex items-center justify-center text-nautical/50 text-xl">
//               No Image Available
//             </div>
//           )}
//         </div>
//         <button
//             onClick={() => addToCart(product)}
//             disabled={!isInStock}
//             className={`px-12 py-4 rounded-lg transition-colors font-title text-2xl uppercase tracking-wider shadow-lg ${
//               isInStock
//                 ? 'bg-nautical text-antique hover:bg-blush hover:text-nautical'
//                 : 'bg-gray-400 text-gray-700 cursor-not-allowed'
//             }`}
//           >
//             {isInStock ? 'Add to Cart' : 'Sold Out'}
//           </button>
//           {!isInStock && product.stock_quantity !== undefined && (
//             <p className="text-red-500 text-sm mt-2">Currently out of stock.</p>
//           )}
//       </div>

//       {/* Cart Summary - Sticky on desktop */}
//       <div className="lg:w-96 lg:sticky lg:top-24 h-fit">
//         <CartSummary
//           cart={cart}
//           subtotal={subtotal}
//           shipping={shipping}
//           total={total}
//           onRemove={removeFromCart}
//           onUpdate={updateQuantity}
//           onCheckout={handleCheckout}
//         />
//       </div>
//     </div>
//   );
// }

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// src/app/shop/page.jsx
"use client";
import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
// CartSummary is no longer imported as we're ditching the cart functionality

// --- TEMPORARY MOCK PRODUCT DATA ---
// This data is used to display the layout when the API is not working.
// REMEMBER TO REMOVE THIS MOCK DATA AND REVERT TO API FETCHING ONCE WOOCOMMERCE IS FIXED.
const MOCK_DOUBLE_BLUE_PRODUCT = {
  id: 1001, // A unique ID for the mock product
  name: "Double Blue Spirit", // The name you want displayed for internal use/checkout
  price: "17.99", // A placeholder price
  short_description: "<p>Experience the deep and captivating essence of Double Blue Spirit, meticulously crafted for a smooth and memorable finish.</p><p>This premium spirit delivers a smooth and sophisticated taste, perfect for savoring on its own or as the foundation for exquisite cocktails. Crafted with dedication to quality.</p>", // More descriptive
  images: [{ src: '/images/DoubleBlue.jpeg' }],
  stock_status: "instock",
  stock_quantity: 99,
};
// --- END TEMPORARY MOCK PRODUCT DATA ---

export default function ShopPage() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // We still need the STORE_URL for the "Buy Now" button redirection
  const STORE_URL = process.env.NEXT_PUBLIC_WOOCOMMERCE_STORE_URL;

  // Fetch (or set mock) the "Double Blue" product
  const fetchDoubleBlueProduct = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
      setProduct(MOCK_DOUBLE_BLUE_PRODUCT); // Use MOCK DATA
    } catch (err) {
      console.error("Error fetching Double Blue product (using mock data):", err);
      setError("Failed to load product data (using mock data).");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDoubleBlueProduct();
  }, [fetchDoubleBlueProduct]);

  // New function for "Buy Now" - simplified for a single product
  const handleBuyNow = () => {
    if (!product || product.stock_status !== 'instock') {
      alert("This product is currently unavailable or out of stock.");
      return;
    }

    // Direct link to checkout with the single product and quantity 1
    // Adjust the product ID (MOCK_DOUBLE_BLUE_PRODUCT.id) if you use a real product ID later
    const checkoutUrl = `${STORE_URL}/checkout/?add-to-cart=${MOCK_DOUBLE_BLUE_PRODUCT.id}:1`;
    
    // Optional: Add a brief confirmation before redirecting
    // alert(`Proceeding to checkout for ${product.name}...`);
    window.location.href = checkoutUrl;
  };

  // --- Render Logic ---
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-3xl font-title text-nautical animate-pulse">Summoning The Spirit...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="text-2xl text-red-500 text-center mb-6">
          <p>Error: {error}</p>
          <p className="text-lg text-antique/70 mt-2">
            This is a mock display. Actual product data could not be loaded due to an API error.
          </p>
        </div>
        <button
          onClick={fetchDoubleBlueProduct}
          className="mt-4 px-6 py-3 bg-nautical text-antique rounded-lg text-lg font-semibold hover:bg-blush transition-colors"
        >
          Reload Mock Data
        </button>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-antique/70">Mock product data not available.</div>
      </div>
    );
  }

  const imageUrl = product.images?.[0]?.src || null;
  const imageAlt = product.name || 'Product Image';
  const isInStock = product.stock_status === 'instock';

  return (
    <div className="min-h-screen py-16 px-4 mt-32 max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-center gap-8">
      {/* Left Section: Only Product Image */}
      <div className="flex-1 flex justify-center items-center p-4">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={600} // Adjust as needed for larger display
            height={800} // Adjust as needed for larger display (aspect ratio of bottle)
            layout="intrinsic"
            objectFit="contain"
            className="rounded-xl transform hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-80 h-96 flex items-center justify-center text-nautical/50 text-xl">
            No Image Available
          </div>
        )}
      </div>

      {/* Right Section: Product Details and Buy Now Button */}
      <div className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left p-4">
        <h1 className="font-title text-6xl md:text-5xl text-nautical mb-4 leading-tight">
          DOUBLE BLUE
        </h1>
        <p className="font-sans text-2xl text-antique/80 mb-6 uppercase tracking-wider">
          SPIRIT
        </p>
        
        {product.short_description && (
          <div
            className="text-nautical/70 text-lg leading-relaxed max-w-md lg:max-w-none mx-auto lg:mx-0 mb-8"
            dangerouslySetInnerHTML={{ __html: product.short_description }}
          />
        )}

        <p className="text-5xl font-bold text-blush mb-8">
          {new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
          }).format(parseFloat(product.price) || 0)}
        </p>

        <button
          onClick={handleBuyNow} // Changed to handleBuyNow
          disabled={!isInStock}
          className={`px-12 py-4 rounded-lg transition-colors font-title text-2xl uppercase tracking-wider shadow-lg ${
            isInStock
              ? 'bg-nautical text-antique hover:bg-blush hover:text-nautical'
              : 'bg-gray-400 text-gray-700 cursor-not-allowed'
          }`}
        >
          {isInStock ? 'Buy Now' : 'Sold Out'}
        </button>
        {!isInStock && product.stock_quantity !== undefined && (
          <p className="text-red-500 text-sm mt-2">Currently out of stock.</p>
        )}
      </div>
    </div>
  );
}


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// // src/app/shop/page.jsx
// "use client";
// import { useEffect, useState, useCallback } from 'react';
// import Image from 'next/image';
// // CartSummary is no longer imported as we're ditching the cart functionality

// // --- TEMPORARY MOCK PRODUCT DATA ---
// // This data is used to display the layout when the API is not working.
// // REMEMBER TO REMOVE THIS MOCK DATA AND REVERT TO API FETCHING ONCE WOOCOMMERCE IS FIXED.
// const MOCK_DOUBLE_BLUE_PRODUCT = {
//   id: 1001, // A unique ID for the mock product
//   name: "Double Blue Spirit", // The name you want displayed for internal use/checkout
//   price: "29.99", // A placeholder price
//   short_description: "<p>Experience the deep and captivating essence of Double Blue Spirit, meticulously crafted for a smooth and memorable finish.</p><p>This premium spirit delivers a smooth and sophisticated taste, perfect for savoring on its own or as the foundation for exquisite cocktails. Crafted with dedication to quality.</p>", // More descriptive
//   images: [{ src: '/images/DoubleBlueNoBg2.png' }],
//   stock_status: "instock",
//   stock_quantity: 99,
// };
// // --- END TEMPORARY MOCK PRODUCT DATA ---

// export default function ShopPage() {
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // We no longer need STORE_URL directly for checkout redirection with a fixed link
//   // const STORE_URL = process.env.NEXT_PUBLIC_WOOCOMMERCE_STORE_URL;

//   // Fetch (or set mock) the "Double Blue" product
//   const fetchDoubleBlueProduct = useCallback(async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
//       setProduct(MOCK_DOUBLE_BLUE_PRODUCT); // Use MOCK DATA
//     } catch (err) {
//       console.error("Error fetching Double Blue product (using mock data):", err);
//       setError("Failed to load product data (using mock data).");
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchDoubleBlueProduct();
//   }, [fetchDoubleBlueProduct]);

//   // New function for "Buy Now" - now redirects to a fixed external URL
//   const handleBuyNow = () => {
//     // This is the specific URL you want to redirect to
//     const externalCheckoutUrl = "https://dwersteg.de/checkouts/cn/Z2NwLWV1cm9vcGUtd2VzdDE6MDFKWjhFUDlGNlk4SDQwUlpFNzY2N0RBNg";
    
//     // Optional: Add a brief confirmation before redirecting
//     // alert("Redirecting to external checkout page...");
//     window.location.href = externalCheckoutUrl;
//   };

//   // --- Render Logic ---
//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-3xl font-title text-nautical animate-pulse">Summoning The Spirit...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center p-4">
//         <div className="text-2xl text-red-500 text-center mb-6">
//           <p>Error: {error}</p>
//           <p className="text-lg text-antique/70 mt-2">
//             This is a mock display. Actual product data could not be loaded due to an API error.
//           </p>
//         </div>
//         <button
//           onClick={fetchDoubleBlueProduct}
//           className="mt-4 px-6 py-3 bg-nautical text-antique rounded-lg text-lg font-semibold hover:bg-blush transition-colors"
//         >
//           Reload Mock Data
//         </button>
//       </div>
//     );
//   }

//   if (!product) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-2xl text-antique/70">Mock product data not available.</div>
//       </div>
//     );
//   }

//   const imageUrl = product.images?.[0]?.src || null;
//   const imageAlt = product.name || 'Product Image';
//   // isInStock is no longer relevant for a fixed external link, but we'll keep the button disabled logic just in case.
//   const isInStock = product.stock_status === 'instock';

//   return (
//     <div className="min-h-screen py-16 px-4 mt-32 max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-center gap-8">
//       {/* Left Section: Only Product Image */}
//       <div className="flex-1 flex justify-center items-center p-4">
//         {imageUrl ? (
//           <Image
//             src={imageUrl}
//             alt={imageAlt}
//             width={600} // Adjust as needed for larger display
//             height={800} // Adjust as needed for larger display (aspect ratio of bottle)
//             layout="intrinsic"
//             objectFit="contain"
//             className="rounded-xl transform hover:scale-105 transition-transform duration-300"
//           />
//         ) : (
//           <div className="bg-gray-200 border-2 border-dashed rounded-xl w-80 h-96 flex items-center justify-center text-nautical/50 text-xl">
//             No Image Available
//           </div>
//         )}
//       </div>

//       {/* Right Section: Product Details and Buy Now Button */}
//       <div className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left p-4">
//         <h1 className="font-title text-6xl md:text-5xl text-nautical mb-4 leading-tight">
//           DOUBLE BLUE
//         </h1>
//         <p className="font-sans text-2xl text-nautical/80 mb-6 uppercase tracking-wider">
//           SPIRIT
//         </p>
        
//         {product.short_description && (
//           <div
//             className="text-nautical/50 text-lg leading-relaxed max-w-md lg:max-w-none mx-auto lg:mx-0 mb-8"
//             dangerouslySetInnerHTML={{ __html: product.short_description }}
//           />
//         )}

//         <p className="text-5xl font-bold text-blush mb-8">
//           {new Intl.NumberFormat('de-DE', {
//             style: 'currency',
//             currency: 'EUR'
//           }).format(parseFloat(product.price) || 0)}
//         </p>

//         <button
//           onClick={handleBuyNow} // This button now uses the fixed external URL
//           disabled={!isInStock} // Still respects mock stock status for visual feedback
//           className={`px-12 py-4 rounded-lg transition-colors font-title text-2xl uppercase tracking-wider shadow-lg ${
//             isInStock
//               ? 'bg-nautical text-antique hover:bg-blush hover:text-nautical'
//               : 'bg-gray-400 text-gray-700 cursor-not-allowed'
//           }`}
//         >
//           {isInStock ? 'Buy Now' : 'Sold Out'}
//         </button>
//         {!isInStock && product.stock_quantity !== undefined && (
//           <p className="text-red-500 text-sm mt-2">Currently out of stock.</p>
//         )}
//       </div>
//     </div>
//   );
// }