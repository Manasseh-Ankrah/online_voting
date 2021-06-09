import React from 'react';
import "./Results_Header.css";
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ArrowBack';
import {Link} from 'react-router-dom';


function Results_Header() {
    return (
        <div className="results_header">
            <div>
               <IconButton>
                  <Link to ="/main_results">
                     <ExitToAppIcon className="results_header__icon"/>
                  </Link>
               </IconButton>
            </div>
        </div>
    )
}

export default Results_Header;
