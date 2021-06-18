import React from 'react';
import "./Results_Header.css";
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ArrowBack';
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';


function Results_Header() {
    return (
        <div className="results_header">
               <IconButton className="results_header__cont">
                  <Link to ="/main_results">
                     <ExitToAppIcon className="results_header__icon"/>
                  </Link>
               </IconButton>
               <Link to ="/total_votes" style={{textDecoration:"none"}}>
               <Button
                      className="btn"
                      variant="contained"
                      color="primary"
                      size="large"
                   >
                     View more
                  </Button>
                  </Link>
        </div>
    )
}

export default Results_Header;
