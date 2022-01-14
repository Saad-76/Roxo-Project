import { React, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logoPic from "../Assests/25.png";
import coinPic from "../Assests/3.png";
import {
  FaBloggerB,
  FaDiscord,
  FaTwitter,
  FaTelegramPlane,
} from "react-icons/fa";
import { AiFillCaretDown, AiFillCaretLeft } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import Logo from "../Assests/3.png";

const Header = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
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
            <Link>
              {" "}
              <FaBloggerB size={20} />
              Blog
            </Link>
            <Link>
              <FaDiscord size={20} />
              Discord
            </Link>
            <Link>
              <FaTwitter size={20} />
              Twitter
            </Link>
            <Link>
              <FaTelegramPlane size={20} />
              Telegran
            </Link>
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
              <Link>
                {" "}
                <FaBloggerB size={20} />
                Blog
              </Link>
              <Link>
                <FaDiscord size={20} />
                Discord
              </Link>
              <Link>
                <FaTwitter size={20} />
                Twitter
              </Link>
              <Link>
                <FaTelegramPlane size={20} />
                Telegran
              </Link>
            </div>
            <p>OUR COMMUNITY</p>
          </Link>
        </div>
        <div className="slide-down">
          <Link className="nav-links-2 single" id="target3" href="#news">
            <AiFillCaretLeft size={15} />
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
          <Link className="nav-links single " to="/login">
            {" "}
            <p>GAME EARNINGS</p>{" "}
          </Link>
        </div>
      </div>
      {/* ---------------------Modal----------- */}
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
                  {/* <div className="logo-bottom-text"></div> */}
                  <Link to="/signUp">
                    {" "}
                    <button className="register-button-loginForm display: none">
                      Sign Up!
                    </button>{" "}
                  </Link>
                </div>
                <div className="col-md-6 login-form-display">
                  <div>
                    {" "}
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
                    />{" "}
                    {/* <br /> */}
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
                  {/* <br /> */}
                <button className="login-button-style">  <Link to="/dashboard"> Login </Link></button> 

                  <div className="forget-password">
                    {" "}
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
      {/* ------------------------------ */}
    </div>
  );
};

export default Header;
