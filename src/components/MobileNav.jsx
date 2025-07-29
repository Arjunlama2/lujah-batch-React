import React from "react";
import { Link } from "react-router";

function MobileNav(props) {
  return (
    <div className=" md:hidden fixed  top-16 bg-black/60  h-[100vh] w-full " onClick={()=>props.setisToggle(false)}>
      <div className="fixed  right-0 top-16  h-full bg-red-500 w-1/2 text-white"  onClick={(e) => e.stopPropagation()}>
        <nav className="flex flex-col gap-4 list-none items-center "  >
          <li>
            {" "}
            <Link to="/about"> About </Link>
          </li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>Help</li>
          <button className="bg-red-200 px-5 py-2 rounded-2xl hover:bg-red-600 cursor-pointer">
            Log in
          </button>
          <button className="bg-red-200 px-5 py-2 rounded-2xl hover:bg-red-600 cursor-pointer">
            Sign up
          </button>
        </nav>
      </div>
    </div>
  );
}

export default MobileNav;
