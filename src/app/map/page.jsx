// // /src/app/map/page.jsx
// "use client";

// import dynamic from "next/dynamic";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import Image from 'next/image';


// // Dynamically import LeafletMap with no SSR:
// const LeafletMap = dynamic(
//   () => import("../components/LeafletMap").then((mod) => mod.default),
//   { ssr: false }
// );

// export default function MapPage() {
//   const bars = [
//     {
//       id: 1,
//       name: "Felix von Würgrengel Bar",
//       address: "Dresdener Strasse 112, 10999 Berlin",
//       coordinates: [52.50541, 13.41872],
//       ownerSignatureDrink: "Felix",
//       image: "/images/felix-bar.png", // Ensure this image exists!
//       description: "A cozy, dimly lit bar known for its classic cocktails and a welcoming atmosphere.",
//     },
//     {
//       id: 2,
//       name: "Nachtvogel",
//       address: "Oranienstrasse 39, 10999 Berlin",
//       coordinates: [52.50293, 13.41521],
//       ownerSignatureDrink: "Gabriel",
//       image: "/images/nachtvogel-bar.png", // Ensure this image exists!
//       description: "A vibrant spot with live music on weekends and a fantastic selection of craft beers.",
//     }
//     // ...add more bars with images and descriptions
//   ];

//   const initialCenter = [52.50400, 13.41652]; // Berlin center
//   const initialZoom = 17;

//   const [activeBarCenter, setActiveBarCenter] = useState(initialCenter);
//   const [activeBarId, setActiveBarId] = useState(null);

//   const handleBarListItemClick = (barId) => {
//     const selectedBar = bars.find(bar => bar.id === barId);
//     if (selectedBar) {
//       setActiveBarId(barId);
//       setActiveBarCenter(selectedBar.coordinates);
//     }
//   };

//   const handleMapMarkerClick = (barId) => {
//     setActiveBarId(barId);
//   };

//   const selectedBar = activeBarId ? bars.find(bar => bar.id === activeBarId) : null;

//   return (
//     <div className="min-h-screen flex flex-col items-center py-16 px-4 relative">
//       <div className="absolute inset-0 bg-grainz bg-cover bg-center opacity-20 z-0" />

//       {/* Frame for main title */}
//       <div className="relative w-full max-w-[1200px] mx-auto mb-32 mt-28 aspect-[1.6/1] lg:aspect-[1.9/1]">
//         <Image
//           src="/images/frame-map.png"
//           alt="Decorative frame for title"
//           layout="fill"
//           objectFit="contain"
//           objectPosition="center"
//           className="z-0"
//         />
//         <h1 className="font-title text-xl sm:text-3xl md:text-4xl lg:text-5xl text-nautical text-center leading-tight absolute inset-0 flex items-center justify-center px-[50px] py-[30px] sm:px-[120px] sm:py-[60px] lg:px-[350px] lg:py-[100px] text-shadow-default z-10">
//           Our Partner Bars
//         </h1>
//       </div>

//       <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 relative z-10">
//         {/* Sidebar with bar list */}
//         <div className="w-full lg:w-1/3 bg-nautical p-6 rounded-3xl shadow-xl border-4 border-blush overflow-y-auto max-h-[400px] lg:max-h-[800px] mb-8 lg:mb-0">
//           <h2 className="font-title text-3xl text-antique text-center mb-6 text-shadow-default">
//             Participating Bars
//           </h2>
//           <ul>
//             {bars.map((bar) => (
//               <li
//                 key={bar.id}
//                 className={`bg-antique p-4 rounded-lg mb-4 cursor-pointer transition-all duration-300 border border-nautical
//                             ${activeBarId === bar.id ? 'bg-blush text-white scale-102 shadow-lg border-blush' : 'hover:bg-[rgba(198,140,175,0.7)]'}`}
//                 onClick={() => handleBarListItemClick(bar.id)}
//               >
//                 <h3 className={`font-title text-xl ${activeBarId === bar.id ? 'text-white' : 'text-nautical'}`}>
//                   {bar.name}
//                 </h3>
//                 <p className={`font-sans text-base ${activeBarId === bar.id ? 'text-antique' : 'text-nautical'}`}>
//                   {bar.address}
//                 </p>
//                 <p className="font-sans text-sm italic text-blush mt-2">
//                   Signature drink by:{" "}
//                   <span className="font-bold">
//                     {bar.ownerSignatureDrink}
//                   </span>
//                 </p>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Map and Bar Details Area */}
//         <div className="w-full lg:w-2/3 flex flex-col gap-8">
//           {/* Map area (dynamically loaded) */}
//           <div className="h-[600px] md:h-[700px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl border-4 border-nautical flex-shrink-0"> {/* Adjusted heights here */}
//             <LeafletMap
//               bars={bars}
//               center={activeBarCenter}
//               zoom={initialZoom}
//               setActiveBarId={handleMapMarkerClick}
//               activeBarId={activeBarId}
//             />
//           </div>

