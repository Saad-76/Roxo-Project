import React from "react";
import Tescards from "../shared/components/Tescards";
import Quotepic from "../Assests/games.jpg";
import Controllers from '../Assests/gameController.png'
import { FaStar, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./Tescards.css";
const TesCards = () => {
  const Rightscrol = () => {
    document.getElementById("containe").scrollLeft += 430;
  };
  const Leftscrol = () => {
    document.getElementById("containe").scrollLeft -= 430;
  };

  return (<>
    <div className="cards-nav">
      <img src={Controllers} height='50'/>
      <h1>Games</h1>
    </div>
    <div className="tes-card" id="containe">
      <button onClick={Leftscrol} className="tes-btn">
        <FaArrowLeft size={22.5} />
      </button>
      <button onClick={Rightscrol} className="tes-btn1">
        <FaArrowRight size={22.5} />
      </button>

      <Tescards
        tesicon={<img src={Quotepic }  height='150px'/>}
        tesheading="Temple Game"
        tesheading1="Reviewed "
        testext="Very convenient and reliable, got my
          stuff on time and in perfect
          condition.Thank you kenya exports"
      />
      <Tescards
        tesicon={<img src={Quotepic} />}
        tesheading="Running Game"
        tesheading1="Reviewed "
        testext="Very efficient and reliable team kenex
          exports guys are,keep up the gud job."
      />
      <Tescards
        tesicon={<img src={Quotepic} />}
        tesheading="Sa Game"
        tesheading1="Reviewed "
        testext="Efficient and reliable service keep it up
          guys."
      />
      <Tescards
        tesicon={<img src={Quotepic} />}
        tesheading="Data Game"
        tesheading1="Reviewed "
        testext="Reliable and friendly you are the best."
      />
      <Tescards
        tesicon={<img src={Quotepic} />}
        tesheading="Fighting Game"
        tesheading1="Reviewed "

        testext="I highly recommend this to people
          who has never used them.  Try them &
          you'll never regret."
      />
    </div></>
  );
};

export default TesCards;
