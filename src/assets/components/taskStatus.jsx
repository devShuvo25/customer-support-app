import React from "react";
import Toast from "./ToastContainer";

const TaskStatus = ({ handleComplete,openedTicket,isComplete }) => {
  const { title } = openedTicket;
  return (
    <div className="p-5 flex flex-col gap-3 shadow-sm mb-3">
      <p className="text-xl">{title}</p>

      <button
        onClick={() => handleComplete(openedTicket)}
        className={`btn ${isComplete? "bg-white":"bg-[#02A53B]"} text-white`}
      >Complete
      </button>
    </div>
  );
};

export default TaskStatus;
