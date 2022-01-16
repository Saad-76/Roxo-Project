import React from 'react'
import NftDashboardHeader from "./nftDashboardHeader"
import ConnectWallet from "./connectWallet"
import TokenBalance from "./tokenBalance"

import "./nftDashboard.css"


const  NftDashboard=()=> {
    return (
        <div className="NFT-background-color">
            
            <NftDashboardHeader/>
            <ConnectWallet/>
            <TokenBalance/>
        </div>
    )
}

export default NftDashboard;
