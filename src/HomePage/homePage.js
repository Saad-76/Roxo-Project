import React from 'react'
import "./homePage.css"
import Header from "./header"
import Slider from "./slider"
import Games from "./games"
import Roxo from "./roxo"
import Vision from "./vision"
import Video from "./video"
import Play from "./play"
import TesCards from "./TesCards"
// import Footer from "./footer"



const HomePage=()=> {
    return (
        <div className="background-color-main">
            <Header/>
            <Slider/>
            <TesCards/>
            <Games/>
            <Roxo/>
            <Vision/>
            <Video/>
            <Play/>
            {/* <Footer/> */}
        </div>
    )
}

export default HomePage;
