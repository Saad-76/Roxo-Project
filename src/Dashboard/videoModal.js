import React from 'react'
import Crypto33 from "../Assests/Crypto33.mp4";
import "./videoModal.css"


const  VideoModal=()=> {
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
        <div class="modal-content">
   
          <div class="modal-body modal-video-background">
          <h3 className="modalVideo-heading">How to Register</h3>
         
            <video
            className="modalVideo"
            src={Crypto33}
            loop={true}
            muted={true}
            autoPlay={true}
          />
        
       {/* <button
              type="button"
              className="modalVideo-close-button"
              data-bs-dismiss="modal"
            >
              Close
            </button> */}
       
     

         
        </div>
      
      
        </div>
      </div>
      
    </div>
        </div>
    )
}

export default VideoModal;

