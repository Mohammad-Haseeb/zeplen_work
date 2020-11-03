import React from 'react';
import "./Login.css";
import Forms from './Forms';

function Login(){
    
    return(
        <div className="wrapper">
           <div className="form-wrapper">
               <h1>Login To Manage Your Parking</h1>
              
                <div className="CenterilzeFields"><Forms/></div>
                  
           </div>
        </div>
    );
}
export default Login;