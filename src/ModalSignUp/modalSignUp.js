import  {React, useState}  from 'react'
import "./modalSignUp.css"
import Logo from "../Assests/3.png";

import {Link} from "react-router-dom"

const  ModalOpen=()=> {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
      });
    return (
        <div>
                 {/* <div>
             <button  data-bs-toggle="modal"
            data-bs-target="#Data" > Saad</button>
        </div> */}
               <div
      class="modal fade"
      id="Data"
      tabindex="-1"
      aria-labelledby="DataLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
         
          <div class="modal-body">
         


          <div className="signup-form-style">
      <div className="col-md-12 row login-divs">
        <div className="col-md-6 signup-image-side">
   
          <h4 >SignUp</h4>

          <img
          
                    src={Logo}
                    alt="logologin"
                    height="250px"
                    width="250px"
                  />
        </div>
        <div className="col-md-6 display-signup-style">
          <div>
            <h4 className="signup-fields-heading">SignUp to your Account</h4>
          </div>

          <form>
            <input
              type="text"
              className="signup-name-login"
              placeholder="Name"
              value={user.name}
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
              }}
            />
            <br />
            <br />

            <input
              type="email"
              className="signup-email-login"
              placeholder="Email"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
            <br />
            <br />

            <input
              type="password"
              placeholder="New Password"
              className="signup-password-login"
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
            <br />
            <br />

          <button className="signup-button-style">  <Link to="/homepage"> Sign Up</Link> </button>
          </form>

          <p className="signup-have-account">Don’t you have an account?</p>
          <p className="signup-register-now">
            {/* <Link to="/homepage" > Login </Link> */}
          </p>
        </div>
      </div>



          </div>
       
      
        </div>
      </div>
    </div>


    </div>  
    </div>  

    )
}

export default ModalOpen;
