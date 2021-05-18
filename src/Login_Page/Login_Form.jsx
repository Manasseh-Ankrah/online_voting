import React,{useState,useContext} from 'react';
import "./Login_Form.css";
import IconLabelButtons from "./Button";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1.2),
      width: 350,
    },
  },
}));


export default function TextFieldSizes() {
  const classes = useStyles();
  const [studentId,setStudentId] = useState("");
  const Password = "admin";


  
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <div className="entryform">
          <TextField
            type= "password"
            label="Enter Id"
            value={studentId}
            onChange={(e)=> setStudentId(e.target.value)}
            variant="outlined"
            size="small"
          />
          
          {studentId === Password 
           ?   <div className="entryform__btn">
           <Link to="/main_vote" style={{textDecoration: "none"}}>
             <IconLabelButtons title="Login" /> 
           </Link>
         </div>
          : <div className="entryform__btn">
            <IconLabelButtons title="Login" /> 
        </div> }
        
        </div>
      </form>
    );

  
}
