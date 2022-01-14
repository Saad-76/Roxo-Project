import React from "react";
import NFT from "../Assests/NFT.jpg";
import GAME from "../Assests/GAME.jpg";
import FINANCE from "../Assests/FINANCE.jpg";
import "./welcome.css"

const Welcome = () => {
  return (
    <div>
      <div className="welcome-container">

        <h3 className="welcome-heading">Welcome TO Gamefi World </h3>
        <div className="col-md-12 welcome-images-style">
          <div className="col-md-4">
            <img src={NFT} alt="nft" height="200px" width="200px" />
          </div>
          <div className="col-md-4">
            <img src={GAME} alt="nft" height="200px" width="200px" />
          </div>
          <div className="col-md-4">
            <img src={FINANCE} alt="nft" height="200px" width="200px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
