import React, { useEffect, useState } from "react";
import "./sidebar.css";
import SidebarButton from "../SidebarButtons";
import {
  FaBarsStaggered,
  FaBoltLightning,
  FaCirclePlay,
} from "react-icons/fa6";
import { GiLoveSong } from "react-icons/gi";
import { MdLibraryMusic } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import apiClient from "../../spotifyapi";

const Sidebar = () => {
  const [image, setImage] = useState(
"https://wallpapers.com/images/high/aesthetic-anime-boy-icon-under-the-rain-pzhq2626rkfex27c.webp"
  );

  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);

  const handleLogout = () => {
   
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("tokenExpiry");
   
    navigate("/");
  };
  return (
    <div className="sidebar_container ">
      <img src={image} alt="profile" className="profile_img" />
      <div>
        <SidebarButton title="Feed" icon={<FaBarsStaggered />} to="/feed" />
        {/* <SidebarButton
          title="Tranding"
          icon={<FaBoltLightning />}
          to="/tranding"
        /> */}
       
        {/* <SidebarButton title="Favorites" icon={<GiLoveSong />} to="/fav" /> */}
        <SidebarButton title="Library" icon={<MdLibraryMusic />} to="/" />
        <SidebarButton title="Player" icon={<FaCirclePlay />} to="/player" />
      </div>
      <SidebarButton title="Log Out" icon={<LuLogOut />} onClick={handleLogout} />
    </div>
  );
};

export default Sidebar;
