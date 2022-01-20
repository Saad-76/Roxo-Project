import React from 'react'
// import NftDashboardHeader from "./nftDashboardHeader"
import ConnectWallet from "./connectWallet"
import TokenBalance from "./tokenBalance"
// import NewNfts from "./newNfts"
import TokenConverter from "./tokenConverter"
import DepositeModal from "./depositeModal"
import WithDrawModal from "./withDrawModal"
import NewNftSlider from "./newNftSlider"
import DashboardHeader from "../Dashboard/dashboardHeader"


import "./nftDashboard.css"


const  NftDashboard=()=> {
    return (
        <div className="NFT-background-color">
            <DashboardHeader/>
            {/* <NftDashboardHeader/> */}
            <ConnectWallet/>
            <TokenBalance/>
            <TokenConverter/>
            {/* <NewNfts/> */}
            <DepositeModal/>
            <WithDrawModal/>
            <NewNftSlider/>
        </div>
    )
}

export default NftDashboard;
