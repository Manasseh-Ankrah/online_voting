import React from 'react';
import "./Header.css";
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ArrowBack';
import AdminPage from '@material-ui/icons/ExitToApp';
import {Link} from 'react-router-dom';


function Header() {
    return (
        <div className="header">
          <div>
          <IconButton>
            <Link to ="/">
              <ExitToAppIcon className="header__left"/>
            </Link>
          </IconButton>
          </div>

          <div>
          <IconButton>
            <Link to ="/admin_login">
              <AdminPage className="header__right"/>
            </Link>
          </IconButton>
          </div>

        </div>
    )
}

export default Header;
