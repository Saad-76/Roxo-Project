import React from "react";
import "../../HomePage/Tescards.css";

const Tescards = (props) => {
  return (
    <div className="colum">
        <div class="tes-scr">
          <div className="tes-icon"><a>{props.tesicon}</a></div>
        <h4>
          {props.tesheading}
          </h4>
          <h6>{props.tesheading1}</h6>
       

        <p className="text-tes text-align-center" style={{width:'400px'}}> {props.testext}</p>
        </div>
        </div>
     
  );
};

export default Tescards;
