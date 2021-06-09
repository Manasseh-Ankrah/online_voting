import React, {createContext,useState} from 'react';

export const AppContext = createContext();


function Context(props) {
    const [studentIndex, setStudentIndex] = useState("");
    const [studentBio, setStudentBio] = useState("");

    console.log(studentIndex);
    console.log(studentBio);


   
    return (
        <AppContext.Provider value={{ 
            IndexNumber:[studentIndex,setStudentIndex],
            BioData:[studentBio, setStudentBio]
            }}>
            {props.children}   
        </AppContext.Provider>
    )
}

export default Context;
