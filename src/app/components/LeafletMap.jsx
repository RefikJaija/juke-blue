// // /src/components/LeafletMap.jsx
// "use client";

// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import Image from "next/image";
// import { useEffect } from "react";

// // The default icon fix is still commented out. If you *only* want your Juke logo
// // and no Leaflet default marker appearance, this is correct.
// // If you start seeing missing default shadows/pins for other markers (not Juke's),
// // you might need to reconsider this block or use a custom shadow image for your Juke icon.
// // delete L.Icon.Default.prototype._getIconUrl;
// // L.Icon.Default.mergeOptions({
// //   iconRetinaUrl: '/leaflet/images/marker-icon-2x.png',
// //   iconUrl: '/leaflet/images/marker-icon.png',
// //   shadowUrl: '/leaflet/images/marker-shadow.png',
// // });

// // Custom marker icon:
// const jukeBlueMarkerIcon = new L.Icon({
//   iconUrl: "/images/Juke_Blue_Blush.png", // Path to your Juke logo
//   iconSize: [40, 40], // Adjust size if your logo is too big/small
//   iconAnchor: [20, 40], // Point of the icon which will correspond to marker's location (bottom-center)
//   popupAnchor: [0, -40], // Point from which the popup should open relative to the iconAnchor
// });

// function MapRecenter({ center }) {
//   const map = useMap();
//   useEffect(() => {
//     // If the map is ready and the center changes, fly to the new center
//     if (map) {
//       map.flyTo(center, map.getZoom());
//     }
//   }, [center, map]);
//   return null;
// }

// export default function LeafletMap({ bars, center, zoom }) {
//   return (
//     <MapContainer
//       center={center}
//       zoom={zoom} // Use the zoom prop passed from MapPage
//       scrollWheelZoom // Allows zooming with scroll wheel
//       className="w-full h-full"
//     >
//       {/*
//         To match your page colors (nautical, antique, blush), you ideally need a custom map style.
//         Here are options, listed from simplest to most customized:

//         1.  Keep current Stadia Maps dark theme (alidade_smooth_dark):
//             url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
//             This is a good dark base, but won't perfectly match your specific hues.

//         2.  Try another public, subtle tile layer (e.g., grayscale for neutrality):
//             url="https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png"

//         3.  **BEST OPTION FOR BRANDING: Use a service like Mapbox or Maptiler.**
//             - Go to Mapbox Studio (studio.mapbox.com) or Maptiler Cloud (cloud.maptiler.com).
//             - Create an account and design a custom map style using your brand colors.
//             - Once designed, these services provide a TileLayer URL (e.g., Mapbox style URL like below).
//             - You'll need to create a Mapbox Access Token (free tier available for basic usage).
//             - Add your Mapbox Access Token to a `.env.local` file in your Next.js project:
//               `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=YOUR_MAPBOX_TOKEN_HERE`
//             - Then, uncomment and use a TileLayer like this:
//       */}
//       {/* Example with Mapbox (requires account and custom style setup): */}
//       {/* <TileLayer
//         attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
//         url={`https://api.mapbox.com/styles/v1/YOUR_MAPBOX_USERNAME/YOUR_CUSTOM_STYLE_ID/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`}
//       /> */}

//       {/* For now, sticking with the dark Stadia map, which is a good neutral base */}
//   <TileLayer
//   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
//   url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png" // Light theme
// />
//       {bars.map((bar) => (
//         <Marker
//           key={bar.id}
//           position={bar.coordinates}
//           icon={jukeBlueMarkerIcon}
//         >
//           <Popup className="custom-popup">
//             <div className="font-sans text-nautical p-2">
//               {bar.image && (
//                 <div className="w-full h-32 relative mb-3 rounded-lg overflow-hidden">
//                   <Image
//                     src={bar.image}
//                     alt={bar.name}
//                     layout="fill"
//                     objectFit="cover"
//                     className="rounded-lg"
//                   />
//                 </div>
//               )}
//               <h3 className="font-title text-xl text-blush mb-1">
//                 {bar.name}
//               </h3>
//               <p className="text-base mb-2">{bar.address}</p>
//               <p className="text-sm italic">
//                 Here you can find a special signature drink created by{" "}
//                 <span className="font-bold">{bar.ownerSignatureDrink}</span>.
//               </p>
//             </div>
//           </Popup>
//         </Marker>
//       ))}

//       <MapRecenter center={center} />
//     </MapContainer>
//   );
// }

"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Image from "next/image";
import { useEffect, useRef } from "react"; // Import useRef

// Custom marker icon:
const jukeBlueMarkerIcon = new L.Icon({
  iconUrl: "/images/Juke_Blue_Blush.jpeg", // Path to your Juke logo
  iconSize: [40, 40], // Adjust size if your logo is too big/small
  iconAnchor: [20, 40], // Point of the icon which will correspond to marker's location (bottom-center)
  popupAnchor: [0, -40], // Point from which the popup should open relative to the iconAnchor
});

function MapRecenter({ center, bars }) { // Pass bars to MapRecenter
  const map = useMap();
  useEffect(() => {
    // If the map is ready and the center changes, fly to the new center
    if (map) {
      map.flyTo(center, map.getZoom());

      // Find the bar that matches the new center coordinates
      const targetBar = bars.find(
        (bar) =>
          bar.coordinates[0] === center[0] && bar.coordinates[1] === center[1]
      );

      if (targetBar) {
        // Iterate over all layers on the map to find the marker
        map.eachLayer((layer) => {
          if (
            layer instanceof L.Marker &&
            layer.getLatLng().lat === targetBar.coordinates[0] &&
            layer.getLatLng().lng === targetBar.coordinates[1]
          ) {
            layer.openPopup(); // Open the popup of the found marker
          }
        });
      }
    }
  }, [center, map, bars]); // Add bars to the dependency array
  return null;
}

export default function LeafletMap({ bars, center, zoom }) {
  // Create a ref for each marker
  const markerRefs = useRef({});

  return (
    <MapContainer
      center={center}
      zoom={zoom} // Use the zoom prop passed from MapPage
      scrollWheelZoom // Allows zooming with scroll wheel
      className="w-full h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png" // Light theme
      />
      {bars.map((bar) => (
        <Marker
          key={bar.id}
          position={bar.coordinates}
          icon={jukeBlueMarkerIcon}
          ref={(el) => (markerRefs.current[bar.id] = el)} // Assign ref to the marker
        >
          <Popup className="custom-popup">
            <div className="font-sans text-nautical p-2">
              {bar.image && (
                <div className="w-full h-32 relative mb-3 rounded-lg overflow-hidden">
                  <Image
                    src={bar.image}
                    alt={bar.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              )}
              <h3 className="font-title text-xl text-blush mb-1">
                {bar.name}
              </h3>
              <p className="text-base mb-2">{bar.address}</p>
              <p className="text-sm italic">
                Here you can find a special signature drink created by{" "}
                <span className="font-bold">{bar.ownerSignatureDrink}</span>.
              </p>
            </div>
          </Popup>
        </Marker>
      ))}

      <MapRecenter center={center} bars={bars} /> {/* Pass bars to MapRecenter */}
    </MapContainer>
  );
}