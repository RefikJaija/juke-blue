// 'use client';



// import SongBookCard from "@/app/components/SongBookCard";
// import JukeButton from "@/app/components/JukeButton";
// import React from "react";
// import Image from 'next/image';

// const songBook = [
//   {
//     title: '5AM',
//     playlistLink: 'https://open.spotify.com/track/4SneXMJmraHJnKOfnYwoES?si=03b702b06ab24c2d',
//   },
//   {
//     title: 'Do the Pelican',
//     playlistLink: 'https://open.spotify.com/track/4SneXMJmraHJnKOfnYwoES?si=03b702b06ab24c2d',
//   },
//   {
//     title: 'Borrowed Time',
//     playlistLink: 'https://open.spotify.com/track/4SneXMJmraHJnKOfnYwoES?si=03b702b06ab24c2d',
//   },
//   {
//     title: 'Rockabone Bay',
//     playlistLink: 'https://open.spotify.com/track/4SneXMJmraHJnKOfnYwoES?si=03b702b06ab24c2d',
//   },
// ];

// //Get it at Bandcamp

// const SongBookPage = () => {
//   return (
//     <section className={'mt-20'} id={'songbook-page'}>
//         {/* This div is EXCLUSIVELY for the large frame, allowing it to span wider */}
//              <div className="relative w-full max-w-[1200px] mx-auto mb-32 mt-40 aspect-[1.6/1] lg:aspect-[1.9/1]">{/* Frame container */}
//                {/* The frame image as a background */}
//                <Image
//                  src="/images/frame-songbook.png" // Verify this path!
//                  alt="Decorative frame for title"
//                  layout="fill"
//                  objectFit="contain"
//                  objectPosition="center"
//                  className="z-0"
//                />
     
//                {/* The title text, positioned absolutely over the frame */}
//              <h1 className="font-title text-xl sm:text-3xl md:text-4xl lg:text-5xl text-nautical text-center leading-tight absolute inset-0 flex items-center justify-center px-[50px] py-[30px] sm:px-[120px] sm:py-[60px] lg:px-[350px] lg:py-[100px] text-shadow-default z-10">
//                   Juke's Tunes from <br></br> the Tides
//                </h1>
//              </div>


//       <div className={'mx-auto flex w-full max-w-[1280px] flex-wrap gap-y-8 p-6 lg:p-0'}>
//         {songBook.map((song, index) => {
//           return (
//               <SongBookCard title={song.title} link={song.playlistLink} key={`${song.title}-${index}`} />
//           );
//         })}
//       </div>
//       <div className={'mx-auto flex max-w-[1280px] justify-center p-8'}>
//         <button
//             onClick={() => {
//               window.open(
//                   'https://open.spotify.com/track/4SneXMJmraHJnKOfnYwoES?si=03b702b06ab24c2d',
//                   '_blank',
//               );
//             }}
//             className="mt-6 px-8 py-3 text-lg bg-antique cursor-pointer text-nautical border-2 border-nautical rounded-lg font-title shadow-md hover:bg-blush transition-all duration-200"
//         >
//           Album at bandcamp for download!
//         </button>
//         {/*<JukeButton*/}
//         {/*  onClick={() => {*/}
//         {/*    window.open(*/}
//         {/*      'https://open.spotify.com/track/4SneXMJmraHJnKOfnYwoES?si=03b702b06ab24c2d',*/}
//         {/*      '_blank',*/}
//         {/*    );*/}
//         {/*  }}*/}
//         {/*>*/}
//         {/*  Album at bandcamp for download!*/}
//         {/*</JukeButton>*/}
//       </div>
//     </section>
//   );
// };

// export default SongBookPage;

'use client';

import SongBookCard from "@/app/components/SongBookCard";
import React from "react";
import Image from 'next/image';

const songBook = [
  {
    title: '5AM',
    playlistLink: 'https://open.spotify.com/track/4SneXMJmraHJnKOfnYwoES?si=03b702b06ab24c2d',
    thumbnailSrc: '/images/5-am.png', // <<<<<<<<<<< ADD THIS LINE for each song
  },
  {
    title: 'Do the Pelican',
    playlistLink: 'https://open.spotify.com/track/4SneXMJmraHJnKOfnYwoES?si=03b702b06ab24c2d',
    thumbnailSrc: '/images/the-pelican.png', // Example path
  },
  {
    title: 'Borrowed Time',
    playlistLink: 'https://open.spotify.com/track/4SneXMJmraHJnKOfnYwoES?si=03b702b06ab24c2d',
    thumbnailSrc: '/images/borrowed-time.png', // Example path
  },
  {
    title: 'Rockabone Bay',
    playlistLink: 'https://open.spotify.com/track/4SneXMJmraHJnKOfnYwoES?si=03b702b06ab24c2d',
    thumbnailSrc: '/images/5-am.png', // Example path
  },
];

const SongBookPage = () => {
  return (
    <section className={'mt-20'} id={'songbook-page'}>
        {/* This div is EXCLUSIVELY for the large frame, allowing it to span wider */}
             <div className="relative w-full max-w-[1200px] mx-auto mb-32 mt-40 aspect-[1.6/1] lg:aspect-[1.9/1]">{/* Frame container */}
               {/* The frame image as a background */}
               <Image
                 src="/images/frame-songbook.png" // Verify this path!
                 alt="Decorative frame for title"
                 layout="fill"
                 objectFit="contain"
                 objectPosition="center"
                 className="z-0"
               />

               {/* The title text, positioned absolutely over the frame */}
             <h1 className="font-title text-xl sm:text-3xl md:text-4xl lg:text-5xl text-nautical text-center leading-tight absolute inset-0 flex items-center justify-center px-[50px] py-[30px] sm:px-[120px] sm:py-[60px] lg:px-[350px] lg:py-[100px] text-shadow-default z-10">
                  Juke's Tunes from <br></br> the Tides
               </h1>
             </div>


      <div className={'mx-auto flex w-full max-w-[1280px] flex-wrap gap-y-8 p-6 lg:p-0'}>
        {songBook.map((song, index) => {
          return (
              // Pass thumbnailSrc to SongBookCard
              <SongBookCard
                title={song.title}
                link={song.playlistLink}
                thumbnailSrc={song.thumbnailSrc} // <<<<<<<<<<< PASS THE PROP HERE
                key={`${song.title}-${index}`}
              />
          );
        })}
      </div>
      <div className={'mx-auto flex max-w-[1280px] justify-center p-8'}>
        <button
            onClick={() => {
              window.open(
                  'https://open.spotify.com/track/4SneXMJmraHJnKOfnYwoES?si=03b702b06ab24c2d',
                  '_blank',
              );
            }}
            className="mt-6 px-8 py-3 text-lg bg-antique cursor-pointer text-nautical border-2 border-nautical rounded-lg font-title shadow-md hover:bg-blush transition-all duration-200"
        >
          Album at bandcamp for download!
        </button>
      </div>
    </section>
  );
};

export default SongBookPage;