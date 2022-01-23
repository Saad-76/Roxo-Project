import React from "react";
import "./tokenBalance.css";
import RoxoCoin from "../Assests/3.png";
import NftDashboard from "../Assests/NftDashboard.png";
import Dashboard from "../Assests/Dashboard.png";
import BuyMore from "../Assests/BuyMore.png"
import Convert from "../Assests/Convert.png"
import WithDraw from "../Assests/WithDraw.png"
import Deposit from "../Assests/Deposit.png"




const TokenBalance = () => {
  return (
    <>
      <div className="col-md-12 balance-style">
        <div className="col-md-4">
            <div>
          <div className="balance-dashboard">
            
            <img src={Dashboard} alt="game" width="40px" height="40px" />
            <button className="dashboard-heading">Dashboard</button>
       
          </div>
          </div>
          <div className="nft-dashboard">
            <img src={NftDashboard} alt="game" width="40px" height="40px" />
            <button className="nft-heading">NFTs</button>
          </div>
        <div className="horizintal-line-style" />
          <h6 className="balance-roxo-heading"> ROXO Token</h6>
          <div className="horizintal-line-Roxotoken-botttom" />

          <div className="buy-more">
            <img src={BuyMore} width="40px" height="40px" />
            <button className="buy-more-heading">Buy More</button>
          </div>
          <div className="deposit">
            <img src={Deposit} width="40px" height="40px" />
            <button className="deposit-heading"      data-bs-toggle="modal"
              data-bs-target="#DepositeModal">Deposit</button>
          </div>
          <div className="with-draw">
            <img src={WithDraw} width="40px" height="40px" />
            <button className="with-draw-heading"   data-bs-toggle="modal"
              data-bs-target="#WithDrawModal">With Draw</button>
          </div>

          <div className="convert">
            <img src={Convert} width="40px" height="40px" />
            <button className="convert-heading"   >Convert</button>
          </div>

        </div>

        <div className="col-md-4  ">
          <div className=" balance-firstCard-style">
            <div className="balance-firstCard-background">
              <div className="firstCard-backColor">
                <div className="balance-firstCard-inner">
                  <img src={RoxoCoin} alt="roxo" width="100px" height="100px" />
                  <p>
                  <span className="token-main-headings">  Token Balance </span> <br />
                    17832.12 ROXO
                  </p>
                </div>
            <p className="token-valueIn"><span className="token-sub-headings"> Token value in </span></p>
                <div className="token-value">
                  <p>
                    3223
                    <br />
                    USD
                  </p>
                  <p className="ETH-style">
                    0.731
                    <br />
                    ETH
                  </p>
                  <p className="BTC-style">
                    0.12231
                    <br />
                    BTC
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="firstCard-button">
            <button className="firstCard-button-style">Buy More</button>
            <button
              className="firstCard-button-style"
              data-bs-toggle="modal"
              data-bs-target="#DepositeModal"
            >
              Deposit
            </button>
            <button
              className="firstCard-button-style"
              data-bs-toggle="modal"
              data-bs-target="#WithDrawModal"
            >
              With Draw
            </button>
          </div> */}

          {/* ------------------Third-Cardd---------------- */}
          <div className="thirdCard-main">
            <div className="third-card-set">
              <div className="thirdCard-backColor">
              <span className="token-main-headings"> <p>NFTs balance</p> </span>
                <div className="balance-thirdCard-data">
                  <p><span className="token-sub-headings"> Total NFTs OWN: </span></p>
                  <p>300</p>
                </div>
                <div className="balance-thirdCard-data">
                  <p> <span className="token-sub-headings"> Total value: </span></p>
                  <p>
                    2.31 ETH <br /> ($8733.12)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="thirdCard-button">
            <button className="thirdCard-button-style">With Draw</button>
          </div>
        </div>

        <div className="col-md-4">
          <div className="balance-secondCard-background">
            <div className="secondCard-backColor">
              <div className="hasteKing-button">
                <button>Haste King </button>
              </div>
              <div className="balance-secondCard-inner">
                <img src={RoxoCoin} alt="roxo" width="100px" height="100px" />
                <p>
                <span className="token-main-headings">     Token Coins  </span><br />
                  17832.12 ROXO
                </p>
                <button className="convert-button-secondCard">Convert</button>
              </div>
              <div className="global-rank">
                <p> <span className="token-sub-headings">Global Rank </span></p>
                <p>3</p>
              </div>
              <div className="balance-stats-button">
                <button> Stats</button>
              </div>
              <div className="stat-fields">
                <p> <span className="token-sub-headings">Total Score:</span></p>
                <p>27482</p>
              </div>

              <div className="stat-fields">
                <p><span className="token-sub-headings">Total Races:</span></p>
                <p>1322</p>
              </div>

              <div className="stat-fields">
                <p> <span className="token-sub-headings">Race Wons: </span></p>
                <p>1933</p>
              </div>

              <div className="stat-fields">
                <p> <span className="token-sub-headings">Race Loses: </span></p>
                <p>339</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenBalance;
