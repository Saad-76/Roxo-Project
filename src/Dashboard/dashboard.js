import React from "react";
import "./dashboard.css";
import Welcome from "./welcome";
// import PlayGames from "./playGames";
import DashboardHeader from "./dashboardHeader";

const Dashboard = () => {
  return (
    <div>
      <DashboardHeader/>
      <Welcome />
      {/* <PlayGames /> */}
    </div>
  );
};

export default Dashboard;
