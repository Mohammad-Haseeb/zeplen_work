import React from 'react';
import "./Login.css";
import Forms from './LoginFrom';
function Login(){
    
    return(
        <div className="wrapper">
           <div className="Loginform-wrapper">
               <h1>Login To Manage Your Parking</h1>
              
                <div className="CenterilzeFields"><Forms/></div>
                  
           </div>
        </div>
    );
}
export default Login;