import React from 'react'
import Signup from './Signup';
import Login from './Login'
import { Routes, Route, Link,useNavigate } from 'react-router-dom';

function App() {
    let navigate = useNavigate();
  return (
      
    <>
      
        <Routes>
       <Route path="/" element={<Signup />} />
       <Route path="login" element={< Login/>} />
       </Routes>
  </>
  );
}

export default App;
