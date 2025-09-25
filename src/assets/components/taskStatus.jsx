import React from "react";

const TaskStatus = ({ handleComplete, openedTicket, completedTickets }) => {
  const { title, id } = openedTicket;
  const isComplete = completedTickets.includes(id);
  return (
    <div className="p-5 flex flex-col gap-3 shadow-sm mb-3">
      <p className="text-xl">{title}</p>
      <button
        onClick={() => handleComplete(openedTicket)}
        disabled={isComplete}
        className={`btn ${
          isComplete ? "bg-white !text-[#02A53B]" : "bg-[#02A53B]"
        } text-white`}
      >
        Complete
      </button>
    </div>
  );
};

export default TaskStatus;
