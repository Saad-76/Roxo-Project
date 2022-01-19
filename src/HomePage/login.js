import {React, useState}  from 'react'
import Logo from "../Assests/3.png";

import { Modal } from "react-bootstrap";
import "./login.css";

import { Link } from "react-router-dom";

import SignUp from "./signUp";

const Login = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const SignUpHandler = () => {
    setModalShow(true);
    props.onHide();
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
   
    formError: "",
  });
  const handleRegister = () => {
    if (user.name !== "" && user.email !== "" && user.rollNumber !== "") {

      setUser({ email: "", password: ""});
      setError({ error, formError: "" });


    } else {
      setError({ error, formError: "Fill all fields" });
    }
  };


  return (
    <>
      <Modal 
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal_main  "
      >
        <Modal.Body className="modal-padding " >
        <div className="col-md-12">
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
                    <button className="register-button-loginForm "  onClick={SignUpHandler}  >
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
        </Modal.Body>
      
      </Modal>
      <SignUp show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};
export default Login;
