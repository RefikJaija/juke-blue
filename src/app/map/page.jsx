// /src/app/map/page.jsx
"use client"; // This file itself can be a client component if you need client hooks.

import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
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
      name: "Felix von Würgrengel Bar",
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
    // …add more bars if needed
  ];

  const initialCenter = [52.50400, 13.41652]; // Berlin center
  const initialZoom = 17;

  const [activeBarCenter, setActiveBarCenter] = useState(initialCenter);

  const handleBarListItemClick = (coords) => {
    setActiveBarCenter(coords);
  };

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
        <div className="w-full lg:w-1/3 bg-nautical p-6 rounded-3xl shadow-xl border-4 border-blush overflow-y-auto max-h-[400px] lg:max-h-[800px] mb-8 lg:mb-0">
          <h2 className="font-title text-3xl text-antique text-center mb-6 text-shadow-default">
            Participating Bars
          </h2>
          <ul>
            {bars.map((bar) => (
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
        </div>

        {/* Map area (dynamically loaded) */}
        <div className="w-full lg:w-2/3 h-[500px] md:h-[600px] lg:h-[800px] rounded-3xl overflow-hidden shadow-xl border-4 border-nautical flex-grow">
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
