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
//   price: "17.99", // A placeholder price
//   short_description: "<p>Experience the deep and captivating essence of Double Blue Spirit, meticulously crafted for a smooth and memorable finish.</p><p>This premium spirit delivers a smooth and sophisticated taste, perfect for savoring on its own or as the foundation for exquisite cocktails. Crafted with dedication to quality.</p>", // More descriptive
//   images: [{ src: '/images/DoubleBlue.jpeg' }],
//   stock_status: "instock",
//   stock_quantity: 99,
// };
// // --- END TEMPORARY MOCK PRODUCT DATA ---

// export default function ShopPage() {
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // We still need the STORE_URL for the "Buy Now" button redirection
//   const STORE_URL = process.env.NEXT_PUBLIC_WOOCOMMERCE_STORE_URL;

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

//   // New function for "Buy Now" - simplified for a single product
//   const handleBuyNow = () => {
//     if (!product || product.stock_status !== 'instock') {
//       alert("This product is currently unavailable or out of stock.");
//       return;
//     }

//     // Direct link to checkout with the single product and quantity 1
//     // Adjust the product ID (MOCK_DOUBLE_BLUE_PRODUCT.id) if you use a real product ID later
//     const checkoutUrl = `${STORE_URL}/checkout/?add-to-cart=${MOCK_DOUBLE_BLUE_PRODUCT.id}:1`;
    
//     // Optional: Add a brief confirmation before redirecting
//     // alert(`Proceeding to checkout for ${product.name}...`);
//     window.location.href = checkoutUrl;
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
//         <p className="font-sans text-2xl text-antique/80 mb-6 uppercase tracking-wider">
//           SPIRIT
//         </p>
        
//         {product.short_description && (
//           <div
//             className="text-nautical/70 text-lg leading-relaxed max-w-md lg:max-w-none mx-auto lg:mx-0 mb-8"
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
//           onClick={handleBuyNow} // Changed to handleBuyNow
//           disabled={!isInStock}
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

// src/app/shop/page.jsx
"use client";
import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
// CartSummary is no longer imported as we're ditching the cart functionality

// --- TEMPORARY MOCK PRODUCT DATA ---
// This data is used to display the layout when the API is not working.
// REMOVE THIS MOCK DATA AND REVERT TO API FETCHING ONCE WOOCOMMERCE IS FIXED.
const MOCK_DOUBLE_BLUE_PRODUCT = {
  id: 1001, // A unique ID for the mock product
  name: "Double Blue", // The name for internal use/checkout
  price: "17.99", // A placeholder price
  short_description: "<p>Experience the deep and captivating essence of Double Blue Spirit, meticulously crafted for a smooth and memorable finish.</p><p>This premium spirit delivers a smooth and sophisticated taste, perfect for savoring on its own or as the foundation for exquisite cocktails. Crafted with dedication to quality.</p>",
  images: [{ src: '/images/DoubleBlue.jpeg' }], // Using the image from user's provided code
  stock_status: "instock",
  stock_quantity: 99,
};
// --- END TEMPORARY MOCK PRODUCT DATA ---

export default function ShopPage() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1); // New state for quantity

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

  // Handlers for quantity increase/decrease
  const handleIncreaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity - 1)); // Quantity cannot go below 1
  };

  // New function for "Buy Now" - simplified for a single product
  const handleBuyNow = () => {
    if (!product || product.stock_status !== 'instock') {
      alert("This product is currently unavailable or out of stock.");
      return;
    }

    // Direct link to checkout with the single product and the selected quantity
    const checkoutUrl = `${STORE_URL}/checkout/?add-to-cart=${MOCK_DOUBLE_BLUE_PRODUCT.id}:${quantity}`;
    
    window.location.href = checkoutUrl;
  };

  // --- Render Logic ---
  if (loading) {
    // Removed "Summoning The Spirit..." as requested
    return null;
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
      {/* Left Section: Product Details, Quantity, Buy Now Button, and Info Text */}
      <div className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left p-4">
        {/* "JUKE BLUE" title */}
        {/* Added whitespace-nowrap to keep "JUKE BLUE" on one line */}
        <h1 className="font-title text-7xl md:text-8xl text-antique mb-2 leading-none whitespace-nowrap">
          JUKE BLUE
        </h1>
        {/* "DOUBLE BLUE" subtitle */}
        <h2 className="font-sans text-3xl text-antique/80 mb-6 uppercase tracking-wider">
          {product.name}
        </h2>
        
        {/* Dividing line */}
        <div className="w-24 h-1 bg-blush mb-8 rounded-full"></div>

        {/* Price */}
        <p className="text-5xl font-bold text-blush mb-8">
          {new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
          }).format(parseFloat(product.price) || 0)}
        </p>

        {/* Quantity Selector and Buy Now Button */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center bg-antique/50 border border-nautical/20 rounded-lg px-3 py-2 text-nautical">
            <button
              onClick={handleDecreaseQuantity}
              className="text-2xl font-bold px-2 hover:text-blush transition-colors"
            >
              -
            </button>
            <span className="text-2xl font-semibold mx-3">{quantity}</span>
            <button
              onClick={handleIncreaseQuantity}
              className="text-2xl font-bold px-2 hover:text-blush transition-colors"
            >
              +
            </button>
          </div>
          <button
            onClick={handleBuyNow}
            disabled={!isInStock || quantity < 1} // Disable if out of stock or quantity is zero/negative
            className={`px-8 py-3 rounded-lg transition-colors font-title text-xl uppercase tracking-wider shadow-lg  ${
              isInStock && quantity > 0
                ? 'bg-nautical text-antique hover:bg-blush hover:text-nautical'
                : 'bg-gray-400 text-gray-700 cursor-not-allowed'
            }`}
          >
            {isInStock ? 'Buy Now' : 'Sold Out'}
          </button>
        </div>
        
        {/* Out of Stock message */}
        {!isInStock && product.stock_quantity !== undefined && (
          <p className="text-red-500 text-sm mt-2">Currently out of stock.</p>
        )}

        {/* Additional Information Text */}
        <p className="text-nautical/70 text-base leading-relaxed max-w-md lg:max-w-none mx-auto lg:mx-0 mb-4">
          After selecting your amount and clicking “BUY NOW,” <br></br>you’ll be taken to our trusted partner distillery’s store to complete your order.
        </p>
        <p className="text-nautical/70 text-base leading-relaxed max-w-md lg:max-w-none mx-auto lg:mx-0 mb-4">
          Shipping typically takes 3-5 working days.
        </p>
        <p className="text-nautical/70 text-base leading-relaxed max-w-md lg:max-w-none mx-auto lg:mx-0 mb-4">
          We currently only deliver within Germany — if you're based elsewhere, please{" "}
          <a href="mailto:thejuke@jukeblue.com" className="text-antique hover:underline">
            get in touch.
          </a>
        </p>
        <p className="text-nautical/70 text-base leading-relaxed max-w-md lg:max-w-none mx-auto lg:mx-0 mb-8">
          Don't forget to subscribe to our newsletter to receive 10% off your first order!
        </p>
      </div>

      {/* Right Section: Only Product Image */}
      <div className="flex-1 flex justify-center items-center p-4">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={600}
            height={800}
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
    </div>
  );
}