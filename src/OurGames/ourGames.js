import React from 'react';
import FirstGame from "./firstGame"
import SecondGame from "./secondGame"
import Header from "../HomePage/header"
import Footer from "../HomePage/footer"
import Slider from "../HomePage/slider"


const OurGames=()=> {
  return (
      <>
      <Header/>
      <Slider/>
<FirstGame/>
<SecondGame/>
<Footer/>
      </>
  );
}

export default OurGames;
