import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

import  blogIcon  from "../Assests/3D-ICONS/Blog Icon/bloger 256.png";
import  discordIcon  from "../Assests/3D-ICONS/Discord icon/main 256.png";
import  teleIcon  from "../Assests/3D-ICONS/Telegram/main 256.png";
import twitterIcon  from "../Assests/3D-ICONS/Twitter Icon/main 256.png";

const Footer = () => {
  return (
    <>
    <div className="footer-component-style">
    <div className="col-md-12 footer-grid"> 

        <div className=" col-md-6 footer-icons-style">
            
        <Link> <img src={blogIcon} height="35px"/>Blog</Link>
            <Link><img src={discordIcon} height="35px"/>Discord</Link>
            <Link><img src={twitterIcon} height="35px"/>Twitter</Link>
            <Link><img src={teleIcon} height="35px"/>Telegram</Link>
            </div>
<div className="col-md-6 footer-copyright" >
            <p>Copyright @2022 ROXO, All rights reserved.</p>
</div>
    </div>
    </div>

  
    </>
  );
};

export default Footer;
