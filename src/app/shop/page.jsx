"use client";
import { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';  // Import Link from next/link

// --- TEMPORARY MOCK PRODUCT DATA ---
const MOCK_DOUBLE_BLUE_PRODUCT = {
  id: 1001,
  name: "Double Blue",
  price: "17.99",
  abv: "38%", // Alcohol by volume
  short_description: "<p>Experience the deep and captivating essence of Double Blue Spirit, meticulously crafted for a smooth and memorable finish.</p><p>This premium spirit delivers a smooth and sophisticated taste, perfect for savoring on its own or as the foundation for exquisite cocktails. Crafted with dedication to quality.</p>",
  images: [{ src: '/images/DoubleBlue.jpeg' }],
  stock_status: "instock",
  stock_quantity: 99,
};
// --- END TEMPORARY MOCK PRODUCT DATA ---

export default function ShopPage() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const STORE_URL = process.env.NEXT_PUBLIC_WOOCOMMERCE_STORE_URL;

  const totalPrice = useMemo(() => {
    if (product && product.price) {
      return parseFloat(product.price) * quantity;
    }
    return 0;
  }, [product, quantity]);

  useEffect(() => {
    try {
      // Directly setting product without artificial delay
      setProduct(MOCK_DOUBLE_BLUE_PRODUCT);
    } catch (err) {
      console.error("Error fetching product:", err);
      setError("Failed to load product data.");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleIncreaseQuantity = () => {
    if (product && quantity >= product.stock_quantity) return;
    setQuantity(prev => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };

  const handleBuyNow = () => {
    if (!product || product.stock_status !== 'instock') {
      alert("This product is currently unavailable or out of stock.");
      return;
    }
    const checkoutUrl = `${STORE_URL}/checkout/?add-to-cart=${product.id}&quantity=${quantity}`;
    window.location.href = checkoutUrl;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-nautical animate-pulse">Loading product...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <p className="text-red-500 text-xl mb-4">Error: {error || 'Product not available'}</p>
      </div>
    );
  }

  const imageUrl = product.images?.[0]?.src || null;
  const imageAlt = product.name || 'Product Image';
  const isInStock = product.stock_status === 'instock';

  return (
    // <div className="min-h-screen pt-24 pb-16 px-6 sm:px-8 max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:pt-32">
    <div className="min-h-screen pt-24 pb-16 px-6 sm:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:pt-32">

      {/* Right Section (Image) */}
      <div className="flex-1 flex justify-center items-center p-4 mt-0 lg:mt-8 w-full">

        {imageUrl ? (
          // <div className="relative w-full max-w-md aspect-[3/4]">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[24rem] sm:h-[28rem] md:h-[32rem] lg:h-[44rem] xl:h-[52rem]">

            <Image
              src={imageUrl}
              alt={imageAlt}
              layout="fill"
              objectFit="contain"
              className="rounded-xl hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        ) : (
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-60 h-80 flex items-center justify-center text-nautical/50 text-xl">
            No Image Available
          </div>
        )}
      </div>

      {/* Left Section (Text) */}
      <div className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left px-0 lg:p-4">
        <h1 className="font-title text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-nautical mb-2 leading-none whitespace-nowrap">
          JUKE BLUE
        </h1>
        <h2 className="font-sans text-xl sm:text-2xl lg:text-3xl text-antique/80 mb-2 uppercase tracking-wider">
          {product.name}
        </h2>

        {/* ABV Line */}
        <p className="text-antique/80 text-sm sm:text-base mb-6 tracking-wide uppercase">
          {product.abv} vol
        </p>

        <div className="w-24 h-1 bg-nautical mb-8 rounded-full"></div>

        {/* Price + Includes VAT plus Shipping */}
        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
          {new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
          }).format(totalPrice)}
          <span className="text-sm text-white/70 block sm:inline sm:ml-3 font-normal mt-1 sm:mt-0">
            Includes VAT plus{" "}
            <Link
              href="/payment-shipping"
              className="underline hover:text-blush transition-colors"
            >
              Shipping
            </Link>
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-4 mb-8 w-full max-w-sm lg:max-w-none">
          <div className="flex items-center bg-antique/50 border border-nautical/20 rounded-lg px-3 py-2 text-nautical w-full sm:w-auto justify-center">
            <button
              onClick={handleDecreaseQuantity}
              className="text-2xl font-bold px-2 text-nautical hover:text-blush active:text-nautical focus-visible:text-nautical transition-colors"
            >
              -
            </button>
            <span className="text-2xl font-semibold mx-3 w-10 text-center">{quantity}</span>
            <button
              onClick={handleIncreaseQuantity}
              className="text-2xl font-bold px-2 text-nautical hover:text-blush active:text-nautical focus-visible:text-nautical transition-colors"
            >
              +
            </button>
          </div>
          <button
            onClick={handleBuyNow}
            disabled={!isInStock || quantity < 1}
            className={`px-8 py-3 rounded-lg transition-colors font-title text-base sm:text-lg lg:text-xl uppercase tracking-wider shadow-lg w-full sm:w-auto ${
              isInStock && quantity > 0
                ? 'bg-nautical text-antique hover:bg-blush hover:text-nautical'
                : 'bg-gray-400 text-gray-700 cursor-not-allowed'
            }`}
          >
            {isInStock ? 'Buy Now' : 'Sold Out'}
          </button>
        </div>

        {!isInStock && (
          <p className="text-red-500 text-sm mt-2 text-left w-full sm:w-auto">Currently out of stock.</p>
        )}

        <p className="text-antique/70 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0 mb-4 text-left">
          After selecting your amount and clicking <br /> “BUY NOW,” you’ll be taken to our trusted partner distillery’s store to complete your order.
        </p>
        <div className="w-full text-left max-w-md mx-auto lg:mx-0">
          <p className="text-antique/70 text-sm sm:text-base leading-relaxed mb-4">
            Shipping typically takes 3-5 working days.
          </p>
        </div>

        <p className="text-antique/70 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0 mb-4 text-left">
          We currently only deliver within Germany — if you're based elsewhere, please{" "}
          <a href="mailto:thejuke@jukeblue.com" className="text-nautical underline hover:text-blush transition-colors">
            get in touch.
          </a>
        </p>
        <p className="text-antique/70 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0 mb-8 text-left">
          Don't forget to subscribe to our newsletter to receive 10% off your first order!
        </p>
      </div>
    </div>
  );
}
