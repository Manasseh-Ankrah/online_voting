import React,{useState} from 'react';
import "./AdminLogin.css";
import AdminHeader from './AdminHeader';
import Admin_Form from "./Admin_Form";
import {Paper} from '@material-ui/core';


export default function AdminLogin() {
  {/* <h3  className="adminlogin__title">Welcome ADMIN!! <br/> Enter Password to see votes</h3> 

<Paper className="paper">
  <div className="login">
  <div className="login__textfield">
  <TextFieldSizes />
  </div>       
  </div>
</Paper> */}
  
    return (
 <div className="adminlogin">
       <AdminHeader /> 
         <div className="adminlogin__title__div">
              <h3 className="adminlogin__title">Welcome ADMIN</h3> 
              <p  className="adminlogin__text">Enter password to see votes</p>
              <hr className="adminlogin__underline"/>
          </div>
     <Paper className="adminlogin_paper">
            <div className="login__textfield">
                <Admin_Form />
            </div>       
        </Paper>
        </div>
    );

  
}
