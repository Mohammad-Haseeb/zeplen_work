import React,{useState} from 'react'
import Signup from './Signup';
import Login from './Login'
import ReservationPage from './ReservationComponents/Reservation'
import { Routes, Route} from 'react-router-dom';
import idProvider from './DataGlobalization/DataProvider';



function App() {
  const idOfUser= useState("No value");
  function SentInvoices() {
    return  <ReservationPage/>;
  
  }
  
  return (
    <idProvider.Provider value={idOfUser}>    
      <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="Login" element={< Login/>} />
      <Route path="Login/Reserver" element={<SentInvoices />} />
    </Routes>
    </idProvider.Provider>

  );
}
export default App;