//           {/* Bar Details Panel - Conditionally rendered */}
//           {selectedBar && (
//             <div className="bg-antique p-6 rounded-3xl shadow-xl border-4 border-nautical flex-grow">
//               <div className="flex flex-col md:flex-row items-center gap-6">
//                 {selectedBar.image && (
//                   <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-blush shadow-md">
//                     <Image
//                       src={selectedBar.image}
//                       alt={selectedBar.name}
//                       layout="fill"
//                       objectFit="cover"
//                       className="transition-transform duration-300 hover:scale-105"
//                     />
//                   </div>
//                 )}
//                 <div className="text-center md:text-left">
//                   <h3 className="font-title text-3xl text-nautical mb-2 text-shadow-default">
//                     {selectedBar.name}
//                   </h3>
//                   <p className="font-sans text-lg text-nautical mb-2">
//                     {selectedBar.address}
//                   </p>
//                   <p className="font-sans text-base text-blush italic mb-2">
//                     Signature drink by:{" "}
//                     <span className="font-bold">{selectedBar.ownerSignatureDrink}</span>
//                   </p>
//                   {selectedBar.description && (
//                     <p className="font-sans text-base text-nautical/80 mt-2">
//                       {selectedBar.description}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="text-center mt-12 sm:mt-16 relative z-10">
//         <Link
//           href="/cocktails"
//           className="inline-flex items-center px-8 py-4 sm:px-10 sm:py-5 bg-nautical text-antique rounded-full hover:bg-blush transition-colors font-title uppercase text-xl sm:text-2xl shadow-xl hover:shadow-2xl tracking-wide border-2 border-antique hover:border-nautical"
//         >
//           <span className="text-shadow-default">Check the Cocktails</span>
//         </Link>
//       </div>
//     </div>
//   );
// }
//----------------------------------------------------------------------------------------------------//

// // /src/app/map/page.jsx
// "use client";

// import dynamic from "next/dynamic";
// import Link from "next/link";
// import { useState, useEffect } from "react"; // Import useEffect for potential future use or cleanup
// import Image from 'next/image';

// // Dynamically import LeafletMap with no SSR:
// const LeafletMap = dynamic(
//   () => import("../components/LeafletMap").then((mod) => mod.default),
//   { ssr: false }
// );

// export default function MapPage() {
//   const bars = [
//     {
//       id: 1,
//       name: "Felix von Würgrengel Bar",
//       address: "Dresdener Strasse 112, 10999 Berlin",
//       coordinates: [52.50541, 13.41872],
//       ownerSignatureDrink: "Felix",
//       image: "/images/felix-bar.png", // Ensure this image exists!
//       description: "A cozy, dimly lit bar known for its classic cocktails and a welcoming atmosphere.", // Added description
//     },
//     {
//       id: 2,
//       name: "Nachtvogel",
//       address: "Oranienstrasse 39, 10999 Berlin",
//       coordinates: [52.50293, 13.41521],
//       ownerSignatureDrink: "Gabriel",
//       image: "/images/nachtvogel-bar.png", // Ensure this image exists!
//       description: "A vibrant spot with live music on weekends and a fantastic selection of craft beers.", // Added description
//     }
//     // ...add more bars with images and descriptions
//   ];

