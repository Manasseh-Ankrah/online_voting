import React from "react";
import "./Message.css";
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import {CheckCircleOutlineRounded} from "@material-ui/icons";


function Message() {
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
    <Paper className="alert_wraper">
      <div className="alert">
        <div className="alert__content">
          <h3 className="success">VOTE WAS SUCCESSFUL!</h3>
          <CheckCircleOutlineRounded className="check"/>
        </div>

        <div className="entryform__btn">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div>
              <Button variant="contained" color="primary" size="large">
                Logout
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </Paper>
    </div>
  );
}

export default Message;
