import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./assets/components/banner";
import CustommerTicket from "./assets/components/custommerTicket";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavBar from "./assets/components/navBar";
import TaskStatus from "./assets/components/taskStatus";
import Toast from "./assets/components/ToastContainer";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [tickets, setTickets] = useState([]);
  const [openedTickets, setOpenTickets] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [totalCompleted, setTotalCompleted] = useState([]);
  const [count, setCount] = useState(0);
  const [loadComplete, setLoadComplete] = useState([]);
  const [completedTickets, setCompletedTickets] = useState([]);
  const [isPending,setIsPending] = useState(false);
  useEffect(() => {
    fetch("/ticketData.json")
      .then((res) => res.json())
      .then((data) => {
        setTickets(data);
      });
  }, []);
  const handleTicket = (thisTicket) => {
    thisTicket.status = "In Progress";
    setIsPending(true)
    !openedTickets.includes(thisTicket)?
      setOpenTickets([...openedTickets, thisTicket]):
      toast.warn('Already In Progress !', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
});;
    
    if(!openedTickets.includes(thisTicket)){
      setLoadComplete([...openedTickets, thisTicket]);
    }
  };
  const handleComplete = (thisTicket) => {
    setCompletedTickets([...completedTickets, thisTicket.id]);
    setIsComplete(true);
    setCount(count + 1);
    setTotalCompleted([...totalCompleted, thisTicket]);
    const copyOfTickets = [...tickets];
    const removeItem = thisTicket.id;
    const index = copyOfTickets.findIndex((ticket) => ticket.id === removeItem);
    if (index !== -1) {
      copyOfTickets.splice(index, 1);
      setTickets(copyOfTickets);
    }
    const copyOfOpenedTickets = [...openedTickets];
    const removeItemFromTask = thisTicket.id;
    const indexOfTask = copyOfOpenedTickets.findIndex(
      (ticket) => ticket.id === removeItemFromTask
    );

    if (indexOfTask !== -1) {
      copyOfOpenedTickets.splice(indexOfTask, 1);
      setOpenTickets(copyOfOpenedTickets);
    }
    toast.success("Completed!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
const removeFromResolved = (thisTicket) => {
  const totalResolved = [...totalCompleted]
  const removeItemFromResolved = thisTicket.id;
    const indexOfRemoveItem = totalResolved.findIndex((ticket) => ticket.id === removeItemFromResolved);
    if (indexOfRemoveItem !== -1) {
      totalResolved.splice(indexOfRemoveItem, 1);
      setTotalCompleted(totalResolved);
    }
  console.log(totalResolved)
}
  return (
    <>
      <ToastContainer />
      <NavBar></NavBar>
      <Banner openedTickets={openedTickets} count={count}></Banner>
      <CustommerTicket
        setTickets={setTickets}
        openedTickets={openedTickets}
        toast={toast}
        handleComplete={handleComplete}
        tickets={tickets}
        handleTicket={handleTicket}
        isComplete={isComplete}
        loadComplete={loadComplete}
        completedTickets={completedTickets}
        totalCompleted={totalCompleted}
        isPending={isPending}
        removeFromResolved={removeFromResolved}
      ></CustommerTicket>
    </>
  );
}

export default App;
