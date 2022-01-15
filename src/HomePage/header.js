import { React, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logoPic from "../Assests/25.png";
import coinPic from "../Assests/3.png";

import  blogIcon  from "../Assests/3D-ICONS/Blog Icon/bloger 256.png";
import  discordIcon  from "../Assests/3D-ICONS/Discord icon/main 256.png";
import  teleIcon  from "../Assests/3D-ICONS/Telegram/main 256.png";
import twitterIcon  from "../Assests/3D-ICONS/Twitter Icon/main 256.png";
import careerIcon  from "../Assests/3D-ICONS/Career Icon/front 256.png";
import contactIcon  from "../Assests/3D-ICONS/Contact Us Icon/main 256.png";
import WhiteIcon  from "../Assests/whitePaper.png";
import Glowcoin  from "../Assests/glowCoin.png";

import { AiFillCaretDown, AiFillCaretLeft } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import Logo from "../Assests/3.png";

const Header = () => {
  // ---------------------Login-Form-Code------------------------------------------
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
   
    formError: "",
  });
  const handleRegister = () => {
    if (user.name !== "" && user.email !== "" && user.rollNumber !== "") {

      // setUserArr([...userArr, user]);
      setUser({ email: "", password: ""});
      setError({ error, formError: "" });


    } else {
      setError({ error, formError: "Fill all fields" });
    }
  };


  // -------------------------------Login-Form-Code-End------------------------------
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
            <img src={logoPic} height="70px"></img>
            <h5>ROXO</h5>
          </div>
        </Link>
        <Link>OUR GAMES</Link>
        <Link>NEWS</Link>
        <Link> 
        <div className="hover-coin">         
        <img className="glowCoin" src={Glowcoin} height="50px"></img>
          <div className="coin-logo">
            <img src={coinPic} height="70px"></img>
            <p>$0.0025</p>
          </div>
          </div>
        </Link>
        <Link className="dropbtn">
          OUR COMMUNITY <AiFillCaretDown size={10} />
          <div class="dropdown-content">

            <Link> <img src={blogIcon} height="20px"/>Blog</Link>
            <Link><img src={discordIcon} height="20px"/>Discord</Link>
            <Link><img src={twitterIcon} height="20px"/>Twitter</Link>
            <Link><img src={teleIcon} height="20px"/>Telegran</Link>

          </div>
        </Link>
        <Link className="dropbtn1">
          MORE
          <AiFillCaretDown size={10} />
          <div class="dropdown-content1">
            <Link><img src={contactIcon} height="20px"/>Support</Link>
            <Link><img src={careerIcon} height="20px"/>Careers</Link>
            <Link><img src={WhiteIcon} height="20px"/>White Paper</Link>
            <Link><img src={contactIcon} height="20px"/>Contact Us</Link>
          </div>
        </Link>
        {/* <Link  to="/login"> */}
        <button data-bs-toggle="modal" data-bs-target="#exampleModal">
          GAME EARNINGS
        </button>
        {/* </Link> */}
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
          <Link className="nav-links-1 single " id="target2" href="#tools">
            <AiFillCaretLeft size={15} />
            <div class="dropdown-content">

            <Link> <img src={blogIcon} height="20px"/>Blog</Link>
            <Link><img src={discordIcon} height="20px"/>Discord</Link>
            <Link><img src={twitterIcon} height="20px"/>Twitter</Link>
            <Link><img src={teleIcon} height="20px"/>Telegran</Link>
          </div>
              <p>OUR COMMUNITY</p>
            </Link>
          </div>
          <div className="slide-down">
            <Link className="nav-links-2 single" id="target3" href="#news">
            <AiFillCaretLeft size={15}/>

            <div class="dropdown-content1">
              <Link><img src={contactIcon} height="20px"/>Support</Link>
              <Link><img src={careerIcon} height="20px"/>Careers</Link>
              <Link><img src={contactIcon} height="20px"/>Contact Us</Link>
              <Link><img src={WhiteIcon} height="20px"/>White Paper</Link>
            </div>
            <p>MORE</p>{" "}
          </Link>
        </div>
        <div className="slide-down">
          <Link className="nav-links single " to="/login">
            {" "}
            <p>GAME EARNINGS</p>{" "}
          </Link>
        </div>
      </div>
      {/* --------------------- Login-Form-Modal-Code ----------- */}
      <div
        class="modal fade "
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <div className="login-form-style-roxo">
                <div className="col-md-6 login-image-side">
                  <h4 className="login-form-heading"> Welcome to ROXO </h4>
                  <img
                    className="login-image"
                    src={Logo}
                    alt="logologin"
                    height="250px"
                    width="250px"
                  />
           
                  {/* <Link to="/signUp"> */}
                    <button className="register-button-loginForm display: none"  data-bs-toggle="modal"
            data-bs-target="#Data"  >
                      Sign Up!
                    </button>
                  {/* </Link> */}
                </div>
                <div className="col-md-6 login-form-display">
                  <div>
                    <h3 className="login-fields-heading">
                      Login to your Account
                    </h3>
                  </div>
                  <div className="login-input-fiedls">
                    <input
                      className="input-email-login"
                      type="email"
                      placeholder="Email"
                      value={user.email}
                      onChange={(e) => {
                        setUser({ ...user, email: e.target.value });
                      }}

                    />

                    <input
                      className="input-password-login"
                      type="password"
                      placeholder="Password"
                      value={user.password}
                      onChange={(e) => {
                        setUser({ ...user, password: e.target.value });
                      }}
                    />

                  </div>
                <button className="login-button-style" onClick={handleRegister}>  <Link to="/dashboard"> Login </Link></button> 
                {error.formError && <p> {error.formError}</p>}

                  <div className="forget-password">
                    <p>Forgot Password</p>
                  </div>
                  <p className="have-account">Don’t you have an account?</p>
                  <p className="register-now">
                    <Link to="/signUp"> Register Now! </Link>
                  </p>
                  {/* <p className="bottom-text-login">It’s really simple
            become part of ROXO Network!
          </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------Login-Form-Modal-Code-End-------------- */}




      {/* ----------------SignUp-Form-Modal-Code-End-------------- */}












    </div>
  );
};

export default Header;
