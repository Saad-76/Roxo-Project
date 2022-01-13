import React from 'react'
import HomePage from "./HomePage/homePage"
import Login from "./Login/login"
import SignUp from "./SignUp/signUp"
import {BrowserRouter as Router , Route, Redirect} from "react-router-dom"

const  Routes= ()=> {
    return (
        <>
<Router>
<Route path="/homepage" component={HomePage}>  < HomePage/>  </Route>  
<Route path="/signUp" component={SignUp}>  < SignUp/>  </Route>   
<Route path="/login" component={Login}>  < Login/>  </Route>   



<Redirect exact  to="/homepage"/>
</Router>

  </>
    )
}

export default Routes ;
