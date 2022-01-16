import React from "react";
import "./playGames.css";
import GameImage from "../Assests/games.jpg";
import { Link } from "react-router-dom";

const PlayGames = () => {
  return (
    <>
      <div className="playGames-container">
        <h3 className="playGames-heading-style">ROXO PLAY TO EARN GAMES</h3>
        <div className="col-md-12 roxo-play-cards">
          <div className="col-md-4  style-card">
            <div className="rox-play-cards-one">
              <img
                src={GameImage}
                alt="gameimage"
                height="100px "
                width="150px"
              />
              <h4>Haste King 3D online</h4>
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
              <button
                className="dashboard-earnings-button"
                data-bs-toggle="modal"
                data-bs-target="#EarningModal"
              >
                {" "}
                Check Your Earnings
              </button>
            </div>
          </div>

          <div className="col-md-4 style-card">
            <div className="rox-play-cards-two">
              <img
                src={GameImage}
                alt="gameimage"
                height="100px "
                width="100px"
              />
              <h4>Haste King 3D online</h4>
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
              <button
                className="dashboard-earnings-button"
                data-bs-toggle="modal"
                data-bs-target="#EarningModal"
              >
                {" "}
                Check Your Earnings
              </button>
            </div>
          </div>

          <div className="col-md-4 style-card">
            <div className="rox-play-cards-two">
              <img
                src={GameImage}
                alt="gameimage"
                height="100px "
                width="100px"
              />
              <h4>Haste King 3D online</h4>
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

              <button className="dashboard-earnings-button">
     
                <Link to="/nftdashboard"> Check Your Earnings </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayGames;
