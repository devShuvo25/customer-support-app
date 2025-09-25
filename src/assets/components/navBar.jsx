import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="navbar justify-between h-[78px] shadow-sm xl:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <h1 className="text-black lg:font-bold text-lg lg:text-2xl">Ticket Bridge</h1>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="flex justify-between gap-5">
        <ul className="hidden lg:flex justify-between items-center gap-10 ">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">ChangeLog</a>
          </li>
          <li>
            <a href="">Download</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <div className="">
          <a className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] border-none text-white">
            <FontAwesomeIcon icon={faPlus} />
            New Ticket
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
