// const links = [
//   { 
//     title: "COCKTAILS", 
//     path: "/cocktails",
//     image: "/images/cocktail1.png", 
//     subtitle: "Siren's Brews"
//   },
//   { 
//     title: "SONGBOOK", 
//     path: "/songbook",
//     image: "/images/songbook1.png", 
//     subtitle: "Juke your party"
//   },
//   { 
//     title: "SHOP", 
//     path: "/shop",
//     image: "/images/shop1.png", 
//     subtitle: "Get the precious drop"
//   },
//   { 
//     title: "MAP", 
//     path: "/map",
//     image: "/images/map1.png", 
//     subtitle: "Chart a Jukeward course"
//   }
// ];

// export default function NavGrid() {
//   return (
//     <div className="grid mt-16 grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto p-6">
//       {links.map((link) => (
//         <a
//           key={link.path}
//           href={link.path}
//           className="group relative block w-full rounded-xl overflow-hidden border-4 border-nautical/40
//                      bg-[#F2E3C0] shadow-xl transition-transform duration-300 hover:-rotate-1 hover:translate-x-1"
//         >
//           {/* Sand texture overlay */}
//           <div
//             className="absolute inset-0 bg-grain bg-cover bg-center opacity-30 z-10"
//           ></div>

//           {/* Maintains original image proportions */}
//           <div className="w-full h-auto aspect-w-4 aspect-h-3 relative">
//             <img
//               src={link.image}
//               alt={link.title}
//               className="w-full h-auto opacity-0"
//             />
//             <div
//               className="absolute inset-0 z-20"
//               style={{
//                 maskImage: `url(${link.image})`,
//                 WebkitMaskImage: `url(${link.image})`,
//                 maskRepeat: 'no-repeat',
//                 WebkitMaskRepeat: 'no-repeat',
//                 maskSize: 'contain',
//                 WebkitMaskSize: 'contain',
//                 maskPosition: 'center',
//                 WebkitMaskPosition: 'center',
//                 backgroundColor: 'rgb(37, 57, 75)', // Illustration color is fully opaque
//               }}
//             />
//           </div>

//           {/* Overlay text container */}
//           <div className="absolute inset-0 z-30 flex flex-col justify-end items-center p-6 text-center text-blush bg-black/10 transition">
//             {/* H2 title: Apply initial and hover text styles */}
//             <h2 className="font-pirate text-3xl md:text-4xl tracking-wider mb-1
//                            text-shadow-default
//                            hover:text-antique
//                            hover:text-shadow-subtle-glow
//                            transition-all duration-300 ease-in-out">
//               {link.title}
//             </h2>
//             {/* Subtitle: Apply initial and hover text styles */}
//             <p className="text-base uppercase tracking-wider font-title text-blush/90
//                           text-shadow-default
//                           hover:text-antique
//                           hover:text-shadow-subtle-glow
//                           transition-all duration-300 ease-in-out">
//               {link.subtitle}
//             </p>
//           </div>

//           {/* Decorative bottom wave */}
//           <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blush/30 via-nautical/20 to-blush/30 opacity-80 group-hover:opacity-100 transition-opacity animate-wave" />
//         </a>
//       ))}
//     </div>
//   );
// }

// src/app/nav-grid/nav-grid.jsx
const links = [
  {
    title: "COCKTAILS",
    path: "/cocktails",
    image: "/images/cocktail.png",
    subtitle: "Siren's Brews"
  },
  {
    title: "SONGBOOK",
    path: "/songbook",
    image: "/images/songbook.png",
    subtitle: "Juke your party"
  },
  {
    title: "SHOP",
    path: "/shop",
    image: "/images/shop.png",
    subtitle: "Get the precious drop"
  },
  {
    title: "MAP",
    path: "/map",
    image: "/images/map.png",
    subtitle: "Chart a Jukeward course"
  }
];


export default function NavGrid() {
  return (
    <div className="grid mt-16 grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto p-6">
      {links.map((link) => (
        <a
          key={link.path}
          href={link.path}
          className="group relative block w-full rounded-xl overflow-hidden border-4 border-nautical
                     bg-antique shadow-xl transition-transform duration-300 hover:-rotate-1 hover:translate-x-1"
        >
          {/* Sand texture overlay */}
          <div
            className="absolute inset-0 bg-grain bg-cover bg-center opacity-25 z-10"
          ></div>

         {/* Maintains original image proportions */}
           <div className="w-full h-auto aspect-w-4 aspect-h-3 relative">
             <img
               src={link.image}
               alt={link.title}
               className="w-full h-auto opacity-0"
             />
             <div
               className="absolute inset-0 z-20"
               style={{
                 maskImage: `url(${link.image})`,
                 WebkitMaskImage: `url(${link.image})`,
                 maskRepeat: 'no-repeat',
                 WebkitMaskRepeat: 'no-repeat',
                 maskSize: 'contain',
                 WebkitMaskSize: 'contain',
                 maskPosition: 'center',
                 WebkitMaskPosition: 'center',
                 backgroundColor: 'rgb(37, 57, 75)', // Illustration color is fully opaque
               }}
             />
           </div>

          {/* Overlay text container - This was changed from bg-black/10 to bg-black/0 for lightness */}
          <div className="absolute inset-0 z-30 flex flex-col justify-end items-center p-6 text-center text-blush bg-black/0 transition">
            {/* H2 title: Apply initial and hover text styles */}
            <h2 className="font-pirate text-3xl md:text-4xl tracking-wider mb-1
                           text-shadow-default
                           group-hover:text-nautical
                           hover:text-shadow-subtle-glow
                           transition-all duration-300 ease-in-out">
              {link.title}
            </h2>
            {/* Subtitle: Apply initial and hover text styles */}
            <p className="text-base uppercase tracking-wider font-title text-blush/90
                          text-shadow-default
                          group-hover:text-nautical
                          hover:text-shadow-subtle-glow
                          transition-all duration-300 ease-in-out">
              {link.subtitle}
            </p>
          </div>

          {/* Decorative bottom wave */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blush/30 via-nautical/20 to-blush/30 opacity-80 group-hover:opacity-100 transition-opacity animate-wave" />
        </a>
      ))}
    </div>
  );
}
