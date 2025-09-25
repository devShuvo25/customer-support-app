
import './App.css'
import Banner from './assets/components/banner'
import CustommerTicket from './assets/components/custommerTicket'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavBar from './assets/components/navBar'
import TaskStatus from './assets/components/taskStatus'

function App() {
  return (
   <>
   <NavBar></NavBar>
   <Banner></Banner>
   <CustommerTicket></CustommerTicket>
   <TaskStatus></TaskStatus>
   </>
   
  
  )
}

export default App
