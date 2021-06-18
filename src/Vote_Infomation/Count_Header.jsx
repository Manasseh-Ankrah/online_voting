import React from 'react';
import "./Count_Header.css";
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ArrowBack';
import {Link} from 'react-router-dom';


function Count_Header() {
    return (
        <div className="count_header">
            <div>
               <IconButton>
                  <Link to ="/admin_page">
                     <ExitToAppIcon className="count_header__icon"/>
                  </Link>
               </IconButton>
            </div>
        </div>
    )
}

export default Count_Header;
