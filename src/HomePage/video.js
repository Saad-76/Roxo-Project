import React from 'react'
import "./video.css"
import Crypto33 from "../Assests/Crypto33.mp4"

const Video=()=> {
    return (
        <div>
                        <video
        className="video_section-style"
        src={Crypto33}
        loop={true}
        muted={true}
        autoPlay={true}
      />

        </div>
    )
}

export default Video;
