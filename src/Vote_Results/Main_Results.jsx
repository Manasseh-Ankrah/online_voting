import React from 'react';
import './Main_Results.css';
import Results_Header from './Results_Header';
import Results from './Results';

function Main_Vote() {
    return (
        <div className="main_results">
            <Results_Header />
            <div>
                <div style={{marginBottom: 30,marginTop: 10}}>
                   <Results />
                </div>
            </div>

        </div>
    )
}

export default Main_Vote;
