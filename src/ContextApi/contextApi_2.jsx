import React, {createContext,useState} from 'react';

export const AppContextVotes = createContext();


function ContextVotes(props) {
    const [presVote, setPresVote] = useState({
        Manasseh: 0,
        Mohammed: 0,
        Ruby: 0,
        Dinah: 0,
        David: 0,
        Judah: 0

    });

    const [viceVote, setViceVotes] = useState({
        Jonathan: 0,
        Rosemond: 0,
        Joseph: 0,
        George: 0,
        Amanda: 0,
        Jude: 0
    });

    const [srcVote, setSrcVote] = useState({
        Patience: 0,
        Daniel: 0,
        Charlotte: 0,
        Jeremy: 0,
        Lois: 0,
        Kendrick: 0
    });
    
    const [secVote, setSecVote] = useState({
        Mercy: 0,
        Rose: 0,
        Jacob: 0,
        Johnson: 0,
        Nathaniel: 0,
        Kennedy: 0
    });


    return (
        <AppContextVotes.Provider value={{ 
            Pres:[presVote, setPresVote],
            Vice:[viceVote, setViceVotes],
            Src:[srcVote, setSrcVote],
            Sec:[secVote, setSecVote],
            }}>
            {props.children}   
        </AppContextVotes.Provider>
    )
}

export default ContextVotes;
