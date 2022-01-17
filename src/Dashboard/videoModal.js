import React from "react";
import Crypto33 from "../Assests/Crypto33.mp4";
import "./videoModal.css";

const VideoModal = () => {
  return (
    <div>
      <div
        class="modal fade"
        id="VideoModal"
        tabindex="-1"
        aria-labelledby="EarningModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content video-background">
            <div class="modal-body ">
            <div     className="modalVideo-close-button">
              <button
                type="button"
            className="skip-video"
                data-bs-dismiss="modal"
              >
                Skip Video
              </button>
              </div>
              <video
                className="modalVideo"
                src={Crypto33}
                loop={true}
                muted={true}
                autoPlay={true}
              />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
