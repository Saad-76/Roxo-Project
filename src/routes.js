import React from "react";
import HomePage from "./HomePage/homePage";
import Login from "./Login/login";
import SignUp from "./SignUp/signUp";
import Dashboard from "./Dashboard/dashboard";
import { BrowserRouter as Router, Route, Redirect ,Switch} from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path="/homepage" component={HomePage}>
          <HomePage />
        </Route>
        <Route path="/signUp" component={SignUp}>
          <SignUp />
        </Route>
        <Route path="/login" component={Login}>
          <Login />
        </Route>
        <Route path="/dashboard" component={Dashboard}>
          <Dashboard />
        </Route>
        <Redirect  to="/homepage" />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
