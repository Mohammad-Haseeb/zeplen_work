import React,{useState} from 'react';
import {
    fade,
    
    withStyles,
    makeStyles,
    
  } from '@material-ui/core/styles';
  import InputBase from '@material-ui/core/InputBase';
  import InputLabel from '@material-ui/core/InputLabel';
  import DateFnsUtils from '@date-io/date-fns';
  import Grid from '@material-ui/core/Grid';
  import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  
   
  


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
  

export default function Form(){
  
    
  const classes = useStyles();

    
    const [selectedStartTime, setSelectedStartTime] = React.useState(new Date('2014-08-18T21:11:54'));
    const [selectedEndTime, setSelectedEndTime] = React.useState(new Date('2014-08-18T21:11:54'));
    const [selectedStartDate, setSelectedStartDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [selectedEndDate, setSelectedEndDate] = React.useState(new Date('2014-08-18T21:11:54'));
    let   [registrationNumber,setRegistrationNumber]=useState(897345);
    let [allotedNumber,setAllotedNumber]=useState(1); 
    

    function daysDiff(d1, d2) {
      let date1 = new Date(d1);
      let date2 = new Date(d2);
      let diff = date2.getTime() - date1.getTime();
      let msInDay = 1000 * 3600 * 24;
 
          return diff/msInDay;
    }
  
     const handleEndTimeChange =(date)=>{
            setSelectedEndTime(date);
     }
    const handleStartTimeChange = (date) => {

      setSelectedStartTime(date);
    };

    const handleStartDatechange=(date)=>{
      setSelectedStartDate(date)
    }
    const handleEndDateChange=(date)=>{
      setSelectedEndDate(date)
    }
    const Validate=(e)=>{

      e.preventDefault();
      // In below contion we are ensuring  Selected end Date should be Greater than Start Date
      if(selectedEndDate.getTime()>=selectedStartDate.getTime() ){
        // In below Condition we are checking user can only reserve for one month 31 days.We are calling 
        // function daysDiff to check month condtion 
         if (daysDiff(selectedStartDate,selectedEndDate)<32){
            setRegistrationNumber(++registrationNumber);
            setAllotedNumber(++allotedNumber);
        }
        else{
               
              alert("You can only reserve it for one month");
         }
      }
    else{
      alert ("You did not select dates in Right way.Your selected end date is less than Start Date")
    }
    }
    
    return(
           <>
                 
     <form className={classes.root} onSubmit={Validate}>
      
     
           
          <InputLabel shrink htmlFor="bootstrap-email" className="labeling">
           Registration Number
         </InputLabel>
         <BootstrapInput type="number"  value={registrationNumber} id="bootstrap-email" disabled/>
         <InputLabel shrink htmlFor="bootstrap-email" className="labeling">
           Alloted Number
         </InputLabel>
         <BootstrapInput type="email" value={allotedNumber}  id="bootstrap-email" disabled/>
           
      
       <Grid container justify="space-around">
       <MuiPickersUtilsProvider utils={DateFnsUtils}>
     
      
     <KeyboardTimePicker
       margin="normal"
       id="time-picker"
       label="Select Start Time"
       value={selectedStartTime}
       onChange={handleStartTimeChange}
       KeyboardButtonProps={{
         'aria-label': 'change time',
         
       }}
       required
     />
     <KeyboardTimePicker
       margin="normal"
       id="time-picker"
       label="Select End Time"
       value={selectedEndTime}
       onChange={handleEndTimeChange}
       KeyboardButtonProps={{
         'aria-label': 'change time',
         
       }}
       required
     />
     <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Select Start Date"
          format="MM/dd/yyyy"
          value={selectedStartDate}
          onChange={handleStartDatechange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
            
          }}
          required
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Select End Date"
          format="MM/dd/yyyy"
          value={selectedEndDate}
          onChange={handleEndDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
           
          }}
          required
        />
   
 </MuiPickersUtilsProvider>
       
 </Grid>
     
    
    <br/>
    
   
    <input type="submit"  value="Submit"/>
    
   
  </form>


           </>
    );
}