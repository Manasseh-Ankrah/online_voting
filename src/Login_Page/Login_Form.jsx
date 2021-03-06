import React, {useState,useEffect, useContext} from 'react';
import "./Login_Form.css";
import Button from '@material-ui/core/Button';
import {db} from "../config";
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import { AppContext } from '../ContextApi/Context';



export default function TextFieldSizes() {
  const [studentId,setStudentId] = useState("");
  const {IndexNumber,BioData,StudentObject,IdVal,Alert} = useContext(AppContext);
  const [contextIndex,setContextIndex] = IndexNumber;
  const [contextBio,setContextBio] = BioData;
  const [voted,setVoted] = useState(true);
  const [contextStudent,setContextStudent] = StudentObject; 
  const [contextId,setContextId] = IdVal; 


useEffect(()=> {
  loadResponse();
},[]);



  const loadResponse = () => {
        db.collection('index-numbers').onSnapshot((query)=> {
          setContextStudent(
            query.docs.map( info => ({
              id: info.id,
              indexNum: info.data().indexNum,
              name: info.data().name,
              Voted: info.data().voted
            }))
          );
        })
  }



    const newIndex = (ITEM) => {
      let results;

    //For fetching index numbers from the Database
    results = ITEM.filter((num,studName)=> num.indexNum === parseInt(studentId)); 
    const Data = results.map(index => index.indexNum );
    setContextIndex(Data[0]);

    //For fetching student name from the Database
    const Name = results.map(studName => studName.name );
    setContextBio(Name[0])

    const voteStatus = results.map(votes => votes.Voted);

    const Id = results.map(ids => ids.id);
    setContextId(Id[0])

    setStudentId("");

    if(voteStatus[0] === true) {
      return alert("You have already voted");
    } else {
      return Data[0]; 
    }

  }


  const Route = (ITEM) => {
    let results;
 
  //For fetching index numbers from the Database
  results = ITEM.filter((num,studName)=> num.indexNum === parseInt(studentId)); 
  const Data = results.map(index => index.indexNum );
  setContextIndex(Data[0]);

  //For fetching student name from the Database
  const Name = results.map(studName => studName.name );
  setContextBio(Name[0])

  const voteStatus = results.map(votes => votes.Voted);

  const Id = results.map(ids => ids.id);
  setContextId(Id[0])

  if(voteStatus[0] === true) {
    return;

  } else {
    return Data[0]; 
  }
}


  
    return (
      <div>
      <form noValidate autoComplete="off">
        <div className="entryform">
          <TextField
            className= "login_form"
            type= "password"
            label="Enter Id"
            value={studentId}
            onChange={(e)=> setStudentId(e.target.value)}
            variant="outlined"
            size="small"
          />
          
             <div className="entryform__btn">
           <Link  to= {parseInt(studentId)  === Route(contextStudent) ? "/main_vote" :"/"} style={{textDecoration: "none"}}>
               <div>
                   <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={()=> parseInt(newIndex(contextStudent))}
                   >
                     Login
                  </Button>
               </div>
           </Link>
         </div>          
        
        </div>
      </form>
      </div>


    );

  
}
