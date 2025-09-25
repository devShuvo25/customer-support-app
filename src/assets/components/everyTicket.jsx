import {faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const EveryTicket = ({ticket,handleTicket}) => {
  const {title,description,customer,status,priority,createdAt} = ticket;
  return (
    <div onClick={() => handleTicket(ticket)} className="w-[100%]  shadow-sm bg-white p-5 rounded-xl">
      <div className="flex justify-between items-center">
        <h1 className="text-[18px] text-xl lg:text-2xl">
          {title}
        </h1>
        <a
          className={`font-bold text-gray-600 flex gap-2 items-center ${status === "Open" ? "bg-[#B9F8CF]": "bg-[#F8F3B9]"} py-3 rounded-[50px] px-6`}
          href=""
        >
          <div className={`h-[20px] w-[20px] ${status === "Open" ? "bg-green-500": "bg-[#FEBB0C]"} rounded-[50%]`}></div>
          {status}
        </a>
      </div>
      <div>
        <p className="opacity-70 my-2">
         {description}
        </p>
      </div>
      <div className="lg:flex justify-between my-2">
        <div className="flex justify-between  gap-3">
          <p className="opacity-70">#101</p>
          <p className="text-red-500">{priority}</p>
        </div>
        <div className="flex justify-between gap-3 opacity-70">
          <p>{customer}</p>
          <p>
            <FontAwesomeIcon className="opacity-70" icon={faCalendarWeek} />
            {createdAt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EveryTicket;
