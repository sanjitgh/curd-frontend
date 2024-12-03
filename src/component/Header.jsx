import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-500 text-white">
      <div className="container mx-auto px-3 py-4">
        <div className="navbar">
          <div className="flex-1">
            <NavLink to={"/"} className="text-3xl font-bold">
              Gym
            </NavLink>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 gap-5 font-medium text-base">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-orange-400 font-bold" : ""
                }
                to={"/"}
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-orange-400 font-bold" : ""
                }
                to={"/addschedule"}
              >
                Add Schedule
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-orange-400 font-bold" : ""
                }
                to={"/allschedule"}
              >
                All Schedule
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-orange-400 font-bold" : ""
                }
                to={"/signin"}
              >
                SignIn
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
