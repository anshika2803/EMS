import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Admin from "../components/Admin";
import DashboardFooter from "../components/DashboardFooter";

const Dashboard = () => {
  return (
    <div className="">
      
      <Navbar />
      <Sidebar />
      <Admin />
      <DashboardFooter />
    </div>
  );
};

export default Dashboard;
