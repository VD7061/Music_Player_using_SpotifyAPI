import React from 'react'
import './soundCard.css';
import AlbumInfo from './AbumInfo'
import AlbumImage from './albumImage'

const SoundCard = ({ track }) => {
  const album = track?.album;
  const artist = album?.artists?.[0]?.name;
  const releaseDate = album?.release_date;
  const imageUrl = album?.images?.[0]?.url;
  const trackName = track?.name;


  return (
    <div className='soundCard_body flex'>
      <AlbumImage url={imageUrl} />
      <AlbumInfo albumName={album?.name} artist={artist} releaseDate={releaseDate} trackName={trackName} />
    </div>
  );
};

export default SoundCard;
