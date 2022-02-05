import React from 'react';
import FirstGame from "./firstGame"
import SecondGame from "./secondGame"
import Header from "../HomePage/header"
import Footer from "../HomePage/footer"
import Slider from "../HomePage/slider"


const OurGames=()=> {
  return (
      <>
      <div className="background-color-main">
      <Header/>
      <Slider/>
<FirstGame/>
<SecondGame/>
<Footer/>
</div>
      </>
  );
}

export default OurGames;