//   const initialCenter = [52.50400, 13.41652]; // Berlin center
//   const initialZoom = 17;

//   const [activeBarCenter, setActiveBarCenter] = useState(initialCenter);
//   const [activeBarId, setActiveBarId] = useState(null); // New state to track active bar

//   // Function to handle clicks on bar list items
//   const handleBarListItemClick = (barId) => {
//     const selectedBar = bars.find(bar => bar.id === barId);
//     if (selectedBar) {
//       setActiveBarId(barId);
//       setActiveBarCenter(selectedBar.coordinates); // Center map on clicked bar
//     }
//   };

//   // Function to handle clicks on map markers (passed to LeafletMap)
//   const handleMapMarkerClick = (barId) => {
//     setActiveBarId(barId);
//     // Note: LeafletMap itself should handle centering when its marker is clicked
//     // but we need to ensure the details panel updates
//   };

//   const selectedBar = activeBarId ? bars.find(bar => bar.id === activeBarId) : null;

//   return (
//     <div className="min-h-screen flex flex-col items-center py-16 px-4 relative">
//       <div className="absolute inset-0 bg-grainz bg-cover bg-center opacity-20 z-0" />

//       {/* Frame for main title */}
//       <div className="relative w-full max-w-[1200px] mx-auto mb-32 mt-28 aspect-[1.6/1] lg:aspect-[1.9/1]">
//         {/* The frame image as a background */}
//         <Image
//           src="/images/frame-map.png"
//           alt="Decorative frame for title"
//           layout="fill"
//           objectFit="contain"
//           objectPosition="center"
//           className="z-0"
//         />
//         {/* The title text, positioned absolutely over the frame */}
//         <h1 className="font-title text-xl sm:text-3xl md:text-4xl lg:text-5xl text-nautical text-center leading-tight absolute inset-0 flex items-center justify-center px-[50px] py-[30px] sm:px-[120px] sm:py-[60px] lg:px-[350px] lg:py-[100px] text-shadow-default z-10">
//           Our Partner Bars
//         </h1>
//       </div>

//       <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 relative z-10">
//         {/* Sidebar with bar list */}
//         <div className="w-full lg:w-1/3 bg-nautical p-6 rounded-3xl shadow-xl border-4 border-blush overflow-y-auto max-h-[400px] lg:max-h-[800px] mb-8 lg:mb-0">
//           <h2 className="font-title text-3xl text-antique text-center mb-6 text-shadow-default">
//             Participating Bars
//           </h2>
//           <ul>
//             {bars.map((bar) => (
//               <li
//                 key={bar.id}
//                 className={`bg-antique p-4 rounded-lg mb-4 cursor-pointer transition-all duration-300 border border-nautical
//                             ${activeBarId === bar.id ? 'bg-blush text-white scale-102 shadow-lg border-blush' : 'hover:bg-[rgba(198,140,175,0.7)]'}`}
//                 onClick={() => handleBarListItemClick(bar.id)} // Pass bar.id
//               >
//                 <h3 className={`font-title text-xl ${activeBarId === bar.id ? 'text-white' : 'text-nautical'}`}>
//                   {bar.name}
//                 </h3>
//                 <p className={`font-sans text-base ${activeBarId === bar.id ? 'text-antique' : 'text-nautical'}`}>
//                   {bar.address}
//                 </p>
//                 <p className="font-sans text-sm italic text-blush mt-2">
//                   Signature drink by:{" "}
//                   <span className="font-bold">
//                     {bar.ownerSignatureDrink}
//                   </span>
//                 </p>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Map and Bar Details Area */}
//         <div className="w-full lg:w-2/3 flex flex-col gap-8">
//           {/* Map area (dynamically loaded) */}
//           <div className="h-[500px] md:h-[600px] lg:h-[480px] rounded-3xl overflow-hidden shadow-xl border-4 border-nautical flex-shrink-0">
//             <LeafletMap
//               bars={bars}
//               center={activeBarCenter}
//               zoom={initialZoom}
//               setActiveBarId={handleMapMarkerClick} // Pass the handler to update activeBarId
//               activeBarId={activeBarId} // Pass activeBarId to LeafletMap for marker styling
//             />
//           </div>

