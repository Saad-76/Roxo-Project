import React from "react";
import "./connectWallet.css";

const ConnectWallet = () => {
  return (
    <>
      <h2 className="connect-heading">Dashboard</h2>
      <div className="col-md-12 connect-main-section">
<div className="col-md-4">

</div>

<div className="col-md-8" >
<div className="background-connectWallet">
      <div className="connect-address-section">
        <div>
          <p>Public Address:</p>
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
