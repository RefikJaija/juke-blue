'use client';

import JukeButton from '@/components/JukeButton';

const SongBookCard = ({ className, style, title, link }) => {
  return (
    <div
      className={`bg-sand-texture bg-muted-sand transform rounded-xl bg-cover bg-repeat p-6 text-[#c68caf] shadow-md transition duration-300 hover:shadow-xl ${className}`}
      id={'songbook-card'}
      style={style}
    >
      <video controls={true} className={'aspect-video w-full'}>
        <source src="/videos/hero2.mp4" type="video/mp4" />
      </video>
      <h2 className={'my-3 w-full text-center text-3xl capitalize'}>{title}</h2>
      {/*<h3 className={'my-1 w-full text-center text-2xl'}>Get it at Bandcamp</h3>*/}
      <JukeButton
        className={'flex flex-col'}
        onClick={() => {
          window.open(link, '_blank');
        }}
      >
        Get it at Bandcamp
      </JukeButton>
    </div>
  );
};

export default SongBookCard;
