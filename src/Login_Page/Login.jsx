import React, { useContext } from 'react';
import './Login.css';
import {Paper} from '@material-ui/core';
import TextFieldSizes from './Login_Form';
import { AppContext } from '../ContextApi/Context';
import AuthModal from '../Modals/AuthModal';
// import school_logo from '../img/IMG1.jfif';


function Login() {
    const {Alert} = useContext(AppContext);
    const [contextModal,setContextModal] = Alert;

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
