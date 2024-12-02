import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto px-3">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Gym</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-5">
            <Link to={"/"}>Home</Link>
            <Link to={"/signin"}>SignIn</Link>
            <Link to={"/signup"}>SignUp</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
