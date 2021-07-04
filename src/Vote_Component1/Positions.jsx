import React, { useState, useContext } from "react";
import "./Positions.css";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import IconLabelButtons from "../Login_Page/Button";
import SaveIcon from '@material-ui/icons/Save';
import { Paper } from "@material-ui/core";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import firebase from "firebase";
import { db } from "../config";
import { AppContext } from '../ContextApi/Context';


function President() {
  const [president, setPresident] = useState("");
  const [vicePresident, setVicePresident] = useState("");
  const [secretary, setSecretary] = useState("");
  const [src, setSRC] = useState("");
  const [verified, setVerified] = useState(false);
  const [isVoted, setIsVoted] = useState(true);
  const {IndexNumber,BioData,StudentObject,IdVal} = useContext(AppContext);
  const [contextIndex,setContextIndex] = IndexNumber;
  const [contextBio,setContextBio] = BioData;
  const [contextStudentObj,setContextStudentObj] = StudentObject; 
  const [contextId,setContextId] = IdVal; 





  // console.log(process.env.REACT_APP_API_KEY )


  const handleSubmit = () => {
    if (president && vicePresident && src && secretary) {

      db.collection("online-voting").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        president: president,
        vicePresident: vicePresident,
        secretary: secretary,
        src: src,
        isVoted: isVoted,
        student_Id: contextIndex,
        student_Name: contextBio
      });

          db.collection("index-numbers").doc(contextId).set({
            voted: true
          },{ merge: true })

    } else {
      return;
    }

  };

  const toggleVerified = () => {
    if (president && vicePresident && src && secretary) {
      setVerified(true);
      console.log("VERIFIED IS TRUE")
    } else {
      setVerified(false);
      console.log("VERIFIED IS FALSE")

    }
};


  return (
    <div className="comp">
      <Paper className="paper__comp">
        <div className="president">
          <h3 className="president__title">President</h3>
          <FormControl component="fieldset" className="president__candidates">
            {/* <FormLabel component="legend">President</FormLabel> */}
            <RadioGroup
              className="align"
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                checked={president === "Manasseh Ankrah"}
                value="Manasseh Ankrah"
                control={<Radio color="primary" />}
                label="Manasseh Ankrah"
                labelPlacement="top"
                onClick={() => setPresident("Manasseh Ankrah")}
              />
            </RadioGroup>

            <RadioGroup
              className="align"
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                checked={president === "Mohammed Sogbe"}
                value="Mohammed Sogbe"
                control={<Radio color="primary" />}
                label="Mohammed Sogbe"
                labelPlacement="top"
                onClick={() => setPresident("Mohammed Sogbe")}
              />
            </RadioGroup>

            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                checked={president === "Ruby Bentil"}
                value="Ruby Bentil"
                control={<Radio color="primary" />}
                label="Ruby Bentil"
                labelPlacement="top"
                onClick={() => setPresident("Ruby Bentil")}
              />
            </RadioGroup>

            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                checked={president === "Dinah Ofooley"}
                value="Dinah Ofooley"
                control={<Radio color="primary" />}
                label="Dinah Ofooley"
                labelPlacement="top"
                onClick={() => setPresident("Dinah Ofooley")}
              />
            </RadioGroup>

            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                checked={president === "David Ankrah"}
                value="David Ankrah"
                control={<Radio color="primary" />}
                label="David Ankrah"
                labelPlacement="top"
                onClick={() => setPresident("David Ankrah")}
              />
            </RadioGroup>

            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                checked={president === "Judah Ankrah"}
                value="Judah Ankrah"
                control={<Radio color="primary" />}
                label="Judah Ankrah"
                labelPlacement="top"
                onClick={() => setPresident("Judah Ankrah")}
              />
            </RadioGroup>
          </FormControl>
        </div>
      </Paper>

      <hr />

      <Paper className="paper__comp">
        <div className="vicepresident">
          <h3 className="vicepresident__title">Vice-President</h3>
          <FormControl
            component="fieldset"
            className="vicepresident__candidates"
          >
            {/* <FormLabel component="legend">President</FormLabel> */}
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                checked={vicePresident === "Jonathan Bently"}
                value="Jonathan Bently"
                control={<Radio color="primary" />}
                label="Jonathan Bently"
                labelPlacement="top"
                onClick={() => setVicePresident("Jonathan Bently")}
              />
            </RadioGroup>

            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                checked={vicePresident === "Rosemond Adai"}
                value="Rosemond Adai"
                control={<Radio color="primary" />}
                label="Rosemond Adai"
                labelPlacement="top"
                onClick={() => setVicePresident("Rosemond Adai")}
              />
            </RadioGroup>

            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                checked={vicePresident === "Joseph Andoh"}
                value="Joseph Andoh"
                control={<Radio color="primary" />}
                label="Joseph Andoh"
                labelPlacement="top"
                onClick={() => setVicePresident("Joseph Andoh")}
              />
            </RadioGroup>

            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                checked={vicePresident === "George Amoni"}
                value="George Amoni"
                control={<Radio color="primary" />}
                label="George Amoni"
                labelPlacement="top"
                onClick={() => setVicePresident("George Amoni")}
              />
            </RadioGroup>

            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                checked={vicePresident === "Amanda Acquah"}
                value="Amanda Acquah"
                control={<Radio color="primary" />}
                label="Amanda Acquah"
                labelPlacement="top"
                onClick={() => setVicePresident("Amanda Acquah")}
              />
            </RadioGroup>

            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                checked={vicePresident === "Jude Benson"}
                value="Jude Benson"
                control={<Radio color="primary" />}
                label="Jude Benson"
                labelPlacement="top"
                onClick={() => setVicePresident("Jude Benson")}
              />
            </RadioGroup>
          </FormControl>
        </div>
      </Paper>

      <hr />

      <Paper className="paper__comp">
        <div className="src">
          <h3 className="src__title">SRC-President</h3>
          <FormControl component="fieldset" className="src__candidates">
            {/* <FormLabel component="legend">President</FormLabel> */}
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                checked={src === "Patience Ankrah"}
                value="Patience Ankrah"
                control={<Radio color="primary" />}
                label="Patience Ankrah"
                labelPlacement="top"
                onClick={() => setSRC("Patience Ankrah")}
              />
            </RadioGroup>

            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                checked={src === "Daniel Darko"}
                value="Daniel Darko"
                control={<Radio color="primary" />}
                label="Daniel Darko"
                labelPlacement="top"
                onClick={() => setSRC("Daniel Darko")}
              />
            </RadioGroup>

            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                checked={src === "Charlotte Adams"}
                value="Charlotte Adams"
                control={<Radio color="primary" />}
                label="Charlotte Adams"
                labelPlacement="top"
                onClick={() => setSRC("Charlotte Adams")}
              />
            </RadioGroup>

            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                checked={src === "Jeremy Westland"}
                value="Jeremy Westland"
                control={<Radio color="primary" />}
                label="Jeremy Westland"
                labelPlacement="top"
                onClick={() => setSRC("Jeremy Westland")}
              />
            </RadioGroup>

            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                checked={src === "Lois Essel"}
                value="Lois Essel"
                control={<Radio color="primary" />}
                label="Lois Essel"
                labelPlacement="top"
                onClick={() => setSRC("Lois Essel")}
              />
            </RadioGroup>

            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                checked={src === "Kendrick Lamar"}
                value="Kendrick Lamar"
                control={<Radio color="primary" />}
                label="Kendrick Lamar"
                labelPlacement="top"
                onClick={() => setSRC("Kendrick Lamar")}
              />
            </RadioGroup>
          </FormControl>
        </div>
      </Paper>

      <hr />

      <Paper className="paper__comp">
        <div className="secretary">
          <h3 className="secretary__title">Secretary</h3>
          <FormControl component="fieldset" className="secretary__candidates">
            {/* <FormLabel component="legend">President</FormLabel> */}
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                checked={secretary === "Mercy Appiah"}
                value="Mercy Appiah"
                control={<Radio color="primary" />}
                label="Mercy Appiah"
                labelPlacement="top"
                onClick={() => setSecretary("Mercy Appiah")}
              />
            </RadioGroup>

            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                checked={secretary === "Rose Prah"}
                value="Rose Prah"
                control={<Radio color="primary" />}
                label="Rose Prah"
                labelPlacement="top"
                onClick={() => setSecretary("Rose Prah")}
              />
            </RadioGroup>

            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                checked={secretary === "Jacob Davidson"}
                value="Jacob Davidson"
                control={<Radio color="primary" />}
                label="Jacob Davidson"
                labelPlacement="top"
                onClick={() => setSecretary("Jacob Davidson")}
              />
            </RadioGroup>

            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                checked={secretary === "Johnson Elaine"}
                value="Johnson Elaine"
                control={<Radio color="primary" />}
                label="Johnson Elaine"
                labelPlacement="top"
                onClick={() => setSecretary("Johnson Elaine")}
              />
            </RadioGroup>

            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                checked={secretary === "Nathaniel Essel"}
                value="Nathaniel Essel"
                control={<Radio color="primary" />}
                label="Nathaniel Essel"
                labelPlacement="top"
                onClick={() => setSecretary("Nathaniel Essel")}
              />
            </RadioGroup>

            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                checked={secretary === "Kennedy Asiedu"}
                value="Kennedy Asiedu"
                control={<Radio color="primary" />}
                label="Kennedy Asiedu"
                labelPlacement="top"
                onClick={() => setSecretary("Kennedy Asiedu")}
              />
            </RadioGroup>
          </FormControl>
        </div>
      </Paper>
      <hr />

      {verified ? 
      <Link to="/vote_status" style={{textDecoration: "none"}}>
      <div className="vote" onClick={() => handleSubmit()}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<SaveIcon />}
      >
        confirm
      </Button>
      </div>
      </Link>
      :
        <div className="vote" onClick={() => toggleVerified()}>
          <IconLabelButtons title="vote" />
        </div>
      }


      
    </div>
  );
}

export default President;
