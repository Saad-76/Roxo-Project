import React from "react";
import "./engineering.css";
import CareersHome from "./careersHome"
import Path from "./path"
import Header from "../HomePage/header"
import Footer from "../HomePage/footer"
import CardProp from "./cardProp"

const Engineering = () => {
  return (
    <>
    <Header/>
    <CareersHome/>
    <Path/>
    <div className="container">
      {/* <h1>Engineering</h1> */}
      <div className="row">
        <div className="col-md-6 column-style">
        <CardProp
headLg="Senior 3D Animator"
headSm="ANIMATION,  SEOUL,  "
content="Developer with 6 months experience."
button="Apply"

/>
        </div>
        <div className="col-md-6 column-style">
        <CardProp
headLg="Senior 3D Animator"
headSm="ANIMATION,  SEOUL,  "
content="Developer with 6 months experience."
button="Apply"

/>

        </div>
        <div className="col-md-6 column-style">
        <CardProp
headLg="Senior 3D Animator"
headSm="ANIMATION,  SEOUL,  "
content="Developer with 6 months experience."
button="Apply"

/>

        </div>
        <div className="col-md-6 column-style">
        <CardProp
headLg="Senior 3D Animator"
headSm="ANIMATION,  SEOUL,  "
content="Developer with 6 months experience."
button="Apply"

/>

        </div>
      </div>

      </div>
      <Footer/>

    </>
  );
};

export default Engineering;
