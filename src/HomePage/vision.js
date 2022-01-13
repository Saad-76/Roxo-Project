import React from "react";
import "./vision.css";
import VisionImage from "../Assests/VisionImage.jpg";

const Vision = () => {
  return (
    <div>
      <div className="vision-style">
      <div className="col-md-12 vision-main-style">
        <div className="col-md-6 vision-image-style">
          <img
          
            src={VisionImage}
            alt="visionimage"
            // height="300px"
            // width="700px"
          />
        </div>
        <div className="col-md-6 vision-text-style">
          <div className="vision-text-data-style">
        <div className="visiion-upper-text">  <h3>Our Vision</h3>
          <p>Free to play Play to Earn</p>
          </div>
          <p>
            Our vision is that no NFT metaverse should be singular but rather
            each metaverse can be interconnected each unique NFT increased utility through NFT interoperability between games and platforms
          </p>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default Vision;
