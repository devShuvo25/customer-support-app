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
   const [tickets,setTickets] = useState([]);
   const [openedTickets,setOpenTickets] = useState([]);
   const [isComplete,setIsComplete] = useState(false);
      useEffect(() => {
           fetch('../../../public/ticketData.json')
          .then((res) => res.json())
          .then((data) => {
             setTickets(data);
          })
  
      },[]);
        const handleTicket = (thisTicket) => {
      setOpenTickets([...openedTickets,thisTicket])
      setIsComplete(false);
      console.log(isComplete);
    }

    const handleComplete = (thisTicket) => {
        setIsComplete(true);
        console.log(thisTicket)
        const copyOfTickets = [...tickets];
                const removeItem = thisTicket.id;
                const index = copyOfTickets.findIndex(ticket => ticket.id === removeItem);
        if(index !== -1){
            copyOfTickets.splice(index, 1)
            setTickets(copyOfTickets)
        }

        
    toast.success('Completed!', {
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
  return (
    <>
      <ToastContainer/>
      <NavBar></NavBar>
      <Banner openedTickets={openedTickets}></Banner>
      <CustommerTicket setTickets={setTickets}
       openedTickets={openedTickets} toast={toast}
       handleComplete={handleComplete} tickets={tickets} handleTicket={handleTicket}
       isComplete={isComplete}></CustommerTicket>
    </>
  );
}

export default App;
