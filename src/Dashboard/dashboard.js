import React from "react";
import "./dashboard.css";
import Welcome from "./welcome";
// import PlayGames from "./playGames";
import DashboardHeader from "./dashboardHeader";
import EarningModal from "./earningsModal"
import VideoModal from "./videoModal"
import RoxoPlay from "./roxoPlay"



const Dashboard = () => {
  return (
    <div>
      <DashboardHeader/>
      <Welcome />
      <RoxoPlay/>
      {/* <PlayGames /> */}
      <EarningModal/>
      <VideoModal/>
    
    </div>
  );
};

export default Dashboard;