//           {/* Bar Details Panel - Conditionally rendered */}
//           {selectedBar && (
//             <div className="bg-antique p-6 rounded-3xl shadow-xl border-4 border-nautical flex-grow">
//               <div className="flex flex-col md:flex-row items-center gap-6">
//                 {selectedBar.image && (
//                   <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-blush shadow-md">
//                     <Image
//                       src={selectedBar.image}
//                       alt={selectedBar.name}
//                       layout="fill"
//                       objectFit="cover"
//                       className="transition-transform duration-300 hover:scale-105"
//                     />
//                   </div>
//                 )}
//                 <div className="text-center md:text-left">
//                   <h3 className="font-title text-3xl text-nautical mb-2 text-shadow-default">
//                     {selectedBar.name}
//                   </h3>
//                   <p className="font-sans text-lg text-nautical mb-2">
//                     {selectedBar.address}
//                   </p>
//                   <p className="font-sans text-base text-blush italic mb-2">
//                     Signature drink by:{" "}
//                     <span className="font-bold">{selectedBar.ownerSignatureDrink}</span>
//                   </p>
//                   {selectedBar.description && (
//                     <p className="font-sans text-base text-nautical/80 mt-2">
//                       {selectedBar.description}
//                     </p>
//                   )}
//                   {/* Optional: Add a button to visit bar's website or social media */}
//                   {/* <button className="mt-4 px-6 py-2 bg-blush text-white rounded-lg hover:bg-blush-dark transition-colors">
//                     Visit Website
//                   </button> */}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="text-center mt-12 sm:mt-16 relative z-10">
//         <Link
//           href="/cocktails"
//           className="inline-flex items-center px-8 py-4 sm:px-10 sm:py-5 bg-nautical text-antique rounded-full hover:bg-blush transition-colors font-title uppercase text-xl sm:text-2xl shadow-xl hover:shadow-2xl tracking-wide border-2 border-antique hover:border-nautical"
//         >
//           <span className="text-shadow-default">Check the Cocktails</span>
//         </Link>
//       </div>
//     </div>
//   );
// }


// /src/app/map/page.jsx

"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useMemo } from "react"; // Import useMemo
import Image from 'next/image';

// Dynamically import LeafletMap with no SSR:
const LeafletMap = dynamic(
  () => import("../components/LeafletMap").then((mod) => mod.default),
  { ssr: false }
);

