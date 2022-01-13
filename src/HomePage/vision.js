import React from "react";
import "./vision.css";
import VisionImage from "../Assests/VisionImage.jpg";

const Vision = () => {
  return (
    <div>
      <h1>Vision</h1>
      <div className="col-md-12 vision-main-style">
        <div className="col-md-6 vision-image-style">
          <img
            src={VisionImage}
            alt="visionimage"
            height="300px"
            width="300px"
          />
        </div>
        <div className="col-md-6 vision-text-style">
          <div className="vision-text-data-style">
          <h1>Our Vision</h1>
          <p>Free to play Play to Earn</p>
          <p>
            Our vision is that no nfts metaverse should be singular but rather
            each metaverse can be connected giving platform
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
