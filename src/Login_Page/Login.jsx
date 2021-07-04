import React from 'react';
import './Login.css';
import {Paper} from '@material-ui/core';
import TextFieldSizes from './Login_Form';


function Login() {
    return (
        <Paper className="paper">
                <div className="login">
                <div className="login__textfield">
                    <TextFieldSizes />
                </div>       
            </div> 
        </Paper>
    )
}

export default Login;
