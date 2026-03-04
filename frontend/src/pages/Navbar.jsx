import React from "react";

export default function Navbar() {
  const navItem = ["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"];
  return (
    <div className="navbar bg-base-100 shadow-sm mx-auto">
      <div className="navbar-start lg:ml-12">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItem.map((item) => (
              <li>
                <a>{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Smart Service</a>
      </div>
      <div className="navbar-end lg:mr-12">
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItem.map((item) => (
              <li>
                <a>{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <button class="btn text-white bg-gradient-to-br from-[#5B3FD3] via-[#6D4EDB] to-[#8B5CF6]">
          + New Ticket
        </button>
      </div>
    </div>
  );
}
