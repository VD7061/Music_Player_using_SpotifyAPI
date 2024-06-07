import React, { useEffect, useState } from "react";
import "../Player/player.css";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotifyapi";
import SoundCard from "../../Compoenets/SoundCard";
import Queue from "../../Compoenets/Queue";
import AudioPLayer from "../../Compoenets/AudioPlayer";
import Widgets from "../../Compoenets/Widgets"


const Player = () => {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state && location.state.id) {
      apiClient.get(`playlists/${location.state.id}/tracks`)
        .then((res) => {
          console.log('API Response:', res.data.items); 
          if (res.data.items && res.data.items.length > 0) {
            setTracks(res.data.items);
            setCurrentTrack(res.data.items[0].track);
          }
        })
        .catch((error) => {
          console.error("Error fetching tracks:", error);
        });
    }
  }, [location.state]);

  useEffect(() => {
    if (tracks.length > 0) {
      setCurrentTrack(tracks[currentIndex].track);
    }
  }, [currentIndex, tracks]);

  const handleTrackClick = (index) => {
    setCurrentIndex(index);
  };


  return (
    <div className="screen_container flex">
      <div className="left_body">
      <AudioPLayer
          currentTrack={currentTrack}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          total={tracks}
        />
         <Widgets artistID={currentTrack?.album?.artists[0]?.id} />
      </div>
      <div className="right_body">
        {currentTrack && <SoundCard track={currentTrack} />}
        <Queue tracks={tracks} setCurrentIndex={handleTrackClick} />
      </div>
    </div>
  );
};

export default Player;
