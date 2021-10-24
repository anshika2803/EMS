import React from "react";

const DashboardHeader = () => {
  return (
    <div className="top-0 h-16 bg-green-600 w-full">
      <div className="flex justify-between">
        <div className="w-full mt-1 flex items-center  flex-row ml-28">
          <div className="w-14 h-14 flex bg-white items-center justify-center">
            LOGO
          </div>
        </div>
        <div>
          <div className="w-full mr-2 mt-1.5 flex items-center flex-row">
            <div className=" w-12 h-12">
              <img
                className="rounded-full border border-gray-100 shadow-sm"
                src="https://randomuser.me/api/portraits/women/81.jpg"
                alt="user "
              />
            </div>
            <div className="ml-2">
              <h1 className="text-lg font-normal text-white">Akash</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
