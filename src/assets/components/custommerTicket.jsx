import EveryTicket from "./everyTicket";
import ResovedTickets from "./resovedTickets";
import TaskStatus from "./taskStatus";
const CustommerTicket = ({
  loadComplete,
  toast,
  tickets,
  handleTicket,
  handleComplete,
  isComplete,
  completedTickets,
  isPending,
  totalCompleted,
  removeFromResolved,
}) => {
  return (
    <div className="lg:p-5">
      <div className="flex flex-col-reverse lg:flex-row   justify-between">
        <div className="lg:w-[75%] px-5">
        <h1 className="text-xl opacity-80 font-semibold my-2">
        Customer Tickets
      </h1>
          <div className="lg:grid grid-cols-2 gap-4">
            {tickets.map((ticket) => (
            <EveryTicket
              key={ticket.id}
              ticket={ticket}
              handleTicket={handleTicket}
            ></EveryTicket>
          ))}
          </div>
        </div>
        <div className="lg:w-[25%]">
          <h1 className="text-xl opacity-80 font-semibold ms-3 my-2">
            Task Status
          </h1>
          <p className="ms-3 text-lg opacity-70 mb-8">
            {!isPending ? "Select a ticket to add to Task Status" : ""}
          </p>
          <div className="bg-white  rounded-xl">
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
          <h1 className="text-xl opacity-80 font-semibold ms-3 my-2">
            Resolved Task
          </h1>
          <p className="ms-3 text-lg opacity-70">
            {totalCompleted.length === 0 ? "No resolved task yet" : ""}
          </p>
          {totalCompleted.map((resolved) => (
            <ResovedTickets
              key={resolved.id}
              resolved={resolved}
              removeFromResolved={removeFromResolved}
            ></ResovedTickets>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustommerTicket;
