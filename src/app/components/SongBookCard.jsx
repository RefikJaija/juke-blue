// 'use client';

// // import JukeButton from '@/components/JukeButton';

// import JukeButton from "@/app/components/JukeButton";
// import React from "react";

// const SongBookCard = ({ title, link }) => {
//   return (
//       <div
//           className={`relative rounded-xl lg:w-half-minus-2rem flex w-full flex-col items-center justify-center lg:mx-4 bg-[#F2E3C0] p-6 border-4 border-nautical/40 shadow-xl transition-transform duration-300 hover:-rotate-1 hover:translate-x-1`}
//           id={'songbook-card'}

//       >
//           <div
//               className="absolute inset-0 bg-grain bg-cover bg-center opacity-30 z-10"
//           ></div>
//         <video controls={true} className={'aspect-video w-full z-20'}>
//           <source src="/videos/hero-clip.mp4" type="video/mp4" />
//         </video>
//         <h2 className={'my-3 w-full text-center text-blush capitalize z-20 font-pirate text-3xl md:text-4xl tracking-wider mb-1\n' +
//             '                           text-shadow-default\n' +
//             '                           hover:text-antique\n' +
//             '                           hover:text-shadow-subtle-glow\n' +
//             '                           transition-all duration-300 ease-in-out'}>{title}</h2>
//         <button
//             onClick={() => {
//               window.open(link, '_blank');
//             }}
//             className="z-20 mt-6 px-8 py-3 text-lg cursor-pointer bg-antique text-nautical border-2 border-nautical rounded-lg font-title shadow-md hover:bg-blush transition-all duration-200"
//         >
//           Get it at Bandcamp
//         </button>
//     </div>
//   );
// };

// // export default SongBookCard;

// 'use client';

// import React from "react";
// import Image from 'next/image'; // Import Image for Next.js optimized images

// const SongBookCard = ({ title, link, thumbnailSrc }) => { // Add thumbnailSrc to props
//   return (
//       <div
//           className={`relative rounded-xl lg:w-half-minus-2rem flex w-full flex-col items-center justify-center lg:mx-4
//                       bg-[#F2E3C0] p-6 border-4 border-nautical/60 shadow-2xl transition-all duration-500
//                       transform hover:scale-102 hover:shadow-blush/50 hover:border-nautical/80 `}
//           id={'songbook-card'}
//       >
//           {/* Subtle grain overlay for texture */}
//           <div
//               className="absolute inset-0 bg-grain bg-cover bg-center opacity-30 z-10 rounded-xl"
//           ></div>

//         {/* Video Player - Added more rounded corners and a distinct shadow */}
//         <div className="relative w-full overflow-hidden rounded-2xl shadow-xl z-20">
//           <video
//             controls={true}
//             className={'aspect-video w-full'}
//             poster={thumbnailSrc} // <<<<<<<<<<<<<<< ADDED THIS LINE
//           >
//             <source src="/videos/hero-clip.mp4" type="video/mp4" />
//           </video>
//         </div>

//         {/* Song Title - Adjusted margin and added hover subtle glow with default shadow for depth */}
//         <h2 className={'my-3 w-full text-center text-blush capitalize z-20 font-pirate text-3xl md:text-4xl tracking-wider mb-2 leading-tight\n' +
//             '                           text-shadow-default\n' +
//             '                           hover:text-antique\n' +
//             '                           hover:text-shadow-subtle-glow\n' +
//             '                           transition-all duration-300 ease-in-out'}>{title}</h2>

//         {/* "Get it at Bandcamp" Button - More robust styling for a premium feel */}
//         <button
//             onClick={() => {
//               window.open(link, '_blank');
//             }}
//             className="z-20 mt-6 px-10 py-4 text-lg cursor-pointer bg-antique text-nautical
//                        border-4 border-nautical rounded-full font-title shadow-lg
//                        hover:bg-blush hover:text-white hover:shadow-xl
//                        active:bg-nautical active:text-antique active:shadow-inner
//                        transition-all duration-250 ease-in-out uppercase tracking-wide"
//         >
//           Get it at Bandcamp
//         </button>
//     </div>
//   );
// };

// export default SongBookCard;


'use client';
import React from "react";
import Image from 'next/image';

const SongBookCard = ({ title, description, thumbnailSrc, bandcampLink }) => {
  return (
    <div className="bg-[#F2E3C0] rounded-xl overflow-hidden shadow-md border-2 border-nautical">
      <Image
        src={thumbnailSrc}
        alt={title}
        width={800}
        height={450}
        className="w-full h-auto object-cover"
      />
      <div className="p-6">
        <h2 className="font-title text-2xl uppercase text-nautical mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <button
          onClick={() => window.open(bandcampLink, '_blank')}
          className="px-5 py-2 text-sm uppercase tracking-wide border-2 border-nautical text-nautical hover:bg-nautical hover:text-white transition"
        >
          Listen on Bandcamp
        </button>
      </div>
    </div>
  );
};

export default SongBookCard;
