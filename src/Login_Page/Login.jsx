import React from 'react';
import './Login.css';
import {Paper} from '@material-ui/core';
import TextFieldSizes from './Login_Form';
// import school_logo from '../img/IMG1.jfif';


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
