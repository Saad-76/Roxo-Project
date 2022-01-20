import React from "react";
import "./play.css";
import playImagae from "../Assests/PlayImage.jpg";
import Mobilephoto from "../Assests/Mobile photo.png";
import AppStore from "../Assests/AppStore.png"
import PlayStore from "../Assests/PlayStore.png"



const Play = () => {
  return (
    <>
      <div className="col-md-12 play-main-style">
      <div className="col-md-6 ">
        <div className="play-image-style">
        <img  className="play-image-size" src={Mobilephoto} alt="playImagae"  />
        </div>
        </div>
        <div className="col-md-6 play-text-style">
          <div className="play-text-data-style">
            <div className="getNow-style" >
          <h4>Get it Now.</h4>
          <p>The experience on any device(ios, android, desktop)</p>
          </div>

          <div className="col-md-12 first-buttons-style">
          <div className="col-md-6">
            <img src={AppStore} alt="appstore" height="50px" width="150px"/>
            {/* <button className="button-style-play"> Download Wallet</button> */}
          </div>
          <div className="pl-5 col-md-6">
          <img src={PlayStore} alt="playstore" height="50px" width="150px"/>

            {/* <button className="pl-5 button-style-play ">IOS Download</button> */}
          </div>
          </div>

          {/* <div className="col-md-12 mt-4 second-buttons-style">
          <div className="col-md-6">
            <button className="button-style-play">Android Download</button>
          </div>
          <div className="pl-5 col-md-6 ">
            <button className="button-style-play">Google Play</button>
          </div>
          </div> */}

        </div>
        </div>

        
      </div>
      
    </>
  );
};

export default Play;
