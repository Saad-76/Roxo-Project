import React from "react";
import "./connectWallet.css";
import GAME from "../Assests/GAME.jpg"


const ConnectWallet = () => {
  return (
    <>
      <h2 className="connect-heading">Dashboard</h2>

      <div className="col-md-12 connect-main-section">
<div className="col-md-4">
<div className="connect-GameName">
<img src={GAME} alt="game" width="40px" height="40px"/>
    <p className="connect-gameName-heading">Game Name</p>
    </div>
    <div className="horizintal-line-style" />



</div>

<div className="col-md-8" >
<div className="background-connectWallet">
      <div className="connect-address-section">
        <div>
          <h6>Public Address:</h6>
        </div>
        <div>
          <p> 0x000000000000000000000000000000000 </p>
        </div>
        <div>
          <button className="wallet-connected-button-style" >Wallet Connected</button>
        </div>
      </div>

      </div>

      </div>
      </div>

    </>
  );
};

export default ConnectWallet;
