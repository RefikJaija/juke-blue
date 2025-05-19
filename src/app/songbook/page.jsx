'use client';

import SongBookCard from '@/components/SongBookCard';
import JukeButton from '@/components/JukeButton';

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
            <SongBookCard
              className={
                'lg:w-half-minus-2rem flex w-full flex-col items-center justify-center lg:mx-4'
              }
              //style={{ width: 'calc(50% - 2rem)' }}
              key={`song-${index}`}
              title={song.title}
              link={song.playlistLink}
            />
          );
        })}
      </div>
      <div className={'mx-auto flex max-w-[1280px] justify-center p-8'}>
        <JukeButton
          onClick={() => {
            window.open(
              'https://open.spotify.com/track/4SneXMJmraHJnKOfnYwoES?si=03b702b06ab24c2d',
              '_blank',
            );
          }}
        >
          Album at bandcamp for download!
        </JukeButton>
      </div>
    </section>
  );
};

export default SongBookPage;
