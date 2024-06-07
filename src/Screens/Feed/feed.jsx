import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import apiClient from '../../spotifyapi';
import { IconContext } from 'react-icons';
import { AiFillPlayCircle } from 'react-icons/ai';
import "./feed.css"
import { useNavigate } from 'react-router-dom';

const Feed = ({ artistID }) => {
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const navigate = useNavigate();

  const handlePlaylistClick2 = (externalUrl) => {
    const spotifyUri = `spotify:playlist:${externalUrl}`;
    window.open(spotifyUri, '_blank');
  };

  useEffect(() => {
    apiClient
      .get(`/browse/featured-playlists`)
      .then((res) => {
        const featured = res.data?.playlists.items.slice(0, 6);
        console.log('Featured Playlists:', featured);
        setFeaturedPlaylists(featured);
      })
      .catch((err) => console.error(err));

    apiClient
      .get(`/browse/new-releases`)
      .then((res) => {
        const releases = res.data?.albums.items.slice(0, 10);
        console.log('New Releases:', releases);
        setNewReleases(releases);
      })
      .catch((err) => console.error(err));
  }, []);

  const handlePlaylistClick = (id) => {
    console.log(`Playlist clicked: ${id}`);
    // Add your logic to handle playlist click
  };

  return (
    <div className='screen-container p-3'>
      <div>
      <h2 style={{
  color: "#F4F5FC",
  fontFamily: "'Great Vibes', cursive",
}}  className='mx-2'>Featured Playlists</h2>
      </div>
      <div className='library_Body p-2'>
        {featuredPlaylists.map((playlist, index) => (
          <div key={index} className='playlist_card3'onClick={() => handlePlaylistClick2(playlist.id)}>
            <img src={playlist.images[0].url} className='playlist_image3' alt='playlist image' />
            <p className='playlist_title3'>{playlist.name}</p>
            <p className='playlist_subtitle3'>{playlist.tracks.total} Songs</p>
            <div className='playlist_playbtn3'>
              <IconContext.Provider value={{ size: '50px', color: '#00D1E8' }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
        <div>
        <h2 style={{
  color: "#F4F5FC",
  fontFamily: "'Great Vibes', cursive",
}} className='mx-2 mt-4'>New Releases</h2>
      </div>
      <div className='library_Body p-1'>
        {newReleases.map((release, index) => (
          <div key={index} className='playlist_card2' onClick={() => handlePlaylistClick2(release.id)}>
            <img src={release.images[0].url} className='playlist_image2' alt='release image' />
            <p className='playlist_title2'>{release.name}</p>
          
            <p className='playlist_subtitle2'>{release.total_tracks} Songs</p>
            <div className='playlist_playbtn2'>
              <IconContext.Provider value={{ size: '50px', color: '#00D1E8' }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default Feed;