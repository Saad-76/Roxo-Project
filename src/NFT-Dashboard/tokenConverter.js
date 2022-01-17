import React from 'react'
import Image3 from "../Assests/3.png"
import Coin from "../Assests/Coin.jpg"

import {HiArrowSmRight, HiArrowSmLeft} from "react-icons/hi"
import "./tokenConverter.css"

const TokenConverter=()=> {
    return (
        <>
        <div className="tokenConverter-style">
            <h3 className="converter-heading">Instant Converter</h3>
           
<div className="col-md-12 coverter-column-flex">
<div className="background-border">
    <div className="col-md-6 convert-roxo-allData">
<img src={Image3} alt="Image3" height="100x" width="100px"/>
<div className="roxo-coin-converter">
    <p>Roxo Coin</p>
    <p>1783.12 ROXO</p>
</div>
    </div>
<div>
    <HiArrowSmRight size={60}/>
    <HiArrowSmLeft  size={60}/>
</div>

    <div className="col-md-6  convert-gameCoin-allData">
    <img src={Coin} alt="Image3" height="80x" width="80px"/>
<div className="game-coin-converter">
    <p>Game Coin</p>
    <p>778622</p>
</div>
 
</div>
</div>
</div>
<div className="token-convert-button">
<button className="token-convert-button-style" >Convert </button>
</div>
         </div> 
        </>
    )
}

export default TokenConverter;
