import React from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import "./controls.css";

const Controls = ({ isPlaying, setIsPlaying, handleNext, handlePrev }) => {
  return (
    <div className="controls-wrapper flex">
      <div className="action-btn flex" onClick={handlePrev}>
        <IoPlaySkipBack size="30px" color="#C4D0E3" />
      </div>
      <div
        className={`play-pause-btn flex ${isPlaying ? "active" : ""}`}
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? (
          <FaPause size="30px" color="#040B1A" />
        ) : (
          <FaPlay size="30px" color="#040B1A" />
        )}
      </div>
      <div className="action-btn flex" onClick={handleNext}>
        <IoPlaySkipForward size="30px" color="#C4D0E3" />
      </div>
    </div>
  );
};

export default Controls;
