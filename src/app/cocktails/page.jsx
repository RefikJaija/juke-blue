// // src/app/cocktails/page.jsx
// import Image from 'next/image'; // For optimized images in Next.js
// import Link from 'next/link';   // If you want to link back to home or other pages

// export default function CocktailsPage() {
//   const cocktails = [
//     {
//       name: "Borrowed Time",
//       image: {
//         src: "/images/borrowed-time.png", // Placeholder path for your image
//         alt: "A vibrant blue cocktail with a lemon slice and a splash of pineapple juice, garnished with a tiny umbrella."
//       },
//       ingredients: [
//         "1 shot of Double Blue",
//         "1 shot of Blue Lagoon syrup",
//         "1 shot of freshly squeezed lemon juice",
//         "½ shot of freshly squeezed lime juice",
//         "Pineapple juice"
//       ],
//       instructions: [
//         "Shake all ingredients with ice.",
//         "Strain into a glass over ice.",
//         "Splash with pineapple juice."
//       ]
//     },
//     {
//       name: "The Pelican",
//       image: {
//         src: "/images/the-pelican.png", // Placeholder path for your image
//         alt: "A reddish-orange cocktail with muddled cherries at the bottom and an orange slice on the rim."
//       },
//       ingredients: [
//         "1 shot of Amaretto",
//         "1 shot of Double Blue", // Assuming Double Blue as per ingredients list
//         "10 cherries",
//         "1 shot of freshly squeezed lemon juice",
//         "10ml simple syrup (or ¼ shot)",
//         "Orange juice"
//       ],
//       instructions: [
//         "Muddle the cherries in a glass.",
//         "Then add Amaretto, Double Blue, lemon juice, and simple syrup.", // Using Double Blue
//         "Stir, add ice.",
//         "Top with a splash of orange juice."
//       ]
//     },
//     {
//       name: "5 AM",
//       image: {
//         src: "/images/5-am.png", // Placeholder path for your image
//         alt: "A light green or clear cocktail with fresh rosemary, lavender, and sage garnishes, suggesting a morning dew."
//       },
//       ingredients: [
//         "1 shot of Double Blue",
//         "½ shot of elderflower syrup",
//         "1 shot of freshly squeezed lemon juice",
//         "Splash of soda water or tonic",
//         "Fresh rosemary, lavender and sage"
//       ],
//       instructions: [
//         "Shake all ingredients (Double Blue, elderflower syrup, lemon juice, rosemary, lavender and sage) with ice.", // Using Double Blue
//         "Strain into a glass over ice.",
//         "Top with soda water or tonic."
//       ]
//     }
//   ];

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-16">
//       <h1 className="font-title text-5xl text-nautical text-center mt-4 mb-12 border-b-2 border-nautical pb-4">
//         Our Corsair's Concoctions
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {cocktails.map((cocktail, index) => (
//           <div
//             key={index}
//             className="bg-antique rounded-2xl shadow-xl border-2 border-nautical flex flex-col overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
//           >
//             {/* Cocktail Image */}
//             <div className="relative w-full h-64 overflow-hidden rounded-t-xl border-b border-nautical">
//               <Image
//                 src={cocktail.image.src}
//                 alt={cocktail.image.alt}
//                 layout="fill" // Makes the image fill the parent
//                 objectFit="cover" // Crops to cover the area
//                 className="transition-transform duration-300 hover:scale-110"
//               />
//               {/* Optional: Overlay for thematic effect */}
//               <div className="absolute inset-0 bg-nautical/20 mix-blend-multiply opacity-70"></div>
//             </div>

//             <div className="p-6 flex flex-col flex-grow">
//               {/* Cocktail Name */}
//               <h2 className="font-title text-3xl text-blush text-center mb-4">
//                 {cocktail.name}
//               </h2>

//               {/* Ingredients */}
//               <div className="mb-6">
//                 <h3 className="font-sans text-xl text-nautical font-bold mb-2">Ingredients:</h3>
//                 <ul className="list-disc list-inside text-antique/80 text-nautical text-lg space-y-1">
//                   {cocktail.ingredients.map((ingredient, i) => (
//                     <li key={i}>{ingredient}</li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Instructions */}
//               <div className="flex-grow"> {/* Allows instructions section to grow */}
//                 <h3 className="font-sans text-xl text-nautical font-bold mb-2">Instructions:</h3>
//                 <ol className="list-decimal list-inside text-antique/80 text-nautical text-lg space-y-1">
//                   {cocktail.instructions.map((instruction, i) => (
//                     <li key={i}>{instruction}</li>
//                   ))}
//                 </ol>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Optional: Back to Home button or other navigation */}
//       <div className="text-center mt-16">
//         <Link href="/" className="px-8 py-4 bg-nautical text-antique rounded-lg hover:bg-blush transition-colors font-title uppercase text-xl shadow-md hover:shadow-lg">
//           Return to Deck
//         </Link>
//       </div>
//     </div>
//   );
// }


// // src/app/cocktails/page.jsx
// import Image from 'next/image';
// import Link from 'next/link';

// export default function GrandCocktailsPage() {
//   const cocktails = [
//     {
//       name: "Borrowed Time",
//       tagline: "A fleeting moment of refreshing blue.",
//       image: {
//         src: "/images/borrowed-time.png", // Remember to place your images here
//         alt: "A vibrant blue cocktail with a lemon slice and a splash of pineapple juice, evoking a tropical lagoon."
//       },
//       ingredients: [
//         "1 shot of Double Blue",
//         "1 shot of Blue Lagoon syrup",
//         "1 shot of freshly squeezed lemon juice",
//         "½ shot of freshly squeezed lime juice",
//         "Pineapple juice"
//       ],
//       instructions: [
//         "Combine all ingredients (except pineapple juice) with ice in a shaker.",
//         "Shake vigorously until well chilled.",
//         "Strain into a tall glass filled with fresh ice.",
//         "Top with a generous splash of pineapple juice and garnish with a citrus wheel."
//       ]
//     },
//     {
//       name: "The Pelican",
//       tagline: "A wise bird's secret, rich and tart.",
//       image: {
//         src: "/images/the-pelican.png", // Remember to place your images here
//         alt: "A deep reddish-orange cocktail with visible muddled cherries at the bottom, garnished with an orange peel."
//       },
//       ingredients: [
//         "1 shot of Amaretto",
//         "1 shot of Double Blue", // Assumed 'Double Blue' replaces 'Korn' for consistency
//         "10 fresh cherries",
//         "1 shot of freshly squeezed lemon juice",
//         "10ml simple syrup (or ¼ shot)",
//         "Orange juice"
//       ],
//       instructions: [
//         "Gently muddle the fresh cherries in the bottom of your serving glass.",
//         "Add Amaretto, Double Blue, lemon juice, and simple syrup to the glass.",
//         "Stir well to combine the ingredients.",
//         "Fill the glass with ice.",
//         "Top generously with orange juice and stir once more. Garnish with an orange slice or cherry."
//       ]
//     },
//     {
//       name: "5 AM",
//       tagline: "The tranquil calm before the storm.",
//       image: {
//         src: "/images/5-am.png", // Remember to place your images here
//         alt: "A clear, serene cocktail with fresh sprigs of rosemary, lavender, and sage, suggesting a morning mist."
//       },
//       ingredients: [
//         "1 shot of Double Blue", // Assumed 'Double Blue' replaces 'Korn' for consistency
//         "½ shot of elderflower syrup",
//         "1 shot of freshly squeezed lemon juice",
//         "Splash of soda water or tonic",
//         "Fresh sprigs of rosemary, lavender, and sage"
//       ],
//       instructions: [
//         "In a shaker, combine Double Blue, elderflower syrup, lemon juice, and the fresh herbs with ice.",
//         "Shake gently to infuse the herbal notes.",
//         "Double strain into a chilled coupe or highball glass over fresh ice.",
//         "Top with soda water or tonic water for effervescence. Garnish with an additional herb sprig."
//       ]
//     }
//   ];

//   return (
//     <div className=""> {/* Main page background */}
//       <div className="max-w-7xl mx-auto py-16">
//         <h1 className="font-title text-6xl text-antique text-center mb-32 mt-48 text-shadow-default leading-tight">
//           Discover some of the Juke's personal creations for Double Blue
//         </h1>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {cocktails.map((cocktail, index) => (
//             <div
//               key={index}
//               // Removed style prop for background here
//               className="relative bg-antique rounded-3xl shadow-xl border-4 border-nautical p-8 transform hover:scale-102 hover:-rotate-1 transition-all duration-500 ease-in-out group"
//             >
//               {/* --- Sand texture overlay (NEW) --- */}
//               <div
//                 className="absolute inset-0 bg-grain bg-cover bg-center opacity-20 z-10" // Added rounded-3xl to match parent
//               ></div>
//               {/* --- End Sand texture overlay --- */}

//               {/* Decorative top border / scroll effect */}
//               {/* <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-48 h-8 bg-blush rounded-b-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 z-20"></div> Increased z-index */}

//               {/* Main content container with higher z-index */}
//               <div className="relative z-10"> {/* Ensure content is above the texture (z-0) */}
//                 {/* Cocktail Name */}
//                 <h2 className="font-title text-4xl text-nautical text-center mb-4 text-shadow-default mt-6">
//                   {cocktail.name}
//                 </h2>
//                 <p className="font-sans text-lg text-nautical text-center italic mb-8">
//                   {cocktail.tagline}
//                 </p>

//                 {/* Cocktail Image - Porthole effect */}
//                 <div className="relative w-48 h-48 mx-auto mb-8 rounded-full border-4 border-nautical overflow-hidden shadow-lg group-hover:border-blush transition-colors duration-300 z-10"> {/* Ensure image is above texture */}
//                   <div className="absolute inset-0 rounded-full border-2 border-antique z-20"></div> {/* Inner ring, higher z-index */}
//                   <Image
//                     src={cocktail.image.src}
//                     alt={cocktail.image.alt}
//                     layout="fill"
//                     objectFit="cover"
//                     className="transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-nautical/30 mix-blend-multiply opacity-80 z-10"></div> {/* Dark overlay */}
//                 </div>

//                 {/* Ingredients */}
//                 <div className="mb-8 z-10"> {/* Ensure ingredients are above texture */}
//                   <h3 className="font-sans text-2xl text-blush font-bold mb-3 text-shadow-subtle-glow">Ingredients:</h3>
//                   <ul className="list-disc list-inside text-nautical text-lg space-y-2 leading-relaxed">
//                     {cocktail.ingredients.map((ingredient, i) => (
//                       <li key={i}>{ingredient}</li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Instructions */}
//                 <div className="z-10"> {/* Ensure instructions are above texture */}
//                   <h3 className="font-sans text-2xl text-blush font-bold mb-3 text-shadow-subtle-glow">Instructions:</h3>
//                   <ol className="list-decimal list-inside text-nautical text-lg space-y-2 leading-relaxed">
//                     {cocktail.instructions.map((instruction, i) => (
//                       <li key={i}>{instruction}</li>
//                     ))}
//                   </ol>
//                 </div>
//               </div> {/* End of main content container */}

//               {/* Optional: Wax seal / decorative element */}
//               <div className="absolute -bottom-6 right-6 w-16 h-16 bg-blush rounded-full flex items-center justify-center text-antique font-title text-2xl border-2 border-nautical shadow-md transform group-hover:rotate-12 transition-transform duration-300 z-20"> {/* Increased z-index */}
//                 {index + 1}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Grand Navigation Button */}
//         <div className="text-center mt-20">
//           <Link href="/map" className="inline-flex items-center px-10 py-5 bg-nautical text-antique rounded-full hover:bg-blush transition-colors font-title uppercase text-2xl shadow-xl hover:shadow-2xl tracking-wide border-2 border-antique hover:border-nautical">
//             <span className="text-shadow-default">Discover Bars</span>
//             {/* Optional: Add a small compass icon */}
//             <svg className="ml-4 w-6 h-6 transform group-hover:rotate-45 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414L7.586 9.03a1 1 0 101.414 1.414l1.707-1.707zM10 11a1 1 0 100 2h.01a1 1 0 100-2H10z" clipRule="evenodd"></path>
//             </svg>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


// // src/app/cocktails/page.jsx
// import Image from 'next/image';
// import Link from 'next/link';

// export default function GrandCocktailsPage() {
//   const cocktails = [
//     {
//       name: "Borrowed Time",
//       tagline: "A fleeting moment of refreshing blue.",
//       image: {
//         src: "/images/borrowed-time.png", // Remember to place your images here
//         alt: "A vibrant blue cocktail with a lemon slice and a splash of pineapple juice, evoking a tropical lagoon."
//       },
//       ingredients: [
//         "1 shot of Double Blue",
//         "1 shot of Blue Lagoon syrup",
//         "1 shot of freshly squeezed lemon juice",
//         "½ shot of freshly squeezed lime juice",
//         "Pineapple juice"
//       ],
//       instructions: [
//         "Combine all ingredients (except pineapple juice) with ice in a shaker.",
//         "Shake vigorously until well chilled.",
//         "Strain into a tall glass filled with fresh ice.",
//         "Top with a generous splash of pineapple juice and garnish with a citrus wheel."
//       ]
//     },
//     {
//       name: "The Pelican",
//       tagline: "A wise bird's secret, rich and tart.",
//       image: {
//         src: "/images/the-pelican.png", // Remember to place your images here
//         alt: "A deep reddish-orange cocktail with visible muddled cherries at the bottom, garnished with an orange peel."
//       },
//       ingredients: [
//         "1 shot of Amaretto",
//         "1 shot of Double Blue", // Assumed 'Double Blue' replaces 'Korn' for consistency
//         "10 fresh cherries",
//         "1 shot of freshly squeezed lemon juice",
//         "10ml simple syrup (or ¼ shot)",
//         "Orange juice"
//       ],
//       instructions: [
//         "Gently muddle the fresh cherries in the bottom of your serving glass.",
//         "Add Amaretto, Double Blue, lemon juice, and simple syrup to the glass.",
//         "Stir well to combine the ingredients.",
//         "Fill the glass with ice.",
//         "Top generously with orange juice and stir once more. Garnish with an orange slice or cherry."
//       ]
//     },
//     {
//       name: "5 AM",
//       tagline: "The tranquil calm before the storm.",
//       image: {
//         src: "/images/5-am.png", // Remember to place your images here
//         alt: "A clear, serene cocktail with fresh sprigs of rosemary, lavender, and sage, suggesting a morning mist."
//       },
//       ingredients: [
//         "1 shot of Double Blue", // Assumed 'Double Blue' replaces 'Korn' for consistency
//         "½ shot of elderflower syrup",
//         "1 shot of freshly squeezed lemon juice",
//         "Splash of soda water or tonic",
//         "Fresh sprigs of rosemary, lavender, and sage"
//       ],
//       instructions: [
//         "In a shaker, combine Double Blue, elderflower syrup, lemon juice, and the fresh herbs with ice.",
//         "Shake gently to infuse the herbal notes.",
//         "Double strain into a chilled coupe or highball glass over fresh ice.",
//         "Top with soda water or tonic water for effervescence. Garnish with an additional herb sprig."
//       ]
//     }
//   ];

//   return (
//     <div className=""> {/* Main page background - this can be full width */}

//       {/* This div is EXCLUSIVELY for the large frame, allowing it to span wider */}
//       <div className="relative w-full max-w-[2000px] mx-auto mb-32 mt-48 aspect-[1.9/1]"> {/* Frame container */}
//         {/* The frame image as a background */}
//         <Image
//           src="/images/card_option_1.png" // Verify this path!
//           alt="Decorative frame for title"
//           layout="fill"
//           objectFit="contain"
//           objectPosition="center"
//           className="z-0"
//         />

//         {/* The title text, positioned absolutely over the frame */}
//         {/*
//           ^^^^^ CRITICAL ADJUSTMENT AREA ^^^^^
//           - `px-[50px]` and `py-[30px]` for mobile.
//           - `sm:px-[120px] sm:py-[60px]` for small screens.
//           - `lg:px-[350px] lg:py-[100px]` for large screens (desktop).
//           - `text-xl` for mobile (even smaller to start).
//           - `sm:text-3xl`, `md:text-4xl`, `lg:text-5xl` for larger screens.
//           - YOU WILL LIKELY NEED TO FINE-TUNE THESE PADDING VALUES IN YOUR BROWSER'S DEV TOOLS.
//             Start with the largest screen, get that working, then shrink the browser to check smaller sizes.
//         */}
//         <h1 className="font-title text-xl sm:text-3xl md:text-4xl lg:text-5xl text-nautical text-center leading-tight absolute inset-0 flex items-center justify-center px-[50px] py-[30px] sm:px-[120px] sm:py-[60px] lg:px-[350px] lg:py-[100px] text-shadow-default z-10">
//           Discover some of the Juke's personal creations for Double Blue
//         </h1>
//       </div>

//       {/*
//         This div now wraps ONLY the content that you want to keep
//         constrained to `max-w-7xl` and centered,
//         which includes your cocktail cards and the navigation button.
//       */}
//       <div className="max-w-7xl mx-auto py-16"> {/* Re-applied max-w-7xl here */}

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {cocktails.map((cocktail, index) => (
//             <div
//               key={index}
//               className="relative bg-antique rounded-3xl shadow-xl border-4 border-nautical p-8 transform hover:scale-102 hover:-rotate-1 transition-all duration-500 ease-in-out group"
//             >
//               {/* --- Sand texture overlay --- */}
//               <div
//                 className="absolute inset-0 bg-grain bg-cover bg-center opacity-20 z-10"
//               ></div>
//               {/* --- End Sand texture overlay --- */}

//               {/* Main content container with higher z-index */}
//               <div className="relative z-10">
//                 {/* Cocktail Name */}
//                 <h2 className="font-title text-4xl text-nautical text-center mb-4 text-shadow-default mt-6">
//                   {cocktail.name}
//                 </h2>
//                 <p className="font-sans text-lg text-nautical text-center italic mb-8">
//                   {cocktail.tagline}
//                 </p>

//                 {/* Cocktail Image - Porthole effect */}
//                 <div className="relative w-48 h-48 mx-auto mb-8 rounded-full border-4 border-nautical overflow-hidden shadow-lg group-hover:border-blush transition-colors duration-300 z-10">
//                   <div className="absolute inset-0 rounded-full border-2 border-antique z-20"></div>
//                   <Image
//                     src={cocktail.image.src}
//                     alt={cocktail.image.alt}
//                     layout="fill"
//                     objectFit="cover"
//                     className="transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-nautical/30 mix-blend-multiply opacity-80 z-10"></div>
//                 </div>

//                 {/* Ingredients */}
//                 <div className="mb-8 z-10">
//                   <h3 className="font-sans text-2xl text-blush font-bold mb-3 text-shadow-subtle-glow">Ingredients:</h3>
//                   <ul className="list-disc list-inside text-nautical text-lg space-y-2 leading-relaxed">
//                     {cocktail.ingredients.map((ingredient, i) => (
//                       <li key={i}>{ingredient}</li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Instructions */}
//                 <div className="z-10">
//                   <h3 className="font-sans text-2xl text-blush font-bold mb-3 text-shadow-subtle-glow">Instructions:</h3>
//                   <ol className="list-decimal list-inside text-nautical text-lg space-y-2 leading-relaxed">
//                     {cocktail.instructions.map((instruction, i) => (
//                       <li key={i}>{instruction}</li>
//                     ))}
//                   </ol>
//                 </div>
//               </div> {/* End of main content container */}

//               {/* Optional: Wax seal / decorative element */}
//               <div className="absolute -bottom-6 right-6 w-16 h-16 bg-blush rounded-full flex items-center justify-center text-antique font-title text-2xl border-2 border-nautical shadow-md transform group-hover:rotate-12 transition-transform duration-300 z-20">
//                 {index + 1}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Grand Navigation Button */}
//         <div className="text-center mt-20">
//           <Link href="/map" className="inline-flex items-center px-10 py-5 bg-nautical text-antique rounded-full hover:bg-blush transition-colors font-title uppercase text-2xl shadow-xl hover:shadow-2xl tracking-wide border-2 border-antique hover:border-nautical">
//             <span className="text-shadow-default">Discover Bars</span>
//             <svg className="ml-4 w-6 h-6 transform group-hover:rotate-45 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414L7.586 9.03a1 1 0 101.414 1.414l1.707-1.707zM10 11a1 1 0 100 2h.01a1 1 0 100-2H10z" clipRule="evenodd"></path>
//             </svg>
//           </Link>
//         </div>

//       </div> {/* End of the max-w-7xl container for cards and button */}

//     </div>
//   );
// }

// ----------------------------------------------------------------------------------//----------------------------------------------------------------------------------//



// src/app/cocktails/page.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function GrandCocktailsPage() {
  const cocktails = [
    {
      name: "Borrowed Time",
      tagline: "A fleeting moment of refreshing.",
      image: {
        src: "/images/borrowed-time.jpeg", // Remember to place your images here
        alt: "A vibrant blue cocktail with a lemon slice and a splash of pineapple juice, evoking a tropical lagoon."
      },
      ingredients: [
        "1 shot of Double Blue",
        "1 shot of Blue Lagoon syrup",
        "1 shot of freshly squeezed lemon juice",
        "½ shot of freshly squeezed lime juice",
        "Pineapple juice"
      ],
      instructions: [
        "Combine all ingredients (except pineapple juice) with ice in a shaker.",
        "Shake vigorously until well chilled.",
        "Strain into a tall glass filled with fresh ice.",
        "Top with a generous splash of pineapple juice and garnish with a citrus wheel."
      ]
    },
    {
      name: "The Pelican",
      tagline: "A wise bird's secret, rich and tart.",
      image: {
        src: "/images/the-pelican.jpeg", // Remember to place your images here
        alt: "A deep reddish-orange cocktail with visible muddled cherries at the bottom, garnished with an orange peel."
      },
      ingredients: [
        "1 shot of Amaretto",
        "1 shot of Double Blue", // Assumed 'Double Blue' replaces 'Korn' for consistency
        "10 fresh cherries",
        "1 shot of freshly squeezed lemon juice",
        "10ml simple syrup (or ¼ shot)",
        "Orange juice"
      ],
      instructions: [
        "Gently muddle the fresh cherries in the bottom of your serving glass.",
        "Add Amaretto, Double Blue, lemon juice, and simple syrup to the glass.",
        "Stir well to combine the ingredients.",
        "Fill the glass with ice.",
        "Top generously with orange juice and stir once more. Garnish with an orange slice or cherry."
      ]
    },
    {
      name: "5 AM",
      tagline: "The tranquil calm before the storm.",
      image: {
        src: "/images/5-am.jpeg", // Remember to place your images here
        alt: "A clear, serene cocktail with fresh sprigs of rosemary, lavender, and sage, suggesting a morning mist."
      },
      ingredients: [
        "1 shot of Double Blue", // Assumed 'Double Blue' replaces 'Korn' for consistency
        "½ shot of elderflower syrup",
        "1 shot of freshly squeezed lemon juice",
        "Splash of soda water or tonic",
        "Fresh sprigs of rosemary, lavender, and sage"
      ],
      instructions: [
        "In a shaker, combine Double Blue, elderflower syrup, lemon juice, and the fresh herbs with ice.",
        "Shake gently to infuse the herbal notes.",
        "Double strain into a chilled coupe or highball glass over fresh ice.",
        "Top with soda water or tonic water for effervescence. Garnish with an additional herb sprig."
      ]
    }
  ];

  return (
    <div className=""> {/* Main page background - this can be full width */}

      {/* This div is EXCLUSIVELY for the large frame, allowing it to span wider */}
      <div className="relative w-full max-w-[1300px] mx-auto mb-32 mt-36 aspect-[1.6/1] lg:aspect-[1.9/1]">{/* Frame container */}
        {/* The frame image as a background */}
        <Image
          src="/images/frame-cocktail.jpeg" // Verify this path!
          alt="Decorative frame for title"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          className="z-0"
        />

        {/* The title text, positioned absolutely over the frame */}
        <h1 className="font-title text-xl sm:text-3xl md:text-4xl lg:text-5xl text-nautical text-center leading-tight absolute inset-0 flex items-center justify-center px-[50px] py-[30px] sm:px-[120px] sm:py-[60px] lg:px-[350px] lg:py-[100px] text-shadow-default z-10">
          Discover Juke's <br></br> personal creations <br></br> for Double Blue
        </h1>
      </div>

      {/*
        This div now wraps ONLY the content that you want to keep
        constrained to `max-w-7xl` and centered,
        which includes your cocktail cards and the navigation button.
      */}
      
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"> {/* Added horizontal padding for smaller screens */}

        {/* Adjusted grid for smaller screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12"> {/* Changed gap and added md:grid-cols-2 */}
            
          {cocktails.map((cocktail, index) => (
            <div
              key={index}
              className="relative bg-antique rounded-3xl shadow-xl border-4 border-nautical p-6 sm:p-8 transform hover:scale-105 transition-all duration-500 ease-in-out group" // Adjusted padding here
            >
              {/* --- Sand texture overlay --- */}
              <div
                className="absolute inset-0 bg-grain bg-cover bg-center opacity-15 z-10"
              ></div>
              {/* --- End Sand texture overlay --- */}

              {/* Main content container with higher z-index */}
              <div className="relative z-10">
                {/* Cocktail Name */}
                <h2 className="font-title text-3xl sm:text-4xl text-nautical text-center mb-3 sm:mb-4 text-shadow-default mt-4 sm:mt-6"> {/* Adjusted font size and margin */}
                  {cocktail.name}
                </h2>
                <p className="font-sans text-sm sm:text-base text-nautical text-center italic mb-6 sm:mb-8">
                  {cocktail.tagline}
                </p>

                {/* Cocktail Image - Porthole effect */}
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-6 sm:mb-8 rounded-full border-4 border-nautical overflow-hidden shadow-lg group-hover:border-blush transition-colors duration-300 z-10"> {/* Adjusted image size */}
                  <div className="absolute inset-0 rounded-full border-2 border-antique z-20"></div>
                  <Image
                    src={cocktail.image.src}
                    alt={cocktail.image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-nautical/30 mix-blend-multiply opacity-80 z-10"></div>
                </div>

                {/* Ingredients */}
                <div className="mb-6 sm:mb-8 z-10"> {/* Adjusted margin */}
                  <h3 className="font-sans text-xl sm:text-2xl text-blush font-bold mb-2 sm:mb-3 text-shadow-subtle-glow">Ingredients:</h3> {/* Adjusted font size */}
                  <ul className="list-disc list-inside text-nautical text-base sm:text-lg space-y-1 sm:space-y-2 leading-relaxed"> {/* Adjusted font size and spacing */}
                    {cocktail.ingredients.map((ingredient, i) => (
                      <li key={i}>{ingredient}</li>
                    ))}
                  </ul>
                </div>

                {/* Instructions */}
                <div className="z-10">
                  <h3 className="font-sans text-xl sm:text-2xl text-blush font-bold mb-2 sm:mb-3 text-shadow-subtle-glow">Instructions:</h3> {/* Adjusted font size */}
                  <ol className="list-decimal list-inside text-nautical text-base sm:text-lg space-y-1 sm:space-y-2 leading-relaxed"> {/* Adjusted font size and spacing */}
                    {cocktail.instructions.map((instruction, i) => (
                      <li key={i}>{instruction}</li>
                    ))}
                  </ol>
                </div>
              </div> {/* End of main content container */}

              {/* Optional: Wax seal / decorative element */}
              <div className="absolute -bottom-4 right-4 w-12 h-12 sm:w-16 sm:h-16 bg-blush rounded-full flex items-center justify-center text-antique font-title text-xl sm:text-2xl border-2 border-nautical shadow-md transform group-hover:rotate-12 transition-transform duration-300 z-20"> {/* Adjusted size and position */}
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Grand Navigation Button */}
        <div className="text-center mt-16 sm:mt-20"> {/* Adjusted margin */}
          <Link href="/map" className="inline-flex items-center px-8 py-4 sm:px-10 sm:py-5 bg-nautical text-antique rounded-full hover:bg-blush transition-colors font-title uppercase text-xl sm:text-2xl shadow-xl hover:shadow-2xl tracking-wide border-2 border-antique hover:border-nautical"> {/* Adjusted padding and font size */}
            <span className="text-shadow-default">Discover Bars</span>
          </Link>
        </div>

      </div> {/* End of the max-w-7xl container for cards and button */}

    </div>
  );
}


// ----------------------------------------------------------------------------------//----------------------------------------------------------------------------------//

// // src/app/cocktails/page.jsx

// import Image from "next/image";
// import Link from "next/link";

// export default function GrandCocktailsPage() {
//   const cocktails = [
//     {
//       name: "Borrowed Time",
//       tagline: "A fleeting moment of refreshing.",
//       image: {
//         src: "/images/borrowed-time.png",
//         alt: "A vibrant blue cocktail with a lemon slice and a splash of pineapple juice, evoking a tropical lagoon.",
//       },
//       ingredients: [
//         "1 shot of Double Blue",
//         "1 shot of Blue Lagoon syrup",
//         "1 shot of freshly squeezed lemon juice",
//         "½ shot of freshly squeezed lime juice",
//         "Pineapple juice",
//       ],
//       instructions: [
//         "Combine all ingredients (except pineapple juice) with ice in a shaker.",
//         "Shake vigorously until well chilled.",
//         "Strain into a tall glass filled with fresh ice.",
//         "Top with a generous splash of pineapple juice and garnish with a citrus wheel.",
//       ],
//     },
//     {
//       name: "The Pelican",
//       tagline: "A wise bird's secret, rich and tart.",
//       image: {
//         src: "/images/the-pelican.png",
//         alt: "A deep reddish-orange cocktail with visible muddled cherries at the bottom, garnished with an orange peel.",
//       },
//       ingredients: [
//         "1 shot of Amaretto",
//         "1 shot of Double Blue",
//         "10 fresh cherries",
//         "1 shot of freshly squeezed lemon juice",
//         "10ml simple syrup (or ¼ shot)",
//         "Orange juice",
//       ],
//       instructions: [
//         "Gently muddle the fresh cherries in the bottom of your serving glass.",
//         "Add Amaretto, Double Blue, lemon juice, and simple syrup to the glass.",
//         "Stir well to combine the ingredients.",
//         "Fill the glass with ice.",
//         "Top generously with orange juice and stir once more. Garnish with an orange slice or cherry.",
//       ],
//     },
//     {
//       name: "5 AM",
//       tagline: "The tranquil calm before the storm.",
//       image: {
//         src: "/images/5-am.png",
//         alt: "A clear, serene cocktail with fresh sprigs of rosemary, lavender, and sage, suggesting a morning mist.",
//       },
//       ingredients: [
//         "1 shot of Double Blue",
//         "½ shot of elderflower syrup",
//         "1 shot of freshly squeezed lemon juice",
//         "Splash of soda water or tonic",
//         "Fresh sprigs of rosemary, lavender, and sage",
//       ],
//       instructions: [
//         "In a shaker, combine Double Blue, elderflower syrup, lemon juice, and the fresh herbs with ice.",
//         "Shake gently to infuse the herbal notes.",
//         "Double strain into a chilled coupe or highball glass over fresh ice.",
//         "Top with soda water or tonic water for effervescence. Garnish with an additional herb sprig.",
//       ],
//     },
//   ];

//   return (
//     <div>
//       {/* ─────────────────────────────────────────────────────── */}
//       {/*  LARGE TITLE SECTION (UNCHANGED)                      */}
//       {/* ─────────────────────────────────────────────────────── */}
//       <div className="relative w-full max-w-[2000px] mx-auto mb-32 mt-48 aspect-[1.6/1] lg:aspect-[1.9/1]">
//         <Image
//           src="/images/card_option_1.png"
//           alt="Decorative frame for title"
//           layout="fill"
//           objectFit="contain"
//           objectPosition="center"
//           className="z-0"
//         />
//         <h1 className="font-title text-xl sm:text-3xl md:text-4xl lg:text-5xl text-nautical text-center leading-tight absolute inset-0 flex items-center justify-center px-[50px] py-[30px] sm:px-[120px] sm:py-[60px] lg:px-[350px] lg:py-[100px] text-shadow-default z-10">
//           Discover some of the Juke's personal creations for Double Blue
//         </h1>
//       </div>

//       {/* ─────────────────────────────────────────────────────── */}
//       {/*  COCKTAIL GRID: each card now perfectly “inside”      */}
//       {/*  that tall Pelican frame—no clipping on the sides      */}
//       {/* ─────────────────────────────────────────────────────── */}
//       <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
//           {cocktails.map((cocktail, index) => (
//             <div key={index} className="group">
//               {/* ─────────────────────────────────────────────────────────────── */}
//               {/*  (1) RELATIVE WRAPPER WITH PELICAN BACKGROUND:                 */}
//               {/*      - We use inline `backgroundImage` so it always loads.     */}
//               {/*      - `backgroundSize: "auto 100%"` forces the PNG’s height   */}
//               {/*        to match the wrapper’s height. Because pelican.png is   */}
//               {/*        square (2048×2048), the width of the frame also matches */}
//               {/*        that same height. Therefore:                              */}
//               {/*        • The wrapper must be as tall as the card+padding.       */}
//               {/*        • The frame’s width = that height, so it covers all      */}
//               {/*          four sides of the card.                                */}
//               {/* ─────────────────────────────────────────────────────────────── */}
//               <div
//                 className="
//                   relative 
//                   hover:scale-102 
//                   hover:-rotate-1 
//                   transition-all 
//                   duration-500 
//                   ease-in-out
//                   flex
//                   items-center
//                   justify-center
//                 "
//                 style={{
//                   backgroundImage: "url('/images/pelican.png')",
//                   backgroundRepeat: "no-repeat",
//                   backgroundPosition: "center",
//                   // Make the PNG’s height = 100% of this wrapper’s height.
//                   // Because pelican.png is square, its width will also become exactly
//                   // the same number of pixels. That guarantees the frame’s left/right
//                   // borders all show up.
//                   backgroundSize: "auto 100%",
                  
//                 }}
//               >
//                 {/* 
//                   (2) Padding ABOVE+BELOW the card ensures the card’s total height
//                   matches the frame’s inner “window” height. 
                  
//                   • We use `py-8` (2rem top & bottom) as a starting point.
//                     Depending on how tall your card ends up, you may need to
//                     increase (`py-10`) or decrease (`py-6`) so that the top/bottom
//                     of the card sit exactly inside the flamingo border’s opening.
//                 */}
//                 <div className="py-8">
//                   {/* 
//                     (3) FIXED CARD WIDTH: 
//                     To prevent the card from being too wide (and pushing into the 
//                     frame’s left/right borders), give it a Tailwind width like `w-64`. 
//                     That 256 px width should land it squarely inside the frame’s 
//                     blue inner region. 
                    
//                     Feel free to tweak `w-64 -> w-60 (240 px) or w-72 (288 px)` 
//                     until it lines up perfectly.
//                   */}
//                   <div className="relative z-10 bg-antique rounded-3xl shadow-xl border-4 border-nautical w-72 mx-auto p-6 sm:p-8">
//                     {/* Sand‐texture overlay */}
//                     <div className="absolute inset-0 bg-grain bg-cover bg-center opacity-20 z-10"></div>

//                     {/* ───────── Cocktail Name & Tagline ───────── */}
//                     <h2 className="font-title text-3xl sm:text-4xl text-nautical text-center mb-3 sm:mb-4 text-shadow-default mt-4 sm:mt-6">
//                       {cocktail.name}
//                     </h2>
//                     <p className="font-sans text-sm sm:text-base text-nautical text-center italic mb-6 sm:mb-8">
//                       {cocktail.tagline}
//                     </p>

//                     {/* ─────── Circular Cocktail Image ─────── */}
//                     <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-6 sm:mb-8 rounded-full border-4 border-nautical overflow-hidden shadow-lg group-hover:border-blush transition-colors duration-300 z-10">
//                       <div className="absolute inset-0 rounded-full border-2 border-antique z-20"></div>
//                       <Image
//                         src={cocktail.image.src}
//                         alt={cocktail.image.alt}
//                         layout="fill"
//                         objectFit="cover"
//                         className="transition-transform duration-500 group-hover:scale-110"
//                       />
//                       <div className="absolute inset-0 bg-nautical/30 mix-blend-multiply opacity-80 z-10" />
//                     </div>

//                     {/* ─────────── Ingredients List ─────────── */}
//                     <div className="mb-6 sm:mb-8 z-10">
//                       <h3 className="font-sans text-xl sm:text-2xl text-blush font-bold mb-2 sm:mb-3 text-shadow-subtle-glow">
//                         Ingredients:
//                       </h3>
//                       <ul className="list-disc list-inside text-nautical text-base sm:text-lg space-y-1 sm:space-y-2 leading-relaxed">
//                         {cocktail.ingredients.map((ing, i) => (
//                           <li key={i}>{ing}</li>
//                         ))}
//                       </ul>
//                     </div>

//                     {/* ─────────── Instructions List ─────────── */}
//                     <div className="z-10">
//                       <h3 className="font-sans text-xl sm:text-2xl text-blush font-bold mb-2 sm:mb-3 text-shadow-subtle-glow">
//                         Instructions:
//                       </h3>
//                       <ol className="list-decimal list-inside text-nautical text-base sm:text-lg space-y-1 sm:space-y-2 leading-relaxed">
//                         {cocktail.instructions.map((step, i) => (
//                           <li key={i}>{step}</li>
//                         ))}
//                       </ol>
//                     </div>
//                   </div>

//                   {/* 
//                     (4) THE WAX‐SEAL NUMBER:
//                     Still absolutely positioned on top (z-20). Since the wrapper 
//                     is already `relative`, we can place this with `absolute -bottom-4 right-4`. 
//                   */}
//                   <div className="absolute -bottom-4 right-4 w-12 h-12 sm:w-16 sm:h-16 bg-blush rounded-full flex items-center justify-center text-antique font-title text-xl sm:text-2xl border-2 border-nautical shadow-md transform group-hover:rotate-12 transition-transform duration-300 z-20">
//                     {index + 1}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ─────────────────────────────────────────────────── */}
//         {/*  GRAND NAVIGATION BUTTON (UNCHANGED)               */}
//         {/* ─────────────────────────────────────────────────── */}
//         <div className="text-center mt-16 sm:mt-20">
//           <Link
//             href="/map"
//             className="inline-flex items-center px-8 py-4 sm:px-10 sm:py-5 bg-nautical text-antique rounded-full hover:bg-blush transition-colors font-title uppercase text-xl sm:text-2xl shadow-xl hover:shadow-2xl tracking-wide border-2 border-antique hover:border-nautical"
//           >
//             <span className="text-shadow-default">Discover Bars</span>
//             <svg
//               className="ml-3 sm:ml-4 w-5 h-5 sm:w-6 sm:h-6 transform group-hover:rotate-45 transition-transform"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414L7.586 9.03a1 1 0 101.414 1.414l1.707-1.707zM10 11a1 1 0 100 2h.01a1 1 0 100-2H10z"
//                 clipRule="evenodd"
//               ></path>
//             </svg>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
