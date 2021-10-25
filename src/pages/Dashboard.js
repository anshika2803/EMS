import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Admin from "../components/Admin";
import DashboardFooter from "../components/DashboardFooter";

const Dashboard = () => {
  return (
    <div className="">
      {/* <div className="flex flex-wrap overflow-hidden max-h-full ">
        <Sidebar />
        <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6  mt-16">
          <div className="my-2">
            <h1 className="text-2xl">Home</h1>
          </div>
          
          <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
           
          </div>
        </div>
      </div> */}
      <Navbar />
      <Sidebar />
      <Admin />
      <DashboardFooter />
    </div>
  );
};

export default Dashboard;
