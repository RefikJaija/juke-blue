// 'use client';
// import React, { useState } from "react";

// const songBook = [
//   {
//     title: 'Rockabone Bay',
//     description: 'A smoky blend of surfy twang and noir groove. Perfect for watching seagulls argue over chips on a foggy boardwalk.',
//     iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/track=2208570031/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/',
//     bandcampLink: 'https://jukeblue.bandcamp.com/track/rockabone-bay',
//   },
//   {
//     title: 'Five in the Morning',
//     description: 'A lo-fi waltz through sunrise-stained streets. Jazzed-up insomnia for lovers of slow-burning dawns and percolating thoughts.',
//     iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/track=1653756306/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/',
//     bandcampLink: 'https://jukeblue.bandcamp.com/track/five-in-the-morning',
//   },
//   {
//     title: 'Borrowed Time',
//     description: 'Dusty chords echo over echoey drums. This one drinks like aged rum — slow, sharp, and unexpectedly smooth.',
//     iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/track=1724744053/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/',
//     bandcampLink: 'https://jukeblue.bandcamp.com/track/borrowed-time-2',
//   },
//   {
//     title: 'FUN-K',
//     description: 'Danceable grit and groove with feather-boa sass. Sounds like a pelican in sunglasses sliding across a polished stage.',
//     iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/track=1701386430/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/',
//     bandcampLink: 'https://jukeblue.bandcamp.com/track/fun-k',
//   },
//   {
//     title: 'Atlantic City',
//     description: 'Glamour and grime tangled in neon tides. From casino light spills to boardwalk heartbreak, this one’s got salt.',
//     iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/track=1250004783/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/',
//     bandcampLink: 'https://jukeblue.bandcamp.com/track/atlantic-city',
//   },
//   {
//     title: 'Bellissima',
//     description: 'Italian sunsets meet New Orleans brass. Equal parts elegant and unhinged — like a gondola drifting into a jazz dive.',
//     iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/track=334099159/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/',
//     bandcampLink: 'https://jukeblue.bandcamp.com/track/bellissima',
//   },
// ];

// const SongBookPage = () => {
//   const [showFullVideo, setShowFullVideo] = useState(false);

//   return (
//     <section className="pt-32 pb-20 text-nautical" id="songbook-page">
//       {/* 🎥 Featured Video Section */}
//       <div className="max-w-8xl mx-auto px-6 mb-32">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
          
//           {/* 📽️ Video with Background Image */}
//           <div className="w-full lg:w-3/4 relative">
//             {/* Decorative Image behind video, lower & right */}
//             <img
//               src="/images/vinyl.png"
//               alt="Decorative Vinyl"
//               className="hidden absolute md:block z-0 w-64 opacity-70 pointer-events-none"
//               style={{
//                   width: '1000px',
//                   height: '700px',
//                 bottom: '-140px',
//                 right: '-90px',
//                 top: '-70px',
//               }}
//             />

//             {/* Video Container above */}
//             <div className="relative z-10 overflow-hidden shadow-2xl">
//               {showFullVideo ? (
//                 <video
//                   src="/videos/Too_Young_2025.mp4"
//                   autoPlay
//                   controls
//                   className="w-full h-auto object-cover"
//                 />
//               ) : (
//                 <div className="relative">
//                   <video
//                     src="/videos/Too_Young_Preview.mp4"
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                     className="w-full h-auto object-cover"
//                   />
//                   <button
//                     onClick={() => setShowFullVideo(true)}
//                     className="absolute inset-0 flex items-center justify-center bg-nautical bg-opacity-40 hover:bg-opacity-60 transition-all group"
//                     aria-label="Play Video"
//                   >
//                     <div className="w-24 h-24 rounded-full shadow-xl flex items-center justify-center bg-[linear-gradient(to_top_right,rgba(37,57,75,0.8),rgba(198,140,175,0.6),rgba(242,227,192,0.5))] group-hover:scale-105 transition-transform duration-300">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="w-10 h-10 text-blush group-hover:scale-110 transition-transform duration-300"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M8 5v14l11-7z" />
//                       </svg>
//                     </div>
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* 📝 Description */}
//           <div className="w-full lg:w-1/3 text-center lg:text-left">
//             <h2 className="text-2xl font-title uppercase mb-6 text-nautical leading-tight">
//               The Heavenly Melodies
//             </h2>
//             <p className="text-antique text-lg mb-4">
//               Yes, they actually exist!
//               The 12 heavenly melodies from the pilot are yours here to enjoy.
//               Buy them at Bandcamp if you want to sing along at your next social engagement.
//             </p>
//             <p className="text-blush font-semibold uppercase tracking-wide">
//               Music Video Feature
//             </p>
//           </div>
//         </div>
//       </div>

//        {/* 🎶 Bandcamp Song List */}
//       <div className="max-w-5xl mx-auto px-6">
//         {songBook.map((song, index) => {
//           const isEven = index % 2 === 0;

