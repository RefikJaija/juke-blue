'use client';



import SongBookCard from "@/app/components/SongBookCard";
import JukeButton from "@/app/components/JukeButton";
import React from "react";

const songBook = [
  {
    title: '5AM',
    playlistLink: 'https://open.spotify.com/track/4SneXMJmraHJnKOfnYwoES?si=03b702b06ab24c2d',
  },
  {
    title: 'Do the Pelican',
    playlistLink: 'https://open.spotify.com/track/4SneXMJmraHJnKOfnYwoES?si=03b702b06ab24c2d',
  },
  {
    title: 'Borrowed Time',
    playlistLink: 'https://open.spotify.com/track/4SneXMJmraHJnKOfnYwoES?si=03b702b06ab24c2d',
  },
  {
    title: 'Rockabone Bay',
    playlistLink: 'https://open.spotify.com/track/4SneXMJmraHJnKOfnYwoES?si=03b702b06ab24c2d',
  },
];

//Get it at Bandcamp

const SongBookPage = () => {
  return (
    <section className={'mt-20'} id={'songbook-page'}>
      <div className={'mx-auto max-w-[1280px] p-8 text-[#25394b]'}>
        The Juke never wants you to drink alone. So he prepared 12 heavenly melodies to enliven
        parties and gatherings where the Juke is present in spirit. Download the tracks at Bandcamp
        to add them to your own playlist and sing along.
      </div>
      <div className={'mx-auto flex w-full max-w-[1280px] flex-wrap gap-y-8 p-6 lg:p-0'}>
        {songBook.map((song, index) => {
          return (
              <SongBookCard title={song.title} link={song.playlistLink} key={`${song.title}-${index}`} />
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
        {/*<JukeButton*/}
        {/*  onClick={() => {*/}
        {/*    window.open(*/}
        {/*      'https://open.spotify.com/track/4SneXMJmraHJnKOfnYwoES?si=03b702b06ab24c2d',*/}
        {/*      '_blank',*/}
        {/*    );*/}
        {/*  }}*/}
        {/*>*/}
        {/*  Album at bandcamp for download!*/}
        {/*</JukeButton>*/}
      </div>
    </section>
  );
};

export default SongBookPage;
