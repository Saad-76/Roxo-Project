import React from "react";
import "./play.css";
import playImagae from "../Assests/PlayImage.jpg";

const Play = () => {
  return (
    <div>
      <div className="col-md-12 play-main-style">
        <div className="col-md-6 play-text-style">
          <div className="play-text-data-style">
          <h1>Play any time any where</h1>
          <p>The experience on any device</p>
        </div>
        </div>

        <div className="col-md-6">
        <img  className="play-image-style" src={playImagae} alt="playImagae"  height="250px" width="400px"/>
        </div>
      </div>
    </div>
  );
};

export default Play;
