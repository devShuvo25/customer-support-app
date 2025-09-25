import {faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const EveryTicket = () => {
  return (
    <div className="w-[100%] lg:w-[510px] shadow-sm bg-white p-5 rounded-xl">
      <div className="flex justify-between items-center">
        <h1 className="text-[18px] text-xl lg:text-2xl">
          Login Issues - Can't Access Account
        </h1>
        <a
          className="font-bold text-gray-600 flex gap-2 items-center bg-[#B9F8CF] py-3 rounded-[50px] px-6"
          href=""
        >
          <div className="h-[20px] w-[20px] bg-green-600 rounded-[50%]"></div>
          Open
        </a>
      </div>
      <div>
        <p className="opacity-70 my-2">
          Customer is unable to log in to their account. They've tried resetting
          their password multiple times but still...
        </p>
      </div>
      <div className="lg:flex justify-between my-2">
        <div className="flex justify-between  gap-3">
          <p>#101</p>
          <p className="text-red-500">High Priority</p>
        </div>
        <div className="flex justify-between gap-3 opacity-70">
          <p>Michel Brown</p>
          <p>
            <FontAwesomeIcon className="opacity-70" icon={faCalendarWeek} />
            01/15/2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default EveryTicket;
