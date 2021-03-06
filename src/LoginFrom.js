import React,{useState,useContext} from 'react';
import {
  fade,
  
  withStyles,
  makeStyles,
  
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import {  useNavigate } from "react-router-dom";
import idProvider from './DataGlobalization/DataProvider';







const BootstrapInput = withStyles((theme) => ({
  
  root: {
    'label + &': {
      marginBottom: theme.spacing(2),
      width:"100%",

    },
  },
  input: {
    
    borderRadius: 12,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '100%',
    padding: '10px 10px',
    paddingRight:"auto",
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);





const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    marginBottom: theme.spacing(0),
  },
}));


export default function Forms() {
  const GloballyIdSet = useContext(idProvider)

  const classes = useStyles();
   const [ID, setID] = useState("");
   let navigate=useNavigate();
   const [Password, setPassword] = useState("")
  //  In validation Function we're checking validation of forms
   const Validate=()=>{
     setPassword(Password)
            setID(ID);
             GloballyIdSet[1](ID);
           navigate('Reserver');
   }
  return (
     <>
    <form className={classes.root} onSubmit={Validate}>
      
     
      
        <InputLabel shrink htmlFor="bootstrap-email">
          Name
        </InputLabel>
        <BootstrapInput type="email" placeholder="Abc@gmail.com"  onChange={(e)=>{setID(e.target.value)}} id="bootstrap-email"  required/>
        
      
        <InputLabel shrink htmlFor="bootstrap-password">
           Password
        </InputLabel>
        <BootstrapInput type="Password" placeholder="Password"  onChange={(e)=>{setPassword(e.target.value)}} id="bootstrap-password" required/>
            
      
      <br/>
      
     
      <input type="submit"  value="Submit"/>
      
     
    </form>
  
    </>
    
  );
}
