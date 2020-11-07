import React from 'react'
import Signup from './Signup';
import Login from './Login'
import { Routes, Route} from 'react-router-dom';
import firebase from './FirebaseConfig';

function App() {
  console.log(firebase.database);
  firebase.database.ref('Student').set("Ali");
    
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
