import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

import  blogIcon  from "../Assests/3D-ICONS/Blog Icon/bloger 256.png";
import  discordIcon  from "../Assests/3D-ICONS/Discord icon/main 256.png";
import  teleIcon  from "../Assests/3D-ICONS/Telegram/main 256.png";
import twitterIcon  from "../Assests/3D-ICONS/Twitter Icon/main 256.png";

import FooterLeft from "../Assests/FooterLeft.jpeg"
import FooterRight from "../Assests/FooterRight.jpeg"


const Footer = () => {
  return (
    <>
    <div className="footer-component-style">
    <div className=" footer-grid"> 

<div className="col-md-12 flex-style">
<div className="col-md-4">
  <img src={FooterLeft} height="400px" width="400px"  />
</div>
<div className="col-md-4 links-style">
        {/* <div className=" col-md-6 footer-icons-style"> */}
            
        {/* <Link> <img src={blogIcon} height="35px"/>Blog</Link>
            <Link><img src={discordIcon} height="35px"/>Discord</Link>
            <Link><img src={twitterIcon} height="35px"/>Twitter</Link>
            <Link><img src={teleIcon} height="35px"/>Telegram</Link> */}
            {/* </div> */}
{/* <div className="col-md-6 footer-copyright" > */}
            {/* <p>Copyright @2022 ROXO, All rights reserved.</p> */}
{/* </div> */}
    </div>
</div>
<div className="col-md-4">
<img src={FooterRight} height="400px" width="400px"  />
</div>
</div>

    </div>

  
    </>
  );
};

export default Footer;
