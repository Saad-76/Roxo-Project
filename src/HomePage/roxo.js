import React from "react";
import roxo from "../Assests/roxo.jpg";
import Logo from "../Assests/3.png";

import "./roxo.css";

const Roxo = () => {
  return (
    <div>
      <div className="roxo-style">
      <div className="col-md-12 roxo-main-style">
        <div className="col-md-6 roxo-text-section">
        <img
          
          src={Logo}
          alt="logologin"
          height="200px"
          width="200px"
        />          <p className="text-style-roxo">
            Bitcoin (₿) is a decentralized digital currency, without a central
            bank or single administrator, that can be sent from user to user on
            the peer-to-peer bitcoin network without the need for
            intermediaries. ... Bitcoins are created as a reward for a process
            known as mining.
          </p>
        </div>
        <div className="col-md-6 roxo-image-section">
          
          <img   src={roxo} alt="roxo" height="300px" width="400px" />
    
        </div>
      </div>
      </div>

    </div>
  );
};

export default Roxo;
