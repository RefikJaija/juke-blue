'use client';

// import JukeButton from '@/components/JukeButton';

import JukeButton from "@/app/components/JukeButton";
import React from "react";

const SongBookCard = ({ title, link }) => {
  return (
      <div
          className={`relative rounded-xl lg:w-half-minus-2rem flex w-full flex-col items-center justify-center lg:mx-4 bg-[#F2E3C0] p-6 border-4 border-nautical/40 shadow-xl transition-transform duration-300 hover:-rotate-1 hover:translate-x-1`}
          id={'songbook-card'}

      >
          <div
              className="absolute inset-0 bg-grain bg-cover bg-center opacity-30 z-10"
          ></div>
        <video controls={true} className={'aspect-video w-full z-20'}>
          <source src="/videos/hero2.mp4" type="video/mp4" />
        </video>
        <h2 className={'my-3 w-full text-center text-blush capitalize z-20 font-pirate text-3xl md:text-4xl tracking-wider mb-1\n' +
            '                           text-shadow-default\n' +
            '                           hover:text-antique\n' +
            '                           hover:text-shadow-subtle-glow\n' +
            '                           transition-all duration-300 ease-in-out'}>{title}</h2>
        <button
            onClick={() => {
              window.open(link, '_blank');
            }}
            className="z-20 mt-6 px-8 py-3 text-lg cursor-pointer bg-antique text-nautical border-2 border-nautical rounded-lg font-title shadow-md hover:bg-blush transition-all duration-200"
        >
          Get it at Bandcamp
        </button>
    </div>
  );
};

export default SongBookCard;
