import React, { Fragment, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router";
import MobileNav from "./MobileNav";

function Header() {
  const [isToggle,setisToggle]=useState(false)
  return (
    <>
      <div className="flex justify-between  items-center px-6 py-5">
        <div className="">
          <Link to={"/"}>
            {" "}
            <img src="/logo.png" alt="" />
          </Link>
        </div>
        <div className="hidden md:block">
          <nav className="flex list-none gap-[25px] cursor-pointer">
            <li>
              {" "}
              <Link to="/about"> About </Link>
            </li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>Help</li>
          </nav>
        </div>
        <div className="hidden md:flex gap-5">
          <button className="bg-red-200 px-5 py-2 rounded-2xl hover:bg-red-600 cursor-pointer">
            Log in
          </button>
          <button className="bg-red-200 px-5 py-2 rounded-2xl hover:bg-red-600 cursor-pointer">
            Sign up
          </button>
        </div>

        <CiMenuBurger className=" md:hidden text-2xl" onClick={()=>setisToggle(!isToggle)}/>
        {isToggle && <MobileNav />}
      </div>
    </>
  );
}

export default Header;
