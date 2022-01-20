import React from "react";
import "./video.css";
import Crypto33 from "../Assests/Crypto33.mp4";

const Video = () => {
  return (
    <div>
      <div className="col-md-12  video-main-style">
      <div className="col-md-6 video-text-style">
          <h1> Video Side Data </h1>
          <p>
            All data Our vision is that no NFT metaverse should be singular but
            rather each metaverse can be interconnected each unique NFT
            increased utility through NFT interoperability between games and
            platforms{" "}
          </p>
        </div>
        
      <div className="col-md-6 primary-video">
          {/* <h5>Video Heading</h5> */}
          <video
            className="video_section-style"
            src={Crypto33}
            loop={true}
            muted={true}
            autoPlay={true}
          />
    
        </div>
       
      
      </div>
      {/* <video
        className="video_section-style"
        src={Crypto33}
        loop={true}
        muted={true}
        autoPlay={true}
      /> */}
    </div>
  );
};

export default Video;
