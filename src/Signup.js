import React, {  useState} from "react";
import "./App.css";
import {  useNavigate,} from "react-router-dom";




let LoginButton=()=>{
  let navigate =useNavigate();
  return(
  <div className="Login">
  <button onClick={()=>{navigate('Login')}}>Login in Here</button>

</div>
);
}



 
//  In below line we write the expression to check email validation
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;


  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

 function Signup  (){
  let navigate=useNavigate();
  const [state, setstate] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,

    phone: null,
    formErrors: {
      firstName: "",
      lastName: "",
      email: "",
      dob:"",
      phone:"",
      password: ""
    }
  });
  
 
  
  let handleSubmit = e => {
    
    e.preventDefault();
    navigate("/Login/Reserver")
            // We are calling formValid function to check form validation
    if (formValid(state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${state.firstName}
        Last Name: ${state.lastName}
        Email: ${state.email}
        Phone: ${state.phone}
        Password: ${state.password}
        
      `);
      setstate(state)
       
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }

  
  };

 let handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    
    let formErrors = { ...state.formErrors };

      // In below contions we are checking length of characters
    switch (name) {
      case "firstName":
formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
 
        case "phone":
          formErrors.phone =
            value.length < 3 ? "minimum 3 characaters required" : "";
          break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }
      
  };
 
  

  const { formErrors } = state;

    return (
      
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account To Manage Your Parking</h1>
          <form onSubmit={handleSubmit} >
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                minLength="3"
                maxLength="19"
                onChange={handleChange}
                required
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                minLength="3"
                maxLength="19"
                onChange={handleChange}
                required
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
           
            
            <div className="phone">
              <label htmlFor="phone">Contact Number</label>
              <input
                className={formErrors.phone.length > 0 ? "error" : null}
                placeholder="Phone Number"
                type="text"
                name="phone"
                minLength="7"
                maxLength="19"
                onChange={handleChange}
                required
              />
              {formErrors.phone.length > 0 && (
                <span className="errorMessage">{formErrors.phone}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                onChange={handleChange}
                required
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={handleChange}
                minLength="2"
                maxLength="9"
                required
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button  type="submit" >Create Account</button>
              <large>OR</large>
             
               <LoginButton/>
            </div>
           
          </form>
      
        </div>
      </div>
    );
  }


export default Signup;