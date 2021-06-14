import React, {useState,useEffect} from 'react'
import IconLabelButtons from "../Login_Page/Button";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import {db} from "../config";

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
    const [adminPass,setAdminPass] = useState("");
    const [admin,setAdmin] = useState([{"password" : ""}]);


    useEffect(()=> {
      callResponse();
    },[]);


    
  const callResponse = () => {
    try {
      db.collection('admin-password').onSnapshot((query)=> {
        setAdmin(
          query.docs.map( info => ({
            password: info.data().password,
          }))
        );
      })
    } catch (error) {
    console.log("error occured")
  }
}
  
    return (
        <div>
            <form className={classes.root}  noValidate autoComplete="off">
        <div className="admin__textbox">
          <TextField
            type= "password"
            label="Enter Password"
            value={adminPass}
            onChange={(e)=> setAdminPass(e.target.value)}
            variant="outlined"
            size="small"
          />
          { parseInt(adminPass) === admin[0].password 
           ?  
            <div className="entryform__btn" onClick={()=> setAdminPass("")}>
           <Link to="/admin_page" style={{textDecoration: "none"}}> 
             <IconLabelButtons title="Login"/> 
           </Link>
         </div>
            : <div className="entryform__btn">
              <IconLabelButtons title="Login" /> 
         </div> 
         } 
        
        </div>
      </form>
            
        </div>
    )
}

export default Admin_Form;
