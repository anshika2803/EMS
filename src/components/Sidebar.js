import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const sidebarList = [
    {
      name: "Home",
      notificationCount: 0,
      link: "",
    },
    { name: "Profile", notificationCount: 2, link: "dashboard" },
    { name: "Listed Spaces", notificationCount: 0, link: "listedspaces" },

    { name: "Interested Customers", notificationCount: 0, link: "" },
    { name: "Add Space", notificationCount: 0, link: "addspace" },
    { name: "Calendar", notificationCount: 0, link: "dashboard" },
    { name: "Payments", notificationCount: 0, link: "payments" },
  ];

  const [open, setOpen] = useState(false);
  // console.log(open);
  return (
    <>
      {/* Sidebar starts */}
      {/* Remove className [ hidden ] and replace [ sm:flex ] with [ flex ] */}
      <div
        className={`${
          open ? "sm:flex" : "hidden"
        }  w-1/6 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between  sm:flex h-screen pb-72 bg-white`}
      >
        <div className="px-3 ">
          <div className="w-full mt-1.5 flex items-center flex-col">
            <div className=" w-12 h-12">
              <img
                className="rounded-full border border-gray-100 shadow-sm"
                src="https://randomuser.me/api/portraits/women/81.jpg"
                alt="user "
              />
            </div>
            <div className=" h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>

            <span className="text-sm">uid</span>
          </div>
          <ul className="mt-12">
            {sidebarList.map((item, index) => {
              return (
                <Link to={`/${item.link}`}>
                  <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
                    <div className="flex items-center">
                      {item.icon}
                      <span className="text-sm text-red-800 ml-2">
                        {item.name}
                      </span>
                    </div>
                    {item.notificationCount > 0 && (
                      <div className="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">
                        {item.notificationCount}
                      </div>
                    )}
                  </li>
                </Link>
              );
            })}
            <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <Link to="/login">
                  <span className="text-sm  ml-2">Logout</span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className=" relative sm:relative bg-gray-800 shadow md:h-full flex-col justify-between flex sm:hidden">
        <div className="absolute -right-4 bg-gray-800 shadow px-1">
          <button onClick={() => setOpen(!open)}></button>
        </div>
      </div>
      {/* <div
        className={`${
          open ? "flex" : "hidden"
        } w-64 z-40 absolute bg-gray-800 shadow md:h-full flex-col justify-between sm:hidden  transition duration-150 ease-in-out`}
        id="mobile-nav"
      >
        <div
          className="h-10 w-10 bg-gray-800 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer"
          id="mobile-toggler"
          onClick={() => setOpen(!open)}
        >
          <FiMenu className="text-white" />
        </div>
        <div className="px-8">
          <div className="h-16 w-full flex items-center">
            <h1 className="text-4xl text-white">Name</h1>
          </div>
          <ul className="mt-12">
            {sidebarList.map((item, index) => {
              return (
                <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
                  <div className="flex items-center">
                    <span className="text-sm  ml-2">{item.name}</span>
                  </div>
                  {item.notificationCount > 0 && (
                    <div className="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">
                      {item.notificationCount}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="flex justify-center mt-48 mb-4 w-full">
            <div className="relative ">
              <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-search"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx={10} cy={10} r={7} />
                  <line x1={21} y1={21} x2={15} y2={15} />
                </svg>
              </div>
              <input
                className=" bg-gray-700 focus:outline-none rounded w-full text-sm text-gray-500 bg-gray-100 pl-10 py-2"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="px-8 border-t border-gray-700">
          <ul className="w-full flex items-center justify-between bg-gray-800">
            <li className="cursor-pointer text-white pt-5 pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-bell"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
              </svg>
            </li>
            <li className="cursor-pointer text-white pt-5 pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-messages"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
              </svg>
            </li>
            <li className="cursor-pointer text-white pt-5 pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-settings"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <circle cx={12} cy={12} r={3} />
              </svg>
            </li>
            <li className="cursor-pointer text-white pt-5 pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-archive"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x={3} y={4} width={18} height={4} rx={2} />
                <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                <line x1={10} y1={12} x2={14} y2={12} />
              </svg>
            </li>
          </ul>
        </div>
      </div> */}
      {/* Sidebar ends */}
      {/* Remove className [ h-64 ] when adding a card block */}
    </>
  );
};

export default Sidebar;
