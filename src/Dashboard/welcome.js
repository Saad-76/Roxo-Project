import React from "react";
import NFT from "../Assests/NFT.jpg";
import GAME from "../Assests/GAME.jpg";
import FINANCE from "../Assests/FINANCE.jpg";
import "./welcome.css"

const Welcome = () => {
  return (
    <div>
      <div className="welcome-background-color">
      <div className="welcome-container">

        <h3 className="welcome-heading">Welcome TO Gamefi World </h3>
        <div className="col-md-12 welcome-images-style">
          <div className="col-md-4 welcome-images-inner ">
            <img  src={NFT} alt="nft" height="200px" width="200px" />
            <h5>Nfts</h5>
          </div>
          <div className="col-md-4 welcome-images-inner">
            <img src={GAME} alt="nft" height="200px" width="200px" />
            <h5>Games</h5>
  
          </div>
          <div className="col-md-4 welcome-images-inner">
            <img src={FINANCE} alt="nft" height="200px" width="200px" />
                        <h5>Finance</h5>

          </div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default Welcome;
