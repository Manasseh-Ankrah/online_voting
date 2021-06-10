import React,{useState,useEffect, useContext} from 'react';
import "./Login_Form.css";
import Button from '@material-ui/core/Button';
import {db} from "../config";
import IconLabelButtons from "./Button";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import Positions from '../Vote_Component1/Positions';
import { AppContext } from '../ContextApi/Context';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1.2),
      width: 350,
    },
  },
}));



export default function TextFieldSizes() {
  const classes = useStyles();
  const [studentId,setStudentId] = useState("");
  const {IndexNumber,BioData} = useContext(AppContext);
  const [contextIndex,setContextIndex] = IndexNumber;
  const [contextBio,setContextBio] = BioData;
  const [voted,setVoted] = useState(true);

  const [currentStudent,setCurrentStudent] = useState(
    [
      {"id" : 9},
      {"indexNum" : 13}
    ]
    );

    console.log(contextIndex)

  
useEffect(()=> {
  loadResponse();
},[]);



  const loadResponse = () => {
      try {
        db.collection('index-numbers').onSnapshot((query)=> {
          setCurrentStudent(
            query.docs.map( info => ({
              id: info.id,
              indexNum: info.data().indexNum,
              name: info.data().name,
              isVoted: info.data.isVoted
            }))
          );
        })
      } catch (error) {
      console.log("error occured")
    }
  }


  
    const newIndex = (ITEM) => {
      let results;
    console.log(ITEM);
    console.log(ITEM[0].isVoted);


    //For fetching index numbers from the Database
    results = ITEM.filter((num,studName)=> num.indexNum === parseInt(studentId)); 
    const Data = results.map(index => index.indexNum );
    setContextIndex(Data[0]);

    //For fetching student name from the Database
    const Name = results.map(studName => studName.name );
    setContextBio(Name[0])

    // const voteStatus = results.map(votes => votes.isVoted);
    // console.log(voteStatus)
    // setVoted(false)

    

    

    return Data[0]; 
  }

  // const finalIndex = newIndex(currentStudent);
  // setSendId( newIndex(currentStudent));
  // console.log(sendId);




  
    return (
      <div>
      <form className={classes.root} noValidate autoComplete="off">
        <div className="entryform">
          <TextField
            type= "password"
            label="Enter Id"
            value={studentId}
            onChange={(e)=> setStudentId(e.target.value)}
            variant="outlined"
            size="small"
          />
          
             <div className="entryform__btn">
           <Link  to= {parseInt(studentId)  === newIndex(currentStudent) ? "/main_vote" :"/"} style={{textDecoration: "none"}}>
               <div>
                   <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={()=> parseInt(newIndex(currentStudent))}
                   >
                     Login
                  </Button>
               </div>
           </Link>
         </div>          
        
        </div>
      </form>
      <div style={{display: "none"}}>
         <Positions />
      </div>
         {/* <button onClick={()=> newIndex()}>Login</button> */}
      </div>


    );

  
}
