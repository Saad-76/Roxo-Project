import React from 'react'
import "./tokenBalance.css"

const TokenBalance=()=> {
    return (
        <>
         <div className="col-md-12 balance-firstCards-style"> 
<div className="col-md-6 first-card-colum">
    <div className="col-md-12 card-Button-One">
    <div className="col-md-6">
<div className="balance-cardOne ">
<div>
    <img src="" alt="icon"/>
    <p>Token Balance <br/> 1783.12 ROXO</p>
    <p>Token Value in</p>
</div>
</div>
</div>
<div className="col-md-6">
<div className="first-card-buttons">
<button className="card-button-style">Buy More</button>
<button className="card-button-style">Deposite</button>
<button className="card-button-style">With Draw</button>
</div>

</div>
</div>




</div>
<div className="col-md-6  Second-card-colum">
<div className="balance-cardTwo">
<p>NFTs Balance</p>
<div> 
    <p>Total NFTs own:</p>
    <p>Total Value</p>
</div>
</div>
</div>
         </div>



        </>
    )
}

export default TokenBalance;
