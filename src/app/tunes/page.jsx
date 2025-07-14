//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// 'use client';
// import React, { useState } from "react";
// import HeroSection from "@/app/components/HeroSection";


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
//     <>
//      {/* Hero Section */}
      
//       <HeroSection
//         previewClip="/videos/Too_Young_Preview.mp4"
//         fullVideo="/videos/Too_Young_2025.mp4"
//         title="Heavenly Melodies"
//         description="The 12 heavenly melodies mentioned actually exists and are yours here to enjoy. Buy them on Bandcamp if you want to sing along at your next gathering."
//         buttonText="See the Juke in Action"
//       />
    
//     <section className="pt-32 pb-20 text-nautical" id="songbook-page">      


//       {/* 🎶 Bandcamp Song List */}
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
//                 <div className=" overflow-hidden">
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

//     </>
//   );
// };

// export default SongBookPage;


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
  {
  title: 'Dreams and Memories',
  description: 'A bittersweet haze of wanderlust and quiet yearning. Like walking through tall grass at golden hour with an old love still echoing in your chest. Wistful, warm, and just a little weathered by time.',
  iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/track=2764549222/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/',
  bandcampLink: 'https://jukeblue.bandcamp.com/track/dreams-and-memories',
},
{
  title: 'Silent Freeways',
  description: 'A midnight drive through heartbreak and headlights. Smoky vocals ride slow-burning guitar lines like telephone wires in the moonlight. It\'s all neon memories, yellow moons, and the ache of what could’ve been.',
  iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/track=2581956710/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/',
  bandcampLink: 'https://jukeblue.bandcamp.com/track/silent-freeways',
},
{
  title: 'Freedom',
  description: 'A foot-stomping ode to restless hearts and tea-sipping wisdom. Part coming-of-age, part road song — it rolls like denim and dust across wide-open skies, chasing truth on two feet and a worn-out guitar.',
  iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/track=2337143692/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/',
  bandcampLink: 'https://jukeblue.bandcamp.com/track/freedom',
},
{
  title: 'Too Young',
  description: 'A tender ache wrapped in velvet chords. This one dances between memory and maturity — a bittersweet waltz of what was, what might’ve been, and the love that lingers long after the last goodbye.',
  iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/track=3205049219/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/',
  bandcampLink: 'https://jukeblue.bandcamp.com/track/too-young',
},
{
  title: 'Do the Pelican',
  description: 'A sun-baked strut from the beaches of who-knows-where. Half dance craze, half fever dream — it’s all conga-line chaos and flapping joy. Guaranteed to make your shoulders shimmy and your passport question its own existence.',
  iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/track=2984575013/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/',
  bandcampLink: 'https://jukeblue.bandcamp.com/track/do-the-pelican',
},
{
  title: 'Shadowdance',
  description: 'A slow waltz through sleepless hours and streetlight ghosts. This one lingers in the spaces between love and silence — where memories flicker like headlights and sorrow learns to sway.',
  iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/track=1316116703/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/',
  bandcampLink: 'https://jukeblue.bandcamp.com/track/shadowdance',
},
];

const TunesPage = () => {
  const [showFullVideo, setShowFullVideo] = useState(false);

  return (
    <>
     {/* Hero Section */}
      
      <HeroSection
        previewClip="https://www.youtube.com/embed/wDXdBQGRkcY"
        fullVideo="https://www.youtube.com/embed/bHOr2O0oOA8"
        title="Heavenly Melodies"
        description="The 12 heavenly melodies mentioned actually exist and are yours here to enjoy."
        buttonText="See the Juke in Action"
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
                <div className=" overflow-hidden">
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

export default TunesPage;


