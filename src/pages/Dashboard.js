import React from "react";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";

const Dashboard = () => {
  return (
    <div className="">
      <DashboardHeader />
      <div className="flex flex-wrap overflow-hidden max-h-full bg-blueGray-900 ">
        <Sidebar />
        <div className="p-1 h-screen  mx-auto w-5/6  bg-blueGray-100">
          <div className="my-1">
            <h1 className="text-3xl text-gray-700 font-medium ml-2">
              Dashboard
            </h1>
            <div className="w-full flex flex-row m-0">
              <div className=" h-32 w-80 m-2 mb-0 p-0 bg-cyan-400 text-white">
                <h1 className=" text-4xl m-2">2</h1>
                <p className="text-xl m-2">Total Tests</p>
                <div className="bottom-0 flex justify-center items-center bg-cyan-500 mt-4">
                  <span>more info</span>
                </div>
              </div>
              <div className=" h-32 w-80 m-2 bg-green-600 text-white">
                <h1 className=" text-4xl m-2">18</h1>
                <p className="text-xl m-2">Total Test Package</p>
                <div className="bottom-0 flex justify-center items-center bg-green-700 mt-4">
                  <span>more info</span>
                </div>
              </div>
              <div className=" h-32 w-80 m-2 bg-orange-400 text-white">
                <h1 className=" text-4xl m-2">4</h1>
                <p className="text-xl m-2">User Registrations</p>
                <div className="bottom-0 flex justify-center items-center bg-orange-500 mt-4">
                  <span>more info</span>
                </div>
              </div>
              <div className=" h-32 w-80 m-2 bg-red-500 text-white">
                <h1 className=" text-4xl m-2">7</h1>
                <p className="text-xl m-2">Total Questions</p>
                <div className="bottom-0 flex justify-center items-center bg-red-600 mt-4">
                  <span>more info</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
