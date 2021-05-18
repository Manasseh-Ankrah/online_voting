import React, {useState} from 'react'
import IconLabelButtons from "../Login_Page/Button";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1.2),
        width: 350,
      },
    },
  }));



function Admin_Form() {
    const classes = useStyles();

    const [studentId,setStudentId] = useState("");
    const Password = "admin123";
    return (
        <div>
            <form className={classes.root}  noValidate autoComplete="off">
        <div className="admin__textbox">
          <TextField
            type= "password"
            label="Enter Password"
            value={studentId}
            onChange={(e)=> setStudentId(e.target.value)}
            variant="outlined"
            size="small"
          />
          {/* {studentId === Password 
           ?   */}
            <div className="entryform__btn">
           <Link to="/admin_page" style={{textDecoration: "none"}}> 
             <IconLabelButtons title="Login" /> 
           </Link>
         </div>

          {/* : <div className="entryform__btn">
            <IconLabelButtons title="Login" /> 
        </div> } */}
        
        </div>
      </form>
            
        </div>
    )
}

export default Admin_Form;
