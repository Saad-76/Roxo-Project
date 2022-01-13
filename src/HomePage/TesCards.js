import React from "react";
import Tescards from "../shared/components/Tescards";
import Quotepic from "../Assests/games.jpg";
import { FaStar, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./Tescards.css";
const TesCards = () => {
  const Rightscrol = () => {
    document.getElementById("containe").scrollLeft += 430;
  };
  const Leftscrol = () => {
    document.getElementById("containe").scrollLeft -= 430;
  };

  return (
    <div className="tes-card" id="containe">
      <button onClick={Leftscrol} className="tes-btn">
        <FaArrowLeft size={45} />
      </button>
      <button onClick={Rightscrol} className="tes-btn1">
        <FaArrowRight size={45} />
      </button>

      <Tescards
        tesicon={<img src={Quotepic }  height='150px'/>}
        tesheading="Njoki Githua"
        tesheading1="Reviewed Kenya Exports"
        testext="Very convenient and reliable, got my
          stuff on time and in perfect
          condition.Thank you kenya exports"
      />
      <Tescards
        tesicon={<img src={Quotepic} />}
        tesheading="Masha Salim"
        tesheading1="Reviewed Kenya Exports"
        testext="Very efficient and reliable team kenex
          exports guys are,keep up the gud job."
      />
      <Tescards
        tesicon={<img src={Quotepic} />}
        tesheading="Mukami Kigamba"
        tesheading1="Reviewed Kenya Exports"
        testext="Efficient and reliable service keep it up
          guys."
      />
      <Tescards
        tesicon={<img src={Quotepic} />}
        tesheading="Lillian Munyui"
        tesheading1="Reviewed Kenya Exports"
        testext="Reliable and friendly you are the best."
      />
      <Tescards
        tesicon={<img src={Quotepic} />}
        tesheading="Sally Wanjiru"
        tesheading1="Reviewed Kenya Exports"

        testext="I highly recommend this to people
          who has never used them.  Try them &
          you'll never regret."
      />
    </div>
  );
};

export default TesCards;
