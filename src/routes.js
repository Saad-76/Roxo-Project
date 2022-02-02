import React from "react";
import HomePage from "./HomePage/homePage";
import Login from "./HomePage/login"
import SignUp from "./HomePage/signUp"

import Dashboard from "./Dashboard/dashboard";
import NftDashboard from "./NFT-Dashboard/nftDashboard"
import OurGames from "./OurGames/ourGames"
import ContactUs from "./More/contactUs"
import Careers from "./Careers/careers"
import Engineering from "./Careers/engineering"
import Art from "./Careers/art"
import Design from "./Careers/design"
import Operation from "./Careers/operation"
import Other from "./Careers/other"





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
        <Route path="/ourgames" component={OurGames}>
          <OurGames />
        </Route>
        <Route path="/contactus" component={ContactUs}>
          <ContactUs />
        </Route>
        <Route path="/careers" component={Careers}>
          <Careers />
        </Route>

        <Route path="/engineering" component={Engineering}>
          <Engineering />
        </Route>
         <Route path="/design" component={Design}>
          <Design />
        </Route>
        <Route path="/art" component={Art}>
          <Art />
        </Route>
        <Route path="/operation" component={Operation}>
          <Operation />
        </Route>
        <Route path="/other" component={Other}>
          <Other />
        </Route>
        
        


        {/* -----------------Private-------- */}
        <Route path="/dashboard" component={Dashboard}>
          <Dashboard />
        </Route>
        <Route path="/nftdashboard" component={NftDashboard}>
          <NftDashboard />
        </Route>
        <Redirect  to="/homepage" />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
