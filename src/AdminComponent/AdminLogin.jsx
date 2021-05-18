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

<Paper className="adminlogin">
      <AdminHeader />
        <div className="adminlogin__form">
            <div className="login__textfield">
                <Admin_Form />
            </div>       
        </div>
        </Paper>
    );

  
}
