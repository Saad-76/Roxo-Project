import React from "react";
import "./roxoPlay.css";
import GameSlider1 from "../Assests/GameSlider1.jpeg";
import GameSlider2 from "../Assests/GameSlider2.jpeg";
import { GiPlainCircle } from "react-icons/gi";
import { BsCoin } from "react-icons/bs";

const RoxoPlay = () => {
  return (
    <div>
      <h1>Roxo Play</h1>
      <div className="col-md-12 main-card-flex">

  <div className="display-flex-data">        
   <div>       
        <div className="col-md-6 card-one-style">
          <div className="card-background">
            <img className="image-size" src={GameSlider1} alt="gameimage" />
            <h3> Haste King: 3D Online</h3>
            <div className="inner-data-style">
              <div>
                <p>
                  <GiPlainCircle /> Active User
                  <br /> 82238
                </p>
              </div>

              <div>
                <p>
                  <BsCoin /> 8.7 M
                  <br /> Total Earnings
                </p>
              </div>
            </div>
          </div>
</div>
          <div> Button</div>

</div>
        </div>


        <div className="col-md-6">
          <div className="card-background">
            <img className="image-size" src={GameSlider2} alt="gameimage" />
            <h3>Coming Soon...</h3>
          </div>
          <div> Button</div>
        </div>
      </div>
    </div>
  );
};

export default RoxoPlay;
