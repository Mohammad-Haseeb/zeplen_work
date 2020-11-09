import React from 'react'
import Signup from './Signup';
import Login from './Login'
import ReservationPage from './ReservationComponents/Reservation'
import { Routes, Route} from 'react-router-dom';



function SentInvoices() {
  return <>  <ReservationPage/>
  </>
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="Login" element={< Login/>} />
      <Route path="Login/Reserver" element={<SentInvoices />} />
    </Routes>
  );
}
export default App;
