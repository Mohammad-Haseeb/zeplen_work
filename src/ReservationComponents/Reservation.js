import React  from 'react';
import Form from './ReservationFrom';
import "./ReservationFrom.css"


export default function ReservationPage(){
    return(
        <>
         < div className="wrapper">
           <div className="form-wrapper">
               <h1>Reservation System</h1>
                 
                <div className="CenterilzeFields"><Form/></div>
                  
           </div>
        </div>  
       
        </>
    );
}