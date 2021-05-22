import React from 'react';
import "./AdminHeader.css";
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ArrowBack';
import {Link} from 'react-router-dom';


function AdminHeader() {
    return (
        <div className="adminheader">
            <div>
               <IconButton>
                  <Link to ="/main_vote">
                     <ExitToAppIcon className="adminheader__icon"/>
                  </Link>
               </IconButton>
            </div>
        </div>
    )
}

export default AdminHeader;