//           return (
//             <div
//               key={index}
//               className={`flex flex-col md:flex-row items-center justify-between gap-10 mb-24 ${
//                 !isEven ? 'md:flex-row-reverse' : ''
//               }`}
//             >
//               {/* Text Section */}
//               <div className="md:w-1/2 text-center md:text-left">
//                 <h2 className="text-3xl font-title uppercase text-nautical mb-4">
//                   {song.title}
//                 </h2>
//                 <p className="text-antique text-lg mb-4">
//                   {song.description}
//                 </p>
//                 <a
//                   href={song.bandcampLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block border-2 border-nautical text-nautical px-6 py-2 uppercase text-sm font-semibold hover:bg-nautical hover:text-blush transition-all"
//                 >
//                   Listen on Bandcamp
//                 </a>
//               </div>

//               {/* Bandcamp Embed */}
//               <div className="md:w-1/2">
//                 <div className=" overflow-hidden shadow-2xl">
//                   <iframe
//                     style={{ border: '0', width: '100%', height: '468px' }}
//                     src={song.iframeSrc}
//                     seamless
//                     title={`bandcamp-${index}`}
//                   ></iframe>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default SongBookPage;


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


'use client';
import React, { useState } from "react";
import HeroSection from "@/app/components/HeroSection";


const songBook = [
  {
    title: 'Rockabone Bay',
    description: 'A smoky blend of surfy twang and noir groove. Perfect for watching seagulls argue over chips on a foggy boardwalk.',
    iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/track=2208570031/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/',
    bandcampLink: 'https://jukeblue.bandcamp.com/track/rockabone-bay',
  },
  {
    title: 'Five in the Morning',
    description: 'A lo-fi waltz through sunrise-stained streets. Jazzed-up insomnia for lovers of slow-burning dawns and percolating thoughts.',
    iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/track=1653756306/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/',
    bandcampLink: 'https://jukeblue.bandcamp.com/track/five-in-the-morning',
  },
  {
    title: 'Borrowed Time',
    description: 'Dusty chords echo over echoey drums. This one drinks like aged rum — slow, sharp, and unexpectedly smooth.',
    iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/track=1724744053/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/',
    bandcampLink: 'https://jukeblue.bandcamp.com/track/borrowed-time-2',
  },
  {
    title: 'FUN-K',
    description: 'Danceable grit and groove with feather-boa sass. Sounds like a pelican in sunglasses sliding across a polished stage.',
    iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/track=1701386430/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/',
    bandcampLink: 'https://jukeblue.bandcamp.com/track/fun-k',
  },
  {
    title: 'Atlantic City',
    description: 'Glamour and grime tangled in neon tides. From casino light spills to boardwalk heartbreak, this one’s got salt.',
    iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/track=1250004783/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/',
    bandcampLink: 'https://jukeblue.bandcamp.com/track/atlantic-city',
  },
  {
    title: 'Bellissima',
    description: 'Italian sunsets meet New Orleans brass. Equal parts elegant and unhinged — like a gondola drifting into a jazz dive.',
    iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/track=334099159/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/',
    bandcampLink: 'https://jukeblue.bandcamp.com/track/bellissima',
  },
];

const SongBookPage = () => {
  const [showFullVideo, setShowFullVideo] = useState(false);

  return (
    <>
     {/* Hero Section */}
      
      <HeroSection
        previewClip="/videos/Too_Young_Preview.mp4"
        fullVideo="/videos/Too_Young_2025.mp4"
        title="Heavenly Melodies"
        description="Yes, they actually exist! The 12 heavenly melodies from the pilot are yours here to enjoy. Buy them on Bandcamp if you want to sing along at your next social engagement."
        buttonText="The Heavenly Melodies"
      />
    
    <section className="pt-32 pb-20 text-nautical" id="songbook-page">      


      {/* 🎶 Bandcamp Song List */}
      <div className="max-w-5xl mx-auto px-6">
        {songBook.map((song, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-between gap-10 mb-24 ${
                !isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Text Section */}
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl font-title uppercase text-nautical mb-4">
                  {song.title}
                </h2>
                <p className="text-antique text-lg mb-4">
                  {song.description}
                </p>
                <a
                  href={song.bandcampLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-nautical text-nautical px-6 py-2 uppercase text-sm font-semibold hover:bg-nautical hover:text-blush transition-all"
                >
                  Listen on Bandcamp
                </a>
              </div>

              {/* Bandcamp Embed */}
              <div className="md:w-1/2">
                <div className=" overflow-hidden shadow-2xl">
                  <iframe
                    style={{ border: '0', width: '100%', height: '468px' }}
                    src={song.iframeSrc}
                    seamless
                    title={`bandcamp-${index}`}
                  ></iframe>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>

    </>
  );
};

export default SongBookPage;


