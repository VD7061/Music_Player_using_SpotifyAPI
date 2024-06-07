import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "../Library/library";
import Feed from "../Feed/feed";
import "../Home/home.css";
import Fav from "../Fav/fav";
import Player from "../Player/player";

import Sidebar from "../../Compoenets/Sidebar";
import Login from "../Auth/login";
import { setClientToken } from "../../spotifyapi";
import Tranding from "../Tranding/tranding";


const Home = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const tokenExpiry = window.localStorage.getItem("tokenExpiry");
    const hash = window.location.hash;
    window.location.hash = "";

    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      const expiryTime = new Date().getTime() + 3600 * 1000;
      window.localStorage.setItem("token", _token);
      window.localStorage.setItem("tokenExpiry", expiryTime);
      setToken(_token);
      setClientToken(_token);
    } else if (token && tokenExpiry && new Date().getTime() < tokenExpiry) {
      setToken(token);
      setClientToken(token);
    } else {
      handleTokenExpired();
    }
  }, []);

  const handleTokenExpired = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("tokenExpiry");
    setToken("");
  };

  return !token ? (
    <Login />
  ) : (
    <Router>
      <div className="main_body">
        
       
        <Sidebar />
        <Routes>
          <Route path="/feed" element={<Feed />} />
          <Route path="/tranding" element={<Tranding />} />
          <Route path="/player" element={<Player />} />
          <Route path="/fav" element={<Fav />} />
          <Route path="/" element={<Library />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Home;
