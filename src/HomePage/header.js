import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logoPic from "../Assests/25.png";
import coinPic from "../Assests/3.png";
import { FaBloggerB, FaDiscord, FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { AiFillCaretDown, AiFillCaretLeft } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

const Header = () => {
    const slideOpen = () => {
        document.getElementById("mySidebar").style.display = "block";
      };
    
      const slideClose = () => {
        document.getElementById("mySidebar").style.display = "none";
      };
  return (
    <div className="header">
      <div className="header-nav col-md-12">
        <Link>
          <div className="logo-head">
            <img src={logoPic} height="50px"></img>
            <h5>ROXO</h5>
          </div>
        </Link>
        <Link>OUR GAMES</Link>
        <Link>NEWS</Link>
        <Link>
          <div className="coin-logo">
            <img src={coinPic} height="50px"></img>
            <p>$0.0025</p>
          </div>
        </Link>
        <Link className="dropbtn">
          OUR COMMUNITY <AiFillCaretDown size={10} />
          <div class="dropdown-content">
            <Link> <FaBloggerB size={20}/>Blog</Link>
            <Link><FaDiscord size={20}/>Discord</Link>
            <Link><FaTwitter size={20}/>Twitter</Link>
            <Link><FaTelegramPlane size={20}/>Telegran</Link>
          </div>
        </Link>
        <Link className="dropbtn1">
          MORE
          <AiFillCaretDown size={10} />
          <div class="dropdown-content1">
            <Link>Support</Link>
            <Link>Careers</Link>
            <Link>White Paper</Link>
            <Link>Contact Us</Link>
          </div>
        </Link>
        <Link>
          <button>GAME EARNINGS</button>
        </Link>
      </div>
      <div className="header-nav-sml col 12">
        <Link>
          <div className="logo-head">
            <img src={logoPic} height="50px"></img>
            <h5>ROXO</h5>
          </div>
        </Link>
        <Link>
          <div className="coin-logo">
            <img src={coinPic} height="50px"></img>
            <p>$0.0025</p>
          </div>
        </Link>
        <Link>
          <button className="menu-btn" onClick={slideOpen}>
            <FiMenu size={35} />
          </button>
        </Link>
      </div>
      <div className="slides" id="mySidebar">
          <div className="slide-down-1" onClick={slideClose}>
            <p>Close</p>
          </div>
          <div className="slide-down">
            <Link className="nav-links  single active " href="#homepage">
              <p> OUR GAMES </p>
            </Link>
          </div>
          <div className="slide-down">
            <Link className="nav-links  single active " href="#vision">
              <p>NEWS </p>{" "}
            </Link>{" "}
          </div>
          <div className="slide-down">
            <Link
              className="nav-links-1 single "
              id="target2"
              href="#tools"
            ><AiFillCaretLeft size={15}/>
            <div class="dropdown-content">
            <Link> <FaBloggerB size={20}/>Blog</Link>
            <Link><FaDiscord size={20}/>Discord</Link>
            <Link><FaTwitter size={20}/>Twitter</Link>
            <Link><FaTelegramPlane size={20}/>Telegran</Link>
          </div>
              <p>OUR COMMUNITY</p>
            </Link>
          </div>
          <div className="slide-down">
            <Link className="nav-links-2 single" id="target3" href="#news">
            <AiFillCaretLeft size={15}/>
            <div class="dropdown-content1">
            <Link>Support</Link>
            <Link>Careers</Link>
            <Link>Contact Us</Link>
            <Link>White Paper</Link>
          </div>
              <p>MORE</p>{" "}
            </Link>
          </div>
          <div className="slide-down">
            <Link className="nav-links single " href="#partners">
              {" "}

              <p>GAME EARNINGS</p>{" "}
            </Link>
          </div>          
        </div>
    </div>
  );
};

export default Header;
