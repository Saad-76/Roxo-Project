import React from 'react';
import FooterLeft from "../Assests/FooterLeft.png"
import FooterRight from "../Assests/FooterRight.png"
import { Link } from "react-router-dom";

import  blogIcon  from "../Assests/3D-ICONS/Blog Icon/bloger 256.png";
import  discordIcon  from "../Assests/3D-ICONS/Discord icon/main 256.png";
import  teleIcon  from "../Assests/3D-ICONS/Telegram/main 256.png";
import twitterIcon  from "../Assests/3D-ICONS/Twitter Icon/main 256.png";

import "./footer.css"




const  Footer=()=> {
  return (
    <>
    <div className="col-md-12 footer-flex">
<div className="col-md-4">
<img src={FooterLeft} height="450px" width="450px"  />
</div>
<div className="col-md-4">

            <div className="footer-icons-style">
              <div>
            <Link> <img src={blogIcon} height="35px"/>Blog</Link>
                <Link><img src={discordIcon} height="35px"/>Discord</Link>
                <Link><img src={twitterIcon} height="35px"/>Twitter</Link>
                <Link><img src={teleIcon} height="35px"/>Telegram</Link>
                </div>
                <p>Copyright @2022 ROXO, All rights reserved.</p>
                </div>

</div>
<div className="col-md-4">
<img src={FooterRight} height="450px" width="450px"  />
</div>

    </div>
    </>

  );
}

export default Footer;
