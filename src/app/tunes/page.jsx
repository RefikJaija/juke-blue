'use client';
import React, { useState } from "react";
import HeroSection from "@/app/components/HeroSection";


const songBook = [
  {
    title: 'Rockabone Bay',
    description: 'During the dark days of Covid, Juke Blue received the order from the Lord to travel to Greece. It was not his first heavenly direction: Years earlier he’d been instructed to create 12 songs for the melodies he’d received in dreams. Rockabone Bay was the first.',
    iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/track=2208570031/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/',
    bandcampLink: 'https://jukeblue.bandcamp.com/track/rockabone-bay',
  },
  {
    title: 'Five in the Morning',
    description: 'Not being a singer, musician, or even particularly rhythmic, the Juke had no idea how to turn his melodies into songs. So he sung them down the phoneline at producers who demanded large sums to turn them into retro, fresh, and professional tracks.',
    iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/track=1653756306/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/',
    bandcampLink: 'https://jukeblue.bandcamp.com/track/five-in-the-morning',
  },
  {
    title: 'Borrowed Time',
    description: 'Their production efforts took longer than anticipated–much to the anger of loved ones. “My hands are tied,” the Juke would say, adding that he was simply carrying out heavenly orders. “And look, someone in Cambodia seems to really enjoy Borrowed Time.',
    iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/track=1724744053/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/',
    bandcampLink: 'https://jukeblue.bandcamp.com/track/borrowed-time-2',
  },
  {
    title: 'FUN-K',
    description: 'By 2021, a distinct ‘Juke Blue’ sound had begun to emerge. He tagged each song retrophonica on youtube. An elderly Brazilian man commented he liked it. Two strangers sent him fan mail. And that was all. Puzzled and broke, Juke looked for a job. ',
    iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/track=1701386430/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/',
    bandcampLink: 'https://jukeblue.bandcamp.com/track/fun-k',
  },
  {
    title: 'Atlantic City',
    description: 'But it seemed his work was not done. The Lord returned late one night with a new instruction: It was time to head to Greece and make one last song as part of a show to celebrate nature and life. It took some convincing, but Juke ultimately agreed.',
    iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/track=1250004783/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/',
    bandcampLink: 'https://jukeblue.bandcamp.com/track/atlantic-city',
  },
  {
    title: 'Bellissima',
    description: 'More money invested from a dwindling pile. Another roll of the dice. This is terrible folly,” Juke warned. “Can’t You find someone else for this?” The answer was no. And so the pilot was made. At considerable cost, leaving Juke broke. Again. ',
    iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/track=334099159/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/',
    bandcampLink: 'https://jukeblue.bandcamp.com/track/bellissima',
  },
  {
  title: 'Dreams and Memories',
  description: 'As he stood on the shores of the Aegean sea, the final take in the can (as they say in TV parlance), he looked back at his life, the people, the confusion in their eyes, the dust in his pocket, and questioned his fate. At that moment, the secret came.',
  iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/track=2764549222/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/',
  bandcampLink: 'https://jukeblue.bandcamp.com/track/dreams-and-memories',
},
{
  title: 'Silent Freeways',
  description: 'It revealed itself in the gentle lap of water on the shoreline. There was something magical in the sea, in people, in the land itself, all around the world. This secret would guide the next passage of his life. At that moment, he knew: He would send nature in bottles.',
  iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/track=2581956710/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/',
  bandcampLink: 'https://jukeblue.bandcamp.com/track/silent-freeways',
},
{
  title: 'Freedom',
  description: 'But how could one capture nature when it was by nature free? Something from the land, something from the sea, something from humanity, distilled into an essence, a spirit, like an alchemist might. Something regenerative that would bring people together.',
  iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/track=2337143692/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/',
  bandcampLink: 'https://jukeblue.bandcamp.com/track/freedom',
},
{
  title: 'Too Young',
  description: 'Already the basis of Juke Blue’s Double Blue was forming: A high quality natural elixir crafted with the holy essence of nature. And so it was, like a spirit ageing in its oak until perfect, the idea of Double Blue slowly matured until its first bottling in 2025.',
  iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/track=3205049219/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/',
  bandcampLink: 'https://jukeblue.bandcamp.com/track/too-young',
},
{
  title: 'Do the Pelican',
  description: 'Now it is ready for you to enjoy. As a cocktail or a shot. With friends in high places. Or companions in low ones. A finely crafted German Doppelkorn both smooth and elemental, with a salt-thread finish drawn from something ancient and unspoken.',
  iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/track=2984575013/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/',
  bandcampLink: 'https://jukeblue.bandcamp.com/track/do-the-pelican',
},
{
  title: 'Shadowdance',
  description: 'Every bottle contains two blue cornflowers slowly instilling their holy essence into the spirit, indicative of how nature serves us every day. So next time you share a drink of Double Blue, raise a toast to nature. It is the start of every adventure.',
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
        description="Twelve heavenly melodies for you to enjoy."
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


