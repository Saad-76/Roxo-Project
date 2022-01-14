import React from "react";
import "./playGames.css";
import GameImage from "../Assests/GameImage.jpg"

const PlayGames = () => {
  return (
    <>
    <div className="playGames-container">
      <h3 className="playGames-heading-style">ROXO PLAY TO EARN GAMES</h3>
      <div className="col-md-12 roxo-play-cards">
        <div className="col-md-6  style-card"  >
          <div className="rox-play-cards-one">
            <h4>Haste King 3D online</h4>
            <img src={GameImage} alt="gameimage" height="100px " width="150px"/>
            <div className="col-md-6 inner-card-one">
              <div className="col-md-3">
                <p>
                  Active <br /> 8223B
                </p>
              </div>
              <div className="col-md-3">
                <p>
                  8.7
                  <br /> Player
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 style-card">
        <div className="rox-play-cards-two">
            <img src="" alt="" />
            <h4>Haste King 3D online</h4>
            <img src={GameImage} alt="gameimage" height="100px " width="100px"/>

            <div className="col-md-6 inner-card-two">
              <div className="col-md-3">
                <p>
                  Active <br /> 8223B
                </p>
              </div>
              <div className="col-md-3">
                <p>
                  8.7
                  <br /> Player
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PlayGames;