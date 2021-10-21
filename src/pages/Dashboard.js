import React from "react";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="">
      <div className="flex flex-wrap overflow-hidden max-h-full ">
        <Sidebar />
        <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6  mt-16">
          <div className="my-2">
            <h1 className="text-sm text-red-800">Home</h1>
          </div>
          {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
          <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
            {/* Place your content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