export default function MapPage() {
  const bars = [
    {
      id: 1,
      name: "Würgrengel Bar",
      address: "Dresdener Strasse 112, 10999 Berlin",
      coordinates: [52.50541, 13.41872],
      ownerSignatureDrink: "Felix",
      image: "/images/felix-bar.png"
    },
    {
      id: 2,
      name: "Nachtvogel",
      address: "Oranienstrasse 39, 10999 Berlin",
      coordinates: [52.50293, 13.41521],
      ownerSignatureDrink: "Gabriel",
      image: "/images/nachtvogel-bar.png"
    }
    // ...add more bars if needed to test pagination
  ];

  const initialCenter = [52.50400, 13.41652]; // Berlin center
  const initialZoom = 17;

  const [activeBarCenter, setActiveBarCenter] = useState(initialCenter);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of bars to display per page

  // Calculate bars for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBars = useMemo(() =>
    bars.slice(indexOfFirstItem, indexOfLastItem),
    [bars, indexOfFirstItem, indexOfLastItem]
  );

  const totalPages = Math.ceil(bars.length / itemsPerPage);

  const handleBarListItemClick = (coords) => {
    setActiveBarCenter(coords);
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return; // Prevent going out of bounds
    setCurrentPage(pageNumber);
    // Optionally, reset map view or highlight first bar on new page
    // For now, it will just re-render the list. The map center will remain unless a bar is clicked.
  };

  // Generate page numbers for pagination controls
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="min-h-screen flex flex-col items-center py-16 px-4 relative">
      <div className="absolute inset-0 bg-grainz bg-cover bg-center opacity-20 z-0" />
      {/* This div is EXCLUSIVELY for the large frame, allowing it to span wider */}
      <div className="relative w-full max-w-[1200px] mx-auto mb-32 mt-28 aspect-[1.6/1] lg:aspect-[1.9/1]">{/* Frame container */}
        {/* The frame image as a background */}
        <Image
          src="/images/frame-map.png" // Verify this path!
          alt="Decorative frame for title"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          className="z-0"
        />

        {/* The title text, positioned absolutely over the frame */}
        <h1 className="font-title text-xl sm:text-3xl md:text-4xl lg:text-5xl text-nautical text-center leading-tight absolute inset-0 flex items-center justify-center px-[50px] py-[30px] sm:px-[120px] sm:py-[60px] lg:px-[350px] lg:py-[100px] text-shadow-default z-10">
          Our Partner Bars
        </h1>
      </div>

      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 relative z-10">
        {/* Sidebar with bar list */}
        <div className="w-full lg:w-1/3 bg-nautical p-6 rounded-3xl shadow-xl border-4 border-antique overflow-y-auto max-h-[400px] lg:max-h-[800px] mb-8 lg:mb-0 flex flex-col"> {/* Added flex-col */}
          <h2 className="font-title text-3xl text-antique text-center mb-6 text-shadow-default">
            Participating Bars
          </h2>
          <ul className="flex-grow"> {/* Added flex-grow to ul */}
            {currentBars.map((bar) => ( // Use currentBars for pagination
              <li
                key={bar.id}
                className="bg-antique p-4 rounded-lg mb-4 cursor-pointer hover:bg-[rgba(198,140,175,0.7)] transition-all duration-300 border border-nautical"
                onClick={() => handleBarListItemClick(bar.coordinates)}
              >
                <h3 className="font-title text-xl text-nautical">
                  {bar.name}
                </h3>
                <p className="font-sans text-base text-nautical">
                  {bar.address}
                </p>
                <p className="font-sans text-sm italic text-blush mt-2">
                  Signature drink by:{" "}
                  <span className="font-bold">
                    {bar.ownerSignatureDrink}
                  </span>
                </p>
              </li>
            ))}
          </ul>

          {/* Pagination Controls */}
          {totalPages > 1 && ( // Only show pagination if more than one page
            <nav className="mt-6 flex justify-center items-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-antique text-nautical rounded-lg hover:bg-blush disabled:opacity-50 disabled:cursor-not-allowed font-sans text-sm"
              >
                Previous
              </button>
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => handlePageChange(number)}
                  className={`px-4 py-2 rounded-lg font-sans text-sm ${
                    currentPage === number
                      ? "bg-blush text-antique"
                      : "bg-antique text-nautical hover:bg-[rgba(198,140,175,0.7)]"
                  }`}
                >
                  {number}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-antique text-nautical rounded-lg hover:bg-blush disabled:opacity-50 disabled:cursor-not-allowed font-sans text-sm"
              >
                Next
              </button>
            </nav>
          )}
        </div>

        {/* Map area (dynamically loaded) */}
      <div className="w-full lg:w-2/3 h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl border-4 border-nautical flex-grow">
          {/* LeafletMap is client-only because of ssr: false */}
          <LeafletMap bars={bars} center={activeBarCenter} zoom={initialZoom} />
        </div>
      </div>

      <div className="text-center mt-12 sm:mt-16 relative z-10">
        <Link
          href="/cocktails"
          className="inline-flex items-center px-8 py-4 sm:px-10 sm:py-5 bg-nautical text-antique rounded-full hover:bg-blush transition-colors font-title uppercase text-xl sm:text-2xl shadow-xl hover:shadow-2xl tracking-wide border-2 border-antique hover:border-nautical"
        >
          <span className="text-shadow-default">Check the Cocktails</span>
        </Link>
      </div>
    </div>
  );
}