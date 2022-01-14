import React from "react";
import "./dashboard.css";
import Welcome from "./welcome";
import PlayGames from "./playGames";

const Dashboard = () => {
  return (
    <div>
      <Welcome />
      <PlayGames />
    </div>
  );
};

export default Dashboard;
