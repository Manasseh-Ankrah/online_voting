import React, {useState,useEffect} from 'react';
import './Admin_Form.css';
import IconLabelButtons from "../Login_Page/Button";
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import {db} from "../config";

function Admin_Form() {
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
            <form noValidate autoComplete="off">
        <div className="admin__textbox">
          <TextField
            className="admin_form"
            type= "password"
            label="Enter Password"
            value={adminPass}
            onChange={(e)=> setAdminPass(e.target.value)}
            variant="outlined"
            size="small"
          />
          { parseInt(adminPass) === admin[0].password 
           ?  
            <div className="admin_btn" onClick={()=> setAdminPass("")}>
           <Link to="/admin_page" style={{textDecoration: "none"}}> 
             <IconLabelButtons title="Login"/> 
           </Link>
         </div>
            : <div className="admin_btn">
              <IconLabelButtons title="Login" /> 
         </div> 
         } 
        
        </div>
      </form>
            
        </div>
    )
}

export default Admin_Form;
