import React from "react";
import "./play.css";
import playImagae from "../Assests/PlayImage.jpg";

const Play = () => {
  return (
    <div>
      <div className="col-md-12 play-main-style">
      <div className="col-md-6 play-image-style">
        <img  className="" src={playImagae} alt="playImagae"  />
        </div>
        <div className="col-md-6 play-text-style">
          <div className="play-text-data-style">
          <h4>Play any where , any time</h4>
          <p>The experience on any device(ios, android, desktop)</p>

          <div className="col-md-12 first-buttons-style">
          <div className="col-md-6">
            <button className="button-style-play"> Download Wallet</button>
          </div>
          <div className="col-md-6">
            <button className="button-style-play">IOS Download</button>
          </div>
          </div>

          <div className="col-md-12 second-buttons-style">
          <div className="col-md-6">
            <button className="button-style-play">Android Download</button>
          </div>
          <div className="col-md-6">
            <button className="button-style-play">Google Play</button>
          </div>
          </div>

        </div>
        </div>

        
      </div>
    </div>
  );
};

export default Play;
