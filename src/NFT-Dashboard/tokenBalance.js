import React from 'react'
import "./tokenBalance.css"
import RoxoCoin from "../Assests/3.png"

const TokenBalance=()=> {
    return (
        <>
         <div className="col-md-12 balance-style"> 


<div className="col-md-6  ">

<div className=" balance-firstCard-style">
<div className="balance-firstCard-background">
<div className="firstCard-backColor">
<div className="balance-firstCard-inner">
    <img src={RoxoCoin} alt="roxo" width="100px" height="100px"/>
    <p>Token Balance <br/>17832.12 ROXO</p>
    </div>
    <p>Token value in</p>
    <div className="token-value">
        <p>3223<br/>USD</p>
        <p>0.731<br/>ETH</p>
        <p>0.12231<br/>BTC</p>
    </div>
</div>
</div>
</div>
<div className="firstCard-button">
<button className="firstCard-button-style">Buy More</button>
<button className="firstCard-button-style"  data-bs-toggle="modal"
            data-bs-target="#DepositeModal" >Deposit</button>
<button className="firstCard-button-style" data-bs-toggle="modal"
            data-bs-target="#WithDrawModal">With Draw</button>
</div>


{/* ------------------Third-Cardd---------------- */}
<div className="thirdCard-main">
  <div className="third-card-set">  
<div className="thirdCard-backColor" >
<h6>NFTs balance</h6>
<div className="balance-thirdCard-data">
    <p>Total NFTs OWN:</p> 
    <p>300</p>
</div>
<div className="balance-thirdCard-data">
    <p>Total value:</p> 
    <p>2.31 ETH <br/> ($8733.12)</p>
</div>
</div>

</div>

</div>
<div className="thirdCard-button">
<button className="thirdCard-button-style">With Draw</button>
</div>




</div>


<div className="col-md-6">
<div className="balance-secondCard-background">
    <div className="secondCard-backColor">
<div className="hasteKing-button" >
    <button>Haste King </button>

    </div>
<div className="balance-secondCard-inner">
<img src={RoxoCoin} alt="roxo" width="100px" height="100px"/>
    <p>Token Coins <br/>17832.12 ROXO</p>
    <button className="convert-button-secondCard" >Convert</button>
    </div>
    <div className="global-rank">
        <p>Global Rank</p>
        <p>3</p>
    </div>
    <div className="balance-stats-button">
    <button > Stats</button>
    </div>
    <div className="stat-fields">
        <p>Total Score:</p>
        <p>27482</p>
        </div>

        <div className="stat-fields">
        <p>Total Races:</p>
        <p>1322</p>
        </div>

        <div className="stat-fields">
        <p>Race Wons:</p>
        <p>1933</p>
        </div>

        <div className="stat-fields">
        <p>Race Loses:</p>
        <p>339</p>
        </div>

</div>
</div>


</div>



         </div>



        </>
    )
}

export default TokenBalance;
