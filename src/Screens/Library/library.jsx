import React, { useEffect, useState } from "react";
import "../Library/library.css";
import APIKip from "../../spotifyapi";
import { IconContext } from "react-icons";
import { BsPlayCircle } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const Library = () => {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    APIKip.get("me/playlists").then(function (response) {
      setPlaylists(response.data.items);
      console.log(response.data);
    });
  }, []);

  const navigate =useNavigate();


  const playPlaylist=(id)=>{
   navigate('/player',{state:{id:id}})
  }

  return (
    <div className="screen_container">
      <div className="Header">
      <h2>Playlist</h2>
      </div>
     
      <div className="library_Body p-3">
        {playlists?.map((playlist) => (
          <div className="playlist_card" key={playlist.id} onClick={() => playPlaylist(playlist.id)}>
            <img
              src={playlist.images[0].url}
              className="playlist_image"
              alt="playlistimage"
            />
            <p className="playlist_title">{playlist.name}</p>
            <p className="playlist_subtitle">{playlist.tracks.total} Songs</p>
            <div className="palylist_playbtn">
<IconContext.Provider value={{size:"50px", color:"#00D1E8"}}>
  <AiFillPlayCircle/>
</IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
