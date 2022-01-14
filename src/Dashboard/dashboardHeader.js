import React from 'react'
import Logo from "../Assests/25.png"
import {FiSettings} from "react-icons/fi"
import "./dashboardHeader.css";
import {Link } from "react-router-dom"
const  DashboardHeader=()=> {
    return (
        
       <div className="header-login col-sm-12">
      <div className="header-login-logo"><img src={Logo} height="70px"></img>
            <h5>ROXO</h5></div>
      <div className='header-dash-setting'>< FiSettings size={35}/>
      <h6>User Name</h6>
      <button >  <Link to="/homepage"> Log out </Link></button>
      </div>
    </div>
       
    )
}

export default DashboardHeader;
