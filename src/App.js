import React from 'react'
import Signup from './Signup';
import Login from './Login'
import { Routes, Route} from 'react-router-dom';

function App() {
    
  return (
      
    <>
      
        <Routes>
       <Route path="/" element={<Signup />} />
       <Route path="Login" element={< Login/>} />
       </Routes>
  </>
  );
}

export default App;
