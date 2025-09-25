import EveryTicket from "./everyTicket";
import TaskStatus from "./taskStatus";
const CustommerTicket = ({
  loadComplete,
  toast,
  tickets,
  handleTicket,
  handleComplete,
  isComplete,
  completedTickets,
}) => {
  return (
    <div className="lg:p-5">
      <h1 className="text-xl opacity-80 font-semibold ms-5 lg:ms-10 my-2">
        Task Status
      </h1>
      <div className="flex flex-col-reverse lg:flex-row  justify-between">
        <div className="lg:w-[75%] px-5 lg:grid grid-cols-2 gap-4">
          {tickets.map((ticket) => (
            <EveryTicket
              key={ticket.id}
              ticket={ticket}
              handleTicket={handleTicket}
            ></EveryTicket>
          ))}
        </div>
        <div className="lg:w-[25%]">
          <h1 className="text-xl opacity-80 font-semibold ms-3 my-2">
            Task Status
          </h1>
          <div className="bg-white p-5 rounded-xl">
            {loadComplete.map((openedTicket) => (
              <TaskStatus
                key={openedTicket.id}
                openedTicket={openedTicket}
                toast={toast}
                handleComplete={handleComplete}
                completedTickets={completedTickets}
                isComplete={isComplete}
              ></TaskStatus>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustommerTicket;
