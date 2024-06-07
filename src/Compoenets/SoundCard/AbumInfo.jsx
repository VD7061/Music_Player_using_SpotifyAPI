  import React from 'react';
  import './soundCard.css';

  const AlbumInfo = ({ albumName, artist, releaseDate, trackName }) => {
    
    return (
      <div className='albumInfo-card'>
      <div className='albumName-container'>
        <div className='marquee'>
          <p className='marquee-text'>
            {albumName ? `${albumName} - ${artist}` : "No Album Information"}
          </p>
        </div>
      </div>
      <div className='album-info'>
        <p style={{ fontSize: "14px", color: "#F4F5FC" }}>{`${albumName} is an ${artist} with ${trackName} track(s)`}</p>
      </div>
      <div className='album-release'>
        <p style={{ fontSize: "12px", color: "#F4F5FC" }}>Release Date: {releaseDate || "Unknown"}</p>
      </div>
    </div>
  );
};
  export default AlbumInfo;
    