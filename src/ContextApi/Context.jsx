import React, {createContext,useState} from 'react';

export const AppContext = createContext();


function Context(props) {
    const [studentIndex, setStudentIndex] = useState("");
    const [studentBio, setStudentBio] = useState("");
    const [getId, setGetId] = useState("");
    const [modalAlert, setModalAlert] = useState(false);
    const [currentStudent,setCurrentStudent] = useState(
        [
          {"id" : 9},
          {"indexNum" : 13}
        ]
        );


    return (
        <AppContext.Provider value={{ 
            IndexNumber:[studentIndex,setStudentIndex],
            BioData:[studentBio, setStudentBio],
            StudentObject:[currentStudent,setCurrentStudent],
            IdVal:[getId, setGetId],
            Alert:[modalAlert, setModalAlert]
            }}>
            {props.children}   
        </AppContext.Provider>
    )
}

export default Context;
